import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline} & ${siteConfig.tagline2}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.url,
              sameAs: [
                siteConfig.github || "",
                siteConfig.linkedin || "",
                siteConfig.instagram || "",
              ].filter((s) => s.length > 0),
              jobTitle: `${siteConfig.tagline} / ${siteConfig.tagline2}`,
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Film grain overlay */}
        <div className="film-grain" aria-hidden="true" />
        
        {/* Smooth scroll — single global instance */}
        <LenisProvider />

        {/* Custom cursor — desktop only, client component */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
