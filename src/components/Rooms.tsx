import React from 'react';
import { Maximize2, Bed, Compass, Sparkles, ChevronRight } from 'lucide-react';
import { ROOMS, Room } from '../data/hotelData';

interface RoomsProps {
  onSelectRoom: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoom, onBookRoom }) => {
  return (
    <section id="pokoje" className="py-16 sm:py-24 md:py-32 bg-white text-[#2D2A26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#C5A059]/20">
          <div>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#C5A059]">
              Nasza Oferta
            </span>
            <h2 className="mt-2 font-serif-luxury text-2xl sm:text-4xl md:text-5xl text-[#4A0E17] font-normal tracking-tight">
              Pokoje i Apartamenty
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#5A5550] max-w-md font-light leading-relaxed">
            Wygodne, starannie wykończone pokoje z klimatyzacją, szybkim Wi-Fi i dostępem do hotelowej strefy spa.
          </p>
        </div>

        {/* 3 Room Tiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group bg-[#F9F8F6] border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(197,160,89,0.18)] flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => onSelectRoom(room)}
            >
              {/* Image Frame with Smooth Scale Hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#32080E]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A050B]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Price display badge on dark corner */}
                <div className="absolute bottom-3 right-3 bg-[#4A0E17]/90 backdrop-blur-sm border border-[#C5A059]/40 px-3 py-1.5 text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFC387] block font-light">od</span>
                  <span className="font-serif-luxury text-lg text-white font-semibold tabular-nums">
                    {room.pricePerNight.toLocaleString('pl-PL')} PLN
                  </span>
                  <span className="text-[10px] text-[#F9F8F6]/70 block font-light">/ noc</span>
                </div>
              </div>

              {/* Room Content */}
              <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-[#5A5550] mb-2 sm:mb-3">
                    <span>{room.area}</span>
                    <span aria-hidden="true">·</span>
                    <span>{room.view}</span>
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] group-hover:text-[#6E1423] transition-colors mb-1 sm:mb-2">
                    {room.name}
                  </h3>

                  <p className="text-xs italic text-[#C5A059] mb-3 sm:mb-4">
                    {room.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#5A5550] leading-relaxed font-light mb-5 sm:mb-6">
                    {room.description}
                  </p>
                </div>

                {/* Bottom Actions with Mobile Touch Targets */}
                <div className="pt-4 sm:pt-5 border-t border-[#EAE5DA] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRoom(room);
                    }}
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[#4A0E17] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 cursor-pointer py-2 px-1 min-h-[44px]"
                  >
                    <span>Szczegóły</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookRoom(room.id);
                    }}
                    className="px-5 py-2.5 bg-[#4A0E17] hover:bg-[#6E1423] active:scale-[0.98] text-white border border-[#C5A059] hover:border-[#DFC387] text-[11px] font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer min-h-[44px] flex items-center justify-center"
                  >
                    Rezerwuj
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note below rooms */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-xs text-[#7A746D] tracking-wide font-light max-w-2xl mx-auto leading-relaxed">
            W cenie każdego pobytu zawarty jest nielimitowany dostęp do strefy basenowej i saun, 
            powitalny poczęstunek oraz pomoc personelu recepcji przez całą dobę.
          </p>
        </div>
      </div>
    </section>
  );
};
