import type { Metadata, Viewport } from "next";
import { Anton, Inter, Space_Mono, Noto_Sans_Javanese } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation/Navigation";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { siteConfig } from "@/content/site";

/* Typography system — Display / Body / Meta / Accent */
const fontDisplay = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});
const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const fontMeta = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});
const fontJavanese = Noto_Sans_Javanese({
  weight: ["400", "700"],
  subsets: ["javanese"],
  variable: "--font-noto-javanese",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

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
    <html
      lang="id"
      className={`overflow-x-hidden ${fontDisplay.variable} ${fontBody.variable} ${fontMeta.variable} ${fontJavanese.variable}`}
    >
      <head>
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
                siteConfig.tiktok || "",
              ].filter((s) => s.length > 0),
              jobTitle: `${siteConfig.tagline} / ${siteConfig.tagline2}`,
            }),
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Skip link — keyboard accessibility */}
        <a href="#main" className="skip-link">
          Lewati ke konten
        </a>

        {/* Scroll progress */}
        <ScrollProgress />

        {/* Film grain overlay */}
        <div className="film-grain" aria-hidden="true" />
        
        {/* Smooth scroll — single global instance */}
        <LenisProvider />

        {/* Custom cursor — desktop only, client component */}
        <CustomCursor />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
