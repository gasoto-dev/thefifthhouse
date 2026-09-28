"use client";

import { useState } from "react";
import { DANCE_PRICES, FAQ, membershipTotal } from "@/lib/content";

export function DanceCalculator() {
  const [idx, setIdx] = useState(0);
  const n = idx + 1;
  return (
    <div className="flex flex-col gap-2.5">
      <span id="dance-classes-label" className="text-[15px] font-semibold text-olive">
        Classes per week
      </span>
      <div role="radiogroup" aria-labelledby="dance-classes-label" className="grid grid-cols-6 gap-1.5">
        {DANCE_PRICES.map((_, i) => {
          const on = i === idx;
          return (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setIdx(i)}
              className={`min-h-12 rounded-lg border-[1.5px] py-3 text-[17px] font-semibold ${
                on ? "border-sage bg-sage text-surface" : "border-input bg-white text-olive"
              }`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
      <div
        className="mt-1 flex flex-wrap items-baseline justify-between gap-3 rounded-[10px] bg-bg px-5 py-[18px]"
        aria-live="polite"
      >
        <span className="text-base">
          {n} class{n > 1 ? "es" : ""} per week
        </span>
        <span className="flex items-baseline gap-1.5">
          <span className="font-display text-4xl text-olive">${DANCE_PRICES[idx]}</span>
          <span className="text-[15px]">/ month</span>
        </span>
      </div>
    </div>
  );
}

const MAX_ENROLLMENTS = 8;
const stepBtn =
  "size-12 rounded-lg border-[1.5px] border-sage bg-surface text-[22px] text-olive disabled:cursor-not-allowed disabled:opacity-40";

export function MembershipCalculator() {
  const [n, setN] = useState(1);
  return (
    <div className="flex flex-col gap-3.5 rounded-xl bg-surface p-5 text-body">
      <span className="text-[15px] font-semibold text-olive">Weekly youth enrollments</span>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Fewer enrollments"
            disabled={n <= 1}
            onClick={() => setN((x) => Math.max(1, x - 1))}
            className={stepBtn}
          >
            −
          </button>
          <span className="min-w-14 text-center font-display text-[28px] text-olive" aria-live="polite">
            {n}
          </span>
          <button
            type="button"
            aria-label="More enrollments"
            disabled={n >= MAX_ENROLLMENTS}
            onClick={() => setN((x) => Math.min(MAX_ENROLLMENTS, x + 1))}
            className={stepBtn}
          >
            +
          </button>
        </div>
        <span className="flex items-baseline gap-1.5">
          <span className="font-display text-[40px] text-olive">${membershipTotal(n)}</span>
          <span className="text-[15px]">/ month</span>
        </span>
      </div>
      <span className="text-[14.5px] leading-normal text-sage">
        {n === 1
          ? "Includes 1 weekly Dance or Little House enrollment. Add more for siblings or extra classes."
          : "The first extra adds $40, the second $35, then $30 each. Use them for siblings or more classes for one child."}
      </span>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col border-b border-hairline">
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-t border-hairline">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-olive"
              >
                <span>{f.q}</span>
                <span className="text-[22px] font-normal text-sage" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <p id={`faq-${i}`} hidden={!isOpen} className="mb-[22px] max-w-[44em] text-[17px] leading-[1.6]">
              {f.a}
            </p>
          </div>
        );
      })}
    </div>
  );
}
