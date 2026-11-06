import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { resizeImage } from '../../utils/image/resizeImage';
import { downloadBlob } from '../../utils/downloadFile';

export default function ImageResizer() {
  const [file, setFile] = useState(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [processing, setProcessing] = useState(false);

  const handleResize = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const resizedBlob = await resizeImage(file, Number(width), Number(height));
      downloadBlob(resizedBlob, `resized_${file.name}`);
    } catch (err) {
      alert('Resizing failed');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Resize Image Online - Change Dimensions" description="Resize JPG, PNG, or GIF dimensions easily by height and width in pixels." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resize Image</h1>
        <p className="text-gray-600">Specify precise pixels to resize your graphics.</p>
      </div>

      {!file ? (
        <FileUploader onFilesSelected={(files) => setFile(files[0])} accept="image/*" multiple={false} />
      ) : (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="font-semibold mb-4">Selected: {file.name}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium mb-1">Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1">Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
          <Button onClick={handleResize} disabled={processing} className="w-full">
            {processing ? 'Resizing...' : 'Resize Image'}
          </Button>
        </div>
      )}
    </div>
  );
}