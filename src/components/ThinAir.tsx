"use client";

import React from "react";
import { Mountain, Wind, Timer } from "lucide-react";
import { ThinAirStat } from "@/types";

const THIN_AIR_STATS: ThinAirStat[] = [
  { k: "2800M", l: "FLIGHT TO JOMSOM", icon: Wind },
  { k: "4200→2800", l: "VERT DROP", icon: Mountain },
  { k: "4000M", l: "CHASING CAPRA", icon: Timer },
];

const HIGHLIGHTS = [
  "Fully supported shuttle & internal flight to Jomsom 2800m",
  "Massive descent 4200m → 2800m on pristine natural trail",
  "Marpha village — famous apple pie & apple brandy stop",
  "Chasing Capra — wild Himalayan goat encounter at 4000m",
  "Signature trails: Lubra & Smooth Criminal",
  "Rebel's Hideout and Black Yak Trail above 3500m",
  "Monasteries, desert-like surreal landscapes, tallest peaks",
  "Locals know the trails — hidden gems only we ride",
];

export default function ThinAir() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="thin-air" className="py-12 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 rounded-[28px] border border-zinc-200/80 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          {/* Left Dark Highlight Card */}
          <div className="rounded-[22px] bg-zinc-950 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border border-zinc-800">
            {/* Subtle glow */}
            <div className="absolute -right-16 -top-16 w-[300px] h-[300px] rounded-full bg-[#FF4D1C]/15 blur-[60px] pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <Mountain className="w-4 h-4 text-[#FF4D1C]" />
                <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
                  Lower Mustang // Thin Air
                </span>
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.05] text-white font-normal">
                Descent
                <br />
                from the
                <br />
                <span className="italic text-[#FF5A26]">Sky</span>
              </h3>
            </div>

            {/* Stats Row */}
            <div className="mt-12 pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4">
              {THIN_AIR_STATS.map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.k}>
                    <div className="flex items-center gap-1.5 text-zinc-400 mb-1.5">
                      <IconComp className="w-3 h-3 text-[#FF4D1C]" />
                      <span className="font-mono text-[9px] tracking-wider uppercase">
                        {item.l}
                      </span>
                    </div>
                    <div className="font-sans font-bold text-xl sm:text-2xl text-white tracking-tight leading-none">
                      {item.k}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="flex flex-col justify-between py-2 sm:py-4">
            <div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400 font-medium mb-1">
                Trip Highlights
              </div>
              <h4 className="font-serif text-3xl text-zinc-950 font-normal">
                The Thin Air Experience
              </h4>

              <div className="mt-6 space-y-3.5">
                {HIGHLIGHTS.map((item, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-600 grid place-items-center shrink-0 font-mono text-[10.5px] font-medium">
                      {index + 1}
                    </span>
                    <span className="font-sans text-[13.5px] leading-relaxed text-zinc-600 font-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollTo("contact")}
                className="h-11 px-7 rounded-full bg-zinc-950 text-white font-sans text-xs font-semibold tracking-wide hover:bg-zinc-800 transition-all shadow-sm active:scale-[0.98]"
              >
                Reserve Thin Air Spot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
