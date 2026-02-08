import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">
              Premium Clothing by Prince Enim
            </h2>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Style Meets</span>
              <span className="block text-blue-600">Pure Hustle.</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Bridging the gap between academic excellence and high-end fashion. Hand-selected quality fabrics, designed for the bold and the hardworking.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:scale-105">
                Explore Collection
                <ShoppingCart className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-base font-medium rounded-full text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white transition-all">
                Learn My Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p>Join 500+ satisfied customers in Accra</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5">
              <img
                className="w-full object-cover aspect-[4/5]"
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/856000b5-5e8c-4ca6-b17a-526a3ebb6a17/hero-prince-60c8a5a5-1770587263269.webp"
                alt="Prince Enim Fashion"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-white font-medium text-lg italic">"Fashion is not just what you wear, it's how you move."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;