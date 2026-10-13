import React from 'react';
import { X, Check, Bed, Maximize2, Compass, Shield } from 'lucide-react';
import { Room } from '../data/hotelData';

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onBook: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onBook }) => {
  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (room) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [room]);

  if (!room) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#F9F8F6] w-full max-w-4xl max-h-[96dvh] sm:max-h-[90vh] overflow-y-auto touch-scroll border-t sm:border border-[#C5A059] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Sticky on Mobile */}
        <div className="sticky top-0 z-30 flex justify-end p-3 pointer-events-none">
          <button
            onClick={onClose}
            aria-label="Zamknij podgląd apartamentu"
            className="w-11 h-11 bg-[#240409]/90 hover:bg-[#32080E] text-[#DFC387] flex items-center justify-center transition-colors cursor-pointer border border-[#C5A059]/40 pointer-events-auto shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#32080E] overflow-hidden -mt-14 sm:-mt-14">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#240409] via-[#240409]/30 to-transparent" />
          
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#DFC387] font-medium block mb-1">
                Informacje o pokoju
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-white font-medium">
                {room.name}
              </h3>
            </div>
            <div className="bg-[#4A0E17]/95 border border-[#C5A059] px-3.5 sm:px-4 py-2 text-right self-start sm:self-auto shadow-md">
              <span className="text-[10px] uppercase tracking-wider text-[#DFC387] block font-light">od</span>
              <span className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold tabular-nums">
                {room.pricePerNight.toLocaleString('pl-PL')} PLN
              </span>
              <span className="text-[10px] text-[#F9F8F6]/75 block font-light">za noc ze śniadaniem</span>
            </div>
          </div>
        </div>

        {/* Modal Details Content */}
        <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8 pb-safe">
          {/* Key specs strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pb-5 sm:pb-6 border-b border-[#E0DBD0] text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 p-2 bg-white sm:bg-transparent border sm:border-0 border-[#EAE5DA]">
              <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#C5A059]/30 flex items-center justify-center bg-white text-[#4A0E17] shrink-0">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7A746D] block">Powierzchnia</span>
                <span className="text-xs sm:text-sm font-semibold text-[#4A0E17]">{room.area}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 p-2 bg-white sm:bg-transparent border sm:border-0 border-[#EAE5DA]">
              <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#C5A059]/30 flex items-center justify-center bg-white text-[#4A0E17] shrink-0">
                <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7A746D] block">Łóżko</span>
                <span className="text-xs sm:text-sm font-semibold text-[#4A0E17] truncate max-w-full">{room.bedType}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 p-2 bg-white sm:bg-transparent border sm:border-0 border-[#EAE5DA]">
              <div className="w-8 h-8 sm:w-9 sm:h-9 border border-[#C5A059]/30 flex items-center justify-center bg-white text-[#4A0E17] shrink-0">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#7A746D] block">Widok</span>
                <span className="text-xs sm:text-sm font-semibold text-[#4A0E17] truncate max-w-full">{room.view}</span>
              </div>
            </div>
          </div>

          {/* Editorial Description */}
          <div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-2 sm:mb-3">
              Opis pokoju
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4642] leading-relaxed font-light">
              {room.longDescription}
            </p>
          </div>

          {/* Amenities Grid */}
          <div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-3 sm:mb-4">
              Wyposażenie pokoju
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 bg-white border border-[#EBE7DE]">
                  <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span className="text-xs text-[#2D2A26] font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 sm:pt-6 border-t border-[#E0DBD0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#7A746D]">
              <Shield className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Gwarancja najlepszej ceny przy rezerwacji bezpośredniej</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 sm:w-auto px-5 py-3 border border-[#4A0E17] text-[#4A0E17] text-xs uppercase tracking-[0.16em] hover:bg-[#4A0E17] hover:text-white transition-colors cursor-pointer min-h-[48px] flex items-center justify-center"
              >
                Zamknij
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onBook(room.id);
                }}
                className="w-2/3 sm:w-auto px-7 py-3 bg-[#4A0E17] hover:bg-[#6E1423] active:scale-[0.99] text-white border border-[#C5A059] text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer shadow-[0_4px_16px_rgba(74,14,23,0.25)] min-h-[48px] flex items-center justify-center text-center"
              >
                Zarezerwuj ten pokój
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
