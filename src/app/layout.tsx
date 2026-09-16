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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground flex flex-col relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle Developer Engineering Grid Background with Radial Mask */}
          <div className="fixed inset-0 -z-10 pointer-events-none tech-grid-pattern tech-radial-mask opacity-80" />

          {/* Elegant Ambient Atmospheric Radial Lights */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-accent/8 blur-[130px] rounded-full" />
            <div className="absolute top-[38%] -right-40 w-[460px] h-[460px] bg-accent/4 blur-[150px] rounded-full" />
            <div className="absolute bottom-[20%] -left-40 w-[420px] h-[420px] bg-accent/4 blur-[140px] rounded-full" />
          </div>

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
