"use client";

import React from "react";
import { ArrowUpRight, Compass, Play } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto max-w-[1360px] px-3 lg:px-3 pt-3">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[36px] bg-[#0F0F0F] min-h-[88vh] lg:min-h-[84vh] flex">
        {/* Background Image */}
        <img
          src="/images/hero.webp"
          alt="Rider in Mustang"
          className="absolute inset-0 w-full h-full object-cover object-[65%_40%] lg:object-center opacity-[0.85]"
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10 lg:via-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-6 px-6 lg:px-[64px] py-12 lg:py-16 items-end">
          <div className="pb-2 lg:pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] animate-pulse" />
              <span className="font-label text-[10px] tracking-[0.22em] uppercase text-white/80">
                EST. 2009 • KATHMANDU • MUSTANG • KHUMBU
              </span>
            </div>

            <h1 className="font-display text-white leading-[0.85] tracking-[-0.01em]">
              <span className="block text-[18px] lg:text-[22px] font-body font-medium tracking-[0.3em] opacity-60 mb-3 lg:mb-5">
                NAMASTE!
              </span>
              <span className="block text-[56px] sm:text-[72px] lg:text-[112px]">
                MOUNTAIN
              </span>
              <span className="block text-[56px] sm:text-[72px] lg:text-[112px] -mt-2 lg:-mt-4">
                BIKING IN THE
              </span>
              <span className="block text-[56px] sm:text-[72px] lg:text-[112px] -mt-2 lg:-mt-4 text-[#FF4D1C]">
                MIGHTY
              </span>
              <span className="block text-[56px] sm:text-[72px] lg:text-[112px] -mt-2 lg:-mt-4">
                HIMALAYAS
              </span>
            </h1>

            {/* Mobile Actions */}
            <div className="mt-8 flex gap-3 lg:hidden">
              <button
                onClick={() => scrollTo("tours")}
                className="h-12 px-6 bg-white text-black rounded-full font-label text-[11px] tracking-widest uppercase"
              >
                Explore Tours
              </button>
              <button
                onClick={() => scrollTo("thin-air")}
                className="h-12 w-12 grid place-items-center bg-white/10 border border-white/20 rounded-full backdrop-blur text-white"
                aria-label="Watch Film"
              >
                <Play className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>

          <div className="lg:pb-6 lg:pl-10">
            <p className="font-body text-[15px] lg:text-[16px] leading-[1.7] text-white/75 max-w-[460px]">
              Imagine mountain biking in the Himalayas—closer to nature, one of a
              kind, amidst the Mighty Himalayas! You&apos;ll feel so tiny, yet
              completely alive, as the full experience of Nepal&apos;s mountains
              unfolds around you.
            </p>
            <p className="mt-4 font-body text-[14px] leading-[1.6] text-white/50 max-w-[440px]">
              Pristine natural trails, ancient culture, celebrated Nepali
              hospitality. As local riders, we know the best trails and hidden
              gems.
            </p>

            {/* Desktop Actions */}
            <div className="mt-8 hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("tours")}
                className="h-[48px] px-8 bg-white text-black rounded-full font-label text-[11px] tracking-[0.18em] uppercase hover:bg-[#FAF9F6] transition flex items-center gap-2"
              >
                Explore Tours <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("thin-air")}
                className="h-[48px] px-7 rounded-full border border-white/20 text-white font-label text-[11px] tracking-[0.18em] uppercase backdrop-blur hover:bg-white/10 transition"
              >
                Watch Film
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 hidden lg:grid grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-[440px]">
              {[
                { k: "16+", v: "YEARS GUIDING" },
                { k: "4200M", v: "MAX ELEVATION" },
                { k: "100%", v: "LOCAL CREW" },
              ].map((item) => (
                <div key={item.k}>
                  <div className="font-display text-[28px] leading-none text-white">
                    {item.k}
                  </div>
                  <div className="font-label text-[9px] tracking-[0.18em] uppercase text-white/40 mt-1">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coordinates Tag */}
        <div className="absolute bottom-5 right-6 lg:bottom-7 lg:right-8 z-10 hidden sm:flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-white/40">
          <Compass className="w-3 h-3" /> LOWER MUSTANG • 28°50&apos;N 83°50&apos;E
        </div>
      </div>
    </section>
  );
}
