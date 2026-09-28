import Link from "next/link";
import { getCopy } from "@/lib/copy";

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getCopy(locale);
  return (
    <main className="px-5 pb-28 pt-40 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.about.kicker}</div>
        <h1 className="display-font mt-6 text-5xl leading-tight text-white sm:text-7xl">{c.about.title}</h1>
        <p className="mt-10 max-w-3xl text-lg leading-9 text-white/55">{c.about.body}</p>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[["Perceive", "Look before you build."], ["Understand", "Connect what seems separate."], ["Transform", "Turn insight into systems."]].map(([a,b], i) => (
            <div key={a} className="rounded-3xl border border-white/10 p-8"><div className="text-[10px] tracking-[0.25em] text-[#d9b872]">0{i+1}</div><h2 className="mt-14 text-xl text-white">{a}</h2><p className="mt-4 text-sm leading-7 text-white/50">{locale === "it" ? ["Osservare prima di costruire.", "Collegare ciò che sembra separato.", "Trasformare la visione in sistemi."][i] : b}</p></div>
          ))}
        </div>
        <div className="mt-20"><Link href={`/${locale}/contact`} className="text-[11px] uppercase tracking-[0.25em] text-[#ead5a7] hover:text-white">{c.contact.button} →</Link></div>
      </div>
    </main>
  );
}
