import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIAVURA — Intelligence in Action",
  description: "AI, software and intelligent systems built around real business problems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="noise">{children}</body></html>;
}
