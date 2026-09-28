import Link from "next/link";
import Logo from "./Logo";
import type { Locale } from "@/lib/copy";

export default function Header({ locale, labels }: { locale: Locale; labels: { home: string; solutions: string; projects: string; about: string; contact: string; cta: string } }) {
  const other = locale === "en" ? "it" : "en";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo locale={locale} compact />
        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-white/60 lg:flex">
          <Link className="transition hover:text-white" href={`/${locale}`}>{labels.home}</Link>
          <Link className="transition hover:text-white" href={`/${locale}#solutions`}>{labels.solutions}</Link>
          <Link className="transition hover:text-white" href={`/${locale}/projects`}>{labels.projects}</Link>
          <Link className="transition hover:text-white" href={`/${locale}/about`}>{labels.about}</Link>
          <Link className="transition hover:text-white" href={`/${locale}/contact`}>{labels.contact}</Link>
          <Link className="rounded-full border border-[#c9a96e]/50 px-4 py-2 text-[#ead5a7] transition hover:border-[#ead5a7] hover:bg-white/5" href={`/${locale}/contact`}>{labels.cta}</Link>
          <Link aria-label={`Switch to ${other}`} href={`/${other}`} className="rounded-full border border-white/10 px-3 py-2 text-white/50 hover:text-white">{other.toUpperCase()}</Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Link href={`/${other}`} className="rounded-full border border-white/10 px-3 py-2 text-[10px] tracking-[0.18em] text-white/60">{other.toUpperCase()}</Link>
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">Menu</span>
        </div>
      </div>
    </header>
  );
}
