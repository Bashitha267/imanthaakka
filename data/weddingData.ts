export interface TimelineEvent {
  time: string;
  title: string;
  location: string;
  description?: string;
}

export interface VenueLocation {
  name: string;
  address: string;
  mapUrl?: string;
}

export interface WeddingData {
  groomName: string;
  brideName: string;
  weddingTitle: string;
  subTitle: string;
  quote: string;
  invitationMessage: string;
  eventDate: string; // e.g. "2026-08-24T15:00:00"
  eventDateName?: string;
  eventDate2?: string;
  eventDate2Name?: string;
  musicUrl: string;
  videoUrl: string;
  coverImage: string;
  images: {
    heroImage: string;
    image1: string;
    image2: string;
    image3: string;
    thankYouImage: string;
    gallery?: string[];
  };
  timeline: TimelineEvent[];
  location: VenueLocation;
  churchLocation?: VenueLocation;
  dressCode?: {
    theme: string;
    description: string;
    palette?: string[];
  };
  contact?: {
    phone?: string;
    whatsapp?: string;
    email?: string;
  };
  rsvpDeadline?: string;
}

export const defaultWeddingData: WeddingData = {
  groomName: "Ama",
  brideName: "Madhusanka",
  weddingTitle: "WEDDING",
  subTitle: "WE ARE GETTING MARRIED",
  quote: "Love is composed of a single soul inhabiting two bodies.",
  invitationMessage: "We invite you to share in our joy as we begin our forever.",
  eventDate: "2026-08-24T15:00:00",
  eventDateName: "Save the Date",
  eventDate2: "2026-08-26T18:00:00",
  eventDate2Name: "Homecoming & Reception",
  musicUrl: "https://res.cloudinary.com/dnfbik3if/video/upload/v1775201422/krasnoshchok-wedding-romantic-love-music-409293_ikekwk.mp3",
  videoUrl: "/weddingwalk.mp4",
  coverImage: "/weddingwalk.jpg",
  images: {
    heroImage: "/wedding_hero_image_1775197041013.png",
    image1: "/photo_2.png",
    image2: "/photo_3.png",
    image3: "/photo_4.png",
    thankYouImage: "/photo_5.png",
    gallery: [
      "/wedding_hero_image_1775197041013.png",
      "/photo_2.png",
      "/photo_3.png",
      "/photo_4.png",
      "/photo_5.png"
    ]
  },
  timeline: [
    { time: "4:00 PM", title: "CEREMONY", location: "Grand Tent", description: "Exchange of vows and rings" },
    { time: "5:30 PM", title: "COCKTAILS", location: "Garden Lounge", description: "Sunset refreshments & live acoustic music" },
    { time: "7:00 PM", title: "DINNER", location: "Royal Pavilion", description: "Gourmet banquet & toasts" },
    { time: "9:00 PM", title: "CELEBRATION", location: "Main Stage", description: "First dance, cake cutting & party" }
  ],
  location: {
    name: "The Grand Venue",
    address: "123 Dream Avenue, Celebration City",
    mapUrl: "https://maps.google.com/?q=The+Grand+Venue"
  },
  churchLocation: {
    name: "St. Mary Cathedral",
    address: "456 Sacred Grove, Colombo",
    mapUrl: "https://maps.google.com/?q=St+Mary+Cathedral"
  },
  dressCode: {
    theme: "Black Tie & Elegant Pastel",
    description: "Formal wedding attire with soft gold, champagne, and blush accents."
  },
  contact: {
    phone: "+94 77 123 4567",
    whatsapp: "+94771234567",
    email: "amaandmadhusanka@example.com"
  },
  rsvpDeadline: "August 10, 2026"
};

export default defaultWeddingData;
