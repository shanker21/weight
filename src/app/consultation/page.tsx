// app/consultation/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ConsultationPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-2 px-2 sm:px-4 ">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-10 max-w-screen flex items-center justify-center bg-white"
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-lg font-medium text-gray-700">Loading consultation form...</p>
          </div>
        </motion.div>
      )}
      

      {/* Semblance Iframe */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white p-4 rounded-xl border border-gray-200 top-4"
      >
        
        <iframe 
          src="https://online-booking.semble.io/?token=74c70d4c10ae5b5bcfdac5c09f6fca46953ae500" 
          className="w-full h-screen border-0 rounded-lg"
          allow="clipboard-write"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </motion.div>
    </div>
  );
}