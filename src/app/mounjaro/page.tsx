'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "../../components/header";
import Link from 'next/link';
import { clinicVariables } from '@/utils/constants';


export default function MounjaroPage() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('how-to-take');

const variants = Object.keys(clinicVariables.PRICING.MOUNJARO).map((dosage) => ({
  dosage,
  price: clinicVariables.PRICING.MOUNJARO[dosage],
  weeklyPrice: clinicVariables.WEEKLY_PRICING.MOUNJARO[dosage],
  inStock: true, 
  quantity: '1 x pre-filled pen (4 weekly doses)' 
}));

  const dosages = '/images/mounjaro-dosage.png';
  const images = [
    '/images/mounjaro-main.jpeg',
    '/images/mounjaro-1.jpeg',
    '/images/mounjaro-2.png',
    '/images/mounjaro-3.jpeg',
    '/images/mounjaro-4.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleVariantSelect = (index: number) => {
    setSelectedVariant(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              <a href="/treatments" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                <span className="ml-1 text-sm font-medium md:ml-2">Treatments</span>
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Mounjaro</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 h-96 flex items-center justify-center">
              <Image
                src={images[currentImage]}
                alt="Mounjaro (Tirzepatide)"
                width={500}
                height={500}
                className="object-contain h-full w-full"
                priority
              />
            </div>

            <div className="flex gap-2 overflow-x-auto py-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <Image
                    src={image}
                    alt={`Mounjaro ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Mounjaro (Tirzepatide)</h1>
            <p className="text-lg text-gray-600 mb-4">by Eli Lilly</p>
 <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => handleVariantSelect(index)}
              disabled={!variant.inStock}
              className={`px-4 py-2 rounded-md border transition-all ${
                selectedVariant === index 
                  ? 'bg-blue-100 border-blue-500 text-blue-700' 
                  : 'border-gray-300 hover:border-gray-400 text-gray-700'
              } ${
                !variant.inStock ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <div className="font-medium">{variant.dosage}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold  text-gray-900">
            £{variants[selectedVariant].price}<span className="text-2xl text-gray-800">/month</span>
          </span>
          <span className="text-xl text-gray-500 ml-4 ">
            £{variants[selectedVariant].weeklyPrice}/week
          </span>
        </div>
        <p className="text-md  text-gray-500 mt-1">
          Eligible for BMI of 27* or 30 kg/m²
          <span className="text-md underline text-blue-500 ml-2">
            <Link href="/how-it-works#eligibility">*Check Eligibility</Link>
          </span>
        </p>
      </div>

            <div className="mb-8">
              <Link href="/consultation">
              <button
                className={`w-full cursor-pointer py-3 px-4 rounded-md font-medium text-white transition-all ${variants[selectedVariant].inStock ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Start Journey
              </button>
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <h3 className="sr-only">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dual-action formula</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Weekly injection</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Significant weight loss</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Blood sugar control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Mounjaro?</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Mounjaro (tirzepatide) is an innovative injectable prescription medication for chronic weight management in adults. 
              It combines the effects of GIP and GLP-1 hormones to regulate appetite and improve metabolic function.
            </p>
            <p className="mt-4">
              As the first dual GIP and GLP-1 receptor agonist, Mounjaro offers superior weight loss results compared to single-action medications. 
              It targets multiple pathways involved in weight regulation for comprehensive effects.
            </p>
            <p className="mt-4">
              Clinical trials show Mounjaro can help patients lose up to 22% of their body weight when combined with lifestyle changes. 
              The medication follows a structured dose escalation to optimize tolerability.
            </p>
            <p className="mt-4">
              Mounjaro is approved for adults with obesity (BMI ≥30) or overweight (BMI ≥27) with weight-related conditions like type 2 diabetes.
            </p>
            
            <div className="mt-4 flex justify-center">
              <div className="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
                <Image
                  src={dosages}
                  alt="Mounjaro dosage schedule"
                  width={2000}
                  height={2500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('how-to-take')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'how-to-take' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                How to Take
              </button>
              <button
                onClick={() => setActiveTab('how-it-works')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'how-it-works' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                How it Works
              </button>
              <button
                onClick={() => setActiveTab('who-is-it-for')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'who-is-it-for' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Who is it For
              </button>
              <button
                onClick={() => setActiveTab('side-effects')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'side-effects' ? 'border-emerald-500 text-emerald-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Side Effects
              </button>
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'how-to-take' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Take Mounjaro</h3>
                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Our clinicians will create a personalized treatment plan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Inject once weekly on the same day each week</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rotate injection sites (abdomen, thigh, or upper arm)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Follow the recommended dose escalation schedule</span>
                  </li>
                </ul>

                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Dosing Schedule</h4>
                  <p className="text-gray-700">
                    Mounjaro treatment typically begins with a 4-week dose escalation period at 2.5mg before increasing in 2.5mg increments every 4 weeks until reaching the target maintenance dose (ranging from 5mg to 15mg weekly based on individual response). This gradual titration helps minimize gastrointestinal side effects.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'how-it-works' && (
              <div className="prose max-w-none text-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How Mounjaro Works</h3>
                <p>
                Mounjaro (tirzepatide) works by mimicking two hormones, GLP-1 and GIP, to improve blood sugar control and promote weight loss in individuals with type 2 diabetes
                </p>
                <p className="mt-4">
                  The medication works by:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Activating both GIP and GLP-1 receptors for enhanced effects</li>
                  <li>Reducing appetite and food cravings</li>
                  <li>Slowing gastric emptying</li>
                  <li>Improving insulin sensitivity</li>
                  <li>Enhancing metabolic function</li>
                </ul>
                <p className="mt-4">
                  Patients typically see weight loss within the first 4 weeks, with optimal results after 12-16 weeks at maintenance dose.
                </p>
              </div>
            )}

            {activeTab === 'who-is-it-for' && (
              <div className="prose max-w-none text-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Who Can Take Mounjaro</h3>
                <p>
                  Mounjaro is suitable for:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Adults aged 18 to 83</li>
                  <li>Adults with obesity (BMI ≥ 30)</li>
                  <li>Adults who are overweight (BMI ≥ 27) with weight-related conditions</li>
                  <li>Patients with type 2 diabetes</li>
                  <li>Those needing significant weight loss</li>
                </ul>

                <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Who Should Not Take Mounjaro</h4>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                    <li>People over 83 years old</li>
                    <li>Pregnant or breastfeeding women</li>
                    <li>People with a personal/family history of medullary thyroid carcinoma</li>
                    <li>People with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
                    <li>Those with severe gastrointestinal disease</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'side-effects' && (
              <div className="prose max-w-none text-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Possible Side Effects</h3>
                <p>
                  Most side effects are mild to moderate and tend to decrease over time. They're most common when starting treatment 
                  or increasing doses.
                </p>
                
                <h4 className="font-medium text-gray-900 mt-6 mb-2">Common Side Effects:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Nausea</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Diarrhoea</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Constipation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Vomiting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Abdominal pain</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Decreased appetite</span>
                  </li>
                </ul>

                
              </div>
            )}
          </div>
        </div>

        <div className="mt-2 bg-green-50 p-2 rounded-lg border border-green-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-green-800">Start your weight-loss journey with Mounjaro</h3>
              <div className="mt-2 text-green-700">
                <p>
                  Mounjaro is a prescription-only medication. You'll need to complete a consultation with one of our 
                  healthcare professionals to determine if it's suitable for you.
                </p>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Book Your Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}