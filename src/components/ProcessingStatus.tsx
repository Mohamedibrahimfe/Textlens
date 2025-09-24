import React from 'react';
import { motion } from 'framer-motion';

const ProcessingStatus: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-white rounded-lg border border-gray-300 p-8">
      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 mb-6 rounded-full bg-primary-100 flex items-center justify-center"
        >
          <svg
            className="w-8 h-8 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </motion.div>
        <h3 className="text-xl font-medium text-gray-800 mb-2">Processing Image</h3>
        <p className="text-gray-600 max-w-xs">
          We're analyzing your image and extracting text. This may take a few moments...
        </p>
        
        <div className="mt-6 w-full max-w-xs">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingStatus;