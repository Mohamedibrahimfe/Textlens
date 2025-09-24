import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import OcrProcessor from './components/OcrProcessor';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>TextLens | Easily Extract Text From Image </title>
        <meta name="description" content="Extract text from images with TextLens. Upload images and get accurate text extraction instantly." />
        <meta property="og:title" content="TextLens - OCR Text Extractor" />
        
        {/* Other meta tags */}
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <OcrProcessor />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;