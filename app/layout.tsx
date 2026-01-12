import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { seoConfig } from "@/lib/seo-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: seoConfig.title.default,
    template: seoConfig.title.template,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,

  authors: [{ name: seoConfig.siteName, url: seoConfig.siteUrl }],
  creator: seoConfig.siteName,
  publisher: seoConfig.siteName,

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

  metadataBase: new URL(seoConfig.siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.title.default,
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.images.og,
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} — Премиум Детейлинг`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: seoConfig.social.twitter,
    creator: seoConfig.social.twitter,
    title: seoConfig.title.default,
    description: seoConfig.description,
    images: [seoConfig.images.twitter],
  },

  verification: {
    google: seoConfig.verification.google || undefined,
    yandex: seoConfig.verification.yandex || undefined,
    other: seoConfig.verification.bing
      ? { "msvalidate.01": seoConfig.verification.bing }
      : undefined,
  },

  category: "Automotive",
  classification: "Car Detailing Services",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.json",

  other: {
    "geo.region": seoConfig.region,
    "geo.placename": seoConfig.city,
    "format-detection": "telephone=yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e88e5" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={seoConfig.language}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
