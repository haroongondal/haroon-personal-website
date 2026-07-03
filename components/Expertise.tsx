import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const AREAS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Full Stack Product Engineering",
    accent: "text-sky-400",
    body: "Scalable, maintainable product systems across the entire stack — from performance-focused frontends to modular backend services.",
    items: [
      "React, Next.js, Node.js, NestJS, TypeScript",
      "Scalable architecture & modular systems",
      "Complex dashboards & internal tools",
      "Performance-focused frontend systems",
      "Backend APIs & service design",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="5" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="19" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="19" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 7.2l3.6 3M17.5 7.2l-3.6 3M6.5 16.8l3.6-3M17.5 16.8l-3.6-3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: "AI Agents & LLM Applications",
    accent: "text-indigo-400",
    featured: true,
    body: "Production-grade AI systems: agents that reason, use tools, retrieve context, and hold memory — built with the same rigor as any other backend.",
    items: [
      "AI agents & agentic workflows",
      "Retrieval-augmented generation (RAG)",
      "LangChain / LlamaIndex-style architectures",
      "Tool-using agents & ReAct orchestration",
      "Portfolio & financial assistants",
      "Context-aware streaming chat systems",
      "Prompt orchestration & AI automation pipelines",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M7 17a4.5 4.5 0 01-.4-8.98 6 6 0 0111.6 1.7A4 4 0 0117 17H7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 12v6M9.5 15.5L12 18l2.5-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Cloud & Infrastructure",
    accent: "text-cyan-400",
    body: "Cloud-backed products deployed and operated the right way — automated, observable, and fast.",
    items: [
      "AWS deployments & hosting architecture",
      "CI/CD pipelines & Docker",
      "Domain & SSL configuration automation",
      "Scalable publishing & deployment workflows",
      "Performance optimization in production",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    title: "Product Architecture & Collaboration",
    accent: "text-violet-400",
    body: "Multi-user products with real-time collaboration and the modular foundations that keep them maintainable.",
    items: [
      "Real-time collaboration & multi-user systems",
      "Form builders & CMS / no-code systems",
      "Modular, monorepo-based architecture",
      "Maintainable engineering systems",
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 sm:py-32 scroll-mt-16 bg-surface/40 border-y border-edge">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Expertise"
            title="What I build"
            description="Four capability areas, one common thread: production-grade systems that hold up under real users, real data, and real business requirements."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 80}>
              <div
                className={`card card-hover h-full p-7 ${
                  area.featured ? "border-accent-2/40 glow-accent" : ""
                }`}
              >
                <div className={`inline-flex rounded-xl bg-raised border border-edge p-3 ${area.accent}`}>
                  {area.icon}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                  {area.featured && (
                    <span className="rounded-full bg-accent-2/15 border border-accent-2/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-indigo-300">
                      Core focus
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{area.body}</p>
                <ul className="mt-5 space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current ${area.accent}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
