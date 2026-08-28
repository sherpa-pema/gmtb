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
    <section className="mx-auto max-w-[1360px] px-6 lg:px-8 pb-20 lg:pb-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <h2 className="font-display text-[48px] lg:text-[80px] leading-[0.9] tracking-[-0.01em]">
          WHY RIDE
          <br />
          WITH US
        </h2>
        <p className="font-body text-[14px] leading-6 opacity-60 max-w-[360px] pb-2">
          We are not an agency. We are local riders who grew up on these trails.
          GNARLY PVT. LTD. is a rider-owned expedition house.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
        {VALUE_PROPS.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative bg-white border border-black/[0.07] rounded-[20px] p-6 lg:p-7 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#111] text-white grid place-items-center mb-5 group-hover:bg-[#FF4D1C] transition-colors">
                <IconComponent className="w-4 h-4" />
              </div>
              <h3 className="font-display text-[22px] tracking-wide leading-none mb-2">
                {item.title.toUpperCase()}
              </h3>
              <p className="font-body text-[13px] leading-[1.6] opacity-60">
                {item.desc}
              </p>
              <div className="mt-6 font-label text-[10px] tracking-widest uppercase opacity-20">
                0{index + 1} / 05
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
