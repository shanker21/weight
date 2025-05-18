// app/consultation/page.tsx
'use client';

import BMICalculator from '@/components/BMICalculator';
import { motion } from 'framer-motion';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-2 px-2 sm:px-4 lg:px-2">


          {/* Right Column - Semblance Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-xl border border-gray-200 top-4"
          >
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://online-booking.semble.io/?token=74c70d4c10ae5b5bcfdac5c09f6fca46953ae500" 
                className="w-full h-screen border-0 rounded-lg"
                allow="clipboard-write"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

    </div>
  );
}