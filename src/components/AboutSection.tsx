import React from 'react';
import { LEAD_DOCTOR } from '../data/clinicData';

interface AboutSectionProps {
  onOpenDoctorModal: () => void;
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenDoctorModal,
  onOpenBookingModal,
}) => {
  return (
    <section id="about-us" className="w-full py-16 sm:py-24 bg-surface-container-lowest border-b border-surface-container/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-surface-container text-primary text-[12px] font-bold tracking-wider uppercase mb-3">
            <span className="material-symbols-outlined text-[15px]">apartment</span>
            ABOUT OUR CLINIC
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
            Serving Lahore Cantt with Compassion &amp; Clinical Care
          </h2>

          <p className="text-base text-on-surface-variant mt-4 leading-relaxed">
            Moiz Clinic is dedicated to providing high-quality, accessible, and compassionate medical care to patients and families across Main Academy Road, Lahore Cantt and surrounding communities. From routine OPD checkups and medical diagnostics to urgent first-aid, we prioritize patient well-being and prompt care.
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Pillar 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-low flex flex-col items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow border border-surface-container">
            <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[26px]">favorite</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface pt-1">
              Patient-First Care
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Every patient is treated with respect, warm attention, and deep medical listening. We formulate personalized treatment plans that respect family wellness and comfort.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-low flex flex-col items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow border border-surface-container">
            <div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[26px]">timelapse</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface pt-1">
              Round-the-Clock Preparedness
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Medical emergencies don't wait. Our rapid triage team, emergency oxygen, and wound stabilization are ready to serve during crucial hours without delay.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-surface-container-low flex flex-col items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow border border-surface-container">
            <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[26px]">sanitizer</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface pt-1">
              Hygienic &amp; Well-Equipped Setup
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              From sterilized medical grade equipment to neat consultation chambers, our premises strictly comply with modern healthcare sanitization protocols.
            </p>
          </div>
        </div>

        {/* Doctor Spotlight Banner */}
        <div className="bg-gradient-to-r from-surface-container to-surface-container-low p-6 sm:p-8 rounded-3xl border border-surface-container-high flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <img
              src={LEAD_DOCTOR.image}
              alt={LEAD_DOCTOR.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-primary/20 shadow-md shrink-0 cursor-pointer hover:opacity-90"
              onClick={onOpenDoctorModal}
            />
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-lg font-bold text-on-surface">{LEAD_DOCTOR.name}</span>
                <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">
                  {LEAD_DOCTOR.pmcNumber}
                </span>
              </div>
              <p className="text-sm text-primary font-semibold">{LEAD_DOCTOR.title}</p>
              <p className="text-xs text-on-surface-variant mt-1 max-w-xl">
                Specialized in chronic disease management, mother &amp; child wellness, and preventative health guidance for Lahore families.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDoctorModal}
              className="px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface border border-outline-variant/50 text-sm font-semibold hover:bg-surface transition-colors cursor-pointer shadow-sm"
            >
              View Qualifications &amp; Schedule
            </button>
            <button
              onClick={onOpenBookingModal}
              className="px-4 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container transition-colors cursor-pointer shadow-sm"
            >
              Book OPD Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
