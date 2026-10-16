"use client";

import React, { useState } from "react";
import {
  Terminal,
  Play,
  RotateCcw,
  Wifi,
  Zap,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

interface CommandPreset {
  id: string;
  cmd: string;
  label: string;
  badge: string;
  showActivatedHeader?: boolean;
  output: string[];
}

const ASCII_BANNER = [
  "  ██████╗ ███████╗██╗   ██╗   ███╗   ███╗ ██████╗ ██████╗ ███████╗  │        ▄▄           ▄▄     ",
  "  ██╔══██╗██╔════╝██║   ██║   ████╗ ████║██╔═══██╗██╔══██╗██╔════╝  │        ▀██▄  ▄▄▄▄  ▄██▀     ",
  "  ██║  ██║█████╗  ██║   ██║   ██╔████╔██║██║   ██║██║  ██║█████╗    │       ▄████████████████▄   ",
  "  ██║  ██║██╔══╝  ╚██╗ ██╔╝   ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝    │      ████  ████████  ████  ",
  "  ██████╔╝███████╗ ╚████╔╝    ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗  │      ████████████████████  ",
  "  ╚═════╝ ╚══════╝  ╚═══╝     ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝  │     (════════[● ON]═══════)",
  "   ⚡ Android Quick-Toggle & Wireless ADB CLI  v1.0.11",
  "   ─────────────────────────────────────────────────────────────────────────────────────────",
];

const COMMAND_PRESETS: CommandPreset[] = [
  {
    id: "on",
    cmd: "npx dev-mode-cli on",
    label: "devmode on",
    badge: "ENABLE DEV MODE",
    showActivatedHeader: true,
    output: [
      "              ⚡ DEV MODE : ACTIVATED [ON] ⚡",
      "       [ Android Developer Options & Wireless ADB ]",
      "",
      "  → Target: Pixel 8 Pro",
      "  → Enabling Developer Options...",
      "  ✔ Developer Options: ENABLED",
      "  Dev Mode widgets and status bar notification synchronized.",
      "",
      "  ╭──────────────────────────────────────────────────────────────────────────────╮",
      "  │  👋 Good afternoon, Developer! Welcome back to Dev Mode!                     │",
      "  │  ✨ Wishing you clean builds, fast reloads, and zero bugs today!             │",
      "  ╰──────────────────────────────────────────────────────────────────────────────╯",
      "",
      "  AVAILABLE COMMANDS:",
      "    devmode on                → Enable Developer Options only",
      "    devmode wifi on           → Auto-connect Wireless ADB over Wi-Fi",
      "    devmode start             → Auto-detect and start development server",
      "    devmode start --native    → Start Native Studio (Kotlin & Live Logcat)",
      "    devmode api bridge        → Smart Local API Bridge with auto-reconnect",
      "    devmode grant             → Grant permissions to Dev Mode mobile app",
      "    devmode status            → Show full device diagnostics",
      "    devmode off               → Disable Developer Options",
    ],
  },
  {
    id: "status",
    cmd: "devmode status",
    label: "devmode status",
    badge: "DIAGNOSTICS",
    output: [
      "  DEVICE INFORMATION:",
      "  • Model                     : Pixel 8 Pro",
      "  • Serial / ID               : 39141FDJH0042K",
      "  • Connection Type           : Wi-Fi (Wireless ADB)",
      "",
      "  DEVELOPER SETTINGS STATUS:",
      "  • Developer Options         : ENABLED (ON)",
      "  • USB Debugging             : ENABLED (ON)",
      "  • Wireless Debugging        : ENABLED (ON)",
      "  • Device Wi-Fi IP           : 192.168.1.42",
      "  • Active Wireless Port      : 39481",
      "  • Animation Scale           : 0.5x",
    ],
  },
  {
    id: "wifi",
    cmd: "devmode wifi on",
    label: "devmode wifi on",
    badge: "AUTO WI-FI ADB",
    output: [
      "  → Target device: Pixel 8 Pro (39141FDJH0042K)",
      "  → Enabling Wireless Debugging on device...",
      "  → Resolving device local Wi-Fi IP address...",
      "  ✔ Local IP detected: 192.168.1.42",
      "  → Resolving dynamic Wireless ADB port...",
      "  ✔ Wireless Port: 39481",
      "  → Automatically connecting: adb connect 192.168.1.42:39481...",
      "",
      "  ╔════════════════════════════════════════════════════════╗",
      "  ║  ✔ WIRELESS ADB CONNECTED SUCCESSFULLY!                ║",
      "  ╚════════════════════════════════════════════════════════╝",
      "  • Endpoint:  192.168.1.42:39481",
      "  • Status:    ACTIVE & CONNECTED",
      "",
      "  🎉 You can now safely unplug your USB cable!",
      "",
      "  💡 🚀 Cable-free mode unlocked! Code comfortably from anywhere — you’ve got this!",
    ],
  },
  {
    id: "bridge",
    cmd: "devmode bridge",
    label: "devmode bridge",
    badge: "MOBILE WI-FI BRIDGE",
    output: [
      "  ℹ Searching for Dev Mode Mobile App on local Wi-Fi...",
      "  ✔ Connected to Dev Mode Mobile App!",
      "",
      "  • Phone IP Address          : 192.168.1.42",
      "  • Bridge Port               : 52882",
      "  • Developer Options         : ENABLED (ON)",
      "  • USB Debugging             : ENABLED (ON)",
      "  • Wireless Debugging        : ENABLED (ON)",
      "",
      "  Bridge is active! You can toggle settings from PC even if USB Debugging is OFF.",
    ],
  },
  {
    id: "api-bridge",
    cmd: "devmode api bridge",
    label: "devmode api bridge",
    badge: "LOCAL API TUNNEL",
    output: [
      "  DevMode CLI — Smart API Bridge",
      "  ──────────────────────────────",
      "",
      "  Backend",
      "  ✔ Node.js / Laravel server detected",
      "  ✔ Local server running :8000",
      "",
      "  Android Device",
      "  ✔ Pixel 8 Pro (39141FDJH0042K) connected",
      "  ✔ ADB authorized",
      "",
      "  API Bridge",
      "  ✔ Reverse mapping established (tcp:8000 -> tcp:8000)",
      "  ✔ Connection verified",
      "  ✔ Auto-reconnect enabled",
      "  ✔ Live API Request Logs: ON (press [l] to toggle)",
      "",
      "  Android API URL:",
      "  http://127.0.0.1:8000",
      "",
      "  REST:    http://127.0.0.1:8000/api (example)",
      "  GraphQL: Configure your actual GraphQL path (e.g. http://127.0.0.1:8000/graphql)",
      "",
      "  💡 🚀 Local API Bridge is live! Save your backend code and test on your phone right away — happy building!",
    ],
  },
  {
    id: "grant",
    cmd: "npx dev-mode-cli grant",
    label: "devmode grant",
    badge: "1-TIME PERMISSION",
    output: [
      "  → Target: Pixel 8 Pro",
      "  → Granting WRITE_SECURE_SETTINGS to com.devmode.app...",
      "  ✔ Permission GRANTED successfully!",
      "  Dev Mode mobile app can now toggle Developer Options, USB, and widgets rootless.",
    ],
  },
  {
    id: "speed",
    cmd: "devmode speed 0.5",
    label: "devmode speed 0.5",
    badge: "0.5x BOOSTER",
    output: [
      "  → Setting system animation scale to 0.5x...",
      "  ✔ Animation scales updated to 0.5x (Speed Booster applied)",
      "",
      "  💡 ⚡ Snappy UI unlocked! Less waiting on animations, more time shipping features!",
    ],
  },
];

export function TerminalSimulator() {
  const [selectedId, setSelectedId] = useState<string>("on");
  const [copiedCmd, setCopiedCmd] = useState(false);

  const currentPreset =
    COMMAND_PRESETS.find((p) => p.id === selectedId) || COMMAND_PRESETS[0];

  const runCommand = (preset: CommandPreset) => {
    setSelectedId(preset.id);
  };

  const copyActiveCommand = async () => {
    try {
      await navigator.clipboard.writeText(currentPreset.cmd);
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full">
      {/* Preset Command Selector Bar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {COMMAND_PRESETS.map((preset) => {
            const active = selectedId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => runCommand(preset)}
                className={`group flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs transition-all cursor-pointer ${
                  active
                    ? "border border-[#22C55E] bg-[#22C55E]/15 text-[#22C55E] shadow-[0_0_20px_rgba(34,197,94,0.25)]"
                    : "border border-white/10 bg-[#080F0C] text-slate-300 hover:border-[#22C55E]/40 hover:text-white"
                }`}
              >
                <Play
                  className={`h-3 w-3 ${
                    active ? "fill-[#22C55E] text-[#22C55E]" : "text-slate-400"
                  }`}
                />
                <span>{preset.label}</span>
                <span className="hidden xl:inline-block rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">
                  {preset.badge}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setSelectedId("on")}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#080F0C] px-3 py-1.5 font-mono text-xs text-slate-400 hover:border-white/25 hover:text-slate-200 cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      {/* Terminal Window */}
      <div className="cyber-card overflow-hidden rounded-2xl border border-[#22C55E]/30 bg-[#050D0A]/95 shadow-[0_0_50px_-12px_rgba(34,197,94,0.25)]">
        {/* Window Titlebar */}
        <div className="flex items-center justify-between border-b border-[#22C55E]/20 bg-[#080F0C] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-[#22C55E]/80" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-slate-300">
              <Terminal className="h-3.5 w-3.5 text-[#22C55E]" />
              dev-mode-cli v1.0.11 — node bin/dev-mode.js
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-2.5 py-0.5 font-mono text-[11px] text-[#22D3EE]">
              <Wifi className="h-3 w-3" />
              Port 52882 / ADB
            </span>
            <button
              type="button"
              onClick={copyActiveCommand}
              className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:border-[#22C55E]/40 hover:text-[#22C55E] cursor-pointer"
            >
              {copiedCmd ? (
                <>
                  <Check className="h-3 w-3 text-[#22C55E]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  Copy Command
                </>
              )}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="overflow-x-auto p-4 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed">
          {/* Command Prompt Line */}
          <div className="mb-3 flex items-center gap-2">
            <span className="font-bold text-[#22C55E]">PS C:\dev&gt;</span>
            <span className="font-bold text-white">{currentPreset.cmd}</span>
          </div>

          {/* Official Dev Mode CLI ASCII Banner */}
          <pre className="text-[10px] sm:text-xs leading-[1.25] font-bold text-[#22C55E] select-none overflow-x-auto">
            {ASCII_BANNER.join("\n")}
          </pre>

          {/* Command-Specific Real CLI Output */}
          <div className="mt-3 space-y-0.5">
            {currentPreset.output.map((line, idx) => {
              let lineColor = "text-slate-300";
              if (
                line.includes("✔") ||
                line.includes("ENABLED (ON)") ||
                line.includes("ACTIVATED [ON]") ||
                line.includes("╔═") ||
                line.includes("║  ✔") ||
                line.includes("╚═") ||
                line.includes("╭─") ||
                line.includes("╰─") ||
                line.includes("http://127.0.0.1:8000")
              ) {
                lineColor = "text-[#22C55E] font-semibold";
              } else if (
                line.includes("→") ||
                line.includes("ℹ") ||
                line.includes("✨") ||
                line.includes("DevMode CLI — Smart API Bridge")
              ) {
                lineColor = "text-[#22D3EE]";
              } else if (line.includes("🎉") || line.includes("💡")) {
                lineColor = "text-amber-300 font-semibold";
              } else if (
                line.includes("DEVICE INFORMATION:") ||
                line.includes("DEVELOPER SETTINGS STATUS:") ||
                line.includes("AVAILABLE COMMANDS:") ||
                line.includes("Backend") ||
                line.includes("Android Device") ||
                line.includes("API Bridge") ||
                line.includes("Android API URL:")
              ) {
                lineColor = "text-white font-bold";
              } else if (line.includes("•")) {
                lineColor = "text-emerald-200";
              }

              return (
                <pre
                  key={idx}
                  className={`font-mono whitespace-pre ${lineColor}`}
                >
                  {line || " "}
                </pre>
              );
            })}
          </div>

          {/* Active Prompt Cursor */}
          <div className="mt-5 flex items-center gap-2">
            <span className="font-bold text-[#22C55E]">PS C:\dev&gt;</span>
            <span className="inline-block h-4 w-2 bg-[#22C55E] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnimationSpeedComparator() {
  const [speed, setSpeed] = useState<"0.0" | "0.5" | "1.0">("0.5");
  const [triggerKey, setTriggerKey] = useState(0);

  const selectSpeed = (newSpeed: "0.0" | "0.5" | "1.0") => {
    setSpeed(newSpeed);
    setTriggerKey((prev) => prev + 1);
  };

  const presets = [
    {
      value: "0.0" as const,
      multiplier: "0.0x",
      tag: "Instant",
      title: "0ms Instant UI (Zero Animation)",
      badge: "ULTRA FAST",
      barWidth: "w-full",
      duration: "duration-0",
    },
    {
      value: "0.5" as const,
      multiplier: "0.5x",
      tag: "Boost",
      title: "150ms Snappy UI (Speed Booster)",
      badge: "2X FASTER",
      barWidth: "w-full",
      duration: "duration-150",
    },
    {
      value: "1.0" as const,
      multiplier: "1.0x",
      tag: "Stock",
      title: "300ms Default Stock Android",
      badge: "STANDARD",
      barWidth: "w-full",
      duration: "duration-700",
    },
  ];

  const activePreset =
    presets.find((p) => p.value === speed) || presets[1];

  return (
    <div className="mt-6 rounded-2xl border border-[#22C55E]/25 bg-[#050D0A]/95 p-4 sm:p-5 shadow-[inset_0_0_25px_rgba(34,197,94,0.05)] space-y-4">
      {/* Top CLI Command Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#22C55E]/15 pb-3">
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-[#22C55E] font-bold">$</span>
          <span className="text-[#ECFDF5] font-semibold">
            devmode speed {speed}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#22C55E]/35 bg-[#22C55E]/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#22C55E]">
          <CheckCircle2 className="h-3 w-3 shrink-0" />
          0 Battery Penalty
        </span>
      </div>

      {/* 3 Equal-Width Selector Buttons (No Compression) */}
      <div className="grid grid-cols-3 gap-2.5">
        {presets.map((preset) => {
          const isSelected = speed === preset.value;
          return (
            <button
              key={preset.value}
              type="button"
              onClick={() => selectSpeed(preset.value)}
              className={`flex flex-col items-center justify-center rounded-xl border py-2.5 px-2 font-mono transition-all cursor-pointer ${
                isSelected
                  ? "border-[#22C55E] bg-[#22C55E]/15 text-[#22C55E] shadow-[0_0_20px_-4px_rgba(34,197,94,0.35)]"
                  : "border-[#22C55E]/15 bg-[#080F0C] text-slate-400 hover:border-[#22C55E]/40 hover:bg-[#0D1612] hover:text-[#ECFDF5]"
              }`}
            >
              <span
                className={`text-sm sm:text-base font-bold tracking-tight ${
                  isSelected ? "text-[#22C55E]" : "text-[#ECFDF5]"
                }`}
              >
                {preset.multiplier}
              </span>
              <span
                className={`mt-0.5 text-[11px] ${
                  isSelected ? "text-emerald-300 font-semibold" : "text-slate-400"
                }`}
              >
                ({preset.tag})
              </span>
            </button>
          );
        })}
      </div>

      {/* Spacious Telemetry & Live Animation Preview Box */}
      <div className="rounded-xl border border-[#22C55E]/20 bg-[#080F0C] p-3.5 sm:p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#22C55E]/30 bg-[#22C55E]/15 text-[#22C55E]">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-[#ECFDF5] leading-snug">
                {activePreset.title}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-[#22D3EE]">
                window / transition / animator = {speed}x
              </div>
            </div>
          </div>

          <span className="shrink-0 rounded-md border border-[#06B6D4]/30 bg-[#06B6D4]/10 px-2 py-0.5 font-mono text-[10px] font-bold text-[#22D3EE]">
            {activePreset.badge}
          </span>
        </div>

        {/* Animated Transition Bar */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#050D0A] border border-white/5 p-0.5">
          <div
            key={triggerKey}
            className={`h-full rounded-full bg-gradient-to-r from-[#22C55E] to-[#22D3EE] transition-all ease-out ${activePreset.duration} ${activePreset.barWidth}`}
          />
        </div>

        {/* System Scale Breakdown Pills */}
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
          <div className="rounded-lg border border-white/5 bg-[#050D0A]/80 px-2.5 py-1.5 text-center">
            <span className="text-slate-400 block text-[10px]">WINDOW</span>
            <span className="font-bold text-[#22C55E]">{speed}x</span>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#050D0A]/80 px-2.5 py-1.5 text-center">
            <span className="text-slate-400 block text-[10px]">TRANSITION</span>
            <span className="font-bold text-[#22C55E]">{speed}x</span>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#050D0A]/80 px-2.5 py-1.5 text-center">
            <span className="text-slate-400 block text-[10px]">ANIMATOR</span>
            <span className="font-bold text-[#22D3EE]">{speed}x</span>
          </div>
        </div>
      </div>
    </div>
  );
}
