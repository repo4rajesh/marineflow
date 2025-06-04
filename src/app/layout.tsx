import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarineFlow",
  description: "Maritime Industry Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen overflow-x-hidden`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
} 