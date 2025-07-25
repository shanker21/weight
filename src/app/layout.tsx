import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trusted Weight Loss Clinic in Manchester | WeightGone UK",
  description: "Get expert support with weight loss treatments at our Manchester clinic. Trusted by many across the UK for effective weight loss solutions and products.",
  keywords: "About us weightgone , about weight loss treatments",
  icons: {
    icon: [
      { url: '/icon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: "WeightGone UK",
    description: "Effective weight loss treatments",
    url: "https://www.weightgone.co.uk",
    siteName: "WeightGone UK",
    images: [
      {
        url: '/og-image.png', 
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
    description: "Effective weight loss treatments",
     images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3HRSZ29MPR`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3HRSZ29MPR', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* Fallback links */}
        <link rel="shortcut icon" href="/icon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
        <FloatingWhatsApp />
        <Footer/>
      </body>
    </html>
  );
}