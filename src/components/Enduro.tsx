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
      className="mx-auto max-w-[1360px] px-6 lg:px-8 py-16 lg:py-28"
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        {/* Left Info */}
        <div>
          <div className="inline-flex px-3 py-1 rounded-full bg-[#111] text-white font-label text-[10px] tracking-widest uppercase">
            Himalayan Enduro • Since 2014
          </div>

          <h2 className="font-display text-[56px] lg:text-[84px] leading-[0.85] mt-6">
            RIDE THE
            <br />
            HIMALAYAS.
            <br />
            <span className="text-[#FF4D1C]">DEFY THE</span>
            <br />
            LIMITS.
            <br />
            BE
            <br />
            UNSTOPPABLE.
          </h2>

          <p className="font-body text-[15px] leading-7 opacity-70 mt-6 max-w-[420px]">
            Returns to Nagarkot Hills, Kathmandu. Epic Enduro Race amid pristine
            Himalayan trails. All levels welcome — from weekend warriors to pro
            lines. We build, we race, we host.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-black/20" />
            <span className="font-label text-[11px] tracking-widest uppercase opacity-60">
              Nagarkot • Kathmandu Valley • 2100M
            </span>
          </div>
        </div>

        {/* Right Videos & Stats */}
        <div className="space-y-4">
          <div className="rounded-[20px] overflow-hidden bg-black aspect-video relative">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/QkF_nTzzC6Q"
              title="Gnarly MTB 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="rounded-[20px] overflow-hidden bg-black aspect-video relative">
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
                className="rounded-2xl border border-black/10 p-4"
              >
                <div className="font-display text-[18px] leading-none">
                  {item.k}
                </div>
                <div className="font-label text-[10px] tracking-widest uppercase opacity-50 mt-1">
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
