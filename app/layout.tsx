import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, Atkinson_Hyperlegible } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foggybrain.app"),
  title: {
    default: "FoggyBrain — track brain fog, find your triggers",
    template: "%s · FoggyBrain",
  },
  description:
    "FoggyBrain is a gentle iPhone app for tracking brain fog and connecting it to sleep, stress, food, and weather. Private, on-device, no account needed.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "FoggyBrain",
    type: "website",
    url: "/",
    images: ["/logo-flat.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FoggyBrain — track brain fog, find your triggers",
    description:
      "A gentle iPhone app for tracking brain fog and connecting it to sleep, stress, food, and weather.",
    images: ["/logo-flat.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FoggyBrain",
  url: "https://foggybrain.app",
  logo: "https://foggybrain.app/app-icon.png",
  description:
    "FoggyBrain is a gentle iPhone app for tracking brain fog and connecting it to sleep, stress, food, and weather.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FoggyBrain",
  url: "https://foggybrain.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${atkinson.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
