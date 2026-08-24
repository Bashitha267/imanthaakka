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
  eventDate: string; // e.g. "August 24, 2026 15:00:00"
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
  eventDate: "August 24, 2026 15:00:00",
  eventDateName: "Save the Date",
  eventDate2: "August 26, 2026 18:00:00",
  eventDate2Name: "Homecoming & Reception",
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
    { time: "4:00 PM", title: "PORUWA CEREMONY", location: "Grand Kandyan Hall", description: "Traditional Poruwa rituals & blessings" },
    { time: "5:30 PM", title: "TRADITIONAL DANCING", location: "Grand Ballroom", description: "Drumming & celebratory performance" },
    { time: "7:00 PM", title: "DINNER RECEPTION", location: "Royal Pavilion", description: "Traditional Sri Lankan & International Buffet" },
    { time: "9:00 PM", title: "CELEBRATION", location: "Main Stage", description: "Music, toasts & celebration" }
  ],
  location: {
    name: "Grand Kandyan Hall",
    address: "Kandy, Sri Lanka",
    mapUrl: "https://maps.google.com/?q=Grand+Kandyan+Hotel+Kandy"
  },
  churchLocation: {
    name: "Secondary Venue",
    address: "Colombo, Sri Lanka",
    mapUrl: "https://maps.google.com/?q=Colombo+Sri+Lanka"
  },
  contact: {
    phone: "+94 77 123 4567",
    whatsapp: "+94771234567",
    email: "amaandmadhusanka@example.com"
  },
  rsvpDeadline: "August 10, 2026"
};

export default defaultWeddingData;
