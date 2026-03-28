
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
      privacy: 'Datenschutz',
      agb: 'AGB'
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
      roles: ['Inhaber', 'Inhaber'],
      founded: {
        tag: 'Historie',
        title: 'Unsere Gründung & Geschichte',
        subtitle: 'Drei Jahrzehnte im Dienst der Sicherheit',
        content: [
          'ATec‑Systems steht für zuverlässige, durchdachte und praxisorientierte Sicherheitslösungen. Als inhabergeführtes Einzelunternehmen konzipieren, vertreiben, installieren und unterhalten wir moderne Sicherheitsanlagen in den Bereichen Einbruchschutz, Brandschutz und Videoüberwachung.',
          'Unsere Kundinnen und Kunden stammen aus dem Privatbereich, dem Gewerbe, der Industrie- und Lagerlogistik sowie aus dem Hotel- und Gastgewerbe. In all diesen Bereichen sind Sicherheit, Betriebskontinuität, Vertrauen und Verlässlichkeit entscheidende Faktoren – Werte, welche die tägliche Arbeit von ATec‑Systems prägen.',
          'Die beiden Firmeninhaber sind seit 1994 in der Sicherheitsbranche tätig und verfügen über langjährige Erfahrung in der Planung, Umsetzung und Betreuung anspruchsvoller Sicherheitskonzepte. Dieses fundierte Know-how bildet die Grundlage unserer Arbeit und ermöglicht Lösungen, die technisch ausgereift, normgerecht und nachhaltig sind. Ihre Sicherheit ist unsere Motivation',
          'Unser Anspruch ist es, keine standardisierten Systeme zu liefern, sondern individuell abgestimmte Sicherheitslösungen zu realisieren. Ob Einfamilienhaus, Gewerbebetrieb, Produktionsstätte, Lagerhalle oder Hotelbetrieb, jedes Objekt stellt eigene Anforderungen an den Schutz von Personen, Sachwerten und Infrastruktur. Wir legen grossen Wert auf eine persönliche Beratung, eine sorgfältige Risikoanalyse und eine präzise Planung.',
          'ATec‑Systems begleitet seine Kundschaft über den gesamten Lebenszyklus einer Sicherheitsanlage – von der ersten Analyse über die Konzeption, die fachgerechte Installation bis zur regelmässigen Wartung, dem Pikettdienst und dem langfristigen Unterhalt. Dabei setzen wir ausschliesslich auf bewährte, qualitativ hochwertige Systeme und Komponenten, die den heutigen Sicherheits- und Qualitäts-anforderungen entsprechen.',
          'Sicherheitstechnik ist Vertrauenssache. Unsere Kundinnen und Kunden verlassen sich darauf, dass die installierten Systeme zuverlässig funktionieren und im entscheidenden Moment Schutz bieten. Vertrauen entsteht durch Ehrlichkeit, Transparenz und Fachkompetenz. Verlässlichkeit zeigt sich in sauberer Ausführung, termingerechter Umsetzung sowie einer partnerschaftlichen Betreuung auch nach der Installation.',
          'Als Einzelunternehmung stehen wir für kurze Entscheidungswege, persönliche Verantwortung und direkte Erreichbarkeit. Unsere Kunden schätzen den konstanten Ansprechpartner, die hohe Flexibilität sowie unseren konsequenten Qualitätsanspruch. Diskretion, Nachhaltigkeit und kontinuierliche Weiterbildung sind für uns selbstverständlich.',
          'ATec‑Systems – Sicherheit aus Erfahrung, getragen von Vertrauen und Verlässlichkeit.'
        ],
        milestones: [
          { year: '2025', title: 'Ajax Partnerschaft', desc: 'Beginn der exklusiven Zusammenarbeit mit AJAX Systems.' },
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
        'Allgemeine Anfrage',
        'Einbruchmeldeanlage',
        'Brandschutz',
        'Videoüberwachung',
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
      representatives: 'Stefan Gössi, Philipp Schwerzmann, beide als Inhaber',
      contact: 'Kontakt',
      register: 'Registereintrag',
      vat: 'Mehrwertsteuer-Nummer',
      disclaimer: 'Haftungsausschluss',
      disclaimerText: 'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.'
    },
    agbPage: {
      tag: 'Rechtliches',
      title: 'Allgemeine Geschäftsbedingungen'
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
      cookiesTitle: 'Cookies und ähnliche Technologien',
      cookiesText: 'Wir verwenden Cookies und ähnliche Technologien, um die Benutzererfahrung zu verbessern und die Sicherheit unserer Website zu gewährleisten. Diese Technologien helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
      securityTitle: 'Sicherheitshinweis',
      securityText: 'Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.'
    },
    cookieBanner: {
      text: 'Wir verwenden Cookies und ähnliche Technologien, um das Nutzererlebnis auf unserer Webseite zu verbessern, unseren Datenverkehr zu analysieren und Inhalte und Werbung zu personalisieren.',
      link: 'Datenschutz',
      accept: 'Akzeptieren'
    },
    assistant: {
      name: 'ATec KI-Assistent',
      greeting: 'Guten Tag! Ich bin Ihr Berater von ATec Systems. Wie kann ich Ihnen beim Thema Sicherheit heute weiterhelfen?',
      placeholder: 'Frage stellen...',
      error: 'Entschuldigung, ich konnte keine Antwort generieren.',
      connError: 'Leider gab es einen Fehler bei der Verbindung. Bitte versuchen Sie es später erneut.',
      quotaError: 'Der intelligente KI-Assistent ist aufgrund fehlender Google Cloud API-Kontingente (Abrechnung nicht aktiviert) derzeit pausiert. Bitte kontaktieren Sie uns direkt über das Kontaktformular.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Company Profile',
      products: 'Products',
      solutions: 'Solutions',
      services: 'Services',
      contact: 'Contact'
    },
    footer: {
      description: 'Certified specialist for AJAX Systems. Trust in superior security technology and professional support from ATec Systems.',
      quickLinks: 'Quick Links',
      portfolio: 'Ajax Portfolio',
      concepts: 'Integrated Solutions',
      maintenance: 'Maintenance Service',
      advice: 'Request Consultation',
      contact: 'Contact',
      address: 'Allrütiweg 9, CH-6343 Rotkreuz',
      copyright: '2024 ATec Systems. Premium Ajax Partner.',
      impressum: 'Imprint',
      privacy: 'Data Protection',
      agb: 'Terms and Conditions'
    },
    home: {
      tagline: 'System Status',
      secured: 'SECURE',
      ctaConsult: 'Book a Consultation',
      ctaCatalog: 'View Catalog'
    },
    about: {
      tag: 'ATec Systems',
      title: 'Company Profile',
      intro: 'At ATec Systems, we believe security should never be a compromise. As a certified specialist, we combine technical precision with digital innovation.',
      history: '',
      stats: {
        years: 'Years of Expertise',
        projects: 'Projects Completed'
      },
      teamTitle: 'Leadership & Expertise',
      teamSub: 'We leverage flat hierarchies and concentrated expertise across all security domains.',
      roles: ['Owner', 'Owner'],
      founded: {
        tag: 'History',
        title: 'Our Foundation & History',
        subtitle: 'Three decades in the service of security.',
        content: [
          'ATec-Systems stands for reliable, sophisticated, and practical security solutions. As an independent enterprise, we design, distribute, install, and maintain modern security systems in the fields of intrusion protection, fire protection, and video surveillance.',
          'Our customers come from the private sector, commerce, industry, warehouse logistics, as well as the hotel and hospitality industry. In all these areas, security, business continuity, trust, and reliability are crucial factors—values that shape the daily work of ATec-Systems.',
          'Both firm owners have been active in the security industry since 1994 and possess many years of experience in planning, implementing, and managing demanding security concepts. This profound expertise forms the foundation of our work and enables solutions that are technically mature, standard-compliant, and sustainable. Your security is our motivation.',
          'Our claim is not to deliver standardized systems, but to realize individually tailored security solutions. Whether a single-family home, commercial enterprise, production facility, warehouse, or hotel operation—each property has its own requirements for the protection of people, assets, and infrastructure. We attach great importance to personal consultation, careful risk analysis, and precise planning.',
          'ATec-Systems accompanies its customers throughout the entire life cycle of a security system—from the initial analysis and conception to professional installation, regular maintenance, on-call service, and long-term support. In doing so, we exclusively rely on proven, high-quality systems and components that meet today\'s security and quality standards.',
          'Security technology is a matter of trust. Our clients rely on the installed systems to function dependably and provide protection when it matters most. Trust is built through honesty, transparency, and professional competence. Reliability is demonstrated through clean execution, timely implementation, and partnership-based support even after installation.',
          'As an independent enterprise, we stand for short decision-making processes, personal responsibility, and direct accessibility. Our customers appreciate having a constant contact person, high flexibility, and our consistent commitment to quality. Discretion, sustainability, and continuous training are a matter of course for us.',
          'ATec-Systems – Security built on experience, supported by trust and reliability.'
        ],
        milestones: [
          { year: '2025', title: 'Ajax Partnership', desc: 'Beginning of our exclusive partnership with AJAX Systems.' },
          { year: '2026', title: 'Holistic Solutions', desc: 'Introduction of new, comprehensive security concepts.' }
        ]
      }
    },
    products: {
      bannerTag: 'ATec Starter Set',
      bannerTitle: 'One System. Maximum Security.',
      bannerDesc: 'Get the award-winning security package from ATec Systems. All components are perfectly synchronized and ready for immediate deployment.',
      icons: {
        central: 'Hub',
        sensors: 'Sensors',
        cameras: 'Cameras',
        app: 'App Control'
      },
      catalogTag: 'Hardware Catalog',
      catalogTitle: 'Individual Components',
      filterAll: 'All',
      certified: 'ATec Certified',
      details: 'Details'
    },
    solutions: {
      tag: 'Fields of Application',
      title: 'Security for Every Sector',
      subtitle: 'From private residences to complex industrial facilities – we design the perfect protective shield.',
      features: ['24/7 Monitoring', 'Encrypted Wireless Transmission', 'Intuitive App Control'],
      cta: 'Request Concept',
      desc: 'Seamless protection against burglary, vandalism, and environmental hazards. Our Ajax-based solutions integrate effortlessly and scale with your needs.',
      commercialDesc: 'For commercial and retail businesses, we offer reliable burglary protection with cutting-edge wireless technology. The system provides real-time alerts, app control, and video verification for maximum security. Featuring tamper protection and flexible scalability, it is the ideal professional solution from Ajax Systems.',
      industrialDesc: 'For industrial and warehouse facilities, we provide comprehensive perimeter protection, reliable intrusion detection, and seamless monitoring of sensitive areas. The system supports real-time alerting, access control, and video verification to secure machinery, stock, and logistics zones.',
      hospitalityDesc: 'For hotels and gastronomy, we offer integrated security with a focus on fire protection, early leak detection, and intelligent surveillance. Smoke, heat, and water detectors protect guest rooms and kitchens reliably. Discreet video monitoring ensures security for entrances and reception areas.'
    },
    services: {
      tag: 'Full Service',
      title: 'Your Path to Protection',
      subtitle: 'From first consultation to turnkey delivery – we manage your security project end-to-end.',
      whyTitle: 'Why Professionals Choose ATec Systems',
      support: 'Support Hotline',
      steps: [
        { title: 'On-site Analysis', desc: 'We identify vulnerabilities in your property – precisely and discreetly.' },
        { title: 'Project Planning', desc: 'Bespoke security concepts designed to VdS standards.' },
        { title: 'Clean Installation', desc: 'Professional installation without disruption thanks to wireless technology.' },
        { title: 'Ongoing Support', desc: 'We remain your partner for maintenance and remote monitoring.' }
      ],
      reasons: [
        { title: 'Certified & Listed', desc: 'Official Ajax partner and VdS-compliant system planning.' },
        { title: 'Rapid Installation', desc: 'Full system deployment typically completed within one business day.' },
        { title: 'Intuitive Control', desc: 'Monitor all sensors via the award-winning smartphone app.' }
      ]
    },
    contact: {
      tag: 'Contact',
      title: 'Start Your Planning.',
      subtitle: 'We will design a non-binding security offer tailored to your home or business.',
      labels: {
        phone: 'Call Us',
        email: 'Email',
        headquarters: 'Headquarters',
        name: 'Name',
        interest: 'Interest',
        message: 'Message'
      },
      placeholders: {
        name: 'Full Name',
        message: 'How can we help you?'
      },
      interests: [
        'General Inquiry',
        'Intrusion Detection',
        'Fire Protection',
        'Video Surveillance',
        'Comprehensive Security'
      ],
      submit: 'Send Inquiry',
      successTitle: 'Inquiry Received!',
      successDesc: 'We will respond to your request within 24 hours.',
      newMsg: 'Send Another Message'
    },
    legal: {
      tag: 'Legal',
      title: 'Imprint',
      provider: 'Provider Identification',
      represented: 'Represented by',
      representatives: 'Stefan Gössi, Philipp Schwerzmann, both as Owners',
      contact: 'Contact',
      register: 'Register Entry',
      vat: 'VAT Identification Number',
      disclaimer: 'Disclaimer',
      disclaimerText: 'Despite careful content control, we assume no liability for the content of external links. The operators of linked sites are solely responsible for their content.'
    },
    agbPage: {
      tag: 'Legal',
      title: 'Terms and Conditions'
    },
    privacy: {
      tag: 'Legal',
      title: 'Data Protection',
      section1Title: '1. Privacy at a Glance',
      section1Sub: 'General Information',
      section1Text: 'The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data that can be used to identify you personally.',
      section2Title: '2. Data Collection on Our Website',
      section2Sub: 'Who is responsible?',
      section2Text: 'Data processing on this website is carried out by the website operator.',
      section3Title: '3. Your Rights',
      section3Text: 'You have the right at any time to receive information about the origin, recipient, and purpose of your stored personal data free of charge.',
      cookiesTitle: 'Cookies and Similar Technologies',
      cookiesText: 'We use cookies and similar technologies to enhance user experience and ensure the security of our website. These technologies help us understand how visitors interact with our website.',
      securityTitle: 'Security Note',
      securityText: 'Please note that data transmission over the internet can have security vulnerabilities. Absolute protection of data against access by third parties is not possible.'
    },
    cookieBanner: {
      text: 'We use cookies and similar technologies to enhance the user experience on our website, analyze our traffic, and personalize content and advertising.',
      link: 'Data Protection',
      accept: 'Accept'
    },
    assistant: {
      name: 'ATec AI Assistant',
      greeting: 'Good day! I am your AI consultant from ATec Systems. How can I assist you with your security needs today?',
      placeholder: 'Ask a question...',
      error: 'I apologize, I was unable to generate a response.',
      connError: 'There was a connection error. Please try again later.',
      quotaError: 'The AI Assistant is currently paused due to missing Google Cloud API Quota (Billing not activated). Please contact us directly via the contact form.'
    }
  }
};
