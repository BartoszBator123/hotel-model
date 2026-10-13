import heroImage from '@/src/assets/images/hero_hotel_aurelia_1791528074014.jpg';
import deluxeImage from '@/src/assets/images/room_deluxe_suite_1791528086463.jpg';
import penthouseImage from '@/src/assets/images/room_royal_penthouse_1791528096574.jpg';
import gardenImage from '@/src/assets/images/room_garden_salon_1791528107476.jpg';
import spaImage from '@/src/assets/images/amenity_spa_wellness_1791528117665.jpg';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  area: string;
  bedType: string;
  view: string;
  image: string;
  description: string;
  longDescription: string;
  amenities: string[];
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image?: string;
}

export const ROOMS: Room[] = [
  {
    id: 'deluxe-king',
    name: 'Apartament Deluxe King',
    tagline: 'Przestronne wnętrze i spokojny wypoczynek',
    pricePerNight: 1450,
    area: '55 m²',
    bedType: 'Łóżko podwójne (200x200 cm)',
    view: 'Widok na cichy dziedziniec',
    image: deluxeImage,
    description: 'Komfortowy, jasny apartament z dębowym parkietem, dużym łóżkiem i widokiem na spokojny wewnętrzny dziedziniec.',
    longDescription: 'Wygodny apartament urządzony z dbałością o każdy szczegół. Do dyspozycji gości jest duże łóżko z wysokogatunkową pościelą, biurko do pracy, dźwiękoszczelne okna oraz elegancka łazienka z prysznicem, podgrzewaną podłogą i zestawem kosmetyków.',
    amenities: [
      'Duże łóżko podwójne (200x200 cm)',
      'Łazienka z podgrzewaną podłogą i prysznicem',
      'Zestaw kosmetyków i miękkie ręczniki',
      'Ekspres do kawy i zestaw herbat',
      'Dźwiękoszczelne okna',
      'Sejf pokojowy i szybkie Wi-Fi'
    ]
  },
  {
    id: 'royal-penthouse',
    name: 'Apartament Penthouse z Tarasem',
    tagline: 'Ostatnie piętro z widokiem na Stare Miasto',
    pricePerNight: 3800,
    area: '120 m²',
    bedType: 'Duże łóżko małżeńskie (220x220 cm)',
    view: 'Widok na panoramę Starego Miasta',
    image: penthouseImage,
    description: 'Nasz największy apartament z osobnym salonem, sypialnią, przestronną łazienką z wanną oraz prywatnym tarasem.',
    longDescription: 'Komfortowy apartament na najwyższej kondygnacji budynku. Składa się z przestronnego salonu z częścią wypoczynkową, dużej sypialni, łazienki z wanną wolnostojącą i osobnym prysznicem oraz prywatnego tarasu z widokiem na zabytkowe kamienice Krakowa.',
    amenities: [
      'Prywatny taras z widokiem na miasto',
      'Wanna wolnostojąca oraz prysznic',
      'Osobny salon wypoczynkowy i sypialnia',
      'Indywidualnie sterowana klimatyzacja',
      'Ekspres do kawy, minibar i zestaw powitalny',
      'Garderoba i toaletka'
    ]
  },
  {
    id: 'garden-salon',
    name: 'Apartament z Prywatnym Ogrodem',
    tagline: 'Cisza i bezpośrednie wyjście do ogrodu',
    pricePerNight: 2100,
    area: '75 m²',
    bedType: 'Łóżko podwójne (200x200 cm)',
    view: 'Zadbany ogród różany',
    image: gardenImage,
    description: 'Cichy apartament na parterze z wysokimi sufitami i bezpośrednim wyjściem do zadbanego hotelowego ogrodu.',
    longDescription: 'Wyjątkowy apartament łączący wysokie, przestronne wnętrza z prywatnym wyjściem do zielonego ogrodu. Goście mogą odpocząć na werandzie, zjeść tam poranne śniadanie lub poczytać książkę w otoczeniu zieleni w samym sercu Krakowa.',
    amenities: [
      'Bezpośrednie wyjście do zielonego ogrodu',
      'Zadaszona weranda z meblami ogrodowymi',
      'Możliwość podania śniadania do pokoju',
      'Przestronna łazienka z prysznicem',
      'Ekspres do kawy i czajnik',
      'Wygodne biurko do pracy'
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'spa',
    title: 'Strefa SPA & Wellness',
    subtitle: 'Basen, sauny i masaże',
    description: 'Do dyspozycji gości przygotowaliśmy kryty basen z podgrzewaną wodą, saunę suchą, łaźnię parową oraz gabinety zabiegowe.',
    tag: 'Strefa Relaksu',
    image: spaImage
  },
  {
    id: 'restaurant',
    title: 'Restauracja Lumière',
    subtitle: 'Kuchnia polska i europejska',
    description: 'Nasi kucharze przygotowują dania ze świeżych, lokalnych produktów sezonowych od zaufanych polskich dostawców.',
    tag: 'Restauracja'
  },
  {
    id: 'concierge',
    title: 'Całodobowa recepcja',
    subtitle: 'Pomoc w organizacji pobytu',
    description: 'Chętnie zorganizujemy transport z lotniska, zarezerwujemy stolik w restauracji lub kupimy bilety do teatru i muzeów.',
    tag: 'Usługi dla gości'
  },
  {
    id: 'cellar',
    title: 'Piwnica z winami',
    subtitle: 'Wyselekcjonowane wina',
    description: 'Bogata karta win z uznanych winiarni z Francji, Włoch i Hiszpanii, a także ciekawe wina z polskich winnic rzemieślniczych.',
    tag: 'Winiarnia'
  },
  {
    id: 'cigar-library',
    title: 'Salon klubowy z czytelnią',
    subtitle: 'Spokojna przestrzeń do odpoczynku',
    description: 'Wygodne skórzane fotele, regały z literaturą, prasa codzienna oraz wybór kaw, herbat i alkoholi.',
    tag: 'Strefa wypoczynku'
  },
  {
    id: 'breakfast',
    title: 'Świeże śniadania',
    subtitle: 'Bufet i dania na ciepło',
    description: 'Chrupiące pieczywo na zakwasie z krakowskiej piekarni, lokalne sery i wędliny, świeże owoce oraz dania na ciepło na zamówienie.',
    tag: 'Śniadania'
  }
];

export const HERITAGE_FACTS = [
  { number: '1894', label: 'Rok budowy kamienicy' },
  { number: '18', label: 'Komfortowych apartamentów' },
  { number: '200 m', label: 'Odległość od Zamku na Wawelu' },
  { number: '24/7', label: 'Całodobowa recepcja' }
];

export const TESTIMONIALS = [
  {
    quote: 'Wspaniałe, ciche miejsce w samym sercu Krakowa. Pokoje są bardzo czyste, łóżka niezwykle wygodne, a obsługa pomocna i dyskretna.',
    author: 'Anna i Tomasz Kowalscy',
    role: 'Pobyt weekendowy, Warszawa',
    rating: 5
  },
  {
    quote: 'Świetna lokalizacja kilka minut spacerem od Wawelu. Bardzo dobre śniadania i kameralna strefa spa, idealna po całym dniu zwiedzania.',
    author: 'Marek Wiśniewski',
    role: 'Podróż służbowa, Poznań',
    rating: 5
  },
  {
    quote: 'Apartament z ogrodem bardzo nam się podobał — cisza, dużo zieleni i wysoki standard wykończenia. Z przyjemnością wrócimy.',
    author: 'Katarzyna Nowak',
    role: 'Pobyt z rodziną, Gdańsk',
    rating: 5
  }
];

export { heroImage };
