'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "../../components/header";


export default function WegovyPage() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState('how-to-take');

  // Sample variants data - you can replace with your actual data
  const variants = [
    {
      dosage: '0.25mg',
      price: 199.00,
      weeklyPrice: 49.75,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '0.5mg',
      price: 199.00,
      weeklyPrice: 49.75,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '1mg',
      price: 199.00,
      weeklyPrice: 49.75,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '1.7mg',
      price: 245.00,
      weeklyPrice: 61.25,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '2.4mg',
      price: 295.00,
      weeklyPrice: 73.75,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
  ];
  const dosages = '/images/wegovy-dosage.png';
  // Sample images - replace with your actual image paths
  const images = [
    '/images/wegovy-1.png',
    '/images/wegovy-2.png',
    '/images/wegovy-3.png',
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
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Wegovy</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Images */}
          <div className="md:w-1/2">
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 h-96 flex items-center justify-center">
              <Image
                src={images[currentImage]}
                alt="Wegovy (Semaglutide)"
                width={500}
                height={500}
                className="object-contain h-full w-full"
                priority
              />
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex gap-2 overflow-x-auto py-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <Image
                    src={image}
                    alt={`Wegovy ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Wegovy (Semaglutide)</h1>
            <p className="text-lg text-gray-600 mb-4">by Novo Nordisk</p>

            {/* Variant Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select Dosage:</h3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => handleVariantSelect(index)}
                    disabled={!variant.inStock}
                    className={`px-4 py-2 rounded-md border transition-all ${selectedVariant === index ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300 hover:border-gray-400 text-gray-700'} ${!variant.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="font-medium">{variant.dosage}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  £{variants[selectedVariant].price.toFixed(2)}
                </span>
                <span className="text-xl text-gray-500">
                  £{variants[selectedVariant].weeklyPrice.toFixed(2)} per week
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Eligible for BMI of 30 kg/m2 or more</p>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <button
                className={`w-full py-3 px-4 rounded-md font-medium text-white transition-all ${variants[selectedVariant].inStock ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Start Journey
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h3 className="sr-only">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Reduces appetite</span>
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
                  <span className="text-gray-700">Lose up to 15% weight</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Clinically proven</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Wegovy?</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Wegovy is an injectable prescription medicine used for chronic weight management in adults with obesity or overweight. 
              It contains semaglutide, a GLP-1 receptor agonist that helps regulate appetite and calorie intake.
            </p>
            <p className="mt-4">
              Wegovy (semaglutide) is the first FDA-approved weekly injectable medication specifically for chronic weight management. 
              It works by mimicking the GLP-1 hormone that targets areas of the brain involved in appetite regulation, helping you feel 
              fuller for longer and reducing calorie intake.
            </p>
            <p className="mt-4">
              In clinical trials, Wegovy helped patients lose an average of 15% of their body weight when combined with lifestyle changes. 
              The medication follows a carefully structured dose escalation schedule to help your body adjust and minimize side effects.
            </p>
            <p className="mt-4">
              Wegovy is suitable for adults with a BMI of 30 or more, or 27 or more with at least one weight-related condition 
              (such as high blood pressure, type 2 diabetes, or high cholesterol).
            </p>
            
            {/* You can add more content, images, or tables here as needed */}
            {/* Example table: */}
            <div className="mt-4 flex justify-center">
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
              <Image
                src={dosages}
                alt="dosages"
                width={2000}
                height={3000}
                className=" w-full h-auto object-contain"
                priority
              />
            </div>
            </div>
            {/* <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.25mg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 weeks</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Initial dose to minimize side effects</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.5mg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 weeks</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dose escalation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1mg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 weeks</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dose escalation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.7mg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4 weeks</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dose escalation</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.4mg</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Maintenance</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Long-term treatment</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>

        {/* Tabs */}
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

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'how-to-take' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How to Take Wegovy</h3>
                <ul className="space-y-4  text-gray-800">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Our clinicians will create a personalized treatment plan for you</span>
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
                    Wegovy treatment begins with a 4-week dose escalation period (0.25mg → 0.5mg → 1mg → 1.7mg) 
                    before reaching the maintenance dose of 2.4mg weekly. This gradual increase helps minimize side effects.
                  </p>
                </div>

                {/* You can add more content here as needed */}
              </div>
            )}

            {activeTab === 'how-it-works' && (
              <div className="prose max-w-none  text-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">How Wegovy Works</h3>
                <p>
                  Wegovy mimics the GLP-1 hormone that regulates appetite and food intake. It helps you feel fuller for longer, 
                  reduces hunger, and leads to lower calorie consumption.
                </p>
                <p className="mt-4">
                  The medication works by:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Slowing down gastric emptying</li>
                  <li>Reducing appetite and cravings</li>
                  <li>Increasing feelings of fullness</li>
                  <li>Improving blood sugar control</li>
                </ul>
                <p className="mt-4">
                  Most patients begin to see weight loss within the first 4 weeks, with optimal results typically after 
                  12-16 weeks of consistent use at the maintenance dose.
                </p>

                {/* You can add more content here as needed */}
              </div>
            )}

            {activeTab === 'who-is-it-for' && (
              <div className="prose max-w-none  text-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Who Can Take Wegovy</h3>
                <p>
                  Wegovy is suitable for:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>Adults aged 18 to 75</li>
                  <li>Adults with obesity (BMI ≥ 30)</li>
                  <li>Adults who are overweight (BMI ≥ 27) with at least one weight-related condition</li>
                  <li>People with conditions like type 2 diabetes, high blood pressure, or high cholesterol</li>
                </ul>

                <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Who Should Not Take Wegovy</h4>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                    <li>People over 75 years old</li>
                    <li>Pregnant or breastfeeding women</li>
                    <li>People with a history of pancreatitis</li>
                    <li>People with a history of gallbladder disease</li>
                    <li>People with liver or heart failure</li>
                    <li>Those taking insulin or other weight control drugs</li>
                  </ul>
                </div>

                {/* You can add more content here as needed */}
              </div>
            )}

            {activeTab === 'side-effects' && (
              <div className="prose max-w-none  text-gray-800">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Possible Side Effects</h3>
                <p>
                  Most side effects of Wegovy are mild to moderate and tend to decrease as your body adjusts to the medication. 
                  They're most common when starting treatment or increasing doses.
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
                    <span>Headache</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span>Fatigue</span>
                  </li>
                </ul>

                <div className="mt-6 bg-red-50 p-4 rounded-md border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2">Serious Side Effects (seek medical help immediately if experienced):</h4>
                  <ul className="list-disc pl-5 space-y-1 text-red-700">
                    <li>Severe abdominal pain (possible pancreatitis)</li>
                    <li>Signs of allergic reaction (rash, swelling, difficulty breathing)</li>
                    <li>Changes in vision</li>
                    <li>Rapid heartbeat or palpitations</li>
                    <li>Thoughts of self-harm</li>
                  </ul>
                </div>

                {/* You can add more content here as needed */}
              </div>
            )}
          </div>
        </div>

        {/* Prescription Notice */}
        <div className="mt-2 bg-green-50 p-2 rounded-lg border border-green-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-emerald-800">Start your weight-loss journy with Wegovy</h3>
              <div className="mt-2 text-emerald-700">
                <p>
                  Wegovy is a prescription-only medication. You'll need to complete a consultation with one of our 
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