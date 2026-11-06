import { useState } from 'react';
import { validateFile } from '../utils/fileValidation';

export const useFileUpload = (allowedTypes = [], maxSizeMB = 50) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleFiles = (incomingFiles) => {
    setError(null);
    const validFiles = [];

    for (const file of incomingFiles) {
      const validation = validateFile(file, allowedTypes, maxSizeMB);
      if (!validation.valid) {
        setError(validation.error);
        return;
      }
      validFiles.push(file);
    }

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const clearFiles = () => {
    setFiles([]);
    setError(null);
  };

  return { files, setFiles, error, handleFiles, removeFile, clearFiles };
};