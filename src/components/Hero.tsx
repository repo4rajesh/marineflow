'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-gray-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Optimize Your Maritime Operations with AI-Powered Laytime Calculations!
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Are you looking for a faster, more accurate way to calculate laytime? Our AI-driven solutions streamline the entire process, ensuring precision, efficiency, and compliance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
              <a 
                href="#features" 
                className="inline-block px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="/images/hero-3d.svg"
                alt="Maritime Operations Visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Key Statistics */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
            <p className="text-gray-400">of maritime companies struggle with inefficient laytime calculations</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">$4B</h3>
            <p className="text-gray-400">annual costs in demurrage and detention due to miscalculations</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-2">4-5 Days</h3>
            <p className="text-gray-400">average manual processing time for laytime claims</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 