import type { Metadata } from "next";
import Link from "next/link";
import { LocationBand } from "@/components/location-band";
import { Schedule } from "@/components/schedule";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Classes & Schedule",
  description: "This week's dance, Little House, adult movement and family classes at The Fifth House.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[1320px] flex-col gap-7 px-[clamp(20px,3vw,40px)] pb-[72px] pt-[clamp(40px,6vw,72px)]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <div className="eyebrow">Classes &amp; Schedule</div>
            <h1 className="display h1">This week at the House</h1>
            <p className="text-lg leading-[1.55]">Movement, dance and community from morning through afternoon.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {links.schedulePdf && (
              <a href={links.schedulePdf} className="btn btn-sm btn-outline px-[18px]">
                Download PDF
              </a>
            )}
            <Link href="/join" className="btn btn-sm btn-primary px-[18px]">
              Help me choose a class
            </Link>
          </div>
        </div>

        <Schedule />

        <p className="text-[15px] text-sage">
          Ask us to confirm availability before enrolling. Parents’ Night Out runs every 3rd Friday of the month.
        </p>
      </section>
      <LocationBand />
    </>
  );
}
