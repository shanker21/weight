"use client";

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const ChevronSteps = () => {
    const [activeStep, setActiveStep] = useState(0);

     const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (activeStep > 0) {
        setActiveStep((prev) => prev - 1);
      }
    },
    trackMouse: true, // enables dragging on desktop too
  });


    const steps = [
        {
            title: "Face-to-Face Consultation",
            description: (
                <>
                    Meet with our clinicians to discuss your medical history, lifestyle, and
                    ensure it's safe for you to begin your weight loss journey. We'll:
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Review your health background</li>
                        <li>Identify any underlying conditions</li>
                        <li>Assess suitability for treatment</li>
                    </ul>
                </>
            )
        },
        {
            title: "Health Assessment",
            description: (
                <>
                    Comprehensive baseline measurements including:
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Weight, BMI, and waist circumference</li>
                        <li>Blood pressure checks</li>
                        <li>Blood tests if required</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                        This helps us create a plan tailored specifically to your body.
                    </p>
                </>
            )
        },
        {
            title: "Personalised Weight Loss Plan",
            description: (
                <>
                    We'll recommend options based on your needs:
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Diet and lifestyle adjustments</li>
                        <li>Behavioural support strategies</li>
                        <li>Prescription medication if appropriate</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                        All recommendations follow NICE guidelines and clinical evidence.
                    </p>
                </>
            )
        },
        {
            title: "Ongoing Monitoring & Support",
            description: (
                <>
                    Regular check-ins (in-clinic or virtual) to:
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600">
                        <li>Track your progress</li>
                        <li>Adjust treatment as needed</li>
                        <li>Provide continuous support</li>
                    </ul>
                    <p className="mt-2 text-gray-600">
                        We're committed to your success every step of the way.
                    </p>
                </>
            )
        }
    ];

    return (
         <div className="relative w-full px-2 py-6">
            {/* <div className="md:hidden flex justify-center mb-6 space-x-3">
                {steps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`h-3 w-3 rounded-full transition-all ${index === activeStep ? 'bg-emerald-600 scale-125' : 'bg-gray-300'}`}
                    />
                ))}
            </div> */}

        
            <div className="hidden md:flex items-stretch h-[380px] w-full">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`relative transition-all duration-300 ${index === activeStep
                            ? `z-10 flex-[2.5] mx-[-15px] ${index === 0
                                ? 'active-step-left'
                                : index === steps.length - 1
                                    ? 'active-step-right'
                                    : 'active-step-middle'
                            }`
                            : 'z-0 flex-1'
                            }`}
                    >
                        <button
                            onClick={() => setActiveStep(index)}
                            className={`h-full w-full flex items-center transition-all duration-300 ${index === activeStep
                                ? 'bg-emerald-100 shadow-lg px-6 py-4'
                                : 'bg-emerald-500 cursor-pointer animate-[ping-mini_1s_infinite] hover:bg-emerald-600 px-1 group'
                            } ${index === 0
                                ? index === activeStep ? '' : 'clip-first-step'
                                : index === steps.length - 1
                                    ? index === activeStep ? '' : 'clip-last-step'
                                    : index === activeStep ? '' : 'clip-middle-step'
                            }`}
                        >
                            {index === activeStep ? (
                                <div className="text-left w-full h-full overflow-y-auto mr-4 pl-4">
                                     <div className="flex items-center mb-3">
                                        <div className="bg-emerald-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold mr-3 text-lg flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <div className="text-gray-600 space-y-1 pl-13">
                                        {step.description}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full w-full relative">
                                 
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="absolute h-16 w-16 rounded-full bg-white/30 "></span>
                                    </div>
                                    
                                    <span className="bg-white text-emerald-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl z-10 group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </span>
                                </div>
                            )}
                        </button>
                    </div>
                ))}
            </div>



        <div className="md:hidden space-y-4">
      <div
        {...swipeHandlers}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300"
      >
        <div className="flex items-start mb-4">
          <div className="bg-emerald-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4 text-lg flex-shrink-0">
            {activeStep + 1}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {steps[activeStep].title}
            </h3>
            <div className="text-gray-600 mt-2 space-y-2">
              {steps[activeStep].description}
            </div>
          </div>
        </div>
      </div>

      {/* Step Dots moved to bottom */}
      <div className="flex justify-center gap-2 mt-4">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeStep ? 'bg-emerald-600 scale-125' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
        </div>
    );
};

export default ChevronSteps;