import React from 'react';
import { SERVICES_LIST, CLINIC_INFO } from '../data/clinicData';
import { MedicalService } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: MedicalService) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  return (
    <section id="medical-services" className="w-full py-16 sm:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-surface-container text-primary text-[12px] font-bold tracking-wider uppercase mb-2">
              <span className="material-symbols-outlined text-[15px]">medical_services</span>
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
              Comprehensive Medical &amp; Diagnostic Care
            </h2>
            <p className="text-base text-on-surface-variant mt-1.5 max-w-2xl">
              Safe, reliable healthcare delivered by experienced medical professionals.
            </p>
          </div>

          <a
            className="inline-flex items-center gap-1.5 text-[14px] font-bold text-primary hover:text-primary-container transition-colors shrink-0 group cursor-pointer"
            href={CLINIC_INFO.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Inquire about specialized services</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => {
            const isEmergency = service.id === 'emergency-care';
            const isProcedures = service.id === 'minor-procedures';
            const isLab = service.id === 'lab-tests';

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container/60 cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon container */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isEmergency
                          ? 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary'
                          : isProcedures
                          ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary'
                          : isLab
                          ? 'bg-primary-container/10 text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container'
                          : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {service.icon}
                      </span>
                    </div>

                    {/* 24/7 pulse badge if emergency */}
                    {service.badgeText && (
                      <span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed text-[12px] px-2.5 py-0.5 rounded-full font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        {service.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-6">
                  <div className="bg-surface-container-low/60 rounded-xl p-3 flex items-center justify-between text-on-surface-variant text-[12px] font-semibold">
                    <span>{service.statusBadge}</span>
                    <span
                      className={`font-bold ${
                        isEmergency
                          ? 'text-tertiary'
                          : isProcedures
                          ? 'text-secondary'
                          : 'text-primary'
                      }`}
                    >
                      {service.statusText}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-1">
                    <span className="text-[12px] text-primary font-bold inline-flex items-center gap-1 group-hover:underline">
                      View details
                      <span className="material-symbols-outlined text-[14px]">expand_circle_right</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookService(service.title);
                      }}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-colors"
                    >
                      Book this
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
