import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-14 lg:py-16 flex flex-col lg:flex-row justify-between gap-12">
        <div className="max-w-[340px]">
          <div className="flex items-center gap-2.5 text-white">
            <span className="font-sans font-bold text-lg tracking-tight">GNARLY</span>
            <span className="h-3 w-[1px] bg-zinc-700" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
              MTB NEPAL
            </span>
          </div>
          <div className="font-sans text-[13px] leading-relaxed text-zinc-400 mt-3.5">
            Local riders, expert guides, Himalayan big mountain riding. Premium
            MTB expeditions in Lower Mustang, Upper Mustang & Everest region.
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 font-sans text-[13px]">
          <div className="space-y-3">
            <div className="font-mono text-[10.5px] tracking-wider uppercase text-white font-semibold">
              Tours
            </div>
            <div className="space-y-2 text-zinc-400">
              <div className="hover:text-white transition-colors cursor-default">Enduro Thin Air</div>
              <div className="hover:text-white transition-colors cursor-default">Everest Express</div>
              <div className="hover:text-white transition-colors cursor-default">Upper Mustang E-Bike</div>
              <div className="hover:text-white transition-colors cursor-default">Moto Mustang</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-[10.5px] tracking-wider uppercase text-white font-semibold">
              Connect
            </div>
            <div className="space-y-2 text-zinc-400">
              <div>
                <a
                  href="mailto:gmtbskills@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  gmtbskills@gmail.com
                </a>
              </div>
              <div>Kathmandu, Nepal</div>
              <div>MTB Yard Shop</div>
            </div>
          </div>

          <div className="space-y-3 col-span-2 sm:col-span-1">
            <div className="font-mono text-[10.5px] tracking-wider uppercase text-white font-semibold">
              Race
            </div>
            <div className="space-y-2 text-zinc-400">
              <div>Himalayan Enduro</div>
              <div>Nagarkot Hills</div>
              <div>All Levels</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 py-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-wider uppercase text-zinc-400">
        <span>Copyright © 2025 GNARLY MTB Nepal. All Rights Reserved.</span>
        <span className="hidden sm:inline text-zinc-400">
          Built for altitude • Designed for flow
        </span>
      </div>
    </footer>
  );
}

