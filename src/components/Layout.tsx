import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ChatbotWidget from './ChatbotWidget';
import NavigationBot from './NavigationBot';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-20">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <div className="fixed bottom-4 right-4 space-y-4">
        <NavigationBot />
        <ChatbotWidget />
      </div>
    </div>
  );
}