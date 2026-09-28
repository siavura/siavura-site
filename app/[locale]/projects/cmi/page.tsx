import Link from "next/link";

export default async function CMI({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const it = locale === "it";
  return (
    <main className="px-5 pb-32 pt-40 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href={`/${locale}/projects`} className="text-[10px] uppercase tracking-[0.25em] text-white/40 hover:text-white">← {it ? "Progetti" : "Projects"}</Link>
        <div className="mt-12 max-w-5xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">01 · Enterprise AI</div>
          <h1 className="display-font mt-6 text-5xl leading-tight text-white sm:text-7xl">CMI — Company Memory Infrastructure</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#ead5a7]">{it ? "La conoscenza della tua azienda non dovrebbe scomparire quando cambiano le persone." : "Your company’s knowledge should not disappear when people do."}</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">{it ? "CMI è un sistema pensato per collegare persone, documenti, processi, competenze e conoscenza in una memoria aziendale interrogabile e utilizzabile." : "CMI is an enterprise system concept designed to connect people, documents, processes, skills and knowledge into one usable company memory."}</p>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {(it ? [["01", "Conoscenza frammentata", "Informazioni disperse tra persone, documenti e strumenti."], ["02", "Onboarding lento", "Il know-how rimane implicito e difficile da trasferire."], ["03", "Decisioni senza contesto", "Dati e procedure esistono, ma non sempre sono collegati."]] : [["01", "Fragmented knowledge", "Information spread across people, documents and tools."], ["02", "Slow onboarding", "Important know-how stays implicit and hard to transfer."], ["03", "Decisions without context", "Data and procedures exist, but context is often disconnected."]]).map(([n,t,b]) => (
            <div key={n} className="bg-[#080808] p-8 lg:p-10"><div className="text-[10px] tracking-[0.25em] text-[#d9b872]">{n}</div><h2 className="mt-16 text-xl text-white">{t}</h2><p className="mt-4 text-sm leading-7 text-white/50">{b}</p></div>
          ))}
        </div>
        <div className="mt-24 max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{it ? "Direzione" : "Direction"}</div>
          <h2 className="display-font mt-6 text-4xl text-white">{it ? "Dalla memoria organizzativa all'intelligenza utilizzabile." : "From organizational memory to actionable intelligence."}</h2>
          <p className="mt-7 text-base leading-8 text-white/55">{it ? "Il progetto esplora un modo più strutturato di preservare conoscenza, supportare l'onboarding, rendere più visibili competenze e processi e dare alle persone un accesso contestuale alle informazioni aziendali." : "The project explores a more structured way to preserve knowledge, support onboarding, surface competencies and processes, and give people contextual access to company information."}</p>
        </div>
        <div className="mt-12"><Link href={`/${locale}/contact`} className="text-[11px] uppercase tracking-[0.25em] text-[#ead5a7] hover:text-white">{it ? "Parliamone" : "Talk to SIAVURA"} →</Link></div>
      </div>
    </main>
  );
}
