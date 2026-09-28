"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-[rgba(242,244,239,0.94)] backdrop-blur-[8px]">
      <div className="wrap flex items-center justify-between gap-6 py-3.5">
        <Link href="/" aria-label="The Fifth House home" className="flex">
          <Image
            src="/images/logo-wordmark.png"
            alt="The Fifth House — Connect, Move, Create"
            width={2400}
            height={900}
            priority
            sizes="200px"
            className="-mx-3.5 -my-1.5 block h-[clamp(52px,6vw,68px)] w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 nav:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`border-b-2 px-3.5 py-2.5 text-[15px] font-medium uppercase tracking-[0.06em] no-underline transition-colors hover:text-accent ${
                isActive(n.href) ? "border-accent text-accent" : "border-transparent text-olive"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3.5 nav:flex">
          <a href={site.tel} className="whitespace-nowrap text-[15px] text-olive no-underline">
            {site.phone}
          </a>
          <Link href="/join" className="btn btn-sm btn-primary">
            Let’s Connect
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="min-h-11 rounded-md border border-sage px-3.5 py-2.5 text-sm uppercase tracking-[0.08em] text-olive nav:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="flex flex-col border-t border-hairline px-[clamp(20px,4vw,48px)] pb-5 pt-2 nav:hidden"
        >
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`border-b border-divider py-4 text-[17px] uppercase tracking-[0.05em] no-underline ${
                isActive(n.href) ? "text-accent" : "text-olive"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/join" className="btn btn-primary mt-4 p-[15px]">
            Let’s Connect
          </Link>
        </div>
      )}
    </header>
  );
}
