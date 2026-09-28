export const CATEGORIES = {
  Adults: { bg: "#E7ECEE", ink: "#5E7480" },
  "Little House": { bg: "#E7EDDF", ink: "#6F8C52" },
  Preschool: { bg: "#F3E4E1", ink: "#A26F66" },
  Kinder: { bg: "#F0E4EA", ink: "#946A7E" },
  Minis: { bg: "#E8E6F1", ink: "#736B96" },
  Performance: { bg: "#F4EBD2", ink: "#9C7F33" },
  Family: { bg: "#E3ECE9", ink: "#5A7B72" },
} as const;

export type Category = keyof typeof CATEGORIES;
export type ClassSlot = { time: string; title: string; sub: string; cat: Category };

const S = (time: string, title: string, sub: string, cat: Category): ClassSlot => ({
  time,
  title,
  sub,
  cat,
});

/**
 * Weekly schedule, index matches Date#getDay().
 * Transcribed from the client's schedule screenshot — needs client confirmation.
 * Note: Sunday lists classes but posted hours say Sunday is closed.
 */
export const WEEK: { day: string; classes: ClassSlot[] }[] = [
  {
    day: "Sunday",
    classes: [
      S("9:00–10:00 AM", "Strength & Fitness", "Adults", "Adults"),
      S("10:30–11:30 AM", "Technique Lab", "Youth technique", "Performance"),
      S("3:30–4:30 PM", "Family Yoga", "Families", "Family"),
    ],
  },
  {
    day: "Monday",
    classes: [
      S("9:00–10:00 AM", "Mat Pilates", "Adults", "Adults"),
      S("10:30–11:30 AM", "Mid Day Magic", "Toddler play + creativity", "Little House"),
      S("12:15–1:15 PM", "Strength & Fitness", "Adults", "Adults"),
      S("3:15–4:15 PM", "Ballet / Acro", "Preschool · ages 3–4", "Preschool"),
      S("4:30–5:45 PM", "Ballet / Acro", "Kinder · ages 5–6", "Kinder"),
    ],
  },
  {
    day: "Tuesday",
    classes: [
      S("9:00–10:00 AM", "Strength & Fitness", "Adults", "Adults"),
      S("10:30–11:15 AM", "Baby Ballet", "Caregiver + Me", "Little House"),
      S("12:15–1:15 PM", "Yoga & Barre", "Adults", "Adults"),
      S("3:30–4:45 PM", "Ballet / Acro", "Minis · ages 7–10", "Minis"),
    ],
  },
  {
    day: "Wednesday",
    classes: [
      S("9:00–10:00 AM", "Contemporary / Jazz", "Adults", "Adults"),
      S("11:00–11:45 AM", "Baby Ballet", "Toddlers", "Little House"),
      S("12:15–1:15 PM", "Mat Pilates", "Adults", "Adults"),
      S("3:15–4:15 PM", "Tap / Jazz", "Preschool · ages 3–4", "Preschool"),
      S("4:30–5:45 PM", "Tap / Jazz", "Kinder · ages 5–6", "Kinder"),
    ],
  },
  {
    day: "Thursday",
    classes: [
      S("9:00–10:00 AM", "Yoga & Barre", "Adults", "Adults"),
      S("11:00–11:45 AM", "Tumble Tots", "Toddlers", "Little House"),
      S("12:15–1:15 PM", "Strength & Fitness", "Adults", "Adults"),
      S("3:30–4:30 PM", "Production Lab", "Youth performance lab", "Performance"),
    ],
  },
  {
    day: "Friday",
    classes: [
      S("9:00–10:00 AM", "Strength & Fitness", "Adults", "Adults"),
      S("10:30–11:30 AM", "Mid Day Magic", "Toddler play + creativity", "Little House"),
      S("12:15–1:15 PM", "Mat Pilates", "Adults", "Adults"),
      S("4:30–5:30 PM", "Community Stars", "Ages 5+", "Performance"),
      S("6:00–8:00 PM", "Parents’ Night Out", "Every 3rd Friday", "Family"),
    ],
  },
  {
    day: "Saturday",
    classes: [
      S("8:00–9:00 AM", "Mat Pilates", "Adults", "Adults"),
      S("9:15–10:15 AM", "Ballet / Acro", "Preschool · ages 3–4", "Preschool"),
      S("10:20–11:35 AM", "Ballet / Acro", "Kinder · ages 5–6", "Kinder"),
      S("11:40 AM–12:55 PM", "Tap / Jazz", "Minis · ages 7–10", "Minis"),
    ],
  },
];

/** Monthly price for 1–6 dance classes per week. */
export const DANCE_PRICES = [95, 145, 195, 235, 275, 305];

/** Monthly House Membership total for n weekly youth enrollments (1–8). */
export function membershipTotal(n: number) {
  const base = [210, 250, 285, 315];
  return n <= base.length ? base[n - 1] : 315 + (n - 4) * 30;
}

export const PERKS = [
  { t: "8 adult classes each month", d: "Flexible adult classes so you can make time for movement." },
  { t: "1 reserved weekly youth enrollment", d: "Choose one Dance class or one Little House class." },
  { t: "1 Mid Day Magic visit each month", d: "A little extra space for play and connection." },
  { t: "50% off Parents’ Night Out", d: "A member benefit for a little grown-up time." },
];

export const DANCE_NOTES = [
  { k: "Little House", v: "$89/month · 4 monthly visits to eligible early-childhood classes" },
  { k: "Family enrollment", v: "$35, annually" },
  { k: "Show fees", v: "$250 holiday · $250 June — optional, payment plan provided" },
  { k: "Discounts", v: "Military 10% · additional siblings 10% · both 15%. Fees excluded." },
];

export const FAQ = [
  {
    q: "Do we have to choose a House Membership?",
    a: "No. Dance and Little House tuition options are separate from the House Membership. See the tuition options above.",
  },
  {
    q: "Can siblings use the youth add-ons?",
    a: "Yes. Each add-on covers one weekly youth enrollment for one child. Use them for siblings or more classes for the same child.",
  },
  {
    q: "Can I drop into an extra adult class or Mid Day Magic?",
    a: "Members pay $15 per additional drop-in, subject to availability and confirmation.",
  },
  {
    q: "Can I add a tuition discount to member pricing?",
    a: "Member prices cannot be combined with additional tuition discounts.",
  },
  {
    q: "Are there other fees?",
    a: "Family enrollment is $35 annually. Holiday and June shows are $250 each (participation optional, payment plan provided). Ask us for a full breakdown of any enrollment, show, uniform, or other fees.",
  },
  {
    q: "How do we get started?",
    a: "Choose what interests you, check the current schedule, and ask Carée or Kayti to confirm your family’s classes and complete cost breakdown.",
  },
];

export const PROGRAMS = [
  {
    img: "/images/ph-prog-member.png",
    alt: "Parent and child at The Fifth House",
    eyebrow: "For the whole family",
    title: "House Membership",
    body: "A little time for everyone: adult movement plus a reserved weekly Dance or Little House enrollment, with extra family perks.",
    cta: "See membership benefits",
    href: "/tuition",
  },
  {
    img: "/images/ph-prog-dance.png",
    alt: "Youth dance class",
    eyebrow: "Ages 3–10+",
    title: "Dance",
    body: "A weekly place to move, learn, and build confidence. Explore dance classes for your child’s age and experience.",
    cta: "Find a dance class",
    href: "/classes",
  },
  {
    img: "/images/ph-prog-little.png",
    alt: "Little ones moving together",
    eyebrow: "Early childhood",
    title: "Little House",
    body: "Little people, big magic. Early-childhood movement, Baby Ballet, Tumble Tots, and caregiver experiences.",
    cta: "Explore Little House",
    href: "/classes",
  },
];

export const FITS = [
  { q: "My child wants to dance.", a: "Explore youth Dance classes and a regular weekly routine.", cta: "See dance classes", href: "/classes" },
  { q: "I have a little one.", a: "Little House includes Baby Ballet, Tumble Tots, and caregiver movement.", cta: "See Little House", href: "/classes" },
  { q: "I want something for me, too.", a: "The House Membership combines adult classes with one weekly youth enrollment.", cta: "See membership", href: "/tuition" },
  { q: "We have more than one child.", a: "Add weekly youth enrollments for siblings, or another class for the same child.", cta: "Price my family", href: "/tuition" },
];

export const PILLARS = [
  { n: "01", t: "A place to begin", d: "First dance class? Returning to movement? Finding a new routine? There is room to start wherever you are." },
  { n: "02", t: "A place to grow", d: "We value encouragement, curiosity, and the little moments that build confidence. Showing up and trying matter." },
  { n: "03", t: "A place to connect", d: "Our vision brings dance, adult movement, little ones, and community experiences under one welcoming roof." },
];

export const VISION = [
  { t: "Dance & shine", items: ["Ballet", "Tap", "Jazz", "Hip-hop", "Contemporary", "Acro", "Musical theatre", "Private lessons", "Recitals", "Dance camps"] },
  { t: "A little time for you", items: ["Pilates", "Barre", "Yoga", "Sculpt", "Dance fitness", "No Mirrors Monday", "Move with Mom", "Sunday Reset", "Sound baths", "Golden Hour Movement"] },
  { t: "Little people, big magic", items: ["Baby Ballet", "Tumble Tots", "Caregiver & Me", "Sensory play", "Toddler Art Lab", "Tinker Garden", "Family yoga", "Creative camps"] },
  { t: "Make something wonderful", items: ["Craft nights", "DIY workshops", "Paint & sip", "Kids’ art", "Vision boards", "Costume & design", "Teen creative nights", "Guest artists"] },
  { t: "Find your people", items: ["Coffee mornings", "Caregiver meetups", "Stroller meetups", "Book clubs", "Family nights", "Maker pop-ups", "Volunteer days"] },
  { t: "Make a memory", items: ["Parents’ Night Out", "Birthday parties", "Neon dance parties", "Holiday celebrations", "June recitals", "Summer programming"] },
];

export const INTERESTS = [
  "House Membership",
  "Dance classes",
  "Little House",
  "Adult movement",
  "Mid Day Magic",
  "Future events & workshops",
];
