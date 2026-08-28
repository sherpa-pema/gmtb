import React from "react";
import { ArrowUpRight } from "lucide-react";
import { TeamMember } from "@/types";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Shyam G Limbu",
    role: "Lead MTB Guide • Founder",
    since: "Since 2009",
    bio: "Owner/founder of GNARLY PVT. LTD. Racing enthusiast, kids coach, enduro race organizer. Knows every hidden line from Kathmandu to Mustang.",
  },
  {
    name: "Prachit Thapa Magar",
    role: "Certified Guide • Trail Mechanic",
    since: "International Podiums",
    bio: "Young, energetic, race-winning rider. Mustang specialist. If something breaks at 4000m, Prachit fixes it.",
  },
  {
    name: "Sumit Shrestha",
    role: "Rider / Organizer / Guide",
    since: "10 Years Deep",
    bio: "Almost a decade on trail. Runs MTB Yard bike shop, organizes logistics, and keeps the stoke high when the air gets thin.",
  },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1240px] px-6 lg:px-8 py-16 sm:py-24 border-t border-zinc-200/70">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400 font-medium mb-3">
            Our Crew
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-zinc-950 font-normal tracking-tight">
            Local Riders. <span className="italic text-zinc-400">Expert Guides.</span>
          </h2>
        </div>
        <div className="font-sans text-[14px] text-zinc-500 max-w-[340px] leading-relaxed">
          Rider-owned, not outsourced. We live here, we build here, we race
          here. When you ride with GNARLY, you ride with family.
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {TEAM_MEMBERS.map((member) => {
          const initials = `${member.name.split(" ")[0][0]}${
            member.name.split(" ")[1]?.[0] || ""
          }`;

          return (
            <div
              key={member.name}
              className="group rounded-2xl bg-white border border-zinc-200/80 p-6 sm:p-7 hover:border-zinc-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-[4/3] rounded-xl bg-zinc-900 relative overflow-hidden mb-5 flex items-center justify-center border border-zinc-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="font-serif text-5xl text-white/10 select-none">
                    {initials}
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider uppercase text-white font-medium">
                      {member.since}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white grid place-items-center group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-zinc-950 font-normal">
                  {member.name}
                </h3>
                <div className="font-mono text-[10.5px] tracking-wider uppercase text-zinc-400 font-medium mt-1">
                  {member.role}
                </div>
                <p className="font-sans text-[13.5px] leading-relaxed text-zinc-600 mt-3.5">
                  {member.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

