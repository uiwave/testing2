export interface TourItinerary {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  slug: string;
  destination: string;
  image: string;
  title: string;
  price: number;
  duration: string;
  popular: boolean;
  description?: string;
  difficulty?: string;
  images?: string[];
  itinerary?: TourItinerary[];
  includes?: string[];
  notIncludes?: string[];
}
