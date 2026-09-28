import type { Metadata } from "next";
import { BookTabs, OpenStatus } from "@/components/book-panel";
import { HoursList } from "@/components/hours-list";
import { links, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book",
  description: "Book a registration & enrollment meeting or pick a class at The Fifth House.",
};

export default function BookPage() {
  return (
    <section className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-start gap-[clamp(28px,4vw,56px)] pb-[72px] pt-[clamp(40px,6vw,72px)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="eyebrow">Book</div>
          <h1 className="display h1">Book a visit</h1>
          <p className="text-lg leading-[1.55]">Choose a service or a class. You’ll get a confirmation by email.</p>
        </div>
        <BookTabs />
        <a href={links.manageBookings} target="_blank" rel="noopener" className="text-cta">
          Manage my bookings
        </a>
      </div>

      <aside className="flex flex-col gap-5 rounded-2xl border border-hairline bg-surface p-[clamp(24px,3vw,32px)]">
        <OpenStatus />
        <address className="flex flex-col gap-1 text-base not-italic leading-[1.55]">
          <span className="font-display text-xl text-olive">{site.legalName}</span>
          <span>
            {site.street}
            <br />
            {site.city}
          </span>
          <span className="mt-1.5 flex flex-wrap gap-x-[18px] gap-y-1.5">
            <a href={site.tel}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>Email us</a>
            <a href={site.directions} target="_blank" rel="noopener">
              Get directions
            </a>
          </span>
        </address>
        <HoursList rowClassName="py-2.5" />
      </aside>
    </section>
  );
}
