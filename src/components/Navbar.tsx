import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#4A0E17]/95 backdrop-blur-md py-2.5 sm:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.35)] border-b border-[#C5A059]/25'
            : 'bg-gradient-to-b from-[#32080E]/95 via-[#32080E]/70 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-2 sm:gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-white tracking-widest uppercase whitespace-nowrap shrink-0 group py-1"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.14em] sm:tracking-[0.2em] text-[#F9F8F6] group-hover:text-[#DFC387] transition-colors">
              Hotel Aurelia
            </span>
          </a>

          {/* Zone 2: Desktop clean text links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-medium text-[#F9F8F6]/85">
            <a
              href="#o-nas"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C5A059]"
            >
              O nas
            </a>
            <a
              href="#pokoje"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C5A059]"
            >
              Pokoje i apartamenty
            </a>
            <a
              href="#udogodnienia"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C5A059]"
            >
              Udogodnienia
            </a>
            <a
              href="#doswiadczenia"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C5A059]"
            >
              Opinie gości
            </a>
            <a
              href="#kontakt"
              className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#C5A059]"
            >
              Kontakt
            </a>
          </nav>

          {/* Zone 3: Primary action + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#DFC387] border border-[#C5A059] hover:bg-[#C5A059] hover:text-[#4A0E17] transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] sm:min-h-[42px] flex items-center justify-center active:scale-95"
            >
              Zarezerwuj
            </button>

            {/* Mobile menu hamburger toggle with accessible 44px+ tap target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu nawigacji'}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-[#DFC387] hover:text-white transition-colors cursor-pointer rounded-none active:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobilne"
          className="fixed inset-0 z-50 lg:hidden bg-[#240409]/98 backdrop-blur-2xl pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto touch-scroll"
        >
          {/* Top header within drawer for clear close */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/25 mb-6">
            <span className="font-serif-luxury text-xl text-[#DFC387] tracking-[0.18em] uppercase">
              Hotel Aurelia
            </span>
            <button
              onClick={closeMenu}
              aria-label="Zamknij menu"
              className="w-11 h-11 flex items-center justify-center text-[#DFC387] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links with large easy touch targets (>= 48px height) */}
          <nav className="flex flex-col gap-1 text-sm tracking-[0.2em] uppercase font-medium text-[#F9F8F6]">
            <a
              href="#o-nas"
              onClick={closeMenu}
              className="py-3 px-2 border-b border-[#C5A059]/15 hover:text-[#C5A059] active:bg-[#C5A059]/10 transition-colors flex items-center justify-between min-h-[48px]"
            >
              <span>O nas</span>
              <span className="text-[10px] text-[#C5A059]">01</span>
            </a>
            <a
              href="#pokoje"
              onClick={closeMenu}
              className="py-3 px-2 border-b border-[#C5A059]/15 hover:text-[#C5A059] active:bg-[#C5A059]/10 transition-colors flex items-center justify-between min-h-[48px]"
            >
              <span>Pokoje i apartamenty</span>
              <span className="text-[10px] text-[#C5A059]">02</span>
            </a>
            <a
              href="#udogodnienia"
              onClick={closeMenu}
              className="py-3 px-2 border-b border-[#C5A059]/15 hover:text-[#C5A059] active:bg-[#C5A059]/10 transition-colors flex items-center justify-between min-h-[48px]"
            >
              <span>Udogodnienia</span>
              <span className="text-[10px] text-[#C5A059]">03</span>
            </a>
            <a
              href="#doswiadczenia"
              onClick={closeMenu}
              className="py-3 px-2 border-b border-[#C5A059]/15 hover:text-[#C5A059] active:bg-[#C5A059]/10 transition-colors flex items-center justify-between min-h-[48px]"
            >
              <span>Opinie gości</span>
              <span className="text-[10px] text-[#C5A059]">04</span>
            </a>
            <a
              href="#kontakt"
              onClick={closeMenu}
              className="py-3 px-2 border-b border-[#C5A059]/15 hover:text-[#C5A059] active:bg-[#C5A059]/10 transition-colors flex items-center justify-between min-h-[48px]"
            >
              <span>Kontakt i dojazd</span>
              <span className="text-[10px] text-[#C5A059]">05</span>
            </a>
          </nav>

          {/* Quick Contact & Booking Actions in Mobile Drawer */}
          <div className="pt-6 mt-6 border-t border-[#C5A059]/30 space-y-4 pb-safe">
            <button
              onClick={() => {
                closeMenu();
                onOpenBooking();
              }}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#32080E] bg-[#C5A059] hover:bg-[#DFC387] active:scale-[0.99] transition-all min-h-[48px] shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
            >
              Zarezerwuj pobyt
            </button>

            <a
              href="tel:+48128882040"
              className="w-full py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#DFC387] border border-[#C5A059]/40 hover:bg-white/5 active:bg-white/10 flex items-center justify-center gap-2 min-h-[48px] transition-colors"
            >
              <span>Zadzwoń do recepcji: +48 12 888 20 40</span>
            </a>

            <p className="text-center text-[11px] tracking-wide text-[#F9F8F6]/60 font-light">
              ul. Kanonicza 14, 31-002 Kraków · Stare Miasto
            </p>
          </div>
        </div>
      )}
    </>
  );
};
