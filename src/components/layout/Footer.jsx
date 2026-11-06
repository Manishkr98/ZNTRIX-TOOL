import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">ZNTRIX TOOLS</h3>
          <p className="text-sm">
            Free online tools for PDF editing, image processing, and daily digital utilities. Fast, secure, and privacy-focused.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Popular PDF Tools</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/merge-pdf" className="hover:text-white">Merge PDF</Link></li>
            <li><Link to="/split-pdf" className="hover:text-white">Split PDF</Link></li>
            <li><Link to="/rotate-pdf" className="hover:text-white">Rotate PDF</Link></li>
            <li><Link to="/jpg-to-pdf" className="hover:text-white">JPG to PDF</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Image & Utility</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/compress-image" className="hover:text-white">Compress Image</Link></li>
            <li><Link to="/resize-image" className="hover:text-white">Resize Image</Link></li>
            <li><Link to="/qr-generator" className="hover:text-white">QR Generator</Link></li>
            <li><Link to="/word-counter" className="hover:text-white">Word Counter</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Legal & Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
        &copy; {new Date().getFullYear()} Zntrix Tools. All rights reserved.
      </div>
    </footer>
  );
}