import React, { useRef } from 'react';
import { Upload, File } from 'lucide-react';

export default function FileUploader({ onFilesSelected, accept = '*/*', multiple = true, title = 'Select Files' }) {
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesSelected(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className="border-2 border-dashed border-blue-300 hover:border-blue-500 bg-blue-50/50 hover:bg-blue-50 rounded-xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center"
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => e.target.files && onFilesSelected(Array.from(e.target.files))}
      />
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
        <Upload className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">or drop files here</p>
    </div>
  );
}