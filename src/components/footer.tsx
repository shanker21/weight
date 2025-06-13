import React from 'react'
import { clinicVariables } from '@/utils/constants'

export default function Footer() {
  const mobile = clinicVariables.CLINIC_INFO.PHONE;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">WeightGone</h3>
          <p className="text-gray-400">
            Clinically approved weight loss treatments in Manchester.
            UK.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/treatments"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Treatments
              </a>
            </li>
            <li>
              <a
                href="/how-it-works"
                className="text-gray-400 hover:text-white transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-white">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="terms-of-service"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </li> */}
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
              info@weightgone.co.uk
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
              {mobile}
            </li>
            <li className="flex items-center">
              Altrincham Travel Vaccination Centre <br />250 Stockport Rd, Timperley, <br /> WA15 7UN, UK
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
  )
}
