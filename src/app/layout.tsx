import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/layout/CtaBand";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajero.co.kr";

const siteTitle = "AJERO | 브랜드와 비즈니스를 위한 웹사이트 제작";
const siteDescription =
  "AJERO는 브랜드의 가치와 비즈니스 목적을 고려해 웹사이트를 설계하고 디자인, 개발, SEO까지 함께 제공합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | AJERO",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "AJERO",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <CtaBand />
        <Footer />
        <FloatingActions />
        <ScrollReveal />
      </body>
    </html>
  );
}
