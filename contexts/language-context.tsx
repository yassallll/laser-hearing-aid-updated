"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "de" | "en";

// German is the base: keys come from translations.de
const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.technology": "Technologie",
    "nav.products": "Produkte",
    "nav.about": "Über uns",
    "nav.investors": "Investoren",
    "nav.contact": "Kontakt",

    // Home Page
    "home.hero.title": "Hören mit Licht",
    "home.hero.subtitle": "",
    "home.hero.description":
      "Projekt LAHA entwickelt ein neuartiges, laserbasiertes Hörsystem, das Schall direkt am Trommelfell erzeugt – ohne Lautsprecher, ohne Druckgefühl.",
    "home.hero.cta": "Erfahren Sie mehr über unsere Technologie",
    "home.quote":
      "Unsere Vision ist es, Hören neu zu definieren – durch eine Technologie, die Präzision und Schonung vereint.",
    "home.mission.title": "Unsere Mission",
    "home.mission.text":
      "Menschen mit Hörminderung eine echte Alternative zu klassischen Hörgeräten zu bieten – komfortabel, hautfreundlich und technologisch wegweisend. Projekt LAHA verbindet Medizintechnik, Biophysik und Laserinnovation zu einer Lösung, die Lebensqualität verbessert und neue Maßstäbe in der Audiologie setzt.",
    "home.benefits.title": "Hauptvorteile",
    "home.benefit1.title": "Präzise Klangübertragung",
    "home.benefit1.text":
      "Direkte Schallerzeugung am Trommelfell für natürliches Hören",
    "home.benefit2.title": "Kein Lautsprecher",
    "home.benefit2.text": "Kein Druck, keine Reizungen – maximaler Komfort",
    "home.benefit3.title": "Rückkopplungsfrei",
    "home.benefit3.text":
      "Lasertechnologie eliminiert akustische Rückkopplungen",
    "home.benefit4.title": "Schonend & Hautfreundlich",
    "home.benefit4.text": "Geeignet für empfindliche Gehörgänge",
    "home.cta.title": "Interesse an unserer Forschung?",
    "home.cta.text":
      "Kontaktieren Sie uns, um mehr über Projekt LAHA und Partnerschaftsmöglichkeiten zu erfahren.",
    "home.cta.button": "Kontakt aufnehmen",

    // Technology Page
    "tech.hero.title": "Revolutionäre Lasertechnologie für das Hören",
    "tech.hero.description":
      "LAHA stellt einen Durchbruch in der Hörhilfentechnologie dar. Durch fortschrittliche Laserstimulation aktiviert unser Gerät direkt die Strukturen des Mittel- und Innenohrs und umgeht traditionelle Verstärkungsmethoden für ein natürlicheres Hörerlebnis.",
    "tech.philosophy.title": "Unsere Innovationsphilosophie",
    "tech.philosophy.text":
      "Wir glauben, dass Hörtechnologie mit Ihrem Körper arbeiten sollte, nicht gegen ihn. Durch die Verwendung von Laserlicht zur Stimulation der natürlichen Strukturen des Ohrs liefert LAHA eine Klangwahrnehmung, die dem natürlichen Hören näher kommt als je zuvor möglich.",
    "tech.how.works.title": "Wie LAHA funktioniert",
    "tech.how.works.subtitle":
      "Die Schlüsseltechnologien, die laserbasiertes Hören möglich machen",
    "tech.laser.stimulation": "Laser-Stimulation",
    "tech.laser.desc":
      "Verwendet sicheres, stromsparendes Laserlicht zur direkten Stimulation des Trommelfells und der Mittelohrstrukturen, wodurch mechanische Schwingungen erzeugt werden, die das Innenohr in Schallsignale umwandelt.",
    "tech.bone.conduction": "Integration der Knochenleitung",
    "tech.bone.desc":
      "Kombiniert Laserstimulation mit Knochenleitungswegen und stellt sicher, dass Schall die Cochlea durch mehrere natürliche Wege erreicht, um Klarheit und Wahrnehmung zu verbessern.",
    "tech.non.invasive": "Nicht-invasives Design",
    "tech.non.invasive.desc":
      "Vollständig externes Gerät, das keine Operation oder Implantation erfordert. Der Laser wird präzise positioniert, um den optimalen Stimulationspunkt an der Ohranatomie anzusprechen.",
    "tech.digital.processing": "Digitale Signalverarbeitung",
    "tech.digital.desc":
      "Fortschrittliche Algorithmen wandeln akustische Signale in präzise modulierte Laserpulse um und bewahren Frequenzinformationen und Klangeigenschaften während der gesamten Übertragung.",
    "tech.breakthrough.title": "Der LAHA-Durchbruch",
    "tech.breakthrough.p1":
      "Traditionelle Hörgeräte verstärken Schallwellen durch Luft, was Verzerrungen, Rückkopplungen und ein unnatürliches Hörerlebnis verursachen kann. LAHA verfolgt einen grundlegend anderen Ansatz, indem es Lasertechnologie verwendet, um das Trommelfell und die Gehörknöchelchen (Mittelohrknochen) direkt zu vibrieren und den natürlichen Hörprozess nachzuahmen.",
    "tech.breakthrough.p2":
      "Dieser Durchbruch ist das Ergebnis jahrelanger Forschung am Universitätsklinikum des Saarlandes, die Expertise in Hals-Nasen-Ohren-Heilkunde, Photonik und biomedizinischer Technik kombiniert. Unser interdisziplinäres Team hat ein Gerät entwickelt, das sowohl wissenschaftlich fortschrittlich als auch praktisch anwendbar ist.",
    "tech.breakthrough.p3":
      "Frühe Tests zeigen, dass Benutzer eine signifikant verbesserte Klangqualität, reduzierte Rückkopplungen und ein natürlicheres Hörgefühl im Vergleich zu herkömmlichen Hörgeräten erleben. Die Technologie ist besonders effektiv bei Schallleitungsschwerhörigkeit und Mittelohrerkrankungen.",
    "tech.research.development": "Forschung & Entwicklung",
    "tech.research.intro":
      "Projekt LAHA ist eine laufende Forschungsinitiative am Universitätsklinikum des Saarlandes, die durch akademische Zuschüsse und institutionelle Unterstützung finanziert wird. Unsere Arbeit fördert sowohl klinische Anwendungen als auch das grundlegende Verständnis optoakustischer Phänomene im menschlichen Gehör.",
    "tech.stat1": "5+ Jahre",
    "tech.stat1.label": "Forschungsdauer",
    "tech.stat2": "Mehrere",
    "tech.stat2.label": "Patentanmeldungen",
    "tech.stat3": "International",
    "tech.stat3.label": "Forschungskooperationen",
    "tech.focus.areas": "Unsere Forschungsschwerpunkte",
    "tech.focus1":
      "Lasersicherheitsparameter und optimale Wellenlängenauswahl für Ohrstimulation",
    "tech.focus2":
      "Präzisionsziel-Systeme für genaue Laserpositionierung auf dem Trommelfell",
    "tech.focus3":
      "Integration von Laser- und Knochenleitungswegen für hybride Hörlösungen",
    "tech.focus4":
      "Klinische Studien mit Patienten, die unter Schallleitungs- und Schallempfindungsschwerhörigkeit leiden",
    "tech.focus5":
      "Miniaturisierung von Laserkomponenten für komfortables, tragbares Design",
    "tech.focus6":
      "Langzeit-Wirksamkeitsstudien und Optimierung der Benutzererfahrung",
    "tech.specs.overview": "Technische Übersicht",
    "tech.spec.method": "Stimulationsmethode",
    "tech.spec.method.value": "Klasse 1 Niedrigleistungslaser",
    "tech.spec.target": "Zielbereich",
    "tech.spec.target.value": "Trommelfell & Gehörknöchelchen",
    "tech.spec.delivery": "Liefersystem",
    "tech.spec.delivery.value": "Laser + Knochenleitung Hybrid",
    "tech.spec.safety": "Sicherheitsklassifizierung",
    "tech.spec.safety.value": "Nicht-invasiv, CE ausstehend",
    "tech.spec.processing": "Klangverarbeitung",
    "tech.spec.processing.value": "Digitalsignal zu Lasermodulation",
    "tech.spec.application": "Anwendung",
    "tech.spec.application.value":
      "Schallleitungs- & gemischte Schwerhörigkeit",
    "tech.spec.design": "Design",
    "tech.spec.design.value": "Externes tragbares Gerät",
    "tech.spec.phase": "Entwicklungsphase",
    "tech.spec.phase.value": "Klinische Forschungsphase",
    "tech.regulatory.title": "Regulatorischer Status & Compliance",
    "tech.regulatory.text":
      "Als Medizinprodukt in der Entwicklung durchläuft LAHA strenge Sicherheits- und Wirksamkeitstests, die für die behördliche Zulassung erforderlich sind. Wir halten uns an alle anwendbaren Medizinproduktestandards und -vorschriften.",
    "tech.cert1": "CE-Kennzeichnung (in Bearbeitung)",
    "tech.cert2": "ISO 13485 konform",
    "tech.cert3": "Klinische Studienphase",
    "tech.cert4": "Akademische Forschung genehmigt",
    "tech.disclaimer.strong": "Medizinischer Haftungsausschluss:",
    "tech.disclaimer.content":
      "Die Laser-Hörhilfe (LAHA) befindet sich derzeit in der Entwicklung und ist noch nicht kommerziell erhältlich oder für den klinischen Einsatz zugelassen. Die bereitgestellten Informationen dienen ausschließlich Bildungs- und Forschungszwecken und ersetzen keine professionelle medizinische Beratung.",
    "tech.cta.journey": "Begleiten Sie unsere Forschungsreise",
    "tech.cta.interested":
      "Interessiert an der Teilnahme an klinischen Studien oder möchten Sie mehr über die LAHA-Technologie erfahren? Kontaktieren Sie unser Forschungsteam, um Möglichkeiten zur Zusammenarbeit und Beteiligung zu erkunden.",
    "tech.cta.contact": "Forschungsteam kontaktieren",
    "tech.cta.team": "Erfahren Sie mehr über unser Team",

    // Products Page
    "products.hero.title": "Laser-Hörhilfe-System",
    "products.hero.subtitle": "In Entwicklung",
    "products.hero.description":
      "Ein laserbasiertes Hörsystem, das Schall direkt am Trommelfell erzeugt – präzise, komfortabel und schonend für empfindliche Ohren.",
    "products.status.title": "Entwicklungsstatus",
    "products.status.current": "Aktuelle Phase",
    "products.status.current.text": "Laborprototyp (tragbare Version)",
    "products.status.next": "Nächste Phase",
    "products.status.next.text": "Tragbarer, batteriebetriebener Prototyp",
    "products.what.title": "Was macht es besonders",
    "products.feature1":
      "Einzigartige, patentierte Laser-Technologie zur direkten Schallerzeugung",
    "products.feature2":
      "Kein Lautsprecher im Gehörgang → maximaler Tragekomfort",
    "products.feature3":
      "Keine Rückkopplungen, präzise und natürliche Klangwiedergabe",
    "products.feature4":
      "Kombination aus bewährter Signalverarbeitung und optischer Innovation",
    "products.feature5": "Neues Wirkprinzip im Markt der Hörtechnologie",
    "products.target.title": "Zielgruppe",
    "products.target1": "Erwachsene mit leichter bis mittlerer Hörminderung",
    "products.target2":
      "Personen mit Hautreizungen, Allergien oder anatomischen Problemen bei herkömmlichen Hörgeräten",
    "products.target3":
      "Menschen, die Wert auf Komfort, Innovation und Natürlichkeit legen",
    "products.specs.title": "Technische Daten",
    "products.disclaimer.title": "Medizinischer Hinweis",
    "products.disclaimer.text":
      "Das LAHA-System ist ein Forschungsprototyp in der Entwicklung. Es ist noch nicht CE-zertifiziert oder für den kommerziellen Einsatz zugelassen. Alle Spezifikationen sind vorläufig und können sich ändern.",
    "products.cert.title": "Regulatorischer Status",
    "products.cert1": "Patent: Light activated hearing device (WO2010086453A1)",
    "products.cert2": "CE-Zertifizierung in Vorbereitung",
    "products.cert3": "Qualitätsmanagementsystem nach ISO 13485",
    "products.cta.title": "Mehr erfahren?",
    "products.cta.button": "Beratungsgespräch vereinbaren",

    // About Page
    "about.hero.title": "Über Projekt LAHA",
    "about.hero.description":
      "Projekt LAHA – Laser-Hörhilfen ist eine bahnbrechende Forschungsinitiative am Universitätsklinikum des Saarlandes, die eine revolutionäre laserbasierte Hörhilfe entwickelt, die das Trommelfell und die Mittelohrstrukturen direkt stimuliert. Wir sind Pioniere der Zukunft der Hörtechnologie durch innovative Forschung und Medizinprodukteentwicklung.",
    "about.mission.title": "Unsere Mission",
    "about.mission.text":
      "Die Hörhilfentechnologie zu revolutionieren, indem wir eine nicht-invasive, laserbasierte Lösung entwickeln, die überlegene Klangqualität, erhöhten Komfort und eine verbesserte Benutzererfahrung für Menschen mit Hörverlust bietet.",
    "about.story.title": "Unsere Geschichte",
    "about.story.p1":
      "Projekt LAHA wurde am Universitätsklinikum des Saarlandes ins Leben gerufen, wo ein Team engagierter Forscher und medizinischer Fachkräfte die Grenzen konventioneller Hörgeräte erkannte. Traditionelle Geräte verlassen sich auf externe Mikrofone und Lautsprecher, die unbequem, sichtbar und anfällig für Umgebungseinflüsse sein können. Wir haben uns eine bessere Lösung vorgestellt – eine, die Lasertechnologie nutzt, um das Trommelfell und die Mittelohrstrukturen direkt zu stimulieren.",
    "about.story.p2":
      "Unsere Forschung konzentrierte sich auf die Entwicklung eines Prototyp-Geräts, das Schallwellen über Laserlicht überträgt und traditionelle akustische Transduktionsmethoden umgeht. Dieser innovative Ansatz bietet das Potenzial für klarere Klangqualität, verbesserte Spracherkennung in lauten Umgebungen und eine diskretere, komfortablere Benutzererfahrung. Derzeit führen wir erste Tests durch und arbeiten auf klinische Studien für die behördliche Zulassung hin.",
    "about.story.p3":
      "Mit Sitz in Homburg, Saar, Deutschland, vereint unser Team Fachkenntnisse in Hals-Nasen-Ohren-Heilkunde, biomedizinischer Technik und Medizinprodukteentwicklung. Wir sind strengen Forschungsstandards, regulatorischer Compliance und letztendlich der Bereitstellung dieser revolutionären Technologie für Patienten verpflichtet, die sie am meisten benötigen. Obwohl die Laser-Hörhilfe noch in der Entwicklung und noch nicht kommerziell erhältlich ist, sind wir bestrebt, diese Technologie durch alle Phasen der Forschung, Tests und Zertifizierung voranzutreiben.",
    "about.values.title": "Unsere Werte",
    "about.values.subtitle":
      "Die Prinzipien, die unsere Forschung und Entwicklung leiten",
    "about.value1.title": "Innovation",
    "about.value1.desc":
      "Pionierarbeit bei Lasertechnologie für Hörgeräte, Erweiterung der Grenzen der Medizinprodukteentwicklung",
    "about.value2.title": "Wissenschaftliche Genauigkeit",
    "about.value2.desc":
      "Durchführung gründlicher Forschung und klinischer Studien mit höchsten medizinischen und regulatorischen Standards",
    "about.value3.title": "Patientenzentriert",
    "about.value3.desc":
      "Fokus auf verbesserten Komfort, Diskretion und Lebensqualität für Menschen mit Hörverlust",
    "about.location.title": "Unser Forschungszentrum",
    "about.location.subtitle":
      "Ansässig am Universitätsklinikum des Saarlandes in Homburg, Deutschland",
    "about.location.name": "Universitätsklinikum des Saarlandes",
    "about.location.address1": "Kirrbergerstr. Gebäude 6",
    "about.location.address2": "66421 Homburg / Saar, Deutschland",
    "about.location.phone": "Telefon",
    "about.location.email": "E-Mail",
    "about.location.project.email": "Projekt E-Mail",
    "about.location.hours": "Arbeitszeiten",
    "about.location.hours.text": "Montag – Freitag, 09:00 – 17:00 MEZ",
    "about.location.note":
      "(Forschung & Prototypenentwicklung, nur nach Vereinbarung)",
    "about.timeline.title": "Unsere Forschungsreise",
    "about.timeline.2020.title": "Projektstart",
    "about.timeline.2020.desc":
      "Forschung begann am Universitätsklinikum des Saarlandes zur Erforschung laserbasierter Hörhilfenkonzepte",
    "about.timeline.2022.title": "Prototypenentwicklung",
    "about.timeline.2022.desc":
      "Erster funktionaler Laser-Hörhilfen-Prototyp entwickelt und erste Labortests durchgeführt",
    "about.timeline.2024.title": "Forschungsfortschritt",
    "about.timeline.2024.desc":
      "Verfeinertes Prototyp-Design, Einleitung der regulatorischen Compliance-Planung für CE-Zertifizierung",
    "about.timeline.2025.title": "Vorbereitung klinischer Studien",
    "about.timeline.2025.desc":
      "Vorbereitung auf klinische Studien und Arbeit an Medizinprodukte-Zertifizierung und -Zulassung",
    "about.cta.title": "Werden Sie Teil unserer Forschungsreise",
    "about.cta.text":
      "Interessiert daran, mehr über unsere Laser-Hörhilfen-Technologie zu erfahren oder mit unserem Forschungsteam zusammenzuarbeiten? Kontaktieren Sie uns noch heute.",
    "about.cta.button1": "Kontaktieren Sie uns",
    "about.cta.button2": "Erfahren Sie mehr über unsere Technologie",

    // Investors Page
    "investors.hero.title": "Forschungs- & Investmentmöglichkeit",
    "investors.hero.description":
      "Projekt LAHA repräsentiert einen bahnbrechenden Ansatz zur Hörwiederherstellung durch Lasertechnologie. Als universitätsbasierte Forschungsinitiative am Universitätsklinikum des Saarlandes entwickeln wir das weltweit erste laserbasierte Hörhilfensystem.",
    "investors.highlights.title": "Projekt-Highlights",
    "investors.highlight1.label": "Forschungsphase",
    "investors.highlight1.value": "Fortgeschritten",
    "investors.highlight1.period": "Prototyp-Entwicklung",
    "investors.highlight2.label": "Technologie",
    "investors.highlight2.value": "Neuartig",
    "investors.highlight2.period": "Laser-Stimulation",
    "investors.highlight3.label": "Zielmarkt",
    "investors.highlight3.value": "€10Mrd+",
    "investors.highlight3.period": "Globale Hörhilfen",
    "investors.highlight4.label": "Innovation",
    "investors.highlight4.value": "Weltweit Erste",
    "investors.highlight4.period": "Laserbasiertes System",
    "investors.opportunities.title":
      "Investment- & Partnerschaftsmöglichkeiten",
    "investors.opp1.title": "Wachsender Weltmarkt",
    "investors.opp1.desc":
      "Der globale Hörhilfenmarkt wird voraussichtlich €10 Milliarden überschreiten, angetrieben durch alternde Bevölkerungen und zunehmendes Bewusstsein für Hörgesundheit. Projekt LAHA bietet eine revolutionäre Alternative zu traditionellen akustischen Geräten.",
    "investors.opp2.title": "Durchbruch-Technologie",
    "investors.opp2.desc":
      "Unsere proprietäre Laser-Stimulationstechnologie bringt das Trommelfell und die Mittelohrstrukturen direkt in Schwingung und umgeht die Einschränkungen konventioneller Hörgeräte. Dies stellt einen Paradigmenwechsel in der Hörwiederherstellung dar.",
    "investors.opp3.title": "Starke akademische Grundlage",
    "investors.opp3.desc":
      "Mit Sitz am Universitätsklinikum des Saarlandes kombiniert unsere Forschung modernste biomedizinische Technik mit klinischer Expertise. Wir profitieren von erstklassigen Einrichtungen und erfahrenen Forschungsteams.",
    "investors.opp4.title": "Klarer Weg zum Markt",
    "investors.opp4.desc":
      "Wir durchlaufen systematische Entwicklungsphasen in Richtung CE-Zertifizierung und klinischer Studien. Strategische Partnerschaften können die Kommerzialisierung beschleunigen und diese Innovation weltweit zu Patienten bringen.",
    "investors.status.title": "Aktueller Entwicklungsstand",
    "investors.status.project": "Projektinformationen",
    "investors.status.institution": "Institution",
    "investors.status.institution.value": "Universitätsklinikum des Saarlandes",
    "investors.status.project.name": "Projektname",
    "investors.status.project.value": "LAHA - Laser Hörhilfen",
    "investors.status.technology": "Technologie",
    "investors.status.technology.value": "Laser-Stimulationssystem",
    "investors.status.category": "Kategorie",
    "investors.status.category.value": "Medizinprodukt-Forschung",
    "investors.status.development": "Entwicklungsphase",
    "investors.status.current": "Aktuelle Phase",
    "investors.status.current.value": "Prototyp-Entwicklung",
    "investors.status.next": "Nächster Meilenstein",
    "investors.status.next.value": "Präklinische Tests",
    "investors.status.target": "Ziel",
    "investors.status.target.value": "CE-Zertifizierung",
    "investors.status.timeline": "Zeitplan",
    "investors.status.timeline.value": "2025-2027",
    "investors.status.note":
      "Hinweis: Projekt LAHA befindet sich derzeit in der Forschungs- und Entwicklungsphase. Noch nicht kommerziell verfügbar oder klinisch zugelassen.",
    "investors.governance.title": "Forschungs-Governance",
    "investors.governance.description":
      "Projekt LAHA arbeitet nach den strengen ethischen und wissenschaftlichen Standards des Universitätsklinikums des Saarlandes. Wir sind der Transparenz, Forschungsintegrität und Einhaltung der EU-Medizinprodukteverordnungen verpflichtet.",
    "investors.governance1.title": "Ethikkommission",
    "investors.governance1.desc":
      "Alle Forschungsaktivitäten werden von der institutionellen Ethikkommission überprüft und genehmigt, um Patientensicherheit und Forschungsintegrität zu gewährleisten.",
    "investors.governance2.title": "Qualitätsstandards",
    "investors.governance2.desc":
      "Wir folgen den ISO 13485 Qualitätsmanagementsystemen für die Entwicklung und Herstellung von Medizinprodukten.",
    "investors.governance3.title": "Regulatorische Compliance",
    "investors.governance3.desc":
      "Entwicklungsfahrplan abgestimmt auf die Anforderungen der EU-Medizinprodukteverordnung (MDR) für CE-Kennzeichnung und Marktzulassung.",
    "investors.events.title": "Forschungspräsentationen & Veranstaltungen",
    "investors.event1.title": "Internationale Hörtechnologie-Konferenz 2025",
    "investors.event1.date": "Geplant für Q3 2025",
    "investors.event1.desc":
      "Präsentation vorläufiger Ergebnisse und Prototyp-Demonstration auf führender internationaler Konferenz zur Hörwiederherstellungstechnologie.",
    "investors.event2.title": "Investor- & Partner-Informationssitzungen",
    "investors.event2.date": "Nach Vereinbarung",
    "investors.event2.desc":
      "Private Präsentationen für potenzielle Forschungspartner, Investoren und Gesundheitseinrichtungen, die an der LAHA-Technologieplattform interessiert sind.",
    "investors.event3.title": "Akademische Publikationen & Symposien",
    "investors.event3.date": "Laufend",
    "investors.event3.desc":
      "Regelmäßige Veröffentlichung von Forschungsergebnissen in peer-reviewed Zeitschriften und Präsentationen auf wissenschaftlichen Konferenzen, um Fortschritte mit der medizinischen Gemeinschaft zu teilen.",
    "investors.contact.title": "Partnerschafts- & Investitionsanfragen",
    "investors.contact.description":
      "Für Partnerschaftsmöglichkeiten, Investitionsanfragen oder detaillierte Projektinformationen kontaktieren Sie bitte unser Forschungskoordinierungsteam.",
    "investors.contact.email": "E-Mail",
    "investors.contact.phone": "Telefon",
    "investors.contact.location": "Standort",
    "investors.contact.location.value": "Homburg, Deutschland",
    "investors.contact.hours":
      "Arbeitszeiten: Montag – Freitag, 09:00 – 17:00 MEZ",
    "investors.contact.note":
      "(Forschung & Prototyp-Entwicklung, nur nach Vereinbarung)",

    // Contact Page
    "contact.hero.title": "Kontakt Projekt LAHA",
    "contact.hero.description":
      "Haben Sie Fragen zu unserer Laser-Hörgeräte-Forschung? Wir sind hier, um mit Forschern, potenziellen Partnern und Interessenten in Kontakt zu treten.",
    "contact.methods.research.title": "Forschungsanfragen",
    "contact.methods.research.email": "E-Mail: projekt-laha@uni-saarland.de",
    "contact.methods.research.hours": "Mo-Fr: 09:00 - 17:00 MEZ",
    "contact.methods.research.type": "Forschung & Entwicklung",
    "contact.methods.direct.title": "Direkter Kontakt",
    "contact.methods.direct.phone": "Telefon: +49 (0) 6841 / 1612901",
    "contact.methods.direct.hours": "Mo-Fr: 09:00 - 17:00 MEZ",
    "contact.methods.direct.email": "E-Mail: Larissa.Schatteburg@uks.eu",
    "contact.methods.partnership.title": "Partnerschaft",
    "contact.methods.partnership.email": "E-Mail: projekt-laha@uni-saarland.de",
    "contact.methods.partnership.hours": "Nur nach Vereinbarung",
    "contact.methods.partnership.type": "Kooperationsmöglichkeiten",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.description":
      "Füllen Sie das untenstehende Formular aus und wir werden uns innerhalb von 1-2 Werktagen bei Ihnen melden",
    "contact.form.inquiryType": "Art der Anfrage",
    "contact.form.inquiryType.general": "Allgemeine Anfrage",
    "contact.form.inquiryType.research": "Forschungszusammenarbeit",
    "contact.form.inquiryType.partnership": "Partnerschaftsmöglichkeit",
    "contact.form.inquiryType.media": "Medienanfrage",
    "contact.form.inquiryType.technical": "Technische Fragen",
    "contact.form.inquiryType.investor": "Investitionsinteresse",
    "contact.form.name": "Vollständiger Name",
    "contact.form.email": "E-Mail-Adresse",
    "contact.form.phone": "Telefonnummer",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.submit": "Nachricht senden",
    "contact.form.gdpr":
      "Mit dem Absenden dieses Formulars stimmen Sie unserer DSGVO-konformen Datenschutzerklärung zu",
    "contact.location.title": "Unser Standort",
    "contact.location.research.title": "Forschungszentrum",
    "contact.location.research.badge": "Hauptbüro",
    "contact.location.research.name": "Projekt LAHA – Laser-Hörgeräte",
    "contact.location.research.hospital": "Universitätsklinikum des Saarlandes",
    "contact.location.research.building": "Kirrbergerstr. Gebäude 6",
    "contact.location.research.postal": "66421 Homburg / Saar",
    "contact.location.research.country": "Deutschland",
    "contact.location.research.phone": "Telefon",
    "contact.location.research.email": "E-Mail",
    "contact.location.research.hours": "Öffnungszeiten",
    "contact.location.research.hoursValue":
      "Montag - Freitag, 09:00 - 17:00 MEZ",
    "contact.location.lead.title": "Projektleitung Kontakt",
    "contact.location.lead.email": "E-Mail",
    "contact.location.lead.phone": "Telefon",
    "contact.location.lead.note":
      "Für Forschungskooperationen und Partnerschaftsanfragen",
    "contact.location.social.title": "Verbinden Sie sich mit uns (Demnächst)",
    "contact.location.social.linkedin": "LinkedIn - Projekt-Updates",
    "contact.location.social.researchgate":
      "ResearchGate - Wissenschaftliche Veröffentlichungen",
    "contact.location.social.youtube": "YouTube - Erklärvideos",
    "contact.location.map.title": "Universitätsklinikum des Saarlandes",
    "contact.location.map.subtitle": "Homburg / Saar, Deutschland",
    "contact.location.map.link": "Auf Google Maps anzeigen →",
    "contact.faq.title": "Häufig gestellte Fragen",
    "contact.faq.description":
      "Schnelle Antworten auf häufige Fragen zu Projekt LAHA",
    "contact.faq.q1.question": "Was sind Ihre Arbeitszeiten?",
    "contact.faq.q1.answer":
      "Unser Forschungsteam ist von Montag bis Freitag von 09:00 bis 17:00 Uhr MEZ erreichbar. Für Anfragen außerhalb dieser Zeiten senden Sie bitte eine E-Mail und wir werden innerhalb von 1-2 Werktagen antworten.",
    "contact.faq.q2.question":
      "Wie kann ich Ihre Forschungseinrichtung besuchen?",
    "contact.faq.q2.answer":
      "Besuche unserer Forschungseinrichtung am Universitätsklinikum des Saarlandes sind nur nach Vereinbarung möglich. Bitte kontaktieren Sie uns per E-Mail, um einen Besuch für Forschungskooperationen oder Partnergespräche zu vereinbaren.",
    "contact.faq.q3.question": "Ist das Laser-Hörgerät zum Kauf erhältlich?",
    "contact.faq.q3.answer":
      "Nein, das LAHA-System befindet sich derzeit in der Forschungs- und Entwicklungsphase. Es ist noch nicht kommerziell erhältlich oder für die klinische Anwendung zugelassen. Wir werden unsere Website aktualisieren, sobald wir Fortschritte in Richtung CE-Zertifizierung und Marktverfügbarkeit machen.",
    "contact.faq.q4.question": "Wie kann ich an dieser Forschung mitarbeiten?",
    "contact.faq.q4.answer":
      "Wir begrüßen Anfragen zur Zusammenarbeit von akademischen Einrichtungen, Forschungsorganisationen und Industriepartnern. Bitte kontaktieren Sie uns unter projekt-laha@uni-saarland.de mit Details zu Ihren Interessen und Fachkenntnissen.",
    "contact.faq.q5.question":
      "Bieten Sie Unterstützung in anderen Sprachen als Englisch und Deutsch an?",
    "contact.faq.q5.answer":
      "Derzeit sind unsere primären Kommunikationssprachen Englisch und Deutsch. Für Anfragen in anderen Sprachen kontaktieren Sie uns bitte und wir werden unser Bestes tun, um Ihre Bedürfnisse zu erfüllen.",
    "contact.gdpr.title": "Datenschutz & Privatsphäre",
    "contact.gdpr.description":
      "Wir halten uns an die Datenschutz-Grundverordnung (DSGVO) der Europäischen Union",
    "contact.gdpr.p1":
      "Personenbezogene Daten (z. B. Namen, E-Mail-Adressen), die über Kontaktformulare erfasst werden, werden nur für die Kommunikation im Zusammenhang mit Projekt LAHA verwendet und nicht an Dritte weitergegeben.",
    "contact.gdpr.p2":
      'Wir befolgen das Prinzip der "Datenminimierung" und verwenden nur notwendige Cookies (kein Tracking ohne Einwilligung). Unsere Website wird auf EU-basierten Servern für Compliance und Sicherheit gehostet.',
    "contact.gdpr.p3":
      "Sie können jederzeit die Löschung Ihrer Daten anfordern, indem Sie eine E-Mail an",
    "contact.disclaimer.title": "Medizinischer Haftungsausschluss",
    "contact.disclaimer.p1":
      "Das Laser-Hörgerät (LAHA) ist ein medizinisches Gerät, das sich derzeit in der Entwicklung befindet. Es ist noch nicht kommerziell erhältlich oder für die klinische Anwendung zugelassen.",
    "contact.disclaimer.p2":
      "Alle Informationen auf dieser Website dienen nur zu Bildungs- und Forschungszwecken und ersetzen keine professionelle medizinische Beratung, Diagnose oder Behandlung.",
    "contact.disclaimer.cta": "Forschungsteam kontaktieren",

    // Footer
    "footer.tagline": "Hören neu denken – präzise. schonend. laserbasiert.",
    "footer.quickLinks": "Schnelllinks",
    "footer.aboutUs": "Über uns",
    "footer.products": "Produkte",
    "footer.technology": "Technologie",
    "footer.contact": "Kontakt",
    "footer.resources": "Ressourcen",
    "footer.investors": "Investoren",
    "footer.patentInfo": "Patentinfo",
    "footer.support": "Unterstützung",
    "footer.contactTitle": "Kontakt",
    "footer.copyright":
      "Project LAHA – Laser-Hörhilfen. Alle Rechte vorbehalten.",
  },

  // English must match German keys exactly:
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.technology": "Technology",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.investors": "Investors",
    "nav.contact": "Contact",

    // Home Page
    "home.hero.title": "Hearing with light",
    "home.hero.subtitle": "",
    "home.hero.description":
      "Project LAHA develops a novel laser-based hearing system that generates sound directly at the eardrum—without a speaker or pressure in the ear canal.",
    "home.hero.cta": "Learn About Our Technology",
    "home.quote":
      "Our vision is to redefine hearing by merging precision with gentleness.",
    "home.mission.title": "Our Mission",
    "home.mission.text":
      "To offer people with hearing impairments a truly innovative alternative to traditional hearing aids—comfortable, skin-friendly, and technologically groundbreaking. Project LAHA combines medical technology, biophysics, and laser innovation to enhance quality of life and set new standards in audiology.",
    "home.benefits.title": "Key Benefits",
    "home.benefit1.title": "Precise Sound Transmission",
    "home.benefit1.text":
      "Direct sound generation at the eardrum for natural hearing",
    "home.benefit2.title": "No Speaker Design",
    "home.benefit2.text": "No pressure, no irritation—maximum comfort",
    "home.benefit3.title": "Feedback-Free",
    "home.benefit3.text": "Laser technology eliminates acoustic feedback",
    "home.benefit4.title": "Gentle & Skin-Friendly",
    "home.benefit4.text": "Suitable for sensitive ear canals",
    "home.cta.title": "Interested in Our Research?",
    "home.cta.text":
      "Contact us to learn more about Project LAHA and partnership opportunities.",
    "home.cta.button": "Get in Touch",

    // Technology Page (aligned to DE structure)
    "tech.hero.title": "Revolutionary Laser Technology for Hearing",
    "tech.hero.description":
      "LAHA represents a breakthrough in hearing-assistive technology. By using advanced laser stimulation, our device directly activates middle-ear structures and bypasses traditional amplification methods for a more natural listening experience.",
    "tech.philosophy.title": "Our Innovation Philosophy",
    "tech.philosophy.text":
      "We believe hearing technology should work with your body, not against it. By using laser light to stimulate the ear’s natural structures, LAHA delivers sound perception closer to natural hearing than previously possible.",
    "tech.how.works.title": "How LAHA Works",
    "tech.how.works.subtitle":
      "The key technologies that make laser-based hearing possible",
    "tech.laser.stimulation": "Laser Stimulation",
    "tech.laser.desc":
      "Uses safe, low-power laser light to stimulate the eardrum and middle-ear structures, generating mechanical vibrations that the inner ear converts into auditory signals.",
    "tech.bone.conduction": "Bone-Conduction Integration",
    "tech.bone.desc":
      "Combines laser stimulation with bone-conduction pathways, helping sound reach the cochlea through multiple natural routes to improve clarity and perception.",
    "tech.non.invasive": "Non-Invasive Design",
    "tech.non.invasive.desc":
      "A fully external device that requires no surgery or implantation. The laser is precisely positioned to target the optimal stimulation point on the ear anatomy.",
    "tech.digital.processing": "Digital Signal Processing",
    "tech.digital.desc":
      "Advanced algorithms convert audio signals into precisely modulated laser pulses, preserving frequency information and sound characteristics during transmission.",
    "tech.breakthrough.title": "The LAHA Breakthrough",
    "tech.breakthrough.p1":
      "Traditional hearing aids amplify airborne sound, which can cause distortion, feedback, and an unnatural listening experience. LAHA takes a fundamentally different approach by using laser technology to directly vibrate the eardrum and ossicles, mimicking the natural hearing process.",
    "tech.breakthrough.p2":
      "This breakthrough is the result of years of research at Saarland University Hospital, combining expertise in ENT medicine, photonics, and biomedical engineering. Our interdisciplinary team has developed a device that is both scientifically advanced and practically applicable.",
    "tech.breakthrough.p3":
      "Early tests indicate users experience significantly improved sound quality, reduced feedback, and a more natural listening sensation compared with conventional hearing aids. The technology is particularly effective for conductive hearing loss and middle-ear conditions.",
    "tech.research.development": "Research & Development",
    "tech.research.intro":
      "Project LAHA is an ongoing research initiative at Saarland University Hospital, supported by academic grants and institutional resources. Our work advances both clinical applications and fundamental understanding of optoacoustic phenomena in the human ear.",
    "tech.stat1": "5+ years",
    "tech.stat1.label": "Research duration",
    "tech.stat2": "Multiple",
    "tech.stat2.label": "Patent filings",
    "tech.stat3": "International",
    "tech.stat3.label": "Research collaborations",
    "tech.focus.areas": "Our Research Focus Areas",
    "tech.focus1":
      "Laser safety parameters and optimal wavelength selection for ear stimulation",
    "tech.focus2":
      "Precision targeting systems for accurate laser positioning on the eardrum",
    "tech.focus3":
      "Integration of laser and bone-conduction pathways for hybrid hearing solutions",
    "tech.focus4":
      "Clinical studies with patients experiencing conductive and sensorineural hearing loss",
    "tech.focus5":
      "Miniaturization of laser components for comfortable wearable designs",
    "tech.focus6":
      "Long-term effectiveness studies and user-experience optimization",
    "tech.specs.overview": "Technical Overview",
    "tech.spec.method": "Stimulation method",
    "tech.spec.method.value": "Class 1 low-power laser",
    "tech.spec.target": "Target area",
    "tech.spec.target.value": "Eardrum & ossicles",
    "tech.spec.delivery": "Delivery system",
    "tech.spec.delivery.value": "Laser + bone-conduction hybrid",
    "tech.spec.safety": "Safety classification",
    "tech.spec.safety.value": "Non-invasive, CE pending",
    "tech.spec.processing": "Sound processing",
    "tech.spec.processing.value": "Digital audio to laser modulation",
    "tech.spec.application": "Application",
    "tech.spec.application.value": "Conductive & mixed hearing loss",
    "tech.spec.design": "Design",
    "tech.spec.design.value": "External wearable device",
    "tech.spec.phase": "Development phase",
    "tech.spec.phase.value": "Clinical research phase",
    "tech.regulatory.title": "Regulatory Status & Compliance",
    "tech.regulatory.text":
      "As a medical device under development, LAHA undergoes rigorous safety and efficacy testing required for regulatory approval. We follow all applicable medical device standards and regulations.",
    "tech.cert1": "CE marking (in progress)",
    "tech.cert2": "ISO 13485 compliant",
    "tech.cert3": "Clinical study phase",
    "tech.cert4": "Academic research approved",
    "tech.disclaimer.strong": "Medical disclaimer:",
    "tech.disclaimer.content":
      "The Laser Hearing Aid (LAHA) is currently under development and is not yet commercially available or approved for clinical use. The information provided is for educational and research purposes only and does not replace professional medical advice.",
    "tech.cta.journey": "Join our research journey",
    "tech.cta.interested":
      "Interested in participating in clinical studies or learning more about LAHA technology? Contact our research team to explore collaboration and involvement opportunities.",
    "tech.cta.contact": "Contact the research team",
    "tech.cta.team": "Learn more about our team",

    // Products Page
    "products.hero.title": "Laser Hearing Aid System",
    "products.hero.subtitle": "Under Development",
    "products.hero.description":
      "A laser-based hearing system that generates sound directly at the eardrum—precise, comfortable, and gentle for sensitive ears.",
    "products.status.title": "Development Status",
    "products.status.current": "Current stage",
    "products.status.current.text": "Laboratory prototype (portable version)",
    "products.status.next": "Next phase",
    "products.status.next.text": "Wearable, battery-powered prototype",
    "products.what.title": "What Makes It Special",
    "products.feature1":
      "Unique, patented laser technology for direct sound generation",
    "products.feature2":
      "No speaker in the ear canal → maximum wearing comfort",
    "products.feature3": "No feedback, precise and natural sound reproduction",
    "products.feature4":
      "Combines proven signal processing with optical innovation",
    "products.feature5": "A new operating principle in hearing technology",
    "products.target.title": "Target Audience",
    "products.target1": "Adults with mild to moderate hearing loss",
    "products.target2":
      "People with skin irritation, allergies, or anatomical issues with conventional hearing aids",
    "products.target3":
      "Individuals who prioritize comfort, innovation, and natural sound quality",
    "products.specs.title": "Technical Specifications",
    "products.disclaimer.title": "Medical Notice",
    "products.disclaimer.text":
      "The LAHA system is a research prototype under development. It is not yet CE-certified or approved for commercial use. All specifications are preliminary and subject to change.",
    "products.cert.title": "Regulatory Status",
    "products.cert1": "Patent: Light activated hearing device (WO2010086453A1)",
    "products.cert2": "CE certification in preparation",
    "products.cert3": "Quality management system compliant with ISO 13485",
    "products.cta.title": "Want to Learn More?",
    "products.cta.button": "Schedule a Consultation",

    // About Page
    "about.hero.title": "About Project LAHA",
    "about.hero.description":
      "Project LAHA – Laser Hearing Aids is a groundbreaking research initiative at Saarland University Hospital developing a revolutionary laser-based hearing aid that directly stimulates the eardrum and middle-ear structures. We are pioneering the future of hearing technology through innovative research and medical device development.",
    "about.mission.title": "Our Mission",
    "about.mission.text":
      "To revolutionize hearing aid technology by developing a non-invasive, laser-based solution that offers superior sound quality, enhanced comfort, and an improved user experience for individuals with hearing loss.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Project LAHA was founded at Saarland University Hospital, where a team of dedicated researchers and medical professionals recognized the limitations of conventional hearing aids. Traditional devices rely on external microphones and speakers that can be uncomfortable, visible, and susceptible to environmental interference. We envisioned a better solution—one that uses laser technology to directly stimulate the eardrum and middle-ear structures.",
    "about.story.p2":
      "Our research has focused on developing a prototype device that transmits sound via laser light, bypassing traditional acoustic transduction methods. This approach offers the potential for clearer sound, improved speech recognition in noisy environments, and a more discreet, comfortable user experience. We are currently conducting initial testing and preparing clinical studies for regulatory approval.",
    "about.story.p3":
      "Based in Homburg, Saar, Germany, our team combines expertise in ENT medicine, biomedical engineering, and medical device development. We are committed to rigorous research standards, regulatory compliance, and ultimately bringing this technology to patients who need it most. While LAHA is still under development and not commercially available, we are advancing through each stage of research, testing, and certification.",
    "about.values.title": "Our Values",
    "about.values.subtitle":
      "The principles guiding our research and development",
    "about.value1.title": "Innovation",
    "about.value1.desc":
      "Pioneering laser technology for hearing aids and pushing medical device development boundaries",
    "about.value2.title": "Scientific Rigor",
    "about.value2.desc":
      "Conducting thorough research and clinical studies to the highest medical and regulatory standards",
    "about.value3.title": "Patient-Centered",
    "about.value3.desc":
      "Focusing on comfort, discretion, and quality of life for people with hearing loss",
    "about.location.title": "Our Research Center",
    "about.location.subtitle":
      "Based at Saarland University Hospital in Homburg, Germany",
    "about.location.name": "Saarland University Hospital",
    "about.location.address1": "Kirrbergerstr. Building 6",
    "about.location.address2": "66421 Homburg / Saar, Germany",
    "about.location.phone": "Phone",
    "about.location.email": "Email",
    "about.location.project.email": "Project Email",
    "about.location.hours": "Working Hours",
    "about.location.hours.text": "Monday – Friday, 09:00 – 17:00 CET",
    "about.location.note":
      "(Research & prototype development, by appointment only)",
    "about.timeline.title": "Our Research Journey",
    "about.timeline.2020.title": "Project Initiation",
    "about.timeline.2020.desc":
      "Research began at Saarland University Hospital exploring laser-based hearing aid concepts",
    "about.timeline.2022.title": "Prototype Development",
    "about.timeline.2022.desc":
      "First functional laser hearing aid prototype developed and initial laboratory testing conducted",
    "about.timeline.2024.title": "Research Advancement",
    "about.timeline.2024.desc":
      "Refined prototype design and initiated regulatory compliance planning for CE certification",
    "about.timeline.2025.title": "Clinical Trial Preparation",
    "about.timeline.2025.desc":
      "Preparing clinical studies and progressing toward medical device certification and approval",
    "about.cta.title": "Join Our Research Journey",
    "about.cta.text":
      "Interested in learning more about our laser hearing aid technology or collaborating with our research team? Get in touch today.",
    "about.cta.button1": "Contact Us",
    "about.cta.button2": "Learn About Our Technology",

    // Investors Page
    "investors.hero.title": "Research & Investment Opportunity",
    "investors.hero.description":
      "Project LAHA represents a groundbreaking approach to hearing restoration through laser technology. As a university-based research initiative at Saarland University Hospital, we are developing the world’s first laser-based hearing aid system.",
    "investors.highlights.title": "Project Highlights",
    "investors.highlight1.label": "Research phase",
    "investors.highlight1.value": "Advanced",
    "investors.highlight1.period": "Prototype development",
    "investors.highlight2.label": "Technology",
    "investors.highlight2.value": "Novel",
    "investors.highlight2.period": "Laser stimulation",
    "investors.highlight3.label": "Target market",
    "investors.highlight3.value": "€10B+",
    "investors.highlight3.period": "Global hearing aids",
    "investors.highlight4.label": "Innovation",
    "investors.highlight4.value": "World first",
    "investors.highlight4.period": "Laser-based system",
    "investors.opportunities.title": "Investment & Partnership Opportunities",
    "investors.opp1.title": "Growing Global Market",
    "investors.opp1.desc":
      "The global hearing aid market is projected to exceed €10 billion, driven by aging populations and increasing awareness of hearing health. Project LAHA offers a revolutionary alternative to traditional acoustic devices.",
    "investors.opp2.title": "Breakthrough Technology",
    "investors.opp2.desc":
      "Our proprietary laser stimulation technology directly vibrates the eardrum and middle-ear structures, bypassing limitations of conventional hearing aids. This represents a paradigm shift in hearing restoration.",
    "investors.opp3.title": "Strong Academic Foundation",
    "investors.opp3.desc":
      "Based at Saarland University Hospital, our research combines cutting-edge biomedical engineering with clinical expertise. We benefit from world-class facilities and experienced research teams.",
    "investors.opp4.title": "Clear Path to Market",
    "investors.opp4.desc":
      "We are progressing through systematic development phases toward CE certification and clinical studies. Strategic partnerships can accelerate commercialization and bring this innovation to patients worldwide.",
    "investors.status.title": "Current Development Status",
    "investors.status.project": "Project information",
    "investors.status.institution": "Institution",
    "investors.status.institution.value": "Saarland University Hospital",
    "investors.status.project.name": "Project name",
    "investors.status.project.value": "LAHA - Laser Hearing Aids",
    "investors.status.technology": "Technology",
    "investors.status.technology.value": "Laser stimulation system",
    "investors.status.category": "Category",
    "investors.status.category.value": "Medical device research",
    "investors.status.development": "Development phase",
    "investors.status.current": "Current stage",
    "investors.status.current.value": "Prototype development",
    "investors.status.next": "Next milestone",
    "investors.status.next.value": "Pre-clinical testing",
    "investors.status.target": "Target",
    "investors.status.target.value": "CE certification",
    "investors.status.timeline": "Timeline",
    "investors.status.timeline.value": "2025–2027",
    "investors.status.note":
      "Note: Project LAHA is currently in the research and development phase. Not yet commercially available or clinically approved.",
    "investors.governance.title": "Research Governance",
    "investors.governance.description":
      "Project LAHA operates under the strict ethical and scientific standards of Saarland University Hospital. We are committed to transparency, research integrity, and compliance with EU medical device regulations.",
    "investors.governance1.title": "Ethics committee",
    "investors.governance1.desc":
      "All research activities are reviewed and approved by the institutional ethics committee to ensure patient safety and research integrity.",
    "investors.governance2.title": "Quality standards",
    "investors.governance2.desc":
      "We follow ISO 13485 quality management standards for medical device development and manufacturing processes.",
    "investors.governance3.title": "Regulatory compliance",
    "investors.governance3.desc":
      "Our development roadmap is aligned with EU Medical Device Regulation (MDR) requirements for CE marking and market approval.",
    "investors.events.title": "Research Presentations & Events",
    "investors.event1.title":
      "International Hearing Technology Conference 2025",
    "investors.event1.date": "Planned for Q3 2025",
    "investors.event1.desc":
      "Presenting preliminary findings and a prototype demonstration at a leading international conference on hearing restoration technology.",
    "investors.event2.title": "Investor & Partner Information Sessions",
    "investors.event2.date": "By appointment",
    "investors.event2.desc":
      "Private presentations for potential research partners, investors, and healthcare institutions interested in the LAHA technology platform.",
    "investors.event3.title": "Academic Publications & Symposia",
    "investors.event3.date": "Ongoing",
    "investors.event3.desc":
      "Regular publication of research findings in peer-reviewed journals and presentations at scientific conferences to share progress with the medical community.",
    "investors.contact.title": "Partnership & Investment Inquiries",
    "investors.contact.description":
      "For partnership opportunities, investment inquiries, or detailed project information, please contact our research coordination team.",
    "investors.contact.email": "Email",
    "investors.contact.phone": "Phone",
    "investors.contact.location": "Location",
    "investors.contact.location.value": "Homburg, Germany",
    "investors.contact.hours":
      "Working hours: Monday – Friday, 09:00 – 17:00 CET",
    "investors.contact.note":
      "(Research & prototype development, by appointment only)",

    // Contact Page
    "contact.hero.title": "Contact Project LAHA",
    "contact.hero.description":
      "Questions about our laser hearing-aid research? We are here to connect with researchers, potential partners, and interested parties.",
    "contact.methods.research.title": "Research Inquiries",
    "contact.methods.research.email": "Email: projekt-laha@uni-saarland.de",
    "contact.methods.research.hours": "Mon–Fri: 09:00 – 17:00 CET",
    "contact.methods.research.type": "Research & Development",
    "contact.methods.direct.title": "Direct Contact",
    "contact.methods.direct.phone": "Phone: +49 (0) 6841 / 1612901",
    "contact.methods.direct.hours": "Mon–Fri: 09:00 – 17:00 CET",
    "contact.methods.direct.email": "Email: Larissa.Schatteburg@uks.eu",
    "contact.methods.partnership.title": "Partnership",
    "contact.methods.partnership.email": "Email: projekt-laha@uni-saarland.de",
    "contact.methods.partnership.hours": "By appointment only",
    "contact.methods.partnership.type": "Collaboration opportunities",
    "contact.form.title": "Send Us a Message",
    "contact.form.description":
      "Fill out the form below and we will get back to you within 1–2 business days",
    "contact.form.inquiryType": "Inquiry type",
    "contact.form.inquiryType.general": "General inquiry",
    "contact.form.inquiryType.research": "Research collaboration",
    "contact.form.inquiryType.partnership": "Partnership opportunity",
    "contact.form.inquiryType.media": "Media inquiry",
    "contact.form.inquiryType.technical": "Technical questions",
    "contact.form.inquiryType.investor": "Investment interest",
    "contact.form.name": "Full name",
    "contact.form.email": "Email address",
    "contact.form.phone": "Phone number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.gdpr":
      "By submitting this form, you agree to our GDPR-compliant data protection policy",
    "contact.location.title": "Our Location",
    "contact.location.research.title": "Research Center",
    "contact.location.research.badge": "Main office",
    "contact.location.research.name": "Project LAHA – Laser Hearing Aids",
    "contact.location.research.hospital": "Saarland University Hospital",
    "contact.location.research.building": "Kirrbergerstr. Building 6",
    "contact.location.research.postal": "66421 Homburg / Saar",
    "contact.location.research.country": "Germany",
    "contact.location.research.phone": "Phone",
    "contact.location.research.email": "Email",
    "contact.location.research.hours": "Hours",
    "contact.location.research.hoursValue":
      "Monday – Friday, 09:00 – 17:00 CET",
    "contact.location.lead.title": "Project Lead Contact",
    "contact.location.lead.email": "Email",
    "contact.location.lead.phone": "Phone",
    "contact.location.lead.note":
      "For research collaboration and partnership inquiries",
    "contact.location.social.title": "Connect With Us (Coming Soon)",
    "contact.location.social.linkedin": "LinkedIn - Project updates",
    "contact.location.social.researchgate":
      "ResearchGate - Scientific publications",
    "contact.location.social.youtube": "YouTube - Explainer videos",
    "contact.location.map.title": "Saarland University Hospital",
    "contact.location.map.subtitle": "Homburg / Saar, Germany",
    "contact.location.map.link": "View on Google Maps →",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.description":
      "Quick answers to common questions about Project LAHA",
    "contact.faq.q1.question": "What are your working hours?",
    "contact.faq.q1.answer":
      "Our research team is available Monday through Friday, 09:00 to 17:00 CET. For inquiries outside these hours, please send an email and we will respond within 1–2 business days.",
    "contact.faq.q2.question": "How can I visit your research facility?",
    "contact.faq.q2.answer":
      "Visits to our research facility at Saarland University Hospital are by appointment only. Please contact us via email to schedule a visit for research collaboration or partnership discussions.",
    "contact.faq.q3.question":
      "Is the laser hearing aid available for purchase?",
    "contact.faq.q3.answer":
      "No. The LAHA system is currently in the research and development phase. It is not yet commercially available or approved for clinical use. We will update our website as we progress toward CE certification and market availability.",
    "contact.faq.q4.question": "How can I collaborate on this research?",
    "contact.faq.q4.answer":
      "We welcome collaboration inquiries from academic institutions, research organizations, and industry partners. Please contact us at projekt-laha@uni-saarland.de with details about your interests and expertise.",
    "contact.faq.q5.question":
      "Do you offer support in languages other than English and German?",
    "contact.faq.q5.answer":
      "Currently, our primary communication languages are English and German. For inquiries in other languages, please contact us and we will do our best to accommodate your needs.",
    "contact.gdpr.title": "Data Protection & Privacy",
    "contact.gdpr.description":
      "We comply with the General Data Protection Regulation (GDPR) of the European Union",
    "contact.gdpr.p1":
      "Personal data (e.g., names, email addresses) collected via contact forms is used only for communication related to Project LAHA and is not shared with third parties.",
    "contact.gdpr.p2":
      'We follow the "data minimization" principle and use only necessary cookies (no tracking without consent). Our website is hosted on EU-based servers for compliance and security.',
    "contact.gdpr.p3":
      "You can request deletion of your data at any time by emailing",
    "contact.disclaimer.title": "Medical Disclaimer",
    "contact.disclaimer.p1":
      "The Laser Hearing Aid (LAHA) is a medical device currently under development. It is not yet commercially available or approved for clinical use.",
    "contact.disclaimer.p2":
      "All information on this website is for educational and research purposes only and does not replace professional medical advice, diagnosis, or treatment.",
    "contact.disclaimer.cta": "Contact the research team",

    // Footer
    "footer.tagline": "Hearing with light",
    "footer.quickLinks": "Quick Links",
    "footer.aboutUs": "About Us",
    "footer.products": "Products",
    "footer.technology": "Technology",
    "footer.contact": "Contact",
    "footer.resources": "Resources",
    "footer.investors": "Investors",
    "footer.patentInfo": "Patent Info",
    "footer.support": "Support",
    "footer.contactTitle": "Contact",
    "footer.copyright":
      "Project LAHA – Laser Hearing Aids. All rights reserved.",
  } satisfies Record<keyof typeof translations.de, string>,
} as const;

type TranslationKey = keyof typeof translations.de;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de"); // German as base/default

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "de") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "de" ? "en" : "de";
      localStorage.setItem("language", next);
      return next;
    });
  };

  const t = useMemo(() => {
    return (key: TranslationKey) => translations[language][key] ?? key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
