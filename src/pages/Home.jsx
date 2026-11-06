import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import SearchBar from '../components/common/SearchBar';
import ToolCard from '../components/common/ToolCard';
import { toolsData } from '../data/tools';
import { categories } from '../data/categories';

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(search.toLowerCase()) || 
                          tool.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pb-16">
      <SEO
        title="Free Online PDF, Image & Utility Tools"
        description="Every tool you need to work with PDFs, edit image files, and run web utilities in one place. 100% free and client-side processing."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Every Tool You Need for PDF & Media
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Fast, free, and privacy-first online utilities. Process your files directly in your browser without uploading to external servers.
          </p>
          <SearchBar value={search} onChange={setSearch} placeholder="Search for tools like 'Merge PDF', 'Compress Image'..." />
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-center space-x-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}