import React from 'react';
import { CLINIC_INFO, CLINICAL_DEPARTMENTS } from '../data/clinicData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-surface-container-low mt-16 border-t border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Col 1: About Clinic */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
                <span className="material-symbols-outlined text-[22px]">local_hospital</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary leading-tight">
                  Moiz Clinic
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  Main Academy Road, Lahore Cantt
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Providing dedicated general medicine, doctor consultations, diagnostic health checks, and urgent medical first-aid to families in Lahore Cantt with compassion and clinical reliability.
            </p>

            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold hover:bg-tertiary-container hover:text-on-tertiary transition-all shadow-sm"
                href={CLINIC_INFO.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Direct WhatsApp Consult</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-on-surface">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>Home Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>About Our Doctors &amp; Clinic</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('medical-services')}
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>Clinical Services &amp; OPD</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('doctor-timings')}
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>Doctor OPD Schedule</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('clinic-location')}
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>Map &amp; Directions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact-clinic')}
                  className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  <span>Emergency Inquiries</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinical Hours */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-on-surface">Clinical Hours</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-1.5 bg-surface-container rounded-lg px-2.5">
                <span className="text-on-surface font-semibold">Emergency Unit</span>
                <span className="text-tertiary font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                  24/7 Open
                </span>
              </div>
              {CLINICAL_DEPARTMENTS.slice(1).map((dept, i) => (
                <div key={i} className="flex justify-between items-center py-1 px-2.5">
                  <span className="text-on-surface-variant">{dept.name}</span>
                  <span className="text-on-surface font-semibold">{dept.timing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Clinic Location */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold text-on-surface">Clinic Location</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="leading-snug">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  call
                </span>
                <a
                  className="text-on-surface hover:text-primary transition-colors font-semibold"
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  chat
                </span>
                <span>WhatsApp: {CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                  near_me
                </span>
                <span>{CLINIC_INFO.landmark}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Emergency Advisory Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-error-container text-on-error-container text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8 border border-error/20">
          <span className="material-symbols-outlined text-error text-[26px] shrink-0">
            emergency
          </span>
          <div>
            <span className="font-bold">Medical Emergency Advisory:</span> In life-threatening emergencies, cardiac arrest, or severe trauma, please call our emergency hotline directly at{' '}
            <a
              className="font-bold underline text-on-error-container"
              href={`tel:${CLINIC_INFO.phoneClean}`}
            >
              {CLINIC_INFO.phone}
            </a>{' '}
            or visit our clinic on Main Academy Road, Lahore Cantt.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant text-xs font-medium">
          <p>© {new Date().getFullYear()} Moiz Clinic. All rights reserved. Main Academy Road, Lahore Cantt.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
              PMC Registered Doctors
            </span>
            <span>•</span>
            <span>Certified Medical Diagnostics</span>
            <span>•</span>
            <span>Family Practice &amp; Urgent Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
