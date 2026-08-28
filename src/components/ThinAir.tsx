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
    <section id="thin-air" className="bg-[#0F0F0F] text-white">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 rounded-[28px] bg-[#FAF9F6] text-[#111] p-6 lg:p-10">
          {/* Left Dark Highlight Box */}
          <div className="rounded-[20px] bg-[#111] text-[#FAF9F6] p-7 lg:p-10 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-[#FF4D1C]/20 blur-[60px]" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-8">
                <Mountain className="w-4 h-4 text-[#FF4D1C]" />
                <span className="font-label text-[11px] tracking-[0.22em] uppercase text-white/60">
                  Lower Mustang // Thin Air
                </span>
              </div>

              <h3 className="font-display text-[44px] lg:text-[60px] leading-[0.85]">
                DESCENT
                <br />
                FROM THE
                <br />
                <span className="text-[#FF4D1C]">SKY</span>
              </h3>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {THIN_AIR_STATS.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.k}
                      className="border-t border-white/10 pt-4"
                    >
                      <div className="flex items-center gap-1.5 opacity-40 mb-2">
                        <IconComp className="w-3 h-3" />
                        <span className="font-label text-[9px] tracking-widest uppercase">
                          {item.l}
                        </span>
                      </div>
                      <div className="font-display text-[26px] leading-none">
                        {item.k}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="p-2 lg:p-4 flex flex-col justify-center">
            <h4 className="font-display text-[28px] leading-none">
              TRIP HIGHLIGHTS
            </h4>

            <div className="mt-6 space-y-4">
              {HIGHLIGHTS.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <span className="mt-[6px] w-5 h-5 rounded-full bg-[#111] text-white grid place-items-center shrink-0 text-[10px] font-label">
                    {index + 1}
                  </span>
                  <span className="font-body text-[13.5px] leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-8 h-12 px-7 rounded-full bg-[#FF4D1C] text-white font-label text-[11px] tracking-widest uppercase hover:bg-[#111] transition w-fit"
            >
              Reserve Thin Air Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
