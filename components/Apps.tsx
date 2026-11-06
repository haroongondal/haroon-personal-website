import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REPO = "https://github.com/haroongondal/apps-hub/tree/main";

type App = {
  name: string;
  platforms: string;
  tagline: string;
  summary: string;
  stack: string[];
  sourcePath: string;
  extraLink?: { href: string; label: string };
};

const APPS: App[] = [
  {
    name: "HomeNet",
    platforms: "Android · iOS",
    tagline: "Home network scanner and diagnostics",
    summary:
      "Scans the home Wi-Fi network, names each device from reverse DNS, mDNS, SSDP and NetBIOS replies, and runs connectivity checks. It finds hosts with bounded TCP probes because Android and iOS block the ARP table. There is no telemetry, and every dependency is open source.",
    stack: ["React Native", "Expo", "TypeScript", "Kotlin", "Swift"],
    sourcePath: "apps/netlens",
  },
  {
    name: "TunnelWall",
    platforms: "Android",
    tagline: "VPN client and per-app firewall",
    summary:
      "Connects to free VPN Gate relays or to your own WireGuard servers, with no account or sign-up. A built-in firewall shows data use per app, can block an app on mobile data or everywhere, and keeps a local activity log.",
    stack: ["React Native", "TypeScript", "Kotlin", "OpenVPN", "WireGuard"],
    sourcePath: "apps/open_tunnel_vpn",
  },
  {
    name: "PDF Editor",
    platforms: "Android · Mac",
    tagline: "Offline PDF editor with a searchable library",
    summary:
      "One shared editing engine runs in a WebView on Android and in Electron on the Mac. The phone app keeps documents in a library with folders, tags and full-text search, and it normalises Arabic and Urdu text so searches still match.",
    stack: ["React Native", "Electron", "PDF.js", "pdf-lib", "SQLite"],
    sourcePath: "apps/pdf-editor-mobile",
  },
  {
    name: "Design Editor",
    platforms: "Mac · Android",
    tagline: "Offline Canva-style editor with media tools",
    summary:
      "A design canvas for the Mac built on Electron and Fabric.js, with the same canvas on Android in a WebView. Its media tools compress video to a size limit, clip, convert and make GIFs, using FFmpeg on the Mac and a background Kotlin job queue on the phone.",
    stack: ["Electron", "Fabric.js", "FFmpeg", "React Native", "Kotlin"],
    sourcePath: "apps/design-editor",
  },
  {
    name: "Store",
    platforms: "Android",
    tagline: "Private app store for my own apps",
    summary:
      "Installs and updates the Android apps on this page, itself included. Before every install it checks the file's SHA-256 hash, the package name and the signing certificate. Builds are published from the command line to a Cloudflare Worker that hands out signed download links.",
    stack: ["React Native", "Kotlin", "WorkManager", "Cloudflare Workers"],
    sourcePath: "apps/store",
  },
  {
    name: "Deputy",
    platforms: "Android",
    tagline: "Phone agent that operates other apps",
    summary:
      "Takes a task in plain words and carries it out by reading the screen and tapping, typing and scrolling through other apps with an accessibility service. The agent loop runs in Kotlin, and it stops to ask before any step it can't undo.",
    stack: ["React Native", "Kotlin", "Accessibility API", "LLM tool calling"],
    sourcePath: "apps/deputy",
  },
  {
    name: "Strongroom",
    platforms: "Android · Chrome",
    tagline: "Password manager in my own code",
    summary:
      "Keeps logins in an encrypted vault on the device and fills them into other apps through Android's autofill service. The vault logic lives in Kotlin, and a Chrome extension covers the browser.",
    stack: ["Kotlin", "React Native", "Android Autofill", "Chrome extension"],
    sourcePath: "apps/strongroom",
    extraLink: { href: "/strongroom", label: "Chrome extension" },
  },
];

function AppCard({ app, index }: { app: App; index: number }) {
  return (
    <Reveal delay={index * 60} className="h-full">
      <article className="card card-hover flex h-full flex-col p-7">
        <span className="self-start rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
          {app.platforms}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-foreground">{app.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{app.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{app.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {app.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-edge bg-raised px-2.5 py-1 font-mono text-xs text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-5 pt-6 text-sm font-semibold">
          <a
            href={`${REPO}/${app.sourcePath}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-3 transition-colors"
          >
            View source
          </a>
          {app.extraLink && (
            <Link href={app.extraLink.href} className="text-accent hover:text-accent-3 transition-colors">
              {app.extraLink.label}
            </Link>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Apps() {
  return (
    <section id="apps" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Apps"
            title="Apps I build for myself"
            description="Phone and Mac apps I wrote for my own devices. They share one monorepo of TypeScript packages and native Kotlin and Swift modules, and my phone installs them from a private store I also built."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {APPS.map((app, i) => (
            <AppCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
