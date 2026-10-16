import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050D0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Ryderhxrzy/Dev-Mode-Mobile"),
  title: {
    default: "Dev Mode — Instant Hardware Control & Stealth Mode for Android Developers",
    template: "%s | Dev Mode Android Utility",
  },
  description:
    "Toggle Developer Options, USB Debugging, Wireless ADB, and 0.5x animations with one tap. Automatically bypass banking app restrictions with intelligent App Shield. 100% private, offline, and rootless.",
  keywords: [
    "Android Developer Options",
    "USB Debugging Toggle",
    "Wireless ADB",
    "App Shield Banking Stealth",
    "Android Animation Speed 0.5x",
    "dev-mode-cli",
    "WRITE_SECURE_SETTINGS",
    "Rootless Android Developer Tool",
  ],
  authors: [{ name: "Jhayr Cervantes (@Ryderhxrzy)", url: "https://github.com/Ryderhxrzy" }],
  icons: {
    icon: "/assets/images/icon.png",
    shortcut: "/assets/images/icon.png",
    apple: "/assets/images/icon.png",
  },
  openGraph: {
    title: "Dev Mode — Instant Hardware Control & Stealth Mode for Android Developers",
    description:
      "Single-tap Developer Options, USB/Wi-Fi ADB toggles, 0.5x animation speed booster, CLI bridge, and App Shield banking stealth mode. Zero root, zero telemetry.",
    type: "website",
    siteName: "Dev Mode",
    images: [
      {
        url: "/assets/images/promotion/page_1.png",
        width: 1080,
        height: 1920,
        alt: "Dev Mode Android Utility Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mode — Instant Hardware Control & Stealth Mode for Android",
    description:
      "Toggle Developer Options, USB Debugging, and 0.5x animations in one tap. Bypass banking app blocks automatically with App Shield.",
    images: ["/assets/images/promotion/page_1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050D0A] text-[#ECFDF5] selection:bg-[#22C55E]/30 selection:text-[#22C55E]">
        {children}
      </body>
    </html>
  );
}
