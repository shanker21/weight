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
<section className="relative bg-white overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 transform skew-y-3 origin-top-left"></div>
  
  <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Clinically Proven
          </span> Weight Loss Solutions
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          FDA-approved medications combined with personalized medical support for sustainable results
        </p>
        <div className="flex flex-wrap gap-4">
          {['Wegovy', 'Mounjaro', 'Orlistat'].map((treatment, i) => (
            <span key={i} className="bg-white px-4 py-2 rounded-full shadow-md border border-gray-200 font-medium">
              {treatment}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2"></div>
        <Image 
          src="/images/treatments-showcase.jpg" 
          alt="Weight loss treatments"
          width={600}
          height={400}
          className="relative rounded-xl shadow-xl"
        />
      </div>
    </div>
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
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-md">
  <table className="min-w-full divide-y divide-gray-200">
    <caption className="sr-only">Comparison between Mounjaro and Wegovy treatments</caption>
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider bg-gray-100 rounded-tl-xl">
          Treatment Details
        </th>
        <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-emerald-500 relative">
          <span className="relative z-10">Mounjaro</span>
          
        </th>
        <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-blue-400 to-blue-500 relative rounded-tr-xl">
          Wegovy
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {[
        { 
          name: "Active Ingredient", 
          mounjaro: "Tirzepatide", 
          wegovy: "Semaglutide",
          highlight: false
        },
        { 
          name: "Expected Weight Loss", 
          mounjaro: "Around 20% of body weight", 
          wegovy: "Around 15% of body weight",
          highlight: true
        },
        { 
          name: "Dosing Frequency", 
          mounjaro: "Once weekly injection", 
          wegovy: "Once weekly injection",
          highlight: false
        },
        { 
          name: "Eligibility Criteria", 
          mounjaro: "BMI ≥30 or ≥27 *", 
          wegovy: "BMI ≥30 or ≥27 *",
          highlight: false
        },
        { 
          name: "Prescription Required", 
          mounjaro: "Yes - In-person consultation", 
          wegovy: "Yes - In-person consultation",
          highlight: false
        }
      ].map((row, index) => (
        <tr key={index} className={row.highlight ? "bg-gray-50" : ""}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {row.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-700 bg-emerald-50 border-r border-emerald-100">
            {row.mounjaro}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700 bg-blue-50">
            {row.wegovy}
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={3} className="px-6 py-3 text-xs text-gray-500 bg-gray-50 rounded-b-xl">
          * Either BMI more than 30 or more than 27 with a cardiovascular disease 
         </td>
      </tr>
    </tfoot>
  </table>
  
  {/* <div className="bg-white p-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
    <div className="text-sm text-gray-600">
      <span className="font-medium">Note:</span> Individual results may vary based on health factors
    </div>
    <Link 
      href="/how-it-works#eligibility" 
      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium rounded-md shadow-sm hover:shadow-md transition-all"
    >
      Check Your Eligibility
      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  </div> */}
</div>
            </div>
            <div className="text-center"> {/* Parent container to center children */}
              <div className="inline-block  px-4 py-2 rounded-full text-sm font-medium mt-12">
                <Link href="/how-it-works#eligibility" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-black text-lg py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Check Your Eligibility
              </button>
            </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
