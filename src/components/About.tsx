import React from 'react';
import { HERITAGE_FACTS } from '../data/hotelData';

export const About: React.FC = () => {
  return (
    <section id="o-nas" className="py-16 sm:py-24 md:py-32 bg-[#F9F8F6] text-[#2D2A26] relative overflow-hidden">
      {/* Decorative hairline ornaments */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Subtle Ornamental Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#C5A059]">
            O naszym hotelu
          </span>
          <div className="my-3 sm:my-4 flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-[1px] w-8 sm:w-12 bg-[#C5A059]" />
            <span className="font-serif-luxury text-sm italic text-[#4A0E17]">Historia i Gościnność</span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#C5A059]" />
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl text-[#4A0E17] font-normal tracking-tight [text-wrap:balance]">
            Tradycja i wygoda w centrum Krakowa
          </h2>
          <p className="mt-4 sm:mt-6 text-xs sm:text-base text-[#5A5550] leading-relaxed font-light">
            Hotel Aurelia mieści się w odrestaurowanej kamienicy z końca XIX wieku, zaledwie kilka kroków od Zamku Królewskiego na Wawelu. 
            Połączyliśmy historyczny charakter budynku z nowoczesnymi wygodami, tworząc spokojne i przyjazne miejsce dla gości odwiedzających Kraków turystycznie oraz zawodowo.
          </p>
        </div>

        {/* 3 Pillars of Aurelia Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-14 sm:mb-20">
          {/* Pillar 1 */}
          <div className="bg-white p-6 sm:p-8 md:p-10 border border-[#C5A059]/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="font-serif-luxury text-3xl text-[#C5A059] mb-3 sm:mb-4">I.</div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-2 sm:mb-3">Spokój i prywatność</h3>
              <p className="text-xs sm:text-sm text-[#5A5550] leading-relaxed font-light">
                Nasz hotel to 18 przestronnych pokoi i apartamentów. Kameralny charakter budynku zapewnia ciszę i komfortowy odpoczynek po całym dniu zwiedzania.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#F0ECE1] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#C5A059] font-medium">
              Kameralna atmosfera
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 sm:p-8 md:p-10 border border-[#C5A059]/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="font-serif-luxury text-3xl text-[#C5A059] mb-3 sm:mb-4">II.</div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-2 sm:mb-3">Wysoki standard</h3>
              <p className="text-xs sm:text-sm text-[#5A5550] leading-relaxed font-light">
                Pokoje wyposażyliśmy w solidne drewniane meble, naturalne tkaniny, wygodne materace oraz nowocześnie urządzone łazienki.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#F0ECE1] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#C5A059] font-medium">
              Komfortowe wnętrza
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 sm:p-8 md:p-10 border border-[#C5A059]/25 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="font-serif-luxury text-3xl text-[#C5A059] mb-3 sm:mb-4">III.</div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-2 sm:mb-3">Pomocna obsługa</h3>
              <p className="text-xs sm:text-sm text-[#5A5550] leading-relaxed font-light">
                Recepcja jest czynna przez całą dobę. Z przyjemnością pomożemy w organizacji transferu, rezerwacji biletów czy wyborze dobrych krakowskich restauracji.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#F0ECE1] text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#C5A059] font-medium">
              Całodobowa pomoc
            </div>
          </div>
        </div>

        {/* Heritage Numerals Grid (Clean responsive editorial layout) */}
        <div className="py-8 sm:py-12 px-4 sm:px-8 md:px-12 bg-[#4A0E17] text-white border border-[#C5A059]/30 shadow-[0_8px_30px_rgba(74,14,23,0.15)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 text-center">
            {HERITAGE_FACTS.map((fact, index) => (
              <div key={index} className="p-2 sm:p-4 flex flex-col items-center">
                <span className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-medium text-[#DFC387] tracking-tight tabular-nums">
                  {fact.number}
                </span>
                <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[#F9F8F6]/85 font-light max-w-[160px] leading-snug">
                  {fact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
