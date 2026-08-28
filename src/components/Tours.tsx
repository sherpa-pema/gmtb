"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Tour } from "@/types";

const TOURS: Tour[] = [
  {
    name: "ENDURO THIN AIR",
    sub: "Lower Mustang",
    desc: "Deep into Lower Mustang, rugged trails shaped by wind, rock and ancient trade paths.",
    accent: "#FF4D1C",
    meta: "6 DAYS • 4200M MAX • SHUTTLE + FLIGHT",
    bullets: [
      "Lubra & Smooth Criminal trails",
      "Rebel's Hideout & Black Yak above 3500m",
    ],
  },
  {
    name: "EVEREST EXPRESS",
    sub: "Khumbu Region",
    desc: "Sherpa culture and trails beneath the highest peaks on earth. Raw, spiritual, physical.",
    accent: "#8B7355",
    meta: "8 DAYS • EVEREST REGION • TEA HOUSE",
    bullets: [
      "Beneath Ama Dablam & Everest",
      "Ancient monasteries & suspension bridges",
    ],
  },
  {
    name: "UPPER MUSTANG E-BIKE",
    sub: "Forbidden Kingdom",
    desc: "Canyons, caves and walled cities. E-bikes make the altitude accessible without losing the wild.",
    accent: "#FAF9F6",
    meta: "7 DAYS • E-MTB • 3800M+ AVG",
    bullets: [
      "Lo Manthang walled city",
      "E-power for sustained high desert",
    ],
  },
  {
    name: "MOTO MUSTANG",
    sub: "Kathmandu to Mustang",
    desc: "Two wheels, motor assist. Kathmandu, Pokhara, and Mustang diversity in one sweeping traverse.",
    accent: "#FF4D1C",
    meta: "10 DAYS • MOTO + MTB COMBO",
    bullets: [
      "Most diverse Nepal traverse",
      "Road, gravel, singletrack blend",
    ],
  },
];

export default function Tours() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tours"
      className="bg-[#0F0F0F] text-[#FAF9F6] rounded-t-[28px] lg:rounded-t-[36px] -mt-6 relative z-10"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 pt-16 lg:pt-24 pb-16">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="font-label text-[11px] tracking-[0.24em] uppercase text-[#FF4D1C] mb-4">
              Signature Expeditions • 2025/26 Season
            </div>
            <h2 className="font-display text-[52px] lg:text-[88px] leading-[0.85]">
              CHOOSE YOUR
              <br />
              <span className="text-white/30">LINE</span>
            </h2>
          </div>
          <div className="font-body text-[14px] leading-6 text-white/50 max-w-[380px] pt-2">
            Four distinct ways to ride Nepal. All fully supported, all deeply
            local. From thin-air enduro to e-powered exploration.
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 lg:gap-5">
          {TOURS.map((tour) => (
            <div
              key={tour.name}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#151515] hover:bg-[#1A1A1A] transition-colors p-7 lg:p-9 flex flex-col min-h-[380px]"
            >
              {/* Glow Blob */}
              <div
                className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full blur-[80px] opacity-[0.12] pointer-events-none"
                style={{ background: tour.accent }}
              />

              <div className="flex items-start justify-between">
                <div>
                  <div className="font-label text-[10px] tracking-[0.22em] uppercase text-white/40">
                    {tour.sub}
                  </div>
                  <h3 className="font-display text-[36px] lg:text-[42px] leading-[0.9] mt-1">
                    {tour.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/15 grid place-items-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="font-body text-[14px] leading-6 text-white/60 mt-4 max-w-[360px]">
                {tour.desc}
              </p>

              <div className="mt-6 space-y-2">
                {tour.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 font-label text-[11px] tracking-wide text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF4D1C]" />{" "}
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="font-label text-[10px] tracking-[0.18em] uppercase text-white/30">
                  {tour.meta}
                </span>
                <button
                  onClick={() => scrollTo("contact")}
                  className="font-label text-[11px] tracking-widest uppercase text-white hover:text-[#FF4D1C] transition"
                >
                  Request Details →
                </button>
              </div>

              <div className="absolute bottom-0 left-7 right-7 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
