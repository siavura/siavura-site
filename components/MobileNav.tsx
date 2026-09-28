"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/copy";

export default function MobileNav({ locale, labels }: { locale: Locale; labels: { home: string; solutions: string; projects: string; about: string; contact: string; cta: string } }) {
  const [open, setOpen] = useState(false);
  const other = locale === "en" ? "it" : "en";
  const close = () => setOpen(false);
  return (
    <div className="lg:hidden">
      <div className="flex items-center gap-2">
        <Link href={`/${other}`} className="rounded-full border border-white/10 px-3 py-2 text-[10px] tracking-[0.18em] text-white/60">{other.toUpperCase()}</Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/70"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-xl">
          {[
            [labels.home, `/${locale}`],
            [labels.solutions, `/${locale}#solutions`],
            [labels.projects, `/${locale}/projects`],
            [labels.about, `/${locale}/about`],
            [labels.contact, `/${locale}/contact`],
          ].map(([label, href]) => (
            <Link key={label} href={href} onClick={close} className="block border-b border-white/10 px-3 py-4 text-[10px] uppercase tracking-[0.2em] text-white/65 last:border-0 hover:text-white">
              {label}
            </Link>
          ))}
          <Link href={`/${locale}/contact`} onClick={close} className="mt-3 block rounded-full border border-[#c9a96e]/50 px-4 py-3 text-center text-[10px] uppercase tracking-[0.2em] text-[#ead5a7]">
            {labels.cta}
          </Link>
        </div>
      )}
    </div>
  );
}
