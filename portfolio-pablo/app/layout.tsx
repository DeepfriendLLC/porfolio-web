import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-sans-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo Vallejo | Portfolio",
  description:
    "Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data. Building high-throughput systems for 10M+ users.",
  metadataBase: new URL("https://pablovallejo.dev"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pablo Vallejo | Portfolio",
    description:
      "Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data.",
    url: "https://pablovallejo.dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Vallejo | Portfolio",
    description:
      "Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
