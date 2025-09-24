import React from 'react';
import { X } from 'lucide-react';

interface ImagePreviewProps {
  imageUrl: string;
  filename: string;
  onReset: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, filename, onReset }) => {
  return (
    <div className="relative h-full min-h-[280px] bg-white rounded-lg border border-gray-300 overflow-hidden group">
      <img
        src={imageUrl}
        alt="Preview"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-3 flex justify-between items-center">
        <span className="text-sm truncate max-w-[200px]">{filename}</span>
        <button
          onClick={onReset}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Remove image"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;