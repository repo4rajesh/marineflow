import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Footer />
    </main>
  );
} 