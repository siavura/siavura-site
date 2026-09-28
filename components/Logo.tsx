import Link from "next/link";

export function Mark({ small = false }: { small?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 100 56" className={small ? "h-7 w-12" : "h-12 w-24"} fill="none">
      <path d="M7 28c15-20 71-20 86 0-15 20-71 20-86 0Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="28" r="13" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="28" r="4" fill="currentColor" />
      <path d="M50 2v52M19 28h62" stroke="currentColor" strokeWidth="1" opacity=".7" />
      <circle cx="50" cy="2" r="2.2" fill="currentColor" />
      <circle cx="50" cy="54" r="2.2" fill="currentColor" />
      <circle cx="19" cy="28" r="1.6" fill="currentColor" />
      <circle cx="81" cy="28" r="1.6" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ locale, compact = false }: { locale: "en" | "it"; compact?: boolean }) {
  return (
    <Link href={`/${locale}`} className="group inline-flex items-center gap-3 text-[#ead5a7]" aria-label="SIAVURA home">
      <Mark small={compact} />
      <span className={compact ? "tracking-[0.25em] text-xs" : "tracking-[0.36em] text-sm"}>SIAVURA</span>
    </Link>
  );
}
