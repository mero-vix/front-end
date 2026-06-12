import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'vixiq_cookie_consent';

export function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const storedConsent = typeof window !== 'undefined' ? localStorage.getItem(COOKIE_CONSENT_KEY) : null;
    const accepted = storedConsent === 'accepted';
    setShowBanner(!accepted);
  }, []);

  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    }
    setShowBanner(false);
  };

  const rejectCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    }
    setShowBanner(false);
    setTimeout(() => {
      setShowBanner(true);
    }, 500);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {showBanner ? (
        <motion.div
          key="cookies-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
        >
          <div className="pointer-events-auto mx-auto w-[90%] md:w-1/3 max-w-sm rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-md p-6 shadow-2xl shadow-black/40 text-center">
            <div className="flex flex-col items-center gap-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#E1DCC9]">We use cookies</p>
                <p className="text-sm leading-relaxed text-white/80">
                  We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies. 
                  <Link
                    to="/cookies"
                    className="ml-1 text-[#E1DCC9] underline hover:text-sand transition-colors"
                  >
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex w-full flex-col gap-3">
                <button
                  type="button"
                  onClick={acceptCookies}
                  className="inline-flex w-full items-center justify-center rounded-full bg-sand px-6 py-2.5 text-sm font-semibold text-black transition-all hover:brightness-110 active:scale-95"
                >
                  Accept
                </button>
                <button
                  type="button"
                  onClick={rejectCookies}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
