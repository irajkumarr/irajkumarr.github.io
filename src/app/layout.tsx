import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_DATA.personal.domain),
  title: {
    default: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.headline}`,
    template: `%s | ${PORTFOLIO_DATA.personal.name}`,
  },
  description: `${PORTFOLIO_DATA.personal.name} is a Full-Stack & Flutter Developer specializing in Clean Architecture, cross-platform mobile apps, and scalable REST backends.`,
  keywords: [
    "Raj Kumar Timalsina",
    "Raj K Timalsina",
    "raj kumar timalsina",
    "rajkumar timalsina",
    "Flutter Developer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Clean Architecture Flutter",
    "Nepal Developer",
    "Dart",
    "Node.js",
    "MongoDB",
    "BLoC",
    "Riverpod",
    "Clean Architecture",
    "B.Sc. CSIT",
  ],
  authors: [
    { name: PORTFOLIO_DATA.personal.name, url: PORTFOLIO_DATA.personal.domain },
  ],
  creator: PORTFOLIO_DATA.personal.name,
  alternates: {
    canonical: PORTFOLIO_DATA.personal.domain,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PORTFOLIO_DATA.personal.domain,
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.headline}`,
    description: PORTFOLIO_DATA.personal.bio,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Raj Kumar Timalsina | Full Stack Mobile & Flutter Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.headline}`,
    description: PORTFOLIO_DATA.personal.bio,
    images: ["/og-image.jpeg"],
    creator: "@irajkumarr_",
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
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${PORTFOLIO_DATA.personal.domain}/#person`,
        name: PORTFOLIO_DATA.personal.name,
        alternateName: ["Raj Kumar", "Raj K Timalsina"],
        jobTitle: PORTFOLIO_DATA.personal.headline,
        description: PORTFOLIO_DATA.personal.bio,
        url: PORTFOLIO_DATA.personal.domain,
        image: `${PORTFOLIO_DATA.personal.domain}/raj-kumar-timalsina.png`,
        sameAs: [
          PORTFOLIO_DATA.personal.github,
          PORTFOLIO_DATA.personal.linkedin,
          "https://x.com/irajkumarr_",
        ],
        worksFor: {
          "@type": "Organization",
          name: "DevanaSoft Pvt. Ltd.",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Tribhuvan University",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu",
          addressCountry: "NP",
        },
        knowsAbout: [
          "Flutter",
          "Dart",
          "Full-Stack Development",
          "Clean Architecture",
          "BLoC",
          "Spring Boot",
          "Node.js",
          "REST APIs",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${PORTFOLIO_DATA.personal.domain}/#website`,
        url: PORTFOLIO_DATA.personal.domain,
        name: `${PORTFOLIO_DATA.personal.name} Portfolio`,
        description: PORTFOLIO_DATA.personal.bio,
        publisher: {
          "@id": `${PORTFOLIO_DATA.personal.domain}/#person`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground flex flex-col relative overflow-x-hidden">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
