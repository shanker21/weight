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
    <header className="bg-emerald-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex items-center text-2xl font-bold text-white">
              <Image 
                src="/images/logo.png"
                alt="logo"
                width={29}  
                height={29}
                className="mr-2"
              />
              WeightGone
            </Link>

            <nav className="hidden lg:flex items-center gap-8 ">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-50 transition-colors hover:-translate-y-1 font-bold whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/consultation" 
              className="hidden md:inline-block hover:bg-emerald-600 hover:text-white bg-white text-emerald-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-emerald-900 whitespace-nowrap hover:-translate-y-1 shadow-md"
            >
              Book Appointment
            </Link>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          {mobileMenuOpen && (
            <nav className="pb-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-center py-2 text-white hover:text-emerald-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/consultation" 
                className="block w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}