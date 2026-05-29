'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString('en-GB', { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false,
    timeZone: 'Europe/Madrid'
  });
  
  return (
    <footer className="bg-[#0d0d1a] text-white py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Edition */}
          <div>
            <h5 className="text-sm text-white/50 mb-2">Edition</h5>
            <p className="text-white/80">{currentYear} Â© Erik Majada</p>
          </div>

          {/* Local time */}
          <div>
            <h5 className="text-sm text-white/50 mb-2">Local time</h5>
            <p className="text-white/80">{currentTime} CET</p>
          </div>

          {/* Social links */}
          <div>
            <h5 className="text-sm text-white/50 mb-2">Connect</h5>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="https://linkedin.com/in/erik-majada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/30 tracking-wider">
            Logistics Operations Leader Â· DHL eCommerce Spain Â· Barcelona
          </p>
        </div>
      </div>
    </footer>
  );
}
