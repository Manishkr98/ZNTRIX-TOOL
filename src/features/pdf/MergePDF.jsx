import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { mergePdfFiles } from '../../utils/pdf/mergePdf';
import { downloadBlob } from '../../utils/downloadFile';
import { formatFileSize } from '../../utils/formatFileSize';
import { Trash2 } from 'lucide-react';

export default function MergePDF() {
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);

  const handleMerge = async () => {
    if (files.length < 2) return;
    setProcessing(true);
    try {
      const mergedBlob = await mergePdfFiles(files);
      downloadBlob(mergedBlob, 'merged_zntrix.pdf');
    } catch (err) {
      alert('Error merging PDFs: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO
        title="Merge PDF Files Online - Free PDF Binder"
        description="Combine multiple PDF documents into a single unified file in seconds. Free, secure, client-side PDF merging."
      />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Merge PDF Files</h1>
        <p className="text-gray-600">Combine PDF files in the order you want with the easiest PDF merger available.</p>
      </div>

      <FileUploader
        onFilesSelected={(newFiles) => setFiles((prev) => [...prev, ...newFiles])}
        accept=".pdf"
        title="Select PDF Files"
      />

      {files.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Selected Files ({files.length})</h2>
          <ul className="space-y-3 mb-6">
            {files.map((file, idx) => (
              <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-800 text-sm truncate">{file.name} ({formatFileSize(file.size)})</span>
                <button
                  onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          <Button onClick={handleMerge} disabled={processing || files.length < 2} className="w-full">
            {processing ? 'Processing PDF...' : 'Merge PDFs'}
          </Button>
        </div>
      )}
    </div>
  );
}