import React from 'react';
import { Sparkles, Utensils, ShieldCheck, Wine, BookOpen, Coffee } from 'lucide-react';
import { AMENITIES } from '../data/hotelData';

export const Amenities: React.FC = () => {
  const spaAmenity = AMENITIES.find((a) => a.id === 'spa')!;
  const otherAmenities = AMENITIES.filter((a) => a.id !== 'spa');

  const getIcon = (id: string) => {
    switch (id) {
      case 'restaurant':
        return <Utensils className="w-5 h-5 text-[#C5A059]" />;
      case 'concierge':
        return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'cellar':
        return <Wine className="w-5 h-5 text-[#C5A059]" />;
      case 'cigar-library':
        return <BookOpen className="w-5 h-5 text-[#C5A059]" />;
      case 'breakfast':
        return <Coffee className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="udogodnienia" className="py-16 sm:py-24 md:py-32 bg-[#F9F8F6] text-[#2D2A26] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#C5A059]">
            Wygoda i Wypoczynek
          </span>
          <div className="my-2.5 sm:my-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 sm:w-10 bg-[#C5A059]" />
            <span className="font-serif-luxury text-sm italic text-[#4A0E17]">Wszystko na miejscu</span>
            <div className="h-[1px] w-8 sm:w-10 bg-[#C5A059]" />
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl text-[#4A0E17] font-normal tracking-tight [text-wrap:balance]">
            Udogodnienia dla Gości
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#5A5550] font-light leading-relaxed">
            Zadbaliśmy o to, aby pobyt w Hotelu Aurelia był w pełni komfortowy — od relaksu w strefie basenowej i saunach, 
            przez smaczne śniadania, aż po pomocną obsługę recepcji.
          </p>
        </div>

        {/* Bento Grid: Featured SPA Card + 5 Refined Block Amenities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Featured SPA Sanctuary Card (Col Span 2 on large screens) */}
          <div className="lg:col-span-2 bg-[#32080E] text-white border border-[#C5A059]/40 overflow-hidden flex flex-col md:flex-row group shadow-[0_10px_30px_rgba(50,8,14,0.15)]">
            <div className="md:w-1/2 relative overflow-hidden min-h-[220px] sm:min-h-[280px]">
              <img
                src={spaAmenity.image}
                alt={spaAmenity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#32080E]/60" />
            </div>

            <div className="md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#DFC387] font-medium block mb-1.5 sm:mb-2">
                  {spaAmenity.tag}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#F9F8F6] mb-2">
                  {spaAmenity.title}
                </h3>
                <p className="text-xs italic text-[#C5A059] mb-3 sm:mb-4">
                  {spaAmenity.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#F9F8F6]/80 font-light leading-relaxed">
                  {spaAmenity.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#C5A059]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-[#DFC387]">
                <span>Czynne 07:00 – 22:00</span>
                <span className="font-medium underline decoration-[#C5A059] underline-offset-4">
                  Dla gości hotelu w cenie pobytu
                </span>
              </div>
            </div>
          </div>

          {/* Restaurant Block (Card 2) */}
          <div className="bg-white p-6 sm:p-8 border border-[#C5A059]/25 hover:border-[#C5A059]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-[#C5A059]/30 flex items-center justify-center mb-5 sm:mb-6 bg-[#F9F8F6]">
                {getIcon(otherAmenities[0].id)}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-1">
                {otherAmenities[0].tag}
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-2">
                {otherAmenities[0].title}
              </h3>
              <p className="text-xs italic text-[#C5A059] mb-2.5 sm:mb-3">
                {otherAmenities[0].subtitle}
              </p>
              <p className="text-xs sm:text-sm text-[#5A5550] font-light leading-relaxed">
                {otherAmenities[0].description}
              </p>
            </div>
            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#F0ECE1] text-[11px] text-[#4A0E17] font-medium">
              Świeże dania obiadowe i kolacje
            </div>
          </div>

          {/* Remaining Amenities */}
          {otherAmenities.slice(1).map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white p-6 sm:p-8 border border-[#C5A059]/25 hover:border-[#C5A059]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 border border-[#C5A059]/30 flex items-center justify-center mb-5 sm:mb-6 bg-[#F9F8F6]">
                  {getIcon(amenity.id)}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-1">
                  {amenity.tag}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#4A0E17] mb-2">
                  {amenity.title}
                </h3>
                <p className="text-xs italic text-[#C5A059] mb-2.5 sm:mb-3">
                  {amenity.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#5A5550] font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-[#F0ECE1] text-[11px] text-[#C5A059] font-medium">
                Dostępne na terenie hotelu
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
