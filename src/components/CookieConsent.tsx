import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios.
            Al continuar con la navegación entendemos que aceptas nuestra{' '}
            <a href="#" className="underline hover:text-emerald-400">política de cookies</a>.
          </div>
          <button
            onClick={acceptCookies}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}