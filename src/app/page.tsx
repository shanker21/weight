'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { CheckCircle, Users, Shield, HeartPulse } from "lucide-react";
import { FaShieldAlt, FaClinicMedical, FaUserMd, FaHeadset } from 'react-icons/fa';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import ChevronSteps from '@/components/ChevronSteps';
import { Mail, Phone } from 'lucide-react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
}

const ScrollAnimation = ({ children, delay = 0 }: ScrollAnimationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


export default function Home() {

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "GPHC-registered prescribers",
      description: "Our pharmacists are fully qualified and registered with the GPHC."
    },
    {
      icon: <FaClinicMedical className="text-2xl" />,
      title: "Licensed UK pharmacy",
      description: "All medications are dispensed by a UK licensed pharmacy."
    },
    {
      icon: <FaUserMd className="text-2xl" />,
      title: "Face to Face Consultation",
      description: "Guaranteed confidentiality and personalized care."
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Ongoing clinical support",
      description: "Our team is available to support you throughout your journey."
    }
  ];

  const treatments = [
    {
      name: "Wegovy (Semaglutide)",
      description:
        "MHRA-approved weight loss medication that helps reduce appetite and calorie intake.",
      price: "£199/month",
      slug: "wegovy",
    },
    {
      name: "Mounjaro (Tirzepatide)",
      description:
        "Dual-action medication that regulates blood sugar and promotes weight loss.",
      price: "£249/month",
      slug: "mounjaro",
    },
  ];

  const testimonials = [
    {
      quote:
        "I've lost 3 stone in 4 months with WeightGone. The support has been amazing!",
      author: "Sarah J.",
      rating: 5,
    },
    {
      quote:
        "Finally found a solution that works for me. The convenience is unbeatable.",
      author: "Michael T.",
      rating: 5,
    },
    {
      quote: "Professional service from start to finish. Highly recommend!",
      author: "Emma L.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-100">


      <ScrollAnimation delay={50}>
        <section className="bg-gradient-to-b from-gray-100 to-teal-150 py-16 px-8 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your <br /><span className="bg-gradient-to-t to-emerald-800 from-blue-800 bg-clip-text text-transparent">Life with </span><br />
                  {/* <span className="text-emerald-600">Safely</span> and{" "} */}
                  <span className="text-emerald-900">WeightGone UK</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Clinically proven procedures, breakthrough medications and unmatched support face-to-face across the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/consultation">
                    <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 border-emerald-600 border-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-200">
                      Book Your Free Consultation
                    </button>
                  </Link>
                  <Link
                    href="/how-it-works#eligibility">
                    <button className="cursor-pointer border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md">
                      Check Your Eligibility
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden z-10">
                <Image
                  src="/home-pic.png"
                  alt="Happy person after weight loss"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-100 w-[100%] h-[120%] bg-gradient-to-tl from-green-800/60 to-transparent rounded-[50%] transform rotate-[180deg]  z-0 hidden md:block animate-float-gradient overflow-clip ">
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>


      <ScrollAnimation delay={100}>
        <section className="pt-4 pb-2 bg-gradient-to-b from-teal-150 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
                <svg className="w-10 h-10 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-xl text-gray-700">
                  Proudly serving <span className="text-emerald-600 font-semibold">Manchester</span> and surrounding areas
                </span>
              </div>

              <div className="mt-6 text-center">
                <p className="text-lg text-gray-600">
                   Book in-person consultations at our Manchester clinic @{" "}
                  <span className="font-medium text-emerald-800">250 Stockport Rd, Timperley, Altrincham WA15 7UN</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>


      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-8">
      <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4 mt-4">
        Transformative Treatments
      </span>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        From bespoke diet & exercise programmes and minimally invasive endoscopic procedures to life-changing surgical operations, our clinically proven interventions are tailored for maximum results.
      </p>

      {/* Centered Bullet List */}
      <div className="mt-6 space-y-3 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
          <span className="text-gray-700">Precision Diet & Exercise Plans</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
          <span className="text-gray-700">Minimally Invasive Endoscopic Options</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
          <span className="text-gray-700">Life-Changing Surgical Operations</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mt-8">
      <Link href="/clinic" className="w-full sm:w-auto">
        <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-bounce cursor-pointer flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Find a Clinic Near You
        </button>
      </Link>
    </div>
  </div>
</section>



       <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4 mt-4">
                Total Care Services
              </span>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enjoy expert consultations, eligibility assessments, personalised aftercare and flexible booking via phone or WhatsApp every step supported by our multidisciplinary team.
            </p>
              <div className="mt-6 space-y-3 flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Precision Diet & Exercise Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Minimally Invasive Endoscopic Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-gray-700">Life-Changing Surgical Operations</span>
                </div>
              </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mt-8">
            <Link href="/consultation" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-bounce cursor-pointer flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Book Your Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

        <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4 mt-4">
                Our Pillars of Excellence
              </span>
              <div className="mt-6 space-y-4 max-w-3xl mx-auto">
                {[
                  {
                    title: "GPhC-Registered Prescribers:",
                    text: "Every one of our pharmacists holds full GPhC registration, so you can count on every prescription being safe and accurate.",
                  },
                  {
                    title: "UK-Licensed Pharmacy:",
                    text: "All medicines are dispensed by our UK-licensed pharmacy, guaranteeing the quality checks and legal rules you expect.",
                  },
                  {
                    title: "Face-to-Face Confidential Care:",
                    text: "Every appointment happens face-to-face or through a secure video link, so your privacy stays protected and your care feels genuinely tailored to you.",
                  },
                  {
                    title: "Ongoing Clinical Support:",
                    text: "From your very first appointment through long-term follow-up, our clinical team is here to guide and motivate you.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-left">
                    <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">
                      <strong>{item.title}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mt-8">
            <Link href="/consultation" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-bounce cursor-pointer flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Book Your Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4 mt-4">
                UK-Wide Clinics
              </span>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               With clinics spread across London, Manchester, Birmingham, Leeds, Glasgow and Bristol, we're never far away when you need face-to-face weight-loss support. Inside every centre, our team of doctors, dietitians, therapists and trainers is ready to give you the same tailored check-up, modern treatment and lasting encouragement you count on from WeightGone UK.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mt-8">
            <Link href="/clinic" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-bounce cursor-pointer flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Find a Clinic Near You
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4 mt-4">
                What Our Patients Say
              </span>
              <ol className="list-decimal pl-5 text-lg text-gray-600 max-w-3xl mx-auto">
                <li>I lost 18 kg in six months thanks to the bespoke diet & exercise plan and weekly Monjaro injections. The ongoing support from my dietitian and nurse made all the difference!
                  – Sarah J., 42, Manchester
                </li>
                <li>The endoscopic sleeve gastroplasty was quick and minimally invasive. I was back at work within a week, and I’ve kept off 25 kg a year on. Truly life-changing!
                  – David R., 35, London
                </li>
                <li>From my first face-to-face consultation to the regular follow-ups, the team has been incredible. I feel supported every step of the way and highly recommend it!
                  – Aisha K., 29, Birmingham
                </li>
              </ol>
          </div>
        </div>
      </section>

      {/* <section className="pb-16 pt-12 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Why <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">WeightGone.co.uk</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Discover the difference of working with UK's trusted weight loss specialists
            </p>
          </div>

          <ScrollAnimation delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative p-1 rounded-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-200 to-blue-200 p-0.5 -z-10  opacity-100 transition-opacity duration-300"></div>

                  <div className="backdrop-blur-sm bg-white/50 rounded-xl p-6 h-full shadow-sm group-hover:shadow-2xl border border-gray-100 transition-all duration-300">
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
          </ScrollAnimation>
        </div>
      </section> */}

      {/* Popular Treatments */}

      {/* <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-12">
            <Link href="/treatments">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Treatments
              </span>
            </Link>
            <Link href="/treatments">
              <h2 className="text-3xl font-bold text-gray-900">
                Weight Loss Treatments
              </h2>
            </Link>
          </div> */}

          {/* <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Link href="/treatments" className="w-full sm:w-auto">
              <button className="w-full bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-md flex items-center cursor-pointer animate-bounce justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
                View All Treatments
              </button>
            </Link>

            <Link href="/how-it-works#eligibility" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-bounce cursor-pointer flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Check Your Eligibility
              </button>
            </Link>
          </div>
        </div> */}
      {/* </section> */} 

      {/* How It Works */}
      {/* <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                UK-Wide Clinics
              </span>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               With clinics spread across London, Manchester, Birmingham, Leeds, Glasgow and Bristol, we're never far away when you need face-to-face weight-loss support. Inside every centre, our team of doctors, dietitians, therapists and trainers is ready to give you the same tailored check-up, modern treatment and lasting encouragement you count on from WeightGone UK.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mt-8">
            <Link href="/clinic" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-bounce cursor-pointer flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Find a Clinic Near You
              </button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                        }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-4 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <p className="font-medium text-gray-800">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <ScrollAnimation delay={200}>
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Weight Loss Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step today with our effective treatments.
            </p>
            <Link
              href="/consultation">
              <button className="cursor-pointer bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Book My Appointment
              </button>
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}
