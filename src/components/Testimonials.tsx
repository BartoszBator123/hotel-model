import React from 'react';
import { TESTIMONIALS } from '../data/hotelData';

export const Testimonials: React.FC = () => {
  return (
    <section id="doswiadczenia" className="py-16 sm:py-24 bg-[#4A0E17] text-white relative overflow-hidden">
      {/* Subtle gold ornamental glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-[#DFC387]">
            Opinie Gości
          </span>
          <h2 className="mt-2.5 sm:mt-3 font-serif-luxury text-2xl sm:text-4xl text-[#F9F8F6] font-normal tracking-tight">
            Co mówią o nas goście
          </h2>
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-6 sm:w-8 bg-[#C5A059]" />
            <span className="text-[11px] sm:text-xs tracking-widest text-[#DFC387] uppercase font-light">
              Prawdziwe oceny
            </span>
            <div className="h-[1px] w-6 sm:w-8 bg-[#C5A059]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-[#32080E]/70 border border-[#C5A059]/30 p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A059] transition-colors"
            >
              <div>
                <span className="font-serif-luxury text-3xl sm:text-4xl text-[#DFC387] block mb-1.5 sm:mb-2 leading-none">
                  “
                </span>
                <p className="font-serif-luxury text-base sm:text-lg text-[#F9F8F6]/90 italic leading-relaxed mb-5 sm:mb-6">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5A059]/20">
                <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#DFC387]">
                  {item.author}
                </p>
                <p className="text-[11px] text-[#F9F8F6]/60 font-light mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
