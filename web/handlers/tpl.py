#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# vim: set et sw=4 ts=4 sts=4 ff=unix fenc=utf8:
# Author: Binux<i@binux.me>
#         http://binux.me
# Created on 2014-08-09 17:52:49

import json
import traceback
from codecs import escape_decode

from tornado import gen

from libs import utils
from libs.parse_url import parse_url

from .base import *


class TPLPushHandler(BaseHandler):
    @tornado.web.authenticated
    async def get(self, tplid):
        user = self.current_user
        tpl = await self.db.tpl.get(tplid, fields=('id', 'userid', 'sitename'))
        if not self.permission(tpl, 'w'):
            self.evil(+5)
            await self.finish(u'<span class="alert alert-danger">没有权限</span>')
            return
        tpls = await self.db.tpl.list(userid=None, limit=None, fields=('id', 'sitename', 'public'))
        for i in range(len(tpls)):
            if tpls[i]['public'] == 2:
                tpls[i]['sitename'] += u' [已取消]'
        await self.render('tpl_push.html', tpl=tpl, tpls=tpls)

    @tornado.web.authenticated
    async def post(self, tplid):
        user = self.current_user
        tplid = int(tplid)
        async with self.db.transaction() as sql_session:
            tpl = await self.db.tpl.get(tplid, fields=('id', 'userid', ), sql_session=sql_session)
            if not self.permission(tpl, 'w'):
                self.evil(+5)
                await self.finish(u'<span class="alert alert-danger">没有权限</span>')
                return

            to_tplid = int(self.get_argument('totpl'))
            msg = self.get_argument('msg')
            if to_tplid == 0:
                to_tplid = None
                to_userid = None
            else:
                totpl = await self.db.tpl.get(to_tplid, fields=('id', 'userid', ), sql_session=sql_session)
                if not totpl:
                    self.evil(+1)
                    await self.finish(u'<span class="alert alert-danger">模板不存在</span>')
                    return
                to_userid = totpl['userid']

            await self.db.push_request.add(from_tplid=tpl['id'], from_userid=user['id'],
                                           to_tplid=to_tplid, to_userid=to_userid, msg=msg, sql_session=sql_session)
            await self.db.tpl.mod(tpl['id'], lock=True, sql_session=sql_session)

        self.redirect('/pushs')


class TPLVarHandler(BaseHandler):
    async def get(self, tplid):
        user = self.current_user
        tpl = await self.db.tpl.get(tplid, fields=('id', 'note', 'userid', 'sitename', 'siteurl', 'variables', 'init_env'))
        if not self.permission(tpl):
            self.evil(+5)
            await self.finish('<span class="alert alert-danger">没有权限</span>')
            return
        if not tpl['init_env']:
            tpl['init_env'] = '{}'
        await self.render('task_new_var.html', tpl=tpl, variables=json.loads(tpl['variables']), init_env=json.loads(tpl['init_env']))


class TPLDelHandler(BaseHandler):
    @tornado.web.authenticated
    async def post(self, tplid):
        user = self.current_user
        async with self.db.transaction() as sql_session:
            tpl = self.check_permission(await self.db.tpl.get(tplid, fields=('id', 'userid'), sql_session=sql_session), 'w')
            await self.db.tpl.delete(tplid, sql_session=sql_session)

        self.redirect('/my/')


class TPLRunHandler(BaseHandler):
    async def post(self, tplid):
        self.evil(+5)
        user = self.current_user
        data = {}
        try:
            if 'json' in self.request.headers['Content-Type']:
                self.request.body = self.request.body.replace(
                    b'\xc2\xa0', b' ')
                data = json.loads(self.request.body)
        except Exception as e:
            logger_web_handler.debug('TPLRunHandler post error: %s' % e)

        tplid = tplid or data.get(
            'tplid') or self.get_argument('_binux_tplid', None)
        tpl = dict()
        fetch_tpl = None
        async with self.db.transaction() as sql_session:
            if tplid:
                tpl = self.check_permission(await self.db.tpl.get(tplid, fields=('id', 'userid', 'sitename',
                                                                                 'siteurl', 'tpl', 'interval', 'last_success'), sql_session=sql_session))
                fetch_tpl = await self.db.user.decrypt(tpl['userid'], tpl['tpl'], sql_session=sql_session)

            if not fetch_tpl:
                fetch_tpl = data.get('tpl')

            if not fetch_tpl:
                try:
                    fetch_tpl = json.loads(self.get_argument('tpl'))
                except:
                    if not user:
                        return await self.render('tpl_run_failed.html', log="请先登录!")
                    raise HTTPError(400)

            env = data.get('env')
            if not env:
                try:
                    env = dict(
                        variables=json.loads(self.get_argument('env')),
                        session=[]
                    )
                except:
                    raise HTTPError(400)

            try:
                url = parse_url(env['variables'].get('_binux_proxy'))
                if url:
                    proxy = {
                        'scheme': url['scheme'],
                        'host': url['host'],
                        'port': url['port'],
                        'username': url['username'],
                        'password': url['password']
                    }
                    result, _ = await self.fetcher.do_fetch(fetch_tpl, env, [proxy])
                elif self.current_user:
                    result, _ = await self.fetcher.do_fetch(fetch_tpl, env)
                else:
                    result, _ = await self.fetcher.do_fetch(fetch_tpl, env, proxies=[])
            except Exception as e:
                if config.traceback_print:
                    traceback.print_exc()
                await self.render('tpl_run_failed.html', log=str(e))
                if user:
                    logger_web_handler.error('UserID:%d tplID:%d failed! \r\n%s', user.get(
                        'id', -1) or -1, int(tplid or -1), str(e).replace('\\r\\n', '\r\n'))
                return

            if tpl:
                await self.db.tpl.incr_success(tpl['id'], sql_session=sql_session)
        await self.render('tpl_run_success.html', log=result.get('variables', {}).get('__log__'))
        return


class PublicTPLHandler(BaseHandler):
    async def get(self):
        tpls = await self.db.tpl.list(userid=None, public=1, limit=None, fields=('id', 'siteurl', 'sitename', 'banner', 'note', 'disabled', 'lock', 'last_success', 'ctime', 'mtime', 'fork', 'success_count'))
        tpls = sorted(tpls, key=lambda t: -t['success_count'])

        await self.render('tpls_public.html', tpls=tpls)


class TPLGroupHandler(BaseHandler):
    @tornado.web.authenticated
    async def get(self, tplid):
        user = self.current_user
        groupNow = (await self.db.tpl.get(tplid, fields=('_groups',)))['_groups']
        tasks = []
        _groups = []
        tpls = await self.db.tpl.list(userid=user['id'], fields=('_groups',), limit=None)
        for tpl in tpls:
            temp = tpl['_groups']
            if (temp not in _groups):
                _groups.append(temp)

        await self.render('tpl_setgroup.html', tplid=tplid, _groups=_groups, groupNow=groupNow)

    @tornado.web.authenticated
    async def post(self, tplid):
        envs = {}
        for key in self.request.body_arguments:
            envs[key] = self.get_body_arguments(key)
        New_group = envs['New_group'][0].strip()

        if New_group != "":
            target_group = New_group
        else:
            for value in envs:
                if envs[value][0] == 'on':
                    target_group = escape_decode(
                        value.strip()[2:-1], "hex-escape")[0].decode('utf-8')
                    break
                else:
                    target_group = 'None'

        await self.db.tpl.mod(tplid, _groups=target_group)

        self.redirect('/my/')


handlers = [
    ('/tpl/(\d+)/push', TPLPushHandler),
    ('/tpl/(\d+)/var', TPLVarHandler),
    ('/tpl/(\d+)/del', TPLDelHandler),
    ('/tpl/?(\d+)?/run', TPLRunHandler),
    ('/tpls/public', PublicTPLHandler),
    ('/tpl/(\d+)/group', TPLGroupHandler),
]
