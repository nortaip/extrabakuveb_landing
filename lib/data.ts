/**
 * Centralised content for the Extra Baku Club landing page.
 * Keeping copy + structured data here makes the section components
 * presentational and easy to maintain / localise.
 */

export type Experience = {
  id: string;
  icon: string;
  title: string;
  description: string;
  accent: "gold" | "royal" | "neon";
};

export const experiences: Experience[] = [
  {
    id: "billiards",
    icon: "🎱",
    title: "Billiards",
    description:
      "Tournament-grade tables under cinematic lighting — pure precision and prestige.",
    accent: "gold",
  },
  {
    id: "arcade",
    icon: "🎮",
    title: "Arcade Games",
    description:
      "150+ next-gen machines and immersive simulators for every generation.",
    accent: "neon",
  },
  {
    id: "karaoke",
    icon: "🎤",
    title: "Karaoke",
    description:
      "Private soundproof suites with studio acoustics and 50K+ track library.",
    accent: "royal",
  },
  {
    id: "restaurant",
    icon: "🍽",
    title: "Restaurant",
    description:
      "Signature cuisine crafted by award-winning chefs in a refined setting.",
    accent: "gold",
  },
  {
    id: "lounge",
    icon: "🍸",
    title: "Lounge Bar",
    description:
      "Master mixologists, rare spirits and a skyline of golden ambiance.",
    accent: "neon",
  },
  {
    id: "events",
    icon: "🎉",
    title: "Events",
    description:
      "Bespoke celebrations engineered for unforgettable, headline nights.",
    accent: "royal",
  },
  {
    id: "live-music",
    icon: "🎵",
    title: "Live Music",
    description:
      "Resident DJs and live acts that keep the energy electric until dawn.",
    accent: "gold",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 32, suffix: "", label: "Bowling Lanes" },
  { value: 25, suffix: "K+", label: "Guests Monthly" },
  { value: 12, suffix: "", label: "Premium Zones" },
  { value: 300, suffix: "+", label: "Corporate Events / Year" },
];

export type EventCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
};

export const eventCards: EventCard[] = [
  {
    id: "birthday",
    title: "Birthday Parties",
    description:
      "Show-stopping birthday productions with custom décor, cake and entertainment.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    tag: "Celebrate",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Conferences, team-building and gala dinners with full AV production.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    tag: "Business",
  },
  {
    id: "family",
    title: "Family Entertainment",
    description:
      "A universe of fun for all ages — bowling, arcade, dining and more.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    tag: "Together",
  },
  {
    id: "private",
    title: "Private Celebrations",
    description:
      "Exclusive VIP suites and full-venue buyouts for your inner circle.",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    tag: "Exclusive",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Leyla Mammadova",
    role: "Event Planner",
    rating: 5,
    quote:
      "Extra Baku redefined what a night out means in the city. The detail, the lighting, the service — flawless.",
    initials: "LM",
  },
  {
    id: "t2",
    name: "Rashad Aliyev",
    role: "Entrepreneur",
    rating: 5,
    quote:
      "Hosted our company gala here. The team turned a corporate event into a cinematic experience.",
    initials: "RA",
  },
  {
    id: "t3",
    name: "Nigar Huseynova",
    role: "Influencer",
    rating: 5,
    quote:
      "Every corner is a photo. The lounge bar cocktails are unreal and the energy is electric.",
    initials: "NH",
  },
  {
    id: "t4",
    name: "Emin Qasimov",
    role: "Family Visitor",
    rating: 5,
    quote:
      "Brought the whole family — bowling, arcade, dinner. Everyone left smiling. World-class venue.",
    initials: "EQ",
  },
  {
    id: "t5",
    name: "Aysel Karimova",
    role: "Birthday Host",
    rating: 5,
    quote:
      "My birthday felt like a private festival. The staff anticipated everything before I asked.",
    initials: "AK",
  },
  {
    id: "t6",
    name: "Tural Bayramov",
    role: "DJ / Artist",
    rating: 5,
    quote:
      "Best sound system and crowd in Baku. Performing here is always a highlight of my tour.",
    initials: "TB",
  },
];

export type VenueZone = {
  id: string;
  name: string;
  description: string;
  // position on the abstract map, in %
  x: number;
  y: number;
  accent: "gold" | "royal" | "neon";
};

export const venueZones: VenueZone[] = [
  {
    id: "bowling",
    name: "Bowling Arena",
    description: "32 pro lanes with LED lighting & lounge seating.",
    x: 22,
    y: 30,
    accent: "neon",
  },
  {
    id: "lounge",
    name: "Sky Lounge Bar",
    description: "Premium cocktails with a golden city ambiance.",
    x: 70,
    y: 24,
    accent: "gold",
  },
  {
    id: "arcade",
    name: "Arcade Zone",
    description: "150+ next-gen games & VR simulators.",
    x: 40,
    y: 60,
    accent: "royal",
  },
  {
    id: "restaurant",
    name: "Signature Restaurant",
    description: "Fine dining crafted by award-winning chefs.",
    x: 78,
    y: 66,
    accent: "gold",
  },
  {
    id: "stage",
    name: "Main Stage",
    description: "Live music, DJ residencies & headline events.",
    x: 50,
    y: 84,
    accent: "neon",
  },
];

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "f1",
    question: "What are the opening hours of Extra Baku Club?",
    answer:
      "We are open daily from 12:00 PM until 03:00 AM. Weekend nights (Friday & Saturday) often run later for special events and live performances.",
  },
  {
    id: "f2",
    question: "Do I need a reservation?",
    answer:
      "Walk-ins are welcome, but reservations are strongly recommended for bowling lanes, karaoke suites, dining and VIP areas — especially on weekends.",
  },
  {
    id: "f3",
    question: "Is Extra Baku family-friendly?",
    answer:
      "Absolutely. Daytime hours are perfect for families with bowling, arcade and dining. Evening hours transition into a premium nightlife atmosphere.",
  },
  {
    id: "f4",
    question: "Can I host a corporate or private event?",
    answer:
      "Yes. We offer fully customisable packages for corporate events, birthdays and private celebrations — including full-venue buyouts and dedicated event managers.",
  },
  {
    id: "f5",
    question: "Is there a dress code?",
    answer:
      "Smart-casual is recommended. For VIP lounge and evening events we encourage elegant attire to match the venue's premium atmosphere.",
  },
  {
    id: "f6",
    question: "Do you offer parking?",
    answer:
      "Complimentary secure valet and self-parking are available for all guests directly at the venue.",
  },
];

export const galleryImages: string[] = [
  "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80",
];

export const instagramPosts: string[] = [
  "https://images.unsplash.com/photo-1571266028243-d220c9c3b31e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581974944026-5d6ed762f617?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1578736641330-3155e606cd40?auto=format&fit=crop&w=600&q=80",
];

export const navLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

export const siteConfig = {
  name: "Extra Baku Club",
  phone: "+994 12 555 00 99",
  email: "reservations@extrabaku.az",
  address: "28 Mall District, Baku, Azerbaijan",
  hours: [
    { day: "Mon – Thu", time: "12:00 — 02:00" },
    { day: "Fri – Sat", time: "12:00 — 03:00" },
    { day: "Sunday", time: "12:00 — 01:00" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
