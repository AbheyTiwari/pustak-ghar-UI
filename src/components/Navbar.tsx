import React from 'react';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-4 border border-gray-100">
        <div className="flex items-center gap-2 pr-4 border-r border-gray-200">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-gray-900">EduHub</span>
        </div>
        
        <NavLinks />
        <SearchBar />
      </div>
    </nav>
  );
}