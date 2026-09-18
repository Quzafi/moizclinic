import React from 'react';
import { MedicalService } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface ServiceDetailModalProps {
  service: MedicalService | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface-container bg-surface-container-low/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                {service.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {service.description}
          </p>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-on-surface">
              <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
              <span>Available Hours:</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-primary">
              {service.availability}
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">
              Included Procedures &amp; Care Scope
            </h4>
            <div className="space-y-2">
              {service.features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-on-surface bg-surface-container/40 p-2.5 rounded-xl"
                >
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-surface-container bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-tertiary hover:underline"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp Quick Questions</span>
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-primary text-on-primary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm cursor-pointer"
            >
              <span>Book / Inquire for {service.title}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
