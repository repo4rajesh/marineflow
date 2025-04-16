import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Testimonials />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
} 