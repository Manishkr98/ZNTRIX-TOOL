import React from 'react';
import SEO from '../components/common/SEO';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <SEO title="Contact Us" description="Get in touch with the Zntrix Tools team for support, feature requests, or business inquiries." />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-white p-6 rounded-xl border">
        <div>
          <label className="block text-sm font-semibold mb-1">Your Name</label>
          <input type="text" className="w-full p-2.5 border rounded-lg" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email Address</label>
          <input type="email" className="w-full p-2.5 border rounded-lg" placeholder="name@example.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea rows={4} className="w-full p-2.5 border rounded-lg" placeholder="Write your inquiry here..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}