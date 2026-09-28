export const site = {
  name: "The Fifth House",
  legalName: "Fifth House Collective",
  tagline: "Connect ✦ Move ✦ Create",
  street: "9340 Clairemont Mesa Blvd Ste E",
  city: "San Diego, CA 92123",
  cityLong: "San Diego, California 92123",
  phone: "(619) 363-2544",
  tel: "tel:+16193632544",
  sms: "sms:+16193632544",
  email: "connect.thefifthhouse@gmail.com",
  directions:
    "https://maps.google.com/?q=9340+Clairemont+Mesa+Blvd+Ste+E+San+Diego+CA+92123",
  timeZone: "America/Los_Angeles",
};

/** External links. Set a PDF to a path in /public (e.g. "/pdfs/tuition.pdf") to show its link. */
export const links = {
  booking: "https://the-fifth-house.square.site/s/appointments",
  manageBookings: "https://the-fifth-house.square.site/s/appointments",
  schedulePdf: null as string | null,
  tuitionPdf: null as string | null,
  membershipPdf: null as string | null,
  policies: null as string | null,
};

export const nav = [
  { href: "/classes", label: "Classes & Schedule" },
  { href: "/tuition", label: "Tuition & Membership" },
  { href: "/our-story", label: "Our Story" },
  { href: "/book", label: "Book" },
] as const;

/** Index matches Date#getDay(). `close` is the closing hour (24h); null = closed. */
export const hours: { day: string; time: string; close: number | null }[] = [
  { day: "Sunday", time: "Closed", close: null },
  { day: "Monday", time: "9:00 am – 6:00 pm", close: 18 },
  { day: "Tuesday", time: "9:00 am – 5:00 pm", close: 17 },
  { day: "Wednesday", time: "9:00 am – 6:00 pm", close: 18 },
  { day: "Thursday", time: "9:00 am – 5:00 pm", close: 17 },
  { day: "Friday", time: "9:00 am – 6:00 pm", close: 18 },
  { day: "Saturday", time: "9:00 am – 1:00 pm", close: 13 },
];

export const OPEN_HOUR = 9;
