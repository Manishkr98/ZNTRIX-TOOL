import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { compressImage } from '../../utils/image/compressImage';
import { downloadBlob } from '../../utils/downloadFile';

export default function ImageCompressor() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(0.7);
  const [processing, setProcessing] = useState(false);

  const handleCompress = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const compressedBlob = await compressImage(file, parseFloat(quality));
      downloadBlob(compressedBlob, `compressed_${file.name}`);
    } catch (err) {
      alert('Compression failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Compress Image Online - Reduce Image File Size" description="Reduce JPG, PNG, and WebP image file sizes without sacrificing quality." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Compress Image</h1>
        <p className="text-gray-600">Decrease your image sizes effortlessly.</p>
      </div>

      {!file ? (
        <FileUploader onFilesSelected={(files) => setFile(files[0])} accept="image/*" multiple={false} />
      ) : (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="font-semibold mb-4">Selected: {file.name}</p>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quality: {Math.round(quality * 100)}%</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={handleCompress} disabled={processing} className="w-full">
            {processing ? 'Compressing...' : 'Compress & Download'}
          </Button>
        </div>
      )}
    </div>
  );
}