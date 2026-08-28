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
    <section id="team" className="bg-[#FAF9F6] border-t border-black/5">
      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-end justify-between gap-6 mb-12">
          <h2 className="font-display text-[48px] lg:text-[72px] leading-[0.9]">
            LOCAL RIDERS.
            <br />
            EXPERT GUIDES.
          </h2>
          <div className="hidden lg:block font-body text-[13px] opacity-60 max-w-[320px] leading-6">
            Rider-owned, not outsourced. We live here, we build here, we race
            here. When you ride with GNARLY, you ride with family.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {TEAM_MEMBERS.map((member) => {
            const initials = `${member.name.split(" ")[0][0]}${
              member.name.split(" ")[1]?.[0] || ""
            }`;

            return (
              <div
                key={member.name}
                className="group rounded-[24px] bg-white border border-black/5 p-7 lg:p-8 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.18)] transition-all"
              >
                <div className="w-full aspect-[4/3] rounded-[16px] bg-[#0F0F0F] relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/40 via-transparent to-[#FF4D1C]/20" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-[64px] leading-none text-white/10">
                      {initials}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-[10px] font-label tracking-widest uppercase text-white">
                      {member.since}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#FF4D1C] grid place-items-center text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-[24px] leading-none">
                  {member.name.toUpperCase()}
                </h3>
                <div className="font-label text-[10px] tracking-[0.18em] uppercase opacity-50 mt-1">
                  {member.role}
                </div>
                <p className="font-body text-[13px] leading-6 opacity-60 mt-4">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
