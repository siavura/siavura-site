export type Locale = "en" | "it";

export const locales: Locale[] = ["en", "it"];

export const copy = {
  en: {
    nav: { home: "Home", solutions: "Solutions", projects: "Projects", about: "About", contact: "Contact", cta: "Work with SIAVURA" },
    hero: {
      eyebrow: "AI · Software · Intelligent Systems",
      title: "Intelligence in Action.",
      body: "We build intelligent systems and digital solutions that turn complex problems into meaningful action.",
      cue: "Scroll to discover",
    },
    intro: {
      kicker: "The idea behind SIAVURA",
      title: "Technology is not the goal. Understanding is.",
      body: "We do not start with technology. We start with the problem — then observe, understand and transform.",
    },
    stages: [
      {
        number: "01",
        title: "Perception",
        subtitle: "See what others overlook.",
        body: "Every transformation begins with seeing. We observe how businesses operate, where information gets lost, where time is wasted and where opportunities remain invisible. Before we build, we look.",
        image: "/images/perception.jpg",
      },
      {
        number: "02",
        title: "Understanding",
        subtitle: "Turn complexity into clarity.",
        body: "Seeing a problem is not enough. We connect information, processes, people and technology to understand what is really happening. We turn complexity into something that can be understood, measured and acted upon.",
        image: "/images/understanding.jpg",
      },
      {
        number: "03",
        title: "Transformation",
        subtitle: "Turn understanding into action.",
        body: "Understanding creates possibility. We transform ideas into digital systems, intelligent tools and practical solutions. From insight to execution.",
        image: "/images/transformation.jpg",
      },
    ],
    reveal: {
      kicker: "The signature",
      title: "Perceive. Understand. Transform.",
      body: "Three stages. One direction: intelligence that becomes action.",
      quote: "From perception to action.",
    },
    solutions: {
      kicker: "What we do",
      title: "Technology built around your business.",
      body: "SIAVURA brings together software, AI and digital systems to solve practical problems — without adding technology for technology’s sake.",
      items: [
        ["AI", "Intelligent assistants, knowledge systems and applied AI workflows."],
        ["Software", "Web applications, internal tools and product development."],
        ["Automation", "Processes that move faster with less repetitive work."],
        ["Data", "Dashboards, insights and systems that make information useful."],
        ["Digital", "Websites, digital experiences and business infrastructure."],
        ["Content", "Strategic visual and video systems for modern brands."],
      ],
    },
    projects: {
      kicker: "Projects",
      title: "Things we are building.",
      body: "Products and experiments built to solve real problems — and to keep pushing the boundary of what SIAVURA can create.",
      cmi: { label: "01 · Enterprise AI", title: "CMI — Company Memory Infrastructure", body: "Turning organizational knowledge into actionable intelligence." },
      expense: { label: "02 · Personal AI", title: "SIAVURA Expense", body: "A personal finance system designed to make spending understandable and actionable." },
      future: { label: "03 · Next", title: "More systems in progress.", body: "Client solutions, internal tools and new products will live here as they become real." },
      view: "Explore projects",
    },
    about: {
      kicker: "About",
      title: "Built by curiosity. Driven by technology.",
      body: "SIAVURA is an independent technology initiative founded by Vasile Buzura. The focus is simple: understand how something works, find what can improve, and build the system that makes the difference.",
      button: "About SIAVURA",
    },
    contact: {
      kicker: "Contact",
      title: "Have a problem worth solving?",
      body: "Let’s understand it.",
      email: "hello@siavura.com",
      button: "Work with SIAVURA",
    },
    footer: "AI · Software · Intelligent Systems",
  },
  it: {
    nav: { home: "Home", solutions: "Soluzioni", projects: "Progetti", about: "Chi siamo", contact: "Contatti", cta: "Lavora con SIAVURA" },
    hero: {
      eyebrow: "AI · Software · Intelligent Systems",
      title: "Intelligence in Action.",
      body: "Costruiamo sistemi intelligenti e soluzioni digitali che trasformano problemi complessi in azione concreta.",
      cue: "Scopri il percorso",
    },
    intro: {
      kicker: "L'idea di SIAVURA",
      title: "La tecnologia non è il fine. La comprensione lo è.",
      body: "Non partiamo dalla tecnologia. Partiamo dal problema — poi osserviamo, comprendiamo e trasformiamo.",
    },
    stages: [
      { number: "01", title: "Percezione", subtitle: "Vedere ciò che gli altri trascurano.", body: "Ogni trasformazione nasce dall'osservazione. Guardiamo come operano le aziende, dove si perdono informazioni, dove viene sprecato tempo e dove restano opportunità invisibili. Prima di costruire, osserviamo.", image: "/images/perception.jpg" },
      { number: "02", title: "Comprensione", subtitle: "Trasformare la complessità in chiarezza.", body: "Vedere un problema non basta. Colleghiamo informazioni, processi, persone e tecnologia per capire cosa sta realmente succedendo. Trasformiamo la complessità in qualcosa che può essere compreso, misurato e usato per agire.", image: "/images/understanding.jpg" },
      { number: "03", title: "Trasformazione", subtitle: "Portare la comprensione all'azione.", body: "La comprensione crea possibilità. Trasformiamo idee in sistemi digitali, strumenti intelligenti e soluzioni pratiche. Dalla visione all'esecuzione.", image: "/images/transformation.jpg" },
    ],
    reveal: { kicker: "La firma", title: "Percepisci. Comprendi. Trasforma.", body: "Tre fasi. Una direzione: intelligenza che diventa azione.", quote: "Dalla percezione all'azione." },
    solutions: {
      kicker: "Cosa facciamo", title: "Tecnologia costruita intorno al tuo business.", body: "SIAVURA unisce software, AI e sistemi digitali per risolvere problemi concreti — senza aggiungere tecnologia fine a sé stessa.",
      items: [["AI", "Assistenti intelligenti, sistemi di conoscenza e workflow con AI applicata."], ["Software", "Web app, strumenti interni e sviluppo di prodotti digitali."], ["Automazione", "Processi più veloci, con meno lavoro ripetitivo."], ["Dati", "Dashboard, insight e sistemi che rendono utile l'informazione."], ["Digital", "Siti web, esperienze digitali e infrastruttura aziendale."], ["Content", "Sistemi visuali e video per brand moderni."]],
    },
    projects: {
      kicker: "Progetti", title: "Quello che stiamo costruendo.", body: "Prodotti ed esperimenti nati per risolvere problemi reali — e per spingere sempre più avanti ciò che SIAVURA può creare.",
      cmi: { label: "01 · Enterprise AI", title: "CMI — Company Memory Infrastructure", body: "Trasformare la conoscenza organizzativa in intelligenza utilizzabile." },
      expense: { label: "02 · Personal AI", title: "SIAVURA Expense", body: "Un sistema di finanza personale pensato per rendere le spese comprensibili e azionabili." },
      future: { label: "03 · Next", title: "Altri sistemi in arrivo.", body: "Soluzioni per clienti, strumenti interni e nuovi prodotti compariranno qui quando diventeranno reali." },
      view: "Esplora i progetti",
    },
    about: { kicker: "Chi siamo", title: "Costruito dalla curiosità. Guidato dalla tecnologia.", body: "SIAVURA è un'iniziativa tecnologica indipendente fondata da Vasile Buzura. Il focus è semplice: capire come funziona qualcosa, trovare cosa può migliorare e costruire il sistema che fa la differenza.", button: "Scopri SIAVURA" },
    contact: { kicker: "Contatti", title: "Hai un problema che vale la pena risolvere?", body: "Proviamo a capirlo.", email: "hello@siavura.com", button: "Lavora con SIAVURA" },
    footer: "AI · Software · Intelligent Systems",
  },
} as const;

export function getCopy(locale: string) {
  return copy[(locale === "it" ? "it" : "en") as Locale];
}
