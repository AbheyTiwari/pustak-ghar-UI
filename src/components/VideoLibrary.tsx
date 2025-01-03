import React from 'react';
import { Play, Clock, Filter } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Introduction to Quantum Mechanics",
    instructor: "Dr. Robert Wilson",
    subject: "Physics",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400&h=225",
    duration: "45:30",
    completed: false
  },
  {
    id: 2,
    title: "Calculus: Derivatives",
    instructor: "Prof. Emily Brown",
    subject: "Mathematics",
    thumbnail: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=400&h=225",
    duration: "32:15",
    completed: true
  },
  // Add more videos as needed
];

export default function VideoLibrary() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Video Lectures</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Play className="h-12 w-12 text-white" />
              </div>
              {video.completed && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  Completed
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{video.instructor}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {video.duration}
                </span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                  {video.subject}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}