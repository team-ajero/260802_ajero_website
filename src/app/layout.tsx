import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AJERO | 사업을 이해하고, 성장을 설계하는 웹",
    template: "%s | AJERO",
  },
  description:
    "AJERO는 홈페이지 제작을 넘어 디자인, 개발, SEO, 콘텐츠, 유지보수까지 고객의 사업에 필요한 웹 환경을 함께 설계하는 웹 파트너입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "AJERO",
    title: "AJERO | 사업을 이해하고, 성장을 설계하는 웹",
    description:
      "AJERO는 홈페이지 제작을 넘어 디자인, 개발, SEO, 콘텐츠, 유지보수까지 고객의 사업에 필요한 웹 환경을 함께 설계하는 웹 파트너입니다.",
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
        <Footer />
      </body>
    </html>
  );
}
