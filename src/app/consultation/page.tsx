// app/consultation/page.tsx
'use client';

import BMICalculator from '@/components/BMICalculator';
import { motion } from 'framer-motion';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">


          {/* Right Column - Semblance Iframe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-4 rounded-xl border border-gray-200 h-fit top-4"
          >
            
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://your-semblance-embed-url.com" 
                className="w-full h-[500px] border-0 rounded-lg"
                allow="clipboard-write"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

    </div>
  );
}