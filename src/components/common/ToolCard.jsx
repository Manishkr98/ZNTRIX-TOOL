import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function ToolCard({ tool }) {
  const IconComponent = Icons[tool.icon] || Icons.FileText;

  return (
    <Link
      to={tool.path}
      className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-lg flex items-center justify-center mb-4 transition-colors">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 mb-2 transition-colors">
          {tool.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{tool.description}</p>
      </div>
    </Link>
  );
}