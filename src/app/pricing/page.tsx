'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '@/components/Navbar';

interface TierData {
  name: string;
  tagline: string;
  price: string;
  target: string;
  limits: string;
  features: string[];
  color: string;
}

const tierData: Record<string, TierData> = {
  silver: {
    name: 'Silver',
    tagline: 'The Foundational Efficiency',
    price: '$5,500 - $8,500',
    target: 'Small to mid-sized operators, often early adopters of digital solutions.',
    limits: 'Up to 25 vessels AND 100 voyages annually.',
    features: [
      'Web-Based Manual Laytime/Demurrage Calculation',
      'Basic Real-Time Dashboards & Analytics',
      'Standard email support (24-48 hr response)',
      'Self-guided tutorials'
    ],
    color: 'text-gray-500'
  },
  gold: {
    name: 'Gold',
    tagline: 'Accelerated Operations with AI Power',
    price: '$16,500 - $27,500',
    target: 'Growing operators seeking significant efficiency gains through AI.',
    limits: '>25 to <100 vessels AND >100 to <500 voyages annually.',
    features: [
      'Everything in Silver, PLUS:',
      '<strong>AI-Powered Fast and Accurate Laytime/Demurrage Calculation</strong>',
      'Enhanced Real-Time Dashboards & Analytics',
      'SLA-driven Email & Chat Support',
      'Guided onboarding (4-8 hours dedicated support)'
    ],
    color: 'text-yellow-500'
  },
  platinum: {
    name: 'Platinum',
    tagline: 'Comprehensive AI-Driven Intelligence',
    price: '$44,000 - $77,000',
    target: 'Established maritime companies prioritizing operational intelligence.',
    limits: '>100 vessels AND >500 voyages annually.',
    features: [
      'Everything in Gold, PLUS:',
      '<strong>AI-Summary, AI-CoPilot, and KnowledgeBase</strong>',
      '<strong>AI-Powered Vessel Compliance Management</strong>',
      'Premium Dedicated Support (4-8 hr response)',
      'Comprehensive onboarding (10-20 hours)'
    ],
    color: 'text-blue-500'
  },
  enterprise: {
    name: 'Enterprise',
    tagline: 'Bespoke Solutions & Unrivaled Support',
    price: 'Custom Quote',
    target: 'Large shipping conglomerates, charterers, and owners with complex fleets.',
    limits: 'Effectively unlimited, with custom integrations.',
    features: [
      'Everything in Platinum, PLUS:',
      '<strong>Custom API Integrations (ERP, TMS)</strong>',
      'Dedicated Customer Success Manager',
      '24/7 Premium Support',
      'On-site training and workshops'
    ],
    color: 'text-gray-800'
  }
};

const featuresData = [
  { title: 'AI-Powered Laytime/Demurrage Calculation', content: 'Drastically reduces calculation time from hours to minutes. AI minimizes disputes, prevents costly demurrage overpayments, and maximizes despatch earnings by learning from historical data to improve accuracy over time.' },
  { title: 'Real-Time Dashboards and Analytics', content: 'Provides instant visibility into fleet performance, demurrage exposure, and vessel status. Enables data-driven decision-making, identifies bottlenecks, and helps optimize port calls for maximum efficiency.' },
  { title: 'AI-Summary, AI-CoPilot and KnowledgeBase', content: 'Condenses lengthy documents into actionable insights, provides an intelligent assistant for complex queries and scenario planning, and centralizes all company data into an instantly accessible knowledge hub.' },
  { title: 'AI-Powered Vessel Compliance Management', content: 'Automates tracking, expiry alerts, and management of all vessel certificates. This reduces the risk of non-compliance fines, ensures constant operational readiness, and provides analytics on compliance trends.' },
  { title: 'Web-Based Manual Calculation', content: 'A foundational feature that provides a standardized, accessible platform for precise manual calculations. It reduces human error and creates a central, auditable repository for all laytime data, forming the basis for digital transformation.' }
];

export default function PricingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedTier, setSelectedTier] = useState('silver');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [roiData, setRoiData] = useState({
    vessels: 50,
    voyages: 200,
    demurrage: 200000,
    labor: 50
  });
  const [totalSavings, setTotalSavings] = useState(37500);
  const [roiPercentage, setRoiPercentage] = useState(36);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login?callbackUrl=/pricing');
    }
  }, [status, router]);

  // Calculate ROI when data changes
  useEffect(() => {
    const { vessels, voyages, demurrage, labor } = roiData;
    
    const demurrageSavings = demurrage * 0.05; // 5% reduction
    const timeSavingsHours = voyages * 1.5; // 1.5 hours saved per voyage
    const laborSavings = timeSavingsHours * labor;
    const complianceSavings = vessels * 250; // Simplified proxy for risk reduction
    
    const total = demurrageSavings + laborSavings + complianceSavings;
    setTotalSavings(total);
    
    // Update ROI percentage (example for Gold Tier)
    const goldTierCost = 27500;
    const netBenefit = total - goldTierCost;
    const roiPercent = (netBenefit / goldTierCost) * 100;
    setRoiPercentage(Math.round(roiPercent));
  }, [roiData]);

  // Initialize chart when component mounts
  useEffect(() => {
    if (chartRef.current && typeof window !== 'undefined') {
      import('chart.js/auto').then(({ Chart }) => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        const ctx = chartRef.current?.getContext('2d');
        if (ctx) {
          const { vessels, voyages, demurrage, labor } = roiData;
          const demurrageSavings = demurrage * 0.05;
          const timeSavingsHours = voyages * 1.5;
          const laborSavings = timeSavingsHours * labor;
          const complianceSavings = vessels * 250;

          chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Demurrage Reduction', 'Labor Efficiency', 'Compliance Risk Mitigation'],
              datasets: [{
                data: [demurrageSavings, laborSavings, complianceSavings],
                backgroundColor: ['#2563eb', '#34d399', '#f59e0b'],
                hoverOffset: 4
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                },
                tooltip: {
                  callbacks: {
                    label: function(context: any) {
                      let label = context.label || '';
                      if (label) {
                        label += ': ';
                      }
                      if (context.parsed !== null) {
                        label += new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(context.parsed);
                      }
                      return label;
                    }
                  }
                }
              }
            }
          });
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [roiData]);

  const handleSliderChange = (field: keyof typeof roiData, value: number) => {
    setRoiData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect to login
  }

  return (
    <main className="bg-gray-50 text-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Driving Maritime Profitability with AI</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">Translate complex maritime operations into streamlined, cost-saving processes. Explore our pricing and calculate your potential return on investment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#pricing" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition">Explore Plans</a>
              <button 
                onClick={handleLogout}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign Out
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Find the Plan That's Right for You</h2>
            <p className="text-gray-600 mt-2">Scalable solutions for fleets of all sizes, from small operators to large enterprises.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {Object.entries(tierData).map(([key, tier], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`cursor-pointer bg-white p-6 rounded-lg border-2 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${
                  selectedTier === key 
                    ? 'border-blue-500 transform scale-105 shadow-lg' 
                    : 'border-transparent'
                }`}
                onClick={() => setSelectedTier(key)}
              >
                <h3 className={`text-2xl font-bold ${tier.color}`}>{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{tier.tagline.split(' ').slice(0, 2).join(' ')}</p>
                <p className="text-4xl font-bold my-4">{tier.price}</p>
                <p className="text-xs text-gray-500">
                  {key === 'enterprise' ? 'Contact Us' : 'Billed Annually'}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="fade-in">
              <h3 className={`text-3xl font-bold ${tierData[selectedTier].color}`}>
                {tierData[selectedTier].name} 
                <span className="text-lg font-medium text-gray-500"> {tierData[selectedTier].tagline}</span>
              </h3>
              <p className="text-gray-600 mt-2"><strong>Best for:</strong> {tierData[selectedTier].target}</p>
              <p className="text-gray-600 mt-1"><strong>Limits:</strong> {tierData[selectedTier].limits}</p>
              <div className="mt-6 border-t pt-6">
                <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                <ul className="space-y-3 text-gray-700">
                  {tierData[selectedTier].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Calculate Your Potential ROI</h2>
            <p className="text-gray-600 mt-2">See how MarineFlowAI can translate into tangible financial benefits for your operations. Adjust the sliders to match your fleet's profile.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Your Fleet Profile</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="vessels" className="font-medium">Number of Vessels</label>
                  <input 
                    type="range" 
                    id="vessels" 
                    min="10" 
                    max="200" 
                    value={roiData.vessels} 
                    onChange={(e) => handleSliderChange('vessels', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right font-semibold text-blue-600">{roiData.vessels}</div>
                </div>
                <div>
                  <label htmlFor="voyages" className="font-medium">Annual Voyages</label>
                  <input 
                    type="range" 
                    id="voyages" 
                    min="50" 
                    max="1000" 
                    value={roiData.voyages} 
                    onChange={(e) => handleSliderChange('voyages', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right font-semibold text-blue-600">{roiData.voyages}</div>
                </div>
                <div>
                  <label htmlFor="demurrage" className="font-medium">Annual Demurrage Cost ($)</label>
                  <input 
                    type="range" 
                    id="demurrage" 
                    min="50000" 
                    max="2000000" 
                    step="10000" 
                    value={roiData.demurrage} 
                    onChange={(e) => handleSliderChange('demurrage', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right font-semibold text-blue-600">
                    ${roiData.demurrage.toLocaleString()}
                  </div>
                </div>
                <div>
                  <label htmlFor="labor" className="font-medium">Average Labor Cost ($/hour)</label>
                  <input 
                    type="range" 
                    id="labor" 
                    min="20" 
                    max="150" 
                    value={roiData.labor} 
                    onChange={(e) => handleSliderChange('labor', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right font-semibold text-blue-600">${roiData.labor}</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Your Estimated Annual Savings</h3>
              <p className="text-6xl font-bold text-green-600 mb-6">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(totalSavings)}
              </p>
              <div className="relative w-full max-w-400 mx-auto h-300 max-h-400">
                <canvas ref={chartRef} />
              </div>
              <div className="mt-6 p-4 bg-blue-50 text-blue-800 rounded-lg">
                <p className="font-semibold">
                  This represents a potential ROI of <span className="font-bold text-lg">~{roiPercentage}%</span> with a Gold Tier plan, demonstrating a powerful return on your investment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">A Comprehensive AI-Powered Suite</h2>
            <p className="text-gray-600 mt-2">Explore the core features that drive efficiency and profitability across your fleet.</p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-100"
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <span>{feature.title}</span>
                  <svg 
                    className={`w-6 h-6 shrink-0 transition-transform ${expandedFeature === index ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedFeature === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="p-5 border-t border-gray-200">
                    <p className="text-gray-600">{feature.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">Let our experts show you how MarineFlowAI can be tailored to your specific needs. Schedule a personalized demo today.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition">
              Request a Free Demo
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 