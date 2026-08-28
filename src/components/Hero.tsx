"use client";

import React from "react";
import { ArrowUpRight, Compass, Play } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <div className="relative overflow-hidden rounded-[28px] lg:rounded-[32px] bg-[#09090B] min-h-[82vh] lg:min-h-[78vh] flex flex-col justify-end border border-zinc-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
        {/* Background Image */}
        <img
          src="/images/hero.webp"
          alt="Rider in Mustang"
          className="absolute inset-0 w-full h-full object-cover object-[65%_35%] lg:object-center opacity-85 brightness-[0.85] contrast-[1.05]"
        />

        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        {/* Content Area */}
        <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 lg:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] animate-pulse" />
            <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-white/90 font-medium">
              EST. 2009 • KATHMANDU • MUSTANG • KHUMBU
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-end">
            {/* Left Headline */}
            <div>
              <div className="font-serif italic text-2xl lg:text-3xl text-white/80 font-normal mb-2 tracking-tight">
                Namaste!
              </div>

              <h1 className="font-sans text-white font-bold text-4xl sm:text-6xl lg:text-[72px] leading-[1.02] tracking-[-0.03em]">
                <span>Mountain</span>
                <br />
                <span>Biking in the</span>
                <br />
                <span className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-[84px] text-white tracking-tight">
                  Mighty <span className="text-[#FF5A26]">Himalayas</span>
                </span>
              </h1>

              {/* Mobile CTA */}
              <div className="mt-8 flex items-center gap-3 sm:hidden">
                <button
                  onClick={() => scrollTo("tours")}
                  className="h-11 px-6 bg-white text-zinc-950 rounded-full font-sans text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
                >
                  Explore Tours <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => scrollTo("thin-air")}
                  className="h-11 w-11 grid place-items-center bg-white/10 border border-white/20 rounded-full backdrop-blur text-white active:scale-95 transition-transform"
                  aria-label="Watch Film"
                >
                  <Play className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Descriptions & Stats */}
            <div className="lg:pl-6 space-y-6">
              <p className="font-sans text-[15px] lg:text-[16px] leading-relaxed text-white/85 font-normal">
                Imagine mountain biking in the Himalayas—closer to nature, one of a
                kind, amidst the Mighty Himalayas! You&apos;ll feel so tiny, yet
                completely alive, as the full experience of Nepal&apos;s mountains
                unfolds around you.
              </p>
              <p className="font-sans text-[13.5px] lg:text-[14px] leading-relaxed text-white/60">
                Pristine natural trails, ancient culture, celebrated Nepali
                hospitality. As local riders, we know the best trails and hidden
                gems.
              </p>

              {/* Desktop CTA */}
              <div className="pt-2 hidden sm:flex items-center gap-3.5">
                <button
                  onClick={() => scrollTo("tours")}
                  className="h-[44px] px-6 bg-white text-zinc-950 rounded-full font-sans text-[13px] font-semibold tracking-wide hover:bg-zinc-100 transition-all flex items-center gap-2 shadow-[0_2px_12px_rgba(0,0,0,0.15)] active:scale-[0.98]"
                >
                  Explore Tours <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("thin-air")}
                  className="h-[44px] px-6 rounded-full border border-white/25 text-white font-sans text-[13px] font-medium backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2 active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> Watch Film
                </button>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {[
                  { k: "16+", v: "YEARS GUIDING" },
                  { k: "4200M", v: "MAX ELEVATION" },
                  { k: "100%", v: "LOCAL CREW" },
                ].map((item) => (
                  <div key={item.k}>
                    <div className="font-sans font-bold text-2xl lg:text-3xl text-white tracking-tight leading-none">
                      {item.k}
                    </div>
                    <div className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-white/50 mt-1.5">
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coordinates Tag */}
          <div className="mt-8 pt-4 border-t border-white/10 hidden sm:flex items-center justify-end gap-2 font-mono text-[10px] tracking-widest uppercase text-white/40">
            <Compass className="w-3.5 h-3.5 text-[#FF4D1C]" /> LOWER MUSTANG • 28°50&apos;N 83°50&apos;E
          </div>
        </div>
      </div>
    </section>
  );
}

