import React from 'react';
import { BookOpen, Video, Bookmark, Clock, Star, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] sticky top-16">
      <nav className="p-4 space-y-2">
        <div className="space-y-1">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
            <BookOpen className="h-5 w-5 mr-3" />
            <span>Library</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
            <Video className="h-5 w-5 mr-3" />
            <span>Video Lectures</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
            <Bookmark className="h-5 w-5 mr-3" />
            <span>Bookmarks</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
            <Clock className="h-5 w-5 mr-3" />
            <span>Recent</span>
          </a>
        </div>
        
        <hr className="my-4" />
        
        <div className="space-y-1">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
            <Star className="h-5 w-5 mr-3" />
            <span>Featured</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg">
            <Settings className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}