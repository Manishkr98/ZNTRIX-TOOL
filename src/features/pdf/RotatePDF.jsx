import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { rotatePdfFile } from '../../utils/pdf/rotatePdf';
import { downloadBlob } from '../../utils/downloadFile';

export default function RotatePDF() {
  const [file, setFile] = useState(null);
  const [angle, setAngle] = useState(90);
  const [processing, setProcessing] = useState(false);

  const handleRotate = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const rotatedBlob = await rotatePdfFile(file, angle);
      downloadBlob(rotatedBlob, 'rotated_zntrix.pdf');
    } catch (err) {
      alert('Error rotating PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Rotate PDF - Rotate PDF Pages Online" description="Rotate your PDF pages horizontally or vertically." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Rotate PDF</h1>
        <p className="text-gray-600">Rotate PDF pages by 90, 180, or 270 degrees.</p>
      </div>

      {!file ? (
        <FileUploader onFilesSelected={(files) => setFile(files[0])} accept=".pdf" multiple={false} />
      ) : (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="font-semibold text-gray-800 mb-4">File: {file.name}</p>
          <div className="flex space-x-4 mb-6">
            {[90, 180, 270].map((deg) => (
              <button
                key={deg}
                onClick={() => setAngle(deg)}
                className={`px-4 py-2 rounded-lg border ${angle === deg ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                Rotate {deg}°
              </button>
            ))}
          </div>
          <Button onClick={handleRotate} disabled={processing} className="w-full">
            {processing ? 'Rotating...' : 'Apply Rotation & Download'}
          </Button>
        </div>
      )}
    </div>
  );
}