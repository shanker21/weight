"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Treatments", href: "/treatments" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center text-2xl font-bold text-emerald-600">
              <Image 
                src="/images/logo.png"
                alt="logo"
                width={29}  
                height={29}
                className="mr-2"
              />
              WeightGone
            </Link>

            {/* Desktop Navigation - will hide when space is tight */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - CTA button and mobile menu */}
          <div className="flex items-center gap-4">
            {/* Consultation Button - hidden on mobile */}
            <Link 
              href="/consultation" 
              className="hidden md:inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-emerald-200 whitespace-nowrap"
            >
              Book an Appointment
            </Link>

            {/* Mobile menu button - shows earlier than default (lg instead of md) */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Slide-down Animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          {mobileMenuOpen && (
            <nav className="pb-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile version of the CTA button */}
              <Link 
                href="/consultation" 
                className="block w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consult Now
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}