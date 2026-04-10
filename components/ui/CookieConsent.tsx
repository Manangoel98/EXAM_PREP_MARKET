'use client';
import { logger } from '@/lib/logger';

import { useEffect, useState } from 'react';
import { Shield, Cookie } from 'lucide-react';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem('nomoexam-cookie-consent');
      if (!consent) {
        setShowBanner(true);
      }
    } catch (error) {
      logger.warn('Failed to access localStorage:', error);
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('nomoexam-cookie-consent', 'accepted');
      setShowBanner(false);
    } catch (error) {
      logger.warn('Failed to save consent:', error);
      setShowBanner(false);
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('nomoexam-cookie-consent', 'declined');
      setShowBanner(false);
    } catch (error) {
      logger.warn('Failed to save consent:', error);
      setShowBanner(false);
    }
  };

  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Our Use of Cookies</h3>
              <p className="text-sm text-gray-600 mt-1">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;