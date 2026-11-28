import type { ContentText } from "./types";

/**
 * Lange Inhalte auf Deutsch. Die Listen folgen der Reihenfolge der portugiesischen Dateien in data/.
 * Die Alternativtexte der Bilder werden hier nicht übersetzt: Sie kommen aus der englischen Version.
 */
export const de: ContentText = {
  projects: {
    t2: {
      summary:
        "Unternehmenswebsite von T2 Educação mit Vorbereitungskursen für Finanzzertifizierungen, einem Bereich für Unternehmen und Landingpages. Neu gebaut in Next.js 16 mit Fokus auf Performance, SEO und Conversion.",
      points: [
        "T2 bereitet Fachleute auf Zertifizierungen des Finanzmarkts wie CPA und C-Pro vor. Die Website musste schnell laden, gut bei Google ranken und Besucher bis zur Anmeldung führen; vorher hing sie von einem visuellen Website-Baukasten ab.",
        "Ich habe die Website in Next.js 16 mit App Router, React 19 und Tailwind CSS 4 neu gebaut, mit Kursseiten, Zertifizierungsseiten und dem Bereich für Unternehmen sowie den Landingpages der Kampagnen.",
        "Ich habe mich um Core Web Vitals, technisches SEO, Barrierefreiheit, Animationen mit GSAP und Three.js und das Conversion- und Checkout-Tracking in GA4 gekümmert. Die Website nutzt Supabase und Resend, und die Domain läuft über Cloudflare.",
        "Ich bin der Entwickler, der für die Technologie des Unternehmens verantwortlich ist. Die Screenshots zeigen nur öffentliche Seiten. Der interne Hub, die Integrationen und die Lernplattform erscheinen hier nicht.",
      ],
    },
    "t2-blog": {
      summary:
        "Öffentlicher Blog von T2 mit Artikeln und Leitfäden zu Finanzzertifizierungen, Karriere und Markt, gemacht, um auf dem Handy gelesen und bei Google gefunden zu werden.",
      points: [
        "Der Blog ist die wichtigste Quelle für organischen Traffic von T2. Er brauchte starkes technisches SEO, angenehmes Lesen auf dem Handy und einen einfachen Veröffentlichungsablauf für das Team.",
        "Ich habe das Frontend in Next.js mit Ghost als Headless-CMS gebaut. Die Startseite hebt Themen wie die C-Pro-R-Prüfung hervor, und jeder Artikel zeigt Autor und Datum.",
        "Technisches SEO und GA4 begleiten jeden Beitrag. Die Screenshots zeigen nur öffentliche redaktionelle Inhalte.",
      ],
    },
    "t2-docs": {
      title: "Kostenlose Lernmaterialien von T2",
      summary:
        "Portal mit kostenlosen Skripten, Probeprüfungen und Zusammenfassungen für Finanzzertifizierungen wie CPA, C-Pro, CFP und ANCORD, gebaut mit Next.js und Headless-Ghost.",
      points: [
        "T2 bietet kostenlose Lernmaterialien für alle, die sich auf eine Zertifizierung vorbereiten. Das Portal ordnet Skripte, Probeprüfungen und Zusammenfassungen nach Zertifizierung, leicht zu durchsuchen und bei Google zu finden.",
        "Ich habe das Portal in Next.js gebaut und die Inhalte im Headless-Modus aus Ghost geladen, damit das Team ohne Code veröffentlichen kann.",
        "Die veröffentlichten Materialien sind Lerninhalte. Auf dem Portal erscheinen keine Daten von Lernenden.",
      ],
    },
    mirante: {
      summary:
        "Mandantenfähiges ERP mit Kassensystem, NF-e (brasilianische elektronische Rechnung) mit SEFAZ-Anbindung, Finanzen mit Kontenabgleich, Lager, Einkauf und K8 Pay für Pix und Boleto. Das größte System, das ich je gebaut habe.",
      points: [
        "Kleine und mittlere Unternehmen verwalten Verkauf, Lager, Einkauf und Finanzen oft in getrennten Tools. Mirante bringt alles in ein System, mit mehreren Firmen und Filialen im selben Konto und einem Standortwechsler oben.",
        "Verkauf: ein Kassensystem mit Zahlung und Abschluss, Aufträge mit Verkäufern und Angebote. Lager mit einem Dashboard der Produkte unter Mindestbestand oder im Minus, Katalog, Preise, Kategorien und Dienstleistungen.",
        "Steuern und Einkauf: Ausstellung und Verwaltung von NF-e mit SEFAZ-Anbindung über ein A1-Zertifikat, ein Panel der eingegangenen Rechnungen mit Bestätigung, Bestellanforderungen mit Freigabe oder Ablehnung und Wareneingang per XML, per NF-e-Schlüssel oder manuell.",
        "Finanzen: Verbindlichkeiten und Forderungen, Öffnen und Schließen der Kasse, Bankkonten mit Kontoauszügen und Abgleich, Anzahlungen, Neuverhandlung von Raten, Kostenstellen und Kontenplan. Außerdem habe ich K8 Pay, das Gateway von K8 Fintech, ins ERP integriert, um per Pix und Boleto zu kassieren.",
        "Verwaltung: ein Dashboard mit KPIs, Umsatz im Jahresvergleich und Verkaufsprognose, ein einziges Register für Kunden, Lieferanten und Mitarbeitende, Benutzer und Berechtigungen, ein exportierbares Audit-Log, globale Suche und Schnellaktionen mit Strg+K sowie anpassbares Theme, Dichte und Animationen.",
        "Ich habe das System bei ByStartup in etwa drei Monaten gebaut. Die Produktidee kam vom Kunden. Prototyp, Produktdesign, Full-Stack-Entwicklung und Infrastruktur lagen bei mir, vom Frontend über die Datenbank und die Integrationen bis zum Deployment. Die Screenshots stammen aus einem Testkonto mit fiktiven Daten.",
      ],
    },
    carretel: {
      summary:
        "Mein eigenes SaaS für Nähwerkstätten: Es erfasst den Zuschnitt, belegt die Lieferung und kassiert per Pix vom Handy aus, auch bei schwachem Empfang. Zweisprachig, auf Portugiesisch und Spanisch.",
      points: [
        "Inhaber von Nähwerkstätten, viele aus der bolivianischen Gemeinschaft in São Paulo, verwalten Zuschnitte, Lieferungen und Zahlungen im Notizbuch und auf WhatsApp. Bei Streit über Menge oder Preis lässt sich nichts beweisen. Carretel löst das mit drei Verben: erfassen, belegen und kassieren.",
        "Erfassen: Ein eingehender Zuschnitt wird mit Foto, per Sprache diktierter Menge und Preis, Größenraster, Frist und Zubehör erfasst, und die Produktion wird nach Person, Arbeitsschritt und Maschine erfasst. Belegen: Ein öffentlicher Link zeigt Fotos, Raster, Betrag und einen Prüfcode, und der Kunde bestätigt per WhatsApp, ohne ein Konto anzulegen. Die Bestätigung speichert Uhrzeit, Browser und IP und bleibt unveränderlich in der Datenbank.",
        "Kassieren: Der Bildschirm zeigt, wer wie viele Tage schuldet, erstellt eine versandfertige WhatsApp-Nachricht mit Pix Copia e Cola und QR-Code (BR Code mit CRC16, im Projekt selbst geschrieben) und akzeptiert volle oder Teilzahlungen. Dazu gibt es eine wöchentliche Abrechnung mit zweisprachiger Quittung, einen Rechner für einen fairen Stückpreis, Datenexport gemäß LGPD und das Löschen des Kontos.",
        "Die App ist offline first: Aktionen landen in einer idempotenten Warteschlange in IndexedDB und werden synchronisiert, sobald das Signal zurück ist, mit Service Worker und Installation als PWA. Sie ist mandantenfähig, mit Isolation pro Werkstatt, getestet gegen ein echtes Postgres.",
        "Abonnements laufen über AbacatePay, mit einem per HMAC-SHA256 validierten Webhook. Die Oberfläche folgt WCAG 2.2 AA, mit großen Touch-Zielen und eingebautem SeeB, und das Projekt hat Tests mit Vitest, Property-Tests mit fast-check und Barrierefreiheitstests mit Playwright und axe.",
        "Es ist mein eigenes Produkt, von der Idee über die Spezifikation und das Design bis zum Code. Es ist im Pre-Launch.",
      ],
    },
    gatelite: {
      summary:
        "Die Erde von heute, von oben gesehen: Wähle einen Ort und sieh das Satellitenbild des Tages, welche Satelliten darüber geflogen sind, wie er sich seit 2000 verändert hat und was gerade in der Nähe passiert. Alles mit offenen NASA-Daten, ohne Login und ohne Datenbank.",
      points: [
        "Der Name verbindet gato (Katze) und satélite (Satellit). Die Satellitenbilder der NASA sind offen, aber auf technische Portale verstreut. Gatélite bündelt sie auf einer Website, gemacht für alle, die ihr Viertel, ihre Stadt oder den ganzen Planeten von oben sehen wollen.",
        "Erkunden: ein Globus mit dem täglichen Mosaik der NASA-Satelliten (VIIRS und MODIS), Landsat und Sentinel mit 30 m, Infrarot, Nachtlichter, Temperatur und Rauch. Wenn der Zoom über das hinausgeht, was das Tagesbild zeigen kann, wechselt die Karte von selbst zu einer hochauflösenden Ebene, auf der man Häuser, Blöcke und den Cristo Redentor sieht. Die ganze Ansicht steckt in der URL.",
        "Der Tab Wetter zeigt die letzten 14 Tage des Ortes nebeneinander und schätzt die Bewölkung jedes Tages anhand der Bildfarbe, mit Sonnenauf- und -untergang. Überflüge von 14 Satelliten in den letzten und nächsten 24 Stunden werden im Browser berechnet, mit SGP4 in einem Web Worker. Außerdem gibt es einen Zeitraffer desselben Tages im Jahr seit 2001 und ein Vorher-Nachher mit verschiebbarem Vorhang.",
        "Der Planet jetzt: eine Weltkarte mit Tag und Nacht in Echtzeit, Stadtlichtern, der Live-Satellitenflotte, aktiven Naturereignissen (Brände, Stürme, Vulkane und Eisberge) und Fotos der EPIC-Kamera, aufgenommen aus 1,5 Millionen km Entfernung.",
        "Kein Konto, keine Datenbank: Die URL speichert die Ansicht, das Gerät die gespeicherten Orte, und der Server cacht nur die externen APIs. Die Domäne (Umlaufbahnen, Wolken, Sonne und Ereignisse) besteht aus reinen Regeln, getestet mit Vitest. Es ist ein Open-Source-Privatprojekt unter MIT-Lizenz und ohne offizielle Verbindung zur NASA.",
      ],
    },
    cresce: {
      summary:
        "Verwaltungs-SaaS für Kleinst- und Kleinunternehmen. Ich habe das Produkt in Next.js 16 neu geschrieben und die Infrastruktur zu Neon und Vercel verlegt.",
      points: [
        "Das SaaS Cresce+ organisiert Lager, Verkauf, Aufgaben und Team von Kleinst- und Kleinunternehmen. Die vorherige Version war auf Azure, Railway und Hostinger verteilt, teuer im Betrieb und schwer weiterzuentwickeln.",
        "Ich habe die Anwendung als Full-Stack-Next.js-16-App mit App Router und Tailwind CSS neu geschrieben, mit Authentifizierung und Zahlungen über Mercado Pago.",
        "Ich habe die Datenbank zu Neon PostgreSQL und die Anwendung zu Vercel migriert und die Domain zentralisiert.",
        "Außerdem habe ich die Unternehmenswebsite der Beratung gebaut, die eine eigene Karte hat.",
      ],
    },
    xerox: {
      summary:
        "Produktionssystem für Copyshops, das Papierkassenzettel und Tabellen durch digitale Erfassung, automatisches Lager und Berichte in Excel und PDF ersetzt hat.",
      points: [
        "In vielen Copyshops wird jeder Auftrag auf einem Papierzettel notiert und am Ende des Tages in einer Tabelle addiert. Das führt zu Fehlern, verlorener Historie und keiner Lagerkontrolle. Xerox Manager ersetzt diesen Ablauf durch ein einfaches, nachvollziehbares Echtzeitsystem.",
        "Der Mitarbeiter gibt den Produktcode ein, Name und Preis füllen sich von selbst. Er passt Menge und Preis an, bestätigt, und der Bestand sinkt automatisch. Änderungen und Löschungen sind nur am selben Tag erlaubt.",
        "Der Admin verwaltet Mitarbeitende, Produkte und Lager, mit Warnung bei niedrigem Bestand und manueller Korrektur, und erstellt Berichte nach Zeitraum mit Produktion pro Mitarbeiter und Lagerverbrauch, exportiert nach Excel mit drei Tabs und als PDF.",
        "Sicherheit wurde sorgfältig behandelt: Passwörter mit bcrypt, JWT-Sessions in einem httpOnly-Cookie mit einer widerrufbaren Session-Tabelle, Berechtigungsprüfung in jeder Server Action und mit Zod validierte Filter.",
        "Es ist eine Demoversion, die derselben Logik folgt wie das System in Produktion. Ich habe alles gebaut, von der Datenbank bis zur Oberfläche, mit integriertem SeeB.",
      ],
    },
    somnus: {
      summary:
        "App zum Erfassen der Schlafstunden und Erkennen von Mustern: Durchschnitt, beste und schlechteste Nacht und Verlaufsdiagramme, mit Konto pro Person und eingebauter Barrierefreiheit.",
      points: [
        "Wer besser schlafen will, braucht einfache, regelmäßige Daten, keine Apps voller ungenutzter Funktionen. Somnus macht eine Sache gut: geschlafene Stunden erfassen und auswerten.",
        "Der Ablauf ist direkt: anmelden, die Nacht erfassen und die Auswertung sehen. Das Dashboard zeigt Schlafdurchschnitt, beste und schlechteste Nacht, die komplette Historie und Verlaufsdiagramme.",
        "Die Authentifizierung nutzt Clerk, und jede Person sieht nur ihre eigenen Daten. Das Backend läuft auf Next.js Server Actions, durchgehend typisiert mit Prisma und PostgreSQL auf Neon.",
        "Barrierefreiheit war von Anfang an Pflicht, mit integriertem SeeB. Ich habe das Projekt allein umgesetzt, von der Datenbank bis zum Deployment auf Vercel.",
      ],
    },
    bicus: {
      summary:
        "App für lokale Dienstleistungen, Produkte, Vermietungen und Geschäfte, mit Karte, Chat und hervorgehobenen Anzeigen, bezahlt per Pix, Karte oder Boleto. Im App Store, bei Google Play und im Web.",
      points: [
        "Bicus bringt Dienstleistungen, Produkte, Vermietungen und Geschäfte der Stadt in eine App, mit Suche nach Entfernung und verifizierten Anbietern.",
        "Die App zeigt Anzeigen auf einer Karte, mit Standortwahl und Adresssuche, und hat einen integrierten Chat, um direkt mit dem Anbieter zu klären.",
        "Anbieter können eine Anzeige hervorheben. Die Zahlung läuft über Mercado Pago, per Pix, Karte oder Boleto, und die Hervorhebung aktiviert sich nach der Bestätigung von selbst. Die App empfängt oder speichert keine Kartendaten.",
        "Eine einzige Expo- und React-Native-Codebasis erzeugt die iOS- und Android-Apps und die Webversion. Die Produktidee kam vom Kunden. Prototyp, Produkt, Full-Stack-Entwicklung und Infrastruktur lagen bei mir.",
      ],
    },
    apertou: {
      summary:
        "Marktplatz, über den stationäre Geschäfte per Handy verkaufen, mit App, Händlerpanel und Admin-Panel. Pix oder Karte, automatische Aufteilung pro Geschäft und Bestellungen zum Anprobieren vor dem Kauf.",
      points: [
        "Geschäfte im Viertel verlieren Umsatz, weil sie nicht auf dem Handy der Kunden sind, und ein eigener Onlineshop ist teuer. Apertou Comprou bringt diese Geschäfte in einen lokalen Marktplatz, mit Lieferung nach Hause oder Abholung im Laden.",
        "Kunden kaufen über App oder Website, sprechen im Chat mit dem Geschäft und können Artikel zum Anprobieren anfordern, bevor sie bezahlen, mit einer Probe-Bestellung. Bezahlt wird per Pix oder Karte.",
        "Jedes Geschäft hat ein Empfängerkonto bei Pagar.me, und der Betrag jedes Verkaufs wird automatisch aufgeteilt und auf das Bankkonto des Händlers überwiesen. Das Panel führt durch die Bankdaten und verhindert, dass das Geschäft live geht, bevor alles vollständig ist.",
        "Das Produkt hat drei Teile: die Kunden-App, das Händlerpanel und den Marktplatz-Admin mit Auswertungsdiagrammen. Die Idee kam vom Kunden. Ich habe Prototyp, Produkt, Full-Stack-Entwicklung und Infrastruktur gemacht.",
      ],
    },
    junto: {
      summary:
        "App und Website, um offene Lauftreffs in deiner Nähe zu finden, erstellt von echten Menschen. Man sieht, wer kommt, sagt zu und erstellt eigene Läufe. Im Web, bei Google Play und im App Store.",
      points: [
        "Allein laufen demotiviert, und Verabredungen im Gruppenchat klappen nicht immer. Junto zeigt offene Läufe in deiner Nähe, erstellt von echten Menschen. Das Versprechen des Produkts: Finde jemanden, lauft zusammen.",
        "Man sieht, wer kommt, sagt zu, tritt dem Chat des Laufs bei, checkt am Treffpunkt ein und erstellt eigene Läufe mit Ort, Tag und Tempo. Läufe erscheinen nach Viertel und Uhrzeit, mit einem Filter für Läufe nur für Frauen. Die App ist kostenlos, ohne Karte.",
        "Die Seite behandelt die Sicherheit beim Treffen: verifizierte Identität, offene Liste der Zusagen, Live-Tracking mit einer Vertrauensperson, automatischer Check-out und Notfallknopf. Laufgruppen und Trainingsteams haben eine Seite, einen Kalender und offene Läufe. Die Beta ist in Rio de Janeiro geöffnet.",
        "Im App Store und bei Google Play heißt die App „junto: companhia para correr“. Die Produktidee kam vom Kunden. Prototyp, Produkt, Full-Stack-Entwicklung und Infrastruktur waren meine Arbeit.",
      ],
    },
    voxx: {
      summary:
        "Website der Agência Voxx, einer Digitalmarketing-Agentur in Itapetininga, mit Animationen in Framer Motion und einem Kontaktformular, das E-Mails versendet.",
      points: [
        "Die Agentur brauchte eine Website, die ihre Arbeit mit derselben visuellen Qualität zeigt, die sie ihren Kunden liefert, ohne auf dem Handy schwer zu sein.",
        "Die Seite stellt Planung, Social Media, visuelle Identität und bezahlten Traffic vor, mit Einstiegs- und Scroll-Animationen in Framer Motion.",
        "Ich habe sie in Next.js 16 mit App Router, Tailwind CSS und Google-Schriften (Besley und DM Sans) gebaut. Das Formular versendet E-Mails über Resend mit Nodemailer, und Google Analytics kommt über @next/third-parties.",
      ],
    },
    jotape: {
      summary:
        "Onlineshop für Original-Uhren, als Freelance-Auftrag umgesetzt: Katalog nach Marke, Suche, Bezahlung per Pix oder Karte über Mercado Pago, Bestellverfolgung und WhatsApp.",
      points: [
        "Ein Geschäft für Original-Uhren, das einen eigenen Onlineshop brauchte, in dem Kunden selbstständig und jederzeit kaufen.",
        "Der Katalog ist nach Marken geordnet, mit Suche, Produktseiten und Warenkorb. Bezahlt wird direkt auf der Website, per Pix oder Kreditkarte, abgewickelt über Mercado Pago.",
        "Kunden verfolgen ihre Bestellung auf der Website und sprechen per WhatsApp mit dem Geschäft. Der Shop lässt sich auch als App aufs Handy installieren. Die Idee zum Shop kam von mir, und ich habe den Rest übernommen: Prototyp, Produkt, Full-Stack-Entwicklung und Infrastruktur.",
      ],
    },
    seeb: {
      summary:
        "Open-Source-Widget und -Erweiterung für Barrierefreiheit, entstanden in meinem Abschlussprojekt. Mit einer Zeile Script bekommt jede Website Kontrast, Farbenblindheitsfilter, Vorlesefunktion und mehr, ohne Daten zu sammeln.",
      points: [
        "Viele Menschen mit Sehschwäche, Farbenblindheit oder ADHS stoßen beim Lesen im Web auf Hürden, und die meisten Websites bieten keinerlei Anpassung. SeeB begann als kostenlose Chromium-Erweiterung und wurde auch zu einem Widget, das jede Website mit einer Zeile einbinden kann.",
        "Das Panel vereint Filter für Protanopie, Deuteranopie, Tritanopie und Monochrom, hohen Kontrast, Farbumkehr und Dunkelmodus, größere Schrift, Abstände, fette Schrift, unterstrichene und hervorgehobene Links, Leselineal und Lesefokuslinie, Helligkeit und Sättigung, Ausblenden von Bildern, Stoppen von Animationen, Hervorhebung des Tastaturfokus, einen großen Cursor und eine Vorlesefunktion mit Wahl von Stimme und Tempo.",
        "Das Widget wird per CDN über Cloudflare Pages ausgeliefert, sodass jede Verbesserung bestehende Nutzer sofort erreicht. Die öffentliche Dokumentation zeigt die Einbindung in reinem HTML, Vite, Vue, Angular und Next.js mit App Router, inklusive der SSR- und Hydration-Details, die ich selbst beim Einbinden in Next.js-Projekte gelöst habe.",
        "Die Erweiterung nutzt Manifest V3, fragt nur die Berechtigungen storage und activeTab an und ist im Chrome Web Store. Es wird nichts gesammelt: Die Einstellungen bleiben im Browser.",
        "Heute ist SeeB in meine Projekte eingebaut, etwa Carretel, Xerox Manager, Somnus, Giz, Velory, das Excel-Dashboard, Agência Voxx und die Unternehmenswebsite von Cresce+ Futuro. Ich habe den technischen Teil des Abschlussprojekts an der ETEC Parque Belém umgesetzt und pflege es weiter als offenes Projekt auf GitHub.",
      ],
    },
    giz: {
      title: "GIZ, KI-Assistent",
      summary:
        "KI-Agent, der ein kurzes Briefing erhält und die Texte für WhatsApp, Instagram und E-Mail schreibt. Er schützt personenbezogene Daten, bevor er das Modell aufruft, und veröffentlicht nur mit menschlicher Freigabe.",
      points: [
        "Projekt für die Challenge „Seu Primeiro Agente de IA“ (Dein erster KI-Agent). Giz ist eine fiktive Fitnessstudio-Kette, deren Team viel Zeit mit Ankündigungen und Kampagnen für jeden Kanal verliert.",
        "Der Agent arbeitet in vier Schritten. Zuerst maskiert der Server CPF (brasilianische Steuernummer), Telefon, E-Mail und Kartennummern, bevor irgendetwas an das Modell geht. Dann versteht er die Anfrage, schreibt und überprüft. Am Ende liest, bearbeitet und genehmigt ein Mensch. Nichts wird von selbst veröffentlicht.",
        "Die Modellschritte nutzen Persona, Meta-Prompting, Few-Shot und Verifizierung durch Fragen, mit JSON-Ausgabe, um einen Schritt an den nächsten zu ketten, und einer anderen Temperatur je Aufgabe (0,2 für Triage und Review, 0,8 fürs Schreiben).",
        "Der Text des Mitarbeiters kommt abgegrenzt an und wird als Daten behandelt, um Prompt Injection zu verhindern. Der Markenleitfaden verbietet, körperliche Ergebnisse zu versprechen, Gesundheitsratschläge zu geben und Informationen zu erfinden.",
        "Das Backend besteht aus Node.js-Serverless-Funktionen auf Vercel mit NDJSON-Streaming-Antworten. Das Frontend ist HTML, CSS und JavaScript-Module, ohne Framework. Das Modell ist Gemini 3.5 Flash-Lite, mit gemini-flash-lite-latest als Fallback.",
      ],
    },
    "steal-a-boo": {
      summary:
        "Sozialer Simulator für Roblox auf einem nächtlichen Jahrmarkt, für bis zu 8 Spieler: Fang Boos, bau deine Basis aus, erzeuge Cash, bestiehl deine Freunde und verteidige, was dir gehört. Mit KI gemacht, zum Spaß.",
      points: [
        "Ein persönliches Experiment, um Roblox-Spieleentwicklung mit einem professionellen Workflow zu lernen, mit KI als Unterstützung.",
        "Man fängt Boos in 7 Seltenheitsstufen und stellt sie in die Basis, um Cash pro Sekunde zu erzeugen. Man trainiert Tempo und Wurfkraft und baut bis zu 6 Etagen.",
        "Man kann Basen mit offenem Tor bestehlen und sich mit komischen Schreckmomenten verteidigen. Es gibt Rebirth, eine tägliche Truhe und eine Rangliste. Die Schreckmomente sind harmlos, für alle Altersgruppen.",
        "Der Code lebt außerhalb von Studio, in Luau, versioniert in Git, synchronisiert mit Rojo, Pakete über Wally und Spielerdaten gespeichert mit ProfileStore.",
      ],
    },
    "67-noites": {
      summary:
        "Koop-Survival für 1 bis 5 Spieler in einem Terreiro (Kultstätte der Umbanda) tief im Wald: Halte den Kessel am Brennen und überlebe 67 Nächte bis zum Showdown mit Zé Pilintra. Mit KI gemacht, zum Spaß.",
      notice:
        "Dieses Spiel ist ein fiktionales Werk, gemacht mit vollem Respekt vor der Umbanda und der afrobrasilianischen Kultur, ohne Absicht zu beleidigen. Die Entitäten erscheinen als Wächter, die den Spieler prüfen, und das Spiel gibt keine echten Rituale, Gesänge oder Gebete wieder. Der Humor liegt in den Situationen des Spiels, nie in der Religion.",
      points: [
        "Ein persönliches Koop-Survival-Experiment auf Roblox, gemacht mit Hilfe von KI und mit vollem Respekt vor der Umbanda und der afrobrasilianischen Kultur.",
        "Jede Nacht verteidigt die Gruppe den Kessel gegen Angriffe und trifft auf vier Entitäten, die als Wächter erscheinen und den Spieler prüfen. Der Kampf ist einfach, mit Combos, Ausweichen und Parieren.",
        "Die Karte hat Biome wie den Terreiro, den Steinbruch und die Hütte im Wald.",
        "Der Code ist Luau, versioniert mit Rojo und Wally, Daten gespeichert mit ProfileStore, Linting mit Selene, Formatierung mit StyLua und Skripte mit Lune. Das README verzeichnet 646 Balance-Tests.",
      ],
    },
    offscope: {
      summary:
        "Online-Ego-Shooter für Roblox mit Fokus auf No-Scopes: ein Sniper, ein Messer, drei Karten, Ranked mit ELO und ein Server, der jeden Schuss validiert. Mit KI gemacht, zum Spaß.",
      notice: "Mild, 16+, leichte Gewalt, kein Blut",
      points: [
        "Ein persönliches Projekt, um Netcode und kompetitive Spiele zu lernen, gemacht mit Hilfe von KI (Claude Code).",
        "Modi Duell 1v1 und Duos 2v2, casual und ranked mit ELO, dazu Teams 4v4 und Jeder gegen jeden für 8 Spieler. Am Ende einer Runde wählt eine 20-Sekunden-Abstimmung die nächste Karte.",
        "Der Server entscheidet jeden Schuss. Der Client sendet die Absicht mit einem deterministischen Seed, und der Server rekonstruiert die Richtung, spult die Hitboxen zurück (Lag Compensation mit 30 Hz, bis zu 0,45 s) und bestätigt den Treffer. Das Messer tötet mit einem Treffer von hinten.",
        "Drei Karten komplett in Code gebaut, mit echtem Terrain über WriteVoxels: Cais 09, ein Hafen im Morgengrauen, Avenida 11, die Innenstadt bei Nacht, und Posto 47, in den Bergen. Waffe, Arme und Messer sind aus Parts zusammengesetzt und in Code animiert, und die 22 Sounds und die Texturen werden ebenfalls im Repository erzeugt.",
        "Kosmetik ist rein visuell, ohne Lootboxen und ohne Pay-to-win, mit einem täglichen Shop, der auf allen Servern gleich ist, und Käufen, die erst nach dem Speichern in ProfileStore bestätigt werden. Das README zählt 13,5k Zeilen Luau, und die CI führt bei jedem Push rojo build, Typprüfung mit luau-lsp und Selene aus.",
      ],
    },
    mapinion: {
      summary:
        "Mobile App zum Entdecken und Empfehlen von Orten, mit Foto, Bewertung von 1 bis 5 und Kommentar, und einem Feed mit den Empfehlungen anderer. Ich habe App und API gebaut.",
      points: [
        "Ortsempfehlungen gehen oft in Gruppenchats verloren. Mapinion hält alles in einem Feed: Man postet den Ort mit Foto, Bewertung und Kommentar und verfolgt, was andere empfehlen.",
        "Die React-Native-App mit Expo und Expo Router hat Login, Registrierung und drei Tabs: Feed, neue Empfehlung und Profil. Die Session liegt in Zustand mit AsyncStorage, und das Foto kommt über Expo Image Picker aus der Galerie.",
        "Im eigenen Profil kann man seine Empfehlungen sehen, bearbeiten und löschen.",
        "Die API ist auch von mir: Node.js mit Express, MongoDB mit Mongoose, Passwörter mit bcrypt, Login mit einem 15-Tage-JWT und Bilder auf Cloudinary. Der Feed ist paginiert, der Avatar wird von DiceBear erzeugt, und ein Cron hält den Server wach.",
      ],
    },
    "excel-dashboard": {
      title: "Excel-Verkaufsdashboard",
      summary:
        "Technischer Test: Man lädt eine Verkaufstabelle hoch, und die App bereinigt die Daten und baut ein Dashboard mit Kennzahlen, vier Diagrammen, Filtern und einer vollständigen Tabelle, alles im Browser.",
      points: [
        "Echte Verkaufstabellen kommen mit leeren Zeilen, unterschiedlich geschriebenen Kategorien und Monaten in uneinheitlichen Formaten. Die Herausforderung war ein nützliches Dashboard ganz ohne Backend.",
        "Die App liest das erste Blatt der .xlsx- oder .xls-Datei mit SheetJS, verwirft Zeilen ohne Kategorie, Produkt oder Umsatz und normalisiert Kategorien und Monate.",
        "Das Dashboard zeigt Gesamtumsatz, Bestellungen und durchschnittlichen Bonwert sowie vier Diagramme in Recharts: Verkäufe nach Kategorie, Verkäufe nach Monat, Menge nach Monat und die Top 5 Produkte nach Umsatz.",
        "Die Filter für Kategorie und Monat speisen eine Tabelle mit Sortierung, Paginierung, Echtzeitsuche und 10, 25, 50 oder 100 Einträgen pro Seite. SeeB ist in index.html eingebunden.",
      ],
    },
    "bystartup-web-qa": {
      summary:
        "Ein Skill, mit dem KI-Agenten wie Claude Code und Gemini CLI E2E-Tests mit Playwright in Webanwendungen erzeugen, ausführen und reparieren. Entstanden in den Bystartup Labs.",
      points: [
        "End-to-End-Tests zu schreiben und zu pflegen kostet Zeit und wird oft aufgeschoben. Der Skill übergibt diese Arbeit dem KI-Agenten, mit klaren Regeln.",
        "Der Agent liest die Frontend-Dateien, findet Buttons, Formulare, Navigation, API-Aufrufe sowie Fehler-, Lade- und Erfolgszustände und schreibt die Tests in testes/[feature].e2e.test.ts, wobei er den Ordner anlegt, wenn es ihn nicht gibt.",
        "Dann führt er die Tests aus, wiederholt sie, repariert, was fehlgeschlagen ist, und aktualisiert alte Tests, ohne die bereits funktionierende Abdeckung zu verlieren.",
        "Er erkennt Logins mit JWT, Cookies, localStorage, NextAuth, Clerk, Firebase Auth und Auth0, speichert die Session und erzeugt Szenarien für Handy, Tablet und Desktop, mit semantischen, barrierefreien Selektoren.",
        "Er funktioniert mit React, Next.js, Vue, Angular und anderen Weboberflächen. Ich habe den Skill im internen Innovationsprogramm von ByStartup entwickelt.",
      ],
    },
    "iran-tapetes": {
      summary:
        "Link-in-Bio-Seite für Iran Tapetes Orientais, ein Teppichgeschäft in Jardins, São Paulo: WhatsApp, Onlineshop, Instagram, Karte und Öffnungszeiten in einem Premium-Look.",
      points: [
        "Das Geschäft brauchte einen Link in Bio, der zu den Teppichen passt, die es verkauft, mit allem, was Kunden suchen, nur einen Tipp entfernt.",
        "Die Seite vereint WhatsApp, den Onlineshop, Instagram, E-Mail, die Karte des Ladens und die Öffnungszeiten.",
        "Sie ist mobile first, mit animiertem Verlauf, Glassmorphism und einem CSS-Grid-Layout, einer eingebetteten Google-Karte und einem Manifest mit Icons für den Startbildschirm.",
      ],
    },
    "pizzaria-relampago": {
      summary:
        "Link-in-Bio-Seite für die Pizzaria Relâmpago, eine handwerkliche Pizzeria in Itu (SP), die direkt zur Online-Bestellung, zu WhatsApp, Social Media und zur Karte führt.",
      points: [
        "Das Ziel war einfach: Wer von Instagram kommt, soll mit einem Tipp bestellen können.",
        "Der Bestellbutton sticht hervor, gefolgt von WhatsApp, Instagram, Facebook und der Karte mit Adresse.",
        "Ich habe sie in reinem HTML und CSS gebaut, ohne Framework und Abhängigkeiten, damit sie auf dem Handy fast sofort lädt. Der Hintergrund wird über eine CSS-Variable gewechselt.",
      ],
    },
    linkbio: {
      summary:
        "Meine Link-in-Bio-Seite mit meiner visuellen Identität: Portfolio, LinkedIn, GitHub, E-Mail und die Musik, die ich höre, mit Spotify-Einbettungen.",
      points: [
        "Sie vereint eine Vorstellungskarte mit Foto, einen hervorgehobenen Satz und die Links zu meinem Portfolio, LinkedIn, GitHub, Spotify und E-Mail.",
        "Sie folgt der Identität meines Banners, mit Unbounded und Montserrat Black Italic, Gelb und Orange auf dunklem Hintergrund. Grün erscheint nur in den Spotify-Teilen, die Lieblingsplaylists und -alben direkt auf der Seite zeigen.",
        "HTML und CSS mit Variablen, Flexbox und Animationen, Open-Graph-Metadaten und ein Manifest.",
      ],
    },
    "agenda-manager": {
      summary:
        "Technischer Frontend-Test: ein Terminplan von 8 bis 18 Uhr mit Anlegen und Löschen von Zeitfenstern, Formularvalidierung, Statistiken und einem Diagramm der Verteilung nach Uhrzeit.",
      points: [
        "Die Aufgabe verlangte einen klaren Tagesplan mit Validierungsregeln und einem schnellen Überblick, wie der Tag verteilt ist.",
        "Die Startseite stellt das Produkt vor. Der Plan gruppiert die Zeitfenster des Tages, öffnet ein Modal zum Anlegen eines Termins und erlaubt das Entfernen.",
        "Das Formular nutzt React Hook Form mit Zod: Titel und Kunde mit 3 bis 100 Zeichen, Uhrzeiten im Format HH:mm und eine optionale Beschreibung mit bis zu 500 Zeichen.",
        "Der Zustand liegt in Redux Toolkit, mit vier Beispielterminen, die für die Sitzung bestehen bleiben, und die Statistiken erscheinen in einem Recharts-Diagramm.",
      ],
    },
    "epic-musical": {
      summary:
        "Fan-Landingpage für Epic: The Musical, mit interaktiven Abschnitten, GSAP-Scroll-Animationen, einem Spotify-Album-Karussell und einem FAQ.",
      points: [
        "Ein persönliches Projekt, um Animation und visuelles Storytelling auf einer langen Seite zu üben.",
        "Das Layout nutzt Flexbox, Grid und Farbvariablen, mit dem Haupt-Breakpoint bei 768px.",
        "GSAP 3 mit ScrollTrigger steuert die Einstiege und Scroll-Effekte. Die Alben kommen über die Spotify-Einbettung, und die Icons stammen aus Font Awesome und Material Symbols.",
      ],
    },
    velory: {
      summary:
        "Abschlussprojekt des Programms Frontend-Engineer der EBAC: ein Restaurantkatalog mit Bewertungen, Warenkorb und Checkout mit Lieferung und simulierter Zahlung, in React und TypeScript.",
      points: [
        "Die Abschlussaufgabe des Kurses war, alles Gelernte in einem vollständigen Lieferdienst-Produkt zusammenzubringen.",
        "Die Liste zeigt Restaurants mit Kategorie und Bewertung, und jedes hat seine Speisekarte. Der Warenkorb liegt in Redux Toolkit, und der Zähler erscheint oben.",
        "Der Checkout führt durch Artikelprüfung, Lieferadresse, simulierte Kartendaten und Bestellbestätigung. Die Daten kommen aus einer API, die mit Axios abgefragt wird, und das Routing nutzt React Router.",
      ],
    },
    matemagika: {
      summary:
        "Mathe-Lern-App, entstanden als Gruppenarbeit in der Schule: Sie löst Gleichungen ersten und zweiten Grades Schritt für Schritt und macht lineare Interpolation mit Diagramm.",
      points: [
        "Die Aufgabe verlangte ein Werkzeug, das beim Lernen von computergestützter Mathematik hilft.",
        "Die Berechnung zeigt die Lösungen und den Rechenweg. Bei einer Gleichung ersten Grades bleibt der Koeffizient a leer oder null.",
        "Die Interpolation nimmt Punktpaare und zeichnet die Gerade mit Chart.js. Die Seite macht deutlich, dass es eine Gruppenarbeit ist.",
      ],
    },
    "marina-kamiya": {
      title: "Cresce+ Futuro, Unternehmenswebsite",
      summary:
        "Landingpage der Beratung Cresce+ Futuro unter der Leitung von Marina Kamiya, über weibliches Unternehmertum, Technologie und KI in der Geschäftswelt.",
      points: [
        "Die Beratung brauchte eine eigene Website, getrennt vom SaaS, um ihre Arbeit und Programme vorzustellen.",
        "Ich habe sie in HTML, CSS und JavaScript gebaut, mit Scroll-Animationen in GSAP und ScrollTrigger und Icons von Font Awesome.",
        "SeeB ist eingebaut, wie in allen meinen neueren Projekten.",
      ],
    },
    portfolio: {
      title: "Portfolio",
      summary:
        "Diese Website: Projekte mit Filtern und einem Dialog mit Galerie, Dunkelmodus, PWA, vollständiges SEO und Sorgfalt bei Barrierefreiheit und Performance.",
      points: [
        "Ich wollte ein Portfolio, das meine Arbeit so zeigt, wie ich Produkte baue: schnell, barrierefrei und detailliert.",
        "Das Raster ordnet die Arbeiten nach Typ, mit großen Karten im Zickzack, und jedes Projekt öffnet einen Dialog mit Galerie, Stack und Links. Bilder laden erst, wenn sie im Bild erscheinen.",
        "Das helle oder dunkle Theme nutzt next-themes. Metadaten, Open Graph, Sitemap, robots und strukturierte Daten decken SEO ab, und die Website ist eine PWA mit Manifest, Icons und einem Service Worker mit Offline-Seite.",
        "Das Kontaktformular versendet die E-Mail direkt, die Animationen nutzen Motion, und SeeB ist eingebaut.",
      ],
    },
  },
  experiences: [
    {
      role: "Mitgründer & CTO",
      period: "Okt. 2026 bis heute",
      mode: "Remote",
      summary:
        "Mitgründer und verantwortlich für die technologische Ausrichtung von Coach Up, einer White-Label-SaaS-Plattform für die Verwaltung von Fitnessstudios und Personal Trainern, mit Fokus auf Digitalisierung und Vereinfachung von Prozessen. Jedes Studio und jeder Trainer bietet den Mitgliedern eine App mit eigener Marke an, direkt aus dem Browser installierbar (PWA).",
      more: [
        "Ich arbeite an der Definition der Systemarchitektur, der Auswahl der Technologien, der Planung der Funktionen und der Entwicklung des Produkts, vom Prototyp bis zur Produktion.",
      ],
      didLabel: "Hauptaufgaben:",
      did: [
        "Entwicklung und Planung der Full-Stack-Architektur der Plattform mit Next.js, Node.js und TypeScript.",
        "Datenmodellierung, Authentifizierung und Speicherung mit Supabase.",
        "Entwicklung der Lösungen für Mitgliederverwaltung, Trainingsplanung und -verordnung, Erfassung von Sätzen und Gewichten sowie Leistungskennzahlen.",
        "White-Label-Struktur, damit jedes Studio und jeder Trainer die Plattform mit der eigenen visuellen Identität nutzt.",
        "Planung von Infrastruktur, Cloud-Speicher und Anwendungssicherheit mit Cloudflare.",
        "Festlegung der Technologie-Roadmap und Weiterentwicklung des Produkts.",
        "Recherche zu neuen Technologien und Innovationsmöglichkeiten.",
      ],
      closing:
        "Ziel des Projekts ist es, die Verwaltung von Fitnessstudios und Personal Trainern effizienter, zugänglicher und zentraler zu machen und den Mitgliedern eine Betreuung zu bieten, die auch außerhalb des Studios weitergeht.",
    },
    {
      role: "Full-Stack-Entwickler",
      period: "Mai 2026 bis heute",
      mode: "Remote",
      summary:
        "Ich bin der Entwickler, der bei T2 Educação für die Technologie verantwortlich ist: den internen Management-Hub, die Integrationen zwischen Plattformen, die Automatisierungen, die Datenbank, die Infrastruktur und die gesamte digitale Präsenz. Ich kam im Mai 2026 als Frontend-Entwickler und wurde einen Monat später zum Full-Stack-Entwickler befördert, mit dem gesamten Technologiebetrieb in meiner Verantwortung.",
      did: [
        "Ich habe ein System, das an mehrere teure Integrationen gebunden war, in eine Plattform verwandelt, die jeden Tag eigenständiger wird, indem ich ins Haus geholt habe, was vorher von Drittanbieter-Tools abhing.",
        "Ich entwickle den T2 Hub, das interne System in Next.js, React und TypeScript, mit Modulen für Aufgaben, Kundensupport, Finanzen mit Abgleich, Marketing, ein Kontaktcenter, Affiliates und Vertreter, eine Kursbibliothek und B2B-Vertriebsmanagement.",
        "Ich habe den Hub mit mehr als zehn Plattformen integriert: Crisp und Crisp AI im Support, ActiveCampaign, Hotmart, Pagar.me, Granatum, eNotas für Rechnungen, Instagram Graph API, YouTube Analytics, WhatsApp-Automatisierungen, Google Reviews, GitHub, Cloudflare Turnstile beim Login und GA4 für Conversion-Tracking.",
        "Ich modelliere und pflege die PostgreSQL-Datenbank auf Supabase, mit Schemas pro Domäne, und kümmere mich um unsere eigene API, Dutzende Crons auf Vercel, die Erzeugung von PDFs, Tabellen und Präsentationen sowie die Health Checks, die die Endpunkte überwachen.",
        "Ich habe einen MCP-Server gebaut, damit KI-Agenten den Hub sicher abfragen und bedienen können.",
        "Ich habe Website, Blog, das Portal für kostenlose Lernmaterialien und die Landingpages in Next.js 16 neu gebaut, mit Core Web Vitals, technischem SEO, Barrierefreiheit und Tracking. Außerdem kümmere ich mich um Cloudflare (DNS, SSL, Cache, Regeln und Sicherheit), Domains, Staging- und Produktionsumgebungen und CI/CD-Pipelines.",
      ],
      resultValue: "1 Monat",
      resultLabel: "vom Frontend bis zur Beförderung zum Full Stack",
    },
    {
      role: "Full-Stack-Softwareingenieur, AI-First",
      period: "März 2026 bis Aug. 2026",
      mode: "Remote",
      summary:
        "Ich habe SaaS, Websysteme und mobile Apps für Startups gebaut und dabei den ganzen Zyklus abgedeckt: Anforderungen, Architektur, Datenbank, Integrationen, Infrastruktur, Deployment und Veröffentlichung in den Stores. Hier habe ich Mirante ERP entwickelt, das größte Projekt, das ich je gemacht habe.",
      did: [
        "Ich habe Mirante ERP entwickelt, mit Kassensystem, Aufträgen und Angeboten, Lager, Einkauf mit Freigabe und XML-Import, NF-e-Ausstellung mit SEFAZ-Anbindung, Finanzen mit Kontenabgleich, Mandantenfähigkeit mit Filialen, Berechtigungen, Audit-Log und Dashboards mit Verkaufsprognose.",
        "Ich habe K8 Pay, das Gateway von K8 Fintech, für Pix und Boleto im ERP implementiert, dazu weitere Integrationen mit Zahlungs-Gateways, Authentifizierung und externen APIs in den Produkten dieser Zeit.",
        "Ich habe MVPs, Marktplätze und Apps in React Native und Expo geliefert und die Veröffentlichung im App Store und bei Google Play übernommen. Heute mache ich eine App in wenigen Stunden bereit für die Einreichung in den Stores.",
        "Ich habe Anwendungen auf einem VPS mit Docker und Coolify bereitgestellt und betrieben, mit CI/CD-Pipelines, und auf der Datenbankseite mit Supabase, PostgreSQL, Prisma und Drizzle ORM gearbeitet.",
        "Ich habe im AI-First-Modell gearbeitet, mit Agenten, MCPs und KI-Tools im Alltag, in wöchentlichen Sprints und Meetings mit Stakeholdern. Im internen Programm Bystartup Labs habe ich bystartup-web-qa entwickelt, einen Skill, mit dem KI-Agenten E2E-Tests mit Playwright schreiben und reparieren.",
      ],
    },
    {
      role: "Full-Stack-Entwickler",
      period: "Jan. 2026 bis März 2026",
      mode: "Remote",
      summary:
        "Ich habe das SaaS von Cresce+ Futuro neu strukturiert, das Lager, Verkauf, Aufgaben und Team von Kleinst- und Kleinunternehmen organisiert, und die Infrastruktur von drei Anbietern auf eine einzige Basis umgezogen, günstiger und leichter zu warten.",
      did: [
        "Ich habe die Anwendung als Full-Stack-Next.js-16-App mit App Router und Tailwind CSS neu geschrieben, mit Authentifizierung und Zahlungen über Mercado Pago.",
        "Ich habe den Stack, der auf Azure, Railway und Hostinger verteilt war, zu Neon PostgreSQL und Vercel migriert, die Domain zentralisiert und das Produkt skalierbar gemacht.",
        "Außerdem habe ich die Unternehmenswebsite der Beratung gebaut, mit SeeB, dem von mir entwickelten Barrierefreiheits-Widget, eingebaut.",
      ],
    },
  ],
  studies: [
    {
      title: "Softwaretechnik",
      place: "Gran Faculdade",
      period: "Juni 2026 bis Juni 2030",
      text: "Bachelorstudium im Gange, mit 3.200 Stunden in 8 Semestern. Der Lehrplan deckt den ganzen Softwarezyklus ab: Algorithmen und Datenstrukturen, relationale und NoSQL-Datenbanken, Frontend, Backend und Mobile, Architektur und Microservices, Cloud, Container und DevOps, Qualität und Tests, Informationssicherheit, agiles Management und künstliche Intelligenz. Ich habe das Studium gewählt, weil es dieselbe Sprache spricht wie meine Arbeit: Produkte bauen und echte Probleme lösen.",
    },
    {
      title: "Künstliche Intelligenz und digitale Automatisierung",
      place: "UniFECAF mit der Faculdade de Tecnologia Rocketseat",
      period: "Okt. 2026 bis März 2028",
      text: "Technologiestudium im Gange, 18 Monate lang und mit Praxis ab dem ersten Semester. Das Programm umfasst generative KI, Prompt Engineering, API-Integration, Prozess- und Workflow-Automatisierung, Low-Code, UX/UI und agile Methoden und führt weiter zu RAG, Embeddings, Fine-Tuning und autonomen Agenten. Es ist die theoretische Grundlage für das, was ich bei der Arbeit mit Agenten, MCP und Automatisierung schon nutze.",
    },
    {
      title: "Softwarearchitektur mit KI",
      place: "Weiterbildung",
      period: "Anhanguera, laufend, 360 h",
      text: "Laufende Weiterbildung an der Anhanguera, mit dem Full Stack Club, 360 Stunden. Der Schwerpunkt ist Softwarearchitektur mit künstlicher Intelligenz, in Praxisprojekten zu Skalierbarkeit, Performance, Tests, Microservices, CI/CD und Cloud.",
    },
    {
      title: "Internet-Informatik (Webentwicklung)",
      place: "ETEC Parque Belém",
      period: "2023 bis 2025",
      text: "Technische Oberstufe, abgeschlossen. Ich kam, ohne richtig mit einem Computer umgehen zu können, und ging programmierend raus: Ich habe Logik, HTML, CSS, JavaScript, PHP, SQL, WordPress, MIT App Inventor, Figma, UX/UI, Barrierefreiheit, HTTP-Protokolle, Shell-Grundlagen und Virtualisierung mit VirtualBox gelernt. Mein Abschlussprojekt war SeeB, eine Chromium-Erweiterung und ein Barrierefreiheits-Widget, dessen technischer Teil bei mir lag. Es wurde an der Schule präsentiert und ist heute Open Source und im Chrome Web Store.",
    },
    {
      title: "Persönliche Entwicklung und Beschäftigungsfähigkeit",
      place: "UniFECAF",
      period: "Nov. 2026",
      text: "Erweiterungskurs der UniFECAF zu persönlicher Entwicklung und Vorbereitung auf den Arbeitsmarkt. Die Module behandeln Lerngewohnheiten und Organisation, zum Beispiel Zeitmanagement.",
    },
    {
      title: "Microsoft AI-103 Acceleration: Workshops 1 bis 4",
      place: "DIO mit Microsoft",
      period: "Okt. 2026",
      text: "Vier Workshops der Acceleration von DIO und Microsoft: Agenten in Microsoft Foundry, RAG mit Azure AI Search, Agenten in Produktion und der Weg zur Prüfung AI-103.",
    },
    {
      title: "Microsoft AI-103 Acceleration: Willkommen",
      place: "DIO mit Microsoft",
      period: "Okt. 2026",
      text: "Einstieg in die Acceleration von DIO und Microsoft für die Zertifizierung AI-103. Sie stellt den Pfad zu Lösungen mit künstlicher Intelligenz in Azure vor.",
    },
    {
      title: "Instituto PROA",
      place: "Instituto PROA",
      period: "März 2026",
      text: "Programm des Instituto PROA für den Arbeitsmarkt, mit Schwerpunkt auf Kommunikation und analytischem Denken. Der Weg führt über Ziele, professionelles Schreiben und Kommunikation im Team.",
    },
    {
      title: "Agile Methoden",
      place: "Rocketseat",
      period: "Okt. 2025",
      text: "Grundlagen von Scrum und Kanban, um die Arbeit eines Teams in kurzen Zyklen zu organisieren und den Stand der Aufgaben zu verfolgen.",
    },
    {
      title: "Einführung in Go",
      place: "Rocketseat",
      period: "Okt. 2025",
      text: "Erste Schritte in Go, mit Syntax, Typen und der Art, wie die Sprache Fehler behandelt. Geübt wurde an Terminalprogrammen, etwa einem Ratespiel und einem Währungsrechner.",
    },
    {
      title: "Grundlagen des Projektmanagements",
      place: "Rocketseat mit UniFECAF",
      period: "",
      text: "Kurs darüber, wie man ein Projekt plant, organisiert und begleitet, parallel zum Studium. Es geht um Umfang, Frist und einen klaren Blick auf den Stand der Arbeit.",
    },
    {
      title: "Git und GitHub: der Leitfaden im KI-Zeitalter",
      place: "Rocketseat",
      period: "",
      text: "Kurs zu Versionsverwaltung mit Git und GitHub, gedacht für den Ablauf von Leuten, die mit KI-Werkzeugen entwickeln. Er deckt den Alltag von Branch, Commit und Pull Request ab.",
    },
    {
      title: "KI-Agenten mit n8n",
      place: "Rocketseat",
      period: "",
      text: "Kurs zu Automatisierungen und Agenten für künstliche Intelligenz in n8n, bei dem Dienste verbunden werden, damit ein Ablauf auf eine Anfrage reagiert.",
    },
    {
      title: "SEO für Devs",
      place: "Rocketseat",
      period: "",
      text: "Kurs darüber, wie eine Website in der Suche besser sichtbar wird, aus der Sicht der Person, die sie baut. Er behandelt Seitenstruktur, Inhalt und die technischen Punkte, die eine Suchmaschine sieht.",
    },
    {
      title: "Klare Kommunikation",
      place: "Rocketseat",
      period: "",
      text: "Kommunikationskurs für die Arbeit im Team, mit dem Fokus, klar und sicher zu sprechen.",
    },
    {
      title: "Internationale Karriere",
      place: "Rocketseat",
      period: "",
      text: "Kurs darüber, wie man sich auf Technikstellen außerhalb Brasiliens vorbereitet, vom eigenen Auftritt bis zur Kommunikation mit Teams in einem anderen Land.",
    },
    {
      title: "KI-Grundlagen mit Schwerpunkt generative KI",
      place: "Rocketseat",
      period: "",
      text: "Grundlage der künstlichen Intelligenz mit Schwerpunkt auf generativer KI und darauf, was diese Modelle im Alltag von Entwicklerinnen und Entwicklern ändern.",
    },
    {
      title: "Front-end-Ausbildung",
      place: "EBAC",
      period: "",
      text: "Front-end-Ausbildung mit Git, CSS, JavaScript, Bootstrap, SASS, LESS, Gulp, Grunt, ES6, Objektorientierung, TypeScript, React mit Redux, Tests mit Jest und Cypress und Node. Die Übungen und die Projekte, etwa Velory und Games Shop, liegen auf GitHub.",
    },
    {
      title: "Full-Stack-Journey",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Praktische Full-Stack-Journey, deren Projekt eine von Spotify inspirierte App ist, mit Front-end, Back-end und Deploy.",
    },
    {
      title: "Komplette Webentwicklung",
      place: "Udemy",
      period: "",
      text: "Breiter Kurs zur Webentwicklung, mit praktischen Front-end-Projekten, um den Aufbau einer Seite von Grund auf zu üben.",
    },
    {
      title: "Python für Einsteiger und Fortgeschrittene",
      place: "Alura",
      period: "",
      text: "Python-Kurse vom Einstieg bis zum fortgeschrittenen Niveau, geübt am Bau von Spielen.",
    },
    {
      title: "50 Projects In 50 Days: HTML, CSS & JavaScript",
      place: "Udemy",
      period: "",
      text: "Eine Herausforderung, 50 Mini-Projekte in HTML, CSS und JavaScript zu bauen, eines pro Tag, um Übung mit dem Web zu bekommen.",
    },
    {
      title: "JavaScript-Intensivkurs",
      place: "Hashtag Treinamentos",
      period: "",
      text: "Praktische Vertiefung in JavaScript und React, mit Projekten, die von Grund auf entstehen, etwa ein Audioplayer in reinem JavaScript.",
    },
    {
      title: "Bootcamp Ri Happy: Front-end von null",
      place: "DIO",
      period: "",
      text: "Front-end-Bootcamp mit HTML, CSS und JavaScript, mit dem Fokus, echte Oberflächen von Anfang bis Ende zu bauen.",
    },
    {
      title: "Projektaufgaben in HTML, CSS und JavaScript",
      place: "DIO",
      period: "",
      text: "Eine Reihe praktischer Aufgaben der DIO, in denen Seiten und Spiele nachgebaut werden, etwa Stranger Things, Discord, YouTube und Detona Ralph.",
    },
    {
      title: "NLW Agents",
      place: "Rocketseat",
      period: "",
      text: "Praktisches Rocketseat-Event zu Agenten der künstlichen Intelligenz, mit einem Projekt, das in der Woche gebaut und veröffentlicht wird.",
    },
    {
      title: "NLW Connect",
      place: "Rocketseat",
      period: "",
      text: "Praktisches Rocketseat-Event, in dem man in wenigen Tagen eine API von Grund auf baut.",
    },
    {
      title: "Eine CLI in Go bauen",
      place: "Rocketseat",
      period: "",
      text: "Praktische Stunde zum Bau eines Kommandozeilenwerkzeugs in Go.",
    },
    {
      title: "SQL und Datenbanken",
      place: "",
      period: "",
      text: "Beschäftigung mit SQL anhand der Datenbanken einer Bibliothek und eines Streamingdienstes, einschließlich Tabellen und Beziehungen.",
    },
    {
      title: "Einführung in die Programmierung",
      place: "EBAC",
      period: "",
      text: "Erster Kontakt mit Programmierlogik und den Grundideen, die man braucht, um Code zu schreiben.",
    },
    {
      title: "Programmierlogik in JavaScript",
      place: "DIO",
      period: "",
      text: "Logikaufgabe mit Entscheidungsstrukturen in JavaScript, um die Stufe eines Helden zu bestimmen.",
    },
    {
      title: "Zu einem Open-Source-Projekt auf GitHub beitragen",
      place: "DIO",
      period: "",
      text: "Praktisches Labor dazu, wie man zu einem Open-Source-Projekt beiträgt: Fork, Branch und Pull Request.",
    },
    {
      title: "Tech-Karriere-Woche",
      place: "Alura",
      period: "",
      text: "Eine Woche Inhalte zu Karriere in der Technologie und zu künstlicher Intelligenz, mit einem Blick auf den Markt und auf mögliche Wege.",
    },
    {
      title: "Universo Photoshop",
      place: "brainstorm.academy",
      period: "",
      text: "Kurs zu Adobe Photoshop und Grafikdesign, um Bilder für Oberflächen und Inhalte zu erstellen und zu bearbeiten.",
    }
  ],

  recommendations: [
    {
      role: "Full-Stack-Entwickler, im selben Team bei ByStartup",
      date: "3. August 2026",
      paragraphs: [
        "Ich hatte die Gelegenheit, mit Rafael Henrique Blanco bei ByStartup zu arbeiten, und kann sagen, dass er einer der solidesten und zuverlässigsten Profis war, mit denen ich je gearbeitet habe.",
        "Eine seiner größten Stärken ist die Fähigkeit, hochkomplexe Projekte schnell und in hoher Qualität zu führen, ohne die Kontrolle oder die Ruhe zu verlieren. Er liefert beständig, organisiert seine Arbeit gut und verwandelt schwierige technische Herausforderungen in klare, gut umgesetzte Lösungen.",
        "Neben exzellentem technischem Wissen und Erfahrung in der Softwareentwicklung ist Rafael äußerst professionell, verantwortungsbewusst und organisiert. Er bleibt unter Druck reif, kommuniziert sachlich und hebt das Niveau des Teams um ihn herum.",
        "Ich empfehle Rafael ohne jeden Zweifel. Ich bin sicher, dass er ein großer Gewinn für jedes Team sein wird, das jemanden Erfahrenen und Zuverlässigen sucht, der komplexe Projekte exzellent umsetzen kann.",
      ],
    },
    {
      role: "COO Technologie, hat Rafael bei ByStartup direkt betreut",
      date: "2. August 2026",
      paragraphs: [
        "Rafael ist die Art Entwickler, die dem Team Ruhe gibt. In unseren Gesprächen waren seine große technische Sicherheit und seine Proaktivität deutlich.",
        "Er wartet nicht, bis Probleme auftreten; er erkennt sie schon in den Planungsmeetings, schlägt gute Praktiken vor und sorgt dafür, dass das Endprodukt die bestmögliche Qualität hat.",
        "Ausgezeichneter Profi!",
      ],
    },
  ],
};
