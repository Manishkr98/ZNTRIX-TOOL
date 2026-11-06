import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { splitPdfFile } from '../../utils/pdf/splitPdf';
import { downloadBlob } from '../../utils/downloadFile';

export default function SplitPDF() {
  const [file, setFile] = useState(null);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);
  const [processing, setProcessing] = useState(false);

  const handleSplit = async () => {
    if (!file) return;
    setProcessing(true);
    try {
      const splitBlob = await splitPdfFile(file, Number(startPage), Number(endPage));
      downloadBlob(splitBlob, 'split_zntrix.pdf');
    } catch (err) {
      alert('Error splitting PDF: ' + err.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO
        title="Split PDF File Online - Extract PDF Pages"
        description="Separate one page or a whole range for easy conversion into independent PDF files."
      />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Split PDF Document</h1>
        <p className="text-gray-600">Extract specified page ranges from your PDF document.</p>
      </div>

      {!file ? (
        <FileUploader onFilesSelected={(files) => setFile(files[0])} accept=".pdf" multiple={false} title="Select PDF File" />
      ) : (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <p className="font-semibold text-gray-800 mb-4">Selected File: {file.name}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Start Page</label>
              <input
                type="number"
                min="1"
                value={startPage}
                onChange={(e) => setStartPage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">End Page</label>
              <input
                type="number"
                min="1"
                value={endPage}
                onChange={(e) => setEndPage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <Button onClick={handleSplit} disabled={processing} className="w-full">
            {processing ? 'Processing...' : 'Split PDF'}
          </Button>
        </div>
      )}
    </div>
  );
}