/**
 * Utility functions for detecting user's country
 */

// Cache the country detection result to avoid multiple API calls
let cachedCountry: string | null = null;

/**
 * Detects the user's country based on their IP address
 * @returns A promise that resolves to the country code (e.g., 'JP' for Japan)
 */
export const detectUserCountry = async (): Promise<string> => {
  try {
    // Return cached result if available
    if (cachedCountry) {
      return cachedCountry;
    }

    // Use a free IP geolocation API
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // Cache the result
    cachedCountry = data.country_code;
    return data.country_code;
  } catch (error) {
    console.error('Error detecting user country:', error);
    return ''; // Return empty string if detection fails
  }
};

/**
 * Checks if the user is accessing the site from Japan
 * @returns A promise that resolves to true if the user is in Japan, false otherwise
 */
export const isUserInJapan = async (): Promise<boolean> => {
  try {
    const countryCode = await detectUserCountry();
    return countryCode === 'JP';
  } catch (error) {
    console.error('Error checking if user is in Japan:', error);
    return false;
  }
};
