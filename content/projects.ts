import type { Detail } from "@/components/DetailPage";

export const PROJECT_PAGES: Detail[] = [
  {
    slug: "agent-builder",
    name: "Agent Builder",
    eyebrow: "Work project · Multi-agent platform",
    tagline: "Research agents for a financial research firm",
    stack: ["TypeScript", "Mastra", "Claude", "Vercel AI SDK", "MCP", "NestJS", "React", "libSQL", "Docker"],
    purpose: [
      "Analysts at a financial research firm spend earnings season on work that follows the same steps every time. They watch the calendar of earnings events, cross-reference their own reports, write a daily digest, and after every expert call they write the call up as anecdotes in the firm's house style.",
      "The goal was agents that do the repetitive part and leave the judgment to the analysts: everything arrives as a draft, and a person checks it and sends it.",
    ],
    features: [
      "An earnings monitor that pulls the watchlist from Aiera over MCP, writes digests, updates Google Calendar and leaves Gmail drafts, run per user with their own Google connection.",
      "A transcript pipeline: when a Zoom call ends, a 5-pass LLM pipeline turns the transcript into analyst anecdotes and attaches them as a .docx to a Gmail draft.",
      "Anecdote channels, each with its own KPIs, tone, recipients and call matchers, plus a review queue.",
      "An editor agent that separates one-off edits from lasting house rules. A person approves each rule before it applies.",
      "A research chat agent with semantic memory recall, working memory and tool approval prompts.",
      "Shared and private knowledge bases built from PDF and markdown, embedded locally.",
      "Monitoring with traces, health checks, deduplicated alerts and cost estimates, plus sampled online scoring and an offline eval gate.",
    ],
    howItWorks: [
      "A React front end talks to a NestJS gateway, which forwards to a Mastra agent service. The earnings sweep dedupes events with single-purpose LLM calls and sends small research agents for consensus figures and price anchors. Code then builds the digest, updates the calendar and creates the drafts, and records what it did so the next run doesn't repeat it.",
      "The Zoom webhook is verified with a constant-time signature check and answered at once. The slow work goes to a queue, where a background worker runs the anecdote passes: KPI selection, synthesis, a lint and rewrite pass, a completeness check, and sentiment. A larger Claude model does the synthesis and smaller ones do the rest.",
      "The base prompts never change, so they stay cached, and learned house rules are appended after them. MCP tools are mapped to fixed names, so the model never sees each server's raw tool names. Per-user Google tokens are encrypted at rest with AES-256-GCM.",
    ],
    questions: [
      {
        question: "Why build agents when ChatGPT or Copilot already exist?",
        answer: [
          "A chat assistant answers when someone asks it something. This work has to start on its own, on a schedule and whenever a call ends. It has to read the firm's own sources, follow its house style, and land in its Gmail and calendar as drafts for a person to check.",
          "That takes code around the model: the workflow, the state, deduplication and templates. The model is used only for the steps that need judgment, like choosing which KPIs a call touched and writing the synthesis. Everything else is ordinary code that does the same thing every time.",
        ],
      },
      {
        question: "Why rebuild an anecdote pipeline the firm already had?",
        answer: [
          "Rebuilding it on Mastra put it in the same system as the other agents. It gained the review queue, editable channels, monitoring and evals, and an editor agent that learns house rules from analysts' edits, with a person approving each rule.",
        ],
      },
    ],
    status:
      "Packaged with Docker for the firm's team. Sign-in through the Centralised Auth Service is built on a branch.",
  },
  {
    slug: "centralised-auth-service",
    name: "Centralised Auth Service",
    eyebrow: "Work project · Identity & access",
    tagline: "One sign-in and one access policy for a company's internal apps",
    stack: ["TypeScript", "Cloudflare Workers", "Hono", "Workers KV", "NestJS", "SQLite", "Drizzle", "React", "AWS", "GitHub Actions"],
    purpose: [
      "Every internal app at the company had its own login and its own idea of permissions. One used database roles, one used shared API keys and one had no auth at all. Nobody could answer \"what can this person see?\" in one place, and removing someone meant visiting every app.",
      "The service gives the company one sign-in for all of its apps and one policy that says what each person may see inside each of them.",
    ],
    features: [
      "Passwordless sign-in across domains, with a magic link or a one-time code.",
      "An edge gateway with per-host routes, API path routing and public lanes for webhooks.",
      "An admin portal for users, groups and grants with include and exclude limits, plus publishing and version history.",
      "A policy compiler that turns the admin database into a versioned SQLite file.",
      "An SDK with Express middleware and a token verifier that also runs at the edge.",
      "App tokens for deploy pipelines and running services, stored only as SHA-256 hashes.",
      "Capability sync from CI that is safe to run repeatedly.",
    ],
    howItWorks: [
      "Sign-in happens on one login host. A one-time handoff code, tied to the browser that started the sign-in, carries the session back to the app's own domain. On every request the Cloudflare Worker checks the session and whether the person may use that app at all, then mints a 5-minute ES256 JWT and proxies the request to the app through a Cloudflare Tunnel. A firewall rule admits only the Worker.",
      "The app verifies the token against a published key set and asks the SDK what the person may do. The SDK answers from the compiled policy file it holds locally, returning the limits that apply, such as which territories or records, and the app applies them to its own queries. No permission check calls the gateway.",
      "Services use app tokens. A deploy token lets CI send an app's list of capabilities, and a runtime token lets a running app poll for new policy versions with ETags, a hash check and a version floor, so it can never fall back to an older policy.",
    ],
    questions: [
      {
        question: "Why build auth instead of buying Auth0, Okta or Cloudflare Access?",
        answer: [
          "Sign-in can be bought, and my first write-up on this recommended exactly that: buy single sign-on and keep permissions in each app's database. The company's requirements went further. They wanted one policy for what every person may see inside every app, down to the records, which each app can check locally without calling a vendor.",
          "Identity products handle the login well, but the policy model, the compiler and the SDK were the real work, and the gateway was the smaller part. The design kept the lesson from that first write-up: the edge only decides whether someone may reach an app, and record-level decisions stay inside the app.",
        ],
      },
      {
        question: "Isn't a homemade auth system a security risk?",
        answer: [
          "It would be if it invented its own cryptography. It doesn't. Tokens are standard ES256 JWTs signed and checked with a well-known library, sessions live in Cloudflare's key-value store, and apps can only be reached through tunnels that admit the gateway alone.",
          "The custom parts are the policy and the plumbing, and they were built defensively. Unknown email addresses get a sign-in nobody can complete, with the same storage writes and timing as a real account, so nobody can probe which addresses exist. The gateway overwrites the identity header on every request so an app can't be fed a forged one, and the gateway's tests run inside Cloudflare's own Workers runtime.",
        ],
      },
    ],
    status:
      "Deployed, with four internal apps behind it. Changes go in by pull request, and merging to main deploys the gateway, the API and the admin portal. A later round of work cut the time to request a sign-in email from 6–8 seconds to under 2.",
  },
  {
    slug: "autonomous-browsing",
    name: "Autonomous Browsing",
    eyebrow: "Work project · Desktop app",
    tagline: "A browser automation agent that saves its runs as routines",
    stack: ["Electron", "TypeScript", "React", "Playwright", "Claude", "SQLite", "Chrome Extensions"],
    purpose: [
      "A lot of operations work is web chores: open a site, search, check something, capture the result, repeat. Scripted automations can do this until a site changes its layout, and then they break, often without anyone noticing.",
      "The goal was runs that finish without anyone watching and that the team can trust afterwards.",
    ],
    features: [
      "Type a goal, and Claude drives a real Chrome to reach it, one action at a time.",
      "Save a finished run as a routine with parameters, which replays later without calling the model.",
      "Hands off to a person at a CAPTCHA, a login or a bot wall.",
      "Proposed repairs wait in a review queue and are never written back silently. Routines keep their revision history, with undo.",
      "A run queue, and resume from failure that never repeats a step that placed an order.",
      "Assert steps, so a finished run means the result was checked.",
      "Per-site memory of page landmarks that users can inspect and clear.",
      "Run history with a token and cost meter, and a health view per routine.",
    ],
    howItWorks: [
      "The app starts its own Chrome on a dedicated profile and attaches to it with Playwright over the DevTools protocol. A second backend drives the user's everyday Chrome through an extension and a native-messaging relay. Both inject the same in-page engine, so their safety checks can't drift apart.",
      "On each step the model gets a filtered DOM and a compressed screenshot and picks the next action through a tool call. The DOM is cut to an interactive skeleton, screenshots are capped at 1024×768, and only the last two pages stay in the thread, which keeps runs cheap. Page content reaches the model inside a fresh random fence each turn, as a defence against prompt injection.",
      "A routine replays without the model while it works. When a step breaks, the fix goes through four layers in order: re-ranking selectors, checking that the page actually reacted, an LLM repair, and finally a hold for a person.",
    ],
    questions: [
      {
        question: "Why build this when Zapier, Selenium scripts and browser agents exist?",
        answer: [
          "Each of them covers part of the job. Zapier needs the site to offer an API or an integration. Selenium and Playwright scripts are fast but break when a page changes, and someone has to notice and fix them. A pure browser agent copes with changes, but it calls the model on every step, so every run is slower, costs money and can do something different from the last one.",
          "Autonomous Browsing uses the agent to work out the task once, then saves the steps as a routine that replays without the model. The model comes back only when a step breaks, and its fix waits for a person to approve it.",
        ],
      },
      {
        question: "Why drive a real Chrome instead of a headless browser?",
        answer: [
          "The sites need the team's own logins, and a browser that announces itself as automated gets refused by sign-in pages such as Google's. The app starts a normal Chrome on its own profile, without the automation flag, and can also drive the user's everyday Chrome through the extension.",
        ],
      },
    ],
    status:
      "Version 0.1, used internally, with builds for Mac and Windows. Schedules and failure notifications are next.",
  },
  {
    slug: "agent-harness",
    name: "Agent Harness",
    eyebrow: "Personal project · Multi-agent systems",
    tagline: "A model-agnostic harness for building multi-agent systems and workflows",
    stack: ["TypeScript", "Vercel AI SDK", "VS Code API", "Electron", "React", "SQLite", "node-pty"],
    purpose: [
      "I wanted one place to build multi-agent systems and workflows for my own tasks, where each agent can run on whichever model suits it.",
      "The tools I used each led in something different. Codex is strongest on safety, Claude Code on long sessions and extensibility, Cursor on multi-agent work and its interface. Each is tied to its vendor's models or servers. I wanted the best parts of all three in one tool, driven by any model.",
    ],
    features: [
      "Agents defined in files, each with its own prompt, tools and model.",
      "Subagents up to three levels deep and ten at a time, in the background or in their own git worktrees, resumable by ID.",
      "JavaScript workflows that fan work out to agents in parallel steps and pipelines. A re-run replays the steps that already finished.",
      "13 model providers, from OpenAI, Anthropic and Google to local models through Ollama and LM Studio.",
      "Reads the skills, slash commands and agent files I already have in Claude Code and Cursor projects.",
      "Three front ends on one engine: a VS Code extension with inline Keep and Undo for each change, a terminal CLI, and an Electron app.",
    ],
    howItWorks: [
      "One headless engine runs everything and talks to its front ends over typed JSON-RPC. It has no Electron or VS Code imports, so the same engine sits behind all three.",
      "Workflows are JavaScript scripts built from agent(), parallel(), pipeline() and phase() calls. They run in a sandboxed worker that can't read the clock or random numbers, so a re-run is deterministic and replays every step that already finished.",
      "Underneath, each turn streams from the model through the Vercel AI SDK and starts tool calls as soon as they arrive, with reads in parallel and writes one at a time. A shadow git snapshot is taken around every edit, so any change can be undone, and shell commands run in a macOS Seatbelt sandbox ported from Codex. Switching models mid-session rewrites tool calls the new model can't use into plain text.",
    ],
    questions: [
      {
        question: "Why build a harness when Claude Code, Cursor and Codex already exist?",
        answer: [
          "I use them, and the harness copies the best design from each, one capability at a time. None of them gave me all of it in one tool with any model behind it. I wanted a workflow where one agent runs on GPT, another on Claude and a cheap one on a local model, all sharing one sandbox, one undo history and the skills and agent files I already have.",
          "Owning the engine also means I decide what is safe. Project settings and rules files are treated as untrusted, so a repo I clone can't redirect my API keys or loosen the sandbox.",
        ],
      },
    ],
    status:
      "Personal and private, never published. The main branch has the engine, subagents, workflows and all three front ends, with over 1,100 unit tests. Agent teams that build in parallel waves, best-of-N runs across models with a judge, MCP and plan mode are on a branch in progress.",
  },
];
