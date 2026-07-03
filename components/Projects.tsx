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
    id: "ai-builder",
    badge: "Flagship · Product Engineering",
    badgeClass: "bg-sky-400/10 border-sky-400/40 text-sky-300",
    title: "AI Builder",
    tagline: "No-code website builder for the restaurant industry",
    summary:
      "A full publishing platform that lets restaurant teams design, collaborate on, and ship production websites — with staging workflows, analytics, and automated AWS deployment built in.",
    problem:
      "Restaurant businesses needed professional, high-performance websites without engineering teams — and the platform behind them had to handle publishing, collaboration, SEO, accessibility, and hosting at scale.",
    solution:
      "A custom no-code builder with a drafting and templating engine, dual Live/Staging publishing workflows, real-time collaborative editing, and a scalable publishing pipeline that provisions domains and SSL automatically on AWS. Led the migration from Gatsby to Next.js to unlock a more scalable rendering architecture.",
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
      "Turned website delivery into a self-serve product: restaurant sites go from draft to a live, SEO-ready, accessible production deployment without engineering involvement.",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "AWS", "GA4 API", "Search Console API"],
  },
  {
    id: "trading-assistant",
    badge: "Flagship · AI Agent Engineering",
    badgeClass: "bg-indigo-400/10 border-indigo-400/40 text-indigo-300",
    title: "AI Trading Assistant",
    tagline: "LLM-powered financial copilot with tool orchestration",
    summary:
      "An AI assistant that combines LLM reasoning with real portfolio data — streaming chat, RAG over financial context, market and news lookup, and multi-step tool orchestration.",
    problem:
      "Generic chatbots can talk about markets but can't act on a user's actual portfolio. The goal: an assistant that reasons over live holdings, retrieves relevant context, and executes multi-step workflows with real tools.",
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
      "Deliberate separation of reasoning, retrieval, and tool execution",
      "Agent engineering, not a chatbot wrapper",
    ],
    impact:
      "Demonstrates end-to-end applied AI: an agent that observes, reasons, retrieves, and acts on real user data through a production-shaped architecture.",
    stack: ["FastAPI", "Next.js", "LangChain", "Ollama", "ChromaDB", "Python", "TypeScript"],
  },
  {
    id: "boms",
    badge: "Enterprise Platform",
    badgeClass: "bg-cyan-400/10 border-cyan-400/40 text-cyan-300",
    title: "Business Operations Management System",
    tagline: "Modular platform for core business operations",
    summary:
      "An end-to-end operations platform covering purchasing, shipping, invoicing, and finance — built as a modular monorepo with cleanly separated business domains.",
    problem:
      "Growing businesses juggle purchase orders, shipments, invoices, and financial records across disconnected tools, losing visibility and duplicating work.",
    solution:
      "A modular business platform that unifies operational workflows. Domains like Inventory, Finance, and CRM live as separated modules inside a monorepo, keeping the system maintainable while workflows stay integrated end to end.",
    features: [
      "Purchase orders, shipping, and invoicing workflows",
      "Financial workflows & reporting",
      "Vendor & customer management",
      "Activity tracking & operational automation",
    ],
    highlights: [
      "Modular monorepo architecture",
      "Separated domains: Inventory, Finance, CRM",
      "Designed for maintainability as operations scale",
    ],
    impact:
      "One system of record for operations — from purchase to payment — replacing fragmented spreadsheets and manual handoffs.",
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
      "Remote education needed more than video calls — it needed structured scheduling, interactive teaching tools, and role-specific workflows in one platform.",
    solution:
      "A full LMS with real-time classroom infrastructure: class scheduling, video and screen sharing, collaborative whiteboarding with annotations, and live chat — plus dedicated portals for each role in the organization.",
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
      "Enabled fully remote structured teaching with interactive tools that kept lessons engaging beyond a plain video call.",
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
            title="Case studies, not a project list"
            description="A selection of production systems I've designed and built — each one a real product with real users, real constraints, and measurable outcomes."
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
