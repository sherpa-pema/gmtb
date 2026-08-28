import React from "react";
import { Mail } from "lucide-react";

const SKILL_TAGS = [
  "Cornering",
  "Braking",
  "Drops",
  "Line Choice",
  "Enduro Race Craft",
  "Altitude Riding",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1240px] px-6 lg:px-8 py-12 sm:py-20">
      <div className="rounded-[28px] border border-zinc-200/80 bg-zinc-950 text-white overflow-hidden grid lg:grid-cols-[1.2fr_0.8fr] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        {/* Left Side */}
        <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#FF5A26] font-medium">
              G MTB Skills • Coaching
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-white font-normal mt-4 tracking-tight">
              Tired of feeling
              <br />
              <span className="italic text-zinc-400">unsure on your bike?</span>
            </h2>
            <p className="font-sans text-[14.5px] leading-relaxed text-white/70 mt-5 max-w-[440px]">
              It&apos;s time to invest in yourself. From fundamentals to big mountain
              technique — cornering, drops, thin-air management. Coaches for all
              levels, built by racers who teach kids daily.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
            {SKILL_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-white/15 bg-white/5 font-mono text-[10.5px] tracking-wider uppercase text-zinc-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#FCFCFC] text-zinc-950 p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-200/60">
          <div>
            <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-zinc-400 font-medium mb-1">
              Private & Groups
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal">
              Book a Session
            </h3>
            <p className="font-sans text-[13.5px] leading-relaxed text-zinc-500 mt-3">
              Private or small group. Kathmandu Valley, Nagarkot, or on-tour
              clinics. We bring cones, you bring curiosity.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-200/80 bg-white">
              <div className="w-9 h-9 rounded-full bg-zinc-100 text-zinc-950 grid place-items-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] tracking-wider uppercase text-zinc-400 font-medium">
                  Email Direct
                </div>
                <a
                  href="mailto:gmtbskills@gmail.com"
                  className="font-sans text-[13px] font-semibold text-zinc-950 hover:text-[#FF4D1C] transition-colors truncate block"
                >
                  gmtbskills@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-100/80 border border-zinc-200/70 p-4 flex items-center justify-between">
              <div className="font-mono text-[11px] tracking-wider uppercase text-zinc-700 font-medium">
                Next Camps: Nagarkot
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600/10 text-emerald-700 border border-emerald-600/20 text-[10px] font-mono tracking-wider uppercase font-semibold">
                Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

