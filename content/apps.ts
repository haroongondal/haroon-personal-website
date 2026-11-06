import type { Detail } from "@/components/DetailPage";

const REPO = "https://github.com/haroongondal/apps-hub/tree/main";

export const APP_PAGES: Detail[] = [
  {
    slug: "deputy",
    name: "Deputy",
    eyebrow: "Android",
    tagline: "A phone agent that uses my apps for me",
    stack: ["React Native", "Kotlin", "Accessibility API", "LLM tool calling", "Media3"],
    sourceUrl: `${REPO}/apps/deputy`,
    purpose: [
      "Most phone chores are a few taps across one or two apps, done again and again: telling someone I'm running late, reordering lunch, clearing old screenshots, checking a balance. I wanted to say the task and have the phone do it.",
      "No assistant did that end to end. Google's assistant reaches only apps that publish actions for it, and the open-source phone agents that can operate any app run their brain on a computer connected over a cable. Deputy runs the whole agent on the phone.",
    ],
    features: [
      "Takes a task typed or spoken, then opens apps, reads the screen, and taps, types and scrolls until the task is done.",
      "Asks before any step that can't be undone: sending, paying, buying, deleting, posting or changing security settings.",
      "Treats financial and investment apps as read-only until I allow more.",
      "Asks before typing in a browser or tapping anything that looks like a link, so text on a web page or in a message can't steer it.",
      "Turns photos on the phone into a video itself, without driving an editing app.",
      "Hold the mic and it runs the task as soon as I stop talking. Tap it to dictate and check first.",
    ],
    howItWorks: [
      "Android's accessibility service gives Deputy the screen as a tree of labelled elements and lets it act on them, with no root needed. The agent loop runs in native Kotlin, because React Native's timers stop when the app isn't in the foreground, which is exactly when Deputy is working. React Native only draws the screens.",
      "It talks to any OpenAI-compatible model endpoint, and the default is a small, fast Gemini model. At each step the model sees the current screen and picks one action, and a policy layer in Kotlin decides which actions need my approval before they run.",
    ],
    questions: [
      {
        question: "Why build a phone agent when Google already has Gemini?",
        answer: [
          "Gemini can act only inside apps that publish actions for it, and most of the apps I use every day don't. Deputy works through the accessibility layer, so it can use any app the way I would, and the safety rules are mine: it never sends, pays or deletes without asking.",
          "The other agents that can drive any app expect a computer attached to the phone. That's fine on a desk and no use on the sofa or on the move.",
        ],
      },
    ],
    status:
      "Android only, on my own phone, installed from my private Store. It will never be on Play. There's no iOS version, because iOS offers apps nothing like Android's accessibility control.",
  },
  {
    slug: "strongroom",
    name: "Strongroom",
    eyebrow: "Android · Chrome",
    tagline: "A password manager written entirely in my own code",
    stack: ["Kotlin", "React Native", "TypeScript", "Android Autofill", "Chrome extension", "Cloudflare Workers"],
    sourceUrl: `${REPO}/apps/strongroom`,
    extraLink: { href: "/strongroom", label: "Chrome extension" },
    purpose: [
      "I wanted my passwords out of Google and out of every other company's hands. I had four reasons. A company could read them, whatever it says about encryption. A breach could leak them. A locked or closed account would take every password with it. And I wanted to own the thing that holds them.",
      "The last reason decided it. Strongroom replaces Google Password Manager on my phone and in Chrome.",
    ],
    features: [
      "Stores logins, payment cards and secure notes in an encrypted vault.",
      "Fills logins into Android apps and websites through Android's autofill service, and cards into card fields, including on Chrome checkout pages.",
      "Offers to save a new login, or to update one whose password changed.",
      "Imports everything from a Google Password Manager export.",
      "Syncs through my own Cloudflare account, which only ever holds ciphertext.",
      "A recovery key, shown once at setup, is the only way back in if the master password is forgotten.",
      "A Chrome extension fills and saves logins on websites.",
    ],
    howItWorks: [
      "The master password goes through Argon2id to make a key that unlocks the vault key, and every record is encrypted with AES-256-GCM under a fresh random nonce. Changing the master password re-wraps one key and touches nothing else. On Android the vault logic is Kotlin. The Chrome extension is a TypeScript implementation of the same vault format.",
      "The sync server sees record IDs, sizes and timestamps, never names, sites, usernames or passwords. Every device keeps a full local copy, so losing the server would cost sync, not passwords.",
      "Copied passwords are cleared from the clipboard after 30 seconds, even if the system kills the app in the meantime.",
    ],
    questions: [
      {
        question: "Why write a password manager when Bitwarden and KeePass exist?",
        answer: [
          "They're good, and self-hosting Bitwarden through Vaultwarden was the obvious option. I turned it down on purpose. The point was that everything holding my passwords is code I wrote and can read end to end.",
        ],
      },
      {
        question: "Isn't writing your own password manager risky?",
        answer: [
          "Writing your own cryptography would be, so I didn't. The cipher and the key derivation come from audited libraries. What I wrote is the vault format, sync, autofill and the apps around them, and the design was written down and reviewed before any of it was built.",
        ],
      },
    ],
    status:
      "Version 0.2.1 runs on my Android phone with sync, alongside the Chrome extension. An iPhone app and a Safari extension wait on a paid Apple developer account.",
  },
  {
    slug: "homenet",
    name: "HomeNet",
    eyebrow: "Android · iOS",
    tagline: "See who is on your Wi-Fi, and why the internet is slow",
    stack: ["React Native", "Expo", "TypeScript", "Kotlin", "Swift", "SQLite"],
    sourceUrl: `${REPO}/apps/netlens`,
    purpose: [
      "I wanted to see what is connected to my home Wi-Fi, by name, and to find out why the internet is slow without guessing. The well-known apps for this, Fing and NetSpot, keep features like device history and automated pings behind a subscription, and commercial scanners collect data about the networks they scan.",
      "HomeNet is the app I wanted instead: free, no account, no telemetry, and built only from open-source dependencies that F-Droid would accept.",
    ],
    features: [
      "Scans the network the phone is on and lists every device it finds, named from reverse DNS, mDNS, SSDP and NetBIOS replies.",
      "Marks devices it hasn't seen on that network before with a NEW badge.",
      "Lets you rename a device and mark it as trusted. A rescan never overwrites the name you gave it.",
      "Tests latency to the router, to the internet and to DNS, then says in plain words where the slowdown is: your Wi-Fi or your provider.",
      "Still works when location permission is denied.",
    ],
    howItWorks: [
      "Android and iOS no longer let apps read the ARP table, so HomeNet can't simply ask which devices the router knows about. It sweeps the subnet itself with TCP probes on common ports, at most 64 at a time so the phone doesn't run out of sockets, and adds whatever mDNS and SSDP announcements reveal.",
      "The screens are React Native with Expo. The network work runs in native modules, Kotlin on Android and Swift on iOS, and results are kept in a local SQLite database so new devices stand out on the next scan.",
    ],
    questions: [
      {
        question: "Why build a network scanner when Fing already exists?",
        answer: [
          "Fing does the job, but the parts I cared about sit behind a subscription, and I couldn't see what it sends home about my network. A scanner is a tool you point at your own devices, so I wanted one whose code I can read and that sends nothing anywhere.",
          "It also turned out to be a good lesson in how little a modern phone app is allowed to see on a network, and how to work around that with probes and discovery protocols.",
        ],
      },
    ],
    status:
      "The Android app installs from my private Store. iOS builds need a paid Apple developer account to install, so that side waits.",
  },
  {
    slug: "tunnelwall",
    name: "TunnelWall",
    eyebrow: "Android",
    tagline: "A free VPN and a per-app firewall, with no account",
    stack: ["React Native", "TypeScript", "Kotlin", "OpenVPN", "WireGuard", "SQLite"],
    sourceUrl: `${REPO}/apps/open_tunnel_vpn`,
    purpose: [
      "I wanted my phone to be a complete toolkit for my own network without buying a security suite. HomeNet looks after the Wi-Fi. TunnelWall looks after the phone's own traffic: which apps go online, how much data they use, and stopping the ones I don't want.",
      "It started as a VPN client for VPN Gate, a free network of volunteer relays run by the University of Tsukuba, so I could use a VPN without signing up anywhere. The firewall joined it later because Android allows only one VPN at a time, and a firewall on a phone works by being that VPN.",
    ],
    features: [
      "Lists VPN Gate relays, measures their latency and connects with OpenVPN. No account or sign-up.",
      "Connects to your own WireGuard servers.",
      "Shows data use per app, and blocks an app on mobile data or everywhere.",
      "Keeps a local log of what each app connected to, and can pause the firewall.",
    ],
    howItWorks: [
      "The relay list is fetched over HTTPS and parsed, cleaned and scored by latency in a plain TypeScript package, then cached in SQLite, so the last list shows at once while a fresh one loads. Android's VpnService hosts the tunnel, with ics-openvpn for the relays and the official WireGuard library for my own servers.",
      "The firewall runs on firestack, the open-source network engine from the RethinkDNS app. Its Go runtime crashes when it shares a process with WireGuard's, so the firewall lives in its own Android process and shares its state with the screens through a database.",
      "A security review hardened the relay path. The list is fetched over HTTPS only, each relay must present a certificate for the VPN Gate operator's domain, and relay configs are cut down to the directives VPN Gate uses, so a hostile relay can't write files on the phone.",
    ],
    questions: [
      {
        question: "Why build a VPN app when there are hundreds of free ones?",
        answer: [
          "Free VPN apps usually want an account, and I had no way to check what they do with the traffic they carry. VPN Gate relays are free and need no account, but using them normally means downloading config files and importing them into a separate OpenVPN app. TunnelWall puts the relay list, the connection and a firewall in one app that reports to nobody.",
        ],
      },
      {
        question: "Why not just install RethinkDNS for the firewall?",
        answer: [
          "RethinkDNS is a good app, and TunnelWall's firewall is built on its engine. The problem is that Android runs one VPN at a time, so a separate firewall app and a VPN app can't both be on. Putting both in one app solves that.",
        ],
      },
    ],
    status:
      "Android only, installed from my private Store. The app is GPL-2.0 because it includes ics-openvpn. An iOS version is partly built.",
  },
  {
    slug: "design-editor",
    name: "Design Editor",
    eyebrow: "Mac · Android",
    tagline: "An offline Canva-style editor with video tools",
    stack: ["Electron", "Fabric.js", "FFmpeg", "React Native", "Kotlin", "Media3"],
    sourceUrl: `${REPO}/apps/design-editor`,
    purpose: [
      "I make social graphics and share video clips on Discord and by email. Canva Pro and CapCut charge $10 to $20 a month each for the parts I need, free Canva asks for an upgrade even to export a video at 480p, and the free compressor apps add a watermark or upload the file.",
      "The most common failure is size. Discord's free limit is 20 MB and Gmail's is 25 MB, while a one-minute 1080p phone clip is around 100 MB. I wanted one offline app, on the Mac and on the phone, that makes the design and fits the video under the limit.",
    ],
    features: [
      "Multi-page designs with templates, shapes, text, uploaded images and a brand kit.",
      "Magic resize between nine presets, from an Instagram story to A4.",
      "A background remover for product shots and logos on plain backgrounds.",
      "Downloads as PNG, JPG, SVG or PDF. PDFs keep real, selectable text.",
      "Media tools: compress a video to a size limit, clip, convert, make GIFs, change volume, reverse and stabilise, many files at a time.",
      "On the phone, the same canvas, plus a timeline that turns photos and clips into a video with sound.",
    ],
    howItWorks: [
      "The canvas is Fabric.js. On the Mac it runs in Electron, and FFmpeg does the media work in the main process. On Android the same canvas runs in a WebView, and the media tools run as native Kotlin jobs in a background queue on the phone's hardware encoders, with a pinned FFmpeg build for the few jobs the encoders can't do.",
      "Fitting a size limit starts with arithmetic: the tool works out the bitrate that fits before it encodes. A one-minute clip under 20 MB, for example, comes out as 720p at about 2.2 Mbit/s.",
    ],
    questions: [
      {
        question: "Why build a design editor when Canva is free?",
        answer: [
          "Free Canva covers simple graphics, but it asks for an upgrade for the video exports I need, and every file lives in its account. CapCut keeps its video tools behind a subscription too. Together they would cost me $25 to $40 a month.",
          "Building it let me put the design canvas and the video tools in one app that works offline on both my Mac and my phone, with no watermark and no upload.",
        ],
      },
    ],
    status:
      "The Mac app runs on my Mac, and the Android app installs from my private Store.",
  },
  {
    slug: "store",
    name: "Store",
    eyebrow: "Android",
    tagline: "A private app store for my own apps",
    stack: ["React Native", "Kotlin", "WorkManager", "Cloudflare Workers", "Cloudflare R2", "GitHub Actions"],
    sourceUrl: `${REPO}/apps/store`,
    purpose: [
      "My Android apps are built for me and my phone, and I release them often. Copying APKs to the phone by hand got old quickly, and it skipped every check that an installed app is the one I built.",
      "So I built a store just for them. A push to main publishes every app whose code changed, and the Store on my phone shows the update and installs it, including updates to itself.",
    ],
    features: [
      "Lists my apps, shows which ones have updates, and installs or updates them.",
      "Checks each download's SHA-256 hash, package name and signing certificate before installing it.",
      "Checks for updates in the background.",
      "Download links are signed and expire after 10 minutes.",
      "One command, pnpm release, builds, verifies and publishes an app by hand.",
      "CI publishes each app whose folder, native module or shared packages changed on every push to main.",
    ],
    howItWorks: [
      "Builds are uploaded to Cloudflare R2 through a small Cloudflare Worker, which also keeps the store's manifest. The Store app fetches the manifest with a token, asks the Worker for a signed download link, and hands the verified APK to Android's package installer.",
      "Every app is signed with one key, and the Store pins that certificate, so an APK signed by anyone else is refused. Downloads and update checks run on WorkManager, so they finish even when the app is in the background.",
    ],
    questions: [
      {
        question: "Why not just publish to Google Play?",
        answer: [
          "These apps exist for one phone, mine. Play would mean a developer account, a review for every release, and policy reviews for an app that controls other apps through accessibility and another that runs a VPN. None of that buys anything when the only user is me.",
          "A private store gives me one-command releases, my own signing key and checks I control, and it was a small amount of code: one Worker and one app.",
        ],
      },
    ],
    status:
      "Installed on my phone and keeping my other apps up to date. iOS isn't set up, because installing outside the App Store needs a paid Apple developer account.",
  },
];
