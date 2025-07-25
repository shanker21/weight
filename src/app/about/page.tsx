'use client';

import Link from 'next/link';
import { FaShieldAlt, FaClinicMedical, FaPoundSign, FaUserMd, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function AboutUs() {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-emerald-600" />,
      title: "Rapid Access",
      description: "Skip long NHS queues- book your first consultation in just a few days."
    },
    {
      icon: <FaClinicMedical className="text-3xl text-emerald-600" />,
      title: "Evidence-Led Treatments",
      description: " Everything we do is built on solid research and real patient success stories just like yours."
    },
    {
      icon: <FaPoundSign className="text-3xl text-emerald-600" />,
      title: "Straightforward Pricing and Payments",
      description: "You'll know the full cost before you book, and our flexible payment plans let you settle up in a way that fits your budget."
    },
    {
      icon: <FaUserMd className="text-3xl text-emerald-600" />,
      title: "Community & Connection",
      description: "Take part in support groups and the alum network to swap stories and toast each other's milestones.."
    },
    {
      icon: <FaThumbsUp className="text-3xl text-emerald-600" />,
      title: "Transparent Prices",
      description: "We Help you with no hiding fees or confusing terms."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-emerald-600" />,
      title: "UK Clinics Near You",
      description: "Our welcoming clinics in London, Manchester, Birmingham, and plenty of smaller towns are just a quick trip from where you live."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="mx-auto">

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="relative py-24 bg-[url('/images/hero-bg-texture.png')] bg-cover bg-center"
>
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-700/30 to-gray-50/100"></div>
  
  <div className="relative z-10 px-4  sm:px-6 lg:p-6  text-center">
    <div className="max-w-4xl mx-auto">
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
        Why <span className="text-emerald-700">Choose Us?</span>
      </h1>
      <p className="text-xl text-gray-800 mb-2">
        Specializing in personalized, face-to-face care at our Timperly clinic. 
        Our medical team combines cutting-edge treatments with compassionate support.
      </p>

    </div>
  </div>
</motion.div>

        {/* Features Grid */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-2 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
          {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative p-1 rounded-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-200 to-blue-200 p-0.5 -z-10  opacity-100 transition-opacity duration-300"></div>

                  <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6 h-full shadow-lg group-hover:shadow-2xl border border-gray-300 transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-full mb-4 text-emerald-600 group-hover:animate-bounce shadow-inner">
                        {feature.icon}
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        
        {/* Testimonials */}
        <div className="bg-emerald-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <span className="text-gray-600"></span>
              </div>
              <p className="text-gray-700 italic mb-4">
                "After struggling with my weight for years, WeightGone UK's personalized approach finally helped me lose 18kg. Their Manchester clinic made it so convenient."
              </p>
              <p className="font-medium text-gray-500">- Sarah K., 42</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">★★★★★</div>
                <span className="text-gray-600"></span>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Excellent, friendly and professional service. Very prompt and highly recommended."
              </p>
              <p className="font-medium text-gray-500">- David T., 35</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're searching for "weight loss in Manchester" or need online support, we're here to help.
          </p>
          <Link
          href="/consultation">
          <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Book Your Appointment
          </button></Link>
        </div>
      </div>
    </div>
  );
}