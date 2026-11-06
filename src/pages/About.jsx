import React from 'react';
import SEO from '../components/common/SEO';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <SEO title="About Us - Zntrix Tools" description="Learn about Zntrix Tools, our mission to simplify digital document processing safely." />
      <h1 className="text-3xl font-bold mb-4">About Zntrix Tools</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Zntrix Tools was designed with privacy, speed, and simplicity at its core. Our platform delivers lightweight web tools to process documents, optimize images, and compute statistics without transferring your data unnecessarily.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Whether you are merging reports into a unified PDF or creating instant QR codes, our apps run swiftly across desktop and mobile browsers.
      </p>
    </div>
  );
}