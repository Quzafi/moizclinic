import React from 'react';
import { CLINIC_INFO, LEAD_DOCTOR } from '../data/clinicData';

interface HeroSectionProps {
  onOpenDoctorModal: () => void;
  onOpenBookingModal: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDoctorModal,
  onOpenBookingModal,
}) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-b from-surface to-surface-container-low/40 py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 text-primary shadow-sm backdrop-blur-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-[18px]">local_hospital</span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-on-surface">
                Trusted Medical Clinic • Lahore Cantt
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-on-surface tracking-tight leading-[1.15]">
              Family Healthcare &amp; OPD in{' '}
              <span className="text-primary font-black block sm:inline">
                Main Academy Road, Lahore Cantt
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Accessible medical care, doctor consultations, and emergency first aid for your entire family. Visit us on Main Academy Road, Lahore Cantt or book an appointment online.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto pt-1">
              <a
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-semibold text-[15px] px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(0,104,95,0.25)] hover:bg-primary-container transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                href={`tel:${CLINIC_INFO.phoneClean}`}
                id="heroCallButton"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Call Now: {CLINIC_INFO.phone}</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 bg-tertiary text-on-tertiary font-semibold text-[15px] px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(0,105,71,0.2)] hover:bg-tertiary-container hover:text-on-tertiary transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                href={CLINIC_INFO.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
                id="heroWhatsappButton"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp Us</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center justify-center gap-2 bg-surface-container-high text-primary font-semibold text-[15px] px-5 py-3.5 rounded-xl hover:bg-surface-container-highest transition-all cursor-pointer"
                id="heroBookButton"
              >
                <span className="material-symbols-outlined text-[20px]">event</span>
                <span>Book Visit</span>
              </button>
            </div>

            {/* Quick Reassurance Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-surface-container">
                <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">e911_emergency</span>
                </div>
                <span className="text-[13px] text-on-surface font-semibold">
                  24/7 Emergency Support
                </span>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-surface-container">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">event_available</span>
                </div>
                <span className="text-[13px] text-on-surface font-semibold">
                  Walk-ins &amp; Appointments
                </span>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-surface-container">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
                </div>
                <span className="text-[13px] text-on-surface font-semibold">
                  Affordable Family Care
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Doctor Portrait & Floating Accents */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-fixed-dim/30 to-secondary-fixed/30 rounded-3xl filter blur-2xl -z-10"></div>

            <div className="relative w-full max-w-md bg-surface-container-lowest p-3 rounded-2xl shadow-[0_12px_40px_rgba(15,23,42,0.09)] border border-surface-container">
              {/* Doctor Image Container */}
              <div
                onClick={onOpenDoctorModal}
                className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-variant cursor-pointer group"
                title="Click to view full doctor credentials & profile"
              >
                <img
                  alt="Dr. Moiz - Consultant Physician at Moiz Clinic Lahore Cantt"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  src={CLINIC_INFO.images.doctor}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                {/* Click hint overlay on hover */}
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">visibility</span>
                  <span>View Profile</span>
                </div>

                {/* Bottom Doctor Identifier Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center justify-between shadow-md border border-white/40">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-on-surface leading-tight">
                      {LEAD_DOCTOR.name}
                    </span>
                    <span className="text-[12px] text-primary font-medium">
                      {LEAD_DOCTOR.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-full text-primary text-[12px] font-bold">
                    <span className="material-symbols-outlined text-[15px] text-primary">verified</span>
                    <span>PMC Verified</span>
                  </div>
                </div>
              </div>

              {/* Floating Hero Badges */}
              <div className="absolute -top-3.5 -left-3.5 sm:-left-5 bg-surface-container-lowest px-3.5 py-2 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 border border-surface-container">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[16px]">stethoscope</span>
                </div>
                <span className="text-[13px] font-bold text-on-surface">
                  Qualified OPD Doctors
                </span>
              </div>

              <div className="absolute -bottom-3.5 -right-3.5 sm:-right-5 bg-surface-container-lowest px-3.5 py-2 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 border border-surface-container">
                <div className="w-7 h-7 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary">
                  <span className="material-symbols-outlined text-[16px]">emergency</span>
                </div>
                <span className="text-[13px] font-bold text-on-surface">
                  24/7 Rapid Emergency Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
