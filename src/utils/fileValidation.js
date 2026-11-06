export const validateFile = (file, allowedTypes, maxSizeMB = 50) => {
  if (!file) return { valid: false, error: 'No file selected.' };
  
  const isTypeValid = allowedTypes.some(type => 
    file.type.includes(type) || file.name.endsWith(type)
  );
  if (!isTypeValid) {
    return { valid: false, error: `Invalid file type. Allowed: ${allowedTypes.join(', ')}` };
  }

  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return { valid: false, error: `File size exceeds ${maxSizeMB}MB limit.` };
  }

  return { valid: true, error: null };
};