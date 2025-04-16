// app/how-it-works/page.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, Truck, Headset } from 'lucide-react';
import Link from 'next/link';
import BMICalculator from '@/components/BMICalculator';

const HowItWorks = () => {
  const steps = [
    {
      title: "Online Consultation",
      description: "Complete our simple health questionnaire in just 5 minutes",
      icon: <ClipboardList className="w-8 h-8" />,
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Medical Review",
      description: "Our UK doctors review your information within 24 hours",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Discreet Delivery",
      description: "Medication shipped from our licensed UK pharmacy",
      icon: <Truck className="w-8 h-8" />,
      color: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      title: "Ongoing Support",
      description: "Dedicated clinical team for your weight loss journey",
      icon: <Headset className="w-8 h-8" />,
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Safe & Simple Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with your weight loss treatment in just a few easy steps
          </p>
        </motion.div>

        {/* Process Steps - Desktop */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-emerald-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12"> {/* Reduced from space-y-20 */}
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 p-6 rounded-xl ${step.color} shadow-md`}> {/* Reduced padding */}
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full ${step.color} ${step.iconColor} mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3> {/* Smaller text */}
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile */}
        <div className="md:hidden space-y-6"> {/* Reduced from space-y-8 */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-5 rounded-xl ${step.color} shadow-md relative`} 
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-full ${step.color} ${step.iconColor} mr-4`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3> {/* Smaller text */}
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-5 bg-emerald-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eligibility Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200"
          id="eligibility" 
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Start Your Journey in Minutes</h2>
              <p className="text-gray-600 mb-6">
                Our secure online consultation is quick, confidential, and reviewed by UK doctors. 
                Whether you're seeking weight loss help in Manchester or anywhere in the UK, we've made it easy.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Eligibility Requirements:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      <span>Aged 18–75</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      <span>BMI 30+ (or 27+ with a weight-related issue)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">What You'll Need:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      <span>Basic health info</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      <span>Current medications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-emerald-600">•</span>
                      <span>Weight, height, and lifestyle details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <BMICalculator />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/consultation">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-200">
              Start Online Consultation
            </button>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Do I need a prescription?",
                answer: "Yes. Our online consultation ensures a licensed prescriber issues it."
              },
              {
                question: "What are the side effects?",
                answer: "They vary, but common ones include nausea and stomach upset."
              },
              {
                question: "How fast will I receive my order?",
                answer: "Orders approved before 3PM are dispatched the same day (Mon-Fri)."
              },
              {
                question: "What if I'm not eligible?",
                answer: "We'll provide advice or recommend alternatives if you're not suitable."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;