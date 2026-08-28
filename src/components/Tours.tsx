"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const [activeTourIndex, setActiveTourIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (activeTourIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeTourIndex]);

  // Keyboard navigation for lightbox
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
    <section id="tours" className="py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-200/70">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400 font-medium mb-3">
              Signature Expeditions • 2025/26 Season
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-zinc-950 font-normal tracking-tight">
              Choose Your <span className="italic text-zinc-400">Line</span>
            </h2>
          </div>
          <div className="font-sans text-[14px] leading-relaxed text-zinc-500 max-w-[380px]">
            Four distinct ways to ride Nepal. All fully supported, all deeply
            local. From thin-air enduro to e-powered exploration.
          </div>
        </div>

        {/* 2x2 Tours Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 lg:gap-8">
          {TOURS.map((tour, tourIdx) => (
            <div
              key={tour.name}
              className="group rounded-[24px] border border-zinc-200/80 bg-white p-7 sm:p-8 hover:border-zinc-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Title & Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-zinc-400 font-medium">
                      {tour.sub}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-zinc-950 font-normal tracking-tight mt-0.5">
                      {tour.name}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-zinc-200 bg-zinc-50 grid place-items-center text-zinc-600 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-[14px] leading-relaxed text-zinc-600 mt-3.5">
                  {tour.desc}
                </p>

                {/* Bullets */}
                <div className="mt-5 space-y-2">
                  {tour.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-2.5 font-sans text-[13px] text-zinc-700 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* 6-Thumbnail Gallery */}
                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-400 font-medium">
                      Trail Gallery ({tour.gallery.length} photos)
                    </span>
                    <span className="font-mono text-[9.5px] tracking-wider uppercase text-zinc-400 group-hover:text-[#FF4D1C] flex items-center gap-1 transition-colors">
                      <Eye className="w-3 h-3" /> Click to view
                    </span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {tour.gallery.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        type="button"
                        onClick={() => openLightbox(tourIdx, imgIdx)}
                        className="group/thumb relative aspect-square overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 hover:border-zinc-900 transition-all cursor-pointer focus:outline-none"
                        title={img.title}
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/thumb:bg-black/0 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-8 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-[10px] tracking-wider uppercase text-zinc-500 bg-zinc-50 border border-zinc-200/60 px-3 py-1 rounded-full">
                  {tour.meta}
                </span>
                <button
                  onClick={() => scrollTo("contact")}
                  className="font-sans text-[12px] font-semibold text-zinc-950 hover:text-[#FF4D1C] transition-colors flex items-center gap-1 group/btn"
                >
                  Request Details
                  <span className="group-hover/btn:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Portal */}
      {mounted &&
        activeTourIndex !== null &&
        createPortal(
          <div
            id="lightbox-backdrop"
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 select-none"
            onClick={(e) => {
              if (
                e.target === e.currentTarget ||
                (e.target as HTMLElement).id === "lightbox-backdrop"
              ) {
                closeLightbox();
              }
            }}
          >
            {/* Top Bar */}
            <div
              className="mx-auto max-w-[1200px] w-full flex items-center justify-between gap-4 pb-4 border-b border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-[#FF4D1C] font-semibold">
                  {TOURS[activeTourIndex].sub} • {TOURS[activeTourIndex].name}
                </div>
                <h4 className="font-serif text-[20px] sm:text-[26px] text-white leading-tight mt-0.5">
                  {TOURS[activeTourIndex].gallery[activeImageIndex].title}
                </h4>
              </div>

              {/* Close & Counter */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] sm:text-[12px] tracking-widest text-white/50 font-medium">
                  0{activeImageIndex + 1} / 0{TOURS[activeTourIndex].gallery.length}
                </span>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="cursor-pointer bg-white text-zinc-950 hover:bg-zinc-200 font-sans text-[12px] font-semibold tracking-wide uppercase px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md transition-all active:scale-95"
                  aria-label="Close and return to website"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div
              className="relative mx-auto max-w-[1200px] w-full flex-1 flex items-center justify-center py-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeLightbox();
              }}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/80 hover:bg-white hover:text-black text-white border border-white/20 grid place-items-center backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Center Photo Box */}
              <div
                className="relative max-h-[64vh] sm:max-h-[70vh] w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-black/40"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={TOURS[activeTourIndex].gallery[activeImageIndex].url}
                  alt={TOURS[activeTourIndex].gallery[activeImageIndex].title}
                  className="max-h-[64vh] sm:max-h-[70vh] max-w-full object-contain rounded-xl select-none"
                />
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/80 hover:bg-white hover:text-black text-white border border-white/20 grid place-items-center backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnails */}
            <div
              className="mx-auto max-w-[800px] w-full pt-3 border-t border-white/15 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {TOURS[activeTourIndex].gallery.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-white scale-105 shadow-md"
                      : "border-white/20 opacity-40 hover:opacity-80"
                  }`}
                  title={thumb.title}
                >
                  <img
                    src={thumb.url}
                    alt={thumb.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

