import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { AppointmentInquiry } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialService = '',
  onClose,
}) => {
  const [formData, setFormData] = useState<AppointmentInquiry>({
    fullName: '',
    phoneNumber: '',
    service: initialService || SERVICES_LIST[0]?.title || '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*Moiz Clinic - Consultation Booking*\n` +
        `👤 *Patient:* ${formData.fullName || 'Not specified'}\n` +
        `📞 *Contact:* ${formData.phoneNumber || 'Not specified'}\n` +
        `🏥 *Service:* ${formData.service}\n` +
        (formData.preferredDate ? `📅 *Date:* ${formData.preferredDate}\n` : '') +
        (formData.preferredTime ? `⏰ *Time:* ${formData.preferredTime}\n` : '') +
        (formData.message ? `📝 *Notes:* ${formData.message}` : '')
    );
    window.open(`${CLINIC_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-surface-container-lowest rounded-3xl shadow-2xl border border-surface-container overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-surface-container bg-surface-container-low/50">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-[24px]">calendar_today</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface leading-tight">
                Consultation &amp; Appointment
              </h3>
              <p className="text-xs text-on-surface-variant">Moiz Clinic, Lahore Cantt</p>
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
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shadow-sm">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface">Consultation Request Placed</h4>
              <p className="text-sm text-on-surface-variant max-w-sm">
                Thank you, <strong className="text-on-surface">{formData.fullName}</strong>. Our clinical receptionist will reach out to you at <strong className="text-on-surface">{formData.phoneNumber}</strong> to confirm the exact consultation time.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 w-full">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2 bg-tertiary text-on-tertiary py-3 px-4 rounded-xl text-sm font-semibold hover:bg-tertiary-container transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Confirm on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center bg-surface-container py-3 px-4 rounded-xl text-sm font-semibold text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-on-surface">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-container-high text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-on-surface">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0300-1234567"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-container-high text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-on-surface">
                  Department / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-container-high text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest"
                >
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Gynecology & Antenatal Care">Gynecology &amp; Antenatal Care</option>
                  <option value="Child Health & Vaccination">Child Health &amp; Vaccination</option>
                  <option value="General Health Checkup">General Health Checkup</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-on-surface">
                    Preferred Day
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-surface-container-high text-xs outline-none focus:border-primary bg-surface-container-lowest"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-on-surface">
                    Time Preference
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-surface-container-high text-xs outline-none focus:border-primary bg-surface-container-lowest"
                  >
                    <option value="">Any time</option>
                    <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (01:00 PM - 05:00 PM)</option>
                    <option value="Evening (05:00 PM - 10:00 PM)">Evening (05:00 PM - 10:00 PM)</option>
                    <option value="Urgent / Today">Urgent / Today</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-on-surface">
                  Symptoms or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe symptoms or reason for visit..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-surface-container-high text-xs outline-none focus:border-primary bg-surface-container-lowest resize-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-primary text-on-primary py-3 rounded-xl text-sm font-semibold hover:bg-primary-container transition-colors cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Confirm Booking</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-1 bg-tertiary text-on-tertiary py-3 px-4 rounded-xl text-sm font-semibold hover:bg-tertiary-container transition-colors cursor-pointer shadow-sm"
                  title="Send to WhatsApp"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
