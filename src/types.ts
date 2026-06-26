export type Locale = 'en' | 'hi';

export interface Product {
  id: string;
  nameEn: string;
  nameHi: string;
  category: 'tractors' | 'implements' | 'seeding' | 'harvesting';
  descriptionEn: string;
  descriptionHi: string;
  images: string[];
  specsEn: Record<string, string>;
  specsHi: Record<string, string>;
  featuresEn: string[];
  featuresHi: string[];
  priceRange: string;
  whatsAppMsg: string;
}

export interface Testimonial {
  id: string;
  nameEn: string;
  nameHi: string;
  locationEn: string;
  locationHi: string;
  textEn: string;
  textHi: string;
  rating: number;
  avatar: string;
  cropEn: string;
  cropHi: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  captionEn: string;
  captionHi: string;
}

export interface Milestone {
  year: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

export interface ConciergeInput {
  landSize: string; // in acres
  soilType: string;
  cropType: string;
  budget: string;
  powerAvailability: string;
  primaryChallenges: string;
}
