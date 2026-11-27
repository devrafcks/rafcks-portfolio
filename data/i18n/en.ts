import type { ContentText } from "./types";

/** Long content in English. Lists follow the order of the Portuguese files in data/. */
export const en: ContentText = {
  projects: {
    t2: {
      summary:
        "Company website for T2 Educação, with prep courses for financial certifications, a section for companies and landing pages. Rebuilt in Next.js 16 with a focus on performance, SEO and conversion.",
      points: [
        "T2 prepares professionals for financial market certifications such as CPA and C-Pro. The site had to load fast, rank well on Google and take visitors all the way to enrollment, and before it depended on a visual site builder.",
        "I rebuilt the site in Next.js 16 with App Router, React 19 and Tailwind CSS 4, with course pages, certification pages and the section for companies, plus the campaign landing pages.",
        "I took care of Core Web Vitals, technical SEO, accessibility, animations with GSAP and Three.js, and conversion and checkout tracking in GA4. The site uses Supabase and Resend, and the domain goes through Cloudflare.",
        "I'm the developer in charge of the company's technology. The screenshots only show public pages. The internal Hub, the integrations and the student platform don't appear here.",
      ],
      alts: [
        "Home page of the T2 Educação website",
        "Section of the T2 Educação home page",
        "CPA course page on the T2 website",
        "Continuation of the T2 CPA page",
        "T2 page for companies",
        "Section of the T2 page for companies",
        "T2 Educação website on a phone",
      ],
    },
    "t2-blog": {
      summary:
        "T2's public blog with articles and guides about financial certifications, careers and the market, built to be read on a phone and found on Google.",
      points: [
        "The blog is T2's main source of organic traffic. It needed strong technical SEO, comfortable reading on a phone and a simple flow for the team to publish.",
        "I built the front end in Next.js with Ghost as a headless CMS. The home page highlights stories, like the C-Pro R exam, and each article shows the author and date.",
        "Technical SEO and GA4 track every post. The screenshots only show public editorial content.",
      ],
      alts: [
        "Home page of the T2 Blog",
        "Section of the T2 Blog home page",
        "List of articles on the T2 Blog",
        "More articles on the T2 Blog",
        "Public article about the new CPA",
        "Continuation of the article about the new CPA",
        "T2 Blog on a phone",
      ],
    },
    "t2-docs": {
      title: "T2 Free Study Materials",
      summary:
        "Portal of free handouts, practice exams and summaries for financial certifications such as CPA, C-Pro, CFP and ANCORD, built with Next.js and headless Ghost.",
      points: [
        "T2 offers free study materials for people preparing for certifications. The portal organizes handouts, practice exams and summaries by certification, in a way that is easy to browse and to find on Google.",
        "I built the portal in Next.js, pulling content from Ghost in headless mode, so the team can publish without touching code.",
        "The published materials are study content. No student data appears on the portal.",
      ],
      alts: [
        "Home page of T2's free study materials",
        "Section of T2's free study materials page",
        "Public list of T2's free study materials",
        "T2's free study materials on a phone",
      ],
    },
    mirante: {
      summary:
        "Multi-company ERP with a point of sale, NF-e (Brazilian electronic invoices) integrated with SEFAZ, finance with reconciliation, inventory, purchasing and K8 Pay for Pix and boleto. The biggest system I've ever built.",
      points: [
        "Small and medium businesses often track sales, inventory, purchasing and finance in separate tools. Mirante brings everything into one system, with several companies and branches in the same account and a unit switcher at the top.",
        "Sales: a checkout point of sale with payment and closing, sales orders with salespeople, and quotes. Inventory with a dashboard of products below the minimum or negative, catalog, prices, categories and services.",
        "Tax and purchasing: NF-e issuing and management integrated with SEFAZ using an A1 certificate, a panel of received invoices with manifestation, purchase requests with approval or rejection, and goods receipt by XML, by NF-e key or manually.",
        "Finance: accounts payable and receivable, opening and closing the cash register, bank accounts with statements and reconciliation, advances, installment renegotiation, cost centers and chart of accounts. I also integrated K8 Pay, K8 Fintech's gateway, into the ERP to charge by Pix and boleto.",
        "Management: a dashboard with KPIs, year over year revenue and sales forecast, a single registry for customers, suppliers and employees, users and permissions, an exportable audit log, global search and quick actions with Ctrl+K, and customization of theme, density and animations.",
        "I built the system at ByStartup in about three months. The product idea came from the client. The prototype, the product design, the full stack development and the infrastructure were mine, from the front end to the database, the integrations and the deploy. The screenshots are from a test account with fictional data.",
      ],
      alts: [
        "Dashboard: KPIs and charts",
        "Dashboard: revenue and forecast",
        "Dashboard: categories and recent activity",
        "Products and inventory: below-minimum alerts",
        "Inventory dashboard: products below the minimum",
        "Point of sale: checkout",
        "Point of sale: payment and completing the sale",
        "Sales orders",
        "New sales order",
        "New quote",
        "Quotes",
        "Accounts receivable",
        "Accounts payable",
        "People registry",
        "Cash register management",
        "Purchase requests",
        "New purchase request",
        "Purchase request: approve or reject",
        "Goods receipt by XML",
        "Settings",
        "Global search, Ctrl+K",
        "Companies and branches",
        "Users and permissions",
        "Audit log",
        "Theme customization",
      ],
      coverAlt: "Dashboard: revenue and forecast",
    },
    carretel: {
      summary:
        "My own SaaS for sewing workshops: it records the cut, proves the delivery and collects payment by Pix from a phone, even on a weak signal. Bilingual, in Portuguese and Spanish.",
      points: [
        "Sewing workshop owners, many of them from the Bolivian community in São Paulo, track cuts, deliveries and payments in a notebook and on WhatsApp. When there's a disagreement about quantity or price, there's no proof of anything. Carretel solves this with three verbs: record, prove and collect.",
        "Record: an incoming cut is logged with a photo, quantity and price spoken by voice, size grid, deadline and trims, and production is logged by person, operation and machine. Prove: a public link shows photos, size grid, amount and a verification code, and the client confirms through WhatsApp without creating an account. The acceptance stores the time, browser and IP and stays immutable in the database.",
        "Collect: the screen shows who owes and for how many days, generates a ready-to-send WhatsApp message with Pix Copia e Cola and a QR Code (BR Code with CRC16 written in the project itself) and accepts full or partial payment. It also has a weekly settlement with a bilingual receipt, a fair price per piece calculator, data export under LGPD and account deletion.",
        "The app is offline first: actions go into an idempotent queue in IndexedDB and sync when the signal comes back, with a service worker and installation as a PWA. It's multi-tenant, with per-workshop isolation tested against a real Postgres.",
        "Subscriptions run through AbacatePay, with a webhook validated by HMAC-SHA256. The interface follows WCAG 2.2 AA, with large touch targets and SeeB built in, and the project has tests with Vitest, property tests with fast-check and accessibility tests with Playwright and axe.",
        "It's my own product, from the idea to the spec, the design and the code. It's in pre-launch.",
      ],
      alts: [
        "Carretel home page",
        "Section of the Carretel page",
        "Another view of the Carretel page",
        "Section explaining how Carretel works",
        "Carretel on a phone",
        "Another Carretel screen on a phone",
        "Carretel's Today panel, with what the workshop is owed, pieces in production and the week's settlement",
        "The workshop's list of cuts in Carretel, with sewing and delivery status",
        "A delivered cut in Carretel, with size grid, operations and price per piece",
        "Carretel payments due by days overdue, with a button to send a reminder on WhatsApp",
        "Pix QR Code generated by Carretel for a payment",
        "The day's production in Carretel, with pieces and amount to pay per person",
        "Weekly team settlement in Carretel",
        "Carretel calculator to check whether a cut is profitable",
        "Carretel reports, with the month's cuts and revenue",
        "Confirmed delivery receipt in Carretel, with a verification code",
        "Carretel's Today panel on a phone",
        "Carretel payments due on a phone",
      ],
    },
    gatelite: {
      summary:
        "Today's Earth, seen from above: pick a place and see the day's satellite image, which satellites passed overhead, how it has changed since 2000 and what is happening near it right now. All with NASA open data, no login and no database.",
      points: [
        "The name blends gato (cat) and satélite (satellite). NASA's satellite imagery is open, but it is scattered across technical portals. Gatélite brings it into a single site, made for anyone who wants to see their neighborhood, their city or the whole planet from above.",
        "Explore: a globe with the daily mosaic from NASA satellites (VIIRS and MODIS), Landsat and Sentinel at 30 m, infrared, night lights, temperature and smoke. When the zoom goes past what the day's image can show, the map switches by itself to a high resolution layer where you can see houses, blocks and Christ the Redeemer. The whole view lives in the URL.",
        "The Weather tab shows the place's last 14 days side by side and estimates the cloud cover of each one from the image's color, with sunrise and sunset. Passes of 14 satellites over the last and next 24 hours are calculated in the browser, with SGP4 in a Web Worker. There is also a time-lapse of the same day of the year since 2001 and a before and after with a draggable curtain.",
        "The planet now: a world map with day and night moving in real time, city lights, the live satellite fleet, active natural events (wildfires, storms, volcanoes and icebergs) and photos from the EPIC camera, taken 1.5 million km away.",
        "There is no account and no database: the URL stores the view, the device stores saved places and the server only caches the external APIs. The domain (orbits, clouds, sun and events) is made of pure rules tested with Vitest. It's an open source personal project, MIT licensed and with no official link to NASA.",
      ],
      alts: [
        "Gatélite home page, with the Earth photographed today by the EPIC camera",
        "The whole planet in today's photos and the count of passes over Brazilian cities",
        "Gatélite explorer with Rio de Janeiro in the day's satellite image",
        "High resolution layer zoomed in on Alto da Boa Vista, in Rio de Janeiro",
        "Weather tab with the place's last 14 days, the cloud cover of each one and sunrise and sunset",
        "Satellite passes over the place in the last and next 24 hours",
        "Explorer with the whole globe and the natural events tab open",
        "Map of the planet now, with day, night and city lights",
        "EPIC camera photos day by day, taken 1.5 million km away",
        "Live satellite fleet, with the Landsat 9 card",
        "Table of tracked satellites, by resolution and swath width",
        "Gatélite brand page",
        "Gatélite 404 page, Out of the swath",
        "Gatélite home page on a phone",
        "Explorer on a phone, with the Weather tab open",
        "The planet now on a phone",
      ],
    },
    cresce: {
      summary:
        "Management SaaS for micro and small businesses. I rewrote the product in Next.js 16 and moved the infrastructure to Neon and Vercel.",
      points: [
        "The Cresce+ SaaS organizes inventory, sales, tasks and staff for micro and small businesses. The previous version was spread across Azure, Railway and Hostinger, expensive to maintain and hard to evolve.",
        "I rewrote the application in full stack Next.js 16 with App Router and Tailwind CSS, with authentication and payments through Mercado Pago.",
        "I moved the database to Neon PostgreSQL and the application to Vercel, and centralized the domain.",
        "I also built the consultancy's company website, which has its own card.",
      ],
      alts: [
        "Cresce+ Futuro dashboard, with revenue, sales days and average ticket",
        "Cresce+ Futuro sales history, with channel and payment method",
      ],
    },
    xerox: {
      summary:
        "Production system for print shops that replaced paper cash slips and spreadsheets with digital entries, automatic inventory and reports in Excel and PDF.",
      points: [
        "In many print and copy shops, each job is written on a paper slip and added up in a spreadsheet at the end of the day. That leads to mistakes, lost history and no inventory control. Xerox Manager replaces this flow with a simple, traceable, real-time system.",
        "The employee types the product code, and the name and price fill in on their own. They adjust quantity and price, confirm, and the stock goes down automatically. Edits and deletions are only allowed on the same day.",
        "The admin manages employees, products and inventory, with low stock alerts and manual adjustment, and pulls reports by period with production per employee and stock usage, exported to Excel with three tabs and to PDF.",
        "Security got careful attention: passwords with bcrypt, JWT sessions in an httpOnly cookie with a sessions table that can be invalidated, permission checks on every Server Action and filters validated with Zod.",
        "It's a demo version that follows the same logic as the system used in production. I built everything, from the database to the interface, with SeeB integrated.",
      ],
      alts: [
        "Xerox Manager login screen",
        "Admin dashboard in Xerox Manager, with the day's revenue, inventory and best-selling products",
        "Summary per employee on the Xerox Manager dashboard",
        "Employee registry in Xerox Manager",
        "Products and inventory in Xerox Manager, with a low stock alert",
        "Production and inventory reports in Xerox Manager",
        "PDF report from Xerox Manager, with stock usage and team performance",
        "Employee dashboard in Xerox Manager, with the day's production",
        "New entry in Xerox Manager, with product, quantity and available stock",
        "Employee dashboard in Xerox Manager, on a phone",
        "New entry in Xerox Manager, on a phone",
      ],
    },
    somnus: {
      summary:
        "App for logging sleep hours and spotting patterns: average, best and worst night and progress charts, with per-user accounts and built-in accessibility.",
      points: [
        "Anyone who wants to sleep better needs simple, consistent data, not apps full of features nobody uses. Somnus does one thing well: logging and analyzing the hours you sleep.",
        "The flow is direct: sign in, log the night and see the analysis. The dashboard shows average sleep, best and worst night, full history and progress charts.",
        "Authentication uses Clerk, and each person only sees their own data. The back end runs on Next.js Server Actions, typed end to end with Prisma and PostgreSQL on Neon.",
        "Accessibility was a requirement from the start, with SeeB integrated. I built the project on my own, from the database to the deploy on Vercel.",
      ],
      alts: [
        "Somnus home page",
        "Another view of the Somnus page",
        "Somnus on a phone",
        "Another Somnus screen on a phone",
      ],
    },
    bicus: {
      summary:
        "App for local services, products, rentals and stores, with a map, chat and featured listings paid by Pix, card or boleto. On the App Store, Google Play and the web.",
      points: [
        "Bicus brings the city's services, products, rentals and stores together in one app, with search by distance and verified sellers.",
        "The app shows listings on a map, with location picking and address search, and has in-app chat to arrange things directly with the seller.",
        "Sellers can boost a listing. Payment goes through Mercado Pago, by Pix, card or boleto, and the boost turns on by itself after confirmation. The app never receives or stores card data.",
        "A single Expo and React Native codebase produces the iOS and Android apps and the web version. The product idea came from the client. Prototype, product, full stack development and infrastructure were mine.",
      ],
      alts: [
        "Web version of Bicus",
        "Bicus on a phone, web version",
        "Bicus page on Google Play",
        "Bicus screen published on Google Play",
        "Another Bicus screen published on Google Play",
        "Bicus screen published on the App Store",
        "Another Bicus screen published on the App Store",
      ],
    },
    apertou: {
      summary:
        "Marketplace for physical stores to sell through the phone, with an app, a merchant panel and an admin panel. Pix or card, automatic split for each store and try-before-you-buy orders.",
      points: [
        "Neighborhood stores lose sales because they aren't on the customer's phone, and building their own e-commerce is expensive. Apertou Comprou puts these stores in a local marketplace, with home delivery or in-store pickup.",
        "Customers buy through the app or the website, talk to the store in the chat and can ask for items to try on before paying, with a try-before-you-buy order. Payment is by Pix or card.",
        "Each store has a recipient account on Pagar.me, and the amount of each sale is split automatically and transferred to the merchant's bank account. The panel guides the bank details setup and blocks the store from going live until it's complete.",
        "The product has three parts: the customer app, the merchant panel and the marketplace admin, with tracking charts. The idea came from the client. I did the prototype, the product, the full stack development and the infrastructure.",
      ],
      alts: [
        "Apertou Comprou page",
        "Section of the Apertou Comprou page",
        "Another view of the Apertou Comprou page",
        "Another section of the Apertou Comprou page",
        "Apertou Comprou on a phone",
        "Apertou Comprou page on the App Store",
        "Apertou Comprou page on Google Play",
        "App screen published on the App Store",
        "Another app screen published on the App Store",
        "App screen published on Google Play",
        "Another app screen published on Google Play",
      ],
    },
    junto: {
      summary:
        "App and website for finding open running sessions near you, created by real people. You can see who's going, confirm attendance and create your own run. On the web, Google Play and the App Store.",
      points: [
        "Running alone is discouraging, and making plans in a group chat doesn't always work out. Junto shows open runs near you, created by real people. The line on the product is: find someone, run together.",
        "You can see who's going, confirm attendance, join the run's chat, check in at the meeting point and create your own run, with a place, a day and a tone. Runs show up by neighborhood and time, and there's a filter for women-only runs. The app is free, with no card.",
        "The page covers the safety of the meetup: verified identity, an open list of who's confirmed, live tracking with a trusted person, automatic check-out and an emergency button. Crews and coaching groups have a page, a schedule and open runs. The beta is open in Rio de Janeiro.",
        "On the App Store and Google Play the app is called \"junto: companhia para correr\". The product idea came from the client. Prototype, product, full stack development and infrastructure were my work.",
      ],
      alts: [
        "Junto home page",
        "How Junto works",
        "Meetup safety on the Junto website",
        "Junto features on the website",
        "Junto on a phone",
        "Junto page on Google Play",
        "Junto screen published on Google Play",
        "Another Junto screen published on Google Play",
        "Third Junto screen published on Google Play",
      ],
    },
    voxx: {
      summary:
        "Website for Agência Voxx, a digital marketing agency in Itapetininga, with animations in Framer Motion and a contact form that sends email.",
      points: [
        "The agency needed a site that showed its work with the same visual quality it delivers to clients, without being heavy on a phone.",
        "The page presents planning, social media, visual identity and paid traffic, with entrance and scroll animations made in Framer Motion.",
        "I built it in Next.js 16 with App Router, Tailwind CSS and Google fonts (Besley and DM Sans). The contact form sends email through Resend with Nodemailer, and Google Analytics comes in through @next/third-parties.",
      ],
      alts: [
        "Agência Voxx home page",
        "Services on the Agência Voxx page",
        "Agência Voxx on a phone",
      ],
    },
    jotape: {
      summary:
        "E-commerce for authentic watches, built as a freelance job: catalog by brand, search, checkout with Pix or card through Mercado Pago, order tracking and WhatsApp.",
      points: [
        "A store selling authentic watches that needed its own e-commerce, where customers buy on their own, at any time.",
        "The catalog is organized by brand, with search, product pages and a cart. Payment happens on the site itself, by Pix or credit card, processed by Mercado Pago.",
        "Customers track their order on the site and talk to the store on WhatsApp. The store can also be installed as an app on the phone. I got the idea for the store and handled the rest: prototype, product, full stack development and infrastructure.",
      ],
      alts: [
        "Jotape Relógios page",
        "Section of the Jotape Relógios page",
        "Another view of Jotape Relógios",
        "Jotape Relógios catalog",
        "Jotape Relógios on a phone",
        "Another Jotape Relógios screen on a phone",
      ],
    },
    seeb: {
      summary:
        "Open source accessibility widget and extension, created in my final school project. With one line of script, any site gets contrast, color blindness filters, a voice reader and more, without collecting data.",
      points: [
        "Many people with low vision, color blindness or ADHD run into barriers reading the web, and most sites offer no adjustments at all. SeeB started as a free Chromium extension and also became a widget any site can embed with one line.",
        "The panel brings together protanopia, deuteranopia, tritanopia and monochrome filters, high contrast, color inversion and dark mode, larger text, spacing, bold text, underlined and highlighted links, a reading ruler and reading focus line, brightness and saturation, hiding images, stopping animations, keyboard focus highlighting, a large cursor and a voice reader with a choice of voice and speed.",
        "The widget is served by CDN on Cloudflare Pages, so every improvement reaches existing users right away. The public documentation shows how to integrate it in plain HTML, Vite, Vue, Angular and Next.js with App Router, including the SSR and hydration details I solved myself when embedding the widget in Next.js projects.",
        "The extension uses Manifest V3, only asks for the storage and activeTab permissions and is on the Chrome Web Store. Nothing is collected: preferences stay in the browser itself.",
        "Today SeeB ships inside my projects, such as Carretel, Xerox Manager, Somnus, Giz, Velory, the Excel dashboard, Agência Voxx and the Cresce+ Futuro company website. I did the technical part of the final project at ETEC Parque Belém and I keep maintaining it as an open project on GitHub.",
      ],
      alts: [
        "Opening section of the SeeB page",
        "SeeB features",
        "SeeB public documentation",
        "Section of the SeeB documentation",
      ],
    },
    giz: {
      title: "GIZ, AI assistant",
      summary:
        "AI agent that takes a short brief and writes the copy for WhatsApp, Instagram and email. It protects personal data before calling the model and only publishes with human approval.",
      points: [
        "Project for the \"Seu Primeiro Agente de IA\" (Your First AI Agent) challenge. Giz is a fictional gym chain where the team loses time writing announcements and campaigns for each channel.",
        "The agent works in four stages. First the server masks CPF (Brazilian taxpayer ID), phone, email and card numbers before anything is sent to the model. Then it understands the request, writes and reviews. At the end, a person reads, edits and approves. Nothing is published on its own.",
        "The model stages use persona, meta-prompting, few-shot and verification by questions, with JSON output to chain one stage into the next and a different temperature per task (0.2 for triage and review, 0.8 for writing).",
        "The staff member's text comes in delimited and is treated as data, to prevent prompt injection. The brand guide forbids promising physical results, giving health advice and making up information.",
        "The back end is Node.js serverless functions on Vercel, with NDJSON streaming responses. The front end is HTML, CSS and JavaScript modules, with no framework. The model is Gemini 3.5 Flash-Lite, with gemini-flash-lite-latest as a fallback.",
      ],
      alts: [
        "Giz website: brief and agent stages",
        "Giz in demo mode",
        "Giz form: channel, tone and generate message",
        "Evidence: Giz start screen",
        "Evidence: agent in stages",
        "Evidence: review and verification",
      ],
    },
    "steal-a-boo": {
      summary:
        "Social simulator for Roblox set in a night fair, for up to 8 players: catch Boos, build your base, generate Cash, steal from your friends and defend what's yours. Made with AI, for fun.",
      points: [
        "A personal experiment to learn Roblox game development with a professional workflow, using AI as support.",
        "You catch Boos of 7 rarities and place them in your base to generate Cash per second. You train Speed and Throw Power and build up to 6 floors.",
        "You can steal from bases with the gate open and defend with comic scares. There's Rebirth, a daily chest and a leaderboard. The scares are light, for all ages.",
        "The code lives outside Studio, in Luau versioned in Git, synced with Rojo, packages through Wally and player data saved with ProfileStore.",
      ],
      alts: [
        "Overview of the Steal a Boo park",
        "Central square in Steal a Boo",
        "Base with floors in Steal a Boo",
        "Capture zone in Steal a Boo",
        "Secret tent in Steal a Boo",
      ],
    },
    "67-noites": {
      summary:
        "Co-op survival for 1 to 5 players in a terreiro (Umbanda worship ground) deep in the woods: keep the cauldron lit and survive 67 nights until the showdown with Zé Pilintra. Made with AI, for fun.",
      notice:
        "This game is a work of fiction made with full respect for Umbanda and Afro-Brazilian culture, with no intention to offend. The entities appear as guardians who test the player, and the game does not reproduce real rituals, chants or prayers. The humor is in the game's situations, never in the religion.",
      points: [
        "A personal co-op survival experiment on Roblox, made with the help of AI and with full respect for Umbanda and Afro-Brazilian culture.",
        "Each night, the group defends the cauldron from invasions and meets four entities, who appear as guardians who test the player. Combat is simple, with combos, dodging and parrying.",
        "The map has biomes like the terreiro, the quarry and the cabin in the woods.",
        "The code is Luau versioned with Rojo and Wally, data saved with ProfileStore, linting with Selene, formatting with StyLua and scripts with Lune. The README records 646 balance tests.",
      ],
      alts: [
        "Lobby of 67 Noites com Exu",
        "Terreiro with an ipê tree and tall grass",
        "Quarry biome",
        "Invasion at the cauldron",
        "Cabin in the woods",
        "Night with the cauldron lit",
        "Creatures in the game",
        "Tree cut down with a chainsaw",
        "Banner of 67 Noites com Exu",
      ],
    },
    offscope: {
      summary:
        "Online first-person shooter for Roblox focused on no-scopes: one sniper, one knife, three maps, ranked with ELO and a server that validates every shot. Made with AI, for fun.",
      notice: "Mild, 16+, mild violence, no blood",
      points: [
        "A personal project to learn netcode and competitive games, made with the help of AI (Claude Code).",
        "1v1 Duel and 2v2 Duos modes, casual and ranked with ELO, plus 4v4 Teams and Free for all for 8 players. At the end of a match, a 20-second vote picks the next map.",
        "The server decides every shot. The client sends the intent with a deterministic seed, and the server rebuilds the direction, rewinds the hitboxes in time (lag compensation at 30 Hz, up to 0.45 s) and confirms the hit. The knife kills with one hit from behind.",
        "Three maps built entirely in code, with real terrain via WriteVoxels: Cais 09, a port at dawn, Avenida 11, downtown at night, and Posto 47, in the mountains. The gun, arms and knife are assembled from Parts and animated in code, and the 22 sounds and the textures are also generated in the repository.",
        "Cosmetics are visual only, with no loot boxes and no pay-to-win, a daily shop that's the same on every server and purchases confirmed only after ProfileStore saves. The README counts 13.5k lines of Luau, and CI runs rojo build, type-checking with luau-lsp and Selene on every push.",
      ],
      alts: [
        "Match on Posto 47, an OFFSCOPE map",
        "Sniper scope in OFFSCOPE",
        "First-person knife in OFFSCOPE",
        "OFFSCOPE base seen from above",
        "Square with the OFFSCOPE queue portals",
        "Cais 09 map in OFFSCOPE",
        "Avenida 11 map in OFFSCOPE",
        "OFFSCOPE banner",
      ],
    },
    mapinion: {
      summary:
        "Mobile app for discovering and recommending places, with a photo, a 1 to 5 rating and a comment, and a feed with other people's recommendations. I built the app and the API.",
      points: [
        "Place recommendations usually get lost in group chats. Mapinion keeps everything in a feed: you post the place with a photo, rating and comment and follow what other people recommend.",
        "The React Native app with Expo and Expo Router has login, sign-up and three tabs: feed, new recommendation and profile. The session lives in Zustand with AsyncStorage, and the photo comes from the gallery through Expo Image Picker.",
        "On your profile, you can see, edit and delete your recommendations.",
        "The API is mine too: Node.js with Express, MongoDB with Mongoose, passwords with bcrypt, login with a 15-day JWT and images on Cloudinary. The feed is paginated, the avatar is generated by DiceBear and a cron keeps the server awake.",
      ],
      alts: [
        "Mapinion login screen",
        "Mapinion sign-up screen",
        "Mapinion new recommendation screen",
      ],
    },
    "excel-dashboard": {
      title: "Excel sales dashboard",
      summary:
        "Technical test: you upload a sales spreadsheet and the app cleans the data and builds a dashboard with metrics, four charts, filters and a full table, all in the browser.",
      points: [
        "Real sales spreadsheets come with empty rows, categories spelled different ways and months in nonstandard formats. The challenge was to get to a useful dashboard with no back end.",
        "The app reads the first sheet of the .xlsx or .xls file with SheetJS, drops rows without a category, product or revenue and normalizes categories and months.",
        "The dashboard shows total revenue, orders and average ticket, and four charts in Recharts: sales by category, sales by month, quantity by month and top 5 products by revenue.",
        "The category and month filters feed a table with sorting, pagination, real-time search and 10, 25, 50 or 100 items per page. SeeB is added in index.html.",
      ],
      alts: [
        "Sales dashboard with charts",
        "Excel spreadsheet upload screen",
      ],
    },
    "bystartup-web-qa": {
      summary:
        "A skill for AI agents like Claude Code and Gemini CLI to generate, run and fix E2E tests with Playwright in web applications. Created at Bystartup Labs.",
      points: [
        "Writing and maintaining end-to-end tests takes time and usually gets pushed back. The skill hands this work to the AI agent, with clear rules.",
        "The agent reads the front-end files, finds buttons, forms, navigation, API calls and error, loading and success states, and writes the tests in testes/[feature].e2e.test.ts, creating the folder when it doesn't exist.",
        "Then it runs the tests, retries, fixes what failed and updates old tests without losing the coverage that already worked.",
        "It detects login with JWT, cookies, localStorage, NextAuth, Clerk, Firebase Auth and Auth0, stores the session and generates scenarios for phone, tablet and desktop, with semantic, accessible selectors.",
        "It works with React, Next.js, Vue, Angular and other web interfaces. I created the skill in ByStartup's internal innovation program.",
      ],
      alts: ["Banner for the bystartup-web-qa skill"],
    },
    "iran-tapetes": {
      summary:
        "Link in bio page for Iran Tapetes Orientais, a rug store in Jardins, São Paulo: WhatsApp, online store, Instagram, map and opening hours in a premium look.",
      points: [
        "The store needed a link in bio that matched the rugs it sells, with everything customers look for one tap away.",
        "The page brings together WhatsApp, the online store, Instagram, email, the map of the physical store and opening hours.",
        "It's mobile first, with an animated gradient, glassmorphism and a CSS Grid layout, an embedded Google map and a manifest with icons for the home screen.",
      ],
      alts: [
        "Iran Tapetes Orientais page on a computer",
        "Iran Tapetes Orientais page on a phone",
      ],
    },
    "pizzaria-relampago": {
      summary:
        "Link in bio page for Pizzaria Relâmpago, an artisan pizzeria in Itu (SP), that leads straight to online ordering, WhatsApp, social media and the map.",
      points: [
        "The goal was simple: anyone coming from Instagram should be able to order in one tap.",
        "The order button stands out, followed by WhatsApp, Instagram, Facebook and the map with the address.",
        "I built it in plain HTML and CSS, with no framework or dependencies, so it loads almost instantly on a phone. The background is swapped through a CSS variable.",
      ],
      alts: [
        "Pizzaria Relâmpago page on a computer",
        "Pizzaria Relâmpago page on a phone",
      ],
    },
    linkbio: {
      summary:
        "My link in bio page, with my visual identity: portfolio, LinkedIn, GitHub, email and the music I listen to, with Spotify embeds.",
      points: [
        "It brings together an intro card with a photo, a highlight phrase and the links to my portfolio, LinkedIn, GitHub, Spotify and email.",
        "It follows the identity of my banner, with Unbounded and Montserrat Black Italic, yellow and orange on a dark background. Green only shows up in the Spotify parts, which display favorite playlists and albums right on the page.",
        "HTML and CSS with variables, Flexbox and animations, Open Graph metadata and a manifest.",
      ],
      alts: [
        "Link in bio page on a computer",
        "Link in bio page on a phone",
      ],
    },
    "agenda-manager": {
      summary:
        "Front-end technical test: a schedule from 8 a.m. to 6 p.m. with creating and removing time slots, form validation, statistics and a chart of the distribution by time.",
      points: [
        "The challenge asked for a clear daily schedule, with validation rules and a quick view of how the day is distributed.",
        "The home page presents the product. The schedule groups the day's time slots, opens a modal to create an appointment and lets you remove them.",
        "The form uses React Hook Form with Zod: title and client from 3 to 100 characters, times in HH:mm and an optional description of up to 500 characters.",
        "State lives in Redux Toolkit, with four sample appointments that last for the session, and the statistics appear in a Recharts chart.",
      ],
      alts: [
        "Day schedule with the time slot chart",
        "Schedule home page",
        "Schedule on a phone",
      ],
    },
    "epic-musical": {
      summary:
        "Fan landing page for Epic: The Musical, with interactive sections, GSAP scroll animations, a Spotify album carousel and an FAQ.",
      points: [
        "A personal project to practice animation and visual storytelling on a long page.",
        "The layout uses Flexbox, Grid and color variables, with the main breakpoint at 768px.",
        "GSAP 3 with ScrollTrigger handles the entrances and scroll effects. The albums come in through the Spotify embed, and the icons come from Font Awesome and Material Symbols.",
      ],
      alts: [
        "Opening of the Epic: The Musical landing page",
        "Epic: The Musical landing page on a phone",
      ],
    },
    velory: {
      summary:
        "Final project of EBAC's Front-end Engineer program: a restaurant catalog with ratings, a cart and checkout with delivery and simulated payment, in React and TypeScript.",
      points: [
        "The course's final challenge was to bring together everything I had studied into a complete delivery product.",
        "The listing shows restaurants with category and rating, and each one has its menu. The cart lives in Redux Toolkit, and the counter shows at the top.",
        "Checkout goes through item review, delivery address, simulated card details and order confirmation. The data comes from an API consumed with Axios, and routing uses React Router.",
      ],
      alts: [
        "Velory restaurant catalog",
        "Velory on a phone",
      ],
    },
    matemagika: {
      summary:
        "Educational math app built as a group school assignment: it solves first and second degree equations step by step and does linear interpolation with a chart.",
      points: [
        "The assignment asked for a tool to help study computational mathematics.",
        "The calculation shows the roots and the step by step. For a first degree equation, the coefficient a is left empty or zero.",
        "The interpolation takes pairs of points and draws the line in Chart.js. The page makes it clear that the work belongs to a group.",
      ],
      alts: [
        "Equation solving and interpolation in MatemaGika",
        "MatemaGika on a phone",
      ],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro, company website",
      summary:
        "Landing page for the Cresce+ Futuro consultancy, led by Marina Kamiya, about women's entrepreneurship, technology and AI applied to business.",
      points: [
        "The consultancy needed its own site, separate from the SaaS, to present its work and programs.",
        "I built it in HTML, CSS and JavaScript, with GSAP and ScrollTrigger scroll animations and Font Awesome icons.",
        "SeeB comes built in, like in all my recent projects.",
      ],
      alts: [
        "Opening of the Cresce+ Futuro company website",
        "Cresce+ Futuro company website on a phone",
      ],
    },
    portfolio: {
      title: "Portfolio",
      summary:
        "This site: projects with filters and a dialog with a gallery, dark mode, PWA, complete SEO and attention to accessibility and performance.",
      points: [
        "I wanted a portfolio that showed my work the way I build product: fast, accessible and detailed.",
        "The grid sorts the work by type, with large cards in a zigzag, and each project opens a dialog with a gallery, stack and links. Images only load when they appear on screen.",
        "The light or dark theme uses next-themes. Metadata, Open Graph, sitemap, robots and structured data cover SEO, and the site is a PWA with a manifest, icons and a service worker with an offline page.",
        "The contact form sends the email directly, the animations use Motion and SeeB comes built in.",
      ],
      alts: [
        "Portfolio hero on a computer",
        "Portfolio hero on a phone",
        "Portfolio project grid",
      ],
    },
  },
  experiences: [
    {
      role: "Co-founder & CTO",
      period: "Nov 2026 to present",
      mode: "Remote",
      summary:
        "I co-founded Coach Up with a friend and I lead all of the technology, from architecture to full stack development and infrastructure. It is a white-label SaaS PWA for gyms and personal trainers to manage training, and the product is still being built.",
      did: [
        "The product brings together workout prescription, demo videos, physical assessments, activity history and progress dashboards, and each gym or personal trainer uses its own brand identity.",
        "I build the application in Node.js and Next.js, with Supabase and the infrastructure on Cloudflare, in the TypeScript and JavaScript ecosystem. Nothing has launched yet.",
      ],
    },
    {
      role: "Full Stack Developer",
      period: "May 2026 to present",
      mode: "Remote",
      summary:
        "I'm the developer in charge of technology at T2 Educação: the internal management Hub, the integrations between platforms, the automations, the database, the infrastructure and the whole digital presence. I joined in May 2026 as a front-end developer and, one month later, was promoted to full stack, with the entire technology operation in scope.",
      did: [
        "I turned a system tied to several expensive integrations into a platform that gets more self-sufficient every day, bringing in house what used to depend on third-party tools.",
        "I build and evolve the T2 Hub, the internal system in Next.js, React and TypeScript with modules for tasks, customer support, finance with reconciliation, marketing, a contact center, affiliates and sales reps, a class library and B2B sales management.",
        "I integrated the Hub with more than ten platforms: Crisp and Crisp AI for support, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas for invoices, Instagram Graph API, YouTube Analytics, WhatsApp automations, Google Reviews, GitHub, Cloudflare Turnstile on login and GA4 for conversion tracking.",
        "I model and maintain the PostgreSQL database on Supabase, with schemas per domain, and take care of our own API, the dozens of crons on Vercel, the generation of PDFs, spreadsheets and presentations, and the health checks that watch the endpoints.",
        "I created an MCP server so AI agents can query and operate the Hub safely.",
        "I rebuilt the website, the blog, the free study materials portal and the landing pages in Next.js 16, with Core Web Vitals, technical SEO, accessibility and tracking. I also take care of Cloudflare (DNS, SSL, cache, rules and security), domains, staging and production environments and CI/CD pipelines.",
      ],
      resultValue: "1 month",
      resultLabel: "from front-end to a promotion to full stack",
    },
    {
      role: "Full Stack Software Engineer, AI-First",
      period: "Mar 2026 to Aug 2026",
      mode: "Remote",
      summary:
        "I built SaaS, web systems and mobile apps for startups, covering the whole cycle: requirements, architecture, database, integrations, infrastructure, deploy and publishing to the stores. This is where I built Mirante ERP, the biggest project I've done.",
      did: [
        "I built Mirante ERP, with a point of sale, orders and quotes, inventory, purchasing with approval and XML import, NF-e issuing integrated with SEFAZ, finance with bank reconciliation, multi-company with branches, permissions, an audit log and dashboards with sales forecasting.",
        "I implemented K8 Pay, K8 Fintech's gateway, for Pix and boleto inside the ERP, along with other integrations with payment gateways, authentication and external APIs in the products of that period.",
        "I delivered MVPs, marketplaces and apps in React Native and Expo, and handled publishing on the App Store and Google Play. Today I can get an app ready for store submission in a few hours.",
        "I deployed and maintained applications on a VPS with Docker and Coolify, with CI/CD pipelines, and worked with Supabase, PostgreSQL, Prisma and Drizzle ORM on the database side.",
        "I worked in the AI-First model, with agents, MCPs and AI tools every day, in weekly sprints and meetings with stakeholders. In the internal Bystartup Labs program, I created bystartup-web-qa, a skill that makes AI agents write and fix E2E tests with Playwright.",
      ],
    },
    {
      role: "Full Stack Developer",
      period: "Jan 2026 to Mar 2026",
      mode: "Remote",
      summary:
        "I restructured the Cresce+ Futuro SaaS, which organizes inventory, sales, tasks and staff for micro and small businesses, and moved the infrastructure from three providers to a single base that is cheaper and easier to maintain.",
      did: [
        "I rewrote the application in full stack Next.js 16 with App Router and Tailwind CSS, with authentication and payments through Mercado Pago.",
        "I migrated the stack, which was spread across Azure, Railway and Hostinger, to Neon PostgreSQL and Vercel, centralized the domain and left the product ready to scale.",
        "I also built the consultancy's company website, with SeeB, the accessibility widget I created, built in.",
      ],
    },
  ],
  studies: [
    {
      title: "Software Engineering",
      place: "Gran Faculdade",
      period: "Jun 2026 to Jun 2030",
      text: "Bachelor's degree in progress, with 3,200 hours over 8 semesters. The curriculum covers the whole software cycle: algorithms and data structures, relational and NoSQL databases, front end, back end and mobile, architecture and microservices, cloud, containers and DevOps, quality and testing, information security, agile management and artificial intelligence. I chose the program because it speaks the same language as my work: building product and solving real problems.",
    },
    {
      title: "Artificial Intelligence and Digital Automation",
      place: "UniFECAF with Faculdade de Tecnologia Rocketseat",
      period: "Oct 2026 to Mar 2028",
      text: "Technology degree in progress, 18 months long with hands-on practice from the first semester. The program covers generative AI, prompt engineering, API integration, process and workflow automation, low-code, UX/UI and agile methods, and moves on to RAG, embeddings, fine-tuning and autonomous agents. It's the theory behind what I already use at work with agents, MCP and automation.",
    },
    {
      title: "Software Architecture with AI",
      place: "Extension program",
      period: "Anhanguera, in progress, 360 h",
      text: "Extension program in progress at Anhanguera, with Full Stack Club, 360 hours long. The focus is software architecture with artificial intelligence, through hands-on projects on scalability, performance, testing, microservices, CI/CD and cloud.",
    },
    {
      title: "Informática para Internet (web development)",
      place: "ETEC Parque Belém",
      period: "2023 to 2025",
      text: "Technical high school program, completed. I started without really knowing how to use a computer and finished programming: I studied logic, HTML, CSS, JavaScript, PHP, SQL, WordPress, MIT App Inventor, Figma, UX/UI, accessibility, HTTP protocols, shell basics and virtualization with VirtualBox. My final project was SeeB, a Chromium extension and accessibility widget whose technical part was mine. It was presented at the school and today it's open source and on the Chrome Web Store.",
    },
    {
      title: "Front-end Engineer",
      place: "EBAC",
      period: "Jul 2024 to Jan 2026",
      text: "Long front-end program, completed. I studied semantic HTML, CSS with Sass and Less, Bootstrap and Tailwind, modern JavaScript and object orientation, build automation with Gulp and Grunt, React with TypeScript, Redux Toolkit, styled-components and testing with Jest. I did dozens of exercises published on my GitHub and finished the course with Velory, a restaurant catalog with a cart and checkout in React, TypeScript and Redux Toolkit.",
    },
    {
      title: "Agile Methodologies",
      place: "Rocketseat",
      period: "Oct 2025",
      text: "I studied Scrum and Kanban in practice: team roles, backlog, sprint planning and review, flow boards and organizing work in short cycles. I use this every day, with weekly sprints and frequent alignment with whoever is asking for the product.",
    },
    {
      title: "Introduction to Go",
      place: "Rocketseat",
      period: "Oct 2025",
      text: "My first contact with Go, Google's language widely used in back end and infrastructure. I studied the syntax, static typing, functions, structs, slices and maps and Go's way of handling errors, and wrote small programs to lock in the basics. It was a way to broaden my back-end toolkit beyond Node.js.",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "In the agents edition of Next Level Week, I built a full stack AI application: question rooms where the audio of a stream is recorded, transcribed by the Gemini API and turned into embeddings stored in PostgreSQL with pgvector. Using semantic search, the system answers questions based on what was said. The back end used Node.js, Fastify, Drizzle ORM, Zod and Docker, and the front end used React, Vite, Tailwind CSS and shadcn/ui.",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "Mar 2026",
      text: "A 100-hour online program from Instituto PROA for young people who studied in public schools, split into self-knowledge, career planning, logical reasoning and communication. I worked on goals with the SMART method, structured reasoning for solving problems and making decisions, professional writing, my LinkedIn profile and team communication.",
    },
    {
      title: "JavaScript Intensive",
      place: "Hashtag Treinamentos",
      period: "",
      text: "A hands-on JavaScript event from scratch, with four live classes and a complete project in each one. I built an audiobook player with playback controls and chapters, an Apple Watch style interface, a digital menu and a real-time chat, practicing variables, functions, DOM manipulation and events, and publishing the projects.",
    },
    {
      title: "Ri Happy Bootcamp: Front-end from Scratch",
      place: "DIO",
      period: "",
      text: "A free DIO bootcamp with Ri Happy, in five modules: Git and GitHub for collaborative development, semantic HTML and CSS, programming logic, first steps with JavaScript (objects, classes, arrays and consuming APIs) and a front-end portfolio. The hands-on projects include landing pages, JavaScript games like Detona Ralph and an emoji memory game, and a Pokédex that consumes the PokéAPI.",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "I did all 50 mini projects in the course, one a day, each focused on an interface effect or component: animations, carousels, forms, modals, counters, consuming APIs and DOM manipulation without a framework. They are all published in the github.com/devrafcks/50days_50projects repository.",
    },
    {
      title: "Introduction to Programming",
      place: "EBAC",
      period: "",
      text: "An entry-level programming course, with logic, algorithms, variables, conditionals, loops and functions. It was the foundation I used before moving on to the same school's Front-end Engineer program.",
    },
    {
      title: "Tech Career Week",
      place: "Alura",
      period: "",
      text: "A week of content from Alura about careers in technology: areas to work in, how to build a portfolio and resume, how to prepare for hiring processes and how to plan your studies. It helped me organize the study path I followed afterward.",
    },
    {
      title: "Design (Photoshop)",
      place: "Brainstorm Academy",
      period: "2024 to Jul 2025",
      text: "An open Photoshop course, from 2024 to July 2025. I studied image editing and retouching, composition, layers and masks, typography and making pieces for social media. I still use it to put together screens, mockups and images for my projects.",
    },
    {
      title: "Universo Photoshop",
      place: "Brainstorm Academy",
      period: "",
      text: "Certificate for Brainstorm Academy's Photoshop track, covering selection tools, color adjustments, compositing and creating visual pieces from scratch.",
    },
    {
      title: "Microsoft AZ-900",
      place: "Microsoft",
      period: "in preparation",
      text: "I'm preparing for the Azure Fundamentals certification. The content covers cloud concepts (IaaS, PaaS, SaaS and deployment models), Azure's main compute, networking and storage services, security, identity, governance, pricing and SLAs. I haven't taken the exam yet.",
    },
  ],
  recommendations: [
    {
      role: "Full Stack Developer, same team at ByStartup",
      date: "August 3, 2026",
      paragraphs: [
        "I had the opportunity to work with Rafael Henrique Blanco at ByStartup, and I can say he was one of the most solid and reliable professionals I have ever worked with.",
        "One of his greatest strengths is his ability to lead highly complex projects with speed and quality, without losing control or his calm. He delivers consistently, organizes his work well and turns difficult technical challenges into clear, well-executed solutions.",
        "Beyond his excellent technical knowledge and experience in software development, Rafael is extremely professional, responsible and organized. He stays mature under pressure, communicates objectively and raises the level of the team around him.",
        "I recommend Rafael without a doubt. I'm sure he will be a great asset to any team looking for someone experienced, reliable and able to deliver complex projects with excellence.",
      ],
    },
    {
      role: "Technology COO, directly supervised Rafael at ByStartup",
      date: "August 2, 2026",
      paragraphs: [
        "Rafael is the kind of developer who brings peace of mind to the team. During our interactions, his strong technical command and his proactiveness were very clear.",
        "He doesn't wait for problems to happen; he anticipates them in planning meetings, suggests good practices and makes sure the final product has the best possible quality.",
        "Excellent professional!",
      ],
    },
  ],
};
