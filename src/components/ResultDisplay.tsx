import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { toast } from 'react-toastify';

interface ResultDisplayProps {
  text: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ text }) => {
  const [editableText, setEditableText] = useState<string>(text);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(editableText)
      .then(() => {
        setCopied(true);
        toast.success('Text copied to clipboard');
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        toast.error('Failed to copy text');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableText(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="h-full flex flex-col bg-white rounded-lg border border-gray-300 overflow-hidden"
    >
      <div className="p-3 bg-gray-50 border-b border-gray-300 flex justify-between items-center">
        <h3 className="font-medium text-gray-700">Extracted Text</h3>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1 px-3 py-1 text-sm rounded-md bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-success-500" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-gray-500" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <textarea
        value={editableText}
        onChange={handleChange}
        className="flex-grow w-full p-4 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        placeholder="Extracted text will appear here..."
        rows={10}
      />
    </motion.div>
  );
};

export default ResultDisplay;