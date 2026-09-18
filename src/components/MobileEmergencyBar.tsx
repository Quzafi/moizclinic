import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileEmergencyBarProps {
  onOpenBooking: () => void;
}

export const MobileEmergencyBar: React.FC<MobileEmergencyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-lg border-t border-surface-container px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${CLINIC_INFO.phoneClean}`}
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-primary text-on-primary text-center font-semibold text-xs shadow-sm hover:bg-primary-container transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span>Call Now</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-tertiary text-on-tertiary text-center font-semibold text-xs shadow-sm hover:bg-tertiary-container transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">chat</span>
          <span>WhatsApp</span>
        </a>

        {/* Book Visit */}
        <button
          onClick={onOpenBooking}
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-surface-container-high text-primary text-center font-semibold text-xs hover:bg-surface-container-highest transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          <span>Book Visit</span>
        </button>

        {/* Directions */}
        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-surface-container-low text-on-surface text-center font-semibold text-xs hover:bg-surface-container transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">directions</span>
          <span>Map</span>
        </a>
      </div>
    </div>
  );
};
