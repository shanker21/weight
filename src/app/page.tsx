'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { CheckCircle, Users, Shield, HeartPulse } from "lucide-react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
}

const ScrollAnimation = ({ children, delay = 0 } : ScrollAnimationProps) => {
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

  const steps = [
    {
      title: "Complete Online Consultation",
      description:
        "Answer a few questions about your health and weight loss goals.",
    },
    {
      title: "Clinician Reviews Your Info",
      description:
        "Our GPHC-registered doctors will assess your suitability for treatment.",
    },
    {
      title: "Treatment Delivered to Your Door",
      description:
        "Discreet packaging and fast delivery to your preferred address.",
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
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      
      <ScrollAnimation delay={200}>
      <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-16 px-8 md:py-24 relative">
  <div className="container mx-auto px-4">
  <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Achieve Your Weight Loss Goals{" "}
          <span className="text-emerald-600">Safely</span> and{" "}
          <span className="text-emerald-600">Effectively</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Clinically approved treatments delivered discreetly across the UK
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
          href="/consult">
          <button className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-200">
            Book My Appointment
          </button>
          </Link>
          <Link
          href="/treatments">
          <button className="cursor-pointer border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md">
            Browse Treatments
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
        <div className="absolute -top-40 -right-100 w-[100%] h-[120%] bg-gradient-to-tl from-green-800/60 to-transparent rounded-[50%] transform rotate-[180deg]  z-0 hidden md:block animate-float-gradient overflow-clip">
        </div>
      </div>
      </div>
  </div>
</section>
</ScrollAnimation>


      {/* Location CTA */}
      <ScrollAnimation delay={300}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-100">
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Looking for weight loss in{" "}
              <span className="text-emerald-600 font-semibold">Manchester</span>{" "}
              or weight loss in{" "}
              <span className="text-emerald-600 font-semibold">London</span>?
              You're in the right place.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              We serve the entire UK with our online weight loss clinic.
            </p>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Why WeightGone.co.uk?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-emerald-100">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <HeartPulse className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                GPHC-registered UK prescribers
              </h3>
              <p className="text-gray-600 text-center">
                Our doctors are fully qualified and registered with the GPHC.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-emerald-100">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                Licensed UK pharmacy
              </h3>
              <p className="text-gray-600 text-center">
                All medications are dispensed by a UK licensed pharmacy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-emerald-100">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                Face to Face Consultation
              </h3>
              <p className="text-gray-600 text-center">
                Guaranteed confidentiality and personalized care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-emerald-100">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                Ongoing clinical support
              </h3>
              <p className="text-gray-600 text-center">
                Our team is available to support you throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Treatments
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Treatments
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 bg-white"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-3">
                    {treatment.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {treatment.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-xl font-bold text-gray-800 mb-4">
                      {treatment.price}
                    </p>
                    <Link href={`/${treatment.slug}`}>
                      <button className="cursor-pointer w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-emerald-200">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-18">
          <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Compare Treatments
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
            Mounjaro vs. Wegovy 
            </h2>
          </div>
          <div className="py-12 px-4 sm:px-6 lg:px-8"> 
  <div className="mx-auto max-w-4xl overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full divide-y divide-gray-200" >
    <caption className="caption-bottom text-gray-400">* Either BMI more than 30 or more than 27 with a cardiovascular disease </caption>
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Treatment</th>
          <th className="px-6 py-3 text-center text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50">Mounjaro</th>
          <th className="px-6 py-3 text-center text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50">Wegovy</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ingredient</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-emerald-50">Tirzepatide</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Semaglutide</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Expected weight loss</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-emerald-50">around 20%</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">around 15%</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Frequency</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-emerald-50">Once a Week</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Once a Week</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Eligibility</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-emerald-50">BMI over 30 *</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">BMI over 30 *</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Prescription Only</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-emerald-50">Yes</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-blue-50">Yes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-100"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4 text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
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
                      className={`w-5 h-5 ${
                        i < testimonial.rating
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
      </section>

      {/* Final CTA */}
      <ScrollAnimation delay={200}>
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step today with our safe, effective treatments.
          </p>
          <Link
          href="/consult">
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
