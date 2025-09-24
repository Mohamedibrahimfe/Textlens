import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import ImageUploader from './ImageUploader';
import ImagePreview from './ImagePreview';
import ResultDisplay from './ResultDisplay';
import ProcessingStatus from './ProcessingStatus';
import HistorySection from './HistorySection';
import { processImageWithOcr } from '../utils/ocrService';
import { HistoryItem } from '../types';

const OcrProcessor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file));
    setExtractedText('');
  };

  const handleReset = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setSelectedImage(null);
    setImageUrl(null);
    setExtractedText('');
  };

  const handleProcessImage = async () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    try {
      setIsProcessing(true);
      const text = await processImageWithOcr(selectedImage);
      setExtractedText(text);
      
      // Add to history
      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        filename: selectedImage.name,
        timestamp: new Date(),
        previewUrl: imageUrl as string,
        textPreview: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
        fullText: text,
      };
      
      setHistory(prev => [newHistoryItem, ...prev].slice(0, 5));
      toast.success('Text extracted successfully');
    } catch (error) {
      console.error('OCR processing error:', error);
      toast.error('Failed to extract text from image');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleHistoryItemClick = (item: HistoryItem) => {
    setExtractedText(item.fullText);
    toast.info(`Loaded text from "${item.filename}"`);
  };

  return (
    <div className="max-w-8xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Extract Text from Images</h2>
        <p className="text-gray-600 mb-8 text-center">
          Upload an image containing text and our OCR technology will extract the content for you.
          Supports PNG, JPG, and JPEG formats.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            {!imageUrl ? (
              <ImageUploader onImageSelect={handleImageSelect} />
            ) : (
              <ImagePreview 
                imageUrl={imageUrl} 
                filename={selectedImage?.name || ''} 
                onReset={handleReset}
              />
            )}
          </div>

          <div className="flex flex-col h-full">
            {isProcessing ? (
              <ProcessingStatus />
            ) : (
              <>
                {!extractedText ? (
                  <div className="flex-grow flex flex-col items-center justify-center bg-white rounded-lg border-2 border-dashed border-gray-300 p-8">
                    {imageUrl ? (
                      <button
                        onClick={handleProcessImage}
                        className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                      >
                        Extract Text
                      </button>
                    ) : (
                      <p className="text-gray-500 text-center">
                        Upload an image to start the OCR process
                      </p>
                    )}
                  </div>
                ) : (
                  <ResultDisplay text={extractedText} />
                )}
              </>
            )}
          </div>
        </div>

        {history.length > 0 && (
          <HistorySection history={history} onItemClick={handleHistoryItemClick} />
        )}
      </motion.div>
    </div>
  );
};

export default OcrProcessor;