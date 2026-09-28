import type { Metadata } from "next";
import Image from "next/image";
import { LocationBand } from "@/components/location-band";
import { PILLARS, VISION } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description: "A little movement. A little magic. A place to belong. Meet Carée & Kayti and The Fifth House.",
};

const GALLERY = ["g1", "g2", "g3", "g4"];

export default function StoryPage() {
  return (
    <>
      <section className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(32px,5vw,72px)] py-[clamp(40px,7vw,96px)]">
        <div className="flex flex-col gap-[22px]">
          <div className="eyebrow">Our Story</div>
          <h1 className="display text-balance text-[clamp(36px,4.8vw,60px)] leading-[1.06]">
            A little movement. A little magic. A place to belong.
          </h1>
          <p className="text-pretty text-[19px] leading-[1.65]">
            We are building The Fifth House around a simple idea: a family space can hold something for the
            children and something for the grown-ups. Whether you are discovering something new or returning to
            something you love, we want you to feel welcome here.
          </p>
          <p className="text-[19px] italic text-accent">With love, Carée &amp; Kayti</p>
        </div>
        <div className="relative aspect-square w-full max-w-[560px] justify-self-center overflow-hidden rounded-full">
          <Image
            src="/images/ph-story-founders.png"
            alt="Carée and Kayti, founders of The Fifth House"
            fill
            priority
            sizes="(min-width: 980px) 560px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(24px,4vw,48px)] py-[clamp(48px,6vw,80px)]">
          {PILLARS.map((p) => (
            <div key={p.n} className="flex flex-col gap-2.5">
              <span className="font-display text-[15px] text-accent">{p.n}</span>
              <h2 className="display text-[26px]">{p.t}</h2>
              <p className="text-[17px] leading-[1.6]">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap flex flex-col gap-7 pb-8 pt-[clamp(56px,7vw,96px)]">
        <h2 className="display h2">Take a look inside</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-3.5">
          {GALLERY.map((g) => (
            <div key={g} className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={`/images/ph-story-${g}.png`}
                alt="Inside the studio"
                fill
                sizes="(min-width: 980px) 300px, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="wrap flex flex-col gap-8 pb-[clamp(56px,7vw,96px)] pt-[clamp(40px,6vw,72px)]">
        <div className="flex max-w-[680px] flex-col gap-2.5">
          <div className="eyebrow">Our growing vision</div>
          <h2 className="display h2">What we dream of growing…</h2>
          <p className="text-lg leading-[1.55]">
            Creative workshops, family gatherings, seasonal celebrations, camps, and more opportunities to connect.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-4">
          {VISION.map((v) => (
            <div key={v.t} className="flex flex-col gap-3.5 rounded-[14px] border border-card-border bg-surface p-6">
              <h3 className="display text-[22px]">{v.t}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {v.items.map((i) => (
                  <li key={i} className="rounded-full bg-bg px-3 py-1.5 text-sm text-body">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="max-w-[52em] text-[15px] leading-[1.55] text-sage">
          These are future and seasonal ideas, not a current schedule or a list of included membership benefits.
          Offerings depend on interest, instructors, and space; separate fees may apply.
        </p>
      </section>
      <LocationBand />
    </>
  );
}
