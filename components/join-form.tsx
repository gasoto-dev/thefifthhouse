"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { INTERESTS } from "@/lib/content";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function JoinForm() {
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const toggle = (i: string) =>
    setInterests((xs) => (xs.includes(i) ? xs.filter((x) => x !== i) : [...xs, i]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, interests }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      window.scrollTo({ top: 0 });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3.5 rounded-2xl border border-hairline bg-surface p-[clamp(28px,4vw,48px)]">
        <span className="text-[28px] text-accent" aria-hidden>
          ✦
        </span>
        <h2 className="display text-[32px]">Thank you — we’ll be in touch.</h2>
        <p className="text-[17px] leading-[1.6]">While you wait, take a peek at this week’s classes.</p>
        <Link href="/classes" className="btn btn-primary mt-2 px-6 py-[15px]">
          See the schedule
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-hairline bg-surface p-[clamp(22px,3vw,36px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
        <label className="label">
          Parent / caregiver name *
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="label">
          Phone *
          <input name="phone" required type="tel" autoComplete="tel" className="field" />
        </label>
      </div>
      <label className="label">
        Email *
        <input name="email" required type="email" autoComplete="email" className="field" />
      </label>

      <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
        <legend className="mb-2.5 p-0 text-[15px] font-semibold text-olive">I’d love to hear more about</legend>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((i) => {
            const on = interests.includes(i);
            return (
              <button
                key={i}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(i)}
                className={`min-h-11 rounded-full border-[1.5px] px-4 py-2.5 text-[15px] ${
                  on ? "border-sage bg-sage text-surface" : "border-input bg-white text-olive"
                }`}
              >
                {on && "✓ "}
                {i}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="label">
        <span>
          Children’s names &amp; ages <span className="text-sm font-normal text-muted">(optional)</span>
        </span>
        <input name="children" placeholder="e.g. Lila, 4 · Theo, 7" className="field" />
      </label>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4">
        <label className="label">
          Preferred date
          <input name="preferredDate" type="date" className="field" />
        </label>
        <label className="label">
          Preferred time
          <select name="preferredTime" className="field px-3">
            <option>Morning</option>
            <option>Midday</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
      </div>
      <label className="label">
        Question or “please offer this!” idea
        <textarea name="message" rows={3} className="field h-auto resize-y py-3" />
      </label>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <button type="submit" disabled={status === "sending"} className="btn btn-primary p-[17px] text-[17px]">
        {status === "sending" ? "Sending…" : "Send to Carée & Kayti"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-[15px] leading-normal text-accent">
          Sorry, that didn’t go through. Please try again, or reach us at <a href={site.tel}>{site.phone}</a> or{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <p className="text-[13px] leading-normal text-muted">You may receive marketing and promotional materials.</p>
    </form>
  );
}
