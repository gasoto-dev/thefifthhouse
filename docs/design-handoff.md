# Handoff: The Fifth House — Website Redesign

## Overview
Redesign of The Fifth House's Square Online site (https://the-fifth-house.square.site/) — a family dance, movement and community studio in San Diego (Fifth House Collective, 9340 Clairemont Mesa Blvd Ste E, San Diego, CA 92123 · (619) 363-2544 · connect.thefifthhouse@gmail.com). Brand tagline: **Connect ✦ Move ✦ Create**. Goals: simpler nav, clear primary CTAs, a filterable schedule, transparent pricing, and a better inquiry form.

Six pages: **Home, Classes & Schedule, Tuition & Membership, Our Story, Book, Join Us**.

## About the Design Files
The files here are **design references built in HTML** — a working prototype of the intended look and behavior, not production code to copy. Rebuild them in the target environment. If the site stays on Square Online, apply the layout, copy and styling through Square's editor and custom code blocks. If moving to a custom stack, a good default is **Astro or Next.js + Tailwind** (static marketing site, one small interactive island for schedule filters and price calculators). Wire the form to a real backend (Square, Formspree, or your own) and booking to Square Appointments.

## Fidelity
**High-fidelity** for colors, type, spacing, layout and copy. **Imagery is placeholder**: `assets/ph-*.png` are labeled stand-ins that should be replaced with real studio photos.

## Global Layout
- Content max-width **1240px** (schedule: 1320px), centered. Horizontal padding `clamp(20px, 4vw, 48px)`.
- Section vertical padding ≈ `clamp(56px, 7vw, 96px)`.
- Responsive: desktop nav at **≥980px**. Below that, a "Menu" button toggles a full-width stacked menu. All multi-column areas use `grid-template-columns: repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, so they collapse to one column on mobile.
- Tap targets ≥44px.

### Header (sticky, all pages)
- Background `rgba(242,244,239,0.94)` + `backdrop-filter: blur(8px)`, bottom border `1px #DDE0D6`, padding 14px.
- Left: wordmark logo (`assets/logo-wordmark.png`), height `clamp(52px,6vw,68px)`, links to Home.
- Center: nav items — Classes & Schedule · Tuition & Membership · Our Story · Book. 15px, uppercase, letter-spacing .06em, weight 500, color `#3B4331`. The active item is `#6B2E17` with a 2px bottom border in the same color. Hover: `#6B2E17`.
- Right: phone link `(619) 363-2544`, then the primary button **"Let's Connect"** (goes to Join Us).
- Removed the old "More" dropdown; every page is top-level.

### Location band (every page except Book)
Background `#E6E9E0`. Two columns: "Visit the House" (address, phone, email, "Get directions" button to Google Maps) and the weekly hours list. **Today's row is highlighted** (bg `#DDE3D3`, weight 600).

Hours: Sun Closed · Mon 9–6 · Tue 9–5 · Wed 9–6 · Thu 9–5 · Fri 9–6 · Sat 9–1.

### Footer
Background `#3B4331`, text `#DDE0D6`. Round logo (84px circle), "The Fifth House" + tagline, nav links + "Contact us" + "Studio Policies & Forms". Bottom bar: "© 2026 The Fifth House · San Diego, CA", 13px `#B9BEB1`.

### Floating "Text us" pill
Fixed at bottom-right 20px, links to `sms:+16193632544`. Background `#FBFBF8`, 1px `#DDE0D6` border, radius 999px, shadow `0 6px 20px rgba(59,67,49,.14)`.

## Screens

### 1. Home
1. **Hero**: two columns.
   - Left: eyebrow "CONNECT ✦ MOVE ✦ CREATE" (13px, .24em tracking, `#6B2E17`).
   - H1 "Room for you. Room for your family." (Young Serif, `clamp(40px,5.6vw,72px)`, lh 1.04, `#3B4331`).
   - Body (18–20px/1.6): "From first dance steps to a little time for yourself, The Fifth Hou5e brings children, grown-ups, and families together through movement and connection."
   - Italic line: "We celebrate curiosity, small victories, and practice over perfection."
   - CTAs: primary "See the class schedule", secondary outline "Help me find my fit" (smooth-scrolls to the Find-your-fit section, 90px offset).
   - Right: arch-topped photo (4:5 aspect, radius `240px 240px 14px 14px`, max-height 620px), with a floating card at bottom-left: "OPEN TODAY" / "Monday · 9:00 am – 6:00 pm". The card is live and based on the current day.
2. **"Come as you are."**: background `#FBFBF8`. Three program cards (bg `#F2F4EF`, 1px `#E1E4DA`, radius 14px). Each has a 3:2 photo, eyebrow, 26px serif title, body and a text-link CTA:
   - House Membership: "See membership benefits" → Tuition.
   - Dance, Ages 3–10+: "Find a dance class" → Schedule.
   - Little House: "Explore Little House" → Schedule.
3. **Membership band**: background `#5C6354`.
   - Left: "Your family's home for movement." plus buttons "Compare options" → Tuition and "Ask about joining" → Join.
   - Right: a white card with **$210 / month** (Young Serif 56px) and 4 perks with ✦ bullets:
     - 8 adult classes/month
     - 1 reserved weekly youth enrollment
     - 1 Mid Day Magic visit/month
     - 50% off Parents' Night Out
4. **"What brings you in?" (Find your fit)**: 4 quote cards, which are buttons. Hover lifts them 2px, with border `#5C6354` and bg #fff.
   - "My child wants to dance." → Schedule
   - "I have a little one." → Schedule
   - "I want something for me, too." → Tuition
   - "We have more than one child." → Tuition
   - Below the cards: a `#E6E9E0` panel "Not sure where to start?" with a CTA to Join.

### 2. Classes & Schedule
- Header: "This week at the House", with buttons "Download PDF" (outline) and "Help me choose a class" (→ Join).
- **Filter chips**: "All classes" plus one per category. Multi-select, and "All" clears the filters. The active chip uses the category bg and border. Each chip shows a colored dot.
- **Week grid**: 7 columns (`minmax(168px,1fr)`, wraps).
  - Day header: bg `#5E5A4A`. Today's header is `#6B2E17` with a "TODAY" tag.
  - Class cards: bg = category tint, radius 10px. Each shows a time pill (category ink, white text, 12px), a title (16px/600) and a subtitle (13.5px).
  - If a filter leaves a day empty, the day shows a dashed "No matching classes" box.
- Footnote: availability confirmation, and Parents' Night Out every 3rd Friday.

Category colors (bg / ink):
- Adults `#E7ECEE / #5E7480`
- Little House `#E7EDDF / #6F8C52`
- Preschool `#F3E4E1 / #A26F66`
- Kinder `#F0E4EA / #946A7E`
- Minis `#E8E6F1 / #736B96`
- Performance `#F4EBD2 / #9C7F33`
- Family `#E3ECE9 / #5A7B72`

The schedule data is in the `WEEK` array in the prototype's logic. It was transcribed from the client's schedule screenshot, so the client should confirm it. ⚠ The schedule lists Sunday classes, but the posted hours say Sunday is Closed. The client needs to resolve this.

### 3. Tuition & Membership
- H1 "Two simple ways to join the House." Two cards side by side.
- **Dance & Little House** card (light):
  - A segmented selector for 1–6 classes/week (48px buttons) → price $95 / $145 / $195 / $235 / $275 / $305 per month.
  - Key/value notes:
    - Little House $89/mo (4 visits)
    - Family enrollment $35/yr
    - Show fees $250 holiday + $250 June (optional, payment plan)
    - Discounts: Military 10%, additional siblings 10%, both 15%. Fees excluded.
  - PDF link.
- **House Membership** card (bg `#5C6354`, "Best for families" badge in `#E4D6C8`/`#6B2E17`):
  - Perks list.
  - Stepper −/+ for weekly youth enrollments (1–8). Total: 1 → $210, 2 → $250, 3 → $285, 4 → $315, then +$30 each.
  - Note text: first extra +$40, second +$35, then $30 each.
  - Drop-ins $15 for members. Not combinable with tuition discounts.
  - CTA "Start my membership" → Join. Membership PDF link.
- **FAQ accordion** "Wondering how it works?": 6 Q&As. One open at a time; the first is open by default. Icon +/−.

### 4. Our Story
1. Hero: H1 "A little movement. A little magic. A place to belong.", the founders' paragraph and the italic sign-off "With love, Carée & Kayti" (`#6B2E17`). Circular founders photo.
2. Three numbered pillars (01–03): A place to begin / grow / connect.
3. "Take a look inside": a 4-photo gallery (4:5, radius 12px).
4. "What we dream of growing…": 6 cards of tag chips (Dance & shine, A little time for you, Little people big magic, Make something wonderful, Find your people, Make a memory), followed by a disclaimer paragraph.

### 5. Book
- Left side:
  - "Book a visit" heading.
  - Segmented tabs Services | Classes.
  - Services tab: "Registration & Enrollment Meeting" card with a "Book now" button. Hook this to Square Appointments.
  - Classes tab: card with "View schedule" → Schedule.
  - "Manage my bookings" link.
- Right side: an info card.
  - **Live open/closed status**: green dot `#6F8C52` "Open until …", or rose dot `#A26F66` "Closed now · …".
  - Address, phone, email and directions.
  - The hours list with today highlighted.

### 6. Join Us (inquiry form)
- Left: H1 "Let's find your family's fit.", intro, "Be the good" circle image, and "Prefer to talk?" with call/text links.
- Right: form card with these fields:
  - Parent/caregiver name* and Phone* (2-col)
  - Email*
  - Interest chips, multi-select toggles showing ✓ when on, filled `#5C6354`: House Membership, Dance classes, Little House, Adult movement, Mid Day Magic, Future events & workshops
  - Children's names & ages (optional)
  - Preferred date, and Preferred time (Morning/Midday/Afternoon/Evening)
  - Question/idea textarea
- Inputs: height 50px, border 1.5px `#C9CDC0`, radius 8px, focus border `#5C6354`, labels 15px/600 visible above each field.
- Submit button "Send to Carée & Kayti" (full width). It's always enabled and uses native `required` validation. reCAPTCHA/marketing disclaimer below it.
- On submit, show a success state: "Thank you — we'll be in touch." + "See the schedule". Scroll to the top.

## Interactions & Behavior
- Page switching is client-side in the prototype. In production, use real routes: `/`, `/classes`, `/tuition`, `/our-story`, `/book`, `/join`. Scroll to the top on navigation.
- Hover states:
  - Primary buttons `#5C6354` → `#474E40`.
  - Outline buttons → bg `#E6E9E0`.
  - Text links → `#6B2E17`.
  - Fit cards lift 2px.
- "Today" logic (hero card, schedule column, hours highlight, open status) uses the visitor's local day and hour. Open = hour ≥ 9 and before closing.
- No animations beyond hover transitions and smooth scroll.

## State
- `menuOpen` (mobile nav)
- `filters: string[]` (schedule categories)
- `danceClasses: 1–6`
- `memberEnrollments: 1–8`
- `faqOpen: index | -1`
- `bookTab: 'services' | 'classes'`
- `interests: string[]`, `submitted: boolean`

No data fetching in the prototype. In production the schedule could come from Square or a CMS.

## Design Tokens
**Colors**
- Background `#F2F4EF`
- Surface / card `#FBFBF8`
- Muted panel `#E6E9E0`
- Hairline `#DDE0D6`, card border `#E1E4DA`, input border `#C9CDC0`
- Brand sage `#5C6354` (primary buttons, membership band)
- Sage hover `#474E40`
- Deep olive `#3B4331` (headings, footer bg)
- Body text `#474C40`
- Muted text `#6E7366`
- Accent brown `#6B2E17` (eyebrows, active nav, today)
- Blush `#E4D6C8`
- Day header `#5E5A4A`
- Plus the category tints above.

**Typography**
- Display: **Young Serif** 400 (H1 `clamp(34–72px)`, H2 `clamp(28–50px)`, card titles 21–30px).
- Body/UI: **Source Serif 4** (400/500/600, italic). Body 16–20px, line-height 1.55–1.65.
- Eyebrows: 12–13px, uppercase, letter-spacing .2–.24em, `#6B2E17`.
- Nav: 15px uppercase, .06em.
- These are stand-ins for the fonts on the current Square site. Swap them if the brand fonts are known.

**Radii**
- Buttons 6px
- Inputs 8px
- Class cards / segment buttons 10px
- Cards 14–16px
- Chips / pills 999px
- Hero arch `240px 240px 14px 14px`

**Shadows** (used sparingly)
- Floating card `0 8px 24px rgba(59,67,49,.08)`
- Text-us pill `0 6px 20px rgba(59,67,49,.14)`

**Spacing**
- Gaps: 8 / 12 / 16 / 24 / 32 / 40px
- Card padding: 24–36px

## Assets
- `assets/logo-wordmark.png`: header logo, taken from the client's PDFs.
- `assets/logo-round.png`: footer round badge.
- `assets/be-the-good.png`: "Be the good" circle on Join Us.
- `assets/ph-*.png`: **placeholders**, to be replaced with real photos:
  - ph-home-hero (kids dance class)
  - ph-prog-member (parent + child)
  - ph-prog-dance
  - ph-prog-little
  - ph-story-founders (Carée & Kayti)
  - ph-story-g1 … g4 (gallery)
- Glyph ✦ is a text character (U+2726), not an icon.
- Links still to wire up: tuition/membership PDF downloads, schedule PDF, Studio Policies & Forms, Privacy Policy/Terms.

## Files
- `Fifth House Site.dc.html`: the source prototype.
  - Markup is in the template section; content data and logic are in the `class Component` script at the bottom: `WEEK` schedule, `HOURS`, `DANCE` prices, `MEM` prices, `FAQ`, programs, perks, vision lists.
  - It needs `support.js` and `image-slot.js` next to it; open it through a local server.
- `The Fifth House (standalone preview).html`: a single-file offline preview. Open it directly in a browser to click through every page.
- `assets/`: images.
- `screenshots/`: top-of-page captures of each screen (01-home … 06-join) at mobile/tablet width. They're a visual reference only; the README specs are authoritative.
