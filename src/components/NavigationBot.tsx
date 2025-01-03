import React, { useState } from 'react';
import { Navigation, X, Send } from 'lucide-react';

export default function NavigationBot() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    "Find math notes",
    "Science lectures",
    "Study resources",
    "Help center"
  ];

  return (
    <div className="relative z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">Navigation Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4">
            <p className="text-gray-600 mb-4">How can I help you navigate the site?</p>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask for directions..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 shadow-lg"
      >
        <Navigation className="h-6 w-6" />
      </button>
    </div>
  );
}