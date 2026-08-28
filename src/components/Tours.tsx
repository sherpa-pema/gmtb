"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Tour } from "@/types";

const TOURS: Tour[] = [
  {
    name: "ENDURO THIN AIR",
    sub: "Lower Mustang",
    desc: "Deep into Lower Mustang, rugged trails shaped by wind, rock and ancient trade paths.",
    accent: "#FF4D1C",
    meta: "6 DAYS • 4200M MAX • SHUTTLE + FLIGHT",
    bullets: [
      "Lubra & Smooth Criminal trails",
      "Rebel's Hideout & Black Yak above 3500m",
    ],
    gallery: [
      {
        title: "Lubra Pass Descent • 4200M",
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Mustang Canyon Singletrack",
        url: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Jomsom High Ridge Traverse",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Kali Gandaki Valley Flow",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Black Yak Trail 3800M",
        url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Rebel's Hideout Rock Garden",
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1400&q=85",
      },
    ],
  },
  {
    name: "EVEREST EXPRESS",
    sub: "Khumbu Region",
    desc: "Sherpa culture and trails beneath the highest peaks on earth. Raw, spiritual, physical.",
    accent: "#8B7355",
    meta: "8 DAYS • EVEREST REGION • TEA HOUSE",
    bullets: [
      "Beneath Ama Dablam & Everest",
      "Ancient monasteries & suspension bridges",
    ],
    gallery: [
      {
        title: "Ama Dablam Base Trail",
        url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Namche Bazaar Suspension Bridge",
        url: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Tengboche Monastery Backdrop",
        url: "https://images.unsplash.com/photo-1465919292275-c60b4c62952c?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Everest Range Panorama",
        url: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Sherpa Highland Singletrack",
        url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Khumbu Valley Sunset Ride",
        url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1400&q=85",
      },
    ],
  },
  {
    name: "UPPER MUSTANG E-BIKE",
    sub: "Forbidden Kingdom",
    desc: "Canyons, caves and walled cities. E-bikes make the altitude accessible without losing the wild.",
    accent: "#FAF9F6",
    meta: "7 DAYS • E-MTB • 3800M+ AVG",
    bullets: [
      "Lo Manthang walled city",
      "E-power for sustained high desert",
    ],
    gallery: [
      {
        title: "Lo Manthang Walled City",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Red Cliffs of Dhakmar",
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Ancient Sky Caves Traverse",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "High Desert E-Power Plateau",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Chorten & Prayer Flags Pass",
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Forbidden Kingdom Singletrack",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85",
      },
    ],
  },
  {
    name: "MOTO MUSTANG",
    sub: "Kathmandu to Mustang",
    desc: "Two wheels, motor assist. Kathmandu, Pokhara, and Mustang diversity in one sweeping traverse.",
    accent: "#FF4D1C",
    meta: "10 DAYS • MOTO + MTB COMBO",
    bullets: [
      "Most diverse Nepal traverse",
      "Road, gravel, singletrack blend",
    ],
    gallery: [
      {
        title: "Kali Gandaki River Crossing",
        url: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Pokhara Valley Ascent",
        url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Annapurna Circuit Trail",
        url: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Mustang Dirt Highway Traverse",
        url: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "Marpha Orchard Trail",
        url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=85",
      },
      {
        title: "High Mountain Pass Crossing",
        url: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=1400&q=85",
      },
    ],
  },
];

export default function Tours() {
  const [activeTourIndex, setActiveTourIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (tourIdx: number, imageIdx: number) => {
    setActiveTourIndex(tourIdx);
    setActiveImageIndex(imageIdx);
  };

  const closeLightbox = useCallback(() => {
    setActiveTourIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (activeTourIndex === null) return;
    const galleryLength = TOURS[activeTourIndex].gallery.length;
    setActiveImageIndex((prev) => (prev + 1) % galleryLength);
  }, [activeTourIndex]);

  const prevImage = useCallback(() => {
    if (activeTourIndex === null) return;
    const galleryLength = TOURS[activeTourIndex].gallery.length;
    setActiveImageIndex((prev) => (prev - 1 + galleryLength) % galleryLength);
  }, [activeTourIndex]);

  // Keyboard navigation for lightbox popup
  useEffect(() => {
    if (activeTourIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTourIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section
      id="tours"
      className="bg-[#0F0F0F] text-[#FAF9F6] rounded-t-[28px] lg:rounded-t-[36px] -mt-6 relative z-10"
    >
      <div className="mx-auto max-w-[1360px] px-6 lg:px-8 pt-16 lg:pt-24 pb-16">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="font-label text-[11px] tracking-[0.24em] uppercase text-[#FF4D1C] mb-4">
              Signature Expeditions • 2025/26 Season
            </div>
            <h2 className="font-display text-[52px] lg:text-[88px] leading-[0.85]">
              CHOOSE YOUR
              <br />
              <span className="text-white/30">LINE</span>
            </h2>
          </div>
          <div className="font-body text-[14px] leading-6 text-white/50 max-w-[380px] pt-2">
            Four distinct ways to ride Nepal. All fully supported, all deeply
            local. From thin-air enduro to e-powered exploration.
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4 lg:gap-5">
          {TOURS.map((tour, tourIdx) => (
            <div
              key={tour.name}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#151515] hover:bg-[#1A1A1A] transition-colors p-7 lg:p-9 flex flex-col min-h-[380px]"
            >
              {/* Glow Blob */}
              <div
                className="absolute top-0 right-0 w-[320px] h-[320px] rounded-full blur-[80px] opacity-[0.12] pointer-events-none"
                style={{ background: tour.accent }}
              />

              <div className="flex items-start justify-between">
                <div>
                  <div className="font-label text-[10px] tracking-[0.22em] uppercase text-white/40">
                    {tour.sub}
                  </div>
                  <h3 className="font-display text-[36px] lg:text-[42px] leading-[0.9] mt-1">
                    {tour.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/15 grid place-items-center group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="font-body text-[14px] leading-6 text-white/60 mt-4 max-w-[360px]">
                {tour.desc}
              </p>

              <div className="mt-6 space-y-2">
                {tour.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 font-label text-[11px] tracking-wide text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF4D1C]" />{" "}
                    {bullet}
                  </div>
                ))}
              </div>

              {/* 6-Thumbnail Gallery Grid */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-label text-[10px] tracking-[0.18em] uppercase text-white/40">
                    Trail Gallery ({tour.gallery.length} photos)
                  </span>
                  <span className="font-label text-[9px] tracking-widest uppercase text-[#FF4D1C] flex items-center gap-1 opacity-80">
                    <Eye className="w-3 h-3" /> Click to view
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {tour.gallery.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      type="button"
                      onClick={() => openLightbox(tourIdx, imgIdx)}
                      className="group/thumb relative aspect-square overflow-hidden rounded-xl border border-white/15 bg-black/40 hover:border-[#FF4D1C] transition-all focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]/50"
                      title={img.title}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-115"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/0 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                        <span className="w-6 h-6 rounded-full bg-[#FF4D1C] text-white grid place-items-center shadow-md">
                          <Eye className="w-3 h-3" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="font-label text-[10px] tracking-[0.18em] uppercase text-white/30">
                  {tour.meta}
                </span>
                <button
                  onClick={() => scrollTo("contact")}
                  className="font-label text-[11px] tracking-widest uppercase text-white hover:text-[#FF4D1C] transition"
                >
                  Request Details →
                </button>
              </div>

              <div className="absolute bottom-0 left-7 right-7 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Popup */}
      {activeTourIndex !== null && (
        <div
          className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Header Bar */}
          <div className="mx-auto max-w-[1200px] w-full flex items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="font-label text-[10px] tracking-[0.24em] uppercase text-[#FF4D1C]">
                {TOURS[activeTourIndex].sub} • {TOURS[activeTourIndex].name}
              </div>
              <h4 className="font-display text-[22px] sm:text-[28px] text-white leading-none mt-1">
                {TOURS[activeTourIndex].gallery[activeImageIndex].title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-label text-[11px] tracking-widest text-white/50">
                0{activeImageIndex + 1} / 0
                {TOURS[activeTourIndex].gallery.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF4D1C] text-white grid place-items-center transition-colors border border-white/15"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Image Display Area */}
          <div className="relative mx-auto max-w-[1200px] w-full flex-1 flex items-center justify-center py-4">
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-[#FF4D1C] text-white border border-white/20 grid place-items-center backdrop-blur transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 -translate-x-[1px]" />
            </button>

            <div className="relative max-h-[65vh] w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/50">
              <img
                src={TOURS[activeTourIndex].gallery[activeImageIndex].url}
                alt={TOURS[activeTourIndex].gallery[activeImageIndex].title}
                className="max-h-[65vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-[#FF4D1C] text-white border border-white/20 grid place-items-center backdrop-blur transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 translate-x-[1px]" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="mx-auto max-w-[800px] w-full pt-4 border-t border-white/10 flex justify-center gap-2 sm:gap-3 overflow-x-auto">
            {TOURS[activeTourIndex].gallery.map((thumb, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  activeImageIndex === idx
                    ? "border-[#FF4D1C] scale-105 shadow-[0_0_12px_rgba(255,77,28,0.5)]"
                    : "border-white/20 opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={thumb.url}
                  alt={thumb.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
