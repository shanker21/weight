'use client'; 

import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const phoneNumber = '+441619485066'; 
  const message = 'Hello! I am intrested in your Weightloss treatments.'; 

  const handleClick = () => {
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-8 right-8 cursor-pointer  "
      onClick={handleClick}
    >
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all">
        <FaWhatsapp className="text-3xl" />
      </div>
    </div>
  );
}