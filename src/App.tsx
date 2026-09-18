import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TimingsSection } from './components/TimingsSection';
import { LocationSection } from './components/LocationSection';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { DoctorModal } from './components/DoctorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BookingModal } from './components/BookingModal';
import { MobileEmergencyBar } from './components/MobileEmergencyBar';
import { MedicalService } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about-us',
        'medical-services',
        'doctor-timings',
        'clinic-location',
        'contact-clinic',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Fixed Clinical Topbar & Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
        onOpenBookingModal={() => handleOpenBooking()}
      />

      {/* Main Content Areas */}
      <main className="flex-1 w-full pt-20 md:pt-28 pb-16 md:pb-0">
        <HeroSection
          onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
          onOpenBookingModal={handleOpenBooking}
        />

        <AboutSection
          onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
          onOpenBookingModal={() => handleOpenBooking()}
        />

        <ServicesSection
          onSelectService={(svc) => setSelectedService(svc)}
          onBookService={handleOpenBooking}
        />

        <TimingsSection onOpenBookingModal={() => handleOpenBooking()} />

        <LocationSection />

        <AppointmentSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Bottom Quick Bar */}
      <MobileEmergencyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Doctor Credentials & Profile Modal */}
      <DoctorModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        onBookAppointment={() => handleOpenBooking('General Physician / OPD')}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(svcTitle) => handleOpenBooking(svcTitle)}
      />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        initialService={preselectedService}
        onClose={() => {
          setIsBookingModalOpen(false);
          setPreselectedService('');
        }}
      />
    </div>
  );
}
