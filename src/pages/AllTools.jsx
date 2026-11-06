import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import ToolCard from '../components/common/ToolCard';
import SearchBar from '../components/common/SearchBar';
import { toolsData } from '../data/tools';

export default function AllTools() {
  const [search, setSearch] = useState('');

  const filtered = toolsData.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) || 
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <SEO title="All Web Tools - Full Directory" description="Browse all PDF conversion, image manipulation, and text tools provided by Zntrix Tools." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore All Available Tools</h1>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filtered.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}