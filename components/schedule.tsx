"use client";

import { useState } from "react";
import { CATEGORIES, WEEK, type Category } from "@/lib/content";
import { useStudioNow } from "@/lib/use-studio-now";

const chip = "flex min-h-10 items-center gap-2 rounded-full border-[1.5px] px-4 py-[9px] text-[15px]";

export function Schedule() {
  const [filters, setFilters] = useState<Category[]>([]);
  const now = useStudioNow();

  const toggle = (c: Category) =>
    setFilters((f) => (f.includes(c) ? f.filter((x) => x !== c) : [...f, c]));

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter classes">
        <span className="mr-1 text-sm text-sage">Show:</span>
        <button
          type="button"
          onClick={() => setFilters([])}
          aria-pressed={!filters.length}
          className={`${chip} ${
            filters.length ? "border-[#D6D9D0] bg-surface text-olive" : "border-olive bg-olive text-surface"
          }`}
        >
          All classes
        </button>
        {(Object.keys(CATEGORIES) as Category[]).map((c) => {
          const on = filters.includes(c);
          const { bg, ink } = CATEGORIES[c];
          return (
            <button
              key={c}
              type="button"
              onClick={() => toggle(c)}
              aria-pressed={on}
              className={`${chip} text-olive`}
              style={{ background: on ? bg : "#FBFBF8", borderColor: on ? ink : "#D6D9D0" }}
            >
              <span className="size-[9px] rounded-full" style={{ background: ink }} aria-hidden />
              {c}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(168px,1fr))] items-start gap-3">
        {WEEK.map(({ day, classes }, i) => {
          const isToday = now?.day === i;
          const visible = classes.filter((c) => !filters.length || filters.includes(c.cat));
          return (
            <div key={day} className="flex flex-col gap-2.5">
              <h2
                className={`flex items-center justify-between rounded-[10px] px-3.5 py-3 text-surface ${
                  isToday ? "bg-accent" : "bg-day"
                }`}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.12em]">{day}</span>
                {isToday && <span className="text-xs uppercase tracking-[0.08em] opacity-90">Today</span>}
              </h2>
              {visible.map((c) => (
                <div
                  key={c.time + c.title}
                  className="flex flex-col gap-1.5 rounded-[10px] px-[13px] pb-3.5 pt-3"
                  style={{ background: CATEGORIES[c.cat].bg }}
                >
                  <span
                    className="self-start whitespace-nowrap rounded-full px-2.5 py-[3px] text-xs font-semibold tracking-[0.02em] text-white"
                    style={{ background: CATEGORIES[c.cat].ink }}
                  >
                    {c.time}
                  </span>
                  <span className="text-base font-semibold leading-tight text-[#2F3528]">{c.title}</span>
                  <span className="text-[13.5px] text-[#4E5347]">{c.sub}</span>
                </div>
              ))}
              {!visible.length && (
                <div className="rounded-[10px] border border-dashed border-input px-[13px] py-4 text-center text-sm text-muted">
                  No matching classes
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
