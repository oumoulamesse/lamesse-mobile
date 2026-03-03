import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lamesse-mobile.vercel.app"), // remplace plus tard par ton vrai domaine

  title: "iPhone au Sénégal | Boutique Apple Officielle - Lamesse Mobile",

  description:
    "Achetez votre iPhone original au Sénégal. Stock disponible en 64GB, 128GB et 256GB. Livraison rapide à Dakar et partout au Sénégal. Lamesse Mobile, spécialiste Apple.",

  keywords: [
    "iPhone Sénégal",
    "iPhone Dakar",
    "acheter iPhone Sénégal",
    "iPhone 15 Pro Max Sénégal",
    "iPhone original Dakar",
    "Boutique Apple Sénégal",
    "iPhone 128GB Dakar",
    "Lamesse Mobile",
  ],

  authors: [{ name: "Lamesse Mobile" }],
  creator: "Lamesse Mobile",
  publisher: "Lamesse Mobile",

  openGraph: {
    title: "iPhone au Sénégal | Lamesse Mobile",
    description:
      "Boutique spécialisée dans la vente d’iPhone authentiques au Sénégal. Disponible immédiatement à Dakar.",
    url: "https://lamesse-mobile.vercel.app",
    siteName: "Lamesse Mobile",
    locale: "fr_SN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}