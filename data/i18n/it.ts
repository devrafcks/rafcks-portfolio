import type { ContentText } from "./types";

/**
 * Contenuti lunghi in italiano. Le liste seguono l'ordine dei file portoghesi in data/.
 * I testi alternativi delle immagini non sono tradotti qui: arrivano dalla versione inglese.
 */
export const it: ContentText = {
  projects: {
    t2: {
      summary:
        "Sito istituzionale di T2 Educação, con corsi di preparazione alle certificazioni finanziarie, un'area per le aziende e landing page. Ricostruito in Next.js 16 con attenzione a performance, SEO e conversione.",
      points: [
        "T2 prepara i professionisti alle certificazioni del mercato finanziario come CPA e C-Pro. Il sito doveva caricarsi in fretta, posizionarsi bene su Google e portare il visitatore fino all'iscrizione; prima dipendeva da un costruttore di siti visuale.",
        "Ho ricostruito il sito in Next.js 16 con App Router, React 19 e Tailwind CSS 4, con le pagine dei corsi, delle certificazioni e l'area aziende, oltre alle landing page delle campagne.",
        "Ho curato Core Web Vitals, SEO tecnico, accessibilità, animazioni con GSAP e Three.js e il tracciamento di conversioni e checkout in GA4. Il sito usa Supabase e Resend, e il dominio passa da Cloudflare.",
        "Sono lo sviluppatore responsabile della tecnologia dell'azienda. Gli screenshot mostrano solo pagine pubbliche. L'Hub interno, le integrazioni e la piattaforma degli studenti non compaiono qui.",
      ],
    },
    "t2-blog": {
      summary:
        "Blog pubblico di T2 con articoli e guide su certificazioni finanziarie, carriera e mercato, pensato per essere letto da telefono e trovato su Google.",
      points: [
        "Il blog è la principale fonte di traffico organico di T2. Servivano un SEO tecnico solido, una lettura comoda da telefono e un flusso di pubblicazione semplice per il team.",
        "Ho costruito il front-end in Next.js con Ghost come CMS headless. La home mette in evidenza argomenti come l'esame C-Pro R, e ogni articolo mostra autore e data.",
        "SEO tecnico e GA4 accompagnano ogni post. Gli screenshot mostrano solo contenuti editoriali pubblici.",
      ],
    },
    "t2-docs": {
      title: "Materiali gratuiti T2",
      summary:
        "Portale di dispense, simulazioni d'esame e riassunti gratuiti per certificazioni finanziarie come CPA, C-Pro, CFP e ANCORD, costruito con Next.js e Ghost headless.",
      points: [
        "T2 offre materiali gratuiti a chi si prepara a una certificazione. Il portale organizza dispense, simulazioni e riassunti per certificazione, facili da consultare e da trovare su Google.",
        "Ho costruito il portale in Next.js, prendendo i contenuti da Ghost in modalità headless, così il team pubblica senza toccare il codice.",
        "I materiali pubblicati sono contenuti di studio. Sul portale non compare nessun dato degli studenti.",
      ],
    },
    mirante: {
      summary:
        "ERP multi-azienda con punto vendita, NF-e (fattura elettronica brasiliana) integrata con la SEFAZ, finanza con riconciliazione, magazzino, acquisti e K8 Pay per Pix e boleto. Il sistema più grande che abbia mai costruito.",
      points: [
        "Le piccole e medie imprese spesso gestiscono vendite, magazzino, acquisti e finanza in strumenti separati. Mirante riunisce tutto in un unico sistema, con più aziende e filiali nello stesso account e un selettore di unità in alto.",
        "Vendite: una cassa con pagamento e chiusura, ordini con venditori e preventivi. Magazzino con una dashboard dei prodotti sotto la scorta minima o in negativo, catalogo, prezzi, categorie e servizi.",
        "Fisco e acquisti: emissione e gestione di NF-e integrate con la SEFAZ tramite certificato A1, un pannello delle fatture ricevute con manifestazione, richieste d'acquisto con approvazione o rifiuto e ricevimento merci tramite XML, chiave NF-e o a mano.",
        "Finanza: debiti e crediti, apertura e chiusura cassa, conti bancari con estratti e riconciliazione, anticipi, rinegoziazione delle rate, centri di costo e piano dei conti. Ho integrato anche K8 Pay, il gateway di K8 Fintech, per incassare con Pix e boleto.",
        "Gestione: una dashboard con KPI, fatturato anno su anno e previsione delle vendite, un'anagrafica unica di clienti, fornitori e dipendenti, utenti e permessi, un log di audit esportabile, ricerca globale e azioni rapide con Ctrl+K e la personalizzazione di tema, densità e animazioni.",
        "Ho costruito il sistema in ByStartup in circa tre mesi. L'idea del prodotto veniva dal cliente. Prototipo, design del prodotto, sviluppo full stack e infrastruttura erano miei, dal front-end al database, alle integrazioni e al deploy. Gli screenshot vengono da un account di prova con dati fittizi.",
      ],
    },
    carretel: {
      summary:
        "Il mio SaaS per i laboratori di cucito: registra il taglio, prova la consegna e incassa con Pix dal telefono, anche con segnale debole. Bilingue, in portoghese e spagnolo.",
      points: [
        "I titolari dei laboratori di cucito, molti della comunità boliviana di São Paulo, gestiscono tagli, consegne e pagamenti su un quaderno e su WhatsApp. Quando c'è un disaccordo su quantità o prezzo, non c'è prova di niente. Carretel risolve con tre verbi: registrare, provare e incassare.",
        "Registrare: un taglio in arrivo si annota con foto, quantità e prezzo dettati a voce, griglia delle taglie, scadenza e accessori, e la produzione si annota per persona, operazione e macchina. Provare: un link pubblico mostra foto, griglia, importo e un codice di verifica, e il cliente conferma su WhatsApp senza creare un account. L'accettazione salva ora, browser e IP e resta immutabile nel database.",
        "Incassare: lo schermo mostra chi deve e da quanti giorni, genera un messaggio WhatsApp pronto con Pix Copia e Cola e un QR Code (BR Code con CRC16 scritto nel progetto) e accetta pagamenti totali o parziali. C'è anche una chiusura settimanale con ricevuta bilingue, un calcolatore del prezzo giusto per capo, l'esportazione dei dati secondo la LGPD e la cancellazione dell'account.",
        "L'app è offline first: le azioni entrano in una coda idempotente in IndexedDB e si sincronizzano quando torna il segnale, con service worker e installazione come PWA. È multi-tenant, con isolamento per laboratorio testato contro un vero Postgres.",
        "Gli abbonamenti passano da AbacatePay, con un webhook validato tramite HMAC-SHA256. L'interfaccia segue WCAG 2.2 AA, con grandi aree di tocco e SeeB integrato, e il progetto ha test con Vitest, test di proprietà con fast-check e test di accessibilità con Playwright e axe.",
        "È un mio prodotto, dall'idea alla specifica, al design e al codice. È in pre-lancio.",
      ],
    },
    gatelite: {
      summary:
        "La Terra di oggi, vista dall'alto: scegli un luogo e guarda l'immagine satellitare del giorno, quali satelliti ci sono passati sopra, com'è cambiato dal 2000 e cosa succede lì vicino in questo momento. Tutto con i dati aperti della NASA, senza login e senza database.",
      points: [
        "Il nome unisce gato (gatto) e satélite (satellite). Le immagini satellitari della NASA sono aperte, ma sparse in portali tecnici. Gatélite le riunisce in un unico sito, fatto per chi vuole vedere dall'alto il proprio quartiere, la propria città o l'intero pianeta.",
        "Esplora: un globo con il mosaico giornaliero dei satelliti NASA (VIIRS e MODIS), Landsat e Sentinel a 30 m, infrarosso, luci notturne, temperatura e fumo. Quando lo zoom supera ciò che l'immagine del giorno può mostrare, la mappa passa da sola a un livello ad alta risoluzione in cui si vedono case, isolati e il Cristo Redentore. Tutta la vista vive nell'URL.",
        "La scheda Meteo mostra gli ultimi 14 giorni del luogo uno accanto all'altro e stima la nuvolosità di ciascuno dal colore dell'immagine, con alba e tramonto. I passaggi di 14 satelliti nelle ultime e prossime 24 ore sono calcolati nel browser, con SGP4 in un Web Worker. C'è anche un time-lapse dello stesso giorno dell'anno dal 2001 e un prima e dopo con una tendina da trascinare.",
        "Il pianeta adesso: una mappa del mondo con giorno e notte che avanzano in tempo reale, le luci delle città, la flotta di satelliti in diretta, gli eventi naturali attivi (incendi, tempeste, vulcani e iceberg) e le foto della camera EPIC, scattate a 1,5 milioni di km.",
        "Niente account né database: l'URL conserva la vista, il dispositivo conserva i luoghi salvati e il server fa solo cache delle API esterne. Il dominio (orbite, nuvole, sole ed eventi) è fatto di regole pure testate con Vitest. È un progetto personale open source, con licenza MIT e senza legami ufficiali con la NASA.",
      ],
    },
    cresce: {
      summary:
        "SaaS gestionale per micro e piccole imprese. Ho riscritto il prodotto in Next.js 16 e spostato l'infrastruttura su Neon e Vercel.",
      points: [
        "Il SaaS Cresce+ organizza magazzino, vendite, attività e team di micro e piccole imprese. La versione precedente era sparsa tra Azure, Railway e Hostinger, costosa da mantenere e difficile da far evolvere.",
        "Ho riscritto l'applicazione in Next.js 16 full stack con App Router e Tailwind CSS, con autenticazione e pagamenti tramite Mercado Pago.",
        "Ho migrato il database su Neon PostgreSQL e l'applicazione su Vercel, e centralizzato il dominio.",
        "Ho realizzato anche il sito istituzionale della consulenza, che ha una sua scheda.",
      ],
    },
    xerox: {
      summary:
        "Sistema di produzione per copisterie che ha sostituito i foglietti di cassa cartacei e i fogli di calcolo con registrazioni digitali, magazzino automatico e report in Excel e PDF.",
      points: [
        "In molte copisterie ogni lavoro è annotato su un foglietto e sommato in un foglio di calcolo a fine giornata. Questo porta errori, storico perso e nessun controllo del magazzino. Xerox Manager sostituisce questo flusso con un sistema semplice, tracciabile e in tempo reale.",
        "Il dipendente digita il codice del prodotto, e nome e prezzo si compilano da soli. Regola quantità e prezzo, conferma, e la scorta scende automaticamente. Modifiche e cancellazioni sono permesse solo lo stesso giorno.",
        "L'admin gestisce dipendenti, prodotti e magazzino, con avviso di scorta bassa e correzione manuale, e genera report per periodo con produzione per dipendente e consumo di magazzino, esportati in Excel con tre schede e in PDF.",
        "La sicurezza è stata curata: password con bcrypt, sessioni JWT in cookie httpOnly con una tabella di sessioni revocabili, controllo dei permessi in ogni Server Action e filtri validati con Zod.",
        "È una versione dimostrativa che segue la stessa logica del sistema usato in produzione. Ho fatto tutto, dal database all'interfaccia, con SeeB integrato.",
      ],
    },
    somnus: {
      summary:
        "App per registrare le ore di sonno e scoprire degli schemi: media, notte migliore e peggiore e grafici di andamento, con account personale e accessibilità integrata.",
      points: [
        "Chi vuole dormire meglio ha bisogno di dati semplici e costanti, non di app piene di funzioni inutilizzate. Somnus fa bene una cosa sola: registrare e analizzare le ore dormite.",
        "Il flusso è diretto: accedi, registri la notte e vedi l'analisi. La dashboard mostra la media del sonno, la notte migliore e peggiore, lo storico completo e i grafici di andamento.",
        "L'autenticazione usa Clerk, e ognuno vede solo i propri dati. Il back-end gira su Server Actions di Next.js, tipizzato da capo a fondo con Prisma e PostgreSQL su Neon.",
        "L'accessibilità era un requisito fin dall'inizio, con SeeB integrato. Ho realizzato il progetto da solo, dal database al deploy su Vercel.",
      ],
    },
    bicus: {
      summary:
        "App per servizi, prodotti, affitti e negozi locali, con mappa, chat e annunci in evidenza pagati con Pix, carta o boleto. Su App Store, Google Play e web.",
      points: [
        "Bicus riunisce in un'unica app servizi, prodotti, affitti e negozi della città, con ricerca per distanza e venditori verificati.",
        "L'app mostra gli annunci su una mappa, con scelta della posizione e ricerca dell'indirizzo, e ha una chat integrata per accordarsi direttamente con il venditore.",
        "Il venditore può mettere in evidenza un annuncio. Il pagamento passa da Mercado Pago, con Pix, carta o boleto, e l'evidenza si attiva da sola dopo la conferma. L'app non riceve né salva dati delle carte.",
        "Un'unica base di codice Expo e React Native genera le app iOS e Android e la versione web. L'idea del prodotto veniva dal cliente. Prototipo, prodotto, sviluppo full stack e infrastruttura erano miei.",
      ],
    },
    apertou: {
      summary:
        "Marketplace perché i negozi fisici vendano tramite il telefono, con app, pannello del commerciante e pannello admin. Pix o carta, ripartizione automatica per ogni negozio e ordini da provare prima di comprare.",
      points: [
        "I negozi di quartiere perdono vendite perché non sono sul telefono del cliente, e un e-commerce proprio costa caro. Apertou Comprou porta questi negozi in un marketplace locale, con consegna a domicilio o ritiro in negozio.",
        "Il cliente compra dall'app o dal sito, parla con il negozio in chat e può chiedere articoli da provare prima di pagare, con un ordine di prova. Si paga con Pix o carta.",
        "Ogni negozio ha un conto destinatario su Pagar.me, e l'importo di ogni vendita viene ripartito automaticamente e trasferito sul conto bancario del commerciante. Il pannello guida l'inserimento dei dati bancari e blocca la pubblicazione del negozio finché non sono completi.",
        "Il prodotto ha tre parti: l'app del cliente, il pannello del commerciante e l'admin del marketplace, con grafici di monitoraggio. L'idea veniva dal cliente. Ho fatto prototipo, prodotto, sviluppo full stack e infrastruttura.",
      ],
    },
    junto: {
      summary:
        "App e sito per trovare corse aperte vicino a te, create da persone reali. Vedi chi va, confermi la presenza e crei la tua corsa. Sul web, Google Play e App Store.",
      points: [
        "Correre da soli scoraggia, e organizzarsi in un gruppo di chat non sempre funziona. Junto mostra le corse aperte vicino a te, create da persone reali. La promessa del prodotto: trova qualcuno, correte insieme.",
        "Vedi chi va, confermi la presenza, entri nella chat della corsa, fai il check-in al punto d'incontro e crei la tua corsa, con luogo, giorno e ritmo. Le corse compaiono per quartiere e orario, con un filtro per corse solo femminili. L'app è gratuita, senza carta.",
        "La pagina parla della sicurezza dell'incontro: identità verificata, lista aperta dei confermati, tracciamento in diretta con una persona di fiducia, check-out automatico e pulsante di emergenza. Gruppi e squadre di corsa hanno una pagina, un calendario e corse aperte. La beta è aperta a Rio de Janeiro.",
        "Su App Store e Google Play l'app si chiama \"junto: companhia para correr\". L'idea del prodotto veniva dal cliente. Prototipo, prodotto, sviluppo full stack e infrastruttura sono stati il mio lavoro.",
      ],
    },
    voxx: {
      summary:
        "Sito dell'Agência Voxx, agenzia di marketing digitale a Itapetininga, con animazioni in Framer Motion e un modulo di contatto che invia email.",
      points: [
        "L'agenzia aveva bisogno di un sito che mostrasse il suo lavoro con la stessa qualità visiva che offre ai clienti, senza essere pesante da telefono.",
        "La pagina presenta pianificazione, social media, identità visiva e traffico a pagamento, con animazioni di entrata e di scorrimento fatte in Framer Motion.",
        "L'ho costruito in Next.js 16 con App Router, Tailwind CSS e font Google (Besley e DM Sans). Il modulo invia l'email tramite Resend con Nodemailer, e Google Analytics arriva tramite @next/third-parties.",
      ],
    },
    jotape: {
      summary:
        "E-commerce di orologi originali, realizzato come freelance: catalogo per marca, ricerca, pagamento con Pix o carta tramite Mercado Pago, tracciamento dell'ordine e WhatsApp.",
      points: [
        "Un negozio di orologi originali che aveva bisogno di un e-commerce proprio, dove il cliente compra da solo, a qualsiasi ora.",
        "Il catalogo è organizzato per marca, con ricerca, pagine prodotto e carrello. Il pagamento avviene sul sito stesso, con Pix o carta di credito, elaborato da Mercado Pago.",
        "Il cliente segue l'ordine sul sito e parla con il negozio su WhatsApp. Il negozio si può anche installare come app sul telefono. L'idea del negozio è stata mia, e ho fatto il resto: prototipo, prodotto, sviluppo full stack e infrastruttura.",
      ],
    },
    seeb: {
      summary:
        "Widget ed estensione di accessibilità open source, creati per il mio progetto di diploma. Con una riga di script qualsiasi sito ottiene contrasto, filtri per daltonismo, lettore vocale e altro, senza raccogliere dati.",
      points: [
        "Molte persone con ipovisione, daltonismo o ADHD incontrano ostacoli nel leggere il web, e la maggior parte dei siti non offre alcuna regolazione. SeeB è nato come estensione Chromium gratuita ed è diventato anche un widget che qualsiasi sito può integrare con una riga.",
        "Il pannello riunisce filtri per protanopia, deuteranopia, tritanopia e monocromia, alto contrasto, inversione dei colori e modalità scura, testo ingrandito, spaziatura, grassetto, link sottolineati ed evidenziati, righello e linea di focus per la lettura, luminosità e saturazione, nascondere le immagini, fermare le animazioni, evidenziare il focus da tastiera, un cursore grande e un lettore vocale con scelta di voce e velocità.",
        "Il widget è servito via CDN su Cloudflare Pages, quindi ogni miglioramento arriva subito a chi lo usa già. La documentazione pubblica mostra come integrarlo in HTML puro, Vite, Vue, Angular e Next.js con App Router, compresi i dettagli di SSR e idratazione che ho risolto da solo integrando il widget in progetti Next.js.",
        "L'estensione usa Manifest V3, chiede solo i permessi storage e activeTab ed è sul Chrome Web Store. Non si raccoglie nulla: le preferenze restano nel browser.",
        "Oggi SeeB è integrato nei miei progetti, come Carretel, Xerox Manager, Somnus, Giz, Velory, la dashboard Excel, l'Agência Voxx e il sito istituzionale di Cresce+ Futuro. Ho curato la parte tecnica del progetto di diploma all'ETEC Parque Belém e continuo a mantenerlo come progetto aperto su GitHub.",
      ],
    },
    giz: {
      title: "GIZ, assistente IA",
      summary:
        "Agente IA che riceve un breve brief e scrive i testi per WhatsApp, Instagram ed email. Protegge i dati personali prima di chiamare il modello e pubblica solo con l'approvazione di una persona.",
      points: [
        "Progetto per la sfida \"Seu Primeiro Agente de IA\" (Il tuo primo agente IA). Giz è una catena di palestre fittizia il cui team perde tempo a scrivere annunci e campagne per ogni canale.",
        "L'agente lavora in quattro fasi. Prima il server maschera CPF (codice fiscale brasiliano), telefono, email e numeri di carta prima che qualcosa vada al modello. Poi capisce la richiesta, scrive e rivede. Alla fine una persona legge, modifica e approva. Nulla viene pubblicato da solo.",
        "Le fasi del modello usano persona, meta-prompting, few-shot e verifica tramite domande, con output JSON per concatenare una fase alla successiva e una temperatura diversa per compito (0,2 per smistamento e revisione, 0,8 per la scrittura).",
        "Il testo del dipendente arriva delimitato ed è trattato come dato, per evitare la prompt injection. La guida del marchio vieta di promettere risultati fisici, dare consigli sanitari e inventare informazioni.",
        "Il back-end è fatto di funzioni serverless Node.js su Vercel, con risposte in streaming NDJSON. Il front-end è HTML, CSS e moduli JavaScript, senza framework. Il modello è Gemini 3.5 Flash-Lite, con gemini-flash-lite-latest come riserva.",
      ],
    },
    "steal-a-boo": {
      summary:
        "Simulatore sociale per Roblox ambientato in un luna park notturno, fino a 8 giocatori: cattura i Boo, costruisci la tua base, genera Cash, deruba gli amici e difendi ciò che è tuo. Fatto con l'IA, per divertimento.",
      points: [
        "Un esperimento personale per imparare lo sviluppo di giochi su Roblox con un flusso professionale, usando l'IA come supporto.",
        "Catturi Boo di 7 rarità e li metti nella base per generare Cash al secondo. Alleni Velocità e Forza di lancio e costruisci fino a 6 piani.",
        "Puoi derubare le basi con il cancello aperto e difenderti con spaventi comici. Ci sono Rebirth, un forziere giornaliero e una classifica. Gli spaventi sono leggeri, per tutte le età.",
        "Il codice vive fuori da Studio, in Luau versionato su Git, sincronizzato con Rojo, pacchetti tramite Wally e dati dei giocatori salvati con ProfileStore.",
      ],
    },
    "67-noites": {
      summary:
        "Survival cooperativo da 1 a 5 giocatori in un terreiro (luogo di culto dell'umbanda) nel cuore del bosco: tieni acceso il calderone e sopravvivi 67 notti fino allo scontro con Zé Pilintra. Fatto con l'IA, per divertimento.",
      notice:
        "Questo gioco è un'opera di finzione realizzata nel pieno rispetto dell'umbanda e della cultura afro-brasiliana, senza intenzione di offendere. Le entità appaiono come guardiani che mettono alla prova il giocatore, e il gioco non riproduce rituali, canti o preghiere reali. L'umorismo sta nelle situazioni del gioco, mai nella religione.",
      points: [
        "Un esperimento personale di survival cooperativo su Roblox, fatto con l'aiuto dell'IA e nel pieno rispetto dell'umbanda e della cultura afro-brasiliana.",
        "Ogni notte il gruppo difende il calderone dalle invasioni e incontra quattro entità, che appaiono come guardiani che mettono alla prova il giocatore. Il combattimento è semplice, con combo, schivate e parate.",
        "La mappa ha biomi come il terreiro, la cava e la capanna nel bosco.",
        "Il codice è Luau versionato con Rojo e Wally, dati salvati con ProfileStore, linting con Selene, formattazione con StyLua e script con Lune. Il README registra 646 test di bilanciamento.",
      ],
    },
    offscope: {
      summary:
        "Sparatutto online in prima persona per Roblox incentrato sui no-scope: un cecchino, un coltello, tre mappe, classificate con ELO e un server che convalida ogni colpo. Fatto con l'IA, per divertimento.",
      notice: "Leggero, 16+, violenza lieve, senza sangue",
      points: [
        "Un progetto personale per imparare il netcode e i giochi competitivi, fatto con l'aiuto dell'IA (Claude Code).",
        "Modalità Duello 1v1 e Duo 2v2, normali e classificate con ELO, più Squadre 4v4 e Tutti contro tutti per 8 giocatori. A fine partita, una votazione di 20 secondi sceglie la mappa successiva.",
        "Il server decide ogni colpo. Il client invia l'intenzione con un seed deterministico, e il server ricostruisce la direzione, riporta indietro nel tempo le hitbox (compensazione della latenza a 30 Hz, fino a 0,45 s) e conferma il colpo. Il coltello uccide con un colpo alle spalle.",
        "Tre mappe costruite interamente in codice, con terreno reale tramite WriteVoxels: Cais 09, un porto all'alba, Avenida 11, il centro di notte, e Posto 47, in montagna. Arma, braccia e coltello sono assemblati da Part e animati in codice, e anche i 22 suoni e le texture vengono generati nel repository.",
        "I cosmetici sono solo visivi, senza loot box né pay-to-win, con un negozio giornaliero uguale su tutti i server e acquisti confermati solo dopo il salvataggio su ProfileStore. Il README conta 13,5k righe di Luau, e la CI esegue rojo build, controllo dei tipi con luau-lsp e Selene a ogni push.",
      ],
    },
    mapinion: {
      summary:
        "App mobile per scoprire e consigliare luoghi, con foto, voto da 1 a 5 e commento, e un feed con i consigli degli altri. Ho fatto l'app e l'API.",
      points: [
        "I consigli sui luoghi di solito si perdono nei gruppi di chat. Mapinion tiene tutto in un feed: pubblichi il luogo con foto, voto e commento e segui cosa consigliano gli altri.",
        "L'app React Native con Expo ed Expo Router ha login, registrazione e tre schede: feed, nuovo consiglio e profilo. La sessione vive in Zustand con AsyncStorage, e la foto arriva dalla galleria tramite Expo Image Picker.",
        "Nel tuo profilo puoi vedere, modificare ed eliminare i tuoi consigli.",
        "Anche l'API è mia: Node.js con Express, MongoDB con Mongoose, password con bcrypt, login con un JWT di 15 giorni e immagini su Cloudinary. Il feed è paginato, l'avatar è generato da DiceBear e un cron tiene sveglio il server.",
      ],
    },
    "excel-dashboard": {
      title: "Dashboard vendite da Excel",
      summary:
        "Test tecnico: carichi un foglio di vendite e l'app pulisce i dati e crea una dashboard con metriche, quattro grafici, filtri e una tabella completa, tutto nel browser.",
      points: [
        "I fogli di vendita reali arrivano con righe vuote, categorie scritte in modi diversi e mesi in formati non standard. La sfida era arrivare a una dashboard utile senza back-end.",
        "L'app legge il primo foglio del file .xlsx o .xls con SheetJS, scarta le righe senza categoria, prodotto o fatturato e normalizza categorie e mesi.",
        "La dashboard mostra fatturato totale, ordini e scontrino medio, e quattro grafici in Recharts: vendite per categoria, vendite per mese, quantità per mese e i 5 prodotti con più fatturato.",
        "I filtri per categoria e mese alimentano una tabella con ordinamento, paginazione, ricerca in tempo reale e 10, 25, 50 o 100 elementi per pagina. SeeB è aggiunto in index.html.",
      ],
    },
    "bystartup-web-qa": {
      summary:
        "Una skill con cui agenti IA come Claude Code e Gemini CLI generano, eseguono e correggono test E2E con Playwright in applicazioni web. Creata nei Bystartup Labs.",
      points: [
        "Scrivere e mantenere test end-to-end richiede tempo e di solito viene rimandato. La skill affida questo lavoro all'agente IA, con regole chiare.",
        "L'agente legge i file del front-end, individua pulsanti, moduli, navigazione, chiamate API e stati di errore, caricamento e successo, e scrive i test in testes/[feature].e2e.test.ts, creando la cartella se non esiste.",
        "Poi esegue i test, riprova, corregge ciò che è fallito e aggiorna i test vecchi senza perdere la copertura che già funzionava.",
        "Rileva il login con JWT, cookie, localStorage, NextAuth, Clerk, Firebase Auth e Auth0, salva la sessione e genera scenari per telefono, tablet e desktop, con selettori semantici e accessibili.",
        "Funziona con React, Next.js, Vue, Angular e altre interfacce web. Ho creato la skill nel programma interno di innovazione di ByStartup.",
      ],
    },
    "iran-tapetes": {
      summary:
        "Pagina link in bio per Iran Tapetes Orientais, negozio di tappeti nei Jardins, a São Paulo: WhatsApp, negozio online, Instagram, mappa e orari con un look premium.",
      points: [
        "Il negozio aveva bisogno di un link in bio all'altezza dei tappeti che vende, con tutto ciò che il cliente cerca a un tocco di distanza.",
        "La pagina riunisce WhatsApp, il negozio online, Instagram, l'email, la mappa del negozio fisico e gli orari di apertura.",
        "È mobile first, con un gradiente animato, glassmorphism e un layout in CSS Grid, una mappa Google integrata e un manifest con icone per la schermata home.",
      ],
    },
    "pizzaria-relampago": {
      summary:
        "Pagina link in bio per la Pizzaria Relâmpago, pizzeria artigianale a Itu (SP), che porta dritto all'ordine online, a WhatsApp, ai social e alla mappa.",
      points: [
        "L'obiettivo era semplice: chi arriva da Instagram deve poter ordinare con un tocco.",
        "Il pulsante per ordinare è in evidenza, seguito da WhatsApp, Instagram, Facebook e dalla mappa con l'indirizzo.",
        "L'ho fatta in HTML e CSS puri, senza framework né dipendenze, così si carica quasi all'istante sul telefono. Lo sfondo si cambia tramite una variabile CSS.",
      ],
    },
    linkbio: {
      summary:
        "La mia pagina link in bio, con la mia identità visiva: portfolio, LinkedIn, GitHub, email e la musica che ascolto, con gli embed di Spotify.",
      points: [
        "Riunisce una scheda di presentazione con foto, una frase in evidenza e i link al mio portfolio, LinkedIn, GitHub, Spotify ed email.",
        "Segue l'identità del mio banner, con Unbounded e Montserrat Black Italic, giallo e arancione su sfondo scuro. Il verde compare solo nelle parti Spotify, che mostrano playlist e album preferiti direttamente nella pagina.",
        "HTML e CSS con variabili, Flexbox e animazioni, metadati Open Graph e manifest.",
      ],
    },
    "agenda-manager": {
      summary:
        "Test tecnico front-end: un'agenda dalle 8 alle 18 con creazione e rimozione di fasce orarie, validazione del modulo, statistiche e un grafico della distribuzione per orario.",
      points: [
        "La sfida chiedeva un'agenda giornaliera chiara, con regole di validazione e una vista rapida di come è distribuita la giornata.",
        "La home presenta il prodotto. L'agenda raggruppa le fasce del giorno, apre una finestra per creare un appuntamento e permette di rimuoverli.",
        "Il modulo usa React Hook Form con Zod: titolo e cliente da 3 a 100 caratteri, orari in formato HH:mm e una descrizione facoltativa fino a 500 caratteri.",
        "Lo stato vive in Redux Toolkit, con quattro appuntamenti di esempio che durano per la sessione, e le statistiche compaiono in un grafico Recharts.",
      ],
    },
    "epic-musical": {
      summary:
        "Landing page da fan di Epic: The Musical, con sezioni interattive, animazioni di scorrimento in GSAP, un carosello di album Spotify e una FAQ.",
      points: [
        "Un progetto personale per esercitarmi con animazione e narrazione visiva su una pagina lunga.",
        "Il layout usa Flexbox, Grid e variabili di colore, con il breakpoint principale a 768px.",
        "GSAP 3 con ScrollTrigger gestisce le entrate e gli effetti di scorrimento. Gli album arrivano dall'embed di Spotify, e le icone da Font Awesome e Material Symbols.",
      ],
    },
    velory: {
      summary:
        "Progetto finale del percorso Ingegnere Front-end dell'EBAC: un catalogo di ristoranti con valutazioni, carrello e checkout con consegna e pagamento simulato, in React e TypeScript.",
      points: [
        "La sfida finale del corso era riunire tutto ciò che avevo studiato in un prodotto di delivery completo.",
        "L'elenco mostra i ristoranti con categoria e valutazione, e ognuno ha il suo menu. Il carrello vive in Redux Toolkit, e il contatore compare in alto.",
        "Il checkout passa per la revisione degli articoli, l'indirizzo di consegna, dati della carta simulati e la conferma dell'ordine. I dati arrivano da un'API consumata con Axios, e il routing usa React Router.",
      ],
    },
    matemagika: {
      summary:
        "App educativa di matematica fatta come lavoro di gruppo a scuola: risolve equazioni di primo e secondo grado passo per passo e fa l'interpolazione lineare con un grafico.",
      points: [
        "Il compito chiedeva uno strumento per aiutare lo studio della matematica computazionale.",
        "Il calcolo mostra le radici e i passaggi. Per un'equazione di primo grado, il coefficiente a resta vuoto o zero.",
        "L'interpolazione prende coppie di punti e traccia la retta con Chart.js. La pagina chiarisce che il lavoro è di gruppo.",
      ],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro, sito istituzionale",
      summary:
        "Landing page della consulenza Cresce+ Futuro, guidata da Marina Kamiya, su imprenditoria femminile, tecnologia e IA applicata al business.",
      points: [
        "La consulenza aveva bisogno di un sito proprio, separato dal SaaS, per presentare il suo lavoro e i suoi programmi.",
        "L'ho fatto in HTML, CSS e JavaScript, con animazioni di scorrimento in GSAP e ScrollTrigger e icone Font Awesome.",
        "SeeB è integrato, come in tutti i miei progetti recenti.",
      ],
    },
    portfolio: {
      title: "Portfolio",
      summary:
        "Questo sito: progetti con filtri e una finestra con galleria, modalità scura, PWA, SEO completo e cura di accessibilità e performance.",
      points: [
        "Volevo un portfolio che mostrasse il mio lavoro nel modo in cui costruisco prodotti: veloce, accessibile e curato nei dettagli.",
        "La griglia ordina i lavori per tipo, con grandi schede a zigzag, e ogni progetto apre una finestra con galleria, stack e link. Le immagini si caricano solo quando compaiono sullo schermo.",
        "Il tema chiaro o scuro usa next-themes. Metadati, Open Graph, sitemap, robots e dati strutturati coprono la SEO, e il sito è una PWA con manifest, icone e un service worker con pagina offline.",
        "Il modulo di contatto invia l'email direttamente, le animazioni usano Motion e SeeB è integrato.",
      ],
    },
  },
  experiences: [
    {
      role: "Cofondatore e CTO",
      period: "ott. 2026 a oggi",
      mode: "Da remoto",
      summary:
        "Cofondatore e responsabile della direzione tecnologica di Coach Up, una piattaforma SaaS white label per la gestione di palestre e personal trainer, focalizzata sulla digitalizzazione e semplificazione dei processi. Ogni palestra o personal trainer offre ai propri allievi un'app con il proprio marchio, installabile direttamente dal browser (PWA).",
      more: [
        "Lavoro sulla definizione dell'architettura del sistema, sulla scelta delle tecnologie, sulla pianificazione delle funzionalità e sullo sviluppo del prodotto, dal prototipo alla produzione.",
      ],
      didLabel: "Responsabilità principali:",
      did: [
        "Sviluppo e pianificazione dell'architettura full stack della piattaforma, con Next.js, Node.js e TypeScript.",
        "Modellazione dei dati, autenticazione e archiviazione con Supabase.",
        "Sviluppo delle soluzioni per la gestione degli allievi, la creazione e prescrizione degli allenamenti, la registrazione di serie e carichi e gli indicatori di performance.",
        "Struttura white label, perché ogni palestra o personal trainer usi la piattaforma con la propria identità visiva.",
        "Pianificazione dell'infrastruttura, dell'archiviazione cloud e della sicurezza dell'applicazione, con Cloudflare.",
        "Definizione della roadmap tecnologica e dell'evoluzione del prodotto.",
        "Ricerca di nuove tecnologie e opportunità di innovazione.",
      ],
      closing:
        "Il progetto punta a rendere la gestione di palestre e personal trainer più efficiente, accessibile e centralizzata, e a dare all'allievo un accompagnamento che continua fuori dalla palestra.",
    },
    {
      role: "Sviluppatore Full Stack",
      period: "mag. 2026 a oggi",
      mode: "Da remoto",
      summary:
        "Sono lo sviluppatore responsabile della tecnologia di T2 Educação: l'Hub interno di gestione, le integrazioni tra piattaforme, le automazioni, il database, l'infrastruttura e tutta la presenza digitale. Sono entrato a maggio 2026 come sviluppatore front-end e, un mese dopo, sono stato promosso a full stack, con l'intera operatività tecnologica sotto la mia responsabilità.",
      did: [
        "Ho trasformato un sistema legato a diverse integrazioni costose in una piattaforma ogni giorno più autonoma, portando in casa ciò che prima dipendeva da strumenti di terze parti.",
        "Sviluppo e faccio evolvere l'Hub di T2, il sistema interno in Next.js, React e TypeScript con moduli per attività, assistenza, finanza con riconciliazione, marketing, centrale contatti, affiliati e rappresentanti, libreria delle lezioni e gestione delle vendite B2B.",
        "Ho integrato l'Hub con più di dieci piattaforme: Crisp e Crisp AI per l'assistenza, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas per le fatture, Instagram Graph API, YouTube Analytics, automazioni WhatsApp, Google Reviews, GitHub, Cloudflare Turnstile al login e GA4 per il tracciamento delle conversioni.",
        "Modello e mantengo il database PostgreSQL su Supabase, con schemi per dominio, e mi occupo della nostra API, delle decine di cron su Vercel, della generazione di PDF, fogli di calcolo e presentazioni e degli health check che sorvegliano gli endpoint.",
        "Ho creato un server MCP perché gli agenti IA consultino e operino l'Hub in sicurezza.",
        "Ho ricostruito il sito, il blog, il portale dei materiali gratuiti e le landing page in Next.js 16, con Core Web Vitals, SEO tecnico, accessibilità e tracciamento. Mi occupo anche di Cloudflare (DNS, SSL, cache, regole e sicurezza), domini, ambienti di staging e produzione e pipeline CI/CD.",
      ],
      resultValue: "1 mese",
      resultLabel: "dal front-end alla promozione a full stack",
    },
    {
      role: "Ingegnere del Software Full Stack, AI-First",
      period: "mar. 2026 ad ago. 2026",
      mode: "Da remoto",
      summary:
        "Ho costruito SaaS, sistemi web e app mobili per startup, coprendo tutto il ciclo: requisiti, architettura, database, integrazioni, infrastruttura, deploy e pubblicazione negli store. Qui ho sviluppato Mirante ERP, il progetto più grande che abbia mai fatto.",
      did: [
        "Ho sviluppato Mirante ERP, con punto vendita, ordini e preventivi, magazzino, acquisti con approvazione e importazione XML, emissione di NF-e integrata con la SEFAZ, finanza con riconciliazione bancaria, multi-azienda con filiali, permessi, log di audit e dashboard con previsione delle vendite.",
        "Ho implementato K8 Pay, il gateway di K8 Fintech, per Pix e boleto all'interno dell'ERP, oltre ad altre integrazioni con gateway di pagamento, autenticazione e API esterne nei prodotti del periodo.",
        "Ho consegnato MVP, marketplace e app in React Native ed Expo, e curato la pubblicazione su App Store e Google Play. Oggi preparo un'app per l'invio agli store in poche ore.",
        "Ho messo online e mantenuto applicazioni su VPS con Docker e Coolify, con pipeline CI/CD, e lavorato con Supabase, PostgreSQL, Prisma e Drizzle ORM sul database.",
        "Ho lavorato nel modello AI-First, con agenti, MCP e strumenti di IA ogni giorno, in sprint settimanali e riunioni con gli stakeholder. Nel programma interno Bystartup Labs ho creato bystartup-web-qa, una skill che fa scrivere e correggere test E2E con Playwright agli agenti IA.",
      ],
    },
    {
      role: "Sviluppatore Full Stack",
      period: "gen. 2026 a mar. 2026",
      mode: "Da remoto",
      summary:
        "Ho ristrutturato il SaaS di Cresce+ Futuro, che organizza magazzino, vendite, attività e team di micro e piccole imprese, e ho spostato l'infrastruttura da tre fornitori a un'unica base, più economica e più facile da mantenere.",
      did: [
        "Ho riscritto l'applicazione in Next.js 16 full stack con App Router e Tailwind CSS, con autenticazione e pagamenti tramite Mercado Pago.",
        "Ho migrato lo stack, sparso tra Azure, Railway e Hostinger, su Neon PostgreSQL e Vercel, centralizzato il dominio e lasciato il prodotto pronto a scalare.",
        "Ho realizzato anche il sito istituzionale della consulenza, con SeeB, il widget di accessibilità che ho creato, integrato.",
      ],
    },
  ],
  studies: [
    {
      title: "Ingegneria del Software",
      place: "Gran Faculdade",
      period: "giu. 2026 a giu. 2030",
      text: "Laurea triennale in corso, con 3.200 ore in 8 semestri. Il piano di studi copre tutto il ciclo del software: algoritmi e strutture dati, database relazionali e NoSQL, front-end, back-end e mobile, architettura e microservizi, cloud, container e DevOps, qualità e test, sicurezza informatica, gestione agile e intelligenza artificiale. Ho scelto il corso perché parla la stessa lingua del mio lavoro: costruire prodotti e risolvere problemi reali.",
    },
    {
      title: "Intelligenza Artificiale e Automazione Digitale",
      place: "UniFECAF con la Faculdade de Tecnologia Rocketseat",
      period: "ott. 2026 a mar. 2028",
      text: "Laurea tecnologica in corso, di 18 mesi e con pratica fin dal primo semestre. Il programma copre IA generativa, prompt engineering, integrazione di API, automazione di processi e workflow, low-code, UX/UI e metodi agili, e arriva a RAG, embedding, fine-tuning e agenti autonomi. È la base teorica di ciò che uso già al lavoro con agenti, MCP e automazione.",
    },
    {
      title: "Architettura del Software con IA",
      place: "Corso di specializzazione",
      period: "Anhanguera, in corso, 360 h",
      text: "Corso di specializzazione in corso all'Anhanguera, con il Full Stack Club, di 360 ore. Il focus è l'architettura del software con l'intelligenza artificiale, con progetti pratici di scalabilità, performance, test, microservizi, CI/CD e cloud.",
    },
    {
      title: "Informatica per Internet (sviluppo web)",
      place: "ETEC Parque Belém",
      period: "2023 a 2025",
      text: "Scuola superiore tecnica, conclusa. Sono entrato senza saper usare bene un computer e sono uscito programmando: ho studiato logica, HTML, CSS, JavaScript, PHP, SQL, WordPress, MIT App Inventor, Figma, UX/UI, accessibilità, protocolli HTTP, nozioni di shell e virtualizzazione con VirtualBox. Il mio progetto di diploma è stato SeeB, estensione Chromium e widget di accessibilità di cui ho curato la parte tecnica; è stato presentato a scuola e oggi è open source e sul Chrome Web Store.",
    },
    {
      title: "Sviluppo personale e occupabilità",
      place: "UniFECAF",
      period: "nov. 2026",
      text: "Corso di estensione dell'UniFECAF sullo sviluppo personale e sulla preparazione al mercato del lavoro. I moduli trattano abitudini di studio e organizzazione, come la gestione del tempo.",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "mar. 2026",
      text: "Formazione dell'Instituto PROA per il mercato del lavoro, centrata su comunicazione e ragionamento analitico. Il percorso passa da obiettivi, scrittura professionale e comunicazione in team.",
    },
    {
      title: "Metodologie agili",
      place: "Rocketseat",
      period: "ott. 2025",
      text: "Basi di Scrum e Kanban per organizzare il lavoro di un team in cicli brevi e seguire l'andamento dei compiti.",
    },
    {
      title: "Introduzione a Go",
      place: "Rocketseat",
      period: "ott. 2025",
      text: "Primi passi nel linguaggio Go, con sintassi, tipi e il modo in cui il linguaggio tratta gli errori. La pratica è stata su programmi da terminale, come un gioco di indovinelli e un convertitore di valute.",
    },
    {
      title: "Fondamenti di gestione dei progetti",
      place: "Rocketseat con UniFECAF",
      period: "",
      text: "Corso su come pianificare, organizzare e seguire un progetto, fatto insieme alla laurea. L'idea è avere un perimetro, una scadenza e un modo chiaro di vedere a che punto è il lavoro.",
    },
    {
      title: "Git e GitHub: la guida definitiva nell'era dell'IA",
      place: "Rocketseat",
      period: "",
      text: "Corso di versionamento con Git e GitHub, pensato per il flusso di chi sviluppa con strumenti di IA. Copre il ciclo quotidiano di branch, commit e pull request.",
    },
    {
      title: "Agenti di IA con n8n",
      place: "Rocketseat",
      period: "",
      text: "Corso di automazioni e agenti di intelligenza artificiale costruiti in n8n, collegando servizi perché un flusso agisca a partire da una richiesta.",
    },
    {
      title: "SEO per dev",
      place: "Rocketseat",
      period: "",
      text: "Corso su come far comparire meglio un sito nelle ricerche, dal punto di vista di chi lo sviluppa. Passa per la struttura della pagina, il contenuto e i dettagli tecnici che il motore vede.",
    },
    {
      title: "Comunicazione assertiva",
      place: "Rocketseat",
      period: "",
      text: "Corso di comunicazione per il lavoro in team, con il focus sul parlare in modo chiaro e sicuro.",
    },
    {
      title: "Carriera internazionale",
      place: "Rocketseat",
      period: "",
      text: "Corso su come prepararsi a opportunità tech fuori dal Brasile, dal posizionamento alla comunicazione con team di un altro paese.",
    },
    {
      title: "Fondamenti di IA con focus sull'IA generativa",
      place: "Rocketseat",
      period: "",
      text: "Base di intelligenza artificiale con enfasi sull'IA generativa e su ciò che questi modelli cambiano nella giornata di chi sviluppa.",
    },
    {
      title: "Formazione Ingegnere Front-end",
      place: "EBAC",
      period: "",
      text: "Formazione di front-end con Git, CSS, JavaScript, Bootstrap, SASS, LESS, Gulp, Grunt, ES6, orientamento agli oggetti, TypeScript, React con Redux, test con Jest e Cypress, e Node. Gli esercizi e i progetti, come Velory e Games Shop, sono su GitHub.",
    },
    {
      title: "Jornada Full Stack",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Percorso pratico full stack il cui progetto è un'app ispirata a Spotify, con front-end, back-end e deploy.",
    },
    {
      title: "Sviluppo web completo",
      place: "Udemy",
      period: "",
      text: "Corso ampio di sviluppo web, con progetti pratici di front-end per esercitarsi a costruire una pagina da zero.",
    },
    {
      title: "Python base e avanzato",
      place: "Alura",
      period: "",
      text: "Corsi di Python dal livello base a quello avanzato, praticati creando giochi.",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "Sfida di costruire 50 mini progetti in HTML, CSS e JavaScript, uno al giorno, per fare pratica con il web.",
    },
    {
      title: "Intensivo di JavaScript",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Immersione pratica in JavaScript e React, con progetti costruiti da zero, come un lettore audio in JavaScript puro.",
    },
    {
      title: "Bootcamp Ri Happy: front-end da zero",
      place: "DIO",
      period: "",
      text: "Bootcamp di front-end con HTML, CSS e JavaScript, centrato sul costruire interfacce reali dall'inizio alla fine.",
    },
    {
      title: "Sfide di progetto HTML, CSS e JavaScript",
      place: "DIO",
      period: "",
      text: "Serie di sfide pratiche della DIO in cui si ricreano pagine e giochi, come Stranger Things, Discord, YouTube e Detona Ralph.",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "Evento pratico di Rocketseat sugli agenti di intelligenza artificiale, con un progetto costruito e pubblicato durante la settimana.",
    },
    {
      title: "NLW Connect",
      place: "Rocketseat",
      period: "",
      text: "Evento pratico di Rocketseat in cui si costruisce un'API da zero in pochi giorni.",
    },
    {
      title: "Creare una CLI in Go",
      place: "Rocketseat",
      period: "",
      text: "Lezione pratica sulla costruzione di uno strumento da riga di comando in Go.",
    },
    {
      title: "SQL e database",
      place: "",
      period: "",
      text: "Studio di SQL con i database di una biblioteca e di un servizio di streaming, incluse tabelle e relazioni.",
    },
    {
      title: "Introduzione alla programmazione",
      place: "EBAC",
      period: "",
      text: "Primo contatto con la logica di programmazione e i concetti di base per iniziare a scrivere codice.",
    },
    {
      title: "Logica di programmazione in JavaScript",
      place: "DIO",
      period: "",
      text: "Sfida di logica con strutture di decisione in JavaScript per classificare il livello di un eroe.",
    },
    {
      title: "Contribuire a un progetto open source su GitHub",
      place: "DIO",
      period: "",
      text: "Laboratorio pratico su come contribuire a un progetto open source: fork, branch e pull request.",
    },
    {
      title: "Settimana carriera tech",
      place: "Alura",
      period: "",
      text: "Settimana di contenuti su carriera nella tecnologia e intelligenza artificiale, con uno sguardo al mercato e ai percorsi possibili.",
    },
    {
      title: "Universo Photoshop",
      place: "brainstorm.academy",
      period: "",
      text: "Corso di Adobe Photoshop e design grafico per creare e trattare immagini usate in interfacce e nei contenuti.",
    }
  ],

  recommendations: [
    {
      role: "Sviluppatore Full Stack, stesso team in ByStartup",
      date: "3 agosto 2026",
      paragraphs: [
        "Ho avuto l'opportunità di lavorare con Rafael Henrique Blanco in ByStartup, e posso dire che è stato uno dei professionisti più solidi e affidabili con cui abbia mai lavorato.",
        "Uno dei suoi punti di forza è la capacità di guidare progetti molto complessi con rapidità e qualità, senza perdere il controllo né la calma. Consegna con costanza, organizza bene il lavoro e trasforma sfide tecniche difficili in soluzioni chiare e ben eseguite.",
        "Oltre a un'ottima conoscenza tecnica e all'esperienza nello sviluppo software, Rafael è estremamente professionale, responsabile e organizzato. Resta maturo sotto pressione, comunica in modo obiettivo e alza il livello del team intorno a lui.",
        "Raccomando Rafael senza alcun dubbio. Sono certo che sarà un grande valore aggiunto per qualsiasi team che cerchi una persona esperta, affidabile e capace di consegnare progetti complessi con eccellenza.",
      ],
    },
    {
      role: "COO Tecnologia, ha supervisionato Rafael direttamente in ByStartup",
      date: "2 agosto 2026",
      paragraphs: [
        "Rafael è il tipo di sviluppatore che porta tranquillità al team. Durante le nostre interazioni, la sua grande padronanza tecnica e la sua proattività erano evidenti.",
        "Non aspetta che i problemi arrivino; li anticipa già nelle riunioni di pianificazione, suggerisce buone pratiche e si assicura che il prodotto finale abbia la migliore qualità possibile.",
        "Ottimo professionista!",
      ],
    },
  ],
};
