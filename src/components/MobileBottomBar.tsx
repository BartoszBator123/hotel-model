import React from 'react';
import { Phone, CalendarCheck, MapPin, Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Szybkie akcje mobilne"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#32080E]/95 backdrop-blur-lg border-t border-[#C5A059]/30 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] pb-safe transition-transform duration-300"
    >
      <div className="px-4 py-2.5 flex items-center justify-between gap-3 max-w-lg mx-auto">
        {/* Direct Call to Reception */}
        <a
          href="tel:+48128882040"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-[#4A0E17] hover:bg-[#6E1423] active:scale-[0.98] text-[#DFC387] border border-[#C5A059]/40 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all min-h-[46px] select-none"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
          <span className="truncate">Recepcja</span>
        </a>

        {/* Instant Booking Trigger */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.4] flex items-center justify-center gap-2 py-3 px-3 bg-[#C5A059] hover:bg-[#DFC387] active:scale-[0.98] text-[#32080E] text-[11px] font-bold uppercase tracking-[0.14em] shadow-[0_2px_15px_rgba(197,160,89,0.35)] transition-all min-h-[46px] cursor-pointer select-none"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-[#32080E] shrink-0" />
          <span className="truncate">Zarezerwuj</span>
        </button>
      </div>
    </aside>
  );
};
