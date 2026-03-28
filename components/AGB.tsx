import React from 'react';
import { translations, Language } from '../translations';

const AGB: React.FC<{ isDark: boolean; lang: Language }> = ({ isDark, lang }) => {
  const t = translations[lang].agbPage;

  return (
    <div className={`py-32 transition-colors min-h-screen ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">{t?.tag || 'AGB'}</span>
          <h1 className={`text-3xl md:text-5xl font-black mb-8 tracking-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>{t?.title || 'Allgemeine Geschäftsbedingungen'}</h1>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className={`space-y-12 text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          <section>
            <p className="font-medium opacity-80 italic">
              1.	Anwendungsbereich
              Die vorliegenden Allgemeinen Geschäftsbedingungen (AGB) regeln den Verkauf, die Lieferung, Installation sowie die Wartung von Sicherheits- und Überwachungssystemen durch ATec-Systems und sind integrierender Bestandteil sämtlicher Verträge zwischen ATec-Systems und ihren Kunden.
              2.	Vertragsabschluss
              Angebote von ATec-Systems sind, sofern nicht ausdrücklich anders vereinbart, ab Ausstellungsdatum maximal drei Monate gültig. Angaben in Katalogen, Preislisten, Prospekten, Zeichnungen und ähnlichen Unterlagen sind unverbindlich. Ein Vertrag kommt zustande durch schriftliche Bestellung des Kunden, durch schriftliche Auftragsbestätigung von ATec-Systems oder durch einen von beiden Parteien unterzeichneten Werkvertrag.
              3.	Leistungen
              ATec-Systems liefert und installiert qualitativ hochwertige Sicherheitsanlagen nach dem jeweils aktuellen Stand der Technik. Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Vertragsinhalt. ATec-Systems behält sich vor, anstelle der ursprünglich bestellten Produkte neuere Versionen zu liefern, sofern diese funktionell gleichwertig oder besser sind. Ergänzungen, Zusätze oder Änderungen nach Vertragsabschluss werden separat in Rechnung gestellt.
              Die Lieferung erfolgt auf Rechnung und Gefahr des Bestellers. Verzögert sich die Lieferung auf Wunsch des Kunden oder aus Gründen, welche ATec-Systems nicht zu vertreten hat, geht die Gefahr zum ursprünglich vorgesehenen Lieferzeitpunkt auf den Kunden über.
              4.	Leistungen des Kunden
              Der Kunde ist verantwortlich für die Koordination sämtlicher am Projekt beteiligten Unternehmen. Er stellt sicher, dass alle baulich notwendigen sowie vertraglich vereinbarten Vorleistungen fach- und termingerecht ausgeführt werden. Der Kunde informiert ATec-Systems rechtzeitig über den Baufortschritt. Durch Verzögerungen oder mangelhafte Vorleistungen entstehende Umtriebe und Mehrkosten werden dem Kunden in Rechnung gestellt.
              Der Kunde hat geeignete und zumutbare Massnahmen zu treffen, um Schäden an den gelieferten Anlagen zu verhindern. Eine sach- und gesetzeskonforme Anwendung der Systeme wird vorausgesetzt.
              5.	Preise, Preisanpassungen und Zahlungsbedingungen
              Alle Preise verstehen sich in Schweizer Franken (CHF).
              ATec-Systems ist zurzeit nicht Mehrwertsteuerpflichtig, weshalb bei der Rechnungsstellung keine Mehrwertsteuer ausgewiesen wird. Abzüge vom Rechnungsbetrag sind nicht zulässig.
              Zahlungsmodalitäten:
              Die von ATec-Systems gestellten Rechnungen sind innerhalb der auf der Rechnung angedruckten bzw. ersichtlichen Zahlungsfrist zu begleichen.
              Bei Nichteinhaltung der Zahlungstermine ist ohne Mahnung ein Verzugszins gemäss den gesetzlichen Bestimmungen geschuldet.
              ATec-Systems ist berechtigt, Vorauszahlungen zu verlangen. Werden Zahlungen nicht vertragsgemäss geleistet, ist ATec-Systems berechtigt, am Vertrag festzuhalten oder vom Vertrag zurückzutreten und in beiden Fällen Schadenersatz zu verlangen.
              Bei ausserordentlichen, nicht vorhersehbaren Umständen im Sinne von Art. 373 Abs. 2 OR ist ATec-Systems berechtigt, Preisanpassungen vorzunehmen sowie Teuerungen und erhöhte Lieferantenpreise weiterzuverrechnen.
              6.	Eigentumsvorbehalt
              Die gelieferten Anlagen bleiben bis zur vollständigen Bezahlung Eigentum von ATec-Systems.
              ATec-Systems ist berechtigt, den Eigentumsvorbehalt auf Kosten des Kunden im öffentlichen Register eintragen zu lassen.
              7.	Produktegarantie
              Die Produktegarantie beträgt, sofern nichts anderes vereinbart wurde, 24 Monate[PS1.1] ab Lieferung. Verzögert sich die Lieferung aus Gründen, die ATec-Systems nicht zu vertreten hat, beginnt die Garantiefrist im Zeitpunkt der Lieferbereitschaft.
              Mängel sind innerhalb der Garantiefrist schriftlich zu melden. Während der Garantiezeit ersetzt ATec-Systems fehlerhaftes Material kostenlos. Dienstleistungen sind von der Garantie ausgeschlossen.
              ATec-Systems entscheidet nach eigenem Ermessen über Nachbesserung oder Ersatzlieferung. Die Garantiefrist wird durch Nachbesserungen nicht unterbrochen.
              Von der Garantie ausgeschlossen sind Schäden infolge natürlicher Abnützung, unsachgemässer Anwendung, mangelnder Wartung, äusserer Einwirkungen, Eingriffe durch Dritte oder anderer Gründe, welche ATec-Systems nicht zu vertreten hat.
              8.	Haftung
              ATec-Systems gewährt gegenüber dem Kunden die unter Ziffer 7 genannten Garantien. Die Garantie ergibt sich im Einzelnen aus den Leistungsbeschrieben. Bei Abschluss eines Wartungsvertrages gelten die darin vereinbarten Garantien. ATec-Systems haftet nur für grobfahrlässig verursachte Schäden. ATec-Systems haftet nicht für Arbeiten durch Drittfirmen. Alle weiteren Haftungsansprüche gegenüber ATec-Systems, gleich aus welchem Rechtsgrund, soweit gesetzlich zulässig, werden ausgeschlossen. ATec-Systems kann insbesondere auch nicht für Schäden oder Folgeschäden wie nachfolgend und nicht abschliessend aufgezählt haftbar gemacht werden:
              •	Polizei-, Feuerwehr- und Alarmempfänger-Einsätze
              •	die vom Kunden zu veranlassenden Sicherheitsmassnahmen, bei teilweiser oder vollständiger Ausserbetriebsetzung der Anlage, auch infolge von Instandstellungsarbeiten
              •	Störungen oder Versagen der Anlage
              •	Unsachgemässe Anwendung durch den Kunden oder Drittpersonen
              •	Für Glasschäden infolge Wartungsarbeiten/Funktionstests
              •	direkt oder indirekte Folgen von Fehlalarmen
              •	entgangener Gewinn oder Ansprüche Dritter



              •	Fehlauslösungen von Löschanlagen (Löschmittelersatz und Folgeschäden)
              •	den Einsatz von Bewachungspersonal
              •	Kostenersatz aufgrund von Mehraufwendungen des Anlagebetreibers oder Dritter
              •	Körper-, Sach- und Vermögensschäden infolge Einbruchs, Überfall oder dergleichen
              •	Beeinträchtigung der Funktionen der Anlage infolge baulicher Veränderungen
              •	Schäden infolge eines Datenverlustes; die Datenarchivierung obliegt dem Kunden
              •	Etc.
              Führt ATec-Systems im Auftrag des Kunden Installationsarbeiten aus, so obliegt
              die Haftung und Instandstellung für entstandene Schäden oder Beschädigungen wie
              verdeckte Leitungen, Bohrarbeiten oder Durchbrüche, beim Kunden. ATec-Systems
              übernimmt keine Haftung für verspätete Lieferungen, sofern die Verspätung
              durch einen Dritten oder höhere Gewalt verursacht wurde.
              9.	Besondere Bestimmungen Geistiges Eigentum
              Sämtliche Anlagenkonzepte, Softwareprogramme, Dokumentationen und technischen Unterlagen bleiben geistiges Eigentum von ATec-Systems. Der Kunde erhält ein nicht übertragbares Nutzungsrecht für die Dauer des Vertragsverhältnisses.
              Der Kunde erhält das Recht, die Anlage und die Dokumentation für die
              Vertragslaufzeit zu nutzen. Sofern nichts anderes vereinbart, ist der Besteller nicht
              berechtigt, die Anlage oder Teile der Anlage nachzubauen oder durch einen Dritten
              nachbauen zu lassen, zugehörige Softwareprogramme und- oder Dokumentationen
              zu kopieren oder vervielfältigen oder Dritten zugänglich machen oder diese zu
              veröffentlichen.
              10.	Salvatorische Klausel
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung wird durch eine solche ersetzt, die dem wirtschaftlichen Zweck am nächsten kommt.
              11.	Anwendbares Recht und Gerichtsstand
              Der Vertrag untersteht schweizerischem Recht. Gerichtsstand ist Zug im
              Kanton Zug

            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AGB;
