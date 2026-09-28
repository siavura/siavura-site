"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import type { Locale } from "@/lib/copy";

export default function Header({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { home: string; solutions: string; projects: string; about: string; contact: string; cta: string };
}) {
  const other = locale === "en" ? "it" : "en";
  const [open, setOpen] = useState(false);

  const links = [
    { label: labels.home, href: `/${locale}` },
    { label: labels.solutions, href: `/${locale}#solutions` },
    { label: labels.projects, href: `/${locale}/projects` },
    { label: labels.about, href: `/${locale}/about` },
    { label: labels.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo locale={locale} compact />

        <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-white/60 md:flex">
          {links.map((link) => (
            <Link key={link.href} className="transition hover:text-white" href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link
            className="rounded-full border border-[#c9a96e]/50 px-4 py-2 text-[#ead5a7] transition hover:border-[#ead5a7] hover:bg-white/5"
            href={`/${locale}#contact`}
          >
            {labels.cta}
          </Link>
          <Link
            aria-label={`Switch to ${other}`}
            href={`/${other}`}
            className="rounded-full border border-white/10 px-3 py-2 text-white/50 transition hover:text-white"
          >
            {other.toUpperCase()}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={`/${other}`}
            className="rounded-full border border-white/10 px-3 py-2 text-[10px] tracking-[0.18em] text-white/60"
            onClick={() => setOpen(false)}
          >
            {other.toUpperCase()}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/65"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-black/95 px-5 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-[11px] uppercase tracking-[0.22em] text-white/65 last:border-b-0 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}#contact`}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-[#c9a96e]/50 px-4 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-[#ead5a7]"
            >
              {labels.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
