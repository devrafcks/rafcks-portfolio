import type { ContentText } from "./types";

/**
 * Contenu long en français. Les listes suivent l'ordre des fichiers portugais de data/.
 * Les textes alternatifs des images ne sont pas traduits ici : ils viennent de la version anglaise.
 */
export const fr: ContentText = {
  projects: {
    t2: {
      summary:
        "Site institutionnel de T2 Educação, avec des cours de préparation aux certifications financières, un espace entreprises et des landing pages. Reconstruit en Next.js 16 avec un accent sur la performance, le SEO et la conversion.",
      points: [
        "T2 prépare les professionnels aux certifications du marché financier comme CPA et C-Pro. Le site devait charger vite, bien se positionner sur Google et mener le visiteur jusqu'à l'inscription ; avant, il dépendait d'un constructeur de sites visuel.",
        "J'ai reconstruit le site en Next.js 16 avec App Router, React 19 et Tailwind CSS 4, avec les pages de cours, de certifications et l'espace entreprises, ainsi que les landing pages des campagnes.",
        "Je me suis occupé des Core Web Vitals, du SEO technique, de l'accessibilité, des animations avec GSAP et Three.js et du suivi des conversions et du checkout dans GA4. Le site utilise Supabase et Resend, et le domaine passe par Cloudflare.",
        "Je suis le développeur responsable de la technologie de l'entreprise. Les captures ne montrent que des pages publiques. Le Hub interne, les intégrations et la plateforme des élèves n'apparaissent pas ici.",
      ],
    },
    "t2-blog": {
      summary:
        "Blog public de T2 avec des articles et des guides sur les certifications financières, les carrières et le marché, pensé pour être lu sur mobile et trouvé sur Google.",
      points: [
        "Le blog est la principale source de trafic organique de T2. Il fallait un SEO technique solide, une lecture confortable sur mobile et un flux de publication simple pour l'équipe.",
        "J'ai construit le front-end en Next.js avec Ghost comme CMS headless. La page d'accueil met en avant des sujets, comme l'examen C-Pro R, et chaque article affiche l'auteur et la date.",
        "Le SEO technique et GA4 suivent chaque publication. Les captures ne montrent que du contenu éditorial public.",
      ],
    },
    "t2-docs": {
      title: "Supports gratuits T2",
      summary:
        "Portail de polycopiés, examens blancs et fiches gratuits pour les certifications financières comme CPA, C-Pro, CFP et ANCORD, construit avec Next.js et Ghost headless.",
      points: [
        "T2 propose des supports gratuits à ceux qui préparent une certification. Le portail organise polycopiés, examens blancs et fiches par certification, faciles à parcourir et à trouver sur Google.",
        "J'ai construit le portail en Next.js, en récupérant le contenu de Ghost en mode headless, pour que l'équipe publie sans toucher au code.",
        "Les supports publiés sont du contenu d'étude. Aucune donnée d'élève n'apparaît sur le portail.",
      ],
    },
    mirante: {
      summary:
        "ERP multi-entreprise avec caisse, NF-e (facture électronique brésilienne) intégrée à la SEFAZ, finances avec rapprochement, stock, achats et K8 Pay pour Pix et boleto. Le plus grand système que j'aie construit.",
      points: [
        "Les petites et moyennes entreprises suivent souvent ventes, stock, achats et finances dans des outils séparés. Mirante réunit tout dans un seul système, avec plusieurs entreprises et filiales sur le même compte et un sélecteur d'unité en haut.",
        "Ventes : une caisse avec paiement et clôture, des commandes avec vendeurs et des devis. Stock avec un tableau de bord des produits sous le minimum ou négatifs, catalogue, prix, catégories et services.",
        "Fiscalité et achats : émission et gestion de NF-e intégrées à la SEFAZ avec certificat A1, un panneau des factures reçues avec manifestation, des demandes d'achat avec approbation ou refus, et la réception de marchandises par XML, par clé de NF-e ou manuellement.",
        "Finances : comptes fournisseurs et clients, ouverture et fermeture de caisse, comptes bancaires avec relevés et rapprochement, avances, renégociation d'échéances, centres de coûts et plan comptable. J'ai aussi intégré K8 Pay, la passerelle de K8 Fintech, pour encaisser par Pix et boleto.",
        "Gestion : un tableau de bord avec KPI, chiffre d'affaires d'une année sur l'autre et prévision des ventes, un registre unique de clients, fournisseurs et employés, utilisateurs et permissions, un journal d'audit exportable, une recherche globale et des actions rapides avec Ctrl+K, et la personnalisation du thème, de la densité et des animations.",
        "J'ai construit le système chez ByStartup en environ trois mois. L'idée du produit venait du client. Le prototype, le design produit, le développement full stack et l'infrastructure étaient à moi, du front-end à la base de données, aux intégrations et au déploiement. Les captures viennent d'un compte de test avec des données fictives.",
      ],
    },
    carretel: {
      summary:
        "Mon propre SaaS pour les ateliers de couture : il enregistre la coupe, prouve la livraison et encaisse par Pix depuis le téléphone, même avec un signal faible. Bilingue, en portugais et en espagnol.",
      points: [
        "Les patrons d'ateliers de couture, dont beaucoup viennent de la communauté bolivienne de São Paulo, suivent coupes, livraisons et paiements sur un cahier et sur WhatsApp. En cas de désaccord sur la quantité ou le prix, rien ne prouve rien. Carretel résout cela avec trois verbes : enregistrer, prouver et encaisser.",
        "Enregistrer : une coupe reçue est notée avec photo, quantité et prix dictés à la voix, grille de tailles, délai et fournitures, et la production est notée par personne, opération et machine. Prouver : un lien public montre photos, grille, montant et un code de vérification, et le client confirme par WhatsApp sans créer de compte. L'acceptation enregistre l'heure, le navigateur et l'IP et reste immuable dans la base.",
        "Encaisser : l'écran montre qui doit et depuis combien de jours, génère un message WhatsApp prêt à envoyer avec Pix Copia e Cola et un QR Code (BR Code avec CRC16 écrit dans le projet) et accepte un paiement total ou partiel. Il y a aussi une clôture hebdomadaire avec reçu bilingue, un calculateur de prix juste par pièce, l'export des données selon la LGPD et la suppression du compte.",
        "L'app est offline first : les actions vont dans une file idempotente en IndexedDB et se synchronisent quand le signal revient, avec service worker et installation en PWA. Elle est multi-tenant, avec une isolation par atelier testée contre un vrai Postgres.",
        "Les abonnements passent par AbacatePay, avec un webhook validé par HMAC-SHA256. L'interface suit WCAG 2.2 AA, avec de grandes zones tactiles et SeeB intégré, et le projet a des tests avec Vitest, des tests de propriétés avec fast-check et des tests d'accessibilité avec Playwright et axe.",
        "C'est mon propre produit, de l'idée à la spécification, au design et au code. Il est en pré-lancement.",
      ],
    },
    gatelite: {
      summary:
        "La Terre d'aujourd'hui, vue d'en haut : choisissez un lieu et voyez l'image satellite du jour, les satellites qui sont passés au-dessus, son évolution depuis 2000 et ce qui se passe près de lui en ce moment. Le tout avec les données ouvertes de la NASA, sans compte ni base de données.",
      points: [
        "Le nom mélange gato (chat) et satélite (satellite). Les images satellites de la NASA sont ouvertes, mais dispersées dans des portails techniques. Gatélite les réunit sur un seul site, fait pour qui veut voir son quartier, sa ville ou toute la planète d'en haut.",
        "Explorer : un globe avec la mosaïque quotidienne des satellites de la NASA (VIIRS et MODIS), Landsat et Sentinel à 30 m, infrarouge, lumières nocturnes, température et fumée. Quand le zoom dépasse ce que l'image du jour peut montrer, la carte passe seule à une couche haute résolution où l'on voit maisons, pâtés de maisons et le Christ Rédempteur. Toute la vue vit dans l'URL.",
        "L'onglet Météo montre les 14 derniers jours du lieu côte à côte et estime la couverture nuageuse de chacun à partir de la couleur de l'image, avec lever et coucher du soleil. Les passages de 14 satellites sur les dernières et prochaines 24 heures sont calculés dans le navigateur, avec SGP4 dans un Web Worker. Il y a aussi un time-lapse du même jour de l'année depuis 2001 et un avant/après avec un rideau à faire glisser.",
        "La planète maintenant : une carte du monde avec le jour et la nuit qui avancent en temps réel, les lumières des villes, la flotte de satellites en direct, les événements naturels actifs (incendies, tempêtes, volcans et icebergs) et les photos de la caméra EPIC, prises à 1,5 million de km.",
        "Pas de compte ni de base de données : l'URL garde la vue, l'appareil garde les lieux enregistrés et le serveur ne fait que mettre en cache les API externes. Le domaine (orbites, nuages, soleil et événements) est fait de règles pures testées avec Vitest. C'est un projet personnel open source, sous licence MIT et sans lien officiel avec la NASA.",
      ],
    },
    cresce: {
      summary:
        "SaaS de gestion pour micro et petites entreprises. J'ai réécrit le produit en Next.js 16 et déplacé l'infrastructure vers Neon et Vercel.",
      points: [
        "Le SaaS Cresce+ organise stock, ventes, tâches et équipe des micro et petites entreprises. La version précédente était éparpillée entre Azure, Railway et Hostinger, chère à maintenir et difficile à faire évoluer.",
        "J'ai réécrit l'application en Next.js 16 full stack avec App Router et Tailwind CSS, avec authentification et paiements via Mercado Pago.",
        "J'ai migré la base vers Neon PostgreSQL et l'application vers Vercel, et centralisé le domaine.",
        "J'ai aussi fait le site institutionnel du cabinet de conseil, qui a sa propre carte.",
      ],
    },
    xerox: {
      summary:
        "Système de production pour les reprographies qui a remplacé les fiches de caisse papier et les tableurs par une saisie numérique, un stock automatique et des rapports Excel et PDF.",
      points: [
        "Dans beaucoup de reprographies, chaque travail est noté sur une fiche papier et additionné dans un tableur en fin de journée. Cela entraîne des erreurs, un historique perdu et aucun contrôle du stock. Xerox Manager remplace ce flux par un système simple, traçable et en temps réel.",
        "L'employé tape le code du produit, et le nom et le prix se remplissent seuls. Il ajuste quantité et prix, confirme, et le stock baisse automatiquement. Modifications et suppressions ne sont permises que le jour même.",
        "L'admin gère employés, produits et stock, avec alerte de stock bas et ajustement manuel, et sort des rapports par période avec la production par employé et la consommation de stock, exportés en Excel avec trois onglets et en PDF.",
        "La sécurité a été soignée : mots de passe avec bcrypt, sessions JWT en cookie httpOnly avec une table de sessions révocables, vérification des permissions dans chaque Server Action et filtres validés avec Zod.",
        "C'est une version de démonstration qui suit la même logique que le système utilisé en production. J'ai tout fait, de la base de données à l'interface, avec SeeB intégré.",
      ],
    },
    somnus: {
      summary:
        "App pour noter ses heures de sommeil et repérer des tendances : moyenne, meilleure et pire nuit et graphiques d'évolution, avec un compte par personne et l'accessibilité intégrée.",
      points: [
        "Pour mieux dormir, il faut des données simples et régulières, pas des apps pleines de fonctions inutilisées. Somnus fait une seule chose bien : noter et analyser les heures dormies.",
        "Le flux est direct : se connecter, noter la nuit et voir l'analyse. Le tableau de bord montre la moyenne de sommeil, la meilleure et la pire nuit, l'historique complet et des graphiques d'évolution.",
        "L'authentification utilise Clerk, et chacun ne voit que ses données. Le back-end tourne sur des Server Actions Next.js, typé de bout en bout avec Prisma et PostgreSQL sur Neon.",
        "L'accessibilité était une exigence dès le départ, avec SeeB intégré. J'ai mené le projet seul, de la base de données au déploiement sur Vercel.",
      ],
    },
    bicus: {
      summary:
        "App de services, produits, locations et commerces locaux, avec carte, chat et annonces mises en avant payées par Pix, carte ou boleto. Sur l'App Store, Google Play et le web.",
      points: [
        "Bicus réunit dans une seule app les services, produits, locations et commerces de la ville, avec recherche par distance et vendeurs vérifiés.",
        "L'app affiche les annonces sur une carte, avec choix de la position et recherche d'adresse, et propose un chat intégré pour s'arranger directement avec le vendeur.",
        "Le vendeur peut mettre une annonce en avant. Le paiement passe par Mercado Pago, par Pix, carte ou boleto, et la mise en avant s'active seule après confirmation. L'app ne reçoit ni ne stocke aucune donnée de carte.",
        "Une seule base de code Expo et React Native génère les apps iOS et Android et la version web. L'idée du produit venait du client. Prototype, produit, développement full stack et infrastructure étaient à moi.",
      ],
    },
    apertou: {
      summary:
        "Marketplace pour que les boutiques physiques vendent via le téléphone, avec une app, un panneau commerçant et un panneau admin. Pix ou carte, partage automatique pour chaque boutique et commande à essayer avant d'acheter.",
      points: [
        "Les boutiques de quartier perdent des ventes parce qu'elles ne sont pas sur le téléphone du client, et créer leur propre e-commerce coûte cher. Apertou Comprou place ces boutiques dans une marketplace locale, avec livraison à domicile ou retrait en magasin.",
        "Le client achète par l'app ou le site, parle à la boutique dans le chat et peut demander des articles à essayer avant de payer, avec une commande d'essai. Le paiement se fait par Pix ou carte.",
        "Chaque boutique a un compte bénéficiaire sur Pagar.me, et le montant de chaque vente est partagé automatiquement et transféré sur le compte bancaire du commerçant. Le panneau guide la saisie des données bancaires et empêche la boutique de se publier tant qu'elle n'est pas complète.",
        "Le produit a trois parties : l'app client, le panneau commerçant et l'admin de la marketplace, avec des graphiques de suivi. L'idée venait du client. J'ai fait le prototype, le produit, le développement full stack et l'infrastructure.",
      ],
    },
    junto: {
      summary:
        "App et site pour trouver des courses ouvertes près de chez vous, créées par de vraies personnes. On voit qui y va, on confirme sa présence et on crée sa propre course. Sur le web, Google Play et l'App Store.",
      points: [
        "Courir seul décourage, et s'organiser dans un groupe de discussion ne marche pas toujours. Junto montre les courses ouvertes près de vous, créées par de vraies personnes. La promesse du produit : trouvez quelqu'un, courez ensemble.",
        "On voit qui y va, on confirme sa présence, on rejoint le chat de la course, on fait le check-in au point de rendez-vous et on crée sa propre course, avec un lieu, un jour et un rythme. Les courses apparaissent par quartier et horaire, avec un filtre pour les courses entre femmes. L'app est gratuite, sans carte.",
        "La page aborde la sécurité du rendez-vous : identité vérifiée, liste ouverte des confirmés, suivi en direct avec une personne de confiance, check-out automatique et bouton d'urgence. Les groupes et clubs de course ont une page, un agenda et des courses ouvertes. La bêta est ouverte à Rio de Janeiro.",
        "Sur l'App Store et Google Play, l'app s'appelle « junto: companhia para correr ». L'idée du produit venait du client. Prototype, produit, développement full stack et infrastructure étaient mon travail.",
      ],
    },
    voxx: {
      summary:
        "Site de l'Agência Voxx, agence de marketing digital à Itapetininga, avec des animations en Framer Motion et un formulaire de contact qui envoie un e-mail.",
      points: [
        "L'agence avait besoin d'un site montrant son travail avec la même qualité visuelle qu'elle offre à ses clients, sans être lourd sur mobile.",
        "La page présente la planification, les réseaux sociaux, l'identité visuelle et le trafic payant, avec des animations d'entrée et de défilement faites en Framer Motion.",
        "Je l'ai construit en Next.js 16 avec App Router, Tailwind CSS et des polices Google (Besley et DM Sans). Le formulaire envoie l'e-mail via Resend avec Nodemailer, et Google Analytics arrive par @next/third-parties.",
      ],
    },
    jotape: {
      summary:
        "E-commerce de montres authentiques, réalisé en freelance : catalogue par marque, recherche, paiement par Pix ou carte via Mercado Pago, suivi de commande et WhatsApp.",
      points: [
        "Une boutique de montres authentiques qui avait besoin de son propre e-commerce, où le client achète seul, à toute heure.",
        "Le catalogue est organisé par marque, avec recherche, pages produit et panier. Le paiement se fait sur le site même, par Pix ou carte de crédit, traité par Mercado Pago.",
        "Le client suit sa commande sur le site et parle à la boutique sur WhatsApp. La boutique peut aussi s'installer comme une app sur le téléphone. L'idée de la boutique est venue de moi, et j'ai fait le reste : prototype, produit, développement full stack et infrastructure.",
      ],
    },
    seeb: {
      summary:
        "Widget et extension d'accessibilité open source, créés pour mon projet de fin d'études. Avec une ligne de script, n'importe quel site gagne contraste, filtres pour daltoniens, lecteur vocal et plus, sans collecter de données.",
      points: [
        "Beaucoup de personnes malvoyantes, daltoniennes ou avec un TDAH rencontrent des obstacles pour lire le web, et la plupart des sites n'offrent aucun réglage. SeeB est né comme une extension Chromium gratuite et est aussi devenu un widget que n'importe quel site peut intégrer en une ligne.",
        "Le panneau réunit des filtres protanopie, deutéranopie, tritanopie et monochrome, contraste élevé, inversion des couleurs et mode sombre, texte agrandi, espacement, texte en gras, liens soulignés et surlignés, règle et ligne de focus de lecture, luminosité et saturation, masquage des images, arrêt des animations, mise en évidence du focus clavier, grand curseur et lecteur vocal avec choix de la voix et de la vitesse.",
        "Le widget est servi par CDN sur Cloudflare Pages, donc chaque amélioration atteint tout de suite ceux qui l'utilisent déjà. La documentation publique montre comment l'intégrer en HTML pur, Vite, Vue, Angular et Next.js avec App Router, y compris les détails de SSR et d'hydratation que j'ai résolus moi-même en l'intégrant à des projets Next.js.",
        "L'extension utilise Manifest V3, ne demande que les permissions storage et activeTab et est sur le Chrome Web Store. Rien n'est collecté : les préférences restent dans le navigateur.",
        "Aujourd'hui SeeB est intégré à mes projets, comme Carretel, Xerox Manager, Somnus, Giz, Velory, le tableau de bord Excel, l'Agência Voxx et le site institutionnel de Cresce+ Futuro. J'ai fait la partie technique du projet de fin d'études à l'ETEC Parque Belém et je continue à le maintenir comme projet ouvert sur GitHub.",
      ],
    },
    giz: {
      title: "GIZ, assistant IA",
      summary:
        "Agent IA qui reçoit un court brief et rédige les textes pour WhatsApp, Instagram et e-mail. Il protège les données personnelles avant d'appeler le modèle et ne publie qu'avec une validation humaine.",
      points: [
        "Projet pour le défi « Seu Primeiro Agente de IA » (Votre premier agent IA). Giz est une chaîne de salles de sport fictive dont l'équipe perd du temps à rédiger annonces et campagnes pour chaque canal.",
        "L'agent travaille en quatre étapes. D'abord, le serveur masque CPF (numéro fiscal brésilien), téléphone, e-mail et numéros de carte avant que quoi que ce soit parte vers le modèle. Ensuite il comprend la demande, rédige et révise. À la fin, une personne lit, modifie et valide. Rien n'est publié tout seul.",
        "Les étapes du modèle utilisent persona, méta-prompting, few-shot et vérification par questions, avec une sortie JSON pour enchaîner une étape à la suivante et une température différente par tâche (0,2 pour le tri et la révision, 0,8 pour la rédaction).",
        "Le texte de l'employé arrive délimité et est traité comme une donnée, pour éviter l'injection de prompt. Le guide de marque interdit de promettre des résultats physiques, de donner des conseils de santé et d'inventer des informations.",
        "Le back-end est fait de fonctions serverless Node.js sur Vercel, avec des réponses en streaming NDJSON. Le front-end est en HTML, CSS et modules JavaScript, sans framework. Le modèle est Gemini 3.5 Flash-Lite, avec gemini-flash-lite-latest en secours.",
      ],
    },
    "steal-a-boo": {
      summary:
        "Simulateur social pour Roblox dans une fête foraine nocturne, jusqu'à 8 joueurs : attrapez des Boos, construisez votre base, générez du Cash, volez vos amis et défendez ce qui est à vous. Fait avec l'IA, pour s'amuser.",
      points: [
        "Une expérience personnelle pour apprendre le développement de jeux Roblox avec un flux professionnel, en utilisant l'IA comme appui.",
        "On attrape des Boos de 7 raretés et on les place dans sa base pour générer du Cash par seconde. On entraîne la Vitesse et la Force de lancer et on construit jusqu'à 6 étages.",
        "On peut voler les bases dont la porte est ouverte et se défendre avec des frayeurs comiques. Il y a Rebirth, un coffre quotidien et un classement. Les frayeurs sont légères, pour tous les âges.",
        "Le code vit hors de Studio, en Luau versionné dans Git, synchronisé avec Rojo, paquets via Wally et données des joueurs sauvegardées avec ProfileStore.",
      ],
    },
    "67-noites": {
      summary:
        "Survie coopérative pour 1 à 5 joueurs dans un terreiro (lieu de culte de l'umbanda) au fond des bois : gardez le chaudron allumé et survivez 67 nuits jusqu'à l'affrontement avec Zé Pilintra. Fait avec l'IA, pour s'amuser.",
      notice:
        "Ce jeu est une œuvre de fiction réalisée dans le plein respect de l'umbanda et de la culture afro-brésilienne, sans intention d'offenser. Les entités apparaissent comme des gardiens qui mettent le joueur à l'épreuve, et le jeu ne reproduit ni rituels, ni chants, ni prières réels. L'humour est dans les situations du jeu, jamais dans la religion.",
      points: [
        "Une expérience personnelle de survie coopérative sur Roblox, faite avec l'aide de l'IA et dans le plein respect de l'umbanda et de la culture afro-brésilienne.",
        "Chaque nuit, le groupe défend le chaudron contre les invasions et rencontre quatre entités, qui apparaissent comme des gardiens qui mettent le joueur à l'épreuve. Le combat est simple, avec combos, esquive et parade.",
        "La carte a des biomes comme le terreiro, la carrière et la cabane dans les bois.",
        "Le code est en Luau versionné avec Rojo et Wally, données sauvegardées avec ProfileStore, lint avec Selene, formatage avec StyLua et scripts avec Lune. Le README recense 646 tests d'équilibrage.",
      ],
    },
    offscope: {
      summary:
        "Jeu de tir en ligne à la première personne pour Roblox centré sur les no-scopes : un sniper, un couteau, trois cartes, classé avec ELO et un serveur qui valide chaque tir. Fait avec l'IA, pour s'amuser.",
      notice: "Léger, 16+, violence légère, sans sang",
      points: [
        "Un projet personnel pour apprendre le netcode et les jeux compétitifs, fait avec l'aide de l'IA (Claude Code).",
        "Modes Duel 1v1 et Duos 2v2, en partie libre et classée avec ELO, plus Équipes 4v4 et Chacun pour soi à 8 joueurs. À la fin d'une partie, un vote de 20 secondes choisit la carte suivante.",
        "Le serveur décide de chaque tir. Le client envoie l'intention avec une graine déterministe, et le serveur reconstruit la direction, remonte les hitbox dans le temps (compensation de latence à 30 Hz, jusqu'à 0,45 s) et confirme le coup. Le couteau tue d'un coup par derrière.",
        "Trois cartes entièrement construites en code, avec un vrai terrain via WriteVoxels : Cais 09, un port à l'aube, Avenida 11, le centre-ville de nuit, et Posto 47, en montagne. L'arme, les bras et le couteau sont assemblés à partir de Parts et animés en code, et les 22 sons et les textures sont aussi générés dans le dépôt.",
        "Les cosmétiques sont purement visuels, sans loot box ni pay-to-win, une boutique quotidienne identique sur tous les serveurs et des achats confirmés seulement après la sauvegarde ProfileStore. Le README compte 13,5k lignes de Luau, et la CI lance rojo build, la vérification de types avec luau-lsp et Selene à chaque push.",
      ],
    },
    mapinion: {
      summary:
        "App mobile pour découvrir et recommander des lieux, avec photo, note de 1 à 5 et commentaire, et un fil avec les recommandations des autres. J'ai fait l'app et l'API.",
      points: [
        "Les recommandations de lieux se perdent souvent dans les groupes de discussion. Mapinion garde tout dans un fil : on publie le lieu avec photo, note et commentaire et on suit ce que les autres recommandent.",
        "L'app React Native avec Expo et Expo Router a connexion, inscription et trois onglets : fil, nouvelle recommandation et profil. La session vit dans Zustand avec AsyncStorage, et la photo vient de la galerie via Expo Image Picker.",
        "Sur votre profil, vous voyez, modifiez et supprimez vos recommandations.",
        "L'API est aussi de moi : Node.js avec Express, MongoDB avec Mongoose, mots de passe avec bcrypt, connexion avec un JWT de 15 jours et images sur Cloudinary. Le fil est paginé, l'avatar est généré par DiceBear et un cron garde le serveur éveillé.",
      ],
    },
    "excel-dashboard": {
      title: "Tableau de bord des ventes Excel",
      summary:
        "Test technique : vous envoyez un tableur de ventes et l'app nettoie les données et monte un tableau de bord avec indicateurs, quatre graphiques, filtres et un tableau complet, le tout dans le navigateur.",
      points: [
        "Les vrais tableurs de ventes arrivent avec des lignes vides, des catégories écrites de plusieurs façons et des mois dans des formats non standard. Le défi était d'obtenir un tableau de bord utile sans back-end.",
        "L'app lit la première feuille du fichier .xlsx ou .xls avec SheetJS, écarte les lignes sans catégorie, produit ou chiffre d'affaires et normalise catégories et mois.",
        "Le tableau de bord montre le chiffre d'affaires total, les commandes et le panier moyen, et quatre graphiques Recharts : ventes par catégorie, ventes par mois, quantité par mois et top 5 des produits par chiffre d'affaires.",
        "Les filtres de catégorie et de mois alimentent un tableau avec tri, pagination, recherche en temps réel et 10, 25, 50 ou 100 éléments par page. SeeB est ajouté dans index.html.",
      ],
    },
    "bystartup-web-qa": {
      summary:
        "Une skill pour que des agents IA comme Claude Code et Gemini CLI génèrent, exécutent et corrigent des tests E2E avec Playwright dans des applications web. Créée au Bystartup Labs.",
      points: [
        "Écrire et maintenir des tests de bout en bout prend du temps et passe souvent au second plan. La skill confie ce travail à l'agent IA, avec des règles claires.",
        "L'agent lit les fichiers du front-end, repère boutons, formulaires, navigation, appels d'API et états d'erreur, de chargement et de succès, et écrit les tests dans testes/[feature].e2e.test.ts, en créant le dossier s'il n'existe pas.",
        "Ensuite il exécute les tests, réessaie, corrige ce qui a échoué et met à jour les anciens tests sans perdre la couverture qui fonctionnait déjà.",
        "Il détecte la connexion avec JWT, cookies, localStorage, NextAuth, Clerk, Firebase Auth et Auth0, garde la session et génère des scénarios pour mobile, tablette et ordinateur, avec des sélecteurs sémantiques et accessibles.",
        "Il fonctionne avec React, Next.js, Vue, Angular et d'autres interfaces web. J'ai créé la skill dans le programme interne d'innovation de ByStartup.",
      ],
    },
    "iran-tapetes": {
      summary:
        "Page de lien en bio pour Iran Tapetes Orientais, magasin de tapis dans le quartier des Jardins à São Paulo : WhatsApp, boutique en ligne, Instagram, carte et horaires avec un look premium.",
      points: [
        "Le magasin avait besoin d'un lien en bio à la hauteur des tapis qu'il vend, avec tout ce que le client cherche à portée d'un toucher.",
        "La page réunit WhatsApp, la boutique en ligne, Instagram, l'e-mail, la carte du magasin physique et les horaires d'ouverture.",
        "Elle est mobile first, avec un dégradé animé, du glassmorphism et une mise en page en CSS Grid, une carte Google intégrée et un manifest avec icônes pour l'écran d'accueil.",
      ],
    },
    "pizzaria-relampago": {
      summary:
        "Page de lien en bio pour la Pizzaria Relâmpago, pizzeria artisanale à Itu (SP), qui mène directement à la commande en ligne, à WhatsApp, aux réseaux et à la carte.",
      points: [
        "L'objectif était simple : qui arrive d'Instagram doit pouvoir commander en un toucher.",
        "Le bouton de commande ressort, suivi de WhatsApp, Instagram, Facebook et de la carte avec l'adresse.",
        "Je l'ai fait en HTML et CSS purs, sans framework ni dépendances, pour qu'elle se charge presque instantanément sur mobile. Le fond se change par une variable CSS.",
      ],
    },
    linkbio: {
      summary:
        "Ma page de lien en bio, avec mon identité visuelle : portfolio, LinkedIn, GitHub, e-mail et la musique que j'écoute, avec des intégrations Spotify.",
      points: [
        "Elle réunit une carte de présentation avec photo, une phrase en avant et les liens vers mon portfolio, LinkedIn, GitHub, Spotify et e-mail.",
        "Elle suit l'identité de ma bannière, avec Unbounded et Montserrat Black Italic, jaune et orange sur fond sombre. Le vert n'apparaît que dans les parties Spotify, qui affichent playlists et albums favoris directement sur la page.",
        "HTML et CSS avec variables, Flexbox et animations, métadonnées Open Graph et manifest.",
      ],
    },
    "agenda-manager": {
      summary:
        "Test technique front-end : un agenda de 8 h à 18 h avec création et suppression de créneaux, validation de formulaire, statistiques et un graphique de répartition par horaire.",
      points: [
        "Le défi demandait un agenda du jour clair, avec des règles de validation et une vue rapide de la répartition de la journée.",
        "La page d'accueil présente le produit. L'agenda regroupe les créneaux du jour, ouvre une modale pour créer un rendez-vous et permet de les supprimer.",
        "Le formulaire utilise React Hook Form avec Zod : titre et client de 3 à 100 caractères, horaires au format HH:mm et une description facultative jusqu'à 500 caractères.",
        "L'état vit dans Redux Toolkit, avec quatre rendez-vous d'exemple qui durent le temps de la session, et les statistiques apparaissent dans un graphique Recharts.",
      ],
    },
    "epic-musical": {
      summary:
        "Landing page de fan pour Epic: The Musical, avec des sections interactives, des animations de défilement en GSAP, un carrousel d'albums Spotify et une FAQ.",
      points: [
        "Un projet personnel pour pratiquer l'animation et la narration visuelle sur une longue page.",
        "La mise en page utilise Flexbox, Grid et des variables de couleur, avec le point de rupture principal à 768px.",
        "GSAP 3 avec ScrollTrigger gère les entrées et les effets de défilement. Les albums arrivent par l'intégration Spotify, et les icônes viennent de Font Awesome et Material Symbols.",
      ],
    },
    velory: {
      summary:
        "Projet final du parcours Ingénieur Front-end de l'EBAC : un catalogue de restaurants avec notes, panier et paiement avec livraison et paiement simulé, en React et TypeScript.",
      points: [
        "Le défi final du cours était de réunir tout ce que j'avais étudié dans un produit de livraison complet.",
        "La liste montre les restaurants avec catégorie et note, et chacun a son menu. Le panier vit dans Redux Toolkit, et le compteur apparaît en haut.",
        "Le paiement passe par la revue des articles, l'adresse de livraison, des données de carte simulées et la confirmation de commande. Les données viennent d'une API consommée avec Axios, et le routage utilise React Router.",
      ],
    },
    matemagika: {
      summary:
        "App éducative de mathématiques faite en travail de groupe au lycée : elle résout les équations du premier et du second degré pas à pas et fait l'interpolation linéaire avec un graphique.",
      points: [
        "Le travail demandait un outil pour aider à étudier les mathématiques computationnelles.",
        "Le calcul montre les racines et le pas à pas. Pour une équation du premier degré, le coefficient a reste vide ou nul.",
        "L'interpolation prend des paires de points et trace la droite avec Chart.js. La page indique clairement que le travail est collectif.",
      ],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro, site institutionnel",
      summary:
        "Landing page du cabinet Cresce+ Futuro, dirigé par Marina Kamiya, sur l'entrepreneuriat féminin, la technologie et l'IA appliquée aux affaires.",
      points: [
        "Le cabinet avait besoin de son propre site, séparé du SaaS, pour présenter son travail et ses programmes.",
        "Je l'ai fait en HTML, CSS et JavaScript, avec des animations de défilement GSAP et ScrollTrigger et des icônes Font Awesome.",
        "SeeB est intégré, comme dans tous mes projets récents.",
      ],
    },
    portfolio: {
      title: "Portfolio",
      summary:
        "Ce site : projets avec filtres et une fenêtre avec galerie, mode sombre, PWA, SEO complet et soin de l'accessibilité et de la performance.",
      points: [
        "Je voulais un portfolio qui montre mon travail comme je construis un produit : rapide, accessible et soigné.",
        "La grille classe les travaux par type, avec de grandes cartes en zigzag, et chaque projet ouvre une fenêtre avec galerie, stack et liens. Les images ne se chargent que lorsqu'elles apparaissent à l'écran.",
        "Le thème clair ou sombre utilise next-themes. Métadonnées, Open Graph, sitemap, robots et données structurées couvrent le SEO, et le site est une PWA avec manifest, icônes et un service worker avec page hors ligne.",
        "Le formulaire de contact envoie l'e-mail directement, les animations utilisent Motion et SeeB est intégré.",
      ],
    },
  },
  experiences: [
    {
      role: "Cofondateur & CTO",
      period: "oct. 2026 à aujourd'hui",
      mode: "À distance",
      summary:
        "Cofondateur et responsable de la direction technologique de Coach Up, une plateforme SaaS en marque blanche pour la gestion des salles de sport et des coachs personnels, centrée sur la numérisation et la simplification des processus. Chaque salle ou coach propose à ses élèves une app à sa propre marque, installable directement depuis le navigateur (PWA).",
      more: [
        "Je travaille sur la définition de l'architecture du système, le choix des technologies, la planification des fonctionnalités et le développement du produit, du prototype à la production.",
      ],
      didLabel: "Principales responsabilités :",
      did: [
        "Développement et planification de l'architecture full stack de la plateforme, avec Next.js, Node.js et TypeScript.",
        "Modélisation des données, authentification et stockage avec Supabase.",
        "Développement des solutions de gestion des élèves, de création et prescription d'entraînements, d'enregistrement des séries et des charges et d'indicateurs de performance.",
        "Structure en marque blanche, pour que chaque salle ou coach utilise la plateforme avec sa propre identité visuelle.",
        "Planification de l'infrastructure, du stockage cloud et de la sécurité de l'application, avec Cloudflare.",
        "Définition de la feuille de route technologique et de l'évolution du produit.",
        "Veille sur les nouvelles technologies et les opportunités d'innovation.",
      ],
      closing:
        "Le projet vise à rendre la gestion des salles de sport et des coachs plus efficace, accessible et centralisée, et à offrir à l'élève un suivi qui continue en dehors de la salle.",
    },
    {
      role: "Développeur Full Stack",
      period: "mai 2026 à aujourd'hui",
      mode: "À distance",
      summary:
        "Je suis le développeur responsable de la technologie de T2 Educação : le Hub interne de gestion, les intégrations entre plateformes, les automatisations, la base de données, l'infrastructure et toute la présence numérique. Je suis arrivé en mai 2026 comme développeur front-end et, un mois plus tard, j'ai été promu full stack, avec toute l'opération technique dans mon périmètre.",
      did: [
        "J'ai transformé un système lié à plusieurs intégrations coûteuses en une plateforme chaque jour plus autonome, en internalisant ce qui dépendait d'outils tiers.",
        "Je développe et fais évoluer le Hub de T2, le système interne en Next.js, React et TypeScript avec des modules de tâches, support client, finances avec rapprochement, marketing, centrale de contacts, affiliés et représentants, bibliothèque de cours et gestion des ventes B2B.",
        "J'ai intégré le Hub à plus de dix plateformes : Crisp et Crisp AI pour le support, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas pour les factures, Instagram Graph API, YouTube Analytics, automatisations WhatsApp, Google Reviews, GitHub, Cloudflare Turnstile à la connexion et GA4 pour le suivi des conversions.",
        "Je modélise et maintiens la base PostgreSQL sur Supabase, avec des schémas par domaine, et je m'occupe de notre API, des dizaines de crons sur Vercel, de la génération de PDF, tableurs et présentations et des health checks qui surveillent les endpoints.",
        "J'ai créé un serveur MCP pour que des agents IA consultent et opèrent le Hub en toute sécurité.",
        "J'ai reconstruit le site, le blog, le portail de supports gratuits et les landing pages en Next.js 16, avec Core Web Vitals, SEO technique, accessibilité et suivi. Je m'occupe aussi de Cloudflare (DNS, SSL, cache, règles et sécurité), des domaines, des environnements de recette et de production et des pipelines CI/CD.",
      ],
      resultValue: "1 mois",
      resultLabel: "du front-end à la promotion en full stack",
    },
    {
      role: "Ingénieur logiciel Full Stack, AI-First",
      period: "mars 2026 à août 2026",
      mode: "À distance",
      summary:
        "J'ai construit des SaaS, des systèmes web et des apps mobiles pour des startups, sur tout le cycle : besoins, architecture, base de données, intégrations, infrastructure, déploiement et publication sur les stores. C'est là que j'ai développé Mirante ERP, le plus grand projet que j'aie fait.",
      did: [
        "J'ai développé Mirante ERP, avec caisse, commandes et devis, stock, achats avec approbation et import XML, émission de NF-e intégrée à la SEFAZ, finances avec rapprochement bancaire, multi-entreprise avec filiales, permissions, journal d'audit et tableaux de bord avec prévision des ventes.",
        "J'ai implémenté K8 Pay, la passerelle de K8 Fintech, pour Pix et boleto dans l'ERP, ainsi que d'autres intégrations avec des passerelles de paiement, de l'authentification et des API externes dans les produits de la période.",
        "J'ai livré des MVP, des marketplaces et des apps en React Native et Expo, et géré la publication sur l'App Store et Google Play. Aujourd'hui je prépare une app pour la soumission aux stores en quelques heures.",
        "J'ai déployé et maintenu des applications sur VPS avec Docker et Coolify, avec des pipelines CI/CD, et travaillé avec Supabase, PostgreSQL, Prisma et Drizzle ORM côté base de données.",
        "J'ai travaillé dans le modèle AI-First, avec agents, MCP et outils d'IA au quotidien, en sprints hebdomadaires et réunions avec les parties prenantes. Dans le programme interne Bystartup Labs, j'ai créé bystartup-web-qa, une skill qui fait écrire et corriger des tests E2E avec Playwright par des agents IA.",
      ],
    },
    {
      role: "Développeur Full Stack",
      period: "janv. 2026 à mars 2026",
      mode: "À distance",
      summary:
        "J'ai restructuré le SaaS de Cresce+ Futuro, qui organise stock, ventes, tâches et équipe des micro et petites entreprises, et fait passer l'infrastructure de trois fournisseurs à une seule base, moins chère et plus simple à maintenir.",
      did: [
        "J'ai réécrit l'application en Next.js 16 full stack avec App Router et Tailwind CSS, avec authentification et paiements via Mercado Pago.",
        "J'ai migré la stack, éparpillée entre Azure, Railway et Hostinger, vers Neon PostgreSQL et Vercel, centralisé le domaine et laissé le produit prêt à passer à l'échelle.",
        "J'ai aussi fait le site institutionnel du cabinet, avec SeeB, le widget d'accessibilité que j'ai créé, intégré.",
      ],
    },
  ],
  studies: [
    {
      title: "Génie logiciel",
      place: "Gran Faculdade",
      period: "juin 2026 à juin 2030",
      text: "Licence en cours, avec 3 200 heures sur 8 semestres. Le programme couvre tout le cycle du logiciel : algorithmes et structures de données, bases relationnelles et NoSQL, front-end, back-end et mobile, architecture et microservices, cloud, conteneurs et DevOps, qualité et tests, sécurité de l'information, gestion agile et intelligence artificielle. J'ai choisi ce cursus parce qu'il parle la même langue que mon travail : construire des produits et résoudre de vrais problèmes.",
    },
    {
      title: "Intelligence artificielle et automatisation numérique",
      place: "UniFECAF avec la Faculdade de Tecnologia Rocketseat",
      period: "oct. 2026 à mars 2028",
      text: "Diplôme technologique en cours, de 18 mois, avec de la pratique dès le premier semestre. Le programme couvre l'IA générative, le prompt engineering, l'intégration d'API, l'automatisation de processus et de workflows, le low-code, l'UX/UI et les méthodes agiles, puis avance vers RAG, embeddings, fine-tuning et agents autonomes. C'est la base théorique de ce que j'utilise déjà au travail avec agents, MCP et automatisation.",
    },
    {
      title: "Architecture logicielle avec IA",
      place: "Formation complémentaire",
      period: "Anhanguera, en cours, 360 h",
      text: "Formation complémentaire en cours à l'Anhanguera, avec le Full Stack Club, de 360 heures. L'accent est mis sur l'architecture logicielle avec l'intelligence artificielle, à travers des projets pratiques de scalabilité, performance, tests, microservices, CI/CD et cloud.",
    },
    {
      title: "Informatique pour Internet (développement web)",
      place: "ETEC Parque Belém",
      period: "2023 à 2025",
      text: "Lycée technique terminé. Je suis entré sans vraiment savoir me servir d'un ordinateur et j'en suis sorti en programmant : j'ai étudié la logique, HTML, CSS, JavaScript, PHP, SQL, WordPress, MIT App Inventor, Figma, l'UX/UI, l'accessibilité, les protocoles HTTP, des notions de shell et la virtualisation avec VirtualBox. Mon projet de fin d'études était SeeB, une extension Chromium et un widget d'accessibilité dont j'ai assuré la partie technique ; il a été présenté à l'école et aujourd'hui il est open source et sur le Chrome Web Store.",
    },
    {
      title: "Développement personnel et employabilité",
      place: "UniFECAF",
      period: "nov. 2026",
      text: "Cours d'extension de l'UniFECAF sur le développement personnel et la préparation au marché du travail. Les modules portent sur les habitudes d'étude et l'organisation, comme la gestion du temps.",
    },
    {
      title: "Accélération Microsoft AI-103 : workshops 1 à 4",
      place: "DIO avec Microsoft",
      period: "oct. 2026",
      text: "Quatre workshops de l'accélération DIO et Microsoft : agents dans Microsoft Foundry, RAG avec Azure AI Search, agents en production et le chemin jusqu'à l'examen AI-103.",
    },
    {
      title: "Accélération Microsoft AI-103 : bienvenue",
      place: "DIO avec Microsoft",
      period: "oct. 2026",
      text: "Porte d'entrée de l'accélération DIO et Microsoft pour la certification AI-103. Elle présente le parcours des solutions d'intelligence artificielle sur Azure.",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "mars 2026",
      text: "Formation de l'Instituto PROA pour le marché du travail, centrée sur la communication et le raisonnement analytique. Le parcours passe par les objectifs, l'écriture professionnelle et la communication en équipe.",
    },
    {
      title: "Méthodologies agiles",
      place: "Rocketseat",
      period: "oct. 2025",
      text: "Bases de Scrum et de Kanban pour organiser le travail d'une équipe en cycles courts et suivre l'avancement des tâches.",
    },
    {
      title: "Introduction à Go",
      place: "Rocketseat",
      period: "oct. 2025",
      text: "Premiers pas dans le langage Go, avec la syntaxe, les types et la façon dont le langage traite les erreurs. La pratique s'est faite dans des programmes de terminal, comme un jeu de devinette et un convertisseur de devises.",
    },
    {
      title: "Fondamentaux de la gestion de projet",
      place: "Rocketseat avec UniFECAF",
      period: "",
      text: "Cours sur la façon de planifier, d'organiser et de suivre un projet, suivi en parallèle du diplôme. L'idée est d'avoir un périmètre, un délai et un moyen clair de voir où en est le travail.",
    },
    {
      title: "Git et GitHub : le guide définitif à l'ère de l'IA",
      place: "Rocketseat",
      period: "",
      text: "Cours de gestion de versions avec Git et GitHub, pensé pour le flux de quelqu'un qui développe avec des outils d'IA. Il couvre le cycle quotidien de branch, commit et pull request.",
    },
    {
      title: "Agents d'IA avec n8n",
      place: "Rocketseat",
      period: "",
      text: "Cours d'automatisations et d'agents d'intelligence artificielle construits dans n8n, en reliant des services pour qu'un flux agisse à partir d'une demande.",
    },
    {
      title: "SEO pour les devs",
      place: "Rocketseat",
      period: "",
      text: "Cours sur la façon de faire mieux apparaître un site dans les recherches, du point de vue de la personne qui développe. Il passe par la structure de la page, le contenu et les détails techniques que le moteur voit.",
    },
    {
      title: "Communication assertive",
      place: "Rocketseat",
      period: "",
      text: "Cours de communication pour le travail en équipe, centré sur le fait de parler avec clarté et assurance.",
    },
    {
      title: "Carrière internationale",
      place: "Rocketseat",
      period: "",
      text: "Cours sur la façon de se préparer à des opportunités tech hors du Brésil, du positionnement à la communication avec des équipes d'un autre pays.",
    },
    {
      title: "Fondamentaux de l'IA, avec un focus sur l'IA générative",
      place: "Rocketseat",
      period: "",
      text: "Base d'intelligence artificielle avec un accent sur l'IA générative, et sur ce que ces modèles changent dans le quotidien de quelqu'un qui développe.",
    },
    {
      title: "Formation ingénieur front-end",
      place: "EBAC",
      period: "",
      text: "Formation front-end avec Git, CSS, JavaScript, Bootstrap, SASS, LESS, Gulp, Grunt, ES6, orientation objet, TypeScript, React avec Redux, tests avec Jest et Cypress, et Node. Les exercices et les projets, comme Velory et Games Shop, sont sur GitHub.",
    },
    {
      title: "Parcours full stack",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Parcours pratique full stack dont le projet est une app inspirée de Spotify, avec un front-end, un back-end et un déploiement.",
    },
    {
      title: "Développement web complet",
      place: "Udemy",
      period: "",
      text: "Cours large de développement web, avec des projets pratiques de front-end pour s'entraîner à construire une page depuis zéro.",
    },
    {
      title: "Python débutant et avancé",
      place: "Alura",
      period: "",
      text: "Cours de Python du niveau débutant au niveau avancé, pratiqués en créant des jeux.",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "Défi de construire 50 mini projets en HTML, CSS et JavaScript, un par jour, pour prendre de la pratique avec le web.",
    },
    {
      title: "Intensif JavaScript",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Immersion pratique en JavaScript et React, avec des projets construits depuis zéro, comme un lecteur audio en JavaScript pur.",
    },
    {
      title: "Bootcamp Ri Happy : front-end depuis zéro",
      place: "DIO",
      period: "",
      text: "Bootcamp de front-end en HTML, CSS et JavaScript, centré sur la construction d'interfaces réelles du début à la fin.",
    },
    {
      title: "Défis de projet HTML, CSS et JavaScript",
      place: "DIO",
      period: "",
      text: "Série de défis pratiques de la DIO dans lesquels on recrée des pages et des jeux, comme Stranger Things, Discord, YouTube et Detona Ralph.",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "Événement pratique de Rocketseat sur les agents d'intelligence artificielle, avec un projet construit et publié au cours de la semaine.",
    },
    {
      title: "NLW Connect",
      place: "Rocketseat",
      period: "",
      text: "Événement pratique de Rocketseat dans lequel on construit une API depuis zéro en quelques jours.",
    },
    {
      title: "Créer un CLI en Go",
      place: "Rocketseat",
      period: "",
      text: "Cours pratique de construction d'un outil en ligne de commande en Go.",
    },
    {
      title: "SQL et bases de données",
      place: "",
      period: "",
      text: "Étude de SQL avec les bases d'une bibliothèque et d'un service de streaming, y compris les tables et les relations.",
    },
    {
      title: "Introduction à la programmation",
      place: "EBAC",
      period: "",
      text: "Premier contact avec la logique de programmation et les notions de base pour commencer à écrire du code.",
    },
    {
      title: "Logique de programmation en JavaScript",
      place: "DIO",
      period: "",
      text: "Défi de logique avec des structures de décision en JavaScript pour classer le niveau d'un héros.",
    },
    {
      title: "Contribuer à un projet open source sur GitHub",
      place: "DIO",
      period: "",
      text: "Laboratoire pratique sur la façon de contribuer à un projet open source : fork, branch et pull request.",
    },
    {
      title: "Semaine carrière tech",
      place: "Alura",
      period: "",
      text: "Semaine de contenus sur la carrière en technologie et l'intelligence artificielle, avec une vue du marché et des chemins possibles.",
    },
    {
      title: "Universo Photoshop",
      place: "brainstorm.academy",
      period: "",
      text: "Cours d'Adobe Photoshop et de design graphique pour créer et retoucher des images utilisées dans des interfaces et dans du contenu.",
    },
    {
      title: "Microsoft AZ-900",
      place: "Microsoft",
      period: "en préparation",
      text: "Je me prépare à la certification Azure Fundamentals. Le contenu couvre les concepts du cloud (IaaS, PaaS, SaaS et modèles de déploiement), les principaux services de calcul, réseau et stockage d'Azure, la sécurité, l'identité, la gouvernance, la tarification et les SLA. Je n'ai pas encore passé l'examen.",
    }
  ],

  recommendations: [
    {
      role: "Développeur Full Stack, même équipe chez ByStartup",
      date: "3 août 2026",
      paragraphs: [
        "J'ai eu l'occasion de travailler avec Rafael Henrique Blanco chez ByStartup, et je peux dire qu'il a été l'un des professionnels les plus solides et fiables avec qui j'ai travaillé.",
        "L'une de ses plus grandes forces est sa capacité à mener des projets très complexes avec rapidité et qualité, sans perdre le contrôle ni son calme. Il livre avec constance, organise bien son travail et transforme des défis techniques difficiles en solutions claires et bien exécutées.",
        "Au-delà d'excellentes connaissances techniques et d'une expérience en développement logiciel, Rafael est extrêmement professionnel, responsable et organisé. Il garde sa maturité sous pression, communique avec objectivité et élève le niveau de l'équipe autour de lui.",
        "Je recommande Rafael sans hésiter. Je suis certain qu'il sera un atout majeur pour toute équipe qui cherche quelqu'un d'expérimenté, fiable et capable de livrer des projets complexes avec excellence.",
      ],
    },
    {
      role: "COO Technologie, a supervisé Rafael directement chez ByStartup",
      date: "2 août 2026",
      paragraphs: [
        "Rafael est le genre de développeur qui apporte de la sérénité à l'équipe. Lors de nos échanges, sa grande maîtrise technique et sa proactivité étaient évidentes.",
        "Il n'attend pas que les problèmes arrivent ; il les anticipe dès les réunions de planification, propose de bonnes pratiques et veille à ce que le produit final ait la meilleure qualité possible.",
        "Excellent professionnel !",
      ],
    },
  ],
};
