"use client";

import React from "react";

export default function Contact() {
  const handleBookRide = () => {
    window.location.href =
      "mailto:gmtbskills@gmail.com?subject=Booking Inquiry - GNARLY MTB Nepal";
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1240px] px-6 lg:px-8 py-16 sm:py-24 border-t border-zinc-200/70"
    >
      <div className="rounded-[28px] border border-zinc-200/80 bg-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div>
          <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-zinc-400 font-medium">
            GNARLY PVT. LTD. • Kathmandu, Nepal
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-[70px] leading-[1.02] text-zinc-950 font-normal tracking-tight mt-4">
            See You In
            <br />
            <span className="italic text-[#FF5A26]">The Himalayas</span>
          </h2>
        </div>

        <div className="lg:max-w-[400px] w-full">
          <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-zinc-600">
            Experience unparalleled trails, rich ancient culture, and celebrated
            Nepali hospitality. As local riders, we know the best trails and
            hidden gems.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={handleBookRide}
              className="h-11 px-7 bg-zinc-950 text-white rounded-full font-sans text-[13px] font-semibold tracking-wide hover:bg-zinc-800 transition-all shadow-sm active:scale-[0.98]"
            >
              Book Your Ride
            </button>
            <button
              onClick={handleBackToTop}
              className="h-11 px-6 rounded-full border border-zinc-200/80 text-zinc-700 hover:border-zinc-950 hover:text-zinc-950 font-sans text-[13px] font-medium transition-all active:scale-[0.98]"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

