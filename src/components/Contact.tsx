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
      className="mx-auto max-w-[1360px] px-6 lg:px-8 py-16 lg:py-24"
    >
      <div className="rounded-[28px] border border-black/10 bg-white p-8 lg:p-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="font-label text-[11px] tracking-[0.22em] uppercase opacity-40">
            GNARLY PVT. LTD. • Kathmandu, Nepal
          </div>
          <h2 className="font-display text-[48px] lg:text-[88px] leading-[0.85] mt-4">
            SEE YOU IN
            <br />
            THE <span className="text-[#FF4D1C]">HIMALAYAS</span>
          </h2>
        </div>

        <div className="lg:max-w-[360px] w-full">
          <p className="font-body text-[14px] leading-6 opacity-60">
            Experience unparalleled trails, rich ancient culture, and celebrated
            Nepali hospitality. As local riders, we know the best trails and
            hidden gems.
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleBookRide}
              className="h-12 flex-1 bg-[#111] text-white rounded-full font-label text-[11px] tracking-widest uppercase hover:bg-[#FF4D1C] transition"
            >
              Book Your Ride
            </button>
            <button
              onClick={handleBackToTop}
              className="h-12 px-6 rounded-full border border-black/10 font-label text-[11px] tracking-widest uppercase"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
