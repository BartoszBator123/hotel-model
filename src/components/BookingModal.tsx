import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, CheckCircle2, Shield, Sparkles, Bed, Clock } from 'lucide-react';
import { ROOMS, Room } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    roomId?: string;
  };
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

const LUXURY_ADDONS: AddOn[] = [
  {
    id: 'champagne',
    name: 'Butelka schłodzonego wina musującego',
    price: 180,
    description: 'Wino musujące w pokoju z kieliszkami i świeżymi owocami na powitanie'
  },
  {
    id: 'spa-duo',
    name: 'Masaż relaksacyjny dla dwojga (60 min)',
    price: 450,
    description: 'Klasyczny masaż relaksacyjny w strefie spa wykonywany przez wykwalifikowanych masażystów'
  },
  {
    id: 'transfer',
    name: 'Transfer z lotniska Kraków-Balice',
    price: 150,
    description: 'Odbiór gości z hali przylotów i bezpośredni dowóz pod drzwi hotelu'
  },
  {
    id: 'dinner',
    name: 'Kolacja degustacyjna w restauracji',
    price: 280,
    description: '5-daniowa kolacja degustacyjna szefa kuchni dla jednej osoby ze świeżych lokalnych produktów'
  }
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialData }) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialData?.roomId || ROOMS[0].id
  );

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkoutDate = new Date();
  checkoutDate.setDate(checkoutDate.getDate() + 4);

  const [checkIn, setCheckIn] = useState<string>(
    initialData?.checkIn || tomorrow.toISOString().split('T')[0]
  );
  const [checkOut, setCheckOut] = useState<string>(
    initialData?.checkOut || checkoutDate.toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState<number>(initialData?.guests || 2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Guest details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  // Body scroll locking when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Update when initialData changes
  useEffect(() => {
    if (initialData?.roomId) {
      setSelectedRoomId(initialData.roomId);
    }
    if (initialData?.checkIn) {
      setCheckIn(initialData.checkIn);
    }
    if (initialData?.checkOut) {
      setCheckOut(initialData.checkOut);
    }
    if (initialData?.guests) {
      setGuests(initialData.guests);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const diffTime = Math.max(d2.getTime() - d1.getTime(), 1000 * 3600 * 24);
  const nights = Math.max(1, Math.round(diffTime / (1000 * 3600 * 24)));

  // Calculate pricing
  const roomTotal = currentRoom.pricePerNight * nights;
  const addonsTotal = selectedAddons.reduce((sum, addId) => {
    const item = LUXURY_ADDONS.find((a) => a.id === addId);
    return sum + (item ? item.price : 0);
  }, 0);
  const grandTotal = roomTotal + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `AUR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(randomCode);
    setIsConfirmed(true);
  };

  const resetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        className="bg-[#F9F8F6] w-full max-w-4xl max-h-[96dvh] sm:max-h-[92vh] overflow-y-auto touch-scroll border-t sm:border border-[#C5A059] shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-[#4A0E17] text-white px-4 sm:px-8 py-3.5 sm:py-5 border-b border-[#C5A059]/40 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-serif-luxury text-lg sm:text-2xl tracking-wider text-[#DFC387]">
              Hotel Aurelia
            </span>
            <span className="text-[#C5A059]/50">|</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#F9F8F6]/85 font-light">
              Rezerwacja pobytu
            </span>
          </div>

          <button
            onClick={resetAndClose}
            aria-label="Zamknij formularz rezerwacji"
            className="w-10 h-10 flex items-center justify-center text-[#DFC387] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isConfirmed ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 md:p-12 text-center flex flex-col items-center pb-safe">
            <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-[#C5A059] bg-[#4A0E17] text-[#DFC387] flex items-center justify-center mb-5 sm:mb-6 shadow-[0_0_25px_rgba(197,160,89,0.3)]">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#DFC387]" />
            </div>

            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Rezerwacja Potwierdzona
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#4A0E17] mt-1.5 sm:mt-2 mb-3 sm:mb-4 px-2">
              Dziękujemy, {fullName || 'Gościu'}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5550] max-w-lg mb-6 sm:mb-8 leading-relaxed font-light px-2">
              Państwa rezerwacja w Hotelu Aurelia została przyjęta. 
              Pracownik recepcji skontaktuje się z Państwem telefonicznie lub mailowo w celu potwierdzenia szczegółów pobytu.
            </p>

            {/* Receipt Summary Box */}
            <div className="bg-white border border-[#C5A059]/40 p-4 sm:p-6 max-w-lg w-full text-left mb-6 sm:mb-8 shadow-sm">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-[#EBE7DE] text-xs">
                <span className="text-[#7A746D] uppercase tracking-wider text-[10px] sm:text-xs">Numer Rezerwacji</span>
                <span className="font-mono font-semibold text-[#4A0E17] tracking-wider">
                  {bookingCode}
                </span>
              </div>

              <div className="py-3 sm:py-4 border-b border-[#EBE7DE] space-y-2 text-xs text-[#2D2A26]">
                <div className="flex justify-between">
                  <span className="text-[#7A746D]">Apartament:</span>
                  <span className="font-medium text-right">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A746D]">Termin pobytu:</span>
                  <span className="font-medium text-right">
                    {checkIn} — {checkOut} ({nights} {nights === 1 ? 'noc' : nights < 5 ? 'noce' : 'nocy'})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A746D]">Liczba gości:</span>
                  <span className="font-medium">{guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7A746D]">E-mail:</span>
                  <span className="font-medium truncate max-w-[180px] sm:max-w-none">{email}</span>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 flex items-center justify-between">
                <span className="font-serif-luxury text-sm sm:text-base text-[#4A0E17]">Wartość pobytu:</span>
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#4A0E17] tabular-nums">
                  {grandTotal.toLocaleString('pl-PL')} PLN
                </span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#4A0E17] hover:bg-[#6E1423] text-white border border-[#C5A059] text-xs uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer min-h-[48px]"
            >
              Powrót do strony głównej
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleBookingSubmit} className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 pb-safe">
            {/* Step 1: Room & Stay Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-serif-luxury text-base sm:text-lg text-[#C5A059]">01.</span>
                <h4 className="font-serif-luxury text-lg sm:text-xl text-[#4A0E17]">
                  Wybór Apartamentu i Terminu
                </h4>
              </div>

              {/* Room Cards Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {ROOMS.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3.5 sm:p-4 border transition-all cursor-pointer flex flex-col justify-between min-h-[110px] ${
                        isSelected
                          ? 'bg-[#4A0E17] text-white border-[#C5A059] shadow-md'
                          : 'bg-white text-[#2D2A26] border-[#D9D3C7] hover:border-[#C5A059]'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-1.5">
                          <span
                            className={`text-[10px] uppercase tracking-wider ${
                              isSelected ? 'text-[#DFC387]' : 'text-[#C5A059]'
                            }`}
                          >
                            {room.area}
                          </span>
                          <span
                            className={`font-serif-luxury text-sm font-semibold tabular-nums ${
                              isSelected ? 'text-[#DFC387]' : 'text-[#4A0E17]'
                            }`}
                          >
                            {room.pricePerNight} PLN/noc
                          </span>
                        </div>
                        <h5 className="font-serif-luxury text-base font-semibold leading-tight mb-1">
                          {room.name}
                        </h5>
                        <p
                          className={`text-[11px] leading-snug line-clamp-2 ${
                            isSelected ? 'text-[#F9F8F6]/80' : 'text-[#7A746D]'
                          }`}
                        >
                          {room.tagline}
                        </p>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                        <span className={isSelected ? 'text-[#DFC387]' : 'text-[#7A746D]'}>
                          {room.bedType}
                        </span>
                        {isSelected && (
                          <span className="text-[#DFC387] font-semibold">Wybrano ✓</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                    Przyjazd
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                    Wyjazd
                  </label>
                  <input
                    type="date"
                    required
                    min={checkIn}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                    Liczba Gości
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none cursor-pointer min-h-[44px]"
                  >
                    <option value={1}>1 Gość (Dorośli)</option>
                    <option value={2}>2 Gości (Dorośli)</option>
                    <option value={3}>3 Gości (Dorośli)</option>
                    <option value={4}>4 Gości (Dorośli)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-serif-luxury text-base sm:text-lg text-[#C5A059]">02.</span>
                <h4 className="font-serif-luxury text-lg sm:text-xl text-[#4A0E17]">
                  Usługi dodatkowe
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {LUXURY_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 border flex items-start justify-between gap-3 cursor-pointer transition-all min-h-[52px] ${
                        isChecked
                          ? 'bg-[#4A0E17]/5 border-[#C5A059]'
                          : 'bg-white border-[#E0DBD0] hover:border-[#C5A059]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent click
                          className="mt-1 accent-[#4A0E17] cursor-pointer w-4 h-4"
                        />
                        <div>
                          <p className="text-xs font-semibold text-[#4A0E17]">{addon.name}</p>
                          <p className="text-[11px] text-[#7A746D] leading-tight font-light mt-0.5">
                            {addon.description}
                          </p>
                        </div>
                      </div>
                      <span className="font-serif-luxury text-xs font-semibold text-[#C5A059] whitespace-nowrap tabular-nums">
                        +{addon.price} PLN
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Guest Information */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-serif-luxury text-base sm:text-lg text-[#C5A059]">03.</span>
                <h4 className="font-serif-luxury text-lg sm:text-xl text-[#4A0E17]">
                  Dane gościa i uwagi
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                    Imię i Nazwisko *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="np. Jan Kowalski"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                    Adres E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jan.kowalski@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                    Telefon Kontaktowy *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+48 600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#4A0E17] mb-1 font-medium">
                  Uwagi do rezerwacji
                </label>
                <textarea
                  rows={2}
                  placeholder="np. szacowana godzina przyjazdu, łóżeczko dziecięce, preferencje dietetyczne..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#D9D3C7] px-3 py-2 text-[16px] sm:text-xs text-[#2D2A26] focus:border-[#C5A059] focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Price & Booking Summary Strip */}
            <div className="bg-[#4A0E17] text-white p-4 sm:p-6 border border-[#C5A059] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6 shadow-[0_8px_30px_rgba(74,14,23,0.2)]">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs text-[#DFC387] font-medium tracking-wider">
                  Kalkulacja Pobytu: {nights} {nights === 1 ? 'noc' : nights < 5 ? 'noce' : 'nocy'} · {guests} {guests === 1 ? 'gość' : 'gości'}
                </div>
                <div className="text-xs text-[#F9F8F6]/75 font-light">
                  {currentRoom.name} ({roomTotal.toLocaleString('pl-PL')} PLN)
                  {addonsTotal > 0 && ` + Dodatki (${addonsTotal.toLocaleString('pl-PL')} PLN)`}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between md:justify-end gap-3 sm:gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-[#C5A059]/30">
                <div className="text-center md:text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC387] block">
                    Łączna kwota
                  </span>
                  <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#F9F8F6] tabular-nums">
                    {grandTotal.toLocaleString('pl-PL')} PLN
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] hover:bg-[#DFC387] active:scale-[0.99] text-[#32080E] text-xs font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-[0_4px_20px_rgba(197,160,89,0.35)] whitespace-nowrap min-h-[48px] flex items-center justify-center"
                >
                  Potwierdź Rezerwację
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#7A746D] text-center px-2">
              <Shield className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>
                Płatność na miejscu podczas zameldowania. Bezpieczna rezerwacja bez ukrytych opłat.
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
