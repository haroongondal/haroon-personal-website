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
    id: "outsentia-research-platform",
    badge: "Flagship · Multi-Agent Platform",
    badgeClass: "bg-emerald-400/10 border-emerald-400/40 text-emerald-300",
    title: "Outsentia Research Platform",
    tagline: "Autonomous equity research operations & earnings intelligence",
    summary:
      "A multi-agent platform for equity research operations, built on Mastra and TypeScript. A daily Earnings & Events Monitor pulls live data via MCP (Aiera, Gmail, Drive, Calendar), synthesizes digests against internal reports, and updates calendars with no human in the loop. A 5-pass LLM pipeline writes analyst anecdotes grounded in verbatim KPIs, and a research chat agent handles semantic memory recall and per-request tool routing. LLMs only make bounded judgment calls, structured in and structured out; state, dedup, and templating stay deterministic in code.",
    problem:
      "During earnings season, analysts monitor live events, cross-reference internal reports, draft daily digests, and track KPI anecdotes by hand, across tools and data sources that do not talk to each other.",
    solution:
      "An earnings-intelligence system for a financial research firm. A self-healing daily monitor ingests earnings and event data, drafts digest emails, and updates calendars unattended. Alongside it run a 5-pass anecdote-generation pipeline and a research chat agent with semantic recall. Dedup and state live in code, and LLM calls are scoped to judgment tasks only.",
    features: [
      "Self-healing daily Earnings & Events Monitor pulling live data via MCP",
      "Live MCP integrations with Aiera, Gmail, Google Drive, and Google Calendar",
      "Unattended synthesis of analyst-grade earnings digests and email drafts",
      "5-pass LLM pipeline writing analyst anecdotes grounded in verbatim KPIs",
      "Research chat agent with semantic memory recall and per-request tool routing",
      "Custom React front end for research workflows and real-time interaction",
    ],
    highlights: [
      "Mastra agent framework orchestrating LLM reasoning with deterministic TypeScript code",
      "LLM calls scoped to bounded judgment tasks, structured in and structured out",
      "State, deduplication, and templating owned by code rather than the model",
      "Daily calendar updates and email drafting run with no human in the loop",
    ],
    impact:
      "A multi-agent financial research platform (TypeScript, Mastra) that automates earnings monitoring, analyst report drafting, and research chat. Deterministic code orchestrates the LLM reasoning, with live MCP integrations (Aiera, Gmail, Drive, Calendar) and a custom React front end.",
    stack: ["TypeScript", "Mastra", "Claude", "React", "MCP", "Aiera API", "Google Workspace APIs", "Node.js"],
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
            description="Production systems I designed and built, each one shipped and running with real users."
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
