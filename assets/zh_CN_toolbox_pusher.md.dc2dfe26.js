import{_ as e,o as a,c as l,S as r}from"./chunks/framework.4ecef84c.js";const y=JSON.parse('{"title":"推送工具","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/toolbox/pusher.md","filePath":"zh_CN/toolbox/pusher.md"}'),n={name:"zh_CN/toolbox/pusher.md"};function o(d,t,c,s,i,h){return a(),l("div",null,t[0]||(t[0]=[r(`<h1 id="推送工具" tabindex="-1">推送工具 <a class="header-anchor" href="#推送工具" aria-label="Permalink to &quot;推送工具&quot;">​</a></h1><h2 id="推送注册" tabindex="-1">推送注册 <a class="header-anchor" href="#推送注册" aria-label="Permalink to &quot;推送注册&quot;">​</a></h2><p>QD 框架提供多种<a href="#推送方式">推送方式</a>，你可以在 <code>工具箱</code>-&gt;<code>推送注册</code> 中注册不同的推送工具，以便在发生特定事件（例如定时任务执行失败）时向你推送通知。</p><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>推送注册时填写的参数以 <code>;</code> 分隔并连接, 如果参数值为空, 请务必保留该参数位置后的 <code>;</code> , 否则可能导致参数解析错误.</p></div><h3 id="推送注册测试" tabindex="-1">推送注册测试 <a class="header-anchor" href="#推送注册测试" aria-label="Permalink to &quot;推送注册测试&quot;">​</a></h3><p>在 <code>工具箱</code>-&gt;<code>推送注册</code> 中注册推送方式后, 可以点击 <code>测试</code> 按钮来测试推送方式是否可用.</p><p>如果推送方式可用, 则会收到一条推送消息, 否则会提示推送失败.</p><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>进行推送注册测试时, 请确保以下条件已满足:</p><ul><li><p>填写了正确的参数;</p></li><li><p><code>邮箱</code> 和 <code>密码</code> 中填写了 QD 框架的用户邮箱和密码.</p></li></ul></div><h3 id="推送注册前值" tabindex="-1">推送注册前值 <a class="header-anchor" href="#推送注册前值" aria-label="Permalink to &quot;推送注册前值&quot;">​</a></h3><p>在 <code>工具箱</code>-&gt;<code>推送注册</code> 中注册推送方式后, 可以点击 <code>前值</code> 按钮来查看推送注册的前值.</p><div class="tip custom-block"><p class="custom-block-title">提醒</p><p>查看推送注册前值时, 请确保 <code>邮箱</code> 和 <code>密码</code> 中填写了 QD 框架的用户邮箱和密码.</p></div><h2 id="推送方式" tabindex="-1">推送方式 <a class="header-anchor" href="#推送方式" aria-label="Permalink to &quot;推送方式&quot;">​</a></h2><p>QD 框架提供以下推送方式：</p><h3 id="邮件推送" tabindex="-1">邮件推送 <a class="header-anchor" href="#邮件推送" aria-label="Permalink to &quot;邮件推送&quot;">​</a></h3><p>邮件推送无需在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数, 需要在环境变量中配置以下参数：</p><table><thead><tr><th style="text-align:center;">变量名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">MAIL_SMTP</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">邮箱SMTP服务器</td></tr><tr><td style="text-align:center;">MAIL_PORT</td><td style="text-align:center;">否</td><td style="text-align:center;">465</td><td style="text-align:center;">邮箱SMTP服务器端口</td></tr><tr><td style="text-align:center;">MAIL_SSL</td><td style="text-align:center;">否</td><td style="text-align:center;">True</td><td style="text-align:center;">是否使用SSL</td></tr><tr><td style="text-align:center;">MAIL_STARTTLS</td><td style="text-align:center;">否</td><td style="text-align:center;">False</td><td style="text-align:center;">是否使用STARTTLS</td></tr><tr><td style="text-align:center;">MAIL_USER</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">邮箱用户名</td></tr><tr><td style="text-align:center;">MAIL_PASSWORD</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">邮箱密码</td></tr><tr><td style="text-align:center;">MAIL_FROM</td><td style="text-align:center;">否</td><td style="text-align:center;">MAIL_USER</td><td style="text-align:center;">发送时使用的邮箱，默认与MAIL_USER相同</td></tr><tr><td style="text-align:center;">MAIL_DOMAIN_HTTPS</td><td style="text-align:center;">否</td><td style="text-align:center;">False</td><td style="text-align:center;">发送的邮件链接启用HTTPS, <br>非框架前端使用HTTPS, <br>如果前端需要HTTPS, 请使用反向代理.</td></tr></tbody></table><p>如果你使用的是以下邮箱, 参考下方的SMTP开启方式和配置方法来获取你的SMTP服务器地址和端口。</p><table><thead><tr><th style="text-align:center;">邮箱</th><th style="text-align:center;">SMTP开启方式</th><th style="text-align:center;">SMTP配置方法</th><th style="text-align:center;">其他说明</th></tr></thead><tbody><tr><td style="text-align:center;">腾讯企业邮箱</td><td style="text-align:center;"><a href="https://open.work.weixin.qq.com/help2/pc/19886" target="_blank" rel="noreferrer">如何开启腾讯企业邮箱的POP/SMTP/IMAP服务？</a></td><td style="text-align:center;"><a href="https://open.work.weixin.qq.com/help2/pc/19885" target="_blank" rel="noreferrer">常用邮件客户端软件设置</a></td><td style="text-align:center;"><a href="https://open.work.weixin.qq.com/help2/pc/19902" target="_blank" rel="noreferrer">成员如何绑定/关联微信以及开启安全登录获取客户端专用密码？</a></td></tr><tr><td style="text-align:center;">QQ邮箱</td><td style="text-align:center;"><a href="https://service.mail.qq.com/detail/0/428" target="_blank" rel="noreferrer">如何开启QQ邮箱的POP3/SMTP/IMAP服务？</a></td><td style="text-align:center;"><a href="https://service.mail.qq.com/detail/0/310" target="_blank" rel="noreferrer">如何打开POP3/SMTP/IMAP功能？</a></td><td style="text-align:center;"><a href="https://service.mail.qq.com/detail/0/86" target="_blank" rel="noreferrer">开启POP3/SMTP/IMAP功能为什么需要先设置独立密码？</a></td></tr><tr><td style="text-align:center;">网易企业邮箱</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://qiye.163.com/help/client-profile.html" target="_blank" rel="noreferrer">企业邮箱的POP、SMTP、IMAP服务器地址设置。</a></td><td style="text-align:center;"><a href="https://qiye.163.com/help/af988e.html" target="_blank" rel="noreferrer">什么是客户端授权码，如何使用？</a></td></tr><tr><td style="text-align:center;">网易邮箱</td><td style="text-align:center;"><a href="https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac21b87735d7227c217" target="_blank" rel="noreferrer">什么是POP3、SMTP及IMAP？</a></td><td style="text-align:center;"><a href="https://help.mail.163.com/faqDetail.do?code=d7a5dc8471cd0c0e8b4b8f4f8e49998b374173cfe9171305fa1ce630d7f67ac2a5feb28b66796d3b" target="_blank" rel="noreferrer">如何开启客户端协议？</a></td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">Gmail</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://support.google.com/mail/answer/7104828?hl=zh-Hans" target="_blank" rel="noreferrer">如何使用POP3/SMTP/IMAP服务？</a></td><td style="text-align:center;"><a href="https://support.google.com/accounts/answer/185833?hl=zh-Hans" target="_blank" rel="noreferrer">如何使用客户端授权密码？</a></td></tr><tr><td style="text-align:center;">Outlook</td><td style="text-align:center;">-</td><td style="text-align:center;"><a href="https://support.microsoft.com/zh-cn/office/pop-imap-%E5%92%8C-smtp-%E8%AE%BE%E7%BD%AE-8361e398-8af4-4e97-b147-6c6c4ac95353" target="_blank" rel="noreferrer">POP、IMAP 和 SMTP 设置</a></td><td style="text-align:center;"><a href="https://support.microsoft.com/zh-cn/account-billing/%E5%AF%B9%E4%B8%8D%E6%94%AF%E6%8C%81%E5%8F%8C%E9%87%8D%E9%AA%8C%E8%AF%81%E7%9A%84%E5%BA%94%E7%94%A8%E4%BD%BF%E7%94%A8%E5%BA%94%E7%94%A8%E5%AF%86%E7%A0%81-5896ed9b-4263-e681-128a-a6f2979a7944" target="_blank" rel="noreferrer">对不支持双重验证的应用使用应用密码</a></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">MailGun</p><p>如果您配置了 MailGun, 请在环境变量中配置以下参数：</p><table><thead><tr><th style="text-align:center;">变量名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">MAILGUN_KEY</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">MailGun API Key</td></tr><tr><td style="text-align:center;">MAILGUN_DOMAIN</td><td style="text-align:center;">是</td><td style="text-align:center;">DOMAIN</td><td style="text-align:center;">MailGun Domain, <br>默认为环境变量中的 DOMAIN 值, <br>请在环境变量中配置 DOMAIN 值, <br>并在 MailGun 控制台中设置对应的 Domain, <br>否则无法使用 MailGun</td></tr></tbody></table></div><h3 id="bark-推送" tabindex="-1">Bark 推送 <a class="header-anchor" href="#bark-推送" aria-label="Permalink to &quot;Bark 推送&quot;">​</a></h3><p>Bark 推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">BarkUrl</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">Bark 推送地址, <br>格式为 <code>https://api.day.app/推送码</code>, <br>推送码可在 Bark 客户端中获取, <br>如果你使用的是自建 Bark 服务, <br>请将 <code>https://api.day.app/</code> 替换为你的 Bark 服务地址 .<br>例如: <code>http://bark.example.com/推送码</code></td></tr></tbody></table><h3 id="server-酱推送" tabindex="-1">Server 酱推送 <a class="header-anchor" href="#server-酱推送" aria-label="Permalink to &quot;Server 酱推送&quot;">​</a></h3><p>Server 酱推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">skey</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">Server 酱推送 SCKEY, <br>可在 <a href="https://sct.ftqq.com/sendkey" target="_blank" rel="noreferrer">Server 酱</a> 中获取对应的 SendKey</td></tr></tbody></table><h3 id="telegram-bot-推送" tabindex="-1">Telegram Bot 推送 <a class="header-anchor" href="#telegram-bot-推送" aria-label="Permalink to &quot;Telegram Bot 推送&quot;">​</a></h3><p>Telegram Bot 推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">TG_TOKEN</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">Telegram Bot Token, <br>可在 <a href="https://t.me/BotFather" target="_blank" rel="noreferrer">BotFather</a> 中获取, <br>应当为 Bot 的 ID 以及对应的 Key 的组合，但是不包括 <code>bot</code>, <br>即 token 形式：<code>1111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</code></td></tr><tr><td style="text-align:center;">TG_USERID</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">Telegram Chat ID, <br>可在 <a href="https://api.telegram.org/bot1111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/getUpdates" target="_blank" rel="noreferrer">Telegram API</a> 中获取, <br>Telegram API中的 <code>chat_id</code> 字段，如 <code>222222222</code></td></tr><tr><td style="text-align:center;">TG_HOST</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">Telegram API Host, <br>可为域名或IP地址, <br>例如 <code>tg.mydomain.com</code>, <br>也可以带上 <code>http://</code> 或者 <code>https://</code> 前缀, <br>如果留空, 则使用默认值 <code>api.telegram.org</code></td></tr><tr><td style="text-align:center;">PROXY_URL</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">Proxy 代理地址, <br>格式为 <code>scheme://username:password@host:port</code>, <br>例如 <code>http://user:password@host:port</code>, <br>如果留空, 则不使用 Proxy 代理</td></tr><tr><td style="text-align:center;">PUSH_PIC_URL</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义推送图片地址, <br>如果留空, 则使用环境变量 <code>PUSH_PIC_URL</code> 值</td></tr></tbody></table><details class="details custom-block"><summary>示例</summary><p>假设你已经创建了一个具有自定义域名的 Telegram Bot API:</p><p><code>https://tg.mydomain.com/bot1111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/sendMessage?chat_id=222222222&amp;text=HelloWorld</code></p><p>上面这个请求将会向<code>222222222</code>这个聊天发送一条<code>HelloWorld</code>消息, 那么在注册 Telegram Bot 作为推送方式时：</p><ul><li><code>TG_TOKEN</code> 为<code>1111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</code></li><li><code>TG_USERID</code> 为 <code>222222222</code></li><li><code>TG_HOST</code> 为 <code>tg.mydomain.com</code></li></ul><p>因此最终填写形式形如：</p><div class="language-Text"><button title="Copy Code" class="copy"></button><span class="lang">Text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">1111111111:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA;222222222;tg.mydomain.com</span></span></code></pre></div></details><h3 id="钉钉推送" tabindex="-1">钉钉推送 <a class="header-anchor" href="#钉钉推送" aria-label="Permalink to &quot;钉钉推送&quot;">​</a></h3><p>钉钉推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">DINGDING_TOKEN</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">钉钉推送 Token, <br>可在 <a href="https://open.dingtalk.com/document/robots/custom-robot-access" target="_blank" rel="noreferrer">自定义机器人接入</a> 中获取, <br>如果你在 <code>安全设置</code> 中设置了 <code>IP地址段</code> , <br>请将 QD 服务器的 IP 地址添加到 <code>IP地址段</code> 中, <br>否则无法接收到推送消息; <br>如果你在 <code>安全设置</code> 中设置了 <code>自定义关键词</code> , <br>请将 <code>QD</code>/<code>推送</code>/<code>测试</code> 添加到 <code>自定义关键词</code> 中, <br>否则无法接收到推送消息; <br>请勿在 <code>安全设置</code> 中开启 <code>加签</code>, QD 框架暂不支持钉钉加签推送.</td></tr><tr><td style="text-align:center;">PUSH_PIC_URL</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义推送图片地址, <br>如果留空, 则使用环境变量 <code>PUSH_PIC_URL</code> 值</td></tr></tbody></table><h3 id="wxpusher-推送" tabindex="-1">WXPusher 推送 <a class="header-anchor" href="#wxpusher-推送" aria-label="Permalink to &quot;WXPusher 推送&quot;">​</a></h3><p>WXPusher 推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">APPTOKEN</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">WXPusher 推送 Token, <br>可在 <a href="https://wxpusher.zjiecode.com/docs/#/?id=%e8%8e%b7%e5%8f%96apptoken" target="_blank" rel="noreferrer">WXPusher</a> 中获取</td></tr><tr><td style="text-align:center;">WxPusher_UID</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">WXPusher 推送 UID, <br>可在 <a href="https://wxpusher.zjiecode.com/docs/#/?id=%e8%8e%b7%e5%8f%96uid" target="_blank" rel="noreferrer">WXPusher</a> 中获取</td></tr></tbody></table><h3 id="企业微信应用推送" tabindex="-1">企业微信应用推送 <a class="header-anchor" href="#企业微信应用推送" aria-label="Permalink to &quot;企业微信应用推送&quot;">​</a></h3><p>企业微信应用推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">CorpID</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">企业微信 CorpID, <br>可在 <a href="https://developer.work.weixin.qq.com/document/path/98728" target="_blank" rel="noreferrer">企业微信</a> 中获取</td></tr><tr><td style="text-align:center;">AgentID</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">企业微信应用 AgentID, <br>可在 <a href="https://developer.work.weixin.qq.com/document/path/90665#agentid" target="_blank" rel="noreferrer">企业微信</a> 中获取</td></tr><tr><td style="text-align:center;">AgentSecret</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">企业微信应用 Secret, <br>可在 <a href="https://developer.work.weixin.qq.com/document/path/90665#secret" target="_blank" rel="noreferrer">企业微信</a> 中获取</td></tr><tr><td style="text-align:center;">PUSH_PIC_URL_or_Media_id</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义推送图片地址或 Media_id, <br>Media_id 可以通过 <a href="https://developer.work.weixin.qq.com/document/path/90253#10112" target="_blank" rel="noreferrer">企业微信</a> 接口获取, <br>如果留空, 则使用环境变量 <code>PUSH_PIC_URL</code> 值</td></tr><tr><td style="text-align:center;">QYWX_PROXY_HOST</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">企业微信 Host, <br>可为域名或IP地址, <br>例如 <code>qywx.mydomain.com</code>, <br>也可以带上 <code>http://</code> 或者 <code>https://</code> 前缀, <br>如果留空, 则使用默认值 <code>https://qyapi.weixin.qq.com/</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">QYWX_PROXY_HOST</p><p>如果你使用 Nginx 代理企业微信应用推送, 以下为 Nginx 配置示例:</p><div class="language-Nginx"><button title="Copy Code" class="copy"></button><span class="lang">Nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">server</span><span style="color:#BABED8;"> {</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#BABED8;">443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#BABED8;">qywx.mydomain.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> ssl_certificate </span><span style="color:#BABED8;">/etc/nginx/ssl/qywx.mydomain.com/fullchain.cer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> ssl_certificate_key </span><span style="color:#BABED8;">/etc/nginx/ssl/qywx.mydomain.com/private.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> ssl_session_timeout </span><span style="color:#BABED8;">5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> ssl_protocols </span><span style="color:#BABED8;">TLSv1 TLSv1.1 TLSv1.2 TLSv1.3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> ssl_ciphers </span><span style="color:#BABED8;">ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">   </span><span style="color:#89DDFF;"> ssl_prefer_server_ciphers </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">location</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#BABED8;">{</span></span>
<span class="line"><span style="color:#BABED8;">       </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#BABED8;">https://qyapi.weixin.qq.com/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre></div></div><h3 id="企业微信-webhook-推送" tabindex="-1">企业微信 Webhook 推送 <a class="header-anchor" href="#企业微信-webhook-推送" aria-label="Permalink to &quot;企业微信 Webhook 推送&quot;">​</a></h3><p>企业微信 Webhook 推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">QYWX_WebHook_Key</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">企业微信 Webhook Key, <br>可在 <a href="https://work.weixin.qq.com/api/doc/90000/90136/91770" target="_blank" rel="noreferrer">企业微信</a> 中获取</td></tr></tbody></table><h3 id="自定义推送" tabindex="-1">自定义推送 <a class="header-anchor" href="#自定义推送" aria-label="Permalink to &quot;自定义推送&quot;">​</a></h3><p>自定义推送支持 <code>GET</code> 和 <code>POST</code> 推送方式, 使用 <code>{log}</code> 和 <code>{t}</code> 表示要替换的日志和标题.</p><p>自定义推送需要在 <code>工具箱</code>-&gt;<code>推送注册</code> 中设置参数：</p><h4 id="自定义-get-推送" tabindex="-1">自定义 Get 推送 <a class="header-anchor" href="#自定义-get-推送" aria-label="Permalink to &quot;自定义 Get 推送&quot;">​</a></h4><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">URL</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义 Get 推送地址, <br>例如 <code>https://example.com/push?log={log}&amp;t={t}</code></td></tr><tr><td style="text-align:center;">GET_Header</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义 Get 推送 Header, <br>使用 json 格式(半角双引号), 格式为 <code>{ &quot;key1&quot;: &quot;value1&quot;, &quot;key2&quot;: &quot;value2&quot; }</code>, <br>如果留空, 则不设置 Header</td></tr></tbody></table><h4 id="自定义-post-推送" tabindex="-1">自定义 Post 推送 <a class="header-anchor" href="#自定义-post-推送" aria-label="Permalink to &quot;自定义 Post 推送&quot;">​</a></h4><table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">是否必须</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">URL</td><td style="text-align:center;">是</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义 Post 推送地址, <br>例如 <code>https://example.com/push</code></td></tr><tr><td style="text-align:center;">POST_Header</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义 Post 推送 Header, <br>使用 json 格式(半角双引号), 格式为 <code>{ &quot;key1&quot;: &quot;value1&quot;, &quot;key2&quot;: &quot;value2&quot; }</code>, <br>如果留空, 则不设置 Header</td></tr><tr><td style="text-align:center;">POST_Data</td><td style="text-align:center;">否</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">自定义 Post 推送 Body, <br>使用 json 格式(半角双引号), <br>例如 <code>{ &quot;key1&quot;: &quot;{log}&quot;, &quot;key2&quot;: &quot;{t}&quot; }</code>, <br>如果留空, 则不设置 Body</td></tr></tbody></table><h2 id="推送设置" tabindex="-1">推送设置 <a class="header-anchor" href="#推送设置" aria-label="Permalink to &quot;推送设置&quot;">​</a></h2><p>在 <code>工具箱</code>-&gt;<code>推送注册</code> 中注册推送方式后, 可以在 <code>工具箱</code>-&gt;<code>推送设置</code> 中设置推送方式的触发条件.</p><p>在 <code>推送设置</code> 中, 可以设置每个任务的推送开关, 任务结果推送渠道, 任务结果通知选择, 任务结果批量推送等.</p><h3 id="任务结果推送渠道" tabindex="-1">任务结果推送渠道 <a class="header-anchor" href="#任务结果推送渠道" aria-label="Permalink to &quot;任务结果推送渠道&quot;">​</a></h3><p>用于设置任务结果推送渠道, 任务结果推送渠道包括以下几种:</p><ul><li><a href="#bark-推送">Bark 推送</a></li><li><a href="#server-酱推送">Server 酱推送</a></li><li><a href="#wxpusher-推送">WXPusher 推送</a></li><li><a href="#邮件推送">邮件推送</a></li><li><a href="#企业微信应用推送">企业微信应用推送</a></li><li><a href="#telegram-bot-推送">Telegram Bot 推送</a></li><li><a href="#钉钉推送">钉钉推送</a></li><li><a href="#企业微信-webhook-推送">企业微信 Webhook 推送</a></li><li><a href="#自定义推送">自定义推送</a></li></ul><h3 id="任务结果通知选择" tabindex="-1">任务结果通知选择 <a class="header-anchor" href="#任务结果通知选择" aria-label="Permalink to &quot;任务结果通知选择&quot;">​</a></h3><p>用于设置在何时推送任务结果, 任务结果通知选择包括以下几种:</p><ul><li>手动执行成功通知</li><li>手动执行失败通知</li><li>自动执行成功通知</li><li>自动执行失败通知</li></ul><p><code>自动错误几次后提醒</code> 可以设置在自动执行失败几次后推送通知, 例如设置为 <code>3</code> , 则当自动执行失败 3 次后, 会推送通知.</p><h3 id="任务结果批量推送" tabindex="-1">任务结果批量推送 <a class="header-anchor" href="#任务结果批量推送" aria-label="Permalink to &quot;任务结果批量推送&quot;">​</a></h3><p>当 <code>开启定期批量推送</code> 时, 会根据 <code>批量推送时间设置</code> 和 <code>批量推送时间间隔</code> 来批量推送距离本次推送时间前指定时间间隔内的任务结果.</p><ul><li><p><code>批量推送时间设置</code>: 初次批量推送时间设置, 例如设置为 <code>12:00:00</code> , 则会在当天的 <code>12:00:00</code> 进行一次批量推送.</p></li><li><p><code>批量推送时间间隔</code>: 设置每隔多少秒推送一次任务结果, 默认为 <code>86400</code> 秒, 即每隔一天批量推送本次推送时间前86400秒内的任务结果.</p></li></ul>`,62)]))}const g=e(n,[["render",o]]);export{y as __pageData,g as default};
