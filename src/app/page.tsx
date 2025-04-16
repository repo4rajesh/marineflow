'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-gradient-light">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CaseStudies />
      <Stats />
      <Footer />
    </main>
  );
} 