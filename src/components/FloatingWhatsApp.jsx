'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { clinicVariables } from '../utils/constants';

export default function FloatingWhatsApp() {
  const phoneNumber = clinicVariables.CLINIC_INFO.WHATSAPP_NUMBER;
  const message = clinicVariables.CLINIC_INFO.WHATSAPP_MESSAGE;

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 10000); 

    return () => clearTimeout(timer); // cleanup
  }, []);

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div
      className="fixed bottom-8 right-8 flex items-center gap-2 cursor-pointer z-50"
      onClick={handleClick}
    >
      {showText && (
        <div
          className="bg-white text-green-600 font-medium px-4 py-2 rounded-full shadow-md animate-slide-in opacity-100 transition-opacity duration-500"
        >
          Chat on WhatsApp
        </div>
      )}
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all">
        <FaWhatsapp className="text-3xl" />
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(-10%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
