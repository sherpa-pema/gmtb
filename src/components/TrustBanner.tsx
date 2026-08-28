import React from "react";

export default function TrustBanner() {
  return (
    <section className="mx-auto max-w-[1360px] px-6 lg:px-8 py-8 lg:py-10">
      <div className="flex flex-wrap items-center justify-between gap-6 border-y border-black/10 py-5">
        <div className="font-label text-[10px] tracking-[0.22em] uppercase opacity-40">
          Trusted by riders from 30+ countries • UNESCO route partners
        </div>
        <div className="flex items-center gap-6 lg:gap-10 font-label text-[11px] tracking-[0.18em] uppercase opacity-50">
          <span className="flex items-center gap-2">
            <span className="w-5 h-[1px] bg-black/20" /> Certified Guides
          </span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-[1px] bg-black/20" /> Fully Supported
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <span className="w-5 h-[1px] bg-black/20" /> Shuttle & Flights Incl.
          </span>
        </div>
      </div>
    </section>
  );
}
