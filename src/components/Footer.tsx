'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/marineflow-ai',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/marineflow_ai',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-light">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/marineflow-logo-blue.svg"
                alt="MarineFlow AI"
                width={200}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-6 text-sm leading-6 text-gray-600">
              Transforming maritime operations with AI-powered intelligence and real-time analytics.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200"
              >
                Book a demo
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gradient">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gradient">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm leading-6 text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-10 border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} MarineFlow AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 