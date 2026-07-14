export const SITE_URL = 'https://kambaimports.com';
export const WHATSAPP_NUMBER = '5493517304725';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const TELEPHONE_SCHEMA = `+${WHATSAPP_NUMBER}`;

export const getWhatsAppLink = (message: string) => {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
};
