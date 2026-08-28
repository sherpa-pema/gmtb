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
    <section
      id="skills"
      className="mx-auto max-w-[1360px] px-3 lg:px-3 pb-3"
    >
      <div className="rounded-[28px] lg:rounded-[32px] bg-[#111] text-white overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Side */}
        <div className="p-8 lg:p-12">
          <div className="font-label text-[11px] tracking-[0.24em] uppercase text-[#FF4D1C]">
            G MTB Skills • Coaching
          </div>
          <h2 className="font-display text-[42px] lg:text-[64px] leading-[0.9] mt-4">
            TIRED OF
            <br />
            FEELING
            <br />
            UNSURE ON
            <br />
            YOUR BIKE?
          </h2>
          <p className="font-body text-[15px] leading-7 text-white/60 mt-6 max-w-[420px]">
            It&apos;s time to invest in yourself. From fundamentals to big mountain
            technique — cornering, drops, thin-air management. Coaches for all
            levels, built by racers who teach kids daily.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {SKILL_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-white/15 font-label text-[10px] tracking-widest uppercase text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#FAF9F6] text-[#111] m-2 lg:m-3 rounded-[20px] p-7 lg:p-9 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-[28px] leading-none">
              BOOK A SESSION
            </h3>
            <p className="font-body text-[13px] leading-6 opacity-60 mt-3">
              Private or small group. Kathmandu Valley, Nagarkot, or on-tour
              clinics. We bring cones, you bring curiosity.
            </p>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3 text-[13px] font-body">
              <div className="w-9 h-9 rounded-full bg-[#111] text-white grid place-items-center">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="font-label text-[10px] tracking-widest uppercase opacity-50">
                  Email Direct
                </div>
                <a
                  href="mailto:gmtbskills@gmail.com"
                  className="font-medium underline decoration-[#FF4D1C] decoration-2 underline-offset-4 hover:text-[#FF4D1C] transition"
                >
                  gmtbskills@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#111] text-white p-4 flex items-center justify-between">
              <div className="font-label text-[11px] tracking-widest uppercase">
                Next Camps: Nagarkot
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#FF4D1C] text-[10px] font-label tracking-widest uppercase">
                Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
