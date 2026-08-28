import React from "react";
import { EnduroStat } from "@/types";

const ENDURO_STATS: EnduroStat[] = [
  { k: "5 STAGES", v: "Timed Enduro" },
  { k: "ALL LEVELS", v: "Categories" },
  { k: "LOCAL BUILT", v: "Handcut Trail" },
];

export default function Enduro() {
  return (
    <section
      id="enduro"
      className="mx-auto max-w-[1240px] px-6 lg:px-8 py-16 sm:py-24 border-t border-zinc-200/70"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        {/* Left Info */}
        <div>
          <div className="inline-flex px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-700 font-mono text-[10.5px] tracking-widest uppercase font-medium">
            Himalayan Enduro • Since 2014
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-zinc-950 font-normal tracking-tight mt-6">
            Ride the Himalayas.
            <br />
            <span className="italic text-[#FF5A26]">Defy the limits.</span>
            <br />
            Be unstoppable.
          </h2>

          <p className="font-sans text-[14.5px] leading-relaxed text-zinc-600 mt-6 max-w-[420px]">
            Returns to Nagarkot Hills, Kathmandu. Epic Enduro Race amid pristine
            Himalayan trails. All levels welcome — from weekend warriors to pro
            lines. We build, we race, we host.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-zinc-300" />
            <span className="font-mono text-[10.5px] tracking-widest uppercase text-zinc-400">
              Nagarkot • Kathmandu Valley • 2100M
            </span>
          </div>
        </div>

        {/* Right Videos & Stats */}
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden bg-black aspect-video relative border border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/QkF_nTzzC6Q"
              title="Gnarly MTB 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="rounded-2xl overflow-hidden bg-black aspect-video relative border border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/KmO-OdhJSOE"
              title="Gnarly MTB 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            {ENDURO_STATS.map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-zinc-200/80 bg-white p-4 text-center sm:text-left"
              >
                <div className="font-sans font-bold text-base sm:text-lg text-zinc-950 tracking-tight leading-none">
                  {item.k}
                </div>
                <div className="font-mono text-[10px] tracking-wider uppercase text-zinc-400 mt-1.5 font-medium">
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

