'use client';

import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
        >
          <div className="w-full px-8 py-6 flex items-center gap-x-4">
            <div className="rounded-lg bg-blue-50 p-2">
              <QuestionMarkCircleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</h3>
          </div>
          <div className="px-8 pb-6">
            <p className="text-base leading-7 text-gray-600 pl-14">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 