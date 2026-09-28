import Link from "next/link";
import Logo from "./Logo";
import type { Locale } from "@/lib/copy";

export default function Footer({ locale, line }: { locale: Locale; line: string }) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <Logo locale={locale} compact />
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">{line}</p>
        <div className="flex gap-4 text-xs text-white/45">
          <Link href={`/${locale}/projects`} className="hover:text-white">Projects</Link>
          <Link href={`/${locale}/about`} className="hover:text-white">About</Link>
          <Link href={`/${locale}/contact`} className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
