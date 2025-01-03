import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm your AI study assistant. How can I help you today?", isBot: true }
  ]);

  const quickQuestions = [
    "Explain quantum physics",
    "Help with calculus",
    "Study tips",
    "Practice exercises"
  ];

  return (
    <div className="relative z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">AI Study Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  msg.isBot ? 'bg-gray-100 text-gray-900' : 'bg-indigo-600 text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                >
                  {q}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your question..."
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
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}