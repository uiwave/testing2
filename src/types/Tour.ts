export interface ItineraryItem {
  time?: string;
  title: string;
  description?: string;
}

export interface TourItinerary {
  day: number;
  title: string;
  description: string;
  activities?: ItineraryItem[];
}

export interface Tour {
  slug: string;
  destination: string;
  image: string;
  title: string;
  price: number;
  type: string;
  duration: string;
  popular: boolean;
  description?: string;
  images?: string[];
  itinerary?: TourItinerary[];
  includes?: string[];
  notIncludes?: string[];
  recommendations?: string[];
  additional?: string[];
}
