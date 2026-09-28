import Link from "next/link";
import { getCopy } from "@/lib/copy";

export default async function Contact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getCopy(locale);
  return (
    <main className="px-5 pb-28 pt-40 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.contact.kicker}</div>
          <h1 className="display-font mt-6 text-5xl leading-tight text-white sm:text-7xl">{c.contact.title}</h1>
          <p className="mt-8 text-xl text-white/55">{c.contact.body}</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[.02] p-8 sm:p-10">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/35">Email</div>
          <a href={`mailto:${c.contact.email}`} className="mt-5 block break-all text-2xl text-[#ead5a7] hover:text-white">{c.contact.email}</a>
          <div className="mt-10 text-[10px] uppercase tracking-[0.25em] text-white/35">Website</div>
          <div className="mt-4 text-sm text-white/55">siavura.com</div>
          <div className="mt-10 flex gap-5 text-sm"><Link href={`/${locale}`} className="text-white/45 hover:text-white">← {c.nav.home}</Link><Link href={`/${locale}/projects`} className="text-white/45 hover:text-white">{c.nav.projects} →</Link></div>
        </div>
      </div>
    </main>
  );
}
