'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: 500,
    label: "Ships Monitored",
    suffix: "+",
    icon: "🚢"
  },
  {
    value: 15,
    label: "Countries Served",
    suffix: "+",
    icon: "🌍"
  },
  {
    value: 30,
    label: "Fuel Efficiency Improvement",
    suffix: "%",
    icon: "⛽"
  },
  {
    value: 99.9,
    label: "Security Detection Rate",
    suffix: "%",
    icon: "🛡️"
  }
];

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    
    const timers = stats.map((stat, index) => {
      const increment = stat.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          clearInterval(timer);
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = current;
            return newCounts;
          });
        }
      }, interval);
      
      return timer;
    });
    
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Our Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            MarineFlow AI is transforming the maritime industry with measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-colors text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {typeof counts[index] === 'number' ? 
                    (Number.isInteger(counts[index]) ? 
                      Math.floor(counts[index]) : 
                      counts[index].toFixed(1)
                    ) : 0}
                  {stat.suffix}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 