'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Mock data - replace with your actual data
const productData = {
  name: 'Mounjaro (Tirzepatide)',
  brand: 'Eli Lilly',
  description: 'Mounjaro is an injectable prescription medicine that may help adults with obesity or excess weight lose weight and keep it off. It contains the active ingredient Tirzepatide which works by targeting both GIP and GLP-1 receptors.',
  mainImage: '/images/mounjaro-main.jpeg',
  images: [
    '/images/mounjaro-1.jpeg',
    '/images/mounjaro-2.jpeg',
    '/images/mounjaro-3.jpeg',
    '/images/mounjaro-4.jpeg',
  ],
  variants: [
    {
      dosage: '2.5mg',
      price: 199.99,
      discountedPrice: 179.99,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '5mg',
      price: 219.99,
      discountedPrice: 199.99,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '7.5mg',
      price: 239.99,
      discountedPrice: 219.99,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '10mg',
      price: 259.99,
      discountedPrice: 239.99,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '12.5mg',
      price: 279.99,
      discountedPrice: 259.99,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
    {
      dosage: '15mg',
      price: 299.99,
      discountedPrice: 279.99,
      inStock: true,
      quantity: '1 x pre-filled pen (4 weekly doses)',
    },
  ],
  features: [
    'Helps regulate appetite and food intake',
    'Weekly injection for convenience',
    'Clinically proven for weight loss',
    'May help improve blood sugar control',
  ],
  howToUse: [
    'Inject once weekly on the same day each week',
    'Can be taken with or without food',
    'Rotate injection sites (abdomen, thigh, or upper arm)',
    'Follow dosage instructions carefully',
  ],
  sideEffects: [
    'Nausea',
    'Diarrhoea',
    'Constipation',
    'Abdominal pain',
    'Decreased appetite',
    'Vomiting',
  ],
  faqs: [
    {
      question: 'How quickly will I see results with Mounjaro?',
      answer: 'Most patients begin to see weight loss within the first 4 weeks of treatment, with more significant results after 12-16 weeks of consistent use.',
    },
    {
      question: 'Do I need a prescription for Mounjaro?',
      answer: 'Yes, Mounjaro is a prescription-only medication. You can complete an online consultation with our healthcare professionals to determine if it\'s suitable for you.',
    },
    {
      question: 'How should I store Mounjaro?',
      answer: 'Store unopened Mounjaro pens in the refrigerator between 2°C to 8°C. Once in use, you can keep the pen at room temperature (up to 30°C) for up to 21 days.',
    },
  ],
};

export default function MounjaroPage() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  // Auto-rotate images in carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productData.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleVariantSelect = (index: number) => {
    setSelectedVariant(index);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = (
    productData.variants[selectedVariant].discountedPrice * quantity
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            {/* <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                  Weight Loss Medications
                </a>
              </div>
            </li> */}
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
          {/* Left Column - Images */}
          <div className="md:w-1/2">
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 h-96 flex items-center justify-center">
              <Image
                src={productData.images[currentImage]}
                alt={productData.name}
                width={500}
                height={500}
                className="object-contain h-full w-full"
                priority
              />
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex gap-2 overflow-x-auto py-2">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <Image
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{productData.name}</h1>
            <p className="text-lg text-gray-600 mb-4">by {productData.brand}</p>

            {/* Rating */}
            {/* <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.2 (128 reviews)</span>
            </div> */}

            {/* Variant Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select Dosage:</h3>
              <div className="flex flex-wrap gap-2">
                {productData.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => handleVariantSelect(index)}
                    disabled={!variant.inStock}
                    className={`px-4 py-2 rounded-md border transition-all ${selectedVariant === index ? 'bg-blue-100 border-blue-500 text-blue-700' : 'border-gray-300 hover:border-gray-400'} ${!variant.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="font-medium">{variant.dosage}</div>
                    <div className="text-sm">
                      {variant.inStock ? (
                        <span className="text-green-600">In Stock</span>
                      ) : (
                        <span className="text-red-500">Out of Stock</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  £{productData.variants[selectedVariant].discountedPrice.toFixed(2)}
                </span>
                {productData.variants[selectedVariant].discountedPrice < productData.variants[selectedVariant].price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      £{productData.variants[selectedVariant].price.toFixed(2)}
                    </span>
                    <span className="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                      Save £{(productData.variants[selectedVariant].price - productData.variants[selectedVariant].discountedPrice).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">{productData.variants[selectedVariant].quantity}</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quantity:</h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                </button>
                <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                  disabled={quantity >= 10}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <button
                className={`w-full py-3 px-4 rounded-md font-medium text-white transition-all ${productData.variants[selectedVariant].inStock ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!productData.variants[selectedVariant].inStock}
              >
                {productData.variants[selectedVariant].inStock ? (
                  `Add to Cart - £${totalPrice}`
                ) : (
                  'Out of Stock'
                )}
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h3 className="sr-only">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('how-to-use')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'how-to-use' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                How to Use
              </button>
              <button
                onClick={() => setActiveTab('side-effects')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'side-effects' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Side Effects
              </button>
              <button
                onClick={() => setActiveTab('faqs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'faqs' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                FAQs
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-8">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Mounjaro</h2>
                <div className={`prose max-w-none text-gray-700 ${!showFullDescription ? 'line-clamp-3' : ''}`}>
                  <p>{productData.description}</p>
                  <p className="mt-4">Mounjaro (tirzepatide) is a groundbreaking medication that combines the effects of two incretin hormones (GIP and GLP-1) to regulate blood sugar and promote weight loss. It works by slowing gastric emptying, reducing appetite, and improving insulin sensitivity.</p>
                  <p className="mt-4">Clinical trials have shown that Mounjaro can help patients lose significantly more weight than diet and exercise alone, with many patients achieving 15% or more weight loss over 72 weeks when combined with lifestyle changes.</p>
                  <p className="mt-4">This medication is particularly effective for patients with type 2 diabetes or those struggling with obesity-related health conditions. It's administered via a convenient once-weekly injection with a pre-filled pen.</p>
                </div>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showFullDescription ? 'Show Less' : 'Read More'}
                </button>
              </div>
            )}

            {activeTab === 'how-to-use' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Mounjaro</h2>
                <div className="prose max-w-none text-gray-700">
                  <ul className="space-y-3">
                    {productData.howToUse.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-blue-50 p-4 rounded-md">
                    <h3 className="font-medium text-blue-800 mb-2">Important Safety Information</h3>
                    <p className="text-blue-700">Mounjaro should only be used under medical supervision. Always follow your healthcare provider's instructions and read the medication guide provided with your prescription.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'side-effects' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Possible Side Effects</h2>
                <div className="prose max-w-none text-gray-700">
                  <p>Like all medications, Mounjaro may cause side effects, although not everybody gets them. Most side effects are mild to moderate and tend to decrease over time as your body adjusts to the medication.</p>
                  
                  <h3 className="font-medium text-gray-900 mt-6 mb-2">Common Side Effects (may affect up to 1 in 10 people):</h3>
                  <ul className="space-y-2">
                    {productData.sideEffects.map((effect, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                    <h3 className="font-medium text-yellow-800 mb-2">Serious Side Effects (seek medical help immediately if experienced):</h3>
                    <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                      <li>Severe stomach pain that doesn't go away</li>
                      <li>Signs of pancreatitis (persistent severe abdominal pain sometimes radiating to the back)</li>
                      <li>Signs of allergic reaction (rash, itching, swelling especially of face/tongue/throat)</li>
                      <li>Vision changes</li>
                      <li>Rapid heartbeat</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="prose max-w-none text-gray-700">
                  <div className="space-y-4">
                    {productData.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium text-gray-900">{faq.question}</h3>
                        <p className="mt-1 text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Still have questions?</h3>
                    <p className="text-gray-600 mb-4">Our pharmacists are available to answer any questions you may have about Mounjaro or other weight loss medications.</p>
                    <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Contact Our Pharmacist
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prescription Notice */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-800">Prescription Required</h3>
              <div className="mt-2 text-blue-700">
                <p>
                  Mounjaro is a prescription-only medication. You'll need to complete a quick online consultation with one of our healthcare professionals before we can dispense this product.
                </p>
              </div>
              <div className="mt-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Start Online Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Information */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Important Safety Information</h3>
          <div className="prose prose-sm text-gray-600">
            <p>
              <strong>Mounjaro is not suitable for everyone.</strong> Do not use Mounjaro if you:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Are allergic to tirzepatide or any of the other ingredients</li>
              <li>Have a personal or family history of medullary thyroid carcinoma</li>
              <li>Have Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
              <li>Are pregnant, planning to become pregnant, or breastfeeding</li>
            </ul>
            <p className="mt-4">
              Always read the patient information leaflet before starting treatment. If you experience any severe side effects, stop taking Mounjaro and consult your doctor immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

