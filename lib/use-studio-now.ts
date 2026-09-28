"use client";

import { useSyncExternalStore } from "react";
import { hours, OPEN_HOUR, site } from "./site";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: site.timeZone,
  weekday: "short",
  hour: "numeric",
  hourCycle: "h23",
});

/** Encodes the studio's local day and hour as day * 24 + hour so the snapshot is a stable primitive. */
function snapshot() {
  const parts = fmt.formatToParts(new Date());
  const day = WEEKDAYS.indexOf(parts.find((p) => p.type === "weekday")!.value);
  const hour = Number(parts.find((p) => p.type === "hour")!.value);
  return day * 24 + hour;
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

/**
 * Current day/hour in the studio's time zone, or null during SSR and hydration.
 * The studio is in San Diego, so "open now" should reflect studio time, not the visitor's.
 */
export function useStudioNow() {
  const v = useSyncExternalStore(subscribe, snapshot, () => null);
  if (v === null) return null;
  const day = Math.floor(v / 24);
  const hour = v % 24;
  const today = hours[day];
  const isOpen = today.close !== null && hour >= OPEN_HOUR && hour < today.close;
  return { day, hour, today, isOpen };
}
