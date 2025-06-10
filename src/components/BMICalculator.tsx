// components/BMICalculator.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BMICalculator() {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  // Calculate BMI whenever inputs change
  useEffect(() => {
    calculateBMI();
  }, [height, weight, heightUnit, weightUnit]);

  const calculateBMI = () => {
    if (height <= 0 || weight <= 0) {
      setBmi(null);
      setCategory("Please enter valid values");
      return;
    }

    let heightInMeters = height;
    let weightInKg = weight;

    // Convert units to metric if needed
    if (heightUnit === 'ft') {
      const feet = Math.floor(height / 12);
      const inches = height % 12;
      heightInMeters = (feet * 12 + inches) * 2.54; // Convert to cm first
    }
    
    if (weightUnit === 'lbs') {
      weightInKg = weight * 0.453592;
    }

    if (heightInMeters > 300) {
      setBmi(null);
      setCategory("You ain't that tall!!");
      return;
    }

    if (weightInKg > 500) {
        setBmi(null);
        setCategory("Mukbang King");
        return;
      }

    if (heightInMeters < 50 || weightInKg < 2) {
      setBmi(null);
      setCategory("Are you a newborn baby?");
      return;
    }

    // Final conversion to meters
    heightInMeters = heightUnit === 'cm' ? height / 100 : heightInMeters / 100;
    
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    
    // Handle potential infinity (division by zero)
    if (!isFinite(bmiValue)) {
      setBmi(null);
      setCategory("Zero height? You must be a black hole! 🕳️");
      return;
    }

    setBmi(parseFloat(bmiValue.toFixed(1)));
    setCategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    if (bmi >= 30 && bmi < 90) return 'Obese';
    return 'Kindly recheck inputs';
  };

  const getCategoryColor = (): string => {
    if (!bmi) return 'bg-gray-300';
    if (bmi < 18.5) return 'bg-blue-300';
    if (bmi < 25) return 'bg-green-300';
    if (bmi < 30) return 'bg-yellow-300';
    return 'bg-red-300';
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-lg mx-auto"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">BMI Calculator</h3>
      
      {/* Height  */}
      <div className="mb-2">
        <label className="block text-gray-700 mb-2">Height</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
            className="flex-1 p-1 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 md:max-w-[80%] max-w-[55%]"
          />
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setHeightUnit('cm')}
              className={`px-3 py-3 ${heightUnit === 'cm' ? 'bg-emerald-600 text-white' : 'bg-gray-100  text-gray-600'}`}
            >
              cm
            </button>
            <button
              onClick={() => setHeightUnit('ft')}
              className={`px-3 py-3 ${heightUnit === 'ft' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              in
            </button>
          </div>
        </div>
      </div>

      {/* Weight  */}
      <div className="mb-2">
        <label className="block text-gray-700 mb-2">Weight</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
            className="flex-1 p-1 border text-gray-800 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 md:max-w-[80%] max-w-[55%]"
          />
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setWeightUnit('kg')}
              className={`px-3 py-3 ${weightUnit === 'kg' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              kg
            </button>
            <button
              onClick={() => setWeightUnit('lbs')}
              className={`px-3 py-3 ${weightUnit === 'lbs' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              lbs
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {bmi ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`p-4 rounded-lg mb-4 ${getCategoryColor()} transition-colors duration-500`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-700">Your BMI</p>
              <p className="text-3xl text-gray-900 font-bold">{bmi}</p>
            </div>
            <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
              {category} 
            </div>  
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-lg mb-4 bg-gray-100 border border-gray-200"
        >
          <div className="text-center">
            <p className="text-gray-700 font-medium">{category}</p>
            {(height === 0) && (weight) && (
              <p className="text-sm text-gray-500 mt-1">You aren't a black hole are you?</p>
            )}
            {(weight === 0) && (height) && (
              <p className="text-sm text-gray-500 mt-1">Even air has some weight!</p>
            )}
          </div>
        </motion.div>
      )}

      {/* Eligibility Info */}
<div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
  <p className="text-sm text-blue-800 mb-2">
    To be eligible for our weight loss treatments, you typically need:
  </p>
  <p className="text-sm text-blue-800 list-disc list-inside space-y-1">

    <b>BMI ≥27</b> or greater in the presence of least one weight-related condition:
</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-2 ml-4">
    <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
      <li>Hypertension</li>
      <li>Dyslipidaemia</li>
      <li>Obstructive sleep apnoea</li>
    </ul>
    <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
      <li>Cardiovascular disease</li>
      <li>Prediabetes</li>
      <li>Type 2 diabetes</li>
    </ul>
  </div>
</div>
    </motion.div>
  );
}