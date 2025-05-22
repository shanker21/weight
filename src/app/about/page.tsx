'use client';

import Link from 'next/link';
import { FaShieldAlt, FaClinicMedical, FaPoundSign, FaUserMd, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function AboutUs() {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-emerald-600" />,
      title: "Fully UK-based & regulated",
      description: "Our clinic operates under strict NHS and CQC guidelines, ensuring the highest standards of care."
    },
    {
      icon: <FaClinicMedical className="text-3xl text-emerald-600" />,
      title: "Clinically approved treatments",
      description: "We only prescribe medications approved by NICE and MHRA, including Wegovy and Mounjaro."
    },
    {
      icon: <FaPoundSign className="text-3xl text-emerald-600" />,
      title: "Transparent pricing",
      description: "No hidden fees - our all-inclusive packages cover consultations, medications, and ongoing support."
    },
    {
      icon: <FaUserMd className="text-3xl text-emerald-600" />,
      title: "Personalised medical support",
      description: "Each patient receives a tailored plan from our GMC-registered doctors and nutrition specialists."
    },
    {
      icon: <FaThumbsUp className="text-3xl text-emerald-600" />,
      title: "Proven satisfaction rates",
      description: "94% of our patients report achieving their weight loss goals within their target timeframe."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-emerald-600" />,
      title: "Manchester specialists",
      description: "While we serve all UK patients, we're particularly experienced with Manchester communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="mx-auto">
        {/* Hero Section */}

        <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-blue-50 py-20"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose WeightGone UK?</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                       Transforming lives through medically-supervised weight loss programs tailored to your unique needs.
                    </p>
                </motion.div>

        {/* Features Grid */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        {/* <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Manchester Roots</h2>
              <p className="text-gray-600 mb-4">
                Founded in South Manchester by Dr. Sarah Wilkinson in 2018, WeightGone UK began as a local weight management clinic serving the Greater Manchester area.
              </p>
              <p className="text-gray-600 mb-4">
                After witnessing the growing need for accessible, medically-supervised weight loss solutions, we expanded our services nationwide while maintaining our commitment to personalized care.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be Manchester's most trusted weight loss clinic while serving patients across the UK through our online platform.
              </p>
            </div>
            <div className="md:w-1/2 bg-gray-100 min-h-[300px]">
              
              <div className="w-full h-full bg-[url('/images/manchester-clinic.jpg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div> */}

        {/* Team Section 
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Medical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-[url('/images/doctor-1.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Sarah Wilkinson</h3>
                <p className="text-blue-600 mb-3">Founder & Lead Physician</p>
                <p className="text-gray-600">
                  GMC-registered with 15 years experience in metabolic medicine and weight management.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-[url('/images/nutritionist.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Emma Thompson</h3>
                <p className="text-blue-600 mb-3">Head Nutritionist</p>
                <p className="text-gray-600">
                  Registered dietitian specializing in sustainable weight loss strategies.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-[url('/images/pharmacist.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">James Wilson</h3>
                <p className="text-blue-600 mb-3">Clinical Pharmacist</p>
                <p className="text-gray-600">
                  Expert in GLP-1 medications and medication safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div> */}

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

        {/* CTA Section */}
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