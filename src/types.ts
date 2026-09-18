export interface Doctor {
  id: string;
  name: string;
  role: string;
  title: string;
  pmcNumber: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  opdTimings: string;
  bio: string;
  image: string;
}

export interface MedicalService {
  id: string;
  title: string;
  icon: string;
  tag: string;
  badgeType: 'emergency' | 'standard' | 'primary' | 'secondary';
  badgeText?: string;
  description: string;
  statusBadge: string;
  statusText: string;
  features: string[];
  availability: string;
}

export interface ClinicTiming {
  days: string;
  hours: string;
  note: string;
  is24Hours: boolean;
  type: 'emergency' | 'regular' | 'special';
  icon: string;
}

export interface AppointmentInquiry {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
}
