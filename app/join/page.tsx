import type { Metadata } from "next";
import Image from "next/image";
import { JoinForm } from "@/components/join-form";
import { LocationBand } from "@/components/location-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Tell us about your family and Carée or Kayti will help you find the right classes.",
};

export default function JoinPage() {
  return (
    <>
      <section className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(32px,5vw,72px)] pb-20 pt-[clamp(40px,6vw,72px)]">
        <div className="flex flex-col gap-5">
          <div className="eyebrow">Join Us</div>
          <h1 className="display h1">Let’s find your family’s fit.</h1>
          <p className="text-lg leading-[1.6]">
            Tell us what you love. Carée or Kayti will reach out to confirm classes, availability and your complete
            cost breakdown.
          </p>
          <Image
            src="/images/be-the-good.png"
            alt="Be the good"
            width={180}
            height={180}
            className="mt-2 size-[180px] rounded-full"
          />
          <div className="flex flex-col gap-1.5 text-base">
            <span>Prefer to talk?</span>
            <div className="flex flex-wrap gap-x-[18px] gap-y-1.5">
              <a href={site.tel}>{site.phone}</a>
              <a href={site.sms}>Text us</a>
            </div>
          </div>
        </div>
        <JoinForm />
      </section>
      <LocationBand />
    </>
  );
}
