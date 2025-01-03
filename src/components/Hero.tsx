import React from 'react';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 h-[600px]">
      <HeroImage />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/40" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Your Journey to Knowledge Starts Here
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Access a world of educational resources, expertly curated video lectures, and AI-powered learning assistance.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 transition-colors">
                Start Learning
              </button>
              <button className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
                Browse Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}