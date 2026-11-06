"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Project = {
  id: string;
  badge: string;
  badgeClass: string;
  title: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  highlights: string[];
  impact: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    id: "agent-builder",
    badge: "Flagship · Multi-Agent Platform",
    badgeClass: "bg-emerald-400/10 border-emerald-400/40 text-emerald-300",
    title: "Agent Builder",
    tagline: "Research agents for a financial research firm",
    summary:
      "A TypeScript monorepo of research agents: a Mastra agent service, a NestJS gateway and a React front end. An earnings monitor pulls live data via MCP (Aiera, Gmail, Drive, Calendar), writes digests, updates calendars and leaves the emails as drafts. A transcript pipeline turns recorded expert calls into analyst anecdotes in the firm's house style, and a research chat agent answers from shared and private knowledge bases with semantic memory recall. LLMs only make bounded judgment calls, structured in and structured out; state, dedup, and templating stay deterministic in code.",
    problem:
      "During earnings season, analysts monitor live events, cross-reference internal reports, and draft daily digests by hand. After every expert call someone also writes the call up as anecdotes in the house style. The tools and data sources involved do not talk to each other.",
    solution:
      "A scheduled sweep pulls the earnings watchlist over MCP, dedupes events with single-purpose LLM calls, and sends small research agents for consensus and price anchors. Code then builds the digest, updates Google Calendar and creates Gmail drafts. When a Zoom call ends, a webhook queues a job and a background worker runs a 5-pass anecdote pipeline: KPI selection, synthesis, a lint and rewrite pass, a completeness check, and sentiment. The result lands as a .docx attached to a Gmail draft, and analysts review it in a queue.",
    features: [
      "Earnings & Events Monitor pulling live data via MCP, run per user with their own Google connection",
      "Zoom transcripts turned into analyst anecdotes by a 5-pass LLM pipeline, delivered as .docx drafts",
      "Anecdote channels with their own KPIs, tone, recipients and call matchers, plus a review queue",
      "Editor agent that separates one-off edits from lasting house rules, which a person approves",
      "Research chat agent with semantic memory recall, working memory and tool approval prompts",
      "Shared and private knowledge bases built from PDF and markdown, embedded locally",
      "Monitoring with traces, health checks, deduplicated alerts, cost estimates and an eval gate",
      "Custom React front end for research workflows and real-time interaction",
    ],
    highlights: [
      "Mastra agent framework orchestrating LLM reasoning with deterministic TypeScript code",
      "Base prompts never change, so they stay cached; learned house rules are appended after them",
      "MCP tools are mapped to fixed names, so the model never sees each server's raw tool names",
      "Zoom webhooks are verified with a constant-time signature check and answered at once, with the slow work queued",
      "Per-user Google OAuth tokens encrypted at rest with AES-256-GCM",
    ],
    impact:
      "Digests, calendar updates and call write-ups arrive as drafts for an analyst to check and send. The manual part of earnings season shrinks to review.",
    stack: ["TypeScript", "Mastra", "Claude", "Vercel AI SDK", "MCP", "NestJS", "React", "libSQL", "Docker"],
  },
  {
    id: "centralised-auth-service",
    badge: "Platform · Identity & Access",
    badgeClass: "bg-amber-400/10 border-amber-400/40 text-amber-300",
    title: "Centralised Auth Service",
    tagline: "One sign-in and one access policy for a company's internal apps",
    summary:
      "A Cloudflare Worker gateway signs people in once, with a magic link or a 6-digit code, and sits in front of every internal app. On each request it checks the session and whether the person may use that app, then forwards a short-lived signed identity. An admin portal compiles users, groups and grants into a versioned SQLite policy file, and an SDK lets each app answer detailed permission questions locally from that file. It is deployed, with four apps behind it.",
    problem:
      "Each app ran its own login and its own permission tables. One used database roles, one used shared API keys and one had no auth at all, so nobody could grant, review or revoke access in one place.",
    solution:
      "Sign-in happens on a single login host, and a one-time handoff code tied to the browser that started it carries the session back to the app's own domain. On every request the gateway mints a 5-minute ES256 JWT and proxies to the origin through Cloudflare Tunnels, behind a WAF rule that admits only the Worker. Apps verify the token against a static JWKS and ask the SDK what the person may do; it returns the limits that apply, and the app applies them to its own queries. Services use app tokens: deploy tokens send an app's capability list from CI, and runtime tokens let a running app poll for new policy versions.",
    features: [
      "Passwordless cross-domain sign-in with a magic link or a one-time code",
      "Edge gateway with per-host routes, API path routing and public webhook lanes",
      "Admin portal for users, groups, grants with include and exclude limits, publishing and version history",
      "Policy compiler that turns the admin database into a versioned SQLite file",
      "SDK with Express middleware and an edge-safe token verifier",
      "App tokens for deploy pipelines and running services, stored only as SHA-256 hashes",
      "Capability sync from CI that is safe to run repeatedly",
    ],
    highlights: [
      "Unknown addresses get a sign-in nobody can complete, with the same storage writes and timing as a real account, so accounts can't be enumerated",
      "The proxy overwrites the identity header and strips gateway cookies in every spelling the parser accepts",
      "Apps deny everything until a policy loads, then refresh it with ETag polling, backoff, a hash check and a version floor",
      "A deploy can't widen access: removed capabilities stay with a warning, and limit changes wait for an admin to publish",
      "Policy versions are write-once in S3, and deploys authenticate with GitHub OIDC instead of stored AWS keys",
      "Requesting a sign-in email went from 6–8 s to under 2 s after parallelising KV calls and deferring writes",
    ],
    impact:
      "Access to four internal apps is granted and revoked in one place, and each app checks permissions locally without calling the gateway.",
    stack: ["TypeScript", "Cloudflare Workers", "Hono", "Workers KV", "NestJS", "SQLite", "Drizzle", "React", "AWS", "GitHub Actions"],
  },
  {
    id: "autonomous-browsing",
    badge: "AI Agent · Desktop App",
    badgeClass: "bg-teal-400/10 border-teal-400/40 text-teal-300",
    title: "Autonomous Browsing",
    tagline: "Browser automation agent that saves its runs as routines",
    summary:
      "An Electron app for an internal operations team. You type a goal and Claude drives a real Chrome to reach it, one action at a time. A finished run can be saved as a routine that replays later without calling the model. When a site changes, the routine proposes a repair or stops and asks a person.",
    problem:
      "Web chores needed a person watching, and scripted automations broke whenever a site changed its layout. The team wanted runs that finish without supervision and that they can trust afterwards.",
    solution:
      "The app starts its own Chrome on a dedicated profile and attaches with Playwright over CDP. A second backend drives the user's everyday Chrome through an extension and a native-messaging relay. Each step sends the model a filtered DOM and a compressed screenshot, and the model picks the next action through a tool call. Saved routines are JSON steps with parameters, stored in SQLite. Replay makes no model calls while it works; a broken step goes through selector ranking, a check that the page reacted, an LLM repair and finally a human hold.",
    features: [
      "Goal runs that hand off to a person at a CAPTCHA, login or bot wall",
      "Routines with parameters, assert steps, and revision history with undo",
      "Proposed repairs wait in a review queue and are never written back silently",
      "Run queue and resume from failure that never repeats a step that placed an order",
      "Per-site memory of page landmarks that users can inspect and clear",
      "Run history with a token and cost meter, and a health view per routine",
      "Export and import with secret detection and redaction",
    ],
    highlights: [
      "Both browser backends inject the same in-page engine, so their safety checks can't drift apart",
      "Page content reaches the model inside a fresh random fence each turn, as a prompt-injection defence",
      "The DOM is cut to an interactive skeleton, screenshots are capped at 1024×768, and only the last two pages stay in the thread",
      "Model evals are graded by code against fixture pages",
    ],
    impact:
      "Repetitive web checks run unattended, and a routine that worked once keeps working after a site changes, with a person approving every repair.",
    stack: ["Electron", "TypeScript", "React", "Playwright", "Claude", "SQLite", "Chrome Extensions"],
  },
  {
    id: "agent-harness",
    badge: "AI Developer Tools",
    badgeClass: "bg-fuchsia-400/10 border-fuchsia-400/40 text-fuchsia-300",
    title: "Agent Harness",
    tagline: "Model-agnostic coding agent with VS Code, CLI and desktop front ends",
    summary:
      "A coding agent I built for my own work that runs on any model. One headless engine handles sessions, tools, the sandbox, undo and subagents, and three front ends drive it: a VS Code extension, a terminal CLI and an Electron app. For each capability I took the design from whichever of Cursor, Codex or Claude Code handles it best.",
    problem:
      "Each of the leading coding agents is strongest at something different, and each is tied to its vendor's models. I wanted those strengths in one tool, driven by whichever model suits the task.",
    solution:
      "The engine has no Electron or VS Code imports and talks to its front ends over typed JSON-RPC. A turn streams from the model through the Vercel AI SDK and starts each tool call as soon as it arrives, running reads in parallel and writes one at a time. A shadow git snapshot is taken around every edit, so any change can be undone. Shell commands run in a macOS Seatbelt sandbox, and approvals can be saved as rules. Subagents run up to three levels deep, in the background or in their own git worktrees.",
    features: [
      "13 model providers, from OpenAI, Anthropic and Google to local models through Ollama and LM Studio",
      "Inline Keep and Undo for each change in VS Code, plus a review group in source control",
      "apply_patch ported from Codex and given to GPT models as a grammar-constrained tool",
      "Background subagents with their own git worktrees, resumable by ID",
      "Reads existing skills, slash commands and agent files from Claude Code and Cursor projects",
      "Sandboxed JavaScript workflows whose finished steps replay on a re-run",
      "CLI with one-shot runs, per-change review, undo and rewind",
    ],
    highlights: [
      "Tool calls start mid-stream under an ordered read/write lock",
      "Retries are classified as server, network or stall errors, honour retry-after, and keep partial steps instead of re-running tools",
      "Switching models mid-session rewrites tool calls the new model can't use into plain text",
      "Cost is tracked per step, cached tokens included, and stored in SQLite",
      "Project settings and rules files are untrusted, so a cloned repo can't redirect API keys or loosen the sandbox",
      "Over 1,100 unit tests, plus Electron end-to-end and VS Code extension suites",
    ],
    impact:
      "One undo history, sandbox and set of skills across 13 providers. In the first end-to-end test, GPT-5.5 and Claude Sonnet 5.5 each completed the same task in a real repo, for $0.61 and $0.12.",
    stack: ["TypeScript", "Vercel AI SDK", "VS Code API", "Electron", "React", "SQLite", "node-pty"],
  },
  {
    id: "ai-builder",
    badge: "Flagship · Product Engineering",
    badgeClass: "bg-sky-400/10 border-sky-400/40 text-sky-300",
    title: "AI Builder",
    tagline: "No-code website builder for the restaurant industry",
    summary:
      "A publishing platform where restaurant teams design, collaborate on, and ship their own websites. Staging workflows, analytics, and automated AWS deployment are part of the platform.",
    problem:
      "Restaurant businesses needed fast, well-built websites without hiring engineers, and the platform behind those sites had to handle publishing, collaboration, SEO, accessibility, and hosting across many clients at once.",
    solution:
      "A no-code builder with a drafting and templating engine, Live and Staging publishing workflows, real-time collaborative editing, and a publishing pipeline that provisions domains and SSL on AWS automatically. I led the migration from Gatsby to Next.js for a rendering architecture that scales better.",
    features: [
      "Live / staging publishing workflows with safe promotion",
      "Collaborative multi-user editing environment",
      "Drafting & templating engine for rapid site creation",
      "Analytics dashboard on GA4 + Google Search Console APIs",
      "Media library with editing and an optimization pipeline",
      "Independent mobile-specific CSS override system",
      "Domain & SSL configuration automation on AWS",
    ],
    highlights: [
      "Gatsby → Next.js migration for scalable architecture",
      "ADA-compliant rendering across generated sites",
      "Strong Core Web Vitals / Lighthouse focus on published output",
      "Publishing workflow designed to scale across many client sites",
    ],
    impact:
      "Website delivery became self-serve. A restaurant site goes from draft to a live, accessible, SEO-ready deployment without an engineer in the loop.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "AWS", "GA4 API", "Search Console API"],
  },
  {
    id: "trading-assistant",
    badge: "Flagship · AI Agent Engineering",
    badgeClass: "bg-indigo-400/10 border-indigo-400/40 text-indigo-300",
    title: "AI Trading Assistant",
    tagline: "LLM-powered financial copilot with tool orchestration",
    summary:
      "An AI assistant that puts LLM reasoning on top of real portfolio data, with streaming chat, RAG over financial context, market and news lookup, and multi-step tool orchestration.",
    problem:
      "A general chatbot can discuss markets but cannot touch a user's actual portfolio. I wanted an assistant that reasons over live holdings, retrieves the context that matters, and runs multi-step workflows through real tools.",
    solution:
      "A LangChain-based agent with ReAct-style tool orchestration behind a FastAPI backend and a Next.js streaming chat frontend. ChromaDB powers RAG retrieval, persistent memory keeps conversations context-aware, and the agent plans multi-step reasoning chains across portfolio, pricing, and news tools.",
    features: [
      "Streaming chat UI built with Next.js",
      "Ollama LLM integration behind FastAPI",
      "Portfolio analysis & market insights",
      "Portfolio CRUD tools the agent invokes directly",
      "Coin price lookup & financial news retrieval tools",
      "Persistent memory with context-aware multi-step reasoning",
    ],
    highlights: [
      "LangChain agent framework with ReAct-style tool orchestration",
      "ChromaDB vector store powering the RAG pipeline",
      "Reasoning, retrieval, and tool execution kept in separate layers",
      "The agent plans and executes across several tools per request",
    ],
    impact:
      "An agent that observes, reasons, retrieves, and acts on real user data, on the architecture I would use in production.",
    stack: ["FastAPI", "Next.js", "LangChain", "Ollama", "ChromaDB", "Python", "TypeScript"],
  },
  {
    id: "boms",
    badge: "Enterprise Platform",
    badgeClass: "bg-cyan-400/10 border-cyan-400/40 text-cyan-300",
    title: "Business Operations Management System",
    tagline: "Modular platform for core business operations",
    summary:
      "An operations platform covering purchasing, shipping, invoicing, and finance, built as a modular monorepo with separate business domains.",
    problem:
      "Growing businesses juggle purchase orders, shipments, invoices, and financial records across disconnected tools, losing visibility and duplicating work.",
    solution:
      "One platform for those workflows. Domains like Inventory, Finance, and CRM live as separate modules inside a monorepo, so the system stays maintainable while the workflows themselves stay connected.",
    features: [
      "Purchase orders, shipping, and invoicing workflows",
      "Financial workflows & reporting",
      "Vendor & customer management",
      "Activity tracking & operational automation",
    ],
    highlights: [
      "Modular monorepo architecture",
      "Separated domains: Inventory, Finance, CRM",
      "Structured to stay maintainable as operations grow",
    ],
    impact:
      "One system of record for operations, from purchase through payment, in place of scattered spreadsheets and manual handoffs.",
    stack: ["TypeScript", "React", "Node.js", "NestJS", "PostgreSQL", "Monorepo"],
  },
  {
    id: "lms",
    badge: "Real-Time Systems",
    badgeClass: "bg-violet-400/10 border-violet-400/40 text-violet-300",
    title: "Virtual Classroom & LMS Platform",
    tagline: "Live teaching platform with real-time collaboration",
    summary:
      "A learning management system with live virtual classrooms: scheduling, video, whiteboarding, and multi-role portals for teachers, sales, and admins.",
    problem:
      "Video calls on their own left remote classes without scheduling, interactive teaching tools, or workflows for the different roles in a school.",
    solution:
      "An LMS with real-time classroom infrastructure: class scheduling, video and screen sharing, collaborative whiteboarding with annotations, and live chat, plus a dedicated portal for each role in the organization.",
    features: [
      "Class scheduling & management",
      "Video conferencing & screen sharing",
      "Whiteboarding with live annotations",
      "Real-time chat",
      "Teacher, sales, and admin portals",
    ],
    highlights: [
      "Real-time multi-user infrastructure",
      "Role-based product surfaces on a shared platform",
    ],
    impact:
      "Teachers ran structured remote lessons using tools a plain video call does not provide.",
    stack: ["JavaScript", "React", "Node.js", "WebRTC", "WebSockets"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const detailsId = `${project.id}-details`;

  return (
    <Reveal delay={index * 60}>
      <article className="card card-hover overflow-hidden">
        <div className="p-7 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${project.badgeClass}`}
            >
              {project.badge}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-edge bg-raised px-2.5 py-1 font-mono text-xs text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-3 transition-colors"
          >
            {open ? "Hide case study" : "Read case study"}
            <svg
              viewBox="0 0 16 16"
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          id={detailsId}
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-edge bg-background/40 p-7 sm:p-9 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Challenge</h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.problem}</p>
                <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">Solution</h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.solution}</p>
                <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">Impact</h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.impact}</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Core features</h4>
                <ul className="mt-2.5 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Engineering highlights
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected case studies"
            description="Systems I designed and built for employers, clients and my own use."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
