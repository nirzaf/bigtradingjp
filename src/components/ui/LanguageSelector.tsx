import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: 'en' | 'ja') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-white hover:text-accent-400 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
        <span>{language === 'en' ? 'EN' : 'JP'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
          <button
            onClick={() => changeLanguage('en')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === 'en' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center">
              <span className="mr-2">🇺🇸</span>
              English
            </span>
          </button>
          <button
            onClick={() => changeLanguage('ja')}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === 'ja' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="flex items-center">
              <span className="mr-2">🇯🇵</span>
              日本語
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
