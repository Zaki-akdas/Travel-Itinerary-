import type { LucideIcon } from 'lucide-react';
import {
  MapPin,
  Clock,
  Users,
  Compass,
  Bus,
  TrainFront,
  BedDouble,
  UtensilsCrossed,
  Ticket,
  Droplets,
  HardHat,
  BriefcaseMedical,
  UserCog,
  Hotel,
  CalendarClock,
  KeyRound,
  BadgeCheck,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

export interface Highlight {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const highlights: Highlight[] = [
  { icon: MapPin, label: 'Departure', value: 'Chhindwara' },
  { icon: Clock, label: 'Duration', value: '3 Nights / 4 Days' },
  { icon: Users, label: 'Group Size', value: '45 Students + 5 Teachers' },
  { icon: Compass, label: 'Tour Type', value: 'Educational & Leisure' },
];

export interface TransportStep {
  icon: LucideIcon;
  mode: string;
  route: string;
  detail: string;
}

export const transportSteps: TransportStep[] = [
  {
    icon: Bus,
    mode: 'Bus',
    route: 'Chhindwara → Nagpur',
    detail: 'Private bus transfer to Nagpur railway station.',
  },
  {
    icon: TrainFront,
    mode: 'Train',
    route: 'Nagpur → Jaipur',
    detail: 'MAS JP SF EXP — Sleeper Class with concession.',
  },
  {
    icon: TrainFront,
    mode: 'Train',
    route: 'Jaipur → Nagpur',
    detail: 'JU PURI SF EXP — Return overnight journey.',
  },
  {
    icon: Bus,
    mode: 'Bus',
    route: 'Nagpur → Chhindwara',
    detail: 'Private bus transfer back home.',
  },
];

export interface ItineraryDay {
  day: string;
  title: string;
  image: string;
  items: { time: string; text: string }[];
}

export const itinerary: ItineraryDay[] = [
  {
    day: 'Day 1',
    title: 'Departure & Overnight Journey',
    image: '/images/train.jpg',
    items: [
      { time: 'Afternoon', text: 'Board private bus at Chhindwara. Depart for Nagpur railway station.' },
      { time: 'Evening', text: 'Enjoy a packed lunch on the way and board the MAS JP SF EXP at Nagpur.' },
      { time: 'Night', text: 'Train dinner served. Settle in for an overnight journey toward Jaipur.' },
    ],
  },
  {
    day: 'Day 2',
    title: 'Arrival, Museums & Markets',
    image: '/images/albert-hall.jpg',
    items: [
      { time: 'Morning', text: 'Arrive Jaipur. Transfer to 3-star hotel, freshen up and check-in (quad sharing).' },
      { time: 'Late Morning', text: 'Visit Albert Hall Museum — Rajasthan\'s oldest museum with rich artefacts.' },
      { time: 'Afternoon', text: 'Buffet veg lunch, then visit the serene Birla Temple.' },
      { time: 'Evening', text: 'Shopping at Bapu Bazar — handicrafts, mojris, block-print textiles.' },
    ],
  },
  {
    day: 'Day 3',
    title: 'Forts, Palaces & Departure',
    image: '/images/amer-fort.jpg',
    items: [
      { time: 'Morning', text: 'Visit the magnificent Amer Fort — hilltop citadel with mirror palace.' },
      { time: 'Late Morning', text: 'Explore City Palace — royal residence and museum complex.' },
      { time: 'Afternoon', text: 'Discover Jantar Mantar — UNESCO astronomical observatory.' },
      { time: 'Late Afternoon', text: 'Photo stop at the iconic Hawa Mahal (Palace of Winds).' },
      { time: 'Evening', text: 'Board JU PURI SF EXP for overnight return to Nagpur.' },
    ],
  },
  {
    day: 'Day 4',
    title: 'Arrival & Tour Conclusion',
    image: '/images/city-palace.jpg',
    items: [
      { time: 'Morning', text: 'Arrive Nagpur railway station. Disembark and board private bus.' },
      { time: 'Midday', text: 'Bus transfer Nagpur → Chhindwara with packed breakfast.' },
      { time: 'Afternoon', text: 'Arrive Chhindwara. Tour concludes with unforgettable memories.' },
    ],
  },
];

export interface Inclusion {
  icon: LucideIcon;
  text: string;
}

export const inclusions: Inclusion[] = [
  { icon: Bus, text: 'Private bus transfers (Chhindwara ↔ Nagpur)' },
  { icon: TrainFront, text: 'Train tickets — Sleeper Class with concession' },
  { icon: BedDouble, text: '1 Night 3-Star Hotel (Quad sharing)' },
  { icon: UtensilsCrossed, text: 'Buffet meals (Veg only)' },
  { icon: Ticket, text: 'Entry tickets — Amer Fort, City Palace, Jantar Mantar, Albert Hall' },
  { icon: Droplets, text: 'Mineral water bottles' },
  { icon: HardHat, text: 'Caps & bag tags for all students' },
  { icon: BriefcaseMedical, text: 'First aid kit & tour manager' },
];

export const exclusions: string[] = [
  'GST 5% (applicable on total package)',
  'Personal expenses — laundry, phone calls, shopping beyond budget',
  'Porter charges at stations and hotels',
  'Tips for drivers and hotel staff',
  'Upgraded food / beverages not in itinerary',
];

export interface Note {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const notes: Note[] = [
  { icon: Hotel, title: 'Hotel Timings', text: 'Standard check-in 12:00 PM and check-out 10:00 AM. Early check-in / late check-out subject to availability.' },
  { icon: CalendarClock, title: 'Schedule Flexibility', text: 'Itinerary is indicative. Paryatan Holidays reserves the right to modify the schedule due to weather, traffic, or operational reasons.' },
  { icon: KeyRound, title: 'Room Allocation', text: 'Rooms allotted on quad-sharing basis. Any change in rooming list must be requested 7 days prior to departure.' },
  { icon: BadgeCheck, title: 'Student ID Required', text: 'Every student must carry a valid school ID card for concession tickets and monument entries.' },
];

export interface Contact {
  role: string;
  name: string;
  phone?: string;
}

export const contacts: Contact[] = [
  { role: 'Tour Manager', name: 'Purushottam' },
  { role: 'Tour Manager', name: 'Sunil' },
  { role: 'Tour Manager', name: 'Kunal' },
  { role: 'Tour Manager', name: 'Sanjeev' },
  { role: 'Tour Manager', name: 'Abhijeet' },
  { role: 'Operations', name: 'Zaki', phone: '+91 8982382828' },
  { role: '24x7 Helpline', name: 'Paryatan Holidays', phone: '+91 9039033571' },
];

export const bookingInfo = [
  { icon: Phone, label: 'Call', value: '+91 9039033571', href: 'tel:+919039033571' },
  { icon: Mail, label: 'Email', value: 'info@paryatanholidays.com', href: 'mailto:info@paryatanholidays.com' },
  { icon: Globe, label: 'Website', value: 'www.paryatanholidays.com', href: 'https://www.paryatanholidays.com' },
];

export const tourManagers = ['Purushottam', 'Sunil', 'Kunal', 'Sanjeev', 'Abhijeet'];

export { UserCog };
