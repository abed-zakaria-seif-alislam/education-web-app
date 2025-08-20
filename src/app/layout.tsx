import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UMEDIFY - Educational Platform for Algerian Students",
  description: "Access courses, TDs, and TPs for all majors at Algerian universities. Premium AI assistance for better learning.",
  keywords: "education, Algeria, university, courses, TDs, TPs, students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-umedify-background text-umedify-text font-sans">
        {children}
      </body>
    </html>
  );
}
