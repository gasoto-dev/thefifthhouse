"use client";

import { hours } from "@/lib/site";
import { useStudioNow } from "@/lib/use-studio-now";

export function HoursList({ rowClassName = "py-[9px]" }: { rowClassName?: string }) {
  const now = useStudioNow();
  return (
    <dl className="flex flex-col">
      {hours.map((h, i) => {
        const isToday = now?.day === i;
        return (
          <div
            key={h.day}
            className={`flex justify-between rounded-lg px-3 text-base text-olive ${rowClassName} ${
              isToday ? "bg-today font-semibold" : ""
            }`}
          >
            <dt>{h.day}</dt>
            <dd>{h.time}</dd>
          </div>
        );
      })}
    </dl>
  );
}
