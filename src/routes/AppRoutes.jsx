import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';

import Home from '../pages/Home';
import AllTools from '../pages/AllTools';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

import MergePDF from '../features/pdf/MergePDF';
import SplitPDF from '../features/pdf/SplitPDF';
import RotatePDF from '../features/pdf/RotatePDF';
import JPGToPDF from '../features/pdf/JPGToPDF';

import ImageCompressor from '../features/image/ImageCompressor';
import ImageResizer from '../features/image/ImageResizer';
import PNGToJPG from '../features/image/PNGToJPG';

import QRGenerator from '../features/utility/QRGenerator';
import WordCounter from '../features/utility/WordCounter';

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-tools" element={<AllTools />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />

        {/* PDF Features */}
        <Route path="/merge-pdf" element={<MergePDF />} />
        <Route path="/split-pdf" element={<SplitPDF />} />
        <Route path="/rotate-pdf" element={<RotatePDF />} />
        <Route path="/jpg-to-pdf" element={<JPGToPDF />} />

        {/* Image Features */}
        <Route path="/compress-image" element={<ImageCompressor />} />
        <Route path="/resize-image" element={<ImageResizer />} />
        <Route path="/png-to-jpg" element={<PNGToJPG />} />

        {/* Utilities */}
        <Route path="/qr-generator" element={<QRGenerator />} />
        <Route path="/word-counter" element={<WordCounter />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
