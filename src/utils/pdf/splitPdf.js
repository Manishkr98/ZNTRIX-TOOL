import { PDFDocument } from 'pdf-lib';

export const splitPdfFile = async (file, startPage, endPage) => {
  const arrayBuffer = await file.arrayBuffer();
  const srcDoc = await PDFDocument.load(arrayBuffer);
  const newDoc = await PDFDocument.create();

  const totalPages = srcDoc.getPageCount();
  const start = Math.max(0, startPage - 1);
  const end = Math.min(totalPages, endPage);

  const indices = [];
  for (let i = start; i < end; i++) {
    indices.push(i);
  }

  const copiedPages = await newDoc.copyPages(srcDoc, indices);
  copiedPages.forEach((page) => newDoc.addPage(page));

  const pdfBytes = await newDoc.save();
  return new Blob([pdfBytes], { type: 'application/pdf' });
};