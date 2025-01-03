import React from 'react';
import { Book, Filter } from 'lucide-react';

const books = [
  {
    id: 1,
    title: "Advanced Mathematics",
    author: "Dr. Sarah Johnson",
    subject: "Mathematics",
    thumbnail: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300&h=400",
    description: "Comprehensive guide to advanced mathematical concepts",
    difficulty: "Advanced"
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    author: "Prof. Michael Chen",
    subject: "Physics",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=300&h=400",
    description: "Essential concepts in physics explained clearly",
    difficulty: "Intermediate"
  },
  // Add more books as needed
];

export default function Library() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Library</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img
              src={book.thumbnail}
              alt={book.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
              <p className="text-sm text-gray-700 mb-4">{book.description}</p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                  {book.subject}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  {book.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}