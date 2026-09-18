import { Doctor, MedicalService, ClinicTiming } from '../types';

export const CLINIC_INFO = {
  name: 'Moiz Clinic',
  tagline: 'Medical Clinic & Family Care',
  subheading: 'Trusted Healthcare on Main Academy Road, Lahore Cantt',
  phone: '+92 323 4881738',
  phoneClean: '+923234881738',
  whatsappUrl: 'https://wa.me/923234881738',
  address: 'Main Academy Road, Lahore Cantt, Punjab, Pakistan',
  landmark: 'Main Academy Road, Lahore Cantt',
  googleMapsUrl: 'https://maps.google.com/?q=Main+Academy+Road,+Lahore+Cantt',
  images: {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgnBJ9II2qyGCeVaf90mCKYD-lu1yA0VeK8kHlStYVdED_zgU6piBSE_HXY53llCu69vr2q0Nyh9lFJE40bnjRF1yKrozBPuM5cqXOnTKCgAjXRMONlBPukAIqpCnMlmH6qBvEBsr10xVcXDcs2MlMKJJPIlKQgwir7ZlqQgaqK0f8ajK6J64ONTaFsefUv9kfW4A64CZi7LICjHsDeq1ooI43RVKhwSOfieVS1T-tkL2F0c0vGXvz',
    doctor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTUUOakTbpMqBAmqmm0Gv6T5Cp58-pEisvmnQ7pIySTKOw4i4NWCN9EWOhjklhLTYuS67szmNCFYYuz98TT0bLJs0UpS2dqovhXhjdBkcvx9nsEP6LMrA6OBMDgv9eDFIRKlzRkk_dk7plsTGbkGcWqrbF8NQ-EAI9jJd_FqOk9Go4KIFma-z1c7kJY3RBx8bj6OoH3HHLVHltiRgLdc9B47BgcfVY4gnTjxRGKg05PTm8vas4UcET',
    map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFNrbI-0MZTVVhYiasFZH40TjvDMMq_KUQH3PA4FioFHnFzXLJGFDE6CiunCVgotdgv6OCpxrx7pAPknOqsf9wwwpauZEYytx6oXAlXdV5qIrpq1kNb7uoCVNOFIU7Iyl7hkH9xKuySfb8VfknXyoUPuu4uR8Vo7y6KfAvssj7z-nf3MgCZNxR-WyR67NYb32ybiE-UrkRxP88DFYch2TddDg_TYpyWNjXErnJxgXagQ8q_6AyndbB',
  },
};

export const LEAD_DOCTOR: Doctor = {
  id: 'dr-moiz',
  name: 'Dr. Moiz',
  role: 'Consultant General Physician',
  title: 'Consultant General Physician & Medical Director',
  pmcNumber: 'PMC Registered',
  qualifications: [
    'M.B.B.S.',
    'Specialist in Family & General Medicine',
    'Certified in Emergency First Response & Trauma Care',
    'Preventive Healthcare & Chronic Disease Management',
  ],
  experience: '10+ Years Clinical Experience',
  specializations: [
    'Preventive & Family Healthcare',
    'Management of Hypertension & Diabetes',
    'Seasonal Infections, Flu & Pediatric Care',
    'Routine OPD Consultations & Health Screening',
    'Emergency First-Aid Stabilization',
  ],
  opdTimings: '09:00 AM - 02:00 PM & 06:00 PM - 10:00 PM',
  bio: 'Dr. Moiz is a dedicated General Physician providing compassionate, reliable healthcare for patients and families on Main Academy Road, Lahore Cantt. With extensive clinical experience, he focuses on attentive diagnostics, patient education, preventive lifestyle care, and timely treatment.',
  image: CLINIC_INFO.images.doctor,
};

export const SERVICES_LIST: MedicalService[] = [
  {
    id: 'general-physician',
    title: 'General Physician / OPD',
    icon: 'stethoscope',
    tag: 'Primary Care',
    badgeType: 'primary',
    description: 'Consultations for acute illnesses, chronic conditions, seasonal fever, flu, hypertension, diabetes, and complete family health checkups.',
    statusBadge: 'Daily Outpatient',
    statusText: 'Walk-in Ready',
    availability: '09:00 AM – 11:00 PM Daily',
    features: [
      'Comprehensive physical exams & diagnosis',
      'Blood pressure & glycemic health management',
      'Geriatric and pediatric routine consultations',
      'Prescription review and preventive counseling',
    ],
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    icon: 'vital_signs',
    tag: 'Urgent Response',
    badgeType: 'emergency',
    badgeText: '24/7 Care',
    description: 'Immediate triage, trauma care, oxygen support, wound dressing, and critical first-aid stabilization available 24/7.',
    statusBadge: 'Immediate Response',
    statusText: 'Emergency Unit',
    availability: 'Open 24 Hours / 7 Days a week',
    features: [
      'Continuous oxygen therapy & nebulization',
      'Acute trauma and wound care management',
      'Intravenous fluid administration & cannulation',
      'Rapid stabilization prior to hospital referral',
    ],
  },
  {
    id: 'minor-procedures',
    title: 'Minor Procedures',
    icon: 'medical_information',
    tag: 'Clinical Room',
    badgeType: 'secondary',
    description: 'Sterile outpatient minor surgical procedures, stitches/suturing, abscess drainage, burn management, and nebulization.',
    statusBadge: 'Sterile Procedure Room',
    statusText: 'Day Clinic',
    availability: '10:00 AM – 10:00 PM Daily',
    features: [
      'Laceration suturing & surgical wound dressings',
      'Incision and drainage of localized abscesses',
      'Foreign body removal (ear, nose, superficial skin)',
      'Sterile dressing changes & burn first care',
    ],
  },
  {
    id: 'lab-tests',
    title: 'Lab Tests',
    icon: 'chips',
    tag: 'Diagnostics',
    badgeType: 'primary',
    description: 'Essential diagnostic blood tests, urine analysis, blood sugar monitoring, rapid malaria/dengue screening, and sample collection.',
    statusBadge: 'Accurate Diagnostics',
    statusText: 'Fast Reports',
    availability: '08:00 AM – 10:00 PM Daily',
    features: [
      'Complete Blood Count (CBC) & ESR',
      'Blood Sugar Fasting / Random (Glucometer & Lab)',
      'Rapid NS1 Dengue & Typhoid / Malaria testing',
      'Urine Complete Examination & Kidney indicators',
    ],
  },
];

export const SCHEDULE_DAYS: ClinicTiming[] = [
  {
    days: 'Monday, Wednesday, Sunday',
    hours: 'Open 24 Hours',
    note: 'Round-the-clock emergency medical doctor on post with emergency triage team',
    is24Hours: true,
    type: 'emergency',
    icon: 'all_inclusive',
  },
  {
    days: 'Tuesday, Thursday, Saturday',
    hours: '10:00 AM – 12:00 AM (Midnight)',
    note: 'General OPD & evening trauma duty covering all routine and urgent care',
    is24Hours: false,
    type: 'regular',
    icon: 'routine',
  },
  {
    days: 'Friday',
    hours: '12:00 PM – 10:00 PM',
    note: 'Resumes immediately after Friday congregational prayers with dedicated doctors on duty',
    is24Hours: false,
    type: 'special',
    icon: 'wb_sunny',
  },
];

export const CLINICAL_DEPARTMENTS = [
  { name: 'Emergency Unit', timing: '24/7 Open', isLive: true },
  { name: 'General OPD', timing: '09:00 AM - 11:00 PM', isLive: false },
  { name: 'Gynecology Clinic', timing: '04:00 PM - 09:00 PM', isLive: false },
  { name: 'Pediatrics & Child Care', timing: '11:00 AM - 03:00 PM', isLive: false },
  { name: 'Diagnostic Laboratory', timing: '08:00 AM - 10:00 PM', isLive: false },
];
