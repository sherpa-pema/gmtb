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
    const timer = setTimeout(() => setToastMessage(""), 2200);
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
          <div className="rounded-full bg-zinc-950 text-white px-4 py-2 font-mono text-[11px] tracking-widest uppercase shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/10 flex items-center gap-2.5 animate-slideUp">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] inline-block animate-pulse" />
            <span>Viewing: {toastMessage.replace(/-/g, " ")}</span>
          </div>
        )}
      </div>

      {/* Header Bar */}
      <header className="sticky top-0 z-[100] border-b border-zinc-200/70 bg-[#FCFCFC]/80 backdrop-blur-md transition-colors">
        <div className="mx-auto max-w-[1240px] px-6 lg:px-8 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <span className="font-sans font-bold text-[19px] tracking-[-0.03em] text-zinc-950 group-hover:text-black transition-colors">
                GNARLY
              </span>
              <span className="h-3.5 w-[1px] bg-zinc-200" />
              <span className="font-mono text-[10px] tracking-[0.2em] font-medium text-zinc-400 uppercase">
                MTB NEPAL
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  data-testid={`nav-${item.id}`}
                  className={`font-sans text-[13px] font-medium transition-colors relative py-1 ${
                    activeSection === item.id
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-500 hover:text-zinc-950"
                  }`}
                >
                  {item.l}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-zinc-950 rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex h-[38px] px-5 bg-zinc-950 text-white font-sans text-[12px] font-medium rounded-full hover:bg-zinc-800 transition-all items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.1)] active:scale-[0.98]"
            >
              Book Your Ride
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full border border-zinc-200/80 bg-white grid place-items-center text-zinc-800 hover:bg-zinc-50 transition-colors"
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

        {/* Mobile Navigation Dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-200/70 bg-[#FCFCFC]/95 backdrop-blur-xl px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`mnav-${item.id}`}
                  className={`flex items-center justify-between text-left py-2 font-sans text-base transition-colors ${
                    activeSection === item.id
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  <span>{item.l}</span>
                  {activeSection === item.id && (
                    <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                      Viewing
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-200/60">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full h-11 bg-zinc-950 text-white rounded-full font-sans text-[13px] font-medium tracking-wide flex items-center justify-center gap-2"
              >
                Book Your Ride
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

