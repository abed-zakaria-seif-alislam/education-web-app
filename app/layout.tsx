import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UMEDIFY - Plateforme Éducative pour Étudiants Algériens",
  description: "Plateforme éducative de confiance pour les étudiants algériens - Cours, TDs, et TPs pour toutes les spécialités.",
  keywords: ["éducation", "étudiants", "algérie", "cours", "td", "tp", "université"],
  authors: [{ name: "UMEDIFY Team" }],
  openGraph: {
    title: "UMEDIFY - Plateforme Éducative",
    description: "Explorez, apprenez et réussissez avec UMEDIFY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
