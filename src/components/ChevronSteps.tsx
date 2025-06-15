"use client";

import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronDown } from 'react-icons/fa';

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
        trackMouse: true,
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
            {/* Desktop View (Horizontal Chevrons) - unchanged */}
            <div className="hidden md:flex items-stretch h-[380px] w-full">
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
                                <div className="text-left w-full h-full overflow-hidden  mr-4 pl-4">
                                     <div className="flex items-center mb-3">
                                        <div className="bg-emerald-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold mr-3 text-lg flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold overflow-hidden text-gray-800">
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
            </div>

            {/* Mobile View (Vertical Chevrons) */}
<div className="md:hidden flex flex-col items-center h-[650px] w-full">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`relative transition-all duration-300 w-full ${index === activeStep
                            ? `z-10 flex-[2.5] my-[-15px] ${index === 0
                                ? 'active-step-top'
                                : index === steps.length - 1
                                    ? 'active-step-bottom'
                                    : 'active-step-center'
                            }`
                            : 'z-0 flex-1'
                            }`}
                    >
                        <button
                            onClick={() => setActiveStep(index)}
                            className={`h-full w-full flex items-center transition-all duration-300 ${index === activeStep
                                ? 'bg-emerald-100 shadow-lg px-4 py-0'
                                : 'bg-emerald-500 cursor-pointer animate-[ping-mini_1s_infinite] hover:bg-emerald-600 pt-4 group'
                            } ${index === 0
                                ? index === activeStep ? '' : 'clip-step-top'
                                : index === steps.length - 1
                                    ? index === activeStep ? '' : 'clip-step-bottom'
                                    : index === activeStep ? '' : 'clip-step-center'
                            }`}
                        >
                            {index === activeStep ? (
                                <div className="text-left w-full h-full overflow-y-auto pr-4 py-10">
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
                                        <span className="absolute h-16 w-16 rounded-full bg-white/30"></span>
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

        </div>
    );
};

export default ChevronSteps;