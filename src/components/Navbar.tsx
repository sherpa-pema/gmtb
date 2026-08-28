"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { l: "Tours", id: "tours" },
  { l: "The Thin Air", id: "thin-air" },
  { l: "Enduro", id: "enduro" },
  { l: "Team", id: "team" },
  { l: "Skills", id: "skills" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(""), 2400);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    setActiveSection(id);
    setToastMessage(id);
    try {
      history.replaceState(null, "", "#" + id);
    } catch {}
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("data-active", "true");
      setTimeout(() => el.removeAttribute("data-active"), 1200);
    }
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Toast Notification */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed bottom-6 left-1/2 z-[200] -translate-x-1/2"
      >
        {toastMessage && (
          <div className="rounded-full bg-[#111] text-white px-5 py-2.5 font-label text-[11px] tracking-[0.18em] uppercase shadow-[0_12px_40px_rgba(0,0,0,0.25)] border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] inline-block" />
            Viewing: {toastMessage.replace(/-/g, " ")}
          </div>
        )}
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-[100] border-b border-black/5 bg-[#FAF9F6]/85 backdrop-blur-[16px]">
        <div className="mx-auto max-w-[1360px] px-6 lg:px-10 h-[76px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div
              className="flex items-baseline gap-[6px] cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="font-display text-[28px] leading-none tracking-[0.02em]">
                GNARLY
              </span>
              <span className="font-label text-[11px] tracking-[0.22em] font-medium opacity-60 -translate-y-[2px]">
                MTB NEPAL
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-9">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  data-testid={`nav-${item.id}`}
                  className={`font-label text-[11px] tracking-[0.18em] uppercase transition-all relative group ${
                    activeSection === item.id
                      ? "opacity-100 text-[#111]"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.l}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#FF4D1C] transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex h-[40px] px-6 bg-[#111] text-white font-label text-[11px] tracking-[0.16em] uppercase rounded-full hover:bg-[#FF4D1C] transition-colors items-center gap-2 group"
            >
              Book Your Ride{" "}
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full border border-black/10 grid place-items-center"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-black/5 bg-[#FAF9F6] px-6 py-8 space-y-6">
            {["tours", "thin-air", "enduro", "team", "skills"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                data-testid={`mnav-${id}`}
                className={`block font-display text-3xl uppercase tracking-wide text-left w-full transition-colors ${
                  activeSection === id ? "text-[#FF4D1C]" : "text-[#111]"
                }`}
              >
                {id.replace("-", " ")}{" "}
                {activeSection === id && (
                  <span className="font-label text-[10px] tracking-widest ml-2 align-middle opacity-60">
                    • viewing
                  </span>
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full h-14 bg-[#111] text-white rounded-full font-label text-xs tracking-widest uppercase"
            >
              Book Your Ride
            </button>
          </div>
        )}
      </header>
    </>
  );
}
