'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ClipboardList, Truck, Headset } from 'lucide-react';
import Link from 'next/link';
import BMICalculator from '@/components/BMICalculator';

const HowItWorks = () => {
  const steps = [
    {
      title: "Book Appointment",
      description: "Fix your consultation date and time through our booking page",
      icon: <ClipboardList className="w-8 h-8" />,
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Medical Review",
      description: "Meet with our clinicians to discuss your medical history.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Discuss Your Plan",
      description: "We'll recommend options based on your needs and qualifications",
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
    <div className="min-h-screen bg-gradient-to-tl from-emerald-100 me to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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

            <div className="space-y-12"> 
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 p-6 rounded-xl ${step.color} shadow-md`}> 
                    <div className="flex items-start">
                      <div className={`p-3 rounded-full ${step.color} ${step.iconColor} mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3> 
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
        <div className="md:hidden space-y-6"> 
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
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3> 
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
          className="mt-16 bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md border border-gray-100"
          id="eligibility"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
           
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
                  Start Your <span className="text-emerald-600">Weight Loss</span> Journey
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our medically-supervised weight loss plans are personalized, confidential,
                  and reviewed by UK doctors. Whether you're in Manchester or anywhere in the UK,
                  we make effective treatment accessible.
                </p>
              </div>

              <div className="space-y-6">
                {/* Eligibility Requirements  */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Eligibility Requirements
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Aged 18 - 75 years",
                      "BMI 30+ (or 27+ with weight-related comorbidity such as Hypertension, Dyslipidaemia, Prediabetes or Cardiovascular diseases)",
                      "No contraindications to weight loss medications"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-3 h-5 w-5 text-emerald-500">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You'll Need */}
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    What You'll Need
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Basic health information",
                      "Current medications list",
                      "Weight and height measurements",
                      "Lifestyle and dietary habits"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-3 h-5 w-5 text-blue-500">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* BMI Calculator */}
            <div className="flex-grow h-full">
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
            <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-200">
              Book Your Appointment
            </button>
          </Link>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-16 bg-gradient-to-br from-white rounded-xl shadow-md to-gray-50 p-8 "
>
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-emerald-600 mb-3 font-serif">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Quick answers to common queries about our weight loss programs and treatments
    </p>
  </div>

  <div className="space-y-4 max-w-3xl mx-auto">
    {[
      {
        question: "Do I need a prescription for weight loss medications?",
        answer: "Yes, all our medical treatments require a prescription. Our online consultation with a UK-registered prescriber ensures you get safe, approved medications tailored to your needs."
      },
      {
        question: "What are the common side effects?",
        answer: "While side effects vary by medication, common ones may include temporary nausea, stomach discomfort, or decreased appetite. Our clinicians will guide you on managing any effects."
      },
      {
        question: "How quickly will I receive my order?",
        answer: "Orders approved before 3PM are dispatched the same business day (Monday-Friday). We offer next-day delivery options for urgent requests."
      },
      {
        question: "What if I'm not eligible for treatment?",
        answer: "If our assessment shows you're not suitable for medication, we'll provide personalized lifestyle advice or recommend alternative approaches to support your weight loss goals."
      },
      {
        question: "Is the online consultation secure?",
        answer: "Absolutely. We use NHS-grade encryption and all consultations are confidential, reviewed by GMC-registered doctors in the UK."
      }
    ].map((faq, index) => (
      <div 
        key={index} 
        className="group bg-white p-5 rounded-lg border border-gray-200 transition-all duration-200 "
      >
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800 ">
            {faq.question}
          </h3>
          
        </div>
        <motion.div
          initial={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden"
        >
          <p className="text-gray-600 mt-3 pl-2 border-l-2 border-emerald-200">
            {faq.answer}
          </p>
        </motion.div>
      </div>
    ))}
  </div>

  <div className="mt-10 text-center">
    <Link 
      href="/contact" 
      className="inline-flex items-center px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 shadow hover:shadow-lg"
    >
      Still have questions?
      <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;