import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCopy, locales, type Locale } from "@/lib/copy";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const safeLocale = locale as Locale;
  const c = getCopy(safeLocale);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Header locale={safeLocale} labels={c.nav} />
      {children}
      <Footer locale={safeLocale} line={c.footer} />
    </div>
  );
}
