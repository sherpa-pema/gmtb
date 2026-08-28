import React from "react";
import { MapPinned, ShieldCheck, Flame, UserCog, Landmark } from "lucide-react";
import { ValueProp } from "@/types";

const VALUE_PROPS: ValueProp[] = [
  {
    icon: MapPinned,
    title: "Expertise",
    desc: "Certified guides who know Mustang & Khumbu like the back of their hand. Line choice, weather, tea house — dialed.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    desc: "Top-class holidays. Vetted stays, maintained shuttles, race-ready fleet. No compromises on safety or flow.",
  },
  {
    icon: Flame,
    title: "Passion",
    desc: "Born from racing. We organize the Himalayan Enduro, train kids, and build trail. This is life, not a side hustle.",
  },
  {
    icon: UserCog,
    title: "Personalized",
    desc: "Small groups, custom pacing. From first Himalayan trip to seasoned big-mountain hunters — tuned to you.",
  },
  {
    icon: Landmark,
    title: "Culture",
    desc: "Ancient monasteries, UNESCO sites, Marpha apple pie. Ride through living history with genuine local connection.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 lg:px-8 py-16 sm:py-24 border-t border-zinc-200/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400 font-medium mb-3">
            Rider-Owned • Est. 2009
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-zinc-950 font-normal tracking-tight">
            Why Ride <span className="italic text-zinc-400">With Us</span>
          </h2>
        </div>
        <p className="font-sans text-[14px] leading-relaxed text-zinc-500 max-w-[380px]">
          We are not an agency. We are local riders who grew up on these trails.
          GNARLY PVT. LTD. is a rider-owned expedition house.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
        {VALUE_PROPS.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-white border border-zinc-200/80 rounded-2xl p-6 hover:border-zinc-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200/70 text-zinc-800 grid place-items-center mb-5 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-colors">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-semibold text-[15px] text-zinc-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[13px] leading-relaxed text-zinc-500 mt-2">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                0{index + 1} / 05
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

