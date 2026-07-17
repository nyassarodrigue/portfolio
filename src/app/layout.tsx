import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rodrigue Nyassa | Développeur Full Stack Java & Next.js",
  description:
    "Portfolio de Rodrigue Nyassa, développeur Full Stack spécialisé en Java, Spring Boot, Next.js, React, MongoDB et PostgreSQL.",

  keywords: [
    "Rodrigue Nyassa",
    "Développeur Full Stack",
    "Java",
    "Spring Boot",
    "Next.js",
    "React",
    "MongoDB",
    "PostgreSQL",
    "Portfolio",
    "Développeur Cameroun",
  ],

  authors: [{ name: "Rodrigue Nyassa" }],

  creator: "Rodrigue Nyassa",

  metadataBase: new URL("https://portfolio-sgs5.vercel.app"),

  openGraph: {
    title: "Rodrigue Nyassa | Développeur Full Stack",
    description:
      "Découvrez mon portfolio de développeur Full Stack Java & Next.js.",
    url: "https://portfolio-sgs5.vercel.app",
    siteName: "Portfolio Rodrigue Nyassa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rodrigue Nyassa | Développeur Full Stack",
    description: "Portfolio professionnel Java • Spring Boot • Next.js",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
