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
  title: "Emmanuel Lion - Étudiant Ingénieur en Développement Logiciel",
  description: "Portfolio d'Emmanuel Lion, étudiant ingénieur en développement logiciel à IMT Mines Alès. Spécialisé en Next.js, React, TypeScript et développement full-stack. En alternance chez BRL Ingénierie.",
  keywords: [
    "Emmanuel Lion",
    "développeur full-stack",
    "étudiant ingénieur",
    "IMT Mines Alès",
    "Next.js",
    "React",
    "TypeScript",
    "BRL Ingénierie",
    "développement web",
    "portfolio développeur",
    "alternance développement",
    "Nîmes",
    "Alès"
  ],
  authors: [{ name: "Emmanuel Lion", url: "https://emmanuellion.fr" }],
  creator: "Emmanuel Lion",
  publisher: "Emmanuel Lion",
  metadataBase: new URL("https://emmanuellion.fr"),
  alternates: {
    canonical: "https://emmanuellion.fr",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://emmanuellion.fr",
    title: "Emmanuel Lion - Étudiant Ingénieur en Développement Logiciel",
    description: "Portfolio d'Emmanuel Lion, étudiant ingénieur en développement logiciel à IMT Mines Alès. Spécialisé en Next.js, React, TypeScript et développement full-stack.",
    siteName: "Emmanuel Lion Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Lion - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Lion - Étudiant Ingénieur en Développement Logiciel",
    description: "Portfolio d'Emmanuel Lion, étudiant ingénieur en développement logiciel à IMT Mines Alès.",
    images: ["/og-image.jpg"],
    creator: "@emmanuellion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
