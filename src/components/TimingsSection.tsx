import React, { useState } from 'react';
import { SCHEDULE_DAYS, CLINICAL_DEPARTMENTS, CLINIC_INFO } from '../data/clinicData';

interface TimingsSectionProps {
  onOpenBookingModal: () => void;
}

export const TimingsSection: React.FC<TimingsSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedTab, setSelectedTab] = useState<'schedule' | 'departments'>('schedule');

  return (
    <section id="doctor-timings" className="w-full py-16 sm:py-24 bg-surface-container-low/60 border-y border-surface-container/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-surface-container-high text-primary text-[12px] font-bold tracking-wider uppercase mb-2">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              CONSULTATION &amp; EMERGENCY SCHEDULE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
              Clinic Working Hours
            </h2>
            <p className="text-base text-on-surface-variant mt-1.5">
              Structured schedule designed around community emergency accessibility.
            </p>

            {/* Quick Toggle Tabs */}
            <div className="mt-6 inline-flex p-1 rounded-xl bg-surface-container border border-surface-container-high">
              <button
                type="button"
                onClick={() => setSelectedTab('schedule')}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedTab === 'schedule'
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Weekly Emergency &amp; OPD
              </button>
              <button
                type="button"
                onClick={() => setSelectedTab('departments')}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedTab === 'departments'
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Department Timings
              </button>
            </div>
          </div>

          {/* Highlight Timings Card */}
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_36px_rgba(0,104,95,0.06)] border border-surface-container relative overflow-hidden">
            {/* Top Badge Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3 border-b border-surface-container/60">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-tertiary animate-ping"></span>
                <span className="text-lg sm:text-xl font-bold text-on-surface">
                  {selectedTab === 'schedule' ? 'Weekly Operation Overview' : 'Department Hours'}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-tertiary-fixed px-3.5 py-1.5 rounded-full text-on-tertiary-fixed text-[13px] font-bold self-start sm:self-auto">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  verified_user
                </span>
                <span>24/7 Emergency Available</span>
              </div>
            </div>

            {/* Schedule List View */}
            {selectedTab === 'schedule' ? (
              <div className="space-y-3.5 pt-6">
                {SCHEDULE_DAYS.map((slot, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-surface-container-low/70 transition-colors border border-surface-container/70 shadow-sm"
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                            slot.is24Hours
                              ? 'bg-tertiary/15 text-tertiary'
                              : slot.type === 'special'
                              ? 'bg-secondary/10 text-secondary'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[22px]">
                            {slot.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-on-surface leading-snug">
                            {slot.days}
                          </h4>
                          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                            {slot.note}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold self-start sm:self-auto shrink-0 shadow-sm ${
                          slot.is24Hours
                            ? 'bg-tertiary text-on-tertiary'
                            : 'bg-surface-container-high text-on-surface'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[16px] ${
                            slot.is24Hours ? 'text-on-tertiary' : 'text-primary'
                          }`}
                        >
                          {slot.is24Hours ? 'alarm_on' : 'schedule'}
                        </span>
                        <span>{slot.hours}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Department Hours Tab */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                {CLINICAL_DEPARTMENTS.map((dept, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-surface-container-low/60 border border-surface-container flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        medical_services
                      </span>
                      <div>
                        <span className="font-bold text-sm text-on-surface block">
                          {dept.name}
                        </span>
                        <span className="text-xs text-on-surface-variant font-medium">
                          {dept.timing}
                        </span>
                      </div>
                    </div>
                    {dept.isLive ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        Active 24/7
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-primary px-2 py-0.5 rounded bg-surface-container-high">
                        Scheduled
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Note & Immediate CTA Banner */}
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary-container to-primary text-on-primary flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[26px] text-primary-fixed shrink-0 mt-0.5">
                  info
                </span>
                <div>
                  <span className="text-sm sm:text-base font-bold text-on-primary block">
                    Continuous Emergency On-Call
                  </span>
                  <p className="text-xs sm:text-sm text-on-primary/90 mt-0.5 leading-relaxed">
                    Doctors on duty for emergency admissions and urgent care round the clock on designated 24-hr days.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  className="inline-flex items-center justify-center gap-1.5 bg-surface-container-lowest text-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-surface transition-colors shadow-md cursor-pointer"
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center justify-center gap-1 bg-white/15 hover:bg-white/25 text-white px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
