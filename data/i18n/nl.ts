import type { ContentText } from "./types";

/**
 * Lange inhoud in het Nederlands. De lijsten volgen de volgorde van de Portugese bestanden in data/.
 * De alternatieve teksten van de afbeeldingen worden hier niet vertaald: die komen uit de Engelse versie.
 */
export const nl: ContentText = {
  projects: {
    t2: {
      summary:
        "Bedrijfswebsite van T2 Educação, met voorbereidingscursussen voor financiële certificeringen, een sectie voor bedrijven en landingspagina's. Opnieuw gebouwd in Next.js 16 met focus op performance, SEO en conversie.",
      points: [
        "T2 bereidt professionals voor op certificeringen voor de financiële markt, zoals CPA en C-Pro. De site moest snel laden, goed scoren in Google en bezoekers tot aan de inschrijving leiden; eerder hing hij af van een visuele sitebouwer.",
        "Ik bouwde de site opnieuw in Next.js 16 met App Router, React 19 en Tailwind CSS 4, met cursuspagina's, certificeringspagina's en de sectie voor bedrijven, plus de landingspagina's van de campagnes.",
        "Ik zorgde voor Core Web Vitals, technische SEO, toegankelijkheid, animaties met GSAP en Three.js en conversie- en checkout-tracking in GA4. De site gebruikt Supabase en Resend, en het domein loopt via Cloudflare.",
        "Ik ben de developer die verantwoordelijk is voor de technologie van het bedrijf. De screenshots tonen alleen openbare pagina's. De interne Hub, de integraties en het studentenplatform staan hier niet in.",
      ],
    },
    "t2-blog": {
      summary: "Openbare blog van T2 met artikelen en gidsen over financiële certificeringen, carrières en de markt, gemaakt om op de telefoon te lezen en in Google te vinden.",
      points: [
        "De blog is de belangrijkste bron van organisch verkeer voor T2. Hij had sterke technische SEO nodig, prettig lezen op de telefoon en een eenvoudige publicatieflow voor het team.",
        "Ik bouwde de front-end in Next.js met Ghost als headless CMS. De homepage licht onderwerpen uit, zoals het C-Pro R-examen, en elk artikel toont auteur en datum.",
        "Technische SEO en GA4 volgen elk bericht. De screenshots tonen alleen openbare redactionele inhoud.",
      ],
    },
    "t2-docs": {
      title: "Gratis studiemateriaal van T2",
      summary: "Portaal met gratis syllabi, proefexamens en samenvattingen voor financiële certificeringen zoals CPA, C-Pro, CFP en ANCORD, gebouwd met Next.js en headless Ghost.",
      points: [
        "T2 biedt gratis studiemateriaal voor wie zich voorbereidt op een certificering. Het portaal ordent syllabi, proefexamens en samenvattingen per certificering, makkelijk te doorzoeken en te vinden in Google.",
        "Ik bouwde het portaal in Next.js en haal de inhoud headless uit Ghost, zodat het team kan publiceren zonder code aan te raken.",
        "Het gepubliceerde materiaal is studie-inhoud. Er verschijnen geen studentgegevens op het portaal.",
      ],
    },
    mirante: {
      summary:
        "ERP voor meerdere bedrijven met kassa, NF-e (Braziliaanse e-factuur) gekoppeld aan SEFAZ, financiën met reconciliatie, voorraad, inkoop en K8 Pay voor Pix en boleto. Het grootste systeem dat ik ooit heb gebouwd.",
      points: [
        "Kleine en middelgrote bedrijven houden verkoop, voorraad, inkoop en financiën vaak bij in losse tools. Mirante brengt alles samen in één systeem, met meerdere bedrijven en vestigingen in hetzelfde account en een vestigingswisselaar bovenaan.",
        "Verkoop: een kassa met betaling en afsluiting, verkooporders met verkopers en offertes. Voorraad met een dashboard van producten onder het minimum of negatief, catalogus, prijzen, categorieën en diensten.",
        "Fiscaal en inkoop: uitgifte en beheer van NF-e gekoppeld aan SEFAZ met een A1-certificaat, een paneel met ontvangen facturen en bevestiging, inkoopaanvragen met goedkeuring of afwijzing en goederenontvangst via XML, via NF-e-sleutel of handmatig.",
        "Financiën: crediteuren en debiteuren, kassa openen en sluiten, bankrekeningen met afschriften en reconciliatie, voorschotten, herziening van termijnen, kostenplaatsen en rekeningschema. Ik integreerde ook K8 Pay, de gateway van K8 Fintech, in de ERP om via Pix en boleto te innen.",
        "Beheer: een dashboard met KPI's, omzet jaar op jaar en verkoopprognose, één register voor klanten, leveranciers en medewerkers, gebruikers en rechten, een exporteerbaar auditlog, globaal zoeken en snelle acties met Ctrl+K en aanpasbaar thema, dichtheid en animaties.",
        "Ik bouwde het systeem bij ByStartup in ongeveer drie maanden. Het productidee kwam van de klant. Het prototype, het productontwerp, de full stack ontwikkeling en de infrastructuur waren van mij, van de front-end tot de database, de integraties en de deploy. De screenshots komen uit een testaccount met fictieve gegevens.",
      ],
    },
    carretel: {
      summary:
        "Mijn eigen SaaS voor naaiateliers: het registreert de snit, bewijst de levering en int via Pix vanaf de telefoon, zelfs bij zwak bereik. Tweetalig, in het Portugees en Spaans.",
      points: [
        "Eigenaren van naaiateliers, velen uit de Boliviaanse gemeenschap in São Paulo, houden snitten, leveringen en betalingen bij in een schrift en op WhatsApp. Bij onenigheid over aantal of prijs is er nergens bewijs van. Carretel lost dit op met drie werkwoorden: registreren, bewijzen en innen.",
        "Registreren: een binnenkomende snit wordt vastgelegd met foto, ingesproken aantal en prijs, maatentabel, deadline en fournituren, en de productie per persoon, bewerking en machine. Bewijzen: een openbare link toont foto's, maatentabel, bedrag en een verificatiecode, en de klant bevestigt via WhatsApp zonder account. De bevestiging slaat tijd, browser en IP op en blijft onveranderlijk in de database.",
        "Innen: het scherm toont wie hoeveel dagen schuldig is, maakt een kant-en-klaar WhatsApp-bericht met Pix Copia e Cola en een QR-code (BR Code met CRC16, in het project zelf geschreven) en accepteert volledige of gedeeltelijke betaling. Er is ook een wekelijkse afrekening met tweetalige bon, een calculator voor een eerlijke stukprijs, data-export volgens de LGPD en het verwijderen van het account.",
        "De app is offline first: acties gaan naar een idempotente wachtrij in IndexedDB en synchroniseren zodra het bereik terug is, met service worker en installatie als PWA. Hij is multi-tenant, met isolatie per atelier getest tegen een echte Postgres.",
        "Abonnementen lopen via AbacatePay, met een webhook gevalideerd met HMAC-SHA256. De interface volgt WCAG 2.2 AA, met grote aanraakvlakken en ingebouwde SeeB, en het project heeft tests met Vitest, property-tests met fast-check en toegankelijkheidstests met Playwright en axe.",
        "Het is mijn eigen product, van het idee tot de specificatie, het ontwerp en de code. Het zit in de pre-launch.",
      ],
    },
    gatelite: {
      summary:
        "De aarde van vandaag, van boven gezien: kies een plek en bekijk het satellietbeeld van de dag, welke satellieten erover vlogen, hoe hij sinds 2000 veranderd is en wat er nu in de buurt gebeurt. Alles met open data van NASA, zonder login en zonder database.",
      points: [
        "De naam combineert gato (kat) en satélite (satelliet). De satellietbeelden van NASA zijn open, maar verspreid over technische portalen. Gatélite brengt ze samen op één site, voor iedereen die zijn wijk, zijn stad of de hele planeet van boven wil zien.",
        "Verkennen: een globe met het dagelijkse mozaïek van NASA-satellieten (VIIRS en MODIS), Landsat en Sentinel op 30 m, infrarood, nachtlichten, temperatuur en rook. Als de zoom verder gaat dan het beeld van de dag kan tonen, schakelt de kaart vanzelf naar een laag met hoge resolutie waar je huizen, blokken en het Christusbeeld ziet. De hele weergave zit in de URL.",
        "Het tabblad Weer zet de laatste 14 dagen van de plek naast elkaar en schat de bewolking van elke dag uit de kleur van het beeld, met zonsopgang en zonsondergang. Overvluchten van 14 satellieten in de afgelopen en komende 24 uur worden in de browser berekend, met SGP4 in een Web Worker. Er is ook een timelapse van dezelfde dag van het jaar sinds 2001 en een voor-en-na met een versleepbaar gordijn.",
        "De planeet nu: een wereldkaart met dag en nacht in realtime, stadslichten, de satellietvloot live, actieve natuurverschijnselen (bosbranden, stormen, vulkanen en ijsbergen) en foto's van de EPIC-camera, genomen op 1,5 miljoen km afstand.",
        "Geen account en geen database: de URL bewaart de weergave, het apparaat de opgeslagen plekken en de server cachet alleen de externe API's. Het domein (banen, wolken, zon en verschijnselen) bestaat uit pure regels getest met Vitest. Het is een open source persoonlijk project onder MIT-licentie, zonder officiële band met NASA.",
      ],
    },
    cresce: {
      summary: "Beheer-SaaS voor micro- en kleine bedrijven. Ik herschreef het product in Next.js 16 en verhuisde de infrastructuur naar Neon en Vercel.",
      points: [
        "De SaaS van Cresce+ ordent voorraad, verkoop, taken en team van micro- en kleine bedrijven. De vorige versie was verspreid over Azure, Railway en Hostinger, duur in onderhoud en moeilijk door te ontwikkelen.",
        "Ik herschreef de applicatie in full stack Next.js 16 met App Router en Tailwind CSS, met authenticatie en betalingen via Mercado Pago.",
        "Ik verhuisde de database naar Neon PostgreSQL en de applicatie naar Vercel, en centraliseerde het domein.",
        "Ik maakte ook de bedrijfswebsite van het adviesbureau, die een eigen kaart heeft.",
      ],
    },
    xerox: {
      summary: "Productiesysteem voor kopieerwinkels dat papieren kassabonnen en spreadsheets verving door digitale invoer, automatische voorraad en rapporten in Excel en PDF.",
      points: [
        "In veel kopieerwinkels wordt elke opdracht op een papiertje geschreven en aan het eind van de dag in een spreadsheet opgeteld. Dat leidt tot fouten, verloren geschiedenis en geen voorraadbeheer. Xerox Manager vervangt dit door een eenvoudig, traceerbaar realtime systeem.",
        "De medewerker typt de productcode en naam en prijs vullen zichzelf in. Hij past aantal en prijs aan, bevestigt, en de voorraad daalt automatisch. Bewerken en verwijderen kan alleen op dezelfde dag.",
        "De beheerder beheert medewerkers, producten en voorraad, met een waarschuwing bij lage voorraad en handmatige correctie, en haalt rapporten per periode op met productie per medewerker en voorraadverbruik, geëxporteerd naar Excel met drie tabbladen en naar PDF.",
        "Beveiliging kreeg zorgvuldige aandacht: wachtwoorden met bcrypt, JWT-sessies in een httpOnly-cookie met een intrekbare sessietabel, rechtencontrole in elke Server Action en filters gevalideerd met Zod.",
        "Het is een demoversie die dezelfde logica volgt als het systeem in productie. Ik bouwde alles, van de database tot de interface, met SeeB geïntegreerd.",
      ],
    },
    somnus: {
      summary: "App om slaapuren bij te houden en patronen te zien: gemiddelde, beste en slechtste nacht en voortgangsgrafieken, met accounts per gebruiker en ingebouwde toegankelijkheid.",
      points: [
        "Wie beter wil slapen, heeft eenvoudige, consistente gegevens nodig, geen apps vol ongebruikte functies. Somnus doet één ding goed: geslapen uren vastleggen en analyseren.",
        "De flow is direct: inloggen, de nacht vastleggen en de analyse zien. Het dashboard toont gemiddelde slaap, beste en slechtste nacht, de volledige geschiedenis en voortgangsgrafieken.",
        "Authenticatie loopt via Clerk, en iedereen ziet alleen zijn eigen gegevens. De back-end draait op Next.js Server Actions, van begin tot eind getypeerd met Prisma en PostgreSQL op Neon.",
        "Toegankelijkheid was vanaf het begin een eis, met SeeB geïntegreerd. Ik bouwde het project alleen, van de database tot de deploy op Vercel.",
      ],
    },
    bicus: {
      summary: "App voor lokale diensten, producten, verhuur en winkels, met kaart, chat en uitgelichte advertenties betaald via Pix, kaart of boleto. In de App Store, Google Play en op het web.",
      points: [
        "Bicus brengt de diensten, producten, verhuur en winkels van de stad samen in één app, met zoeken op afstand en geverifieerde verkopers.",
        "De app toont advertenties op een kaart, met locatiekeuze en adres zoeken, en heeft een chat in de app om direct met de verkoper af te spreken.",
        "Verkopers kunnen een advertentie uitlichten. De betaling loopt via Mercado Pago, met Pix, kaart of boleto, en het uitlichten gaat na bevestiging vanzelf aan. De app ontvangt of bewaart geen kaartgegevens.",
        "Eén Expo- en React Native-codebase levert de iOS- en Android-apps en de webversie. Het productidee kwam van de klant. Prototype, product, full stack ontwikkeling en infrastructuur waren van mij.",
      ],
    },
    apertou: {
      summary: "Marktplaats waarmee fysieke winkels via de telefoon verkopen, met app, winkelpaneel en beheerpaneel. Pix of kaart, automatische verdeling per winkel en bestellingen om eerst te passen.",
      points: [
        "Buurtwinkels lopen omzet mis omdat ze niet op de telefoon van de klant staan, en een eigen webshop is duur. Apertou Comprou zet deze winkels op een lokale marktplaats, met thuisbezorging of afhalen in de winkel.",
        "Klanten kopen via de app of de website, praten met de winkel in de chat en kunnen artikelen laten komen om te passen voordat ze betalen, met een pasbestelling. Betalen kan met Pix of kaart.",
        "Elke winkel heeft een ontvangersrekening bij Pagar.me, en het bedrag van elke verkoop wordt automatisch verdeeld en naar de bankrekening van de winkelier overgemaakt. Het paneel begeleidt het invullen van de bankgegevens en houdt de winkel offline tot alles compleet is.",
        "Het product heeft drie delen: de klantapp, het winkelpaneel en het beheer van de marktplaats, met grafieken. Het idee kwam van de klant. Ik deed het prototype, het product, de full stack ontwikkeling en de infrastructuur.",
      ],
    },
    junto: {
      summary: "App en website om open hardloopsessies in de buurt te vinden, gemaakt door echte mensen. Je ziet wie er gaat, bevestigt je komst en maakt je eigen loop. Op het web, Google Play en de App Store.",
      points: [
        "Alleen hardlopen ontmoedigt, en afspreken in een groepschat lukt niet altijd. Junto toont open loopjes in de buurt, gemaakt door echte mensen. De belofte van het product: vind iemand, loop samen.",
        "Je ziet wie er gaat, bevestigt je komst, doet mee aan de chat van de loop, checkt in op het verzamelpunt en maakt je eigen loop met plek, dag en tempo. Loopjes verschijnen per wijk en tijd, met een filter voor loopjes alleen voor vrouwen. De app is gratis, zonder kaart.",
        "De pagina behandelt de veiligheid van de afspraak: geverifieerde identiteit, een open lijst van wie er komt, live meekijken met een vertrouwenspersoon, automatisch uitchecken en een noodknop. Loopgroepen en trainingsteams hebben een pagina, een agenda en open loopjes. De bèta is open in Rio de Janeiro.",
        "In de App Store en Google Play heet de app \"junto: companhia para correr\". Het productidee kwam van de klant. Prototype, product, full stack ontwikkeling en infrastructuur waren mijn werk.",
      ],
    },
    voxx: {
      summary: "Website van Agência Voxx, een digitaal marketingbureau in Itapetininga, met animaties in Framer Motion en een contactformulier dat e-mail verstuurt.",
      points: [
        "Het bureau had een site nodig die zijn werk liet zien met dezelfde visuele kwaliteit die het aan klanten levert, zonder zwaar te zijn op de telefoon.",
        "De pagina presenteert planning, social media, visuele identiteit en betaald verkeer, met in- en scrollanimaties gemaakt in Framer Motion.",
        "Ik bouwde hem in Next.js 16 met App Router, Tailwind CSS en Google-lettertypen (Besley en DM Sans). Het formulier verstuurt e-mail via Resend met Nodemailer, en Google Analytics komt binnen via @next/third-parties.",
      ],
    },
    jotape: {
      summary: "Webshop voor originele horloges, gemaakt als freelanceopdracht: catalogus per merk, zoeken, afrekenen met Pix of kaart via Mercado Pago, ordertracking en WhatsApp.",
      points: [
        "Een winkel in originele horloges die een eigen webshop nodig had, waar klanten zelf kopen, op elk moment.",
        "De catalogus is per merk geordend, met zoeken, productpagina's en een winkelwagen. Betalen gebeurt op de site zelf, met Pix of creditcard, verwerkt door Mercado Pago.",
        "Klanten volgen hun bestelling op de site en praten met de winkel via WhatsApp. De winkel kan ook als app op de telefoon worden geïnstalleerd. Het idee voor de winkel kwam van mij, en de rest deed ik ook: prototype, product, full stack ontwikkeling en infrastructuur.",
      ],
    },
    seeb: {
      summary: "Open source toegankelijkheidswidget en -extensie, gemaakt in mijn afstudeerproject. Met één regel script krijgt elke site contrast, kleurenblindheidsfilters, een voorleesfunctie en meer, zonder gegevens te verzamelen.",
      points: [
        "Veel mensen met slechtziendheid, kleurenblindheid of ADHD lopen tegen drempels aan bij het lezen op het web, en de meeste sites bieden geen enkele aanpassing. SeeB begon als gratis Chromium-extensie en werd ook een widget die elke site met één regel kan insluiten.",
        "Het paneel bundelt filters voor protanopie, deuteranopie, tritanopie en monochroom, hoog contrast, kleuren omkeren en donkere modus, grotere tekst, spatiëring, vette tekst, onderstreepte en gemarkeerde links, een leesliniaal en leesfocuslijn, helderheid en verzadiging, afbeeldingen verbergen, animaties stoppen, toetsenbordfocus markeren, een grote cursor en een voorleesfunctie met keuze van stem en snelheid.",
        "De widget wordt via een CDN op Cloudflare Pages geleverd, dus elke verbetering bereikt bestaande gebruikers meteen. De openbare documentatie laat zien hoe je hem integreert in puur HTML, Vite, Vue, Angular en Next.js met App Router, inclusief de SSR- en hydratiedetails die ik zelf oploste bij het insluiten in Next.js-projecten.",
        "De extensie gebruikt Manifest V3, vraagt alleen de rechten storage en activeTab en staat in de Chrome Web Store. Er wordt niets verzameld: voorkeuren blijven in de browser.",
        "Vandaag zit SeeB in mijn projecten, zoals Carretel, Xerox Manager, Somnus, Giz, Velory, het Excel-dashboard, Agência Voxx en de bedrijfswebsite van Cresce+ Futuro. Ik deed het technische deel van het afstudeerproject aan ETEC Parque Belém en onderhoud het nog steeds als open project op GitHub.",
      ],
    },
    giz: {
      title: "GIZ, AI-assistent",
      summary: "AI-agent die een korte briefing krijgt en de teksten voor WhatsApp, Instagram en e-mail schrijft. Hij beschermt persoonsgegevens voordat hij het model aanroept en publiceert alleen met menselijke goedkeuring.",
      points: [
        "Project voor de challenge \"Seu Primeiro Agente de IA\" (Je eerste AI-agent). Giz is een fictieve sportschoolketen waar het team tijd verliest met aankondigingen en campagnes voor elk kanaal.",
        "De agent werkt in vier stappen. Eerst maskeert de server CPF (Braziliaans fiscaal nummer), telefoon, e-mail en kaartnummers voordat er iets naar het model gaat. Daarna begrijpt hij het verzoek, schrijft en controleert hij. Tot slot leest, bewerkt en keurt een mens goed. Niets wordt vanzelf gepubliceerd.",
        "De modelstappen gebruiken persona, meta-prompting, few-shot en verificatie via vragen, met JSON-uitvoer om stappen te koppelen en een andere temperatuur per taak (0,2 voor triage en review, 0,8 voor schrijven).",
        "De tekst van de medewerker komt afgebakend binnen en wordt als data behandeld, om prompt injection te voorkomen. De merkgids verbiedt het beloven van fysieke resultaten, het geven van gezondheidsadvies en het verzinnen van informatie.",
        "De back-end bestaat uit Node.js serverless functies op Vercel, met NDJSON-streaming. De front-end is HTML, CSS en JavaScript-modules, zonder framework. Het model is Gemini 3.5 Flash-Lite, met gemini-flash-lite-latest als terugval.",
      ],
    },
    "steal-a-boo": {
      summary: "Sociale simulator voor Roblox op een nachtelijke kermis, voor maximaal 8 spelers: vang Boos, bouw je basis, verdien Cash, besteel je vrienden en verdedig wat van jou is. Gemaakt met AI, voor de lol.",
      points: [
        "Een persoonlijk experiment om Roblox-gameontwikkeling te leren met een professionele workflow, met AI als ondersteuning.",
        "Je vangt Boos in 7 zeldzaamheden en zet ze in je basis om Cash per seconde te verdienen. Je traint snelheid en werpkracht en bouwt tot 6 verdiepingen.",
        "Je kunt bases met een open poort bestelen en je verdedigen met komische schrikmomenten. Er is Rebirth, een dagelijkse kist en een ranglijst. De schrikmomenten zijn licht, voor alle leeftijden.",
        "De code leeft buiten Studio, in Luau met versiebeheer in Git, gesynchroniseerd met Rojo, pakketten via Wally en spelergegevens opgeslagen met ProfileStore.",
      ],
    },
    "67-noites": {
      summary: "Coöperatieve survival voor 1 tot 5 spelers in een terreiro (gebedsplaats van de umbanda) diep in het bos: houd de ketel brandend en overleef 67 nachten tot de confrontatie met Zé Pilintra. Gemaakt met AI, voor de lol.",
      notice:
        "Deze game is fictie, gemaakt met volledig respect voor de umbanda en de Afro-Braziliaanse cultuur, zonder de bedoeling te beledigen. De entiteiten verschijnen als wachters die de speler op de proef stellen, en de game geeft geen echte rituelen, gezangen of gebeden weer. De humor zit in de situaties van de game, nooit in de religie.",
      points: [
        "Een persoonlijk coöperatief survival-experiment op Roblox, gemaakt met hulp van AI en met volledig respect voor de umbanda en de Afro-Braziliaanse cultuur.",
        "Elke nacht verdedigt de groep de ketel tegen invasies en ontmoet vier entiteiten, die verschijnen als wachters die de speler op de proef stellen. Het gevecht is eenvoudig, met combo's, ontwijken en pareren.",
        "De kaart heeft biomen zoals de terreiro, de steengroeve en de hut in het bos.",
        "De code is Luau met versiebeheer via Rojo en Wally, gegevens opgeslagen met ProfileStore, linting met Selene, opmaak met StyLua en scripts met Lune. De README noemt 646 balanstests.",
      ],
    },
    offscope: {
      summary: "Online first-person shooter voor Roblox gericht op no-scopes: één sniper, één mes, drie maps, ranked met ELO en een server die elk schot valideert. Gemaakt met AI, voor de lol.",
      notice: "Mild, 16+, licht geweld, geen bloed",
      points: [
        "Een persoonlijk project om netcode en competitieve games te leren, gemaakt met hulp van AI (Claude Code).",
        "Modi Duel 1v1 en Duo's 2v2, casual en ranked met ELO, plus Teams 4v4 en Ieder voor zich met 8 spelers. Na een wedstrijd kiest een stemming van 20 seconden de volgende map.",
        "De server beslist over elk schot. De client stuurt de intentie met een deterministische seed, en de server reconstrueert de richting, spoelt de hitboxes terug in de tijd (lagcompensatie op 30 Hz, tot 0,45 s) en bevestigt de treffer. Het mes doodt met één steek van achteren.",
        "Drie maps volledig in code gebouwd, met echt terrein via WriteVoxels: Cais 09, een haven bij dageraad, Avenida 11, de binnenstad 's nachts, en Posto 47, in de bergen. Het wapen, de armen en het mes zijn opgebouwd uit Parts en in code geanimeerd, en de 22 geluiden en de texturen worden ook in de repository gegenereerd.",
        "Cosmetics zijn puur visueel, zonder lootboxen en zonder pay-to-win, met een dagelijkse winkel die op elke server gelijk is en aankopen die pas na het opslaan in ProfileStore bevestigd worden. De README telt 13,5k regels Luau, en de CI draait bij elke push rojo build, typecontrole met luau-lsp en Selene.",
      ],
    },
    mapinion: {
      summary: "Mobiele app om plekken te ontdekken en aan te raden, met foto, een beoordeling van 1 tot 5 en een opmerking, en een feed met de aanraders van anderen. Ik bouwde de app en de API.",
      points: [
        "Tips over plekken raken vaak kwijt in groepschats. Mapinion bewaart alles in een feed: je plaatst de plek met foto, beoordeling en opmerking en volgt wat anderen aanraden.",
        "De React Native-app met Expo en Expo Router heeft inloggen, registreren en drie tabbladen: feed, nieuwe aanrader en profiel. De sessie leeft in Zustand met AsyncStorage, en de foto komt uit de galerij via Expo Image Picker.",
        "Op je profiel kun je je aanraders bekijken, bewerken en verwijderen.",
        "De API is ook van mij: Node.js met Express, MongoDB met Mongoose, wachtwoorden met bcrypt, inloggen met een JWT van 15 dagen en afbeeldingen op Cloudinary. De feed is gepagineerd, de avatar wordt gemaakt door DiceBear en een cron houdt de server wakker.",
      ],
    },
    "excel-dashboard": {
      title: "Excel-verkoopdashboard",
      summary: "Technische test: je uploadt een verkoopspreadsheet en de app schoont de data op en bouwt een dashboard met kerncijfers, vier grafieken, filters en een volledige tabel, allemaal in de browser.",
      points: [
        "Echte verkoopspreadsheets komen met lege rijen, categorieën die op verschillende manieren zijn geschreven en maanden in afwijkende formaten. De uitdaging was een bruikbaar dashboard zonder back-end.",
        "De app leest het eerste blad van het .xlsx- of .xls-bestand met SheetJS, laat rijen zonder categorie, product of omzet vallen en normaliseert categorieën en maanden.",
        "Het dashboard toont totale omzet, bestellingen en gemiddelde orderwaarde, en vier grafieken in Recharts: verkoop per categorie, verkoop per maand, aantal per maand en top 5 producten op omzet.",
        "De filters op categorie en maand sturen een tabel met sorteren, paginering, realtime zoeken en 10, 25, 50 of 100 items per pagina. SeeB is toegevoegd in index.html.",
      ],
    },
    "bystartup-web-qa": {
      summary: "Een skill waarmee AI-agents zoals Claude Code en Gemini CLI E2E-tests met Playwright genereren, uitvoeren en repareren in webapplicaties. Gemaakt bij Bystartup Labs.",
      points: [
        "End-to-end tests schrijven en onderhouden kost tijd en wordt vaak uitgesteld. De skill geeft dit werk aan de AI-agent, met duidelijke regels.",
        "De agent leest de front-endbestanden, vindt knoppen, formulieren, navigatie, API-aanroepen en fout-, laad- en successtatussen, en schrijft de tests in testes/[feature].e2e.test.ts, waarbij hij de map aanmaakt als die niet bestaat.",
        "Daarna voert hij de tests uit, probeert opnieuw, repareert wat faalde en werkt oude tests bij zonder de dekking te verliezen die al werkte.",
        "Hij herkent inloggen met JWT, cookies, localStorage, NextAuth, Clerk, Firebase Auth en Auth0, bewaart de sessie en genereert scenario's voor telefoon, tablet en desktop, met semantische, toegankelijke selectors.",
        "Hij werkt met React, Next.js, Vue, Angular en andere webinterfaces. Ik maakte de skill in het interne innovatieprogramma van ByStartup.",
      ],
    },
    "iran-tapetes": {
      summary: "Link-in-bio-pagina voor Iran Tapetes Orientais, een tapijtwinkel in Jardins, São Paulo: WhatsApp, webshop, Instagram, kaart en openingstijden in een premium look.",
      points: [
        "De winkel had een link in bio nodig die past bij de tapijten die hij verkoopt, met alles wat klanten zoeken op één tik afstand.",
        "De pagina bundelt WhatsApp, de webshop, Instagram, e-mail, de kaart van de fysieke winkel en de openingstijden.",
        "Hij is mobile first, met een geanimeerd verloop, glassmorphism en een CSS Grid-layout, een ingesloten Google-kaart en een manifest met iconen voor het startscherm.",
      ],
    },
    "pizzaria-relampago": {
      summary: "Link-in-bio-pagina voor Pizzaria Relâmpago, een ambachtelijke pizzeria in Itu (SP), die direct leidt naar online bestellen, WhatsApp, social media en de kaart.",
      points: [
        "Het doel was simpel: wie van Instagram komt, moet met één tik kunnen bestellen.",
        "De bestelknop valt het meest op, gevolgd door WhatsApp, Instagram, Facebook en de kaart met het adres.",
        "Ik bouwde hem in puur HTML en CSS, zonder framework of afhankelijkheden, zodat hij op de telefoon bijna direct laadt. De achtergrond wissel je via een CSS-variabele.",
      ],
    },
    linkbio: {
      summary: "Mijn link-in-bio-pagina in mijn eigen huisstijl: portfolio, LinkedIn, GitHub, e-mail en de muziek die ik luister, met Spotify-embeds.",
      points: [
        "Hij bundelt een introductiekaart met foto, een uitgelichte zin en de links naar mijn portfolio, LinkedIn, GitHub, Spotify en e-mail.",
        "Hij volgt de identiteit van mijn banner, met Unbounded en Montserrat Black Italic, geel en oranje op een donkere achtergrond. Groen verschijnt alleen in de Spotify-delen, die favoriete playlists en albums direct op de pagina tonen.",
        "HTML en CSS met variabelen, Flexbox en animaties, Open Graph-metadata en een manifest.",
      ],
    },
    "agenda-manager": {
      summary: "Technische front-endtest: een agenda van 8 tot 18 uur met tijdsloten aanmaken en verwijderen, formuliervalidatie, statistieken en een grafiek van de verdeling per tijdstip.",
      points: [
        "De opdracht vroeg om een overzichtelijke dagagenda, met validatieregels en een snelle blik op hoe de dag verdeeld is.",
        "De homepage presenteert het product. De agenda groepeert de tijdsloten van de dag, opent een modal om een afspraak te maken en laat je ze verwijderen.",
        "Het formulier gebruikt React Hook Form met Zod: titel en klant van 3 tot 100 tekens, tijden in HH:mm en een optionele beschrijving van maximaal 500 tekens.",
        "De state leeft in Redux Toolkit, met vier voorbeeldafspraken die de sessie lang blijven, en de statistieken verschijnen in een Recharts-grafiek.",
      ],
    },
    "epic-musical": {
      summary: "Fan-landingspagina voor Epic: The Musical, met interactieve secties, GSAP-scrollanimaties, een Spotify-albumcarrousel en een FAQ.",
      points: [
        "Een persoonlijk project om animatie en visuele storytelling op een lange pagina te oefenen.",
        "De layout gebruikt Flexbox, Grid en kleurvariabelen, met het belangrijkste breekpunt op 768px.",
        "GSAP 3 met ScrollTrigger regelt de entrees en scrolleffecten. De albums komen via de Spotify-embed, en de iconen uit Font Awesome en Material Symbols.",
      ],
    },
    velory: {
      summary: "Eindproject van de opleiding Front-end Engineer van EBAC: een restaurantcatalogus met beoordelingen, winkelwagen en afrekenen met bezorging en gesimuleerde betaling, in React en TypeScript.",
      points: [
        "De eindopdracht van de cursus was alles wat ik had geleerd samenbrengen in een compleet bezorgproduct.",
        "De lijst toont restaurants met categorie en beoordeling, en elk heeft zijn menu. De winkelwagen leeft in Redux Toolkit, en de teller staat bovenaan.",
        "Afrekenen loopt via controle van de artikelen, bezorgadres, gesimuleerde kaartgegevens en orderbevestiging. De data komt uit een API die met Axios wordt aangesproken, en de routing gebruikt React Router.",
      ],
    },
    matemagika: {
      summary: "Educatieve wiskunde-app gemaakt als groepsopdracht op school: hij lost eerste- en tweedegraadsvergelijkingen stap voor stap op en doet lineaire interpolatie met een grafiek.",
      points: [
        "De opdracht vroeg om een hulpmiddel bij het leren van computationele wiskunde.",
        "De berekening toont de wortels en de tussenstappen. Bij een eerstegraadsvergelijking blijft coëfficiënt a leeg of nul.",
        "De interpolatie neemt puntenparen en tekent de lijn in Chart.js. De pagina maakt duidelijk dat het werk van een groep is.",
      ],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro, bedrijfswebsite",
      summary: "Landingspagina van adviesbureau Cresce+ Futuro, geleid door Marina Kamiya, over vrouwelijk ondernemerschap, technologie en AI in het bedrijfsleven.",
      points: [
        "Het adviesbureau had een eigen site nodig, los van de SaaS, om zijn werk en programma's te presenteren.",
        "Ik bouwde hem in HTML, CSS en JavaScript, met scrollanimaties in GSAP en ScrollTrigger en iconen van Font Awesome.",
        "SeeB zit erin, zoals in al mijn recente projecten.",
      ],
    },
    portfolio: {
      title: "Portfolio",
      summary: "Deze site: projecten met filters en een dialoog met galerij, donkere modus, PWA, complete SEO en aandacht voor toegankelijkheid en performance.",
      points: [
        "Ik wilde een portfolio dat mijn werk laat zien zoals ik producten bouw: snel, toegankelijk en tot in detail verzorgd.",
        "Het raster ordent het werk per type, met grote kaarten in zigzag, en elk project opent een dialoog met galerij, stack en links. Afbeeldingen laden pas als ze in beeld komen.",
        "Het lichte of donkere thema gebruikt next-themes. Metadata, Open Graph, sitemap, robots en gestructureerde data dekken de SEO, en de site is een PWA met manifest, iconen en een service worker met offlinepagina.",
        "Het contactformulier verstuurt de e-mail direct, de animaties gebruiken Motion en SeeB zit erin.",
      ],
    },
  },
  experiences: [
    {
      role: "Medeoprichter & CTO",
      period: "okt. 2026 tot nu",
      mode: "Op afstand",
      summary:
        "Medeoprichter en verantwoordelijk voor de technologische koers van Coach Up, een white label SaaS-platform voor het beheer van sportscholen en personal trainers, gericht op het digitaliseren en vereenvoudigen van processen. Elke sportschool of trainer biedt leden een app met het eigen merk, direct installeerbaar vanuit de browser (PWA).",
      more: ["Ik werk aan de systeemarchitectuur, de keuze van technologieën, de planning van functies en de ontwikkeling van het product, van prototype tot productie."],
      didLabel: "Belangrijkste verantwoordelijkheden:",
      did: [
        "Ontwerp en ontwikkeling van de full stack architectuur van het platform, met Next.js, Node.js en TypeScript.",
        "Datamodellering, authenticatie en opslag met Supabase.",
        "Ontwikkeling van ledenbeheer, het opstellen en voorschrijven van trainingen, het vastleggen van sets en gewichten en prestatie-indicatoren.",
        "White label structuur, zodat elke sportschool of trainer het platform met de eigen huisstijl gebruikt.",
        "Planning van infrastructuur, cloudopslag en applicatiebeveiliging, met Cloudflare.",
        "Bepalen van de technologische roadmap en de doorontwikkeling van het product.",
        "Onderzoek naar nieuwe technologieën en innovatiekansen.",
      ],
      closing: "Het project wil het beheer van sportscholen en personal trainers efficiënter, toegankelijker en centraler maken, en leden begeleiding geven die buiten de sportschool doorgaat.",
    },
    {
      role: "Full stack developer",
      period: "mei 2026 tot nu",
      mode: "Op afstand",
      summary:
        "Ik ben de developer die verantwoordelijk is voor de technologie bij T2 Educação: de interne beheer-Hub, de integraties tussen platforms, de automatiseringen, de database, de infrastructuur en de hele digitale aanwezigheid. Ik begon in mei 2026 als front-end developer en werd een maand later gepromoveerd tot full stack, met de volledige technische operatie in mijn takenpakket.",
      did: [
        "Ik maakte van een systeem dat vastzat aan meerdere dure integraties een platform dat elke dag zelfstandiger wordt, door in huis te halen wat eerder van tools van derden afhing.",
        "Ik bouw en ontwikkel de T2 Hub, het interne systeem in Next.js, React en TypeScript met modules voor taken, klantenservice, financiën met reconciliatie, marketing, een contactcentrum, affiliates en vertegenwoordigers, een lessenbibliotheek en B2B-verkoopbeheer.",
        "Ik koppelde de Hub aan meer dan tien platforms: Crisp en Crisp AI voor support, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas voor facturen, Instagram Graph API, YouTube Analytics, WhatsApp-automatiseringen, Google Reviews, GitHub, Cloudflare Turnstile bij het inloggen en GA4 voor conversietracking.",
        "Ik modelleer en onderhoud de PostgreSQL-database op Supabase, met schema's per domein, en zorg voor onze eigen API, de tientallen crons op Vercel, het genereren van PDF's, spreadsheets en presentaties en de health checks die de endpoints bewaken.",
        "Ik maakte een MCP-server zodat AI-agents de Hub veilig kunnen raadplegen en bedienen.",
        "Ik bouwde de website, de blog, het portaal met gratis studiemateriaal en de landingspagina's opnieuw in Next.js 16, met Core Web Vitals, technische SEO, toegankelijkheid en tracking. Ook zorg ik voor Cloudflare (DNS, SSL, cache, regels en beveiliging), domeinen, test- en productieomgevingen en CI/CD-pipelines.",
      ],
      resultValue: "1 maand",
      resultLabel: "van front-end tot promotie naar full stack",
    },
    {
      role: "Full stack software engineer, AI-First",
      period: "mrt. 2026 tot aug. 2026",
      mode: "Op afstand",
      summary:
        "Ik bouwde SaaS, websystemen en mobiele apps voor startups en deed de hele cyclus: requirements, architectuur, database, integraties, infrastructuur, deploy en publicatie in de stores. Hier ontwikkelde ik Mirante ERP, het grootste project dat ik heb gedaan.",
      did: [
        "Ik ontwikkelde Mirante ERP, met kassa, orders en offertes, voorraad, inkoop met goedkeuring en XML-import, NF-e-uitgifte gekoppeld aan SEFAZ, financiën met bankreconciliatie, meerdere bedrijven met vestigingen, rechten, een auditlog en dashboards met verkoopprognose.",
        "Ik implementeerde K8 Pay, de gateway van K8 Fintech, voor Pix en boleto in de ERP, plus andere integraties met betaalgateways, authenticatie en externe API's in de producten uit die periode.",
        "Ik leverde MVP's, marktplaatsen en apps in React Native en Expo, en verzorgde de publicatie in de App Store en Google Play. Tegenwoordig maak ik een app in een paar uur klaar voor indiening bij de stores.",
        "Ik zette applicaties op een VPS met Docker en Coolify en hield ze draaiende, met CI/CD-pipelines, en werkte met Supabase, PostgreSQL, Prisma en Drizzle ORM aan de databasekant.",
        "Ik werkte in het AI-First-model, met agents, MCP's en AI-tools elke dag, in wekelijkse sprints en overleggen met stakeholders. In het interne programma Bystartup Labs maakte ik bystartup-web-qa, een skill waarmee AI-agents E2E-tests met Playwright schrijven en repareren.",
      ],
    },
    {
      role: "Full stack developer",
      period: "jan. 2026 tot mrt. 2026",
      mode: "Op afstand",
      summary:
        "Ik herstructureerde de SaaS van Cresce+ Futuro, die voorraad, verkoop, taken en team van micro- en kleine bedrijven ordent, en verhuisde de infrastructuur van drie aanbieders naar één basis, goedkoper en makkelijker te onderhouden.",
      did: [
        "Ik herschreef de applicatie in full stack Next.js 16 met App Router en Tailwind CSS, met authenticatie en betalingen via Mercado Pago.",
        "Ik migreerde de stack, die verspreid was over Azure, Railway en Hostinger, naar Neon PostgreSQL en Vercel, centraliseerde het domein en maakte het product klaar om te schalen.",
        "Ik maakte ook de bedrijfswebsite van het adviesbureau, met SeeB, de toegankelijkheidswidget die ik maakte, ingebouwd.",
      ],
    },
  ],
  studies: [
    {
      title: "Software Engineering",
      place: "Gran Faculdade",
      period: "jun. 2026 tot jun. 2030",
      text: "Bacheloropleiding in uitvoering, met 3.200 uur verdeeld over 8 semesters. Het curriculum beslaat de hele softwarecyclus: algoritmen en datastructuren, relationele en NoSQL-databases, front-end, back-end en mobiel, architectuur en microservices, cloud, containers en DevOps, kwaliteit en testen, informatiebeveiliging, agile management en kunstmatige intelligentie. Ik koos de opleiding omdat die dezelfde taal spreekt als mijn werk: producten bouwen en echte problemen oplossen.",
    },
    {
      title: "Kunstmatige Intelligentie en Digitale Automatisering",
      place: "UniFECAF met de Faculdade de Tecnologia Rocketseat",
      period: "okt. 2026 tot mrt. 2028",
      text: "Technologische opleiding in uitvoering, 18 maanden met praktijk vanaf het eerste semester. Het programma behandelt generatieve AI, prompt engineering, API-integratie, proces- en workflowautomatisering, low-code, UX/UI en agile methoden, en gaat door naar RAG, embeddings, fine-tuning en autonome agents. Het is de theorie achter wat ik al gebruik in mijn werk met agents, MCP en automatisering.",
    },
    {
      title: "Softwarearchitectuur met AI",
      place: "Aanvullende opleiding",
      period: "Anhanguera, bezig, 360 u",
      text: "Aanvullende opleiding in uitvoering bij Anhanguera, met Full Stack Club, van 360 uur. De focus ligt op softwarearchitectuur met kunstmatige intelligentie, in praktijkprojecten over schaalbaarheid, performance, testen, microservices, CI/CD en cloud.",
    },
    {
      title: "Informatica voor Internet (webontwikkeling)",
      place: "ETEC Parque Belém",
      period: "2023 tot 2025",
      text: "Technische middelbare opleiding, afgerond. Ik begon zonder echt met een computer te kunnen werken en eindigde programmerend: ik leerde logica, HTML, CSS, JavaScript, PHP, SQL, WordPress, MIT App Inventor, Figma, UX/UI, toegankelijkheid, HTTP-protocollen, basis van de shell en virtualisatie met VirtualBox. Mijn afstudeerproject was SeeB, een Chromium-extensie en toegankelijkheidswidget waarvan het technische deel bij mij lag. Het werd op school gepresenteerd en is nu open source en te vinden in de Chrome Web Store.",
    },
    {
      title: "Persoonlijke ontwikkeling en inzetbaarheid",
      place: "UniFECAF",
      period: "nov. 2026",
      text: "Aanvullende cursus van UniFECAF over persoonlijke ontwikkeling en voorbereiding op de arbeidsmarkt. De modules gaan over studiegewoonten en organisatie, inclusief hoe je je tijd beheert.",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "mrt. 2026",
      text: "Programma van Instituto PROA voor de arbeidsmarkt, gericht op communicatie en analytisch denken. Het behandelt doelen, zakelijk schrijven en communiceren in een team.",
    },
    {
      title: "Agile methoden",
      place: "Rocketseat",
      period: "okt. 2025",
      text: "De basis van Scrum en Kanban om het werk van een team in korte cycli te organiseren en bij te houden hoe de taken vorderen.",
    },
    {
      title: "Introductie tot Go",
      place: "Rocketseat",
      period: "okt. 2025",
      text: "Eerste stappen in Go, met syntaxis, types en de manier waarop de taal met fouten omgaat. Geoefend met terminalprogramma's, zoals een raadspel en een valutaomrekenaar.",
    },
    {
      title: "Basis van projectmanagement",
      place: "Rocketseat met UniFECAF",
      period: "",
      text: "Een cursus over het plannen, organiseren en volgen van een project, gevolgd naast de opleiding. Het doel is een scope, een deadline en een duidelijke manier om te zien hoe het werk vordert.",
    },
    {
      title: "Git en GitHub: de definitieve gids in het AI-tijdperk",
      place: "Rocketseat",
      period: "",
      text: "Een cursus versiebeheer met Git en GitHub, gebouwd voor de workflow van iemand die met AI-tools ontwikkelt. Hij behandelt de dagelijkse cyclus van branch, commit en pull request.",
    },
    {
      title: "AI-agents met n8n",
      place: "Rocketseat",
      period: "",
      text: "Een cursus over automatiseringen en AI-agents gebouwd in n8n, waarbij diensten worden gekoppeld zodat een flow op een verzoek kan reageren.",
    },
    {
      title: "SEO voor developers",
      place: "Rocketseat",
      period: "",
      text: "Een cursus over hoe je een site beter laat verschijnen in zoekresultaten, vanuit het perspectief van een developer. Hij behandelt paginastructuur, inhoud en de technische details die een zoekmachine echt ziet.",
    },
    {
      title: "Assertieve communicatie",
      place: "Rocketseat",
      period: "",
      text: "Een communicatiecursus voor teamwerk, gericht op helder en zelfverzekerd spreken.",
    },
    {
      title: "Internationale carrière",
      place: "Rocketseat",
      period: "",
      text: "Een cursus over hoe je je voorbereidt op techkansen buiten Brazilië, van hoe je jezelf presenteert tot communiceren met teams in een ander land.",
    },
    {
      title: "AI-basis met focus op generatieve AI",
      place: "Rocketseat",
      period: "",
      text: "Een basis in kunstmatige intelligentie met nadruk op generatieve AI, en op wat deze modellen veranderen in het dagelijkse werk van een developer.",
    },
    {
      title: "Opleiding Front-end Engineer",
      place: "EBAC",
      period: "",
      text: "Een front-endopleiding met Git, CSS, JavaScript, Bootstrap, SASS, LESS, Gulp, Grunt, ES6, objectoriëntatie, TypeScript, React met Redux, testen met Jest en Cypress, en Node. De oefeningen en projecten, zoals Velory en Games Shop, staan op GitHub.",
    },
    {
      title: "Full stack traject",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Een praktisch full stack traject waarvan het project een app is geïnspireerd op Spotify, met front-end, back-end en deploy.",
    },
    {
      title: "Complete webontwikkeling",
      place: "Udemy",
      period: "",
      text: "Een brede cursus webontwikkeling, met praktische front-endprojecten om te oefenen hoe je een pagina vanaf nul bouwt.",
    },
    {
      title: "Python voor beginners en gevorderden",
      place: "Alura",
      period: "",
      text: "Pythoncursussen van de basis tot een gevorderd niveau, geoefend door games te bouwen.",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "Een uitdaging om 50 miniprojecten in HTML, CSS en JavaScript te bouwen, één per dag, voor echte praktijk met het web.",
    },
    {
      title: "JavaScript-intensive",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Een praktische onderdompeling in JavaScript en React, met projecten vanaf nul, zoals een audiospeler in puur JavaScript.",
    },
    {
      title: "Ri Happy Bootcamp: Front-end vanaf nul",
      place: "DIO",
      period: "",
      text: "Een front-endbootcamp in HTML, CSS en JavaScript, gericht op het bouwen van echte interfaces van begin tot eind.",
    },
    {
      title: "Projectuitdagingen in HTML, CSS en JavaScript",
      place: "DIO",
      period: "",
      text: "Een reeks praktische uitdagingen van DIO die pagina's en games namaken, zoals Stranger Things, Discord, YouTube en Detona Ralph.",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "Een praktisch evenement van Rocketseat over AI-agents, met een project dat in een week gebouwd en gepubliceerd werd.",
    },
    {
      title: "NLW Connect",
      place: "Rocketseat",
      period: "",
      text: "Een praktisch evenement van Rocketseat waarin je in een paar dagen een API vanaf nul bouwt.",
    },
    {
      title: "Een CLI bouwen in Go",
      place: "Rocketseat",
      period: "",
      text: "Een praktische les over het bouwen van een commandlinetool in Go.",
    },
    {
      title: "SQL en databases",
      place: "",
      period: "",
      text: "Een studie van SQL met een bibliotheekdatabase en een database van een streamingdienst, inclusief tabellen en relaties.",
    },
    {
      title: "Introductie tot programmeren",
      place: "EBAC",
      period: "",
      text: "Een eerste kennismaking met programmeerlogica en de basisideeën die je nodig hebt om code te gaan schrijven.",
    },
    {
      title: "Programmeerlogica in JavaScript",
      place: "DIO",
      period: "",
      text: "Een logica-uitdaging met beslisstructuren in JavaScript, gebruikt om het niveau van een held te bepalen.",
    },
    {
      title: "Bijdragen aan een open source project op GitHub",
      place: "DIO",
      period: "",
      text: "Een praktisch lab over hoe je bijdraagt aan een open source project: fork, branch en pull request.",
    },
    {
      title: "Tech Career Week",
      place: "Alura",
      period: "",
      text: "Een week met inhoud over carrières in technologie en kunstmatige intelligentie, met een beeld van de markt en van de paden die je kunt kiezen.",
    },
    {
      title: "Universo Photoshop",
      place: "brainstorm.academy",
      period: "",
      text: "Een cursus Adobe Photoshop en grafisch ontwerp voor het maken en bewerken van afbeeldingen voor interfaces en content.",
    },
  ],
  recommendations: [
    {
      role: "Full stack developer, hetzelfde team bij ByStartup",
      date: "3 augustus 2026",
      paragraphs: [
        "Ik had de kans om met Rafael Henrique Blanco te werken bij ByStartup, en ik kan zeggen dat hij een van de meest solide en betrouwbare professionals is met wie ik ooit heb gewerkt.",
        "Een van zijn grootste sterktes is zijn vermogen om zeer complexe projecten snel en met kwaliteit te leiden, zonder de controle of zijn rust te verliezen. Hij levert consequent, organiseert zijn werk goed en zet lastige technische uitdagingen om in heldere, goed uitgevoerde oplossingen.",
        "Naast uitstekende technische kennis en ervaring in softwareontwikkeling is Rafael uiterst professioneel, verantwoordelijk en georganiseerd. Hij blijft volwassen onder druk, communiceert to the point en tilt het niveau van het team om hem heen omhoog.",
        "Ik raad Rafael zonder twijfel aan. Ik weet zeker dat hij een grote aanwinst is voor elk team dat iemand zoekt die ervaren en betrouwbaar is en complexe projecten uitstekend kan opleveren.",
      ],
    },
    {
      role: "COO Technologie, begeleidde Rafael direct bij ByStartup",
      date: "2 augustus 2026",
      paragraphs: [
        "Rafael is het soort developer dat rust brengt in het team. In onze samenwerking waren zijn sterke technische beheersing en zijn proactiviteit heel duidelijk.",
        "Hij wacht niet tot er problemen ontstaan; hij ziet ze al aankomen in planningsoverleggen, stelt goede werkwijzen voor en zorgt dat het eindproduct de best mogelijke kwaliteit heeft.",
        "Uitstekende professional!",
      ],
    },
  ],
};
