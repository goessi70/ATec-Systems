
/**
 * Zentrales Management für alle Bilder der ATec Systems Webseite.
 */

export const ASSETS = {
  custom: {
    ajaxOverview: "/assets/images/ajax-ema.png" 
  },
  home: {
    slides: [
      {
        id: 1,
        image: "https://i.imgur.com/nxZQD04.png",
        icon: "fa-house-shield",
        de: {
          title: "Willkommen bei ATec Systems",
          subtitle: "Ihre Sicherheit ist unsere Motivation.",
          description: "Mit unserer professionellen Unterstützung können Sie sich ganz auf Ihren Alltag konzentrieren. Dank moderner Sicherheitstechnik und zuverlässiger Betreuung gehören böse Überraschungen beim Heimkommen der Vergangenheit an.",
          tag: "WILLKOMMEN"
        },
        en: {
          title: "Welcome to ATec Systems",
          subtitle: "Your safety is our priority.",
          description: "With our professional support, you can focus entirely on your daily life. Thanks to advanced security technology and reliable monitoring, unexpected intrusions are a thing of the past.",
          tag: "WELCOME"
        }
      },
      {
        id: 2,
        image: "https://i.imgur.com/G1WEAgE.png",
        icon: "fa-shield-halved",
        de: {
          title: "Einbruchschutz",
          subtitle: "Zertifizierter Objektschutz von ATec Systems.",
          description: "Maximale Sicherheit durch das Ajax Jeweller Funkprotokoll. Das ATec Systems Set erkennt Einbruchsversuche in Millisekunden und alarmiert zuverlässig.",
          tag: "GRAD 3 SICHERHEIT"
        },
        en: {
          title: "Intrusion Protection",
          subtitle: "Certified property protection by ATec Systems.",
          description: "Maximum security through the Ajax Jeweller radio protocol. The ATec Systems bundle detects intrusion attempts in milliseconds and alerts reliably.",
          tag: "GRADE 3 SECURITY"
        }
      },
      {
        id: 3,
        image: "https://i.imgur.com/YLMwx01.png",
        icon: "fa-fire-alt",
        de: {
          title: "Brandschutz",
          subtitle: "Früherkennung rettet Leben.",
          description: "Die Ajax FireProtect 2 Serie überwacht Rauch, Hitze und Kohlenmonoxid. Vernetzte Melder garantieren Sicherheit im ganzen Haus.",
          tag: "DIN EN 14604"
        },
        en: {
          title: "Fire Protection",
          subtitle: "Early detection saves lives.",
          description: "The Ajax FireProtect 2 series monitors smoke, heat, and carbon monoxide. Interconnected detectors ensure safety across your entire property.",
          tag: "DIN EN 14604"
        }
      },
      {
        id: 4,
        image: "https://i.imgur.com/V0luPz1.png",
        icon: "fa-video",
        de: {
          title: "Videoüberwachung",
          subtitle: "Intelligente Objektanalyse.",
          description: "Scharfe 4K-Analytik mit KI-Objekterkennung. Unterscheiden Sie zwischen Menschen, Tieren und Fahrzeugen für präzise Überwachung.",
          tag: "4K KI-ANALYTIK"
        },
        en: {
          title: "Video Surveillance",
          subtitle: "Intelligent Object Analysis.",
          description: "Ultra-sharp 4K analytics with AI object recognition. Distinguish between people, animals, and vehicles for precise monitoring.",
          tag: "4K AI ANALYTICS"
        }
      }
    ]
  },
  about: {
    team: "https://i.imgur.com/NJZqknE.png",
    members: [
      { name: 'Philipp Schwerzmann', img: '/assets/images/philipp_schwerzmann.jpg' },
      { name: 'Stefan Gössi', img: '/assets/images/stefan_goessi.jpg' },
    ]
  },
  products: {
    hub: 'https://i.imgur.com/LF3cA29.png',
    motionCam: 'https://i.imgur.com/wkGbCt6.png',
    doorProtect: 'https://i.imgur.com/nPR5jvY.png',
    fireProtect: 'https://i.imgur.com/FoOT468.png',
    turretCam: 'https://i.imgur.com/OB6l021.png',
    keypad: 'https://i.imgur.com/9g3mjMn.png',
    list: [
      { 
        id: 1, category: 'Alarm', 
        de: { name: 'Superior Hub G3 Jeweller', desc: 'Kabellose Hub-Zentrale mit Fotoverifizierung. Anschliessbar über Ethernet, WLAN und zwei SIM-Karten (2G/LTE).' },
        en: { name: 'Superior Hub G3 Jeweller', desc: 'Wireless hub control panel with photo verification. Connects via Ethernet, Wi-Fi, and two SIM cards (2G/LTE).' },
        img: 'https://i.imgur.com/LF3cA29.png' 
      },
      { 
        id: 2, category: 'Alarm', 
        de: { name: 'Superior MotionCam (PhOD) Jeweller', desc: 'Kabelloser PIR-Bewegungsmelder mit einem Anti-Masking-System und erweiterten Möglichkeiten zur Fotoverifizierung.' },
        en: { name: 'Superior MotionCam (PhOD) Jeweller', desc: 'Wireless PIR motion detector with anti-masking and enhanced photo verification capabilities.' },
        img: 'https://i.imgur.com/wkGbCt6.png' 
      },
      { 
        id: 3, category: 'Alarm', 
        de: { name: 'Superior DoorProtect G3 Jeweller', desc: 'Kabelloser Öffnungsmelder mit Reedschalter, Erschütterungs- und Neigungssensoren sowie Fremdfeldüberwachung.' },
        en: { name: 'Superior DoorProtect G3 Jeweller', desc: 'Wireless opening detector with reed switch, impact and tilt sensors, and magnetic field monitoring.' },
        img: 'https://i.imgur.com/nPR5jvY.png' 
      },
      { 
        id: 4, category: 'Fire', 
        de: { name: 'FireProtect 2', desc: 'Detektiert Rauch, plötzliche Temperaturanstiege und Kohlenmonoxid.' },
        en: { name: 'FireProtect 2', desc: 'Detects smoke, sudden temperature spikes, and carbon monoxide.' },
        img: 'https://i.imgur.com/FoOT468.png' 
      },
      { 
        id: 5, category: 'Video', 
        de: { name: 'Ajax TurretCam', desc: 'Scharfe 4K-Auflösung mit AI-Objekterkennung für maximale Sicherheit.' },
        en: { name: 'Ajax TurretCam', desc: 'High-definition 4K resolution with AI object recognition for superior security.' },
        img: 'https://i.imgur.com/OB6l021.png' 
      },
      { 
        id: 6, category: 'Control', 
        de: { name: 'Superior KeyPad TouchScreen G3 Jeweller', desc: 'Funk-Bedienteil mit Touchscreen und Authentifizierung über Pass, Tag, Smartphone und Codes.' },
        en: { name: 'Superior KeyPad TouchScreen G3 Jeweller', desc: 'Wireless touch control panel with authentication via Pass, Tag, smartphone, and codes.' },
        img: 'https://i.imgur.com/9g3mjMn.png' 
      },
    ]
  },
  solutions: {
    home: 'https://i.imgur.com/PzR7vZJ.jpeg',
    retail: 'https://i.imgur.com/IMGsQty.png',
    industrial: 'https://i.imgur.com/gY2S0Nw.png',
    hotel: 'https://i.imgur.com/0u8M9rd.png',
  },
  services: {
    pro: "https://i.imgur.com/XhA6IRI.png"
  }
};
