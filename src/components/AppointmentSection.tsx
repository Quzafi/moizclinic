import React, { useState } from 'react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { AppointmentInquiry } from '../types';

interface AppointmentSectionProps {
  preselectedService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentInquiry>({
    fullName: '',
    phoneNumber: '',
    service: preselectedService,
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<AppointmentInquiry | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.service) return;

    setLastSubmission({ ...formData });
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*Moiz Clinic - Appointment / Inquiry Request*\n` +
        `👤 *Patient:* ${formData.fullName || 'Not specified'}\n` +
        `📞 *Phone:* ${formData.phoneNumber || 'Not specified'}\n` +
        `🏥 *Service:* ${formData.service || 'General Consultation'}\n` +
        (formData.message ? `📝 *Symptoms/Notes:* ${formData.message}` : '')
    );
    window.open(`${CLINIC_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  return (
    <section id="contact-clinic" className="w-full py-16 sm:py-24 bg-surface border-t border-surface-container/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Reach Out */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-surface-container text-primary text-[12px] font-bold tracking-wider uppercase mb-2">
                <span className="material-symbols-outlined text-[15px]">contact_phone</span>
                CONTACT &amp; APPOINTMENTS
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                We Are Here When You Need Us
              </h2>

              <p className="text-base text-on-surface-variant mt-2 mb-8 leading-relaxed">
                Have an inquiry, wish to schedule a consultation, or need emergency guidance? Contact our front-desk coordinator directly.
              </p>

              <div className="space-y-4">
                {/* Phone Contact Card */}
                <a
                  className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm border border-surface-container/60 group"
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  id="contactPhoneCard"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">call</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">
                      Direct Hotline &amp; Ambulance
                    </span>
                    <p className="text-lg sm:text-xl font-bold text-primary">
                      {CLINIC_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors shadow-sm border border-surface-container/60 group"
                  href={CLINIC_INFO.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  id="contactWhatsappCard"
                >
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                    <span className="material-symbols-outlined text-[24px]">chat</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">
                      Fast Response Messaging
                    </span>
                    <p className="text-lg sm:text-xl font-bold text-tertiary">
                      WhatsApp: {CLINIC_INFO.phone}
                    </p>
                  </div>
                </a>

                {/* Address summary card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container/60">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">home_pin</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider block">
                      Clinic Address
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-on-surface">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container mt-8 flex items-center gap-3 border border-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[26px] shrink-0">
                verified
              </span>
              <p className="text-xs sm:text-sm text-on-surface font-medium leading-normal">
                Emergency triage open day &amp; night. Urgent cases given immediate priority upon arrival.
              </p>
            </div>
          </div>

          {/* Right Column: Simple Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(15,23,42,0.05)] border border-surface-container">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface">
                  Book Consultation or Send Inquiry
                </h3>
                <p className="text-sm text-on-surface-variant mt-1">
                  Our clinical receptionist will confirm your timing right away.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-tertiary-fixed/40 border border-tertiary-fixed text-on-tertiary-fixed flex flex-col gap-4 animate-fadeIn">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary text-[32px] shrink-0">
                      check_circle
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-tertiary">Inquiry Received Successfully!</h4>
                      <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                        Thank you, <strong className="text-on-surface">{lastSubmission?.fullName}</strong>. Our front-desk coordinator will review your request for{' '}
                        <strong className="text-on-surface">{lastSubmission?.service}</strong> and contact you at{' '}
                        <strong className="text-on-surface">{lastSubmission?.phoneNumber}</strong> shortly.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:bg-tertiary-container transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Send to WhatsApp Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 bg-surface-container px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                    >
                      <span>Submit another inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" id="clinicInquiryForm" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        className="block text-xs sm:text-sm font-bold text-on-surface"
                        htmlFor="fullName"
                      >
                        Full Patient / Guardian Name *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm sm:text-base border border-surface-container-high outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        id="fullName"
                        placeholder="e.g. Muhammad Usman"
                        required
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label
                        className="block text-xs sm:text-sm font-bold text-on-surface"
                        htmlFor="phoneNumber"
                      >
                        Phone Number *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm sm:text-base border border-surface-container-high outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        id="phoneNumber"
                        placeholder="0300-1234567"
                        required
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs sm:text-sm font-bold text-on-surface"
                      htmlFor="serviceSelect"
                    >
                      Select Medical Service *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface text-sm sm:text-base border border-surface-container-high outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                      id="serviceSelect"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option disabled value="">
                        Choose a department or service...
                      </option>
                      {SERVICES_LIST.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Gynecology / Mother & Child Care">
                        Gynecology / Mother &amp; Child Care
                      </option>
                      <option value="General Health Inquiry">General Inquiry / Doctor Consultation</option>
                    </select>
                  </div>

                  {/* Message / Symptoms */}
                  <div className="space-y-1.5">
                    <label
                      className="block text-xs sm:text-sm font-bold text-on-surface"
                      htmlFor="messageSymptoms"
                    >
                      Symptoms or Message (Optional)
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm sm:text-base border border-surface-container-high outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      id="messageSymptoms"
                      placeholder="Briefly describe the symptoms, preferred consultation time, or special assistance needed..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-semibold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-[0_4px_16px_rgba(0,104,95,0.2)] hover:bg-primary-container transition-all cursor-pointer"
                      type="submit"
                      id="submitInquiryBtn"
                    >
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      <span>Send Inquiry / Book Consultation</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-tertiary/10 text-tertiary hover:bg-tertiary hover:text-on-tertiary font-semibold text-sm py-3.5 px-4 rounded-xl border border-tertiary/20 transition-all cursor-pointer"
                      title="Send via WhatsApp"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
