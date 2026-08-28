import React from "react";

export default function TrustBanner() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 lg:px-8 py-8 lg:py-10">
      <div className="flex flex-wrap items-center justify-between gap-6 border-y border-zinc-200/70 py-4 lg:py-5">
        <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-zinc-500 font-medium">
          Trusted by riders from 30+ countries • UNESCO route partners
        </div>
        <div className="flex items-center gap-6 lg:gap-8 font-mono text-[11px] tracking-[0.14em] uppercase text-zinc-600">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" /> Certified Guides
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" /> Fully Supported
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" /> Shuttle & Flights Incl.
          </span>
        </div>
      </div>
    </section>
  );
}

