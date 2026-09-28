"use client";

import Link from "next/link";
import { useState } from "react";
import { links } from "@/lib/site";
import { useStudioNow } from "@/lib/use-studio-now";

const TABS = [
  { id: "services", label: "Services" },
  { id: "classes", label: "Classes" },
] as const;

const card =
  "flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-hairline bg-surface p-6";

export function BookTabs() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("services");
  return (
    <>
      <div role="tablist" className="flex gap-1 self-start rounded-[10px] bg-panel p-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`min-h-11 rounded-[7px] px-5 py-[11px] text-[15px] font-medium text-olive ${
              tab === t.id ? "bg-surface" : "bg-transparent"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === "services" ? (
        <div role="tabpanel" className={card}>
          <div className="flex max-w-[28em] flex-col gap-1.5">
            <h2 className="display text-[22px]">Registration &amp; Enrollment Meeting</h2>
            <p className="text-base leading-normal">
              Meet Carée or Kayti to confirm your family’s classes and complete cost breakdown.
            </p>
          </div>
          <a href={links.booking} target="_blank" rel="noopener" className="btn btn-primary px-6 py-3.5">
            Book now
          </a>
        </div>
      ) : (
        <div role="tabpanel" className={card}>
          <div className="flex max-w-[28em] flex-col gap-1.5">
            <h2 className="display text-[22px]">Pick a class from the weekly schedule</h2>
            <p className="text-base leading-normal">Filter by age group, then ask us to confirm availability.</p>
          </div>
          <Link href="/classes" className="btn btn-primary px-6 py-3.5">
            View schedule
          </Link>
        </div>
      )}
    </>
  );
}

export function OpenStatus() {
  const now = useStudioNow();
  if (!now) return <div className="h-6" />;
  const { today, isOpen } = now;
  const label = isOpen
    ? `Open until ${today.time.split("– ")[1]}`
    : today.close === null
      ? `Closed today · ${today.day}`
      : `Closed now · ${today.day} ${today.time}`;
  return (
    <div className="flex items-center gap-2.5">
      <span className={`size-2.5 rounded-full ${isOpen ? "bg-open" : "bg-closed"}`} aria-hidden />
      <span className="text-base font-semibold text-olive">{label}</span>
    </div>
  );
}
