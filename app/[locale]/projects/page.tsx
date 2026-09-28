import Link from "next/link";
import { getCopy } from "@/lib/copy";

export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getCopy(locale);
  return (
    <main className="px-5 pb-28 pt-40 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.projects.kicker}</div>
          <h1 className="display-font mt-6 text-6xl text-white">{c.projects.title}</h1>
          <p className="mt-8 text-base leading-8 text-white/55">{c.projects.body}</p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Link href={`/${locale}/projects/cmi`} className="rounded-3xl border border-white/10 p-8 hover:border-[#d9b872]/30">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#d9b872]">{c.projects.cmi.label}</div>
            <h2 className="mt-12 text-2xl text-white">{c.projects.cmi.title}</h2>
            <p className="mt-5 text-sm leading-7 text-white/50">{c.projects.cmi.body}</p>
          </Link>
          <div className="rounded-3xl border border-white/10 p-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#d9b872]">{c.projects.expense.label}</div>
            <h2 className="mt-12 text-2xl text-white">{c.projects.expense.title}</h2>
            <p className="mt-5 text-sm leading-7 text-white/50">{c.projects.expense.body}</p>
          </div>
          <div className="rounded-3xl border border-white/10 p-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#d9b872]">{c.projects.future.label}</div>
            <h2 className="mt-12 text-2xl text-white">{c.projects.future.title}</h2>
            <p className="mt-5 text-sm leading-7 text-white/50">{c.projects.future.body}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
