'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ],
  solutions: [
    { name: 'Laytime Calculations', href: '/features#laytime' },
    { name: 'Data Analytics', href: '/features#analytics' },
    { name: 'Contract Management', href: '/features#contracts' },
    { name: 'Port Operations', href: '/features#operations' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
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
    }
  ],
  contact: {
    email: 'info@marineflow.ai',
    phone: ['+91 84509 66665', '(+1) 858-225-1464'],
    address: ['USA | Mumbai | Singapore | Indore']
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/marineflow-logo-white.svg"
                alt="MarineFlow.ai"
                width={180}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-base">
              AI-Powered Maritime Efficiency
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-white">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">Contact</h3>
              <ul role="list" className="mt-4 space-y-4">
                <li>
                  <a
                    href={`mailto:${navigation.contact.email}`}
                    className="text-base text-gray-400 hover:text-white"
                  >
                    {navigation.contact.email}
                  </a>
                </li>
                {navigation.contact.phone.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                      className="text-base text-gray-400 hover:text-white"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
                {navigation.contact.address.map((line) => (
                  <li key={line} className="text-base text-gray-400">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} MarineFlow.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 