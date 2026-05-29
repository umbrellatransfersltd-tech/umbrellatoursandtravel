export interface Tour {
  id: number;
  title: string;
  duration: number; // days
  price: number;
  region: string;
  rating: number;
  image: string;
  category: string;
  description: string;
}

export interface Destination {
  id: number;
  name: string;
  toursCount: number;
  highlights: string[];
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  tour: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}
