import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
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
    "Nepal",
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.headline}`,
    description: PORTFOLIO_DATA.personal.bio,
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground flex flex-col relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle Background Glow Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
            <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-accent/3 blur-[140px] rounded-full" />
          </div>

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
