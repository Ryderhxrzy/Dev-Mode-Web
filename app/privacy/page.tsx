import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Lock,
  EyeOff,
  ServerOff,
  Code2,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

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
  title: "Privacy Policy & Android Permissions Disclosure",
  description:
    "Official Store-Compliant Privacy Policy for Dev Mode. 100% offline-first, zero telemetry, zero third-party SDKs, and transparent disclosure of WRITE_SECURE_SETTINGS and PACKAGE_USAGE_STATS permissions.",
  openGraph: {
    title: "Privacy Policy — Dev Mode Android Utility",
    description:
      "Zero telemetry, zero analytics, zero external servers. Read our transparent breakdown of Android permissions and local-only data storage.",
    url: "https://github.com/Ryderhxrzy/Dev-Mode-Mobile",
    siteName: "Dev Mode",
    type: "article",
  },
};

const TOC_ITEMS = [
  { id: "introduction", number: "01", title: "Introduction & Core Philosophy" },
  {
    id: "zero-telemetry",
    number: "02",
    title: "Information We Do NOT Collect",
  },
  {
    id: "permissions",
    number: "03",
    title: "Android Permissions Explained",
  },
  { id: "third-party-sdks", number: "04", title: "Third-Party SDKs & Services" },
  { id: "data-storage", number: "05", title: "Data Storage & Retention" },
  { id: "childrens-privacy", number: "06", title: "Children's Privacy & Security" },
  {
    id: "source-verification",
    number: "07",
    title: "Source Code & Verification",
  },
  { id: "contact", number: "08", title: "Contact Information & Inquiries" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050D0A] text-[#ECFDF5] bg-cyber-grid">
      <div className="pointer-events-none fixed inset-0 bg-radial-glow z-0" />

      {/* ================= TOP NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-[#22C55E]/15 bg-[#050D0A]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-[#22C55E]/30 bg-[#080F0C] px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-200 transition hover:border-[#22C55E] hover:text-[#22C55E]"
            >
              <ArrowLeft className="h-4 w-4 text-[#22C55E]" />
              <span>Back to Home</span>
            </Link>

            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400"
            >
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              <span className="text-[#22C55E] font-semibold">
                Privacy Policy
              </span>
            </nav>
          </div>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-[#22C55E]/40 bg-[#080F0C] p-1">
              <Image
                src="/assets/images/icon.png"
                alt="Dev Mode Logo"
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span className="font-display text-sm font-bold text-white">
              Dev Mode
            </span>
          </Link>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10 flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex sm:hidden items-center gap-2 font-mono text-xs text-slate-400"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            <span className="text-[#22C55E]">Privacy Policy</span>
          </nav>

          {/* Document Header */}
          <div className="cyber-card rounded-3xl p-6 sm:p-10 border border-[#22C55E]/30">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 px-3.5 py-1 font-mono text-xs font-semibold text-[#22C55E]">
                <ShieldCheck className="h-4 w-4" />
                <span>GOOGLE PLAY &amp; F-DROID COMPLIANT DISCLOSURE</span>
              </div>
              <div className="font-mono text-xs text-slate-400">
                Effective Date: October 16, 2026 • Package:{" "}
                <code className="text-[#22D3EE]">com.devmode.app</code>
              </div>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Privacy Policy &amp; Permissions Transparency
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong className="text-white">TL;DR:</strong> Dev Mode collects{" "}
              <span className="text-[#22C55E] font-semibold">
                zero personal data
              </span>
              , embeds{" "}
              <span className="text-[#22C55E] font-semibold">
                zero third-party analytics or advertising SDKs
              </span>
              , and makes{" "}
              <span className="text-[#22C55E] font-semibold">
                zero external internet transmissions
              </span>
              . Everything runs 100% locally on your Android device.
            </p>

            {/* Quick Verification Badges */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050D0A]/90 p-4">
                <EyeOff className="h-6 w-6 text-[#22C55E] shrink-0" />
                <div>
                  <div className="font-mono text-xs font-bold text-white">
                    ZERO TELEMETRY
                  </div>
                  <div className="text-xs text-slate-400">
                    No analytics or crash logs
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050D0A]/90 p-4">
                <ServerOff className="h-6 w-6 text-[#22D3EE] shrink-0" />
                <div>
                  <div className="font-mono text-xs font-bold text-white">
                    NO CLOUD EGRESS
                  </div>
                  <div className="text-xs text-slate-400">
                    100% offline &amp; LAN-only
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050D0A]/90 p-4">
                <Lock className="h-6 w-6 text-[#22C55E] shrink-0" />
                <div>
                  <div className="font-mono text-xs font-bold text-white">
                    ZERO 3RD-PARTY SDKs
                  </div>
                  <div className="text-xs text-slate-400">
                    No Firebase, Meta, or AdMob
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#050D0A]/90 p-4">
                <Code2 className="h-6 w-6 text-[#22D3EE] shrink-0" />
                <div>
                  <div className="font-mono text-xs font-bold text-white">
                    OPEN SOURCE
                  </div>
                  <div className="text-xs text-slate-400">
                    Publicly auditable on GitHub
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Layout: Sticky TOC + Policy Sections */}
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4">
              <div className="cyber-card sticky top-24 rounded-2xl p-6">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#22C55E] mb-4">
                  {"// TABLE OF CONTENTS"}
                </div>
                <nav className="space-y-1.5">
                  {TOC_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-300 transition hover:bg-[#22C55E]/10 hover:text-[#22C55E]"
                    >
                      <span className="font-mono text-xs text-[#22C55E]">
                        {item.number}.
                      </span>
                      <span className="font-medium">{item.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <Link
                    href="/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#22C55E]/30 bg-[#22C55E]/10 px-4 py-2.5 font-mono text-xs font-semibold text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#050D0A]"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Return to Landing Page
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Policy Document Body */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Introduction & Core Philosophy */}
              <section
                id="introduction"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 font-mono text-xs font-bold text-[#22C55E]">
                    01
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Introduction &amp; Core Philosophy
                  </h2>
                </div>
                <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-white">&ldquo;Dev Mode&rdquo;</strong>{" "}
                    (<code className="font-mono text-xs text-[#22C55E]">com.devmode.app</code>)
                    is an open-source Android developer utility and hardware
                    control application engineered from the ground up with a{" "}
                    <strong className="text-white">
                      zero-telemetry, offline-first philosophy
                    </strong>
                    .
                  </p>
                  <p>
                    Because Dev Mode interacts with sensitive system-level
                    developer settings, we believe your device configuration and
                    installed package environment must remain strictly on your
                    hardware. The project is publicly maintained and auditable at{" "}
                    <a
                      href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm text-[#22C55E] underline hover:text-emerald-300"
                    >
                      https://github.com/Ryderhxrzy/Dev-Mode-Mobile
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* 2. Information We Do NOT Collect */}
              <section
                id="zero-telemetry"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 font-mono text-xs font-bold text-[#22C55E]">
                    02
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Information We Do NOT Collect (Zero Telemetry)
                  </h2>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Dev Mode does not collect, harvest, transmit, rent, or sell any
                  user data whatsoever:
                </p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-[#050D0A]/80 p-4">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                      No Personal Info
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      No names, email addresses, phone numbers, biometrics,
                      contacts, or user account logins exist in the application.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#050D0A]/80 p-4">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                      No Identifiers
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      No IMEI, MAC address, Android ID, Google Advertising ID
                      (AAID), or telemetry crash analytics collectors are
                      accessed or transmitted.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#050D0A]/80 p-4">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                      <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                      No External Servers
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      The application makes zero HTTP/HTTPS calls to external
                      servers, cloud databases, or third-party endpoints.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Android Permissions Explained */}
              <section
                id="permissions"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22D3EE]/15 font-mono text-xs font-bold text-[#22D3EE]">
                    03
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Android Permissions Explained (Transparent Disclosure)
                  </h2>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Every Android permission requested by Dev Mode serves a direct,
                  user-initiated hardware or stealth utility function on your
                  device:
                </p>

                <div className="mt-6 space-y-4">
                  {/* Permission 1: WRITE_SECURE_SETTINGS */}
                  <div className="rounded-2xl border border-[#22C55E]/30 bg-[#050D0A]/90 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <code className="font-mono text-xs sm:text-sm font-bold text-[#22C55E]">
                        android.permission.WRITE_SECURE_SETTINGS
                      </code>
                      <span className="rounded bg-[#22C55E]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#22C55E]">
                        USER-GRANTED VIA ADB / CLI
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      Used strictly to modify Android system developer toggles on
                      the user&apos;s explicit command: Master Developer Options (
                      <code className="font-mono text-xs text-slate-200">
                        development_settings_enabled
                      </code>
                      ), USB Debugging (
                      <code className="font-mono text-xs text-slate-200">
                        adb_enabled
                      </code>
                      ), Wireless ADB (
                      <code className="font-mono text-xs text-slate-200">
                        adb_wifi_enabled
                      </code>
                      ), Window/Transition/Animator Animation Scales, Stay Awake
                      while charging, and pointer overlays.{" "}
                      <strong className="text-white">
                        Does not access personal files, photos, messages, or
                        contacts.
                      </strong>
                    </p>
                  </div>

                  {/* Permission 2: PACKAGE_USAGE_STATS */}
                  <div className="rounded-2xl border border-[#06B6D4]/30 bg-[#050D0A]/90 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <code className="font-mono text-xs sm:text-sm font-bold text-[#22D3EE]">
                        android.permission.PACKAGE_USAGE_STATS (Usage Access)
                      </code>
                      <span className="rounded bg-[#06B6D4]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#22D3EE]">
                        OPTIONAL • APP SHIELD STEALTH
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      Used strictly and locally in volatile memory (RAM) by the{" "}
                      <strong className="text-white">App Shield</strong>{" "}
                      background service to detect when user-designated protected
                      applications (such as banking, finance, or enterprise apps)
                      are brought to the foreground, in order to temporarily
                      disable Developer Options and restore it upon closing.{" "}
                      <strong className="text-white">
                        No app usage history, timestamps, or behavioral logs are
                        ever recorded, persisted to disk, or transmitted.
                      </strong>
                    </p>
                  </div>

                  {/* Permission 3: POST_NOTIFICATIONS */}
                  <div className="rounded-2xl border border-white/10 bg-[#050D0A]/90 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <code className="font-mono text-xs sm:text-sm font-bold text-white">
                        android.permission.POST_NOTIFICATIONS
                      </code>
                      <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-300">
                        OPTIONAL • ANDROID 13+
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      Used strictly to display the persistent quick-status
                      notification bar and interactive 1-tap toggle chips in the
                      Android notification shade. Never used for marketing or
                      promotional push alerts.
                    </p>
                  </div>

                  {/* Permission 4: CHANGE_WIFI_MULTICAST_STATE / Local Sockets */}
                  <div className="rounded-2xl border border-white/10 bg-[#050D0A]/90 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <code className="font-mono text-xs sm:text-sm font-bold text-white">
                        CHANGE_WIFI_MULTICAST_STATE / Local LAN Sockets
                      </code>
                      <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-slate-300">
                        LOCAL SUBNET ONLY
                      </span>
                    </div>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      Used strictly to advertise and pair with{" "}
                      <code className="font-mono text-xs text-[#22C55E]">
                        dev-mode-cli
                      </code>{" "}
                      and display your local Wireless ADB IP:Port across your
                      local Wi-Fi network (LAN only; zero external internet
                      egress).
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Third-Party SDKs & Services */}
              <section
                id="third-party-sdks"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 font-mono text-xs font-bold text-[#22C55E]">
                    04
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Third-Party SDKs &amp; Services
                  </h2>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Dev Mode contains{" "}
                  <strong className="text-[#22C55E]">
                    zero third-party tracking, analytics, monetization, or
                    profiling SDKs
                  </strong>
                  . Specifically, the application binary does{" "}
                  <strong className="text-white">NOT</strong> include:
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#050D0A]/70 px-3.5 py-2.5">
                    <span className="text-[#22C55E]">✕</span> No Google Firebase
                    / Crashlytics
                  </li>
                  <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#050D0A]/70 px-3.5 py-2.5">
                    <span className="text-[#22C55E]">✕</span> No Google Analytics
                    / Google Ads (AdMob)
                  </li>
                  <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#050D0A]/70 px-3.5 py-2.5">
                    <span className="text-[#22C55E]">✕</span> No Meta / Facebook
                    Business SDK
                  </li>
                  <li className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#050D0A]/70 px-3.5 py-2.5">
                    <span className="text-[#22C55E]">✕</span> No Sentry, Mixpanel,
                    or Amplitude
                  </li>
                </ul>
              </section>

              {/* 5. Data Storage & Retention */}
              <section
                id="data-storage"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 font-mono text-xs font-bold text-[#22C55E]">
                    05
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Data Storage &amp; Retention
                  </h2>
                </div>
                <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    All user configuration settings—such as your preferred
                    animation speed scale, notification bar preferences, and your
                    selected App Shield package list—are stored exclusively on
                    your device inside Android&apos;s private{" "}
                    <code className="font-mono text-xs text-[#22C55E]">
                      SharedPreferences
                    </code>{" "}
                    sandbox.
                  </p>
                  <p>
                    You can purge all stored preferences at any time using the
                    in-app <strong className="text-white">Instant Cleanup</strong>{" "}
                    feature, by clearing app storage in Android Settings, or by
                    uninstalling the application, which immediately and
                    permanently deletes all local configuration files.
                  </p>
                </div>
              </section>

              {/* 6. Children's Privacy & Security */}
              <section
                id="childrens-privacy"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 font-mono text-xs font-bold text-[#22C55E]">
                    06
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Children&apos;s Privacy &amp; Security
                  </h2>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  Dev Mode is a technical utility designed for software
                  developers and Android power users. The application does not
                  target children under the age of 13 (or the applicable age of
                  digital consent in your jurisdiction) and does not knowingly or
                  unknowingly collect personal information from anyone, including
                  children, in full compliance with COPPA and GDPR requirements.
                </p>
              </section>

              {/* 7. Source Code & Verification */}
              <section
                id="source-verification"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22D3EE]/15 font-mono text-xs font-bold text-[#22D3EE]">
                    07
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Source Code &amp; Verification
                  </h2>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  We believe privacy claims should be cryptographically and
                  publicly verifiable rather than based on trust alone. The
                  complete Kotlin native module, React Native UI, and{" "}
                  <code className="font-mono text-xs text-[#22C55E]">
                    AndroidManifest.xml
                  </code>{" "}
                  definitions are open-source under the MIT License. Security
                  researchers and users can inspect the source code or compile
                  the APK from source directly.
                </p>
                <div className="mt-5">
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#22C55E]/40 bg-[#22C55E]/10 px-4 py-2.5 font-mono text-xs font-bold text-[#22C55E] transition hover:bg-[#22C55E] hover:text-[#050D0A]"
                  >
                    <Github className="h-4 w-4" />
                    Audit Source Code on GitHub
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </section>

              {/* 8. Contact Information & Inquiries */}
              <section
                id="contact"
                className="cyber-card scroll-mt-24 rounded-3xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22C55E]/15 font-mono text-xs font-bold text-[#22C55E]">
                    08
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Contact Information &amp; Inquiries
                  </h2>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  If you have any questions regarding this Privacy Policy,
                  Android permission scopes, or store compliance, please reach
                  out directly via our official GitHub repository or Issue
                  Tracker:
                </p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#050D0A]/90 p-4 transition hover:border-[#22C55E]"
                  >
                    <div>
                      <div className="font-mono text-xs text-[#22C55E]">
                        PRIVACY &amp; SECURITY INQUIRIES
                      </div>
                      <div className="mt-1 font-display text-sm font-bold text-white">
                        GitHub Issue Tracker
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </a>

                  <a
                    href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#050D0A]/90 p-4 transition hover:border-[#22D3EE]"
                  >
                    <div>
                      <div className="font-mono text-xs text-[#22D3EE]">
                        MAINTAINER REPOSITORY
                      </div>
                      <div className="mt-1 font-display text-sm font-bold text-white">
                        @Ryderhxrzy / Dev-Mode-Mobile
                      </div>
                    </div>
                    <Github className="h-4 w-4 text-slate-400" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-[#22C55E]/20 bg-[#050D0A] py-10">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 font-mono">
          <div>
            Dev Mode Android Utility • 100% Private &amp; Rootless • MIT License
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[#22C55E] hover:underline">
              ← Back to Home
            </Link>
            <a
              href="https://github.com/Ryderhxrzy/Dev-Mode-Mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

