import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Sparkles } from 'lucide-react';
import { heroImage, ROOMS } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (initialData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    roomId?: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  // Default dates: tomorrow and 3 days later
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkoutDate = new Date();
  checkoutDate.setDate(checkoutDate.getDate() + 4);

  const [checkIn, setCheckIn] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState<string>(checkoutDate.toISOString().split('T')[0]);
  const [guests, setGuests] = useState<number>(2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('all');

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      checkIn,
      checkOut,
      guests,
      roomId: selectedRoomId === 'all' ? undefined : selectedRoomId,
    });
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 bg-[#32080E] text-white overflow-hidden">
      {/* Background Image with Deep Burgundy Atmosphere Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lobby Hotel Aurelia"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to merge image with #4A0E17 and deep shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#32080E] via-[#4A0E17]/80 to-[#32080E]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#2A050B_90%)] opacity-85" />
      </div>

      {/* Atmospheric Gold Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#C5A059]/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto text-center flex flex-col items-center pt-4 sm:pt-0">
        {/* Subtle Ornamental Tagline */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="h-[1px] w-6 sm:w-16 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium text-[#DFC387] px-1">
            Hotel Butikowy · Kraków
          </span>
          <div className="h-[1px] w-6 sm:w-16 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>

        {/* Master Headline */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] sm:leading-[1.08] tracking-tight text-[#F9F8F6] max-w-4xl px-2 [text-wrap:balance]">
          Komfortowy wypoczynek w <span className="italic font-light text-[#DFC387]">historycznym sercu Krakowa</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-[#F9F8F6]/85 font-light max-w-2xl leading-relaxed tracking-wide px-2 [text-wrap:balance]">
          Kameralny hotel w starannie odrestaurowanej kamienicy z 1894 roku przy ulicy Kanoniczej. 
          Osiemnaście przestronnych apartamentów, strefa spa oraz serdeczna obsługa dbająca o każdy szczegół Twojego pobytu.
        </p>

        {/* CTAs with generous touch targets */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 max-w-md sm:max-w-none">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#DFC387] active:scale-[0.99] text-[#32080E] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_25px_rgba(197,160,89,0.35)] cursor-pointer min-h-[48px] flex items-center justify-center"
          >
            Zarezerwuj pobyt
          </button>
          <a
            href="#pokoje"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#C5A059]/60 hover:border-[#DFC387] text-[#DFC387] hover:text-white text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-sm cursor-pointer text-center min-h-[48px] flex items-center justify-center"
          >
            Zobacz apartamenty
          </a>
        </div>
      </div>

      {/* Quick Booking Bar Floating Strip */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mt-8 sm:mt-12">
        <form
          onSubmit={handleQuickCheck}
          className="bg-[#240409]/95 backdrop-blur-md border border-[#C5A059]/35 p-4 sm:p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-end"
        >
          {/* Check-in */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-[#DFC387] mb-1.5 font-medium">
              Data przyjazdu
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#3D0A11] border border-[#C5A059]/30 text-white text-[16px] sm:text-xs px-3.5 py-2.5 focus:border-[#C5A059] focus:outline-none transition-colors min-h-[44px]"
                required
              />
              <Calendar className="w-4 h-4 text-[#C5A059] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-[#DFC387] mb-1.5 font-medium">
              Data wyjazdu
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#3D0A11] border border-[#C5A059]/30 text-white text-[16px] sm:text-xs px-3.5 py-2.5 focus:border-[#C5A059] focus:outline-none transition-colors min-h-[44px]"
                required
              />
              <Calendar className="w-4 h-4 text-[#C5A059] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-[#DFC387] mb-1.5 font-medium">
              Liczba gości
            </label>
            <div className="relative">
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-[#3D0A11] border border-[#C5A059]/30 text-white text-[16px] sm:text-xs px-3.5 py-2.5 focus:border-[#C5A059] focus:outline-none appearance-none transition-colors cursor-pointer min-h-[44px]"
              >
                <option value={1} className="bg-[#3D0A11]">1 Gość (Dorośli)</option>
                <option value={2} className="bg-[#3D0A11]">2 Gości (Dorośli)</option>
                <option value={3} className="bg-[#3D0A11]">3 Gości (Dorośli)</option>
                <option value={4} className="bg-[#3D0A11]">4 Gości (Dorośli)</option>
              </select>
              <Users className="w-4 h-4 text-[#C5A059] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Room Category */}
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] text-[#DFC387] mb-1.5 font-medium">
              Kategoria pokoju
            </label>
            <div className="relative">
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full bg-[#3D0A11] border border-[#C5A059]/30 text-white text-[16px] sm:text-xs px-3.5 py-2.5 focus:border-[#C5A059] focus:outline-none appearance-none transition-colors cursor-pointer min-h-[44px]"
              >
                <option value="all" className="bg-[#3D0A11]">Wszystkie pokoje</option>
                {ROOMS.map((room) => (
                  <option key={room.id} value={room.id} className="bg-[#3D0A11]">
                    {room.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#C5A059] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#C5A059] hover:bg-[#DFC387] active:scale-[0.99] text-[#32080E] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer flex items-center justify-center gap-2 min-h-[44px] shadow-[0_2px_15px_rgba(197,160,89,0.3)]"
            >
              <Sparkles className="w-4 h-4 text-[#32080E] shrink-0" />
              <span>Sprawdź dostępność</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
