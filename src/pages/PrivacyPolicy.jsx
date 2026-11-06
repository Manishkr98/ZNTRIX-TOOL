import React from 'react';
import SEO from '../components/common/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <SEO title="Privacy Policy" description="Read our privacy commitments regarding data protection and client-side processing." />
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        At Zntrix Tools, your privacy is paramount. Most operations executed on this website occur client-side inside your browser engine. Files uploaded into our tools are processed locally and are not persistently stored or harvested on external systems.
      </p>
    </div>
  );
}