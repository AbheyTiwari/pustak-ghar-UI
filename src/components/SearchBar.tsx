import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="pl-9 pr-4 py-1.5 w-64 text-sm bg-gray-50 border-0 rounded-full focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors"
      />
    </div>
  );
}