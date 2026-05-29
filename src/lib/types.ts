export interface Tour {
  id: number;
  title: string;
  duration: number;
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
  tourCount: number;
  countries: string[];
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
