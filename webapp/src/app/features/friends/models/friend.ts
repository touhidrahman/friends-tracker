export interface Friend {
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
  gender: 'male' | 'female';
  jobTitle: string;
  company: string;
  location: { lat: number; lng: number };
}
