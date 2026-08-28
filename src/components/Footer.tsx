import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#0F0F0F] text-white/60">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 py-12 flex flex-col lg:flex-row justify-between gap-8">
        <div>
          <div className="flex items-baseline gap-2 text-white">
            <span className="font-display text-[24px]">GNARLY</span>
            <span className="font-label text-[11px] tracking-[0.22em] opacity-60">
              MTB NEPAL
            </span>
          </div>
          <div className="font-body text-[13px] leading-6 max-w-[320px] mt-3 opacity-60">
            Local riders, expert guides, Himalayan big mountain riding. Premium
            MTB expeditions in Lower Mustang, Upper Mustang & Everest region.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 font-label text-[11px]">
          <div className="space-y-3">
            <div className="text-white tracking-widest uppercase">Tours</div>
            <div className="space-y-2 opacity-60">
              <div>Enduro Thin Air</div>
              <div>Everest Express</div>
              <div>Upper Mustang E-Bike</div>
              <div>Moto Mustang</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-white tracking-widest uppercase">Connect</div>
            <div className="space-y-2 opacity-60">
              <div>gmtbskills@gmail.com</div>
              <div>Kathmandu, Nepal</div>
              <div>MTB Yard Shop</div>
            </div>
          </div>

          <div className="space-y-3 hidden lg:block">
            <div className="text-white tracking-widest uppercase">Race</div>
            <div className="space-y-2 opacity-60">
              <div>Himalayan Enduro</div>
              <div>Nagarkot Hills</div>
              <div>All Levels</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 pb-8 flex items-center justify-between font-label text-[10px] tracking-widest uppercase opacity-30">
        <span>Copyright © 2025 GNARLY MTB Nepal. All Rights Reserved.</span>
        <span className="hidden md:inline">
          Built for altitude • Designed for flow
        </span>
      </div>
    </footer>
  );
}
