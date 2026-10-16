import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Shield,
  ShieldCheck,
  Terminal,
  Zap,
  Wifi,
  Usb,
  EyeOff,
  Download,
  Star,
  ArrowRight,
  Sliders,
  Crosshair,
  BatteryCharging,
  Sparkles,
  ExternalLink,
  FileCode2,
} from "lucide-react";
import {
  InteractiveHeroMockup,
  CopyCommandPill,
} from "./components/InteractiveHeroMockup";
import {
  TerminalSimulator,
  AnimationSpeedComparator,
} from "./components/TerminalSimulator";

function Github({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title:
    "Dev Mode — Instant Hardware Control & Stealth Mode for Android Developers",
  description:
    "Toggle Developer Options, USB Debugging, and 0.5x animations with one tap. Automatically bypass banking app restrictions with intelligent App Shield. 100% private & rootless.",
  openGraph: {
    title:
      "Dev Mode — Instant Hardware Control & Stealth Mode for Android Developers",
    description:
      "Single-tap Developer Options, USB/Wi-Fi ADB toggles, 0.5x animation speed booster, CLI bridge, and App Shield banking stealth mode.",
    url: "https://github.com/Ryderhxrzy/Dev-Mode-Mobile",
    siteName: "Dev Mode",
    images: [
      {
        url: "/assets/images/promotion/page_1.png",
        width: 1080,
        height: 1920,
        alt: "Dev Mode Android Utility",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050D0A] text-[#ECFDF5] bg-cyber-grid">
      {/* Top Radial Atmospheric Glow */}
      <div className="pointer-events-none fixed inset-0 bg-radial-glow z-0" />

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-[#22C55E]/15 bg-[#050D0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[#22C55E]/40 bg-[#080F0C] p-1 shadow-[0_0_20px_rgba(34,197,94,0.25)] transition group-hover:border-[#22C55E]">
              <Image
                src="/assets/images/icon.png"
                alt="Dev Mode Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  Dev Mode
                </span>
                <span className="rounded border border-[#22C55E]/30 bg-[#22C55E]/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#22C55E]">
                  CLI v1.0.11
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-400">
                ANDROID HARDWARE UTILITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#features" className="transition hover:text-[#22C55E]">
              Features
            </a>
            <a
              href="#app-shield"
              className="flex items-center gap-1.5 transition hover:text-[#22C55E]"
            >
              <Shield className="h-3.5 w-3.5 text-[#22C55E]" />
              App Shield
            </a>
            <a
              href="#cli"
              className="flex items-center gap-1.5 transition hover:text-[#22D3EE]"
            >
              <Terminal className="h-3.5 w-3.5 text-[#22D3EE]" />
              CLI Bridge
            </a>
            <a href="#setup" className="transition hover:text-[#22C55E]">
              3-Step Setup
            </a>
            <Link href="/privacy" className="transition hover:text-[#22C55E]">
              Privacy Policy
            </Link>
          </nav>

          {/* Right CTA Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#080F0C] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 transition hover:border-[#22C55E]/50 hover:text-white"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">Star on GitHub</span>
              <span className="inline-flex items-center gap-0.5 rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-amber-300">
                <Star className="h-3 w-3 fill-amber-300" />
              </span>
            </a>

            <a
              href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-4 py-2 text-xs sm:text-sm font-bold text-[#050D0A] shadow-[0_0_25px_rgba(34,197,94,0.4)] transition hover:bg-[#16A34A] hover:text-white"
            >
              <Download className="h-4 w-4" />
              <span>Download APK</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 lg:pt-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Left Column: Hero Copy & CTAs */}
              <div className="flex flex-col items-start text-left lg:col-span-7">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/40 bg-[#080F0C]/90 px-4 py-1.5 font-mono text-xs font-semibold text-[#22C55E] shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  <span>⚡ NO ROOT REQUIRED // 100% PRIVATE &amp; OFFLINE</span>
                </div>

                {/* Headline */}
                <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
                  Instant Hardware Control &amp;{" "}
                  <span className="bg-gradient-to-r from-[#22C55E] via-emerald-300 to-[#22D3EE] bg-clip-text text-transparent">
                    Stealth Mode
                  </span>{" "}
                  for Android Developers.
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
                  Toggle Developer Options, USB Debugging, and{" "}
                  <span className="font-mono text-[#22C55E]">0.5x</span>{" "}
                  animations with one tap. Automatically bypass banking app
                  restrictions with intelligent{" "}
                  <span className="font-semibold text-white">App Shield</span>.
                </p>

                {/* Primary CTA Row */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#22C55E] px-6 py-3.5 font-display text-sm sm:text-base font-bold text-[#050D0A] shadow-[0_0_30px_rgba(34,197,94,0.45)] transition hover:bg-emerald-400 active:scale-[0.99]"
                  >
                    <Download className="h-5 w-5" />
                    Download APK
                    <span className="rounded bg-[#050D0A]/20 px-1.5 py-0.5 font-mono text-xs">
                      arm64
                    </span>
                  </a>

                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#080F0C]/90 px-5 py-3.5 font-display text-sm sm:text-base font-semibold text-white transition hover:border-[#22C55E]/50 hover:bg-[#0D1612]"
                  >
                    <Github className="h-5 w-5 text-slate-300" />
                    View on GitHub
                  </a>

                  {/* Copyable CLI Pill */}
                  <CopyCommandPill command="npx dev-mode-cli on" />
                </div>

                {/* Technical Micro-Specs Strip */}
                <div className="mt-10 grid grid-cols-2 gap-4 pt-8 border-t border-white/10 sm:grid-cols-4 w-full">
                  <div>
                    <div className="font-mono text-xs text-slate-400">
                      SYSTEM SCOPE
                    </div>
                    <div className="mt-1 font-mono text-sm font-bold text-[#22C55E]">
                      WRITE_SECURE_SETTINGS
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-400">
                      WI-FI APP BRIDGE
                    </div>
                    <div className="mt-1 font-mono text-sm font-bold text-[#22D3EE]">
                      UDP / HTTP :52882
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-400">
                      ANDROID API
                    </div>
                    <div className="mt-1 font-mono text-sm font-bold text-white">
                      7.0+ (API 24–35)
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-400">
                      TELEMETRY / CLOUD
                    </div>
                    <div className="mt-1 font-mono text-sm font-bold text-[#22C55E]">
                      0.00 KB (Zero)
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Mockup / Carousel */}
              <div className="lg:col-span-5">
                <InteractiveHeroMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES BENTO GRID ================= */}
        <section
          id="features"
          className="py-20 border-t border-[#22C55E]/15 bg-[#080F0C]/60"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#22C55E]">
                <Cpu className="h-4 w-4" />
                <span>{"// HARDWARE-LEVEL CAPABILITIES"}</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built for Power Users Who Hate Digging Through 7 Settings Menus.
              </h2>
              <p className="mt-3 text-slate-400 text-base sm:text-lg">
                Native Kotlin system modules paired with desktop widgets,
                notification shade chips, and the zero-dependency{" "}
                <code className="font-mono text-xs text-[#22C55E]">
                  dev-mode-cli
                </code>{" "}
                terminal suite.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Bento Card 1: Direct Hardware Toggles (7 cols) */}
              <div className="cyber-card rounded-3xl p-6 sm:p-8 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/10 px-3 py-1 font-mono text-xs font-semibold text-[#22C55E]">
                      <Sliders className="h-3.5 w-3.5" />
                      DIRECT HARDWARE TOGGLES
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      1-TAP MUTATION
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    Single-Tap System &amp; ADB Controls
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                    Flip system-level developer flags directly from the dashboard,
                    1x1 / 3x1 launcher widgets, or the persistent Android
                    notification shade without opening Settings.
                  </p>
                </div>

                {/* Hardware Toggle Pills Grid */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-xl border border-[#22C55E]/30 bg-[#050D0A]/80 p-3.5">
                    <div className="flex items-center gap-3">
                      <Cpu className="h-5 w-5 text-[#22C55E]" />
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Master Developer Options
                        </div>
                        <div className="font-mono text-[11px] text-slate-400">
                          development_settings_enabled
                        </div>
                      </div>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-[#22C55E]/30 bg-[#050D0A]/80 p-3.5">
                    <div className="flex items-center gap-3">
                      <Usb className="h-5 w-5 text-[#22C55E]" />
                      <div>
                        <div className="text-sm font-semibold text-white">
                          USB Debugging
                        </div>
                        <div className="font-mono text-[11px] text-slate-400">
                          adb_enabled = 1
                        </div>
                      </div>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-[#06B6D4]/30 bg-[#050D0A]/80 p-3.5">
                    <div className="flex items-center gap-3">
                      <Wifi className="h-5 w-5 text-[#22D3EE]" />
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Wireless ADB + Auto-Keep-On
                        </div>
                        <div className="font-mono text-[11px] text-[#22D3EE]">
                          adb_wifi_enabled / mDNS
                        </div>
                      </div>
                    </div>
                    <span className="h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#050D0A]/80 p-3.5">
                    <div className="flex items-center gap-3">
                      <Crosshair className="h-5 w-5 text-emerald-400" />
                      <div>
                        <div className="text-sm font-semibold text-white">
                          Stay Awake &amp; Pointer Coords
                        </div>
                        <div className="font-mono text-[11px] text-slate-400">
                          show_touches / pointer_location
                        </div>
                      </div>
                    </div>
                    <BatteryCharging className="h-4 w-4 text-[#22C55E]" />
                  </div>
                </div>
              </div>

              {/* Bento Card 2: Animation Speed Booster (5 cols) */}
              <div className="cyber-card rounded-3xl p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/10 px-3 py-1 font-mono text-xs font-semibold text-[#22C55E]">
                      <Zap className="h-3.5 w-3.5" />
                      SPEED MULTIPLIER
                    </span>
                    <span className="font-mono text-xs text-[#22C55E]">
                      0.0x / 0.5x / 1.0x
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    Animation Speed Booster (0.5x &amp; Instant)
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                    Cut Window, Transition, and Animator duration scales in half
                    (0.5x) or set to 0.0x for instant UI rendering—with zero CPU
                    overclocking or battery penalty.
                  </p>
                </div>

                {/* Interactive Speed Comparator */}
                <AnimationSpeedComparator />
              </div>

              {/* Bento Card 3: Desktop Wi-Fi Bridge & Smart API Bridge (6 cols) */}
              <div className="cyber-card cyber-card-cyan rounded-3xl p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-3 py-1 font-mono text-xs font-semibold text-[#22D3EE]">
                      <Terminal className="h-3.5 w-3.5" />
                      NPM CLI &amp; LAN BRIDGE
                    </span>
                    <span className="font-mono text-xs text-[#22D3EE]">
                      dev-mode-cli v1.0.11
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    Wireless ADB Auto-Connect &amp; Smart API Bridge
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                    Toggle Developer Options even when USB Debugging is OFF via
                    port <code className="text-[#22D3EE]">52882</code>, auto-pair
                    Wireless ADB without typing dynamic ports, or tunnel local
                    REST/GraphQL servers to <code className="text-[#22C55E]">127.0.0.1</code>.
                  </p>
                </div>

                <div className="mt-6 space-y-2.5 rounded-2xl border border-[#06B6D4]/25 bg-[#050D0A] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between gap-2 text-slate-300">
                    <span>
                      <span className="text-[#22D3EE]">$</span> npx dev-mode-cli
                      on
                    </span>
                    <span className="text-emerald-400">
                      # Enable Developer Options
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-slate-300">
                    <span>
                      <span className="text-[#22D3EE]">$</span> devmode wifi on
                    </span>
                    <span className="text-[#22D3EE]">
                      # Auto-resolve IP:Port &amp; connect
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-slate-300">
                    <span>
                      <span className="text-[#22D3EE]">$</span> devmode bridge
                    </span>
                    <span className="text-slate-400">
                      # Direct LAN Bridge (:52882)
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-slate-300">
                    <span>
                      <span className="text-[#22D3EE]">$</span> devmode api
                      bridge
                    </span>
                    <span className="text-emerald-400">
                      # Tunnel local REST/GraphQL
                    </span>
                  </div>
                </div>
              </div>

              {/* Bento Card 4: 100% Private & Zero Telemetry (6 cols) */}
              <div className="cyber-card rounded-3xl p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/10 px-3 py-1 font-mono text-xs font-semibold text-[#22C55E]">
                      <EyeOff className="h-3.5 w-3.5" />
                      ZERO TELEMETRY GUARANTEE
                    </span>
                    <Link
                      href="/privacy"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#22C55E] hover:underline"
                    >
                      Read Policy <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    100% Offline, Rootless &amp; Auditable
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                    No analytics SDKs, no crash trackers, no cloud accounts, and
                    zero external network requests. Operates strictly on-device
                    via Android&apos;s standard{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-[#22C55E]">
                      WRITE_SECURE_SETTINGS
                    </code>{" "}
                    permission.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-[#050D0A]/80 p-3">
                    <div className="font-mono text-lg font-bold text-[#22C55E]">
                      0 SDKs
                    </div>
                    <div className="text-xs text-slate-400">
                      No Firebase, AdMob, or Sentry
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#050D0A]/80 p-3">
                    <div className="font-mono text-lg font-bold text-[#22D3EE]">
                      No Root
                    </div>
                    <div className="text-xs text-slate-400">
                      Bootloader stays locked &amp; safe
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/10 bg-[#050D0A]/80 p-3">
                    <div className="font-mono text-lg font-bold text-white">
                      MIT Open
                    </div>
                    <div className="text-xs text-slate-400">
                      100% public source code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= APP SHIELD DEEP-DIVE SECTION ================= */}
        <section id="app-shield" className="py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Explanation & In-Memory State Pipeline */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[#22C55E]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>HEADLINE FEATURE // BANKING &amp; ENTERPRISE STEALTH</span>
                </div>

                <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
                  Never Get Blocked by{" "}
                  <span className="text-[#22C55E]">
                    &ldquo;Please Disable Developer Options&rdquo;
                  </span>{" "}
                  Again.
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Many banking, e-wallet, crypto, and enterprise apps refuse to
                  launch if Android Developer Options or USB Debugging are
                  enabled. <strong className="text-white">App Shield</strong>{" "}
                  eliminates manual toggling forever by cloaking your developer
                  environment automatically in milliseconds.
                </p>

                {/* How App Shield Works Step-by-Step Pipeline */}
                <div className="space-y-4 pt-2">
                  <div className="cyber-card rounded-2xl p-5 border-l-4 border-l-[#22C55E]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/15 font-mono text-sm font-bold text-[#22C55E]">
                        01
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          Millisecond Foreground Detection (In-Memory Only)
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          When you open a protected banking or enterprise app (or
                          tap a{" "}
                          <span className="text-[#22C55E] font-medium">
                            3×1 App Shield Home-Screen Dock
                          </span>
                          ), App Shield detects the foreground package transition
                          locally in RAM without recording usage history.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card rounded-2xl p-5 border-l-4 border-l-[#22D3EE]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#06B6D4]/15 font-mono text-sm font-bold text-[#22D3EE]">
                        02
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          Instant Stealth Cloaking (&lt; 5ms Execution)
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          Before the banking app&apos;s security check executes,
                          Dev Mode atomically snapshots your current flags and sets{" "}
                          <code className="font-mono text-xs text-[#22D3EE]">
                            development_settings_enabled=0
                          </code>{" "}
                          and{" "}
                          <code className="font-mono text-xs text-[#22D3EE]">
                            adb_enabled=0
                          </code>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card rounded-2xl p-5 border-l-4 border-l-[#22C55E]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/15 font-mono text-sm font-bold text-[#22C55E]">
                        03
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          Automatic State Restoration on Exit
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          The moment you close or leave the protected app, Dev
                          Mode restores your Developer Options, USB/Wireless ADB,
                          and{" "}
                          <code className="font-mono text-xs text-[#22C55E]">
                            0.5x
                          </code>{" "}
                          animation scales seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dual Screen Showcase (App Shield 3847.jpg + Select Apps 3848.jpg + page_5.png) */}
              <div className="lg:col-span-6">
                <div className="cyber-card rounded-3xl border border-[#22C55E]/35 bg-[#080F0C] p-5 sm:p-6 shadow-[0_0_60px_-10px_rgba(34,197,94,0.25)]">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#22C55E]" />
                      <span className="font-mono text-xs font-bold text-white">
                        PROTECT. THEN RESTORE. // APP SHIELD SUITE
                      </span>
                    </div>
                    <span className="rounded-full bg-[#22C55E]/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#22C55E]">
                      RAM-ONLY MONITOR
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#22C55E]/25 bg-[#050D0A]">
                        <Image
                          src="/assets/images/screens/3847.jpg"
                          alt="App Shield Configuration Screen"
                          fill
                          sizes="(max-width: 768px) 180px, 240px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="text-center font-mono text-[11px] text-[#22C55E]">
                        01 / Auto-Stealth Guard
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl border border-[#06B6D4]/25 bg-[#050D0A]">
                        <Image
                          src="/assets/images/screens/3848.jpg"
                          alt="Select Protected Banking Apps to Shield"
                          fill
                          sizes="(max-width: 768px) 180px, 240px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="text-center font-mono text-[11px] text-[#22D3EE]">
                        02 / Select Protected Apps
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-[#22C55E]/20 bg-[#050D0A]/90 p-3.5 font-mono text-xs">
                    <div>
                      <div className="text-[#22C55E] font-semibold">
                        ● 3×1 APP SHIELD HOME DOCK &amp; WIDGETS
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-400">
                        Launch shielded apps or toggle hardware states directly
                        from your Android home screen (`page_5.png` / `3857.jpg`).
                      </p>
                    </div>
                    <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border border-white/10">
                      <Image
                        src="/assets/images/promotion/page_5.png"
                        alt="Home Screen Widgets Promotion"
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE TERMINAL SIMULATOR ================= */}
        <section
          id="cli"
          className="py-20 border-t border-[#22C55E]/15 bg-[#080F0C]/70"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#22D3EE]">
                  <Terminal className="h-4 w-4" />
                  <span>{"// INTERACTIVE TERMINAL BRIDGE"}</span>
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Test Drive{" "}
                  <code className="font-mono text-[#22C55E]">dev-mode-cli</code>{" "}
                  Right in Your Browser.
                </h2>
                <p className="mt-2 max-w-2xl text-slate-400 text-base">
                  Featuring the exact ASCII Bugdroid banner and real command
                  outputs from{" "}
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-CLI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#22D3EE] underline hover:text-white"
                  >
                    Dev-Mode-CLI v1.0.11
                  </a>
                  . Click any preset below to run it.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Ryderhxrzy/Dev-Mode-CLI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#050D0A] px-4 py-2.5 font-mono text-xs font-semibold text-slate-200 transition hover:border-[#22C55E]"
                >
                  <Github className="h-4 w-4" />
                  <span>Dev-Mode-CLI Repo</span>
                </a>
                <a
                  href="https://www.npmjs.com/package/dev-mode-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/10 px-4 py-2.5 font-mono text-xs font-semibold text-[#22D3EE] transition hover:bg-[#06B6D4]/20"
                >
                  <span>npm i -g dev-mode-cli</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <TerminalSimulator />
          </div>
        </section>

        {/* ================= QUICK 3-STEP SETUP GUIDE ================= */}
        <section id="setup" className="py-24 border-t border-[#22C55E]/15">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[#22C55E]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>ONE-TIME AUTHORIZATION // NO ROOT NEEDED</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Up and Running in Under 60 Seconds
              </h2>
              <p className="mt-3 text-slate-400 text-base sm:text-lg">
                Grant{" "}
                <code className="font-mono text-xs text-[#22C55E]">
                  WRITE_SECURE_SETTINGS
                </code>{" "}
                once via USB using{" "}
                <code className="font-mono text-xs text-[#22D3EE]">
                  npx dev-mode-cli grant
                </code>
                . After that, unplug your cable and toggle everything standalone!
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="cyber-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E] font-mono text-base font-extrabold text-[#050D0A]">
                      01
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      STEP 1 OF 3
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    Install the Release APK
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Download the signed{" "}
                    <code className="font-mono text-xs text-emerald-300">
                      app-arm64-v8a-release.apk
                    </code>{" "}
                    from GitHub Releases and install it on your Android 7.0+
                    phone.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/40 px-4 py-3 font-mono text-xs font-bold text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#050D0A]"
                  >
                    <Download className="h-4 w-4" />
                    Download Latest APK (GitHub)
                  </a>
                </div>
              </div>

              {/* Step 2 */}
              <div className="cyber-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22D3EE] font-mono text-base font-extrabold text-[#050D0A]">
                      02
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      STEP 2 OF 3
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    Connect Phone via USB (Once)
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Plug your phone into your PC with USB Debugging enabled and
                    check{" "}
                    <strong className="text-white">
                      &ldquo;Always allow from this computer&rdquo;
                    </strong>{" "}
                    on the prompt.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 font-mono text-xs text-slate-300">
                  <Usb className="h-5 w-5 text-[#22D3EE] shrink-0" />
                  <span>Unplug forever once granted—no PC needed afterwards!</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="cyber-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E] font-mono text-base font-extrabold text-[#050D0A]">
                      03
                    </span>
                    <span className="font-mono text-xs text-[#22C55E]">
                      STEP 3 OF 3
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    Run One-Command Permission Grant
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Run the official CLI grant command (or raw ADB command) in
                    your terminal:
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <CopyCommandPill
                    command="npx dev-mode-cli grant"
                    label="npx dev-mode-cli grant"
                  />
                  <div className="rounded-lg border border-white/10 bg-[#050D0A] p-2.5 font-mono text-[11px] text-slate-400 overflow-x-auto">
                    adb shell pm grant com.devmode.app
                    android.permission.WRITE_SECURE_SETTINGS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-[#22C55E]/20 bg-[#050D0A] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-[#22C55E]/40 bg-[#080F0C] p-1">
                  <Image
                    src="/assets/images/icon.png"
                    alt="Dev Mode Icon"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-xl font-bold text-white">
                  Dev Mode
                </span>
              </div>
              <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
                The rootless Android developer utility for single-tap hardware
                toggles, 0.5x animation speed boosting, LAN CLI bridging, and
                App Shield banking stealth.
              </p>
              <div className="font-mono text-xs text-slate-500">
                Copyright © 2026 Jhayr Cervantes (
                <a
                  href="https://github.com/Ryderhxrzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22C55E] hover:underline"
                >
                  @Ryderhxrzy
                </a>
                ). Licensed under MIT.
              </div>
            </div>

            {/* Links Column 1: Product */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#22C55E]">
                Navigation
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Hardware Toggles
                  </a>
                </li>
                <li>
                  <a href="#app-shield" className="hover:text-white transition">
                    App Shield Stealth
                  </a>
                </li>
                <li>
                  <a href="#cli" className="hover:text-white transition">
                    CLI Simulator
                  </a>
                </li>
                <li>
                  <a href="#setup" className="hover:text-white transition">
                    3-Step Setup Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Links Column 2: Open Source & Legal */}
            <div className="md:col-span-4 space-y-3">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#22D3EE]">
                Open Source &amp; Compliance
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-2 font-semibold text-[#22C55E] hover:underline"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Privacy Policy &amp; Permissions Disclosure
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition"
                  >
                    <Github className="h-4 w-4" />
                    GitHub Repository (Dev-Mode-Mobile)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition"
                  >
                    <FileCode2 className="h-4 w-4" />
                    Issue Tracker &amp; Security Reports
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-CLI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition"
                  >
                    <Terminal className="h-4 w-4" />
                    Dev Mode CLI Repository (v1.0.11)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
