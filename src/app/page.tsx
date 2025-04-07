import Header from "../components/header";
import { CheckCircle, Truck, Shield, HeartPulse } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const treatments = [
    {
      name: "Wegovy (Semaglutide)",
      description:
        "FDA-approved weight loss medication that helps reduce appetite and calorie intake.",
      price: "£199/month",
    },
    {
      name: "Mounjaro (Tirzepatide)",
      description:
        "Dual-action medication that regulates blood sugar and promotes weight loss.",
      price: "£249/month",
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
        "Our GMC-registered doctors will assess your suitability for treatment.",
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
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-blue-50 p-16 md:py-24 relative">
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
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-200">
            Start My Consultation
          </button>
          <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md">
            Browse Treatments
          </button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="relative rounded-xl overflow-hidden z-10">
          <Image
            src="/home-pic.png"
            alt="Happy person after weight loss"
            width={600}
            height={400}
            className="w-full h-auto object-cover z-10"
            priority
          />
        </div>
        <div className="absolute -top-90 -right-40 w-[150%] h-[150%] bg-gradient-to-tl from-green-800/60 to-transparent rounded-[20%] z-0 hidden md:block opacity-80 hover:opacity-100 transition-opacity duration-500 animate-float-gradient"></div>
      </div>
    </div>
  </div>
</section>


      {/* Location CTA */}
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
                GMC-registered UK prescribers
              </h3>
              <p className="text-gray-600 text-center">
                Our doctors are fully qualified and registered with the GMC.
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
                  <Truck className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
                Fast & discreet delivery
              </h3>
              <p className="text-gray-600 text-center">
                Next-day delivery available in plain packaging.
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
                    <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-emerald-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-md">
              Compare All Treatments
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step today with our safe, effective treatments.
          </p>
          <button className="bg-white text-emerald-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Start My Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">WeightGone</h3>
              <p className="text-gray-400">
                Clinically approved weight loss treatments delivered across the
                UK.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Treatments
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  hello@weightgone.co.uk
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  0800 123 4567
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} WeightGone.co.uk. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
