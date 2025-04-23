/**
 * Creates a WhatsApp URL with the current page link and custom message
 * @param customMessage Optional custom message to prepend to the page link
 * @returns WhatsApp URL with the current page link
 */
export const getWhatsAppUrl = (customMessage: string = ''): string => {
  // Format the phone number for WhatsApp (remove spaces and dashes)
  const phoneNumber = '+81804213-9008'.replace(/[-\\s]/g, '');
  
  // Get the current page URL
  const currentUrl = window.location.href;
  
  // Create the message with the current page URL
  const message = encodeURIComponent(`${customMessage} ${currentUrl}`);
  
  // Return the WhatsApp URL
  return `https://wa.me/${phoneNumber}?text=${message}`;
};
