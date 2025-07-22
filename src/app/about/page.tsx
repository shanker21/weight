'use client';

import Link from 'next/link';
import { FaShieldAlt, FaClinicMedical, FaPoundSign, FaUserMd, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { Mail, Phone } from 'lucide-react';
export default function AboutUs() {
  const clinics = [
  {
    city: "London",
    address: "12 Baker Street, Marylebone, W1U 3BS",
    phone: "020 7946 0123",
    email: "london@weightgone.co.uk",
  },
  {
    city: "Manchester",
    address: "250 Stockport Road, Timperley, WA15 7UN",
    phone: "0161 948 50667",
    email: "manchester@weightgone.co.uk",
  },
  {
    city: "Birmingham",
    address: "45 New Street, Birmingham, B2 4RT",
    phone: "0121 200 3344",
    email: "birmingham@weightgone.co.uk",
  },
  {
    city: "Leeds",
    address: "18 Park Square East, Leeds, LS1 2LH",
    phone: "0113 350 8890",
    email: "leeds@weightgone.co.uk",
  },
  {
    city: "Glasgow",
    address: "77 Berkeley Street, Glasgow, G3 7DS",
    phone: "0141 204 1235",
    email: "glasgow@weightgone.co.uk",
  },
  {
    city: "Bristol",
    address: "5 Queen’s Road, Clifton, Bristol, BS8 1QB",
    phone: "0117 927 4455",
    email: "bristol@weightgone.co.uk",
  },
];

  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-emerald-600" />,
      title: "Fully UK-based & regulated",
      description: "Our clinic operates under the strict GPHC guidelines, ensuring highest standards of care."
    },
    {
      icon: <FaClinicMedical className="text-3xl text-emerald-600" />,
      title: "Clinically approved treatments",
      description: "We only prescribe medications approved by NICE and MHRA, including Wegovy and Mounjaro."
    },
    {
      icon: <FaPoundSign className="text-3xl text-emerald-600" />,
      title: "Transparent pricing",
      description: "No hidden fees – our all-inclusive packages cover consultations, medications, and ongoing support."
    },
    {
      icon: <FaUserMd className="text-3xl text-emerald-600" />,
      title: "Personalised medical support",
      description: "Each patient receives a tailored plan from our GPHC registered pharmacists."
    },
    {
      icon: <FaThumbsUp className="text-3xl text-emerald-600" />,
      title: "Proven satisfaction rates",
      description: "94% of our patients report achieving their weight loss goals within their target timeframe."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-emerald-600" />,
      title: "Manchester specialists",
      description: "Particularly experienced with Greater Manchester communities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="mx-auto">

{/* <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="relative py-24 bg-[url('/images/hero-bg-texture.png')] bg-cover bg-center"
>
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-700/30 to-gray-50/100"></div>
  
  <div className="relative z-10 px-4  sm:px-6 lg:p-6  text-center">
    <div className="max-w-4xl mx-auto">
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
        Why <span className="text-emerald-700">WeightGone UK</span> Stands Out
      </h1>
      <p className="text-xl text-gray-800 mb-2">
        Specializing in personalized, face-to-face care at our Timperly clinic. 
        Our medical team combines cutting-edge treatments with compassionate support.
      </p>

    </div>
  </div>
</motion.div> */}

        {/* Features Grid */}
        {/* <div className="bg-gradient-to-b from-gray-50 to-white py-2 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
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
        </div> */}

        
        {/* Testimonials */}
        {/* <div className="bg-emerald-50 rounded-xl p-8 md:p-12 mb-16">
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
        </div> */}

        {/* CTA */}
        {/* <div className="text-center pb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're searching for "weight loss in Manchester" or need online support, we're here to help.
          </p>
          <Link
          href="/consultation">
          <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            Book Your Appointment
          </button></Link>
        </div> */}
      </div>
      <div className="container mx-auto px-4 py-10 max-w-7xl text-gray-800">
          <h4 className="text-2xl font-semibold mb-2">About WeightGone UK</h4>
          <p className="mb-6">
            At WeightGone UK, we help people all over Britain lose weight in a safe and lasting way.
            Backed by medical know-how and caring support, our team of experts uses the newest proven
            treatments, meeting you face-to-face at clinics from Scotland to Wales.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Our Story</h4>
          <p className="mb-6">
            WeightGone UK started in 2020 when a team of top obesity doctors decided to combine medical
            weight-loss pills with caring, everyday support. Tired of long NHS waits and treatment plans
            that didn't fit every patient, they built a private service focused on fresh ideas, kindness,
            and real follow-through.
          </p>

          <h4 className="text-2xl font-semibold mb-2">Our Mission & Vision</h4>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Mission:</strong> We provide safe, proven weight-loss options, whether non-surgical or surgical, crafted to fit each person’s health needs and personal goals.</li>
            <li><strong>Vision:</strong> We picture a UK where excellent obesity care is easy to access, and where patients are backed by steady learning, positive support and a welcoming community.</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Our Expertise</h4>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Consultant physicians and bariatric surgeons:</strong> Board-certified doctors who zero in on obesity and metabolic surgery.</li>
            <li><strong>Registered dietitians:</strong> Credentialed nutrition pros holding at least a master's degree—who design meal plans, track your progress, and tweak as needed.</li>
            <li><strong>Clinical Psychologists:</strong> Behavioral specialists supporting you in creating habits that really stick.</li>
            <li><strong>Pharmacists and Nurse Practitioners:</strong> GPhC-registered prescribers review every medicine to ensure it is safe and well supported.</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Our Approach</h4>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Holistic Assessment:</strong> We kick things off with an easy conversation about your health story, what you do each day, and where you want to be in the future, whether we meet online or welcome you in the office.</li>
            <li><strong>Tailored Treatment:</strong> From a weight-loss injection to a routine tube-scope check or full surgery, we'll pair you with the safest, most effective path forward.</li>
            <li><strong>Integrated Support:</strong> You won't just start a plan; you'll also get meal tips, mindset coaching, and live groups that cheer you onward every week.</li>
            <li><strong>Long-Term Success:</strong> Routine check-ins and smart guardrails help you spot trouble early, stay inspired, and celebrate progress for years to come.</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-2">Why Choose Us?</h4>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Rapid Access:</strong> Skip long NHS queues—book your first consultation in just a few days.</li>
            <li><strong>Evidence-Led Treatments:</strong> Everything we do is built on solid research and real patient success stories just like yours.</li>
            <li><strong>UK Clinics Near You:</strong> Our welcoming clinics in London, Manchester, Birmingham, and plenty of smaller towns are just a quick trip from where you live.</li>
            <li><strong>Straightforward Pricing and Payments:</strong> You'll know the full cost before you book, and our flexible payment plans let you settle up in a way that fits your budget.</li>
            <li><strong>Community & Connection:</strong> Take part in support groups and the alum network to swap stories and toast each other's milestones.</li>
          </ul>

          <h4 className="text-2xl font-semibold mb-4">Our Clinics</h4>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-300 text-sm text-left">
              <thead className="bg-emerald-100 text-emerald-700">
                <tr>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Address</th>
                  <th className="px-4 py-2 border">Phone</th>
                  <th className="px-4 py-2 border">Email</th>
                </tr>
              </thead>
             <tbody>
              {clinics.map((clinic, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{clinic.city}</td>
                  <td className="px-4 py-2 border">{clinic.address}</td>
                  <td className="px-4 py-2 border">{clinic.phone}</td>
                  <td className="px-4 py-2 border">{clinic.email}</td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>

          <div className="mt-8">
            <p className="font-semibold">Join the WeightGone UK Family:</p>
            <p className='font-semibold mt-2'>Ready to start your weight loss journey with a team that truly cares?</p>
            <div className="flex items-center gap-2 text-emerald-700 mt-2">
              <Phone className="w-5 h-5" />
              <span>0800 123 WEIGHT</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 mt-2">
              <Mail className="w-5 h-5 mt-2" />
              <span>info@weightgone.co.uk</span>
            </div>
          </div>


          {/* CTA */}
          <div className="text-center py-10 border-t border-gray-200 mt-10">
            <Link href="/consultation">
              <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Book Your Appointment
              </button>
            </Link>
              <p>Together, we’ll help you transform your health and your life.</p>
          </div>
        </div>  
    </div>
  );
}