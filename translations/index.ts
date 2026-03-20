
export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      home: 'Home',
      about: 'Firmenportrait',
      products: 'Produkte',
      solutions: 'Lösungen',
      services: 'Leistungen',
      contact: 'Kontakt'
    },
    footer: {
      description: 'Zertifizierter Facherrichter für AJAX Systems. Vertrauen Sie auf meisterhafte Sicherheitstechnik und professionelle Betreuung durch ATec Systems.',
      quickLinks: 'Quick Links',
      portfolio: 'Ajax Portfolio',
      concepts: 'Konzept-Lösungen',
      maintenance: 'Wartungs-Service',
      advice: 'Beratung anfragen',
      contact: 'Kontakt',
      address: 'Allrütiweg 9, CH-6343 Rotkreuz',
      copyright: '2024 ATec Systems. Premium Ajax Partner.',
      impressum: 'Impressum',
      privacy: 'Datenschutz'
    },
    home: {
      tagline: 'Status',
      secured: 'GESICHERT',
      ctaConsult: 'Jetzt Beraten Lassen',
      ctaCatalog: 'Katalog Öffnen'
    },
    about: {
      tag: 'ATec Systems',
      title: 'Firmenportrait',
      intro: 'Wir bei ATec Systems glauben, dass Sicherheit keine Frage des Kompromisses sein darf. Als zertifizierter Facherrichter vereinen wir handwerkliche Präzision mit digitaler Innovation.',
      history: '',
      stats: {
        years: 'Jahre Expertise',
        projects: 'Projekt-Abschlüsse'
      },
      teamTitle: 'Führung & Expertise',
      teamSub: 'Wir setzen auf flache Hierarchien und gebündeltes Know-how in allen Sicherheitsbereichen.',
      roles: ['Technik-Leitung', 'Projektplanung'],
      founded: {
        tag: 'Historie',
        title: 'Unsere Gründung & Geschichte',
        subtitle: 'Von der Aufbereitungstechnik zum modernen Sicherheitsunternehmen.',
        content: 'Die Wurzeln der ATec Systems reichen zurück bis in das Jahr 1975. Was als spezialisiertes Unternehmen für Aufbereitungstechnik begann, hat sich über Jahrzehnte zu einem führenden Anbieter für Sicherheitssysteme entwickelt. Diese Transformation war geprägt von technologischem Fortschritt und dem unermüdlichen Streben nach höchster Qualität.',
        milestones: [
          { year: '1975', title: 'Gründung', desc: 'Gründung als Aufbereitungstechnik AG mit Fokus auf Industriemaschinen.' },
          { year: '2009', title: 'Strategische Neuausrichtung', desc: 'Generationenwechsel und Fokusverschiebung auf Sicherheitstechnik.' },
          { year: '2015', title: 'Ajax Partnerschaft', desc: 'Beginn der exklusiven Zusammenarbeit mit AJAX Systems.' },
          { year: '2026', title: 'Umfassende Lösungen', desc: 'Einführung neuer, ganzheitlicher Sicherheitskonzepte.' }
        ]
      }
    },
    products: {
      bannerTag: 'ATec Starter-Set',
      bannerTitle: 'Ein System, keine Kompromisse.',
      bannerDesc: 'Holen Sie sich das preisgekrönte Sicherheitspaket von ATec Systems. Alle Melder sind perfekt aufeinander abgestimmt und sofort einsatzbereit.',
      icons: {
        central: 'Zentrale',
        sensors: 'Sensoren',
        cameras: 'Kameras',
        app: 'App-Steuerung'
      },
      catalogTag: 'Hardware Katalog',
      catalogTitle: 'Einzelkomponenten',
      filterAll: 'Alle',
      certified: 'ATec zertifiziert',
      details: 'Details'
    },
    solutions: {
      tag: 'Anwendungsgebiete',
      title: 'Sicherheit für jeden Sektor',
      subtitle: 'Ob privater Rückzugsort oder komplexer Industriekomplex – wir planen das passende Schutzschild.',
      features: ['24/7 Notruf-Aufschaltung', 'Verschlüsselte Funkübertragung', 'Benutzerfreundliche App-Steuerung'],
      cta: 'Konzept anfragen',
      desc: 'Lückenloser Schutz vor Einbruch, Vandalismus und Elementarschäden. Unsere Ajax-basierten Lösungen lassen sich nahtlos integrieren und wachsen mit Ihren Anforderungen.',
      commercialDesc: 'Für Gewerbe und Einzelhandel bieten wir zuverlässigen Einbruchschutz mit moderner Funktechnologie. Die Alarmanlage ermöglicht Echtzeit-Alarmierung, App-Steuerung und Video-Verifikation für maximale Sicherheit. Dank Sabotageschutz und flexibler Erweiterbarkeit ist das System ideal für professionelle Lösungen mit Ajax Systems.',
      industrialDesc: 'Für Industrie- und Lagerbetriebe bieten wir umfassenden Perimeterschutz, zuverlässige Einbruch- und Sabotageerkennung sowie eine lückenlose Überwachung sensibler Produktions- und Lagerbereiche. Das System ermöglicht Echtzeit-Alarmierung, Zutrittskontrolle und Video-Verifikation zur Absicherung von Maschinen, Warenbeständen und Logistikzonen.',
      hospitalityDesc: 'Für Gastronomie und Hotels bieten wir umfassende Sicherheitslösungen mit besonderem Fokus auf Brandschutz, frühzeitige Wasserschadenerkennung und intelligente Videoüberwachung. Rauch-, Hitze- und Wassermelder schützen Gästezimmer, Küchen- und Technikbereiche zuverlässig vor Schäden und Betriebsunterbrüchen. Die integrierte Videoüberwachung ermöglicht eine diskrete Kontrolle von Eingangsbereichen, Rezeptionen und sensiblen Zonen.'
    },
    services: {
      tag: 'Full-Service',
      title: 'Unser Weg zum Schutz',
      subtitle: 'Vom ersten Gespräch bis zur schlüsselfertigen Übergabe – wir managen Ihr Sicherheitsprojekt.',
      whyTitle: 'Warum Profis ATec Systems wählen',
      support: 'Support Hotline',
      steps: [
        { title: 'Vor-Ort Analyse', desc: 'Wir identifizieren Schwachstellen in Ihrem Objekt – präzise und diskret.' },
        { title: 'Projektplanung', desc: 'Individuelle Sicherheitskonzeption nach VdS-Standards.' },
        { title: 'Reinmontage', desc: 'Saubere Installation ohne Schmutz dank Funk-Technologie.' },
        { title: 'Begleitung', desc: 'Wir bleiben Ihr Partner für Wartung und Fernüberwachung.' }
      ],
      reasons: [
        { title: 'Zertifiziert & Gelistet', desc: 'Offiziell gelisteter Ajax-Errichter und VdS-konforme Planung.' },
        { title: 'Schnellinstallation', desc: 'Inbetriebnahme meist innerhalb eines einzigen Werktages.' },
        { title: 'Intuitive Kontrolle', desc: 'Volle Übersicht über alle Sensoren per preisgekrönter Smartphone-App.' }
      ]
    },
    contact: {
      tag: 'Kontakt',
      title: 'Lassen Sie uns planen.',
      subtitle: 'Wir erstellen Ihnen ein unverbindliches Sicherheitsangebot für Ihr Zuhause oder Ihr Unternehmen durch ATec Systems.',
      labels: {
        phone: 'Rufen Sie uns an',
        email: 'E-Mail',
        headquarters: 'Hauptsitz',
        name: 'Name',
        interest: 'Interesse',
        message: 'Nachricht'
      },
      placeholders: {
        name: 'Ihr Name',
        message: 'Wie können wir Ihnen helfen?'
      },
      interests: [
        'Einbruchmeldeanlage (Ajax)',
        'Brandschutz / FireProtect',
        'Videoüberwachung / TurretCam',
        'Vollständige Objektsicherung'
      ],
      submit: 'Anfrage absenden',
      successTitle: 'Anfrage erhalten!',
      successDesc: 'Wir werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden.',
      newMsg: 'Neue Nachricht senden'
    },
    legal: {
      tag: 'Rechtliches',
      title: 'Impressum',
      provider: 'Angaben gemäß Anbieterkennzeichnung',
      represented: 'Vertreten durch',
      contact: 'Kontakt',
      register: 'Registereintrag',
      vat: 'Mehrwertsteuer-Nummer',
      disclaimer: 'Haftungsausschluss',
      disclaimerText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
    },
    privacy: {
      tag: 'Rechtliches',
      title: 'Datenschutz',
      section1Title: '1. Datenschutz auf einen Blick',
      section1Sub: 'Allgemeine Hinweise',
      section1Text: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
      section2Title: '2. Datenerfassung auf unserer Website',
      section2Sub: 'Wer ist verantwortlich?',
      section2Text: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.',
      section3Title: '3. Ihre Rechte',
      section3Text: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.',
      securityTitle: 'Sicherheitshinweis',
      securityText: 'Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.'
    },
    assistant: {
      name: 'ATec KI-Assistent',
      greeting: 'Guten Tag! Ich bin Ihr Berater von ATec Systems. Wie kann ich Ihnen beim Thema Sicherheit heute weiterhelfen?',
      placeholder: 'Frage stellen...',
      error: 'Entschuldigung, ich konnte keine Antwort generieren.',
      connError: 'Leider gab es einen Fehler bei der Verbindung. Bitte versuchen Sie es später erneut.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Company Portrait',
      products: 'Products',
      solutions: 'Solutions',
      services: 'Services',
      contact: 'Contact'
    },
    footer: {
      description: 'Certified installer for AJAX Systems. Trust in masterly security technology and professional support by ATec Systems.',
      quickLinks: 'Quick Links',
      portfolio: 'Ajax Portfolio',
      concepts: 'Concept Solutions',
      maintenance: 'Maintenance Service',
      advice: 'Request Consultation',
      contact: 'Contact',
      address: 'Allrütiweg 9, CH-6343 Rotkreuz',
      copyright: '2024 ATec Systems. Premium Ajax Partner.',
      impressum: 'Legal Notice',
      privacy: 'Privacy Policy'
    },
    home: {
      tagline: 'Status',
      secured: 'SECURED',
      ctaConsult: 'Get Advice Now',
      ctaCatalog: 'Open Catalog'
    },
    about: {
      tag: 'ATec Systems',
      title: 'Company Portrait',
      intro: 'At ATec Systems, we believe that security should not be a matter of compromise. As a certified installer, we combine manual precision with digital innovation.',
      history: '',
      stats: {
        years: 'Years of Expertise',
        projects: 'Projects Completed'
      },
      teamTitle: 'Leadership & Expertise',
      teamSub: 'We rely on flat hierarchies and bundled know-how in all security areas.',
      roles: ['Technical Lead', 'Project Planning'],
      founded: {
        tag: 'History',
        title: 'Our Founding & History',
        subtitle: 'From processing technology to a modern security company.',
        content: 'The roots of ATec Systems go back to 1975. What began as a specialized company for processing technology has developed over decades into a leading provider of security systems. This transformation was characterized by technological progress and the tireless pursuit of the highest quality.',
        milestones: [
          { year: '1975', title: 'Founding', desc: 'Founded as Aufbereitungstechnik AG with a focus on industrial machinery.' },
          { year: '2009', title: 'Strategic Realignment', desc: 'Generation change and shift of focus to security technology.' },
          { year: '2015', title: 'Ajax Partnership', desc: 'Start of the exclusive cooperation with AJAX Systems.' },
          { year: '2026', title: 'Comprehensive Solutions', desc: 'Introduction of new, holistic security concepts.' }
        ]
      }
    },
    products: {
      bannerTag: 'ATec Starter-Set',
      bannerTitle: 'One System, No Compromises.',
      bannerDesc: 'Get the award-winning security package from ATec Systems. All detectors are perfectly matched and ready for immediate use.',
      icons: {
        central: 'Hub',
        sensors: 'Sensors',
        cameras: 'Cameras',
        app: 'App Control'
      },
      catalogTag: 'Hardware Catalog',
      catalogTitle: 'Components',
      filterAll: 'All',
      certified: 'ATec certified',
      details: 'Details'
    },
    solutions: {
      tag: 'Application Areas',
      title: 'Security for Every Sector',
      subtitle: 'Whether a private retreat or a complex industrial facility – we plan the right shield.',
      features: ['24/7 Monitoring Connection', 'Encrypted Radio Transmission', 'User-friendly App Control'],
      cta: 'Request Concept',
      desc: 'Seamless protection against burglary, vandalism, and environmental damage. Our Ajax-based solutions integrate smoothly and grow with your requirements.',
      commercialDesc: 'For commercial and retail businesses, we offer reliable burglary protection with modern wireless technology. The alarm system enables real-time alerting, app control, and video verification for maximum security. Thanks to tamper protection and flexible expandability, the system is ideal for professional solutions with Ajax Systems.',
      industrialDesc: 'For industrial and warehouse operations, we offer comprehensive perimeter protection, reliable burglary and sabotage detection, and seamless monitoring of sensitive production and storage areas. The system enables real-time alerting, access control, and video verification to secure machinery, inventory, and logistics zones.',
      hospitalityDesc: 'For gastronomy and hotels, we offer comprehensive security solutions with a special focus on fire protection, early water damage detection, and intelligent video surveillance. Smoke, heat, and water detectors reliably protect guest rooms, kitchens, and technical areas from damage and business interruptions. Integrated video surveillance allows for discreet monitoring of entrance areas, receptions, and sensitive zones.'
    },
    services: {
      tag: 'Full Service',
      title: 'Our Path to Protection',
      subtitle: 'From the first conversation to turnkey handover – we manage your security project.',
      whyTitle: 'Why Professionals Choose ATec Systems',
      support: 'Support Hotline',
      steps: [
        { title: 'On-site Analysis', desc: 'We identify weak points in your property – precisely and discreetly.' },
        { title: 'Project Planning', desc: 'Individual security concept according to VdS standards.' },
        { title: 'Clean Installation', desc: 'Clean installation without mess thanks to wireless technology.' },
        { title: 'Follow-up', desc: 'We remain your partner for maintenance and remote monitoring.' }
      ],
      reasons: [
        { title: 'Certified & Listed', desc: 'Officially listed Ajax installer and VdS-compliant planning.' },
        { title: 'Fast Installation', desc: 'Commissioning usually within a single working day.' },
        { title: 'Intuitive Control', desc: 'Full overview of all sensors via award-winning smartphone app.' }
      ]
    },
    contact: {
      tag: 'Contact',
      title: 'Let Us Plan.',
      subtitle: 'We will create a non-binding security offer for your home or business through ATec Systems.',
      labels: {
        phone: 'Call Us',
        email: 'Email',
        headquarters: 'Headquarters',
        name: 'Name',
        interest: 'Interest',
        message: 'Message'
      },
      placeholders: {
        name: 'Your Name',
        message: 'How can we help you?'
      },
      interests: [
        'Burglary Alarm System (Ajax)',
        'Fire Protection / FireProtect',
        'Video Surveillance / TurretCam',
        'Complete Property Security'
      ],
      submit: 'Send Inquiry',
      successTitle: 'Inquiry Received!',
      successDesc: 'We will get back to you within the next 24 hours.',
      newMsg: 'Send new message'
    },
    legal: {
      tag: 'Legal',
      title: 'Legal Notice',
      provider: 'Provider identification',
      represented: 'Represented by',
      contact: 'Contact',
      register: 'Register entry',
      vat: 'VAT Identification Number',
      disclaimer: 'Disclaimer',
      disclaimerText: 'Despite careful control of the content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.'
    },
    privacy: {
      tag: 'Legal',
      title: 'Privacy Policy',
      section1Title: '1. Privacy at a glance',
      section1Sub: 'General information',
      section1Text: 'The following notes provide a simple overview of what happens to your personal data when you visit our website. Personal data is all data with which you can be personally identified.',
      section2Title: '2. Data collection on our website',
      section2Sub: 'Who is responsible?',
      section2Text: 'Data processing on this website is carried out by the website operator.',
      section3Title: '3. Your rights',
      section3Text: 'You have the right at any time to receive information about the origin, recipient and purpose of your stored personal data free of charge.',
      securityTitle: 'Security Note',
      securityText: 'We point out that data transmission on the Internet can have security gaps. Complete protection of data from access by third parties is not possible.'
    },
    assistant: {
      name: 'ATec AI Assistant',
      greeting: 'Hello! I am your consultant from ATec Systems. How can I help you with security today?',
      placeholder: 'Ask a question...',
      error: 'Sorry, I could not generate a response.',
      connError: 'Unfortunately, there was a connection error. Please try again later.'
    }
  }
};
