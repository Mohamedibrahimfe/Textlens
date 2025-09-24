import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-toastify';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          toast.error('File size exceeds 5MB limit');
          return;
        }

        // Check file type
        if (!file.type.match('image/(jpeg|jpg|png)')) {
          toast.error('Only JPG, JPEG, and PNG files are supported');
          return;
        }

        onImageSelect(file);
        toast.success('Image uploaded successfully');
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    maxFiles: 1,
  });

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`
        h-full min-h-[280px] flex flex-col items-center justify-center
        rounded-lg border-2 border-dashed p-8
        ${
          isDragActive
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 bg-white hover:border-primary-400 hover:bg-primary-50/50'
        }
        transition-colors cursor-pointer
      `}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <>
            <div className="mb-4 p-4 rounded-full bg-primary-100 inline-flex">
              <ImageIcon className="h-8 w-8 text-primary-600" />
            </div>
            <p className="text-primary-600 font-medium">Drop your image here</p>
          </>
        ) : (
          <>
            <div className="mb-4 p-4 rounded-full bg-gray-100 inline-flex">
              <Upload className="h-8 w-8 text-gray-600" />
            </div>
            <p className="mb-2 text-gray-700 font-medium">Drag & drop an image or click to browse</p>
            <p className="text-sm text-gray-500">
              Supports: PNG, JPG, JPEG (max 5MB)
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ImageUploader;