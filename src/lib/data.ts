import { Tour, Destination, Testimonial, TeamMember } from './types';

export const tours: Tour[] = [
  {
    id: 1,
    title: "Safari Adventure in Kenya",
    duration: 7,
    price: 1299,
    region: "Africa",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    category: "Wildlife",
    description: "Witness the Great Migration and explore the vast Maasai Mara on this unforgettable safari adventure."
  },
  {
    id: 2,
    title: "Machu Picchu Explorer",
    duration: 10,
    price: 1899,
    region: "South America",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80",
    category: "Adventure",
    description: "Trek through the Andes to discover the ancient Inca citadel high above the Sacred Valley."
  },
  {
    id: 3,
    title: "Northern Lights Iceland",
    duration: 5,
    price: 2199,
    region: "Europe",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&q=80",
    category: "Nature",
    description: "Chase the aurora borealis across Iceland's dramatic volcanic landscapes and geothermal wonders."
  },
  {
    id: 4,
    title: "Bali Cultural Journey",
    duration: 8,
    price: 999,
    region: "Asia",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
    category: "Cultural",
    description: "Immerse yourself in Bali's rich Hindu culture, stunning temples, terraced rice fields, and vibrant arts."
  },
  {
    id: 5,
    title: "Egyptian Pyramids Tour",
    duration: 6,
    price: 1499,
    region: "Africa",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80",
    category: "Historical",
    description: "Journey through 5,000 years of history, from the Great Pyramids of Giza to the temples of Luxor."
  },
  {
    id: 6,
    title: "Santorini Escape",
    duration: 7,
    price: 1799,
    region: "Europe",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
    category: "Beach",
    description: "Explore the iconic blue-domed churches, dramatic caldera views, and exquisite cuisine of Santorini."
  },
  {
    id: 7,
    title: "Amazon Rainforest Trek",
    duration: 9,
    price: 1599,
    region: "South America",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
    category: "Adventure",
    description: "Venture deep into the world's largest rainforest and discover incredible biodiversity and indigenous culture."
  },
  {
    id: 8,
    title: "Japan Cherry Blossom",
    duration: 12,
    price: 2499,
    region: "Asia",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
    category: "Cultural",
    description: "Experience Japan during sakura season — Tokyo, Kyoto, Osaka, and beyond in full spring bloom."
  },
  {
    id: 9,
    title: "Morocco Desert Safari",
    duration: 8,
    price: 1199,
    region: "Africa",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80",
    category: "Adventure",
    description: "Ride camels through the Sahara, sleep under the stars, and explore ancient medinas and riads."
  },
  {
    id: 10,
    title: "Patagonia Adventure",
    duration: 14,
    price: 2999,
    region: "South America",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    category: "Adventure",
    description: "Hike through Torres del Paine, witness glaciers, and experience the raw beauty of the world's end."
  },
  {
    id: 11,
    title: "Greek Islands Cruise",
    duration: 10,
    price: 2299,
    region: "Europe",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
    category: "Beach",
    description: "Sail through the Aegean, discovering Mykonos, Rhodes, Corfu, and hidden island gems."
  },
  {
    id: 12,
    title: "Thailand Beach Hopping",
    duration: 7,
    price: 899,
    region: "Asia",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80",
    category: "Beach",
    description: "Island-hop between Phuket, Koh Samui, and Koh Phi Phi — crystal waters, white sand, and Thai cuisine."
  }
];

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Africa",
    tourCount: 45,
    countries: ["Kenya", "Tanzania", "Egypt", "Morocco"],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    description: "From savanna safaris to ancient pyramids, Africa captivates with raw nature and rich history."
  },
  {
    id: 2,
    name: "Europe",
    tourCount: 38,
    countries: ["Greece", "Italy", "Iceland", "France"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
    description: "Timeless cities, stunning coastlines, and world-class cuisine across the diverse European continent."
  },
  {
    id: 3,
    name: "Asia",
    tourCount: 52,
    countries: ["Japan", "Bali", "Thailand", "Vietnam"],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
    description: "Ancient temples, vibrant street markets, tropical islands, and some of the world's best food."
  },
  {
    id: 4,
    name: "South America",
    tourCount: 29,
    countries: ["Peru", "Brazil", "Argentina", "Colombia"],
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80",
    description: "Majestic Andes, lush Amazon, Patagonian glaciers, and vibrant Latin culture await discovery."
  },
  {
    id: 5,
    name: "North America",
    tourCount: 22,
    countries: ["USA", "Canada", "Mexico"],
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80",
    description: "Iconic national parks, bustling cities, tropical beaches, and diverse landscapes to explore."
  },
  {
    id: 6,
    name: "Oceania",
    tourCount: 15,
    countries: ["Australia", "New Zealand"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    description: "Unique wildlife, dramatic fjords, pristine beaches, and the legendary Great Barrier Reef."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    review: "The Kenya safari was absolutely life-changing! Our guide was incredibly knowledgeable and we saw the Big Five on day one. Umbrella Tours handled every detail perfectly — I've already booked my next trip to Japan!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    tour: "Safari Adventure in Kenya"
  },
  {
    id: 2,
    name: "Mark Thompson",
    location: "London, UK",
    rating: 5,
    review: "Machu Picchu was on my bucket list for 20 years. Umbrella Tours made it happen flawlessly. The small group size meant personal attention, and the accommodations were far better than expected. Truly world-class service.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    tour: "Machu Picchu Explorer"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    review: "Bali with Umbrella Tours was perfection. They curated experiences that most tourists never get to see — private temple ceremonies, cooking with local families. The attention to detail was extraordinary.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    tour: "Bali Cultural Journey"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "James Odhiambo",
    role: "Founder & CEO",
    bio: "With 20 years in travel, James founded Umbrella Tours to share the world's wonders with adventurers everywhere.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  },
  {
    id: 2,
    name: "Elena Vasquez",
    role: "Head of Operations",
    bio: "Elena ensures every tour runs like clockwork, coordinating guides and partners across 50+ destinations.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
  },
  {
    id: 3,
    name: "Kenji Tanaka",
    role: "Senior Tour Guide",
    bio: "A certified guide fluent in 4 languages, Kenji specializes in Asia and has led 300+ tours across Japan and Southeast Asia.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80"
  },
  {
    id: 4,
    name: "Amara Diallo",
    role: "Africa Specialist",
    bio: "Born in Senegal, Amara brings unparalleled knowledge of African wildlife, culture, and hidden gems to every safari.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80"
  }
];
