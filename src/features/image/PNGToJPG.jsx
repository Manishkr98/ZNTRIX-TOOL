import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { compressImage } from '../../utils/image/compressImage';
import { downloadBlob } from '../../utils/downloadFile';

export default function PNGToJPG() {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const jpgBlob = await compressImage(file, 0.95);
      downloadBlob(jpgBlob, file.name.replace(/\.[^/.]+$/, '') + '.jpg');
    } catch (err) {
      alert('Conversion failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Convert PNG to JPG Online - Instant File Conversion" description="Turn PNG images into standard JPEG format." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">PNG to JPG Converter</h1>
        <p className="text-gray-600">Quickly convert PNG image files into clean JPG pictures.</p>
      </div>

      {!file ? (
        <FileUploader onFilesSelected={(files) => setFile(files[0])} accept="image/png" multiple={false} />
      ) : (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="font-semibold mb-4">File Selected: {file.name}</p>
          <Button onClick={handleConvert} disabled={processing} className="w-full">
            {processing ? 'Converting...' : 'Convert PNG to JPG'}
          </Button>
        </div>
      )}
    </div>
  );
}