/**
 * Utility functions for handling browser storage (localStorage and cookies)
 */

// Constants
const LANGUAGE_KEY = 'big_trading_language';
const COOKIE_EXPIRY_DAYS = 365; // 1 year

/**
 * Sets a value in localStorage
 * @param key Storage key
 * @param value Value to store
 */
export const setLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting localStorage:', error);
  }
};

/**
 * Gets a value from localStorage
 * @param key Storage key
 * @returns The stored value or null if not found
 */
export const getLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error('Error getting localStorage:', error);
    return null;
  }
};

/**
 * Sets a cookie
 * @param key Cookie name
 * @param value Cookie value
 * @param days Days until expiration
 */
export const setCookie = (key: string, value: string, days: number = COOKIE_EXPIRY_DAYS): void => {
  try {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${key}=${value};${expires};path=/;SameSite=Strict`;
  } catch (error) {
    console.error('Error setting cookie:', error);
  }
};

/**
 * Gets a cookie value
 * @param key Cookie name
 * @returns The cookie value or null if not found
 */
export const getCookie = (key: string): string | null => {
  try {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting cookie:', error);
    return null;
  }
};

/**
 * Saves the language preference in both localStorage and cookies
 * @param language Language code ('en' or 'ja')
 */
export const saveLanguagePreference = (language: string): void => {
  setLocalStorage(LANGUAGE_KEY, language);
  setCookie(LANGUAGE_KEY, language);
};

/**
 * Gets the language preference from localStorage or cookies
 * @returns The stored language preference or null if not found
 */
export const getLanguagePreference = (): string | null => {
  // Try localStorage first
  const localStorageValue = getLocalStorage(LANGUAGE_KEY);
  if (localStorageValue) {
    return localStorageValue;
  }
  
  // Fall back to cookies
  return getCookie(LANGUAGE_KEY);
};
