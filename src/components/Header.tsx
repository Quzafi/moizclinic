import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenDoctorModal: () => void;
  onOpenBookingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenDoctorModal,
  onOpenBookingModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About' },
    { id: 'medical-services', label: 'Services' },
    { id: 'doctor-timings', label: 'Timings' },
    { id: 'clinic-location', label: 'Location' },
    { id: 'contact-clinic', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-shadow">
      {/* Top emergency announcement bar */}
      <div className="bg-primary-container text-on-primary-container text-[14px] font-medium px-4 sm:px-8 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-[13px] sm:text-[14px]">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">emergency</span>
              24/7 Emergency Medical Care Available
            </span>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1.5 text-[13px] text-on-primary-container/90">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              Main Academy Road, Lahore Cantt
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:underline font-semibold text-[13px]"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              {CLINIC_INFO.phone}
            </a>
            <span className="opacity-40">|</span>
            <span className="flex items-center gap-1.5 text-[13px]">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              OPD: 9:00 AM - 10:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`h-20 bg-surface/95 backdrop-blur-xl border-b border-surface-container transition-all ${
          scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : 'shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo and Clinic Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">local_hospital</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[19px] font-bold text-primary tracking-tight leading-tight">
                Moiz Clinic
              </span>
              <span className="text-[12px] font-medium text-on-surface-variant">
                Medical Clinic • Lahore Cantt
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[15px] transition-colors py-1 cursor-pointer font-medium ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              className="hidden sm:inline-flex items-center gap-1.5 bg-surface-container-low text-primary px-3.5 py-2 rounded-xl text-[14px] font-semibold hover:bg-surface-container transition-all shadow-sm"
              href={`tel:${CLINIC_INFO.phoneClean}`}
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <a
              className="inline-flex items-center gap-1.5 bg-tertiary text-on-tertiary px-3.5 py-2 rounded-xl text-[14px] font-semibold hover:bg-tertiary-container hover:text-on-tertiary transition-all shadow-[0_2px_8px_rgba(0,105,71,0.25)]"
              href={CLINIC_INFO.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden xs:inline">WhatsApp Us</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenDoctorModal}
              title="View Doctor Profile & Credentials"
              className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">person</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container px-6 py-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-[15px] font-medium border-b border-surface-container-low transition-colors ${
                  activeSection === item.id
                    ? 'text-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-2.5 rounded-xl font-semibold text-[14px]"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Book Appointment / Inquiry
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-surface-container-low text-primary py-2.5 rounded-xl font-semibold text-[14px]"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                Call Clinic: {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
