import React from 'react';
import SEO from '../components/common/SEO';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <SEO title="Terms of Service" description="Terms and conditions governing the usage of Zntrix Tools services." />
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-600 mb-4">
        By accessing Zntrix Tools, you agree to use our application for lawful purposes only. We provide utility features as-is without implied warranties.
      </p>
    </div>
  );
}