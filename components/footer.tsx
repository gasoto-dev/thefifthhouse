import Image from "next/image";
import Link from "next/link";
import { links, nav, site } from "@/lib/site";

const linkClass = "py-1 text-[15px] text-hairline no-underline hover:text-white";

export function Footer() {
  return (
    <footer className="bg-olive text-hairline">
      <div className="wrap flex flex-wrap items-start justify-between gap-8 pb-9 pt-12">
        <div className="flex items-center gap-[18px]">
          <Image
            src="/images/logo-round.png"
            alt=""
            width={84}
            height={84}
            className="size-[84px] rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="font-display text-xl text-surface">{site.name}</span>
            <span className="text-[13px] uppercase tracking-[0.2em] text-blush">{site.tagline}</span>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2.5">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={linkClass}>
              {n.label}
            </Link>
          ))}
          <Link href="/join" className={linkClass}>
            Contact us
          </Link>
          {links.policies && (
            <a href={links.policies} className={linkClass}>
              Studio Policies &amp; Forms
            </a>
          )}
        </nav>
      </div>
      <div className="wrap border-t border-white/12 pb-7 pt-[18px] text-[13px] text-[#B9BEB1]">
        © {new Date().getFullYear()} {site.name} · San Diego, CA
      </div>
    </footer>
  );
}
