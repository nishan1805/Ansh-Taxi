'use client';

import { generateBookingMessage, generateWhatsAppURL } from '@/lib/whatsapp';
import { BookingFormData } from '@/types';
import { WHATSAPP_PHONE } from '@/lib/constants';

export function useWhatsApp() {
  const sendBookingMessage = (formData: BookingFormData) => {
    const message = generateBookingMessage(formData);
    const url = generateWhatsAppURL(message, WHATSAPP_PHONE);
    
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      window.location.href = url;
    }
  };

  const sendCustomMessage = (text: string) => {
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      window.location.href = url;
    }
  };

  return { sendBookingMessage, sendCustomMessage };
}
