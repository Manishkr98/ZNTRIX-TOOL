import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import FileUploader from '../../components/common/FileUploader';
import Button from '../../components/common/Button';
import { jsPDF } from 'jspdf';
import { downloadBlob } from '../../utils/downloadFile';

export default function JPGToPDF() {
  const [files, setFiles] = useState([]);
  const [processing, setProcessing] = useState(false);

  const handleConvert = async () => {
    if (files.length === 0) return;
    setProcessing(true);
    try {
      const pdf = new jsPDF();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const dataUrl = await new Promise((res) => {
          const reader = new FileReader();
          reader.onload = (e) => res(e.target.result);
          reader.readAsDataURL(file);
        });

        if (i > 0) pdf.addPage();
        pdf.addImage(dataUrl, 'JPEG', 10, 10, 190, 0);
      }
      const pdfBlob = pdf.output('blob');
      downloadBlob(pdfBlob, 'converted_zntrix.pdf');
    } catch (err) {
      alert('Error converting images to PDF');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Convert JPG to PDF - Free Image to PDF Converter" description="Convert JPG, PNG, and WebP images to PDF document easily." />
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Convert JPG to PDF</h1>
        <p className="text-gray-600">Transform images into high-quality PDF files instantly.</p>
      </div>

      <FileUploader onFilesSelected={(newFiles) => setFiles((prev) => [...prev, ...newFiles])} accept="image/*" />

      {files.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
          <p className="font-semibold mb-4">{files.length} Image(s) Selected</p>
          <Button onClick={handleConvert} disabled={processing} className="w-full">
            {processing ? 'Converting...' : 'Convert to PDF'}
          </Button>
        </div>
      )}
    </div>
  );
}