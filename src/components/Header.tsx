import React from 'react';
import { ScanText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ScanText className="h-8 w-8 text-primary-600" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-500">
            TextLens
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com"
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
                className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Share
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;