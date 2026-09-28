import { site } from "@/lib/site";
import { HoursList } from "./hours-list";

export function LocationBand() {
  return (
    <section className="bg-panel">
      <div className="wrap grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(28px,4vw,56px)] py-[clamp(48px,6vw,80px)]">
        <div className="flex flex-col gap-3.5">
          <h2 className="display text-[32px]">Visit the House</h2>
          <address className="flex flex-col gap-1 text-[17px] not-italic leading-[1.55]">
            <span>{site.legalName}</span>
            <span>
              {site.street}
              <br />
              {site.cityLong}
            </span>
          </address>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-base">
            <a href={site.tel}>{site.phone}</a>
            <a href={`mailto:${site.email}`} className="break-all">
              {site.email}
            </a>
          </div>
          <a href={site.directions} target="_blank" rel="noopener" className="btn btn-sm btn-primary mt-1.5 self-start">
            Get directions
          </a>
        </div>
        <HoursList />
      </div>
    </section>
  );
}
