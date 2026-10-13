import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { RoomModal } from './components/RoomModal';
import { BookingModal } from './components/BookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Room } from './data/hotelData';

export default function App() {
  const [selectedRoomForPreview, setSelectedRoomForPreview] = useState<Room | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialBookingData, setInitialBookingData] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    roomId?: string;
  }>({});

  const handleOpenBooking = (data?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    roomId?: string;
  }) => {
    if (data) {
      setInitialBookingData(data);
    }
    setBookingModalOpen(true);
  };

  const handleBookRoom = (roomId: string) => {
    setInitialBookingData((prev) => ({
      ...prev,
      roomId,
    }));
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2D2A26] selection:bg-[#C5A059]/30 selection:text-[#4A0E17] flex flex-col font-sans-luxury">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Rooms
          onSelectRoom={(room) => setSelectedRoomForPreview(room)}
          onBookRoom={handleBookRoom}
        />
        <Amenities />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Room Preview Modal */}
      <RoomModal
        room={selectedRoomForPreview}
        onClose={() => setSelectedRoomForPreview(null)}
        onBook={handleBookRoom}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={initialBookingData}
      />

      {/* Floating Bottom Quick Action Bar on Mobile Phones */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
