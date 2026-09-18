import React from 'react';
import { LEAD_DOCTOR, CLINIC_INFO } from '../data/clinicData';

interface DoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAppointment: () => void;
}

export const DoctorModal: React.FC<DoctorModalProps> = ({
  isOpen,
  onClose,
  onBookAppointment,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between p-6 border-b border-surface-container bg-surface-container-low/50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
            <span className="font-bold text-sm text-primary uppercase tracking-wider">
              Doctor Credentials &amp; Profile
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-32 h-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-surface-container">
              <img
                src={LEAD_DOCTOR.image}
                alt={LEAD_DOCTOR.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>{LEAD_DOCTOR.pmcNumber}</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface">{LEAD_DOCTOR.name}</h3>
              <p className="text-sm font-semibold text-primary">{LEAD_DOCTOR.title}</p>
              <p className="text-xs text-on-surface-variant font-medium mt-1">
                {LEAD_DOCTOR.experience}
              </p>

              <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span>
                <span>OPD: {LEAD_DOCTOR.opdTimings}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">school</span>
              Academic Qualifications &amp; Accreditations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {LEAD_DOCTOR.qualifications.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-surface-container-low text-xs text-on-surface font-medium flex items-center gap-2 border border-surface-container"
                >
                  <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-tertiary">health_and_safety</span>
              Clinical Specializations
            </h4>
            <div className="flex flex-wrap gap-2">
              {LEAD_DOCTOR.specializations.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-surface-container text-xs font-medium text-on-surface border border-surface-container-high"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container">
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {LEAD_DOCTOR.bio}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-surface-container bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:underline"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>Clinic Hotline: {CLINIC_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-tertiary text-on-tertiary px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-tertiary-container transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onBookAppointment();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-primary text-on-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
            >
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
