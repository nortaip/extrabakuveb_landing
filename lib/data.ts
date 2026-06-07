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
    question: "How can I visit Extra Baku?",
    answer:
      "Extra Baku, the best night club in Baku, welcomes guests every night from 20:00 to 06:00. Simply come by — on weekends and special live music nights we recommend arriving early, as the largest nightclub in the Caucasus fills up fast.",
  },
  {
    id: "f2",
    question: "How do VIP tables work?",
    answer:
      "VIP tables and private lounges come with bottle service and a dedicated host. Message us on social media or speak to our team at the venue — capacity, minimum spend and package options are tailored to your group and the night you choose.",
  },
  {
    id: "f3",
    question: "Is there a dress code?",
    answer:
      "Yes. Extra Baku is a premium nightlife destination, so we recommend stylish, elegant attire. Smart and fashionable dress is expected; sportswear and beachwear are not permitted in the club and VIP lounge areas.",
  },
  {
    id: "f4",
    question: "What are your opening hours?",
    answer:
      "Extra Baku is open every day from 20:00 until 06:00. Doors and peak hours vary by night, with live DJs and live music keeping the energy going until the early morning.",
  },
  {
    id: "f5",
    question: "Where is Extra Baku located?",
    answer:
      "Extra Baku is located in the heart of Baku, Azerbaijan (Plus Code CV57+44R, Baku). It is the largest premium nightclub in the Caucasus and is easily reachable from the city centre, with valet parking available.",
  },
  {
    id: "f6",
    question: "Can I host a private event or celebration?",
    answer:
      "Absolutely. We host private celebrations, birthday parties and exclusive gatherings with custom décor, dedicated service, bespoke cocktail menus and full or partial venue buyouts. Our event team will craft every detail around your vision.",
  },
  {
    id: "f7",
    question: "Do you organise corporate events?",
    answer:
      "Yes. Extra Baku is a premier corporate event venue in Baku, offering gala dinners, product launches, team celebrations and exclusive bookings with full AV production, premium catering and a dedicated event manager.",
  },
  {
    id: "f8",
    question: "When are your live music and DJ nights?",
    answer:
      "Resident and guest DJs perform throughout the week, with special live music and headline events on weekends. Follow us on social media for the latest line-ups, themed nights and exclusive performances.",
  },
  {
    id: "f9",
    question: "Is there a minimum age to enter?",
    answer:
      "Extra Baku is an adults-only nightlife venue. Guests must be 18 or older and may be asked to present valid photo ID at the entrance.",
  },
  {
    id: "f10",
    question: "Do you offer bottle service and premium cocktails?",
    answer:
      "Yes. Our lounge bar serves signature cocktails crafted by award-winning mixologists, premium spirits and full bottle service at VIP tables. Explore the full drinks menu or ask your host for recommendations.",
  },
  {
    id: "f11",
    question: "Is parking available?",
    answer:
      "Complimentary secure valet and self-parking are available for guests directly at the venue, so you can arrive and leave with ease.",
  },
  {
    id: "f12",
    question: "What makes Extra Baku the best nightclub in Baku?",
    answer:
      "Extra Baku combines the largest premium nightclub space in the Caucasus with world-class sound and lighting, VIP lounges, signature cocktails, live DJs and an unmatched atmosphere — delivering a luxury nightlife experience found nowhere else in Azerbaijan.",
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

/** SEO-rich alternating content blocks positioning Extra Baku as a nightclub. */
export type ContentBlock = {
  id: string;
  eyebrow: string;
  title: string;
  highlight: string;
  paragraphs: string[];
  image: string;
  cta: { label: string; href: string; external?: boolean };
  accent: "gold" | "royal" | "neon";
};

export const contentBlocks: ContentBlock[] = [
  {
    id: "nightlife",
    eyebrow: "Nightlife in Baku",
    title: "The ultimate nightlife",
    highlight: "experience in Baku",
    paragraphs: [
      "Extra Baku is the beating heart of nightlife in Baku — the largest premium nightclub in the Caucasus and the definitive luxury club experience in Azerbaijan. From the first beat to the last, every night is engineered for energy, glamour and unforgettable moments.",
      "With world-class sound, cinematic lighting and a crowd that defines the best nightlife in Baku, Extra Baku turns an ordinary evening into a headline night. This is the premium nightlife destination locals love and visitors travel for.",
    ],
    image: clubImages.laserCrowd,
    cta: { label: "View Gallery", href: "#gallery" },
    accent: "royal",
  },
  {
    id: "vip",
    eyebrow: "VIP Lounge & Service",
    title: "VIP lounges &",
    highlight: "premium service",
    paragraphs: [
      "Step into a VIP lounge in Baku reserved for those who expect more. Our exclusive club tables come with bottle service, a dedicated host and the best views of the main floor — the luxury entertainment Baku is known for.",
      "Whether you're celebrating with friends or hosting a private group, our VIP service blends discretion, premium spirits and impeccable hospitality for a truly exclusive night.",
    ],
    image: clubImages.bar,
    cta: {
      label: "View the Menu",
      href: "https://senategroup.az/menu/menu.pdf",
      external: true,
    },
    accent: "gold",
  },
  {
    id: "music",
    eyebrow: "Live DJs & Music",
    title: "Live DJs &",
    highlight: "music events",
    paragraphs: [
      "Extra Baku is the home of live DJs in Baku and the city's most electric live music nights. Resident and international guest artists deliver sets that keep the floor moving until 06:00, backed by a sound system built for impact.",
      "From signature club nights to exclusive headline events, this is where premium nightlife and live entertainment in Baku come together.",
    ],
    image: clubImages.showcase,
    cta: { label: "Explore Events", href: "#events" },
    accent: "neon",
  },
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
  { label: "Nightlife", href: "#nightlife" },
  { label: "Gallery", href: "#gallery" },
  { label: "Menu", href: menuUrl, external: true },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: "Extra Baku Club",
  address: "CV57+44R, Baku",
  hours: [{ day: "Every Day", time: "20:00 — 06:00" }],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/extrabaku" },
    { label: "TikTok", href: "https://www.tiktok.com/@extrabaku?lang=en" },
    { label: "YouTube", href: "https://www.youtube.com/@extrabaku" },
  ],
};
