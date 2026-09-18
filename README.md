# Moiz Clinic - Medical Clinic & Family Healthcare

A modern, responsive, and patient-focused web application for **Moiz Clinic**, located on **Main Academy Road, Lahore Cantt**. This website provides vital clinic information, lead physician profiles, clinical department hours, and online appointment / inquiry channels with direct WhatsApp integration.

---

## 🏥 Clinic Information

- **Clinic Name:** Moiz Clinic
- **Location:** Main Academy Road, Lahore Cantt, Punjab, Pakistan
- **Contact Hotline:** [+92 323 4881738](tel:+923234881738)
- **WhatsApp Consultations:** [+92 323 4881738](https://wa.me/923234881738)
- **Lead Physician:** Dr. Moiz (Consultant General Physician & Family Care Specialist)
- **OPD Timings:** 09:00 AM – 02:00 PM & 06:00 PM – 10:00 PM
- **Emergency Service:** 24/7 Rapid Emergency First-Aid & Urgent Care

---

## ✨ Key Features

1. **Header & Emergency Ticker:**
   - Real-time emergency banner displaying clinic hotline, location, and OPD hours.
   - Smooth navigation linking to all clinical sections.
   - Quick one-tap call and WhatsApp buttons.

2. **Hero Section:**
   - Direct call-to-action buttons (Direct Call, WhatsApp Chat, Book Visit).
   - Reassurance badges (24/7 Emergency Support, Walk-ins & Appointments, Affordable Family Care).
   - Interactive Doctor profile preview card with PMC verification tag.

3. **About Section:**
   - Overview of the clinic's patient-first philosophy, hygienic facilities, and emergency preparedness.
   - Highlighted spotlight card for Dr. Moiz with access to credentials modal.

4. **Medical Services:**
   - Detailed service cards covering General Physician / OPD, Emergency Care, Minor Surgical Procedures, and Lab Tests.
   - Interactive detail modal outlining care scope, included procedures, and scheduling options.

5. **Doctor & OPD Timings:**
   - Interactive schedule switcher between weekly OPD hours and department-wise availability.
   - Clear visual indicators for active hours and round-the-clock emergency support.

6. **Location & Directions:**
   - Detailed clinic address and landmark guidance for patients visiting from Lahore Cantt.
   - One-click Google Maps navigation and address copy feature.
   - Interactive map viewer with zoom controls and location pins.

7. **Consultation & Appointment Booking:**
   - In-page appointment request form capturing patient name, contact, department, and symptoms.
   - Quick confirmation dialog with pre-formatted WhatsApp message generation.
   - Standalone modal booking accessible from anywhere on the page.

8. **Mobile Emergency Bar:**
   - Sticky bottom action bar on mobile devices offering immediate access to Call Now, WhatsApp, Book Visit, and Maps.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Material Symbols Outlined](https://fonts.google.com/icons) & [Lucide Icons](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm or yarn

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Launches the Vite development server on port 3000.
- `npm run build` - Builds the optimized production bundle in the `dist/` directory.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs TypeScript type checking (`tsc --noEmit`).

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with SEO metadata
├── metadata.json                # Application metadata
├── package.json                 # Dependencies and npm scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── tsconfig.json                # TypeScript configuration
├── src/
│   ├── App.tsx                  # Main application component & layout
│   ├── main.tsx                 # React DOM mount point
│   ├── index.css                # Global Tailwind CSS theme configuration
│   ├── types.ts                 # TypeScript interfaces for doctor, services & timings
│   ├── data/
│   │   └── clinicData.ts        # Clinic info, doctor profile, services, and schedules
│   └── components/
│       ├── Header.tsx           # Sticky topbar with emergency ticker & nav links
│       ├── HeroSection.tsx      # Main banner, headline, CTAs & doctor portrait
│       ├── AboutSection.tsx     # Clinic background, core values & credentials spotlight
│       ├── ServicesSection.tsx  # Grid of clinical services & diagnostics
│       ├── TimingsSection.tsx   # Weekly OPD schedule & department timings tabs
│       ├── LocationSection.tsx  # Address, directions, and map view
│       ├── AppointmentSection.tsx # Interactive patient booking form
│       ├── Footer.tsx           # Footer navigation, emergency advisory & copyright
│       ├── DoctorModal.tsx      # Detailed physician qualifications modal
│       ├── ServiceDetailModal.tsx # Full procedure breakdown modal
│       ├── BookingModal.tsx     # Quick popup booking form
│       └── MobileEmergencyBar.tsx # Sticky bottom navigation for mobile phones
```

---

## ⚙️ Customization

To update clinic contact details, doctor qualifications, or service offerings, simply edit `/src/data/clinicData.ts`:

- `CLINIC_INFO`: Update name, phone, WhatsApp link, and address.
- `LEAD_DOCTOR`: Update doctor name, degrees, specializations, and OPD hours.
- `SERVICES_LIST`: Add, remove, or modify clinical services and treatments.
- `SCHEDULE_DAYS`: Update weekly consultation hours and emergency days.

---

## 📄 License

This project is created for **Moiz Clinic**. All rights reserved.
