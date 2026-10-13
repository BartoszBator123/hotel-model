import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="kontakt" className="bg-[#32080E] text-white border-t border-[#C5A059]/30 relative mb-14 md:mb-0">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-[#4A0E17] via-[#C5A059] to-[#4A0E17]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Brand & Philosophy */}
          <div>
            <span className="font-serif-luxury text-2xl md:text-3xl font-medium tracking-[0.18em] sm:tracking-[0.2em] text-[#F9F8F6] uppercase block mb-3 sm:mb-4">
              Hotel Aurelia
            </span>
            <p className="text-xs text-[#F9F8F6]/75 font-light leading-relaxed mb-5 sm:mb-6">
              Kameralny hotel butikowy w zabytkowej części Krakowa. Dbamy o spokojną atmosferę, czystość oraz pomocną obsługę przez całą dobę.
            </p>
            <div className="text-[11px] text-[#DFC387] tracking-wider uppercase font-medium">
              ul. Kanonicza 14 · Stare Miasto
            </div>
          </div>

          {/* Column 2: Contact & Reception */}
          <div>
            <h4 className="font-serif-luxury text-lg sm:text-xl text-[#DFC387] mb-4 sm:mb-6 tracking-wide">
              Kontakt i Recepcja
            </h4>
            <ul className="space-y-3.5 text-xs font-light text-[#F9F8F6]/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  ul. Kanonicza 14<br />
                  31-002 Kraków, Polska
                </span>
              </li>
              <li>
                <a
                  href="tel:+48128882040"
                  className="flex items-center gap-3 hover:text-[#DFC387] active:text-[#DFC387] transition-colors py-1 min-h-[38px]"
                >
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-medium">+48 12 888 20 40</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:concierge@hotel-aurelia.pl"
                  className="flex items-center gap-3 hover:text-[#DFC387] active:text-[#DFC387] transition-colors py-1 min-h-[38px]"
                >
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>recepcja@hotel-aurelia.pl</span>
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Zameldowanie: od 15:00<br />
                  Wymeldowanie: do 12:00
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Historic District */}
          <div>
            <h4 className="font-serif-luxury text-lg sm:text-xl text-[#DFC387] mb-4 sm:mb-6 tracking-wide">
              Lokalizacja
            </h4>
            <div className="bg-[#240409] border border-[#C5A059]/30 p-4">
              <div className="flex items-center justify-between text-xs text-[#DFC387] mb-2 font-medium">
                <span>Stare Miasto / Wawel</span>
                <span className="tabular-nums font-mono text-[10px]">50.0543° N</span>
              </div>
              <p className="text-[11px] text-[#F9F8F6]/70 leading-relaxed font-light mb-3">
                Hotel znajduje się przy cichej, urokliwej ulicy Kanoniczej, 
                zaledwie 200 metrów od Zamku Królewskiego na Wawelu i 5 minut od Rynku Głównego.
              </p>
              <div className="pt-2 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#DFC387]/90">
                <span>Parking dla gości</span>
                <span className="text-[#C5A059]">Dostępny na miejscu</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-serif-luxury text-lg sm:text-xl text-[#DFC387] mb-4 sm:mb-6 tracking-wide">
              Newsletter Hotelowy
            </h4>
            <p className="text-xs text-[#F9F8F6]/75 font-light leading-relaxed mb-4">
              Zapisz się, aby otrzymywać informacje o sezonowych promocjach oraz ofertach weekendowych.
            </p>

            {subscribed ? (
              <div className="bg-[#4A0E17] border border-[#C5A059] p-3 text-xs text-[#DFC387] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC387]" />
                <span>Dziękujemy! Twój adres został zapisany.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Twój adres e-mail"
                    className="w-full bg-[#240409] border border-[#C5A059]/40 text-[16px] sm:text-xs text-white px-3 py-2.5 focus:border-[#C5A059] focus:outline-none placeholder-[#F9F8F6]/40 min-h-[44px]"
                  />
                  <button
                    type="submit"
                    aria-label="Zapisz się do newslettera"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#C5A059] hover:bg-[#DFC387] active:scale-95 text-[#32080E] transition-colors flex items-center justify-center cursor-pointer min-w-[44px]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <span className="block text-[10px] text-[#F9F8F6]/50 font-light">
                  Szanujemy Twoją prywatność. Zero spamu.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F8F6]/60 font-light text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Hotel Aurelia. Wszelkie prawa zastrzeżone.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#polityka" className="hover:text-[#DFC387] py-1 transition-colors">
              Polityka Prywatności
            </a>
            <span aria-hidden="true">·</span>
            <a href="#regulamin" className="hover:text-[#DFC387] py-1 transition-colors">
              Regulamin Pobytu
            </a>
            <span aria-hidden="true">·</span>
            <a href="#rezerwacja" className="hover:text-[#DFC387] py-1 transition-colors">
              Informacja RODO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
