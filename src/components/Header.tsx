import React, { useState } from 'react';
import { ScanText } from 'lucide-react';
import SocialShareButtons from './SocialShareButtons';

const Header: React.FC = () => {
  const [shareOpen, setShareOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ScanText className="h-8 w-8 text-primary-600" />
          <a href="https://text-lens-beta.vercel.app/" className="no-underline">
            <h1 className="hidden md:block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
              TextLens
            </h1>
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com/Mohamedibrahimfe/Textlens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setShareOpen(!shareOpen)}
                className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Share
              </a>
            </li>
            <div className="relative">
              {shareOpen && (
                <div className="absolute top-16 right-4 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
                  <SocialShareButtons
                    url="https://text-lens-beta.vercel.app/"
                    title="Check out TextLens - An AI-powered OCR web application that extracts text from images with ease!"
                  />
                </div>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;