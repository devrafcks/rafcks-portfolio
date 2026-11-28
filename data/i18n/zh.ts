import type { ContentText } from "./types";

/**
 * 简体中文长内容。列表顺序与 data/ 中的葡萄牙语文件一致。
 * 图片的替代文本不在这里翻译，沿用英文版。
 */
export const zh: ContentText = {
  projects: {
    t2: {
      summary: "T2 Educação 的官网，包含金融证书备考课程、企业专区和落地页。用 Next.js 16 重建，重点关注性能、SEO 和转化。",
      points: [
        "T2 帮助从业者备考 CPA、C-Pro 等金融市场证书。网站需要加载快、在 Google 上排名好，并把访客一路带到报名；之前它依赖一个可视化建站工具。",
        "我用 Next.js 16（App Router）、React 19 和 Tailwind CSS 4 重建了网站，包括课程页、证书页、企业专区以及活动落地页。",
        "我负责 Core Web Vitals、技术 SEO、无障碍、GSAP 和 Three.js 动画，以及 GA4 中的转化和结账追踪。网站使用 Supabase 和 Resend，域名经由 Cloudflare。",
        "我是公司的技术负责人开发者。截图只展示公开页面，内部 Hub、集成和学员平台不在其中。",
      ],
    },
    "t2-blog": {
      summary: "T2 的公开博客，发布关于金融证书、职业和市场的文章与指南，为手机阅读和 Google 搜索而打造。",
      points: [
        "博客是 T2 最主要的自然流量来源，需要扎实的技术 SEO、舒适的手机阅读体验，以及团队简单的发布流程。",
        "前端用 Next.js 构建，Ghost 作为无头 CMS。首页推荐 C-Pro R 考试等话题，每篇文章都显示作者和日期。",
        "技术 SEO 和 GA4 追踪每一篇文章。截图只包含公开的编辑内容。",
      ],
    },
    "t2-docs": {
      title: "T2 免费学习资料",
      summary: "为 CPA、C-Pro、CFP、ANCORD 等金融证书提供免费讲义、模拟题和总结的门户，基于 Next.js 和无头 Ghost。",
      points: [
        "T2 为备考人员提供免费资料。门户按证书整理讲义、模拟题和总结，便于浏览，也方便在 Google 上找到。",
        "我用 Next.js 构建门户，以无头方式从 Ghost 拉取内容，团队无需改代码就能发布。",
        "发布的资料都是学习内容，门户上不显示任何学员数据。",
      ],
    },
    mirante: {
      summary: "多公司 ERP，包含收银、与 SEFAZ 对接的 NF-e（巴西电子发票）、带对账的财务、库存、采购，以及用于 Pix 和 boleto 的 K8 Pay。这是我做过最大的系统。",
      points: [
        "中小企业常常把销售、库存、采购和财务分散在不同工具里。Mirante 把这些整合到一个系统中，同一账户可管理多家公司和分店，顶部可切换单位。",
        "销售：带支付和结账的收银台、带销售员的订单和报价。库存：低于最低库存或为负的商品看板、商品目录、价格、分类和服务。",
        "税务与采购：用 A1 证书对接 SEFAZ 开具和管理 NF-e，已收发票面板及确认，带审批或驳回的采购申请，以及通过 XML、NF-e 密钥或手动收货。",
        "财务：应付与应收、开关收银、带流水和对账的银行账户、预付款、分期重新协商、成本中心和会计科目。我还把 K8 Fintech 的网关 K8 Pay 接入 ERP，用 Pix 和 boleto 收款。",
        "管理：包含 KPI、同比收入和销售预测的看板，客户、供应商和员工的统一档案，用户与权限，可导出的审计日志，Ctrl+K 全局搜索与快捷操作，以及主题、密度和动画的自定义。",
        "我在 ByStartup 用大约三个月完成了这个系统。产品想法来自客户，原型、产品设计、全栈开发和基础设施由我负责，从前端到数据库、集成和部署。截图来自使用虚构数据的测试账户。",
      ],
    },
    carretel: {
      summary: "我自己的 SaaS，面向缝纫工坊：记录裁片、证明交付，并能在手机上用 Pix 收款，即使信号很弱。支持葡萄牙语和西班牙语双语。",
      points: [
        "缝纫工坊的老板，很多来自圣保罗的玻利维亚社区，用本子和 WhatsApp 记录裁片、交付和付款。一旦在数量或价格上有分歧，就没有任何凭证。Carretel 用三个动作解决：记录、证明、收款。",
        "记录：收到的裁片附照片、语音输入的数量和价格、尺码表、交期和辅料，生产按人员、工序和机器记录。证明：公开链接显示照片、尺码表、金额和验证码，客户无需注册即可通过 WhatsApp 确认。确认会保存时间、浏览器和 IP，并在数据库中不可更改。",
        "收款：页面显示谁欠款、欠了多少天，生成带 Pix Copia e Cola 和二维码（项目中自行实现 CRC16 的 BR Code）的 WhatsApp 消息，支持全额或部分付款。还有带双语收据的周结算、每件合理价格计算器、按 LGPD 导出数据和删除账户。",
        "应用离线优先：操作进入 IndexedDB 中的幂等队列，信号恢复后同步，支持 Service Worker 和 PWA 安装。它是多租户的，按工坊隔离，并用真实的 Postgres 测试。",
        "订阅通过 AbacatePay，Webhook 用 HMAC-SHA256 验证。界面遵循 WCAG 2.2 AA，有大号触控区域并内置 SeeB，项目包含 Vitest 测试、fast-check 属性测试，以及 Playwright 和 axe 的无障碍测试。",
        "这是我自己的产品，从想法到规格、设计和代码。目前处于预发布阶段。",
      ],
    },
    gatelite: {
      summary: "从上方看今天的地球：选一个地点，查看当天的卫星图、经过上空的卫星、自 2000 年以来的变化，以及附近此刻正在发生的事。全部使用 NASA 开放数据，无需登录，也没有数据库。",
      points: [
        "名字结合了 gato（猫）和 satélite（卫星）。NASA 的卫星图像是开放的，但分散在各种技术门户里。Gatélite 把它们汇集到一个网站，给想从上方看看自己街区、城市或整个地球的人。",
        "探索：一个地球仪，显示 NASA 卫星（VIIRS 和 MODIS）的每日拼接图、30 米分辨率的 Landsat 和 Sentinel、红外、夜间灯光、温度和烟雾。当缩放超出当天图像能显示的范围时，地图会自动切换到高分辨率图层，能看清房屋、街区和基督像。整个视图都保存在 URL 中。",
        "“天气”标签并排显示该地点最近 14 天，并根据图像颜色估算每天的云量，附带日出日落时间。14 颗卫星在过去和未来 24 小时内的过境在浏览器中计算，使用 Web Worker 中的 SGP4。还有自 2001 年以来同一天的延时动画，以及可拖动帘幕的前后对比。",
        "此刻的地球：昼夜实时移动的世界地图、城市灯光、实时卫星舰队、正在发生的自然事件（火灾、风暴、火山和冰山），以及 EPIC 相机在 150 万公里外拍摄的照片。",
        "没有账户也没有数据库：URL 保存视图，设备保存收藏的地点，服务器只缓存外部 API。领域逻辑（轨道、云、太阳和事件）由用 Vitest 测试的纯规则组成。这是 MIT 许可的开源个人项目，与 NASA 没有官方关系。",
      ],
    },
    cresce: {
      summary: "面向微型和小型企业的管理 SaaS。我用 Next.js 16 重写了产品，并把基础设施迁到 Neon 和 Vercel。",
      points: [
        "Cresce+ 的 SaaS 帮微型和小型企业管理库存、销售、任务和员工。旧版本分散在 Azure、Railway 和 Hostinger 上，维护成本高，也难以迭代。",
        "我用 App Router 和 Tailwind CSS 以全栈 Next.js 16 重写了应用，加入身份验证和 Mercado Pago 支付。",
        "我把数据库迁到 Neon PostgreSQL，把应用迁到 Vercel，并统一了域名。",
        "我还做了这家咨询公司的官网，它有单独的卡片。",
      ],
    },
    xerox: {
      summary: "面向复印店的生产系统，用数字录入、自动库存和 Excel、PDF 报表取代了纸质收银单和电子表格。",
      points: [
        "很多复印店把每单活写在纸条上，一天结束时再在表格里汇总。这会导致错误、历史丢失，也没有库存控制。Xerox Manager 用一个简单、可追溯的实时系统取代了这一流程。",
        "员工输入商品编码，名称和价格自动填入。调整数量和价格后确认，库存自动扣减。修改和删除只允许在当天进行。",
        "管理员管理员工、商品和库存，有低库存提醒和手动调整，并按时间段生成报表，包括每位员工的产量和库存消耗，可导出为三个工作表的 Excel 和 PDF。",
        "安全方面很用心：密码使用 bcrypt，JWT 会话存放在 httpOnly Cookie 中并配有可失效的会话表，每个 Server Action 都检查权限，筛选条件用 Zod 校验。",
        "这是一个演示版本，逻辑与生产环境中使用的系统相同。从数据库到界面都由我完成，并集成了 SeeB。",
      ],
    },
    somnus: {
      summary: "记录睡眠时长、发现规律的应用：平均值、最好和最差的一晚以及趋势图，每位用户独立账户，内置无障碍功能。",
      points: [
        "想睡得更好的人需要简单而持续的数据，而不是塞满用不上功能的应用。Somnus 只把一件事做好：记录和分析睡眠时长。",
        "流程很直接：登录、记录当晚、查看分析。看板显示平均睡眠、最好和最差的一晚、完整历史和趋势图。",
        "身份验证使用 Clerk，每个人只能看到自己的数据。后端运行在 Next.js Server Actions 上，借助 Prisma 和 Neon 上的 PostgreSQL 实现端到端类型安全。",
        "无障碍从一开始就是要求，并集成了 SeeB。我独立完成了这个项目，从数据库到 Vercel 上的部署。",
      ],
    },
    bicus: {
      summary: "面向本地服务、商品、租赁和店铺的应用，带地图、聊天，以及可用 Pix、银行卡或 boleto 付费的置顶信息。已上架 App Store、Google Play 和网页版。",
      points: [
        "Bicus 把城市里的服务、商品、租赁和店铺汇集到一个应用中，支持按距离搜索，卖家经过认证。",
        "应用在地图上展示信息，支持选择位置和搜索地址，并有应用内聊天，可直接与卖家沟通。",
        "卖家可以置顶信息。付款通过 Mercado Pago，支持 Pix、银行卡或 boleto，确认后置顶会自动开启。应用不接收也不存储任何银行卡数据。",
        "一套 Expo 和 React Native 代码同时生成 iOS、Android 应用和网页版。产品想法来自客户，原型、产品、全栈开发和基础设施由我负责。",
      ],
    },
    apertou: {
      summary: "让实体店通过手机销售的交易平台，包含应用、商家后台和管理后台。支持 Pix 或银行卡、按店铺自动分账，以及先试后买的订单。",
      points: [
        "社区小店因为不在顾客手机里而错失销售，自建电商又很贵。Apertou Comprou 把这些店铺放进一个本地交易平台，支持送货上门或到店自取。",
        "顾客通过应用或网站购物，在聊天中与店铺沟通，还可以下试穿订单，先试再付款。支付方式为 Pix 或银行卡。",
        "每家店在 Pagar.me 有收款账户，每笔销售金额自动分账并转入商家的银行账户。后台会引导填写银行信息，信息完整之前店铺无法上线。",
        "产品分为三部分：顾客应用、商家后台和带统计图表的平台管理后台。想法来自客户，原型、产品、全栈开发和基础设施由我完成。",
      ],
    },
    junto: {
      summary: "帮你找到附近由真实用户发起的开放跑步活动的应用和网站。可以看到谁会去、确认参加，也能发起自己的跑步。已上线网页版、Google Play 和 App Store。",
      points: [
        "一个人跑步容易泄气，在群聊里约跑也不一定成功。Junto 展示附近由真实用户发起的开放跑步。产品的口号是：找个人，一起跑。",
        "你可以看到谁会去、确认参加、加入跑步群聊、在集合点签到，并发起自己的跑步，设定地点、日期和配速。跑步按街区和时间展示，还有仅限女性的筛选。应用免费，无需绑卡。",
        "页面介绍了约跑的安全措施：身份认证、公开的参与者名单、与信任的人实时共享位置、自动签退和紧急按钮。跑团和训练团队有主页、日程和开放跑步。测试版已在里约热内卢开放。",
        "在 App Store 和 Google Play 上，应用名为“junto: companhia para correr”。产品想法来自客户，原型、产品、全栈开发和基础设施都是我的工作。",
      ],
    },
    voxx: {
      summary: "伊塔佩蒂宁加数字营销机构 Agência Voxx 的网站，使用 Framer Motion 动画，并有可发送邮件的联系表单。",
      points: [
        "机构需要一个网站，以交付给客户同样的视觉品质展示作品，同时在手机上不显得沉重。",
        "页面介绍策划、社交媒体、视觉识别和付费推广，进场和滚动动画用 Framer Motion 制作。",
        "我用 Next.js 16（App Router）、Tailwind CSS 和 Google 字体（Besley 和 DM Sans）构建。表单通过 Resend 和 Nodemailer 发送邮件，Google Analytics 通过 @next/third-parties 接入。",
      ],
    },
    jotape: {
      summary: "正品手表电商，作为自由职业项目完成：按品牌分类、搜索、通过 Mercado Pago 用 Pix 或银行卡结账、订单追踪和 WhatsApp。",
      points: [
        "一家正品手表店需要自己的电商，让顾客随时自助购买。",
        "商品按品牌分类，有搜索、商品页和购物车。支付在网站内完成，支持 Pix 或信用卡，由 Mercado Pago 处理。",
        "顾客在网站上追踪订单，并通过 WhatsApp 与店铺沟通。商店也可以作为应用安装到手机上。商店的想法是我提出的，其余也都由我完成：原型、产品、全栈开发和基础设施。",
      ],
    },
    seeb: {
      summary: "在毕业设计中创建的开源无障碍组件和浏览器扩展。只需一行脚本，任何网站都能获得对比度、色盲滤镜、语音朗读等功能，且不收集任何数据。",
      points: [
        "许多低视力、色觉障碍或 ADHD 人士在阅读网页时会遇到障碍，而大多数网站没有任何调节选项。SeeB 起初是一个免费的 Chromium 扩展，后来也成为任何网站都能用一行代码嵌入的组件。",
        "面板集合了红色盲、绿色盲、蓝色盲和单色滤镜、高对比度、颜色反转和深色模式、放大文字、间距、加粗、下划线和高亮链接、阅读尺和阅读焦点线、亮度和饱和度、隐藏图片、停止动画、键盘焦点高亮、大光标，以及可选声音和语速的语音朗读。",
        "组件通过 Cloudflare Pages 的 CDN 分发，每次改进都能立即到达现有用户。公开文档展示了如何在纯 HTML、Vite、Vue、Angular 和 Next.js（App Router）中集成，包括我自己在 Next.js 项目中嵌入组件时解决的 SSR 和水合细节。",
        "扩展使用 Manifest V3，只申请 storage 和 activeTab 权限，已上架 Chrome 应用商店。不收集任何数据：偏好设置保存在浏览器本地。",
        "如今 SeeB 已集成在我的项目中，例如 Carretel、Xerox Manager、Somnus、Giz、Velory、Excel 看板、Agência Voxx 和 Cresce+ Futuro 官网。我在 ETEC Parque Belém 的毕业设计中负责技术部分，并继续在 GitHub 上作为开放项目维护。",
      ],
    },
    giz: {
      title: "GIZ，AI 助手",
      summary: "接收一段简短需求，为 WhatsApp、Instagram 和邮件撰写文案的 AI 智能体。在调用模型前保护个人数据，只有在人工批准后才会发布。",
      points: [
        "这是“Seu Primeiro Agente de IA”（你的第一个 AI 智能体）挑战的项目。Giz 是一家虚构的连锁健身房，团队花大量时间为每个渠道撰写公告和活动文案。",
        "智能体分四个阶段工作。首先，服务器在任何内容发往模型之前遮盖 CPF（巴西税号）、电话、邮箱和卡号。然后它理解需求、撰写并审校。最后由人阅读、编辑并批准。不会自动发布任何内容。",
        "模型阶段使用角色设定、元提示、少样本和提问式校验，通过 JSON 输出把各阶段串联起来，并为不同任务设置不同温度（分类和审校 0.2，写作 0.8）。",
        "员工输入的文本会被分隔并作为数据处理，以防止提示注入。品牌指南禁止承诺身体效果、提供健康建议和编造信息。",
        "后端是 Vercel 上的 Node.js 无服务器函数，以 NDJSON 流式响应。前端是不使用框架的 HTML、CSS 和 JavaScript 模块。模型为 Gemini 3.5 Flash-Lite，备用为 gemini-flash-lite-latest。",
      ],
    },
    "steal-a-boo": {
      summary: "以夜间游乐会为背景的 Roblox 社交模拟游戏，最多 8 人：抓 Boo、建设基地、赚取 Cash、偷朋友的东西，并守护自己的财产。借助 AI 制作，纯属娱乐。",
      points: [
        "一个个人实验，借助 AI，用专业的工作流程学习 Roblox 游戏开发。",
        "你可以抓到 7 种稀有度的 Boo，把它们放进基地，每秒产生 Cash。训练速度和投掷力量，最多建造 6 层。",
        "可以偷大门敞开的基地，也可以用搞笑的惊吓来防守。还有重生、每日宝箱和排行榜。惊吓很轻松，适合所有年龄。",
        "代码在 Studio 之外，用 Git 版本管理的 Luau 编写，通过 Rojo 同步，用 Wally 管理依赖，玩家数据用 ProfileStore 保存。",
      ],
    },
    "67-noites": {
      summary: "1 到 5 人合作生存游戏，舞台是森林深处的 terreiro（翁班达教的礼拜场所）：让大锅保持燃烧，撑过 67 个夜晚，直到与 Zé Pilintra 的决战。借助 AI 制作，纯属娱乐。",
      notice:
        "本游戏是一部虚构作品，以对翁班达教和非裔巴西文化的充分尊重制作，无意冒犯。其中的神灵以考验玩家的守护者形象出现，游戏不重现任何真实的仪式、歌曲或祈祷。幽默来自游戏情境，从不针对宗教本身。",
      points: [
        "一个 Roblox 合作生存的个人实验，借助 AI 制作，并充分尊重翁班达教和非裔巴西文化。",
        "每个夜晚，队伍要守护大锅抵御入侵，并遇到四位以守护者身份出现、考验玩家的神灵。战斗很简单，有连招、闪避和格挡。",
        "地图有 terreiro、采石场和林中小屋等生态区。",
        "代码使用 Luau，通过 Rojo 和 Wally 管理版本，数据用 ProfileStore 保存，用 Selene 做代码检查，StyLua 格式化，Lune 运行脚本。README 记录了 646 个平衡性测试。",
      ],
    },
    offscope: {
      summary: "专注于盲狙的 Roblox 在线第一人称射击游戏：一把狙击枪、一把刀、三张地图，ELO 排位赛，服务器校验每一发子弹。借助 AI 制作，纯属娱乐。",
      notice: "轻度，16+，轻微暴力，无血腥",
      points: [
        "一个学习网络同步和竞技游戏的个人项目，借助 AI（Claude Code）完成。",
        "有 1v1 单挑和 2v2 双人模式（休闲和 ELO 排位），以及 4v4 团队战和 8 人混战。每局结束后，20 秒投票决定下一张地图。",
        "每一枪都由服务器判定。客户端带着确定性种子发送射击意图，服务器重建方向，把命中框回溯到过去（30 Hz 延迟补偿，最多 0.45 秒）并确认命中。刀从背后一击必杀。",
        "三张地图完全用代码构建，通过 WriteVoxels 生成真实地形：黎明时分的港口 Cais 09、夜晚市中心 Avenida 11，以及山中的 Posto 47。枪、手臂和刀由 Part 拼装并用代码制作动画，22 种音效和贴图也都在仓库中生成。",
        "外观道具只影响外观，没有开箱也没有付费变强，每日商店在所有服务器上都相同，购买只有在 ProfileStore 保存成功后才确认。README 统计有 1.35 万行 Luau，CI 在每次推送时运行 rojo build、luau-lsp 类型检查和 Selene。",
      ],
    },
    mapinion: {
      summary: "发现和推荐地点的移动应用，可附照片、1 到 5 分评分和评论，并在信息流中查看他人的推荐。应用和 API 都由我开发。",
      points: [
        "地点推荐常常淹没在群聊里。Mapinion 把一切保存在信息流中：发布带照片、评分和评论的地点，并关注别人推荐了什么。",
        "React Native 应用基于 Expo 和 Expo Router，包含登录、注册和三个标签页：信息流、新推荐和个人主页。会话存放在 Zustand 和 AsyncStorage 中，照片通过 Expo Image Picker 从相册选择。",
        "在个人主页可以查看、编辑和删除自己的推荐。",
        "API 也是我写的：Node.js 加 Express、MongoDB 加 Mongoose、bcrypt 加密密码、15 天有效的 JWT 登录，图片存放在 Cloudinary。信息流分页，头像由 DiceBear 生成，并用定时任务保持服务器唤醒。",
      ],
    },
    "excel-dashboard": {
      title: "Excel 销售看板",
      summary: "技术测试：上传一份销售表格，应用会清洗数据并生成包含指标、四张图表、筛选和完整表格的看板，全部在浏览器中完成。",
      points: [
        "真实的销售表格常有空行、写法不一的分类和格式不统一的月份。挑战是在没有后端的情况下做出有用的看板。",
        "应用用 SheetJS 读取 .xlsx 或 .xls 文件的第一个工作表，丢弃缺少分类、商品或收入的行，并统一分类和月份。",
        "看板显示总收入、订单数和平均客单价，以及四张 Recharts 图表：按分类销售、按月销售、按月数量和收入前五的商品。",
        "分类和月份筛选驱动一张表格，支持排序、分页、实时搜索，每页 10、25、50 或 100 条。SeeB 添加在 index.html 中。",
      ],
    },
    "bystartup-web-qa": {
      summary: "一项技能，让 Claude Code、Gemini CLI 等 AI 智能体在 Web 应用中用 Playwright 生成、运行和修复端到端测试。诞生于 Bystartup Labs。",
      points: [
        "编写和维护端到端测试很耗时，常常被搁置。这项技能在明确规则下把这项工作交给 AI 智能体。",
        "智能体读取前端文件，找出按钮、表单、导航、API 调用以及错误、加载和成功状态，把测试写入 testes/[feature].e2e.test.ts，文件夹不存在时会自动创建。",
        "然后运行测试、重试、修复失败的部分，并在不丢失原有有效覆盖的情况下更新旧测试。",
        "它能识别 JWT、Cookie、localStorage、NextAuth、Clerk、Firebase Auth 和 Auth0 的登录方式，保存会话，并用语义化、无障碍的选择器生成手机、平板和桌面场景。",
        "适用于 React、Next.js、Vue、Angular 等 Web 界面。我在 ByStartup 的内部创新项目中创建了这项技能。",
      ],
    },
    "iran-tapetes": {
      summary: "圣保罗 Jardins 区地毯店 Iran Tapetes Orientais 的简介链接页：WhatsApp、网店、Instagram、地图和营业时间，呈现高端质感。",
      points: [
        "这家店需要一个配得上所售地毯的简介链接页，让顾客要找的一切都在一次点击之内。",
        "页面汇集了 WhatsApp、网店、Instagram、邮箱、实体店地图和营业时间。",
        "移动优先，带动态渐变、玻璃拟态和 CSS Grid 布局，嵌入 Google 地图，并有带主屏图标的 manifest。",
      ],
    },
    "pizzaria-relampago": {
      summary: "伊图（圣保罗州）手工披萨店 Pizzaria Relâmpago 的简介链接页，直达在线点餐、WhatsApp、社交媒体和地图。",
      points: [
        "目标很简单：从 Instagram 过来的人点一下就能下单。",
        "点餐按钮最醒目，其后是 WhatsApp、Instagram、Facebook 和带地址的地图。",
        "我用纯 HTML 和 CSS 制作，没有框架和依赖，所以在手机上几乎瞬间加载。背景通过 CSS 变量切换。",
      ],
    },
    linkbio: {
      summary: "我的简介链接页，使用我的视觉识别：作品集、LinkedIn、GitHub、邮箱，以及通过 Spotify 嵌入展示我听的音乐。",
      points: [
        "它汇集了带照片的介绍卡片、一句重点语，以及指向我的作品集、LinkedIn、GitHub、Spotify 和邮箱的链接。",
        "延续我横幅的视觉识别：Unbounded 和 Montserrat Black Italic，深色背景上的黄色和橙色。绿色只出现在 Spotify 部分，直接在页面上展示喜欢的歌单和专辑。",
        "使用变量、Flexbox 和动画的 HTML 与 CSS，Open Graph 元数据和 manifest。",
      ],
    },
    "agenda-manager": {
      summary: "前端技术测试：从早 8 点到晚 6 点的日程，支持创建和删除时段、表单校验、统计，以及按时段分布的图表。",
      points: [
        "题目要求一个清晰的日程，带校验规则，并能快速看清一天的安排分布。",
        "首页介绍产品。日程把当天的时段分组，打开弹窗创建预约，也可以删除。",
        "表单使用 React Hook Form 和 Zod：标题和客户 3 到 100 个字符，时间为 HH:mm 格式，描述可选，最多 500 个字符。",
        "状态保存在 Redux Toolkit 中，含四条仅在会话期间保留的示例预约，统计数据以 Recharts 图表呈现。",
      ],
    },
    "epic-musical": {
      summary: "Epic: The Musical 的粉丝落地页，包含交互板块、GSAP 滚动动画、Spotify 专辑轮播和常见问题。",
      points: [
        "一个个人项目，用来在长页面上练习动画和视觉叙事。",
        "布局使用 Flexbox、Grid 和颜色变量，主断点为 768px。",
        "GSAP 3 配合 ScrollTrigger 负责进场和滚动效果。专辑通过 Spotify 嵌入，图标来自 Font Awesome 和 Material Symbols。",
      ],
    },
    velory: {
      summary: "EBAC 前端工程师课程的结课项目：带评分、购物车以及含配送和模拟支付结账流程的餐厅目录，使用 React 和 TypeScript。",
      points: [
        "课程的最终挑战是把所学的一切整合成一个完整的外卖产品。",
        "列表展示带分类和评分的餐厅，每家都有菜单。购物车由 Redux Toolkit 管理，数量显示在顶部。",
        "结账依次经过商品确认、配送地址、模拟银行卡信息和订单确认。数据来自用 Axios 调用的 API，路由使用 React Router。",
      ],
    },
    matemagika: {
      summary: "学校小组作业做的数学学习应用：逐步求解一元一次和一元二次方程，并带图表进行线性插值。",
      points: [
        "作业要求做一个帮助学习计算数学的工具。",
        "计算会显示根和每一步过程。对于一次方程，系数 a 留空或为零。",
        "插值接收若干点对，用 Chart.js 画出直线。页面清楚说明这是小组作品。",
      ],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro 官网",
      summary: "由 Marina Kamiya 领导的 Cresce+ Futuro 咨询公司的落地页，主题是女性创业、科技以及 AI 在商业中的应用。",
      points: [
        "这家咨询公司需要一个独立于 SaaS 的网站，介绍自己的工作和项目。",
        "我用 HTML、CSS 和 JavaScript 制作，带 GSAP 和 ScrollTrigger 滚动动画以及 Font Awesome 图标。",
        "和我最近的所有项目一样，内置了 SeeB。",
      ],
    },
    portfolio: {
      title: "作品集",
      summary: "就是这个网站：带筛选的项目和含图库的弹窗、深色模式、PWA、完整的 SEO，以及对无障碍和性能的用心。",
      points: [
        "我想要一个作品集，用我做产品的方式展示我的工作：快速、无障碍、注重细节。",
        "网格按类型排列作品，大卡片呈锯齿状排布，每个项目都会打开一个包含图库、技术栈和链接的弹窗。图片只在出现在屏幕上时才加载。",
        "浅色和深色主题使用 next-themes。元数据、Open Graph、站点地图、robots 和结构化数据覆盖 SEO，网站是一个带 manifest、图标和离线页面 Service Worker 的 PWA。",
        "联系表单直接发送邮件，动画使用 Motion，并内置 SeeB。",
      ],
    },
  },
  experiences: [
    {
      role: "联合创始人兼 CTO",
      period: "2026 年 10 月至今",
      mode: "远程",
      summary:
        "Coach Up 的联合创始人，负责技术方向。Coach Up 是一个白标 SaaS 平台，面向健身房和私人教练管理，专注于流程的数字化和简化。每家健身房或教练都能为学员提供带自有品牌的应用，可直接从浏览器安装（PWA）。",
      more: ["我负责定义系统架构、选择技术、规划功能，并开发产品，从原型到上线。"],
      didLabel: "主要职责：",
      did: [
        "使用 Next.js、Node.js 和 TypeScript 设计和开发平台的全栈架构。",
        "使用 Supabase 进行数据建模、身份验证和存储。",
        "开发学员管理、训练计划制定与开具、组数和重量记录以及表现指标等功能。",
        "白标架构，让每家健身房或教练都能以自己的视觉识别使用平台。",
        "使用 Cloudflare 规划基础设施、云存储和应用安全。",
        "制定技术路线图和产品演进方向。",
        "研究新技术和创新机会。",
      ],
      closing: "项目旨在让健身房和私人教练的管理更高效、更易用、更集中，并为学员提供在健身房之外也能延续的跟进。",
    },
    {
      role: "全栈开发者",
      period: "2026 年 5 月至今",
      mode: "远程",
      summary:
        "我是 T2 Educação 的技术负责人开发者：负责内部管理 Hub、平台间集成、自动化、数据库、基础设施以及全部线上业务。我于 2026 年 5 月以前端开发者身份加入，一个月后晋升为全栈，负责整个技术运营。",
      did: [
        "我把一个依赖多项昂贵集成的系统，变成了一天比一天更自主的平台，把原本依赖第三方工具的部分转为自研。",
        "开发并迭代 T2 Hub，这是基于 Next.js、React 和 TypeScript 的内部系统，包含任务、客服、带对账的财务、营销、联系人中心、推广和代理、课程库以及 B2B 销售管理等模块。",
        "把 Hub 与十多个平台集成：客服的 Crisp 和 Crisp AI、ActiveCampaign、Hotmart、Pagar.me、Granatum、开票的 eNotas、Instagram Graph API、YouTube Analytics、WhatsApp 自动化、Google 评价、GitHub、登录用的 Cloudflare Turnstile，以及转化追踪的 GA4。",
        "在 Supabase 上按领域划分 schema，建模并维护 PostgreSQL 数据库，负责自有 API、Vercel 上的数十个定时任务、PDF、表格和演示文稿的生成，以及监控接口的健康检查。",
        "我创建了一个 MCP 服务器，让 AI 智能体安全地查询和操作 Hub。",
        "用 Next.js 16 重建了官网、博客、免费资料门户和落地页，覆盖 Core Web Vitals、技术 SEO、无障碍和追踪。我还负责 Cloudflare（DNS、SSL、缓存、规则和安全）、域名、测试与生产环境以及 CI/CD 流水线。",
      ],
      resultValue: "1 个月",
      resultLabel: "从前端晋升为全栈",
    },
    {
      role: "全栈软件工程师（AI 优先）",
      period: "2026 年 3 月至 2026 年 8 月",
      mode: "远程",
      summary:
        "我为初创公司打造 SaaS、Web 系统和移动应用，覆盖完整周期：需求、架构、数据库、集成、基础设施、部署和应用商店发布。正是在这里，我开发了我做过最大的项目 Mirante ERP。",
      did: [
        "开发了 Mirante ERP，包含收银、订单和报价、库存、带审批和 XML 导入的采购、与 SEFAZ 对接的 NF-e 开具、带银行对账的财务、多公司多分店、权限、审计日志和带销售预测的看板。",
        "在 ERP 中实现了 K8 Fintech 的网关 K8 Pay，支持 Pix 和 boleto，并在当期产品中完成了与支付网关、身份验证和外部 API 的其他集成。",
        "用 React Native 和 Expo 交付了 MVP、交易平台和应用，并负责在 App Store 和 Google Play 上架。如今我能在几个小时内让一个应用达到可提交商店的状态。",
        "用 Docker 和 Coolify 在 VPS 上部署和维护应用，搭建 CI/CD 流水线，数据库方面使用 Supabase、PostgreSQL、Prisma 和 Drizzle ORM。",
        "在 AI 优先模式下工作，日常使用智能体、MCP 和 AI 工具，参与每周冲刺和与利益相关者的会议。在内部项目 Bystartup Labs 中，我创建了 bystartup-web-qa，一项让 AI 智能体用 Playwright 编写和修复端到端测试的技能。",
      ],
    },
    {
      role: "全栈开发者",
      period: "2026 年 1 月至 2026 年 3 月",
      mode: "远程",
      summary:
        "我重构了 Cresce+ Futuro 的 SaaS，它帮助微型和小型企业管理库存、销售、任务和员工；并把基础设施从三家服务商迁到一个更便宜、更易维护的统一平台。",
      did: [
        "用 App Router 和 Tailwind CSS 以全栈 Next.js 16 重写了应用，接入身份验证和 Mercado Pago 支付。",
        "把分散在 Azure、Railway 和 Hostinger 上的技术栈迁移到 Neon PostgreSQL 和 Vercel，统一了域名，让产品可以扩展。",
        "我还做了这家咨询公司的官网，并内置了我开发的无障碍组件 SeeB。",
      ],
    },
  ],
  studies: [
    {
      title: "软件工程",
      place: "Gran Faculdade",
      period: "2026 年 6 月至 2030 年 6 月",
      text: "本科在读，8 个学期共 3,200 学时。课程覆盖软件的完整周期：算法与数据结构、关系型和 NoSQL 数据库、前端、后端和移动端、架构与微服务、云、容器与 DevOps、质量与测试、信息安全、敏捷管理和人工智能。我选择这个专业，是因为它和我的工作说同一种语言：做产品，解决真实问题。",
    },
    {
      title: "人工智能与数字自动化",
      place: "UniFECAF 与 Rocketseat 技术学院合作",
      period: "2026 年 10 月至 2028 年 3 月",
      text: "技术类学位在读，学制 18 个月，第一学期起就有实践。课程涵盖生成式 AI、提示工程、API 集成、流程和工作流自动化、低代码、UX/UI 和敏捷方法，并深入到 RAG、向量嵌入、微调和自主智能体。这是我在工作中使用智能体、MCP 和自动化的理论基础。",
    },
    {
      title: "AI 软件架构",
      place: "进修课程",
      period: "Anhanguera，在读，360 学时",
      text: "在 Anhanguera 与 Full Stack Club 合作的 360 学时进修课程，目前在读。重点是结合人工智能的软件架构，通过可扩展性、性能、测试、微服务、CI/CD 和云方面的实践项目来学习。",
    },
    {
      title: "互联网信息技术（Web 开发）",
      place: "ETEC Parque Belém",
      period: "2023 年至 2025 年",
      text: "技术高中课程，已毕业。入学时我连电脑都不太会用，毕业时已经会编程：学习了逻辑、HTML、CSS、JavaScript、PHP、SQL、WordPress、MIT App Inventor、Figma、UX/UI、无障碍、HTTP 协议、Shell 基础和 VirtualBox 虚拟化。我的毕业设计是 SeeB，一个 Chromium 扩展和无障碍组件，技术部分由我负责。它在学校展示过，如今已开源并上架 Chrome 应用商店。",
    },
    {
      title: "个人发展与就业能力",
      place: "UniFECAF",
      period: "2026 年 11 月",
      text: "UniFECAF 关于个人发展和就业准备的拓展课程。模块包括学习习惯和条理性，以及如何管理时间。",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "2026 年 3 月",
      text: "Instituto PROA 的就业项目，侧重沟通和分析推理，涵盖目标设定、职场写作和团队沟通。",
    },
    {
      title: "敏捷方法",
      place: "Rocketseat",
      period: "2025 年 10 月",
      text: "Scrum 和 Kanban 基础，用于以短周期组织团队工作并跟踪任务进展。",
    },
    {
      title: "Go 入门",
      place: "Rocketseat",
      period: "2025 年 10 月",
      text: "Go 语言入门，涵盖语法、类型以及语言处理错误的方式。通过猜数字游戏和货币换算等终端程序进行练习。",
    },
    {
      title: "项目管理基础",
      place: "Rocketseat 与 UniFECAF 合作",
      period: "",
      text: "与学位课程同步学习的项目规划、组织和跟进课程，目的是明确范围、期限，并清楚地看到工作进展。",
    },
    {
      title: "Git 与 GitHub：AI 时代权威指南",
      place: "Rocketseat",
      period: "",
      text: "面向使用 AI 工具开发者工作流的 Git 和 GitHub 版本控制课程，涵盖分支、提交和拉取请求的日常循环。",
    },
    {
      title: "用 n8n 构建 AI 智能体",
      place: "Rocketseat",
      period: "",
      text: "关于在 n8n 中构建自动化和人工智能智能体的课程，把各种服务连接起来，让流程能根据请求自动执行。",
    },
    {
      title: "开发者的 SEO",
      place: "Rocketseat",
      period: "",
      text: "从开发者角度讲解如何让网站在搜索中更好地展现，涵盖页面结构、内容以及搜索引擎真正看到的技术细节。",
    },
    {
      title: "自信表达",
      place: "Rocketseat",
      period: "",
      text: "面向团队协作的沟通课程，重点是清晰、自信地表达。",
    },
    {
      title: "国际职业发展",
      place: "Rocketseat",
      period: "",
      text: "关于如何为巴西以外的技术机会做准备的课程，从自我介绍到与国外团队沟通。",
    },
    {
      title: "AI 基础（侧重生成式 AI）",
      place: "Rocketseat",
      period: "",
      text: "以生成式 AI 为重点的人工智能基础，以及这些模型如何改变开发者的日常工作。",
    },
    {
      title: "前端工程师课程",
      place: "EBAC",
      period: "",
      text: "前端课程，涵盖 Git、CSS、JavaScript、Bootstrap、SASS、LESS、Gulp、Grunt、ES6、面向对象、TypeScript、React 与 Redux、Jest 和 Cypress 测试，以及 Node。练习和 Velory、Games Shop 等项目都在 GitHub 上。",
    },
    {
      title: "全栈之旅",
      place: "Hashtag Treinamentos",
      period: "",
      text: "实践型全栈课程，项目是一个受 Spotify 启发的应用，包含前端、后端和部署。",
    },
    {
      title: "完整 Web 开发",
      place: "Udemy",
      period: "",
      text: "内容广泛的 Web 开发课程，通过前端实践项目练习如何从零搭建页面。",
    },
    {
      title: "Python 入门与进阶",
      place: "Alura",
      period: "",
      text: "从基础到进阶的 Python 课程，通过制作游戏来练习。",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "用 HTML、CSS 和 JavaScript 每天做一个、共 50 个小项目的挑战，在 Web 上获得真实的练习。",
    },
    {
      title: "JavaScript 强化营",
      place: "Hashtag Treinamentos",
      period: "",
      text: "JavaScript 和 React 的实践强化课程，从零构建项目，例如用纯 JavaScript 做的音频播放器。",
    },
    {
      title: "Ri Happy 训练营：从零开始学前端",
      place: "DIO",
      period: "",
      text: "HTML、CSS 和 JavaScript 前端训练营，重点是从头到尾构建真实的界面。",
    },
    {
      title: "HTML、CSS 和 JavaScript 项目挑战",
      place: "DIO",
      period: "",
      text: "DIO 的一系列实践挑战，复刻 Stranger Things、Discord、YouTube 和 Detona Ralph 等页面和游戏。",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "Rocketseat 关于人工智能智能体的实践活动，在一周内完成并发布一个项目。",
    },
    {
      title: "NLW Connect",
      place: "Rocketseat",
      period: "",
      text: "Rocketseat 的实践活动，在几天内从零构建一个 API。",
    },
    {
      title: "用 Go 构建命令行工具",
      place: "Rocketseat",
      period: "",
      text: "一节用 Go 构建命令行工具的实践课。",
    },
    {
      title: "SQL 与数据库",
      place: "",
      period: "",
      text: "以图书馆数据库和流媒体服务数据库为例学习 SQL，包括表和关系。",
    },
    {
      title: "编程入门",
      place: "EBAC",
      period: "",
      text: "初次接触编程逻辑，以及开始写代码所需的基本概念。",
    },
    {
      title: "JavaScript 编程逻辑",
      place: "DIO",
      period: "",
      text: "一个用 JavaScript 条件结构判断英雄等级的逻辑挑战。",
    },
    {
      title: "在 GitHub 上为开源项目做贡献",
      place: "DIO",
      period: "",
      text: "一个关于如何为开源项目做贡献的实践实验：fork、分支和拉取请求。",
    },
    {
      title: "科技职业周",
      place: "Alura",
      period: "",
      text: "一周关于科技职业和人工智能的内容，了解市场全貌和可以选择的方向。",
    },
    {
      title: "Universo Photoshop",
      place: "brainstorm.academy",
      period: "",
      text: "Adobe Photoshop 和平面设计课程，用于创作和编辑界面与内容中使用的图片。",
    },
  ],
  recommendations: [
    {
      role: "全栈开发者，ByStartup 同一团队",
      date: "2026 年 8 月 3 日",
      paragraphs: [
        "我有幸在 ByStartup 与 Rafael Henrique Blanco 共事，可以说他是我合作过的最扎实、最可靠的专业人士之一。",
        "他最大的优势之一，是能以速度和质量推进高度复杂的项目，同时不失控制、不失冷静。他交付稳定，工作有条理，能把困难的技术挑战变成清晰且执行到位的方案。",
        "除了出色的技术知识和软件开发经验，Rafael 还极其专业、负责、有条理。他在压力下保持成熟，沟通直接，并能提升身边团队的水平。",
        "我毫无保留地推荐 Rafael。我相信对于任何寻找经验丰富、可靠、能出色交付复杂项目的人才的团队来说，他都会是巨大的助力。",
      ],
    },
    {
      role: "技术 COO，在 ByStartup 直接指导 Rafael",
      date: "2026 年 8 月 2 日",
      paragraphs: [
        "Rafael 是那种能让团队安心的开发者。在我们的合作中，他扎实的技术功底和主动性非常明显。",
        "他不会等问题发生，而是在规划会议上就预见问题，提出良好实践，并确保最终产品达到尽可能高的质量。",
        "非常出色的专业人士！",
      ],
    },
  ],
};
