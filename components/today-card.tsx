"use client";

import { useStudioNow } from "@/lib/use-studio-now";

export function TodayCard() {
  const now = useStudioNow();
  return (
    <div
      className={`absolute bottom-7 left-[-18px] flex flex-col gap-0.5 rounded-xl border border-hairline bg-surface px-[18px] py-3.5 shadow-[0_8px_24px_rgba(59,67,49,0.08)] transition-opacity ${
        now ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="text-xs uppercase tracking-[0.16em] text-accent">
        {now?.isOpen ? "Open today" : "Today"}
      </span>
      <span className="font-display text-lg text-olive">
        {now ? `${now.today.day} · ${now.today.time}` : " "}
      </span>
    </div>
  );
}
