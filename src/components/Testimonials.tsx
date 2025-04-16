'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "MarineFlow AI has revolutionized how we track and manage our fleet. The real-time analytics have helped us optimize our operations significantly.",
    author: "Rajesh Sharma",
    role: "Fleet Manager",
    image: "/images/team/rajesh.jpg"
  },
  {
    content: "The predictive maintenance features have saved us countless hours and resources. It's an invaluable tool for modern maritime operations.",
    author: "Sanjay Sharma",
    role: "Operations Director",
    image: "/images/team/sanjay.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Maritime Leaders
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear from industry professionals who have transformed their operations with MarineFlow AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-2xl shadow-sm ring-1 ring-gray-900/5"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                  <div className="mt-4 text-gray-600 italic">"{testimonial.content}"</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2">
                <svg
                  className="h-8 w-8 text-blue-600/10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 