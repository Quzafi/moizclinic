import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copied, setCopied] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.0));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.9));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="clinic-location" className="w-full py-16 sm:py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-surface-container text-primary text-[12px] font-bold tracking-wider uppercase mb-2">
            <span className="material-symbols-outlined text-[15px]">pin_drop</span>
            VISIT US
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
            Conveniently Located in Lahore Cantt
          </h2>
          <p className="text-base text-on-surface-variant mt-1">
            Central, easily accessible location on Main Academy Road for patients and families in Lahore Cantt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-surface-container shadow-sm">
            <div className="space-y-4">
              {/* Primary Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface">Clinic Address</h3>
                  <p className="text-base font-semibold text-on-surface mt-1">
                    Main Academy Road
                  </p>
                  <p className="text-sm text-on-surface-variant">Lahore Cantt, Punjab, Pakistan</p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="p-4 rounded-2xl bg-surface-container-lowest space-y-1.5 shadow-sm border border-surface-container/70">
                <div className="flex items-center gap-2 text-primary text-[14px] font-bold">
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  <span>Prominent Landmarks</span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Situated conveniently along Main Academy Road, Lahore Cantt with easy neighborhood access and public transit points.
                </p>
              </div>

              {/* Parking & Accessibility */}
              <div className="p-4 rounded-2xl bg-surface-container-lowest space-y-1.5 shadow-sm border border-surface-container/70">
                <div className="flex items-center gap-2 text-tertiary text-[14px] font-bold">
                  <span className="material-symbols-outlined text-[18px]">accessible</span>
                  <span>Parking &amp; Accessibility</span>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Full wheelchair ramp access at the front entrance, dedicated quick-stop ambulance and patient drop-off zone right outside.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-4 flex flex-col sm:flex-row gap-2.5">
              <a
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary py-3.5 px-4 rounded-xl text-sm font-semibold hover:bg-primary-container transition-all shadow-sm cursor-pointer"
                href={CLINIC_INFO.googleMapsUrl}
                rel="noopener noreferrer"
                target="_blank"
                id="openMapsButton"
              >
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span>Open in Google Maps / Directions</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-1.5 bg-surface-container text-on-surface py-3.5 px-4 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Simulated Interactive Map UI */}
          <div className="lg:col-span-7 relative min-h-[380px] rounded-3xl overflow-hidden shadow-sm bg-surface-container border border-surface-container">
            <div
              className="w-full h-full min-h-[380px] bg-cover bg-center relative transition-transform duration-300"
              style={{
                backgroundImage: `url('${CLINIC_INFO.images.map}')`,
                transform: `scale(${zoomLevel})`,
              }}
            >
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>

              {/* Interactive Map Header Pill */}
              <div className="absolute top-4 left-4 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md flex items-center gap-3 border border-white/60">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-on-surface leading-tight">
                    Moiz Clinic
                  </p>
                  <p className="text-[11px] font-medium text-on-surface-variant">
                    Main Academy Road, Lahore Cantt
                  </p>
                </div>
              </div>

              {/* Pin Overlay Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex flex-col items-center">
                  <div className="px-3.5 py-1.5 rounded-xl bg-primary text-on-primary text-xs sm:text-sm font-bold shadow-xl flex items-center gap-1.5 border border-white/40">
                    <span className="material-symbols-outlined text-[16px]">local_hospital</span>
                    <span>Moiz Clinic</span>
                  </div>
                  <div className="w-3.5 h-3.5 bg-primary rotate-45 -mt-1.5"></div>
                  <div className="w-6 h-2 bg-black/30 rounded-full blur-[2px] mt-1"></div>
                </div>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
                <button
                  aria-label="Zoom in map view"
                  onClick={handleZoomIn}
                  className="w-10 h-10 rounded-xl bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface hover:bg-surface hover:text-primary transition-colors cursor-pointer border border-surface-container"
                  type="button"
                  title="Zoom in"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
                <button
                  aria-label="Zoom out map view"
                  onClick={handleZoomOut}
                  className="w-10 h-10 rounded-xl bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface hover:bg-surface hover:text-primary transition-colors cursor-pointer border border-surface-container"
                  type="button"
                  title="Zoom out"
                >
                  <span className="material-symbols-outlined text-[20px]">remove</span>
                </button>
                {zoomLevel !== 1 && (
                  <button
                    aria-label="Reset zoom"
                    onClick={handleResetZoom}
                    className="w-10 h-10 rounded-xl bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface hover:bg-surface hover:text-primary transition-colors cursor-pointer border border-surface-container"
                    type="button"
                    title="Reset view"
                  >
                    <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
