import { redirect } from "next/navigation";

export default async function WorkWithAlias({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/contact`);
}
