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
  eventDate: string; // e.g. "October 2, 2026 09:00:00"
  eventDateFormatted?: string; // "October 2, 2026"
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
  weddingTitle: "THE PORUWA CEREMONY OF",
  subTitle: "AYUBOWAN",
  quote: "May your union be blessed with the wisdom of the elders and the fragrance of jasmine.",
  invitationMessage: "Join us as we unite under the traditional Poruwa.",
  eventDate: "October 2, 2026 09:00:00",
  eventDateFormatted: "October 2, 2026",
  eventDateName: "Save the Date",
  musicUrl: "https://res.cloudinary.com/dnfbik3if/video/upload/v1775201422/krasnoshchok-wedding-romantic-love-music-409293_ikekwk.mp3",
  videoUrl: "/poruwanw.mp4",
  coverImage: "/templates/poruwaneww.jpeg",
  images: {
    heroImage: "/templates/poruwaneww.jpeg",
    image1: "/photo_2.png",
    image2: "/photo_3.png",
    image3: "/photo_4.png",
    thankYouImage: "/photo_5.png",
    gallery: [
      "/photo_2.png",
      "/photo_3.png",
      "/photo_4.png",
      "/photo_5.png"
    ]
  },
  timeline: [
    { time: "9:00 AM", title: "GUEST ARRIVAL", location: "The Heritage Hotel", description: "Welcome refreshments & gathering" },
    { time: "9:58 AM", title: "PORUWA CEREMONY", location: "Grand Ballroom", description: "Auspicious Poruwa Rituals & Blessings" },
    { time: "11:30 AM", title: "TRADITIONAL DANCING & TOASTS", location: "Grand Ballroom", description: "Celebratory performances" },
    { time: "12:30 PM", title: "LUNCH BUFFET", location: "Heritage Dining Hall", description: "Gourmet banquet & treats" },
    { time: "2:30 PM", title: "CELEBRATION", location: "Garden Pavilion", description: "Music, photos & farewell" }
  ],
  location: {
    name: "The Heritage Hotel",
    address: "Anuradhapura, Sri Lanka",
    mapUrl: "https://maps.google.com/?q=The+Heritage+Hotel+Anuradhapura"
  },
  contact: {
    phone: "+94 77 123 4567",
    whatsapp: "+94771234567",
    email: "amaandmadhusanka@example.com"
  },
  rsvpDeadline: "September 20, 2026"
};

export default defaultWeddingData;
