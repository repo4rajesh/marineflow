'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    content: "MarineFlow AI's innovative approach to maritime operations has transformed how we handle vessel management and compliance. Their AI-powered solutions have significantly improved our efficiency.",
    author: "Captain Ram",
    role: "Maritime Strategist"
  },
  {
    content: "The platform's ability to streamline operations and provide real-time insights has been invaluable to our maritime business. MarineFlow AI is truly revolutionizing the industry.",
    author: "Pankaj Patil",
    role: "Maritime Operations Expert"
  },
  {
    content: "As someone deeply involved in maritime technology, I can attest to MarineFlow AI's commitment to innovation and excellence. Their solutions are cutting-edge and practical.",
    author: "Biswajit Malakar",
    role: "Maritime Technology Specialist"
  },
  {
    content: "The integration of AI in maritime operations through MarineFlow has opened new possibilities for efficiency and optimization. Their platform is a game-changer for the industry.",
    author: "Durgesh Bathwal",
    role: "Maritime Innovation Leader"
  }
];

export default function Testimonials() {
  const [isHovering, setIsHovering] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to start auto-scrolling
  const startAutoScroll = () => {
    // Clear any existing interval first
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        // Calculate next index in a circular pattern
        const nextIndex = (currentIndex + 1) % testimonials.length;
        setCurrentIndex(nextIndex);
        
        // Calculate the scroll position for the next testimonial
        const cardWidth = 316; // 300px width + 16px spacing
        const newPosition = nextIndex * cardWidth;
        
        // Scroll to the new position
        container.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    }, 5000); // Scroll every 5 seconds
    
    autoScrollIntervalRef.current = interval;
  };

  // Function to stop auto-scrolling
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Handle scroll events to update scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 316; // 300px width + 16px spacing
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
      setScrollPosition(container.scrollLeft);
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 316; // 300px width + 16px spacing
      
      // Calculate previous index in a circular pattern
      const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      setCurrentIndex(prevIndex);
      
      // Calculate the scroll position for the previous testimonial
      const newPosition = prevIndex * cardWidth;
      
      // Scroll to the new position
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 316; // 300px width + 16px spacing
      
      // Calculate next index in a circular pattern
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
      
      // Calculate the scroll position for the next testimonial
      const newPosition = nextIndex * cardWidth;
      
      // Scroll to the new position
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollLeft();
    } else if (e.key === 'ArrowRight') {
      scrollRight();
    }
  };

  // Start auto-scroll on mount
  useEffect(() => {
    // Start auto-scroll initially
    startAutoScroll();
    
    // Add scroll event listener
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      // Clean up on unmount
      stopAutoScroll();
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]); // Re-run when currentIndex changes

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    startAutoScroll();
  };

  return (
    <section id="testimonials" className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 mb-2">
            Testimonials
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Trusted by Maritime Leaders
          </h2>
          <p className="mt-2 text-base leading-7 text-gray-600 max-w-2xl mx-auto">
            Hear from industry professionals who have transformed their operations with MarineFlow AI.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left navigation arrow */}
            <button 
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeftIcon className="h-6 w-6 text-blue-600" />
            </button>
            
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 scrollbar-hide px-16"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-4 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-[300px] flex-shrink-0"
                  >
                    <div className="relative bg-white p-6 rounded-xl shadow-md ring-1 ring-gray-900/5 hover:shadow-lg transition-shadow duration-300 h-full">
                      <div className="text-center">
                        <p className="text-base text-gray-600 italic mb-4 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
                          <div className="text-gray-900 font-medium text-sm">{testimonial.author}</div>
                          <div className="text-blue-600 text-xs">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right navigation arrow */}
            <button 
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
              aria-label="Scroll right"
            >
              <ChevronRightIcon className="h-6 w-6 text-blue-600" />
            </button>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 316; // 300px width + 16px spacing
                    const newPosition = index * cardWidth;
                    scrollContainerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
                    setCurrentIndex(index);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
} 