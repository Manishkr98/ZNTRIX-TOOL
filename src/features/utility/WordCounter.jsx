import React, { useState } from 'react';
import SEO from '../../components/common/SEO';

export default function WordCounter() {
  const [text, setText] = useState('');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.split(/\n+/).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Online Word Counter - Free Text Statistics Tool" description="Count words, characters, sentences, and paragraphs in real time with our live word count tool." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Word Counter</h1>
        <p className="text-gray-600">Calculate live text stats instantly while typing.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl border text-center">
          <span className="block text-2xl font-bold text-blue-600">{words}</span>
          <span className="text-xs font-semibold text-gray-500 uppercase">Words</span>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <span className="block text-2xl font-bold text-blue-600">{characters}</span>
          <span className="text-xs font-semibold text-gray-500 uppercase">Characters</span>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <span className="block text-2xl font-bold text-blue-600">{sentences}</span>
          <span className="text-xs font-semibold text-gray-500 uppercase">Sentences</span>
        </div>
        <div className="bg-white p-4 rounded-xl border text-center">
          <span className="block text-2xl font-bold text-blue-600">{paragraphs}</span>
          <span className="text-xs font-semibold text-gray-500 uppercase">Paragraphs</span>
        </div>
      </div>

      <textarea
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text content here..."
        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
      ></textarea>
    </div>
  );
}