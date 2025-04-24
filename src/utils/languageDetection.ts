/**
 * Utility functions for detecting user's preferred language
 */

import { getLanguagePreference, saveLanguagePreference } from './storage';

// Supported languages
const SUPPORTED_LANGUAGES = ['en', 'ja'];
const DEFAULT_LANGUAGE = 'en';

/**
 * Detects the user's preferred language from browser settings
 * @returns The detected language code ('en' or 'ja')
 */
export const detectBrowserLanguage = (): string => {
  try {
    // Check if we already have a stored preference
    const storedLanguage = getLanguagePreference();
    if (storedLanguage) {
      return storedLanguage;
    }

    // Get browser language
    const browserLanguage = navigator.language.split('-')[0];
    
    // Check if the browser language is supported
    if (SUPPORTED_LANGUAGES.includes(browserLanguage)) {
      return browserLanguage;
    }
    
    // Fall back to default language
    return DEFAULT_LANGUAGE;
  } catch (error) {
    console.error('Error detecting browser language:', error);
    return DEFAULT_LANGUAGE;
  }
};

/**
 * Initializes the language based on user preferences or browser settings
 * @returns The language to use
 */
export const initializeLanguage = (): string => {
  const language = detectBrowserLanguage();
  saveLanguagePreference(language);
  return language;
};
