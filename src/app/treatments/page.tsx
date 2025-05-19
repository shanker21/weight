import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function TreatmentsPage() {
  const treatments = [
    {
      name: "Wegovy (Semaglutide)",
      slug: "wegovy",
      price: "£125/month",
      highlights: [
        "FDA-approved medication",
        "Reduces appetite",
        "Weekly injection",
        "Lose up to 15% weight",
      ],
      description:
        "Helps reduce appetite and calorie intake for effective weight management.",
      image: "/images/wegovy-main.png",
    },
    {
      name: "Mounjaro (Tirzepatide)",
      slug: "mounjaro",
      price: "£140/month",
      highlights: [
        "Dual-action formula",
        "Weekly injection",
        "Significant weight loss",
        "Blood sugar control",
      ],
      description:
        "Regulates blood sugar and promotes weight loss through dual hormone action.",
      image: "/images/mounjaro-main.jpeg",
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
              Browse through our result driven weightloss treatments
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
                    className="object-cover group-hover:scale-95 transition-transform duration-500"
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

          <div className="text-center mt-22">
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
            <div className="text-center"> {/* Parent container to center children */}
              <div className="inline-block mt-4 bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Link href="/how-it-works#eligibility">
                  Check your Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
