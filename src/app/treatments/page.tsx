import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function TreatmentsPage() {
  const treatments = [
    {
      name: "Wegovy (Semaglutide)",
      slug: "wegovy",
      price: "£199/month",
      highlights: [
        "FDA-approved medication",
        "Reduces appetite",
        "Weekly injection",
        "Lose up to 15% weight",
      ],
      description:
        "Helps reduce appetite and calorie intake for effective weight management.",
      image: "/wegovy-treatment.jpg",
    },
    {
      name: "Mounjaro (Tirzepatide)",
      slug: "mounjaro",
      price: "£249/month",
      highlights: [
        "Dual-action formula",
        "Weekly injection",
        "Significant weight loss",
        "Blood sugar control",
      ],
      description:
        "Regulates blood sugar and promotes weight loss through dual hormone action.",
      image: "/mounjaro-treatment.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-emerald-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weight Loss Treatments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our prescription treatments are clinically proven to help you
            achieve sustainable weight loss.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 mb-6">
              Whether you're in London or Manchester, our online service
              delivers nationwide.
            </p>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-64">
                  <Image
                    src={treatment.image}
                    alt={treatment.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {treatment.name}
                    </h2>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-lg font-semibold">
                      {treatment.price}
                    </span>
                  </div>

                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {treatment.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 mb-6">{treatment.description}</p>

                  <Link
                    href={`/${treatment.slug}`}
                    className="inline-flex items-center justify-between w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-20">
            <button className="relative inline-flex items-center px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">Compare All Treatments</span>
              <span className="absolute inset-0 bg-emerald-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
