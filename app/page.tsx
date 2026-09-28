import Image from "next/image";
import Link from "next/link";
import { LocationBand } from "@/components/location-band";
import { TodayCard } from "@/components/today-card";
import { FITS, PERKS, PROGRAMS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(32px,5vw,72px)] pb-[clamp(48px,7vw,88px)] pt-[clamp(40px,7vw,96px)]">
        <div className="flex flex-col gap-6">
          <div className="eyebrow tracking-[0.24em]">Connect ✦ Move ✦ Create</div>
          <h1 className="display text-balance text-[clamp(40px,5.6vw,72px)] leading-[1.04]">
            Room for you. Room for your family.
          </h1>
          <p className="max-w-[34em] text-pretty text-[clamp(18px,1.6vw,20px)] leading-[1.6]">
            From first dance steps to a little time for yourself, The Fifth Hou5e brings children,
            grown-ups, and families together through movement and connection.
          </p>
          <p className="text-[17px] italic leading-[1.6] text-sage">
            We celebrate curiosity, small victories, and practice over perfection.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="/classes" className="btn btn-primary">
              See the class schedule
            </Link>
            <a href="#find-your-fit" className="btn btn-outline">
              Help me find my fit
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] max-h-[620px] w-full">
          <div className="relative size-full overflow-hidden rounded-[240px_240px_14px_14px]">
            <Image
              src="/images/ph-home-hero.png"
              alt="Kids in a dance class at The Fifth House"
              fill
              priority
              sizes="(min-width: 980px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <TodayCard />
        </div>
      </section>

      <section className="border-y border-hairline bg-surface">
        <div className="wrap section-y flex flex-col gap-10">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="display h2">Come as you are.</h2>
            <p className="text-[19px] leading-normal">There is room to grow here.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
            {PROGRAMS.map((p) => (
              <article
                key={p.title}
                className="flex flex-col overflow-hidden rounded-[14px] border border-card-border bg-bg"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image src={p.img} alt={p.alt} fill sizes="(min-width: 980px) 400px, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 pb-[26px] pt-6">
                  <div className="eyebrow text-xs tracking-[0.2em]">{p.eyebrow}</div>
                  <h3 className="display text-[26px]">{p.title}</h3>
                  <p className="flex-1 text-pretty text-[17px] leading-[1.55]">{p.body}</p>
                  <Link href={p.href} className="text-cta mt-1.5">
                    {p.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage text-bg">
        <div className="wrap section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(32px,5vw,64px)]">
          <div className="flex flex-col gap-[18px]">
            <div className="eyebrow text-blush">House Membership</div>
            <h2 className="display text-balance text-[clamp(32px,4vw,50px)] leading-[1.08] text-surface">
              Your family’s home for movement.
            </h2>
            <p className="max-w-[32em] text-lg leading-[1.6] text-[#EDEFE8]">
              A little time for everyone: adult movement plus a reserved weekly Dance or Little House
              enrollment, with extra family perks. Add weekly youth enrollments for siblings or more
              classes for the same child.
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/tuition" className="btn btn-light px-6 py-[15px]">
                Compare options
              </Link>
              <Link href="/join" className="btn btn-ghost-light px-6 py-[15px]">
                Ask about joining
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-2xl bg-surface p-[clamp(24px,3vw,36px)] text-body">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-[56px] leading-none text-olive">$210</span>
              <span className="text-lg">/ month</span>
            </div>
            <ul className="flex flex-col">
              {PERKS.map((k) => (
                <li key={k.t} className="grid grid-cols-[24px_1fr] gap-3 border-t border-divider py-3.5">
                  <span className="text-base leading-normal text-accent" aria-hidden>
                    ✦
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[17px] font-semibold text-olive">{k.t}</span>
                    <span className="text-[15px] leading-normal">{k.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="find-your-fit" className="wrap section-y flex scroll-mt-[90px] flex-col gap-9">
        <div className="flex max-w-[680px] flex-col gap-2.5">
          <div className="eyebrow">Find your fit</div>
          <h2 className="display h2">What brings you in?</h2>
          <p className="text-lg leading-[1.55]">Start with the part your family is most excited about.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {FITS.map((f) => (
            <Link
              key={f.q}
              href={f.href}
              className="flex min-h-[220px] flex-col gap-3 rounded-[14px] border border-hairline bg-surface px-6 py-[26px] text-body no-underline transition hover:-translate-y-0.5 hover:border-sage hover:bg-white hover:text-body"
            >
              <span className="font-display text-[21px] leading-[1.25] text-olive">“{f.q}”</span>
              <span className="flex-1 text-base leading-[1.55]">{f.a}</span>
              <span className="text-[15px] font-semibold text-sage">{f.cta} →</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-panel p-[clamp(24px,3.5vw,40px)]">
          <div className="flex max-w-[620px] flex-col gap-2">
            <h3 className="display text-[26px]">Not sure where to start?</h3>
            <p className="text-[17px] leading-[1.55]">
              Tell us a little about your family. Carée or Kayti can help you choose classes and
              understand your complete monthly and upfront costs.
            </p>
          </div>
          <Link href="/join" className="btn btn-primary">
            Help me find my fit
          </Link>
        </div>
      </section>

      <LocationBand />
    </>
  );
}
