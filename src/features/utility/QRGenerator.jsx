import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import Button from '../../components/common/Button';

export default function QRGenerator() {
  const [text, setText] = useState('https://zntrix-tools.com');
  const [qrUrl, setQrUrl] = useState('');

  const generateQR = (e) => {
    e.preventDefault();
    if (!text) return;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;
    setQrUrl(url);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Free QR Code Generator - Custom Barcodes" description="Create free custom QR codes for website URLs, contact information, text, and Wi-Fi networks." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">QR Code Generator</h1>
        <p className="text-gray-600">Generate high quality downloadable QR codes.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 max-w-xl mx-auto">
        <form onSubmit={generateQR} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Enter URL or Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>
          <Button type="submit" className="w-full">Generate QR Code</Button>
        </form>

        {qrUrl && (
          <div className="mt-8 text-center flex flex-col items-center">
            <img src={qrUrl} alt="Generated QR Code" className="w-48 h-48 border p-2 rounded-lg bg-white mb-4" />
            <a href={qrUrl} download="qrcode.png" target="_blank" rel="noreferrer">
              <Button variant="secondary">Download Image</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}