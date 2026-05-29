import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { Providers } from "./providers";
import "@fontsource/dm-sans";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Erik Majada | Logistics Operations Leader",
  description: "Portfolio of Erik Majada, Logistics Operations Leader with 9+ years of experience at DHL eCommerce Spain. Expert in warehouse management, team leadership and operational excellence.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} font-dm-sans antialiased`}>
        <LoadingProvider>
          <LoadingScreen />
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  );
}
