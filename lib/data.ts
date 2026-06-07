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
  href: string;
};

export const experiences: Experience[] = [
  {
    id: "billiards",
    icon: "🎱",
    title: "Billiards",
    description:
      "Tournament-grade tables under cinematic lighting — pure precision and prestige.",
    accent: "gold",
    href: "#gallery",
  },
  {
    id: "lounge",
    icon: "🍸",
    title: "Lounge Bar",
    description:
      "Master mixologists, rare spirits and a skyline of golden ambiance.",
    accent: "neon",
    href: "#gallery",
  },
  {
    id: "events",
    icon: "🎉",
    title: "Events",
    description:
      "Bespoke celebrations engineered for unforgettable, headline nights.",
    accent: "royal",
    href: "#events",
  },
  {
    id: "live-music",
    icon: "🎵",
    title: "Live Music",
    description:
      "Resident DJs and live acts that keep the energy electric until dawn.",
    accent: "gold",
    href: "#events",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 60, suffix: "K+", label: "Guests Monthly" },
  { value: 50, suffix: "+", label: "Premium Zones" },
  { value: 300, suffix: "+", label: "Events / Year" },
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
    image: "/club/club-1.png",
    tag: "Celebrate",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description:
      "Conferences, team-building and gala dinners with full AV production.",
    image: "/club/club-4.jpg",
    tag: "Business",
  },
  {
    id: "family",
    title: "Entertainment",
    description:
      "A universe of music, dining and electric energy across every premium zone.",
    image: "/club/club-5.jpg",
    tag: "Together",
  },
  {
    id: "private",
    title: "Private Celebrations",
    description:
      "Exclusive VIP suites and full-venue buyouts for your inner circle.",
    image: "/club/club-3.png",
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
    role: "Regular Guest",
    rating: 5,
    quote:
      "The production, the music, the crowd — nothing in the region comes close. World-class nightclub.",
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

/**
 * Real Extra Baku club photos.
 * Place the matching files in `public/club/` (see public/club/README.md).
 */
export const clubImages = {
  hero: "/club/club-1.png",
  showcase: "/club/club-2.png",
  laserCrowd: "/club/club-3.png",
  bar: "/club/club-4.jpg",
  lounge: "/club/club-5.jpg",
  vip: "/club/club-6.jpg",
} as const;

export const galleryImages: string[] = [
  clubImages.hero,
  clubImages.showcase,
  clubImages.laserCrowd,
  clubImages.bar,
  clubImages.lounge,
  clubImages.vip,
];

export const instagramPosts: string[] = [
  clubImages.hero,
  clubImages.showcase,
  clubImages.laserCrowd,
  clubImages.bar,
  clubImages.lounge,
  clubImages.vip,
];

/** Full drinks & food menu (opens the Senate Group PDF). */
export const menuUrl = "https://senategroup.az/menu/menu.pdf";

export type Cocktail = {
  id: string;
  name: string;
  accent: "gold" | "royal" | "neon";
};

export const cocktails: Cocktail[] = [
  { id: "b52", name: "B-52", accent: "gold" },
  { id: "blue-lagoon", name: "Blue Lagoon", accent: "neon" },
  { id: "cosmopolitan", name: "Cosmopolitan", accent: "royal" },
  { id: "cuba-libre", name: "Cuba Libre", accent: "gold" },
  { id: "long-island", name: "Long Island Ice Tea", accent: "neon" },
  { id: "margarita", name: "Margarita", accent: "royal" },
  { id: "mojito", name: "Mojito", accent: "gold" },
  { id: "negroni", name: "Negroni", accent: "neon" },
  { id: "pina-colada", name: "Piña Colada", accent: "royal" },
  { id: "sex-on-the-beach", name: "Sex on the Beach", accent: "gold" },
  { id: "white-russian", name: "White Russian", accent: "neon" },
  { id: "black-russian", name: "Black Russian", accent: "royal" },
];

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Menu", href: menuUrl, external: true },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Extra Baku Club",
  address: "CV57+44R, Baku",
  hours: [{ day: "Every Day", time: "20:00 — 06:00" }],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
