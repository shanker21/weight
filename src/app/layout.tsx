import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeightGone UK | Safe Weight Loss Treatments",
  description: "Clinically proven weight loss treatments delivered across the UK. Book your appointment today.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "WeightGone UK",
    description: "Safe and effective weight loss treatments",
    url: "https://www.weightgone.co.uk",
    siteName: "WeightGone UK",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_UK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeightGone UK",
    description: "Safe and effective weight loss treatments",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
