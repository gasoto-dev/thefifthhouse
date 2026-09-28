import type { Metadata } from "next";
import Link from "next/link";
import { LocationBand } from "@/components/location-band";
import { DanceCalculator, Faq, MembershipCalculator } from "@/components/tuition-calculators";
import { DANCE_NOTES, PERKS } from "@/lib/content";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tuition & Membership",
  description: "Monthly Dance & Little House tuition and the House Membership for families at The Fifth House.",
};

export default function TuitionPage() {
  return (
    <>
      <section className="wrap flex flex-col gap-3 pb-10 pt-[clamp(40px,6vw,72px)]">
        <div className="eyebrow">Tuition &amp; Memberships</div>
        <h1 className="display h1 max-w-[16em]">Two simple ways to join the House.</h1>
        <p className="max-w-[38em] text-lg leading-[1.55]">
          Dance and Little House tuition is separate from the House Membership. Pick the one that fits — or ask
          us to compare for your family.
        </p>
      </section>

      <section className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-start gap-6 pb-[72px] pt-6">
        <article className="flex flex-col gap-[22px] rounded-2xl border border-hairline bg-surface p-[clamp(24px,3vw,36px)]">
          <div className="flex flex-col gap-1.5">
            <div className="eyebrow text-xs tracking-[0.2em]">Dance &amp; Little House</div>
            <h2 className="display text-[30px]">Monthly tuition</h2>
            <p className="text-base leading-normal">Weekly classes, billed monthly.</p>
          </div>
          <DanceCalculator />
          <dl className="flex flex-col">
            {DANCE_NOTES.map((n) => (
              <div key={n.k} className="flex flex-wrap justify-between gap-4 border-t border-divider py-3.5 text-base leading-[1.45]">
                <dt className="font-semibold text-olive">{n.k}</dt>
                <dd className="min-w-[200px] flex-1 text-right">{n.v}</dd>
              </div>
            ))}
          </dl>
          {links.tuitionPdf && (
            <a href={links.tuitionPdf} className="text-base font-medium">
              Download Dance &amp; Little House tuition (PDF)
            </a>
          )}
        </article>

        <article className="flex flex-col gap-[22px] rounded-2xl bg-sage p-[clamp(24px,3vw,36px)] text-[#EDEFE8]">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="eyebrow text-xs tracking-[0.2em] text-blush">House Membership</div>
              <span className="rounded-full bg-blush px-3 py-1 text-[13px] font-semibold text-accent">
                Best for families
              </span>
            </div>
            <h2 className="display text-[30px] text-surface">A little time for everyone</h2>
          </div>
          <ul className="flex flex-col">
            {PERKS.map((k) => (
              <li
                key={k.t}
                className="grid grid-cols-[22px_1fr] gap-2.5 border-t border-white/16 py-2.5 text-base leading-[1.45]"
              >
                <span className="text-blush" aria-hidden>
                  ✦
                </span>
                <strong className="font-semibold text-surface">{k.t}</strong>
              </li>
            ))}
          </ul>
          <MembershipCalculator />
          <p className="text-[15px] leading-[1.55]">
            Member adult fitness or Mid Day Magic drop-ins: $15 (subject to availability and confirmation). Member
            pricing cannot be combined with additional tuition discounts.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/join" className="btn btn-light px-[22px] py-[15px]">
              Start my membership
            </Link>
            {links.membershipPdf && (
              <a href={links.membershipPdf} className="text-[15px] text-surface hover:text-blush">
                Download Membership &amp; Perks (PDF)
              </a>
            )}
          </div>
        </article>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto flex max-w-[880px] flex-col gap-7 px-[clamp(20px,4vw,48px)] py-[clamp(56px,7vw,88px)]">
          <h2 className="display text-[clamp(28px,3.2vw,40px)]">Wondering how it works?</h2>
          <Faq />
        </div>
      </section>
      <LocationBand />
    </>
  );
}
