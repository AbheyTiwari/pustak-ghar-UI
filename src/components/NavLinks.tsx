import React from 'react';
import { BookOpen, Video, MessageCircle } from 'lucide-react';

export default function NavLinks() {
  const links = [
    { icon: BookOpen, label: 'Library' },
    { icon: Video, label: 'Videos' },
    { icon: MessageCircle, label: 'Chat' },
  ];

  return (
    <div className="flex items-center gap-1">
      {links.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}