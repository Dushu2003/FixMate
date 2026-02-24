export interface Profession {
  id: number;
  title: string;
  icon: string;
  bgColor: string;
}

export const professionsData: Profession[] = [
  {
    id: 1,
    title: 'Tailor',
    icon: 'sewing-machine',
    bgColor: '#CFE0F5',
  },
  {
    id: 2,
    title: 'Electrician',
    icon: 'lightning-bolt',
    bgColor: '#FFE4B5',
  },
  {
    id: 3,
    title: 'Plumber',
    icon: 'pipe-wrench',
    bgColor: '#D4F5D0',
  },
  {
    id: 4,
    title: 'Cleaner',
    icon: 'broom',
    bgColor: '#F5D0E6',
  },
  {
    id: 5,
    title: 'Painter',
    icon: 'brush',
    bgColor: '#E0D4F5',
  },
  {
    id: 6,
    title: 'Carpenter',
    icon: 'hammer',
    bgColor: '#F5E4D0',
  },
  {
    id: 7,
    title: 'Mechanic',
    icon: 'car-wrench',
    bgColor: '#D0EAF5',
  },
  {
    id: 8,
    title: 'AC Repair',
    icon: 'air-conditioner',
    bgColor: '#D0F5F2',
  },
  {
    id: 9,
    title: 'Gardener',
    icon: 'flower',
    bgColor: '#E6F5D0',
  },
];