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
  title: "Pablo Vallejo — Senior Backend Engineer",
  description:
    "Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data. Building high-throughput systems for 10M+ users.",
  metadataBase: new URL("https://portfolio.dfbubbles.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pablo Vallejo — Senior Backend Engineer",
    description:
      "Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data.",
    url: "https://portfolio.dfbubbles.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Vallejo — Senior Backend Engineer",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
