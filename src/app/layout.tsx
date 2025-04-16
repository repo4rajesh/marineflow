import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarineFlow AI - Intelligent Maritime Solutions",
  description: "MarineFlow AI provides cutting-edge artificial intelligence solutions for maritime operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen overflow-x-hidden`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 