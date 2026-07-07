import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/next';

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${instrumentSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} font-body antialiased`}>
        <LoadingProvider>
          <LoadingScreen />
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  );
}
