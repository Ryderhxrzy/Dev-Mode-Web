"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Check,
  Copy,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  LayoutGrid,
  ShieldAlert,
  BellRing,
  Sliders,
  Sparkles,
} from "lucide-react";

export function CopyCommandPill({
  command = "npx dev-mode-cli on",
  label,
}: {
  command?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Click to copy CLI command"
      className="group relative inline-flex items-center gap-3 rounded-xl border border-[#22C55E]/30 bg-[#080F0C]/90 px-4 py-3.5 font-mono text-sm text-emerald-300 shadow-[0_0_25px_-5px_rgba(34,197,94,0.2)] transition-all hover:border-[#22C55E] hover:bg-[#0D1612] hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.35)] active:scale-[0.99] cursor-pointer"
    >
      <span className="flex items-center gap-1.5 text-[#22C55E]">
        <Terminal className="h-4 w-4" />
        <span className="text-xs opacity-70">$</span>
      </span>
      <span className="tracking-tight text-slate-100">{label || command}</span>
      <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-md bg-[#22C55E]/10 text-[#22C55E] transition-colors group-hover:bg-[#22C55E]/20">
        {copied ? (
          <Check className="h-3.5 w-3.5 text-[#22C55E]" />
        ) : (
          <Copy className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100" />
        )}
      </span>
      {copied && (
        <span className="absolute -top-8 right-2 rounded bg-[#22C55E] px-2 py-0.5 font-mono text-[11px] font-semibold text-[#050D0A] shadow-md">
          Copied!
        </span>
      )}
    </button>
  );
}

const SLIDES = [
  {
    id: "dashboard",
    title: "Core Hardware Dashboard",
    badge: "SINGLE-TAP CONTROL",
    src: "/assets/images/promotion/page_1.png",
    description:
      "Instant master toggle for Developer Options, USB Debugging, Wireless ADB IP:Port, and 0.5x Speed Booster.",
    icon: Smartphone,
  },
  {
    id: "widgets",
    title: "Home Screen Widgets (3x1 & 1x1)",
    badge: "ZERO-LATENCY LAUNCHER",
    src: "/assets/images/promotion/in_app_widget_promotion.png",
    description:
      "Toggle Developer Options, USB ADB, and Wireless ADB directly from your Android home screen without opening the app.",
    icon: LayoutGrid,
  },
  {
    id: "shield",
    title: "App Shield & Stealth Dock",
    badge: "BANKING STEALTH",
    src: "/assets/images/screens/3847.jpg",
    description:
      "Automatically turns OFF Developer Options the millisecond protected banking/crypto apps open, then restores it on exit.",
    icon: ShieldAlert,
  },
  {
    id: "cli",
    title: "Dev Mode CLI & Wi-Fi Bridge",
    badge: "PORT 52882 BRIDGE",
    src: "/assets/images/screens/3850.jpg",
    description:
      "Control Developer Options, Wireless ADB auto-connect, and Local API Bridge directly from your PC terminal.",
    icon: Terminal,
  },
  {
    id: "notif",
    title: "Persistent Notification Shade",
    badge: "STATUS BAR CHIPS",
    src: "/assets/images/promotion/in_app_push_notif_promotion.png",
    description:
      "Always-accessible quick toggle chips inside your Android notification drawer with real-time state sync.",
    icon: BellRing,
  },
  {
    id: "settings",
    title: "Hardware & Animation Tuning",
    badge: "0.5x & METRICS",
    src: "/assets/images/screens/3846.jpg",
    description:
      "Fine-tune window/transition/animator scales (0.0x to 1.5x), Stay Awake while charging, and live device metrics.",
    icon: Sliders,
  },
];

export function InteractiveHeroMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = SLIDES[activeIndex];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Ambient Cyberpunk Glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#22C55E]/20 via-[#06B6D4]/15 to-transparent blur-2xl" />

      {/* Main Interactive Frame */}
      <div className="cyber-card relative w-full max-w-[460px] overflow-hidden rounded-3xl border border-[#22C55E]/30 bg-[#080F0C]/90 p-4 sm:p-6 shadow-[0_0_60px_-15px_rgba(34,197,94,0.3)]">
        {/* Top Terminal Status Bar */}
        <div className="mb-4 flex items-center justify-between border-b border-[#22C55E]/15 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="font-mono text-xs font-medium tracking-wider text-[#22C55E]">
              {currentSlide.badge}
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <span>
              {activeIndex + 1} / {SLIDES.length}
            </span>
          </div>
        </div>

        {/* Image Showcase Container */}
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-[#050D0A] shadow-2xl">
          <Image
            src={currentSlide.src}
            alt={currentSlide.title}
            fill
            sizes="(max-width: 768px) 280px, 320px"
            className="object-contain transition-all duration-500"
            priority={activeIndex === 0}
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#22C55E]/30 bg-[#050D0A]/80 text-slate-200 backdrop-blur-md transition hover:border-[#22C55E] hover:text-[#22C55E] cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#22C55E]/30 bg-[#050D0A]/80 text-slate-200 backdrop-blur-md transition hover:border-[#22C55E] hover:text-[#22C55E] cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Slide Caption */}
        <div className="mt-4 text-center">
          <h3 className="font-display text-base font-bold text-white flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-[#22C55E]" />
            {currentSlide.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-400 min-h-[34px]">
            {currentSlide.description}
          </p>
        </div>

        {/* Interactive Mode Switcher Pills */}
        <div className="mt-4 grid grid-cols-6 gap-1.5 pt-2 border-t border-white/5">
          {SLIDES.map((slide, idx) => {
            const Icon = slide.icon;
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-1 font-mono text-[10px] transition-all cursor-pointer ${
                  isActive
                    ? "border border-[#22C55E]/50 bg-[#22C55E]/15 text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                    : "border border-transparent bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-slate-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="truncate w-full text-center">
                  {slide.id === "dashboard"
                    ? "App"
                    : slide.id === "widgets"
                    ? "Widgets"
                    : slide.id === "shield"
                    ? "Shield"
                    : slide.id === "cli"
                    ? "CLI"
                    : slide.id === "notif"
                    ? "Shade"
                    : "Tuning"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
