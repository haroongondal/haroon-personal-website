import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CAPABILITIES = [
  "AI agents",
  "Autonomous agent workflows",
  "RAG pipelines",
  "Tool-using LLM systems",
  "Context-aware assistants",
  "Streaming AI chat interfaces",
  "Prompt orchestration",
  "Memory-enabled assistants",
  "Vector databases",
  "Financial & business AI copilots",
  "AI automation pipelines",
  "Model Context Protocol (MCP)",
];

const PIPELINE_STEPS = [
  { label: "Trigger", detail: "scheduled run / user query" },
  { label: "Retrieve", detail: "RAG · vector search · APIs" },
  { label: "Reason", detail: "LLM planning · ReAct loops" },
  { label: "Act", detail: "tool calls · CRUD · services" },
  { label: "Deliver", detail: "streams · digests · drafts" },
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="relative py-24 sm:py-32 scroll-mt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent-2/[0.04] to-transparent" />
      <div className="absolute top-1/3 left-1/2 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent-2/8 blur-[130px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="AI Engineering"
            title="AI systems I build"
            description="Agents that plan and execute, retrieval pipelines grounded in real data, and assistants that hold memory, call tools, and run behind guardrails in production."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={80}>
            <div className="card h-full p-7">
              <h3 className="text-base font-semibold text-foreground">Capabilities</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {CAPABILITIES.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-lg border border-accent-2/30 bg-accent-2/5 px-3 py-1.5 text-sm text-foreground/90 hover:border-accent-2/60 hover:bg-accent-2/10 transition-colors"
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                I build the agent and the product around it. The same system
                that runs the agent also handles auth, streaming, persistence,
                deployment, and the interface users touch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card h-full p-7">
              <h3 className="text-base font-semibold text-foreground">
                How my AI systems are shaped
              </h3>
              <div className="mt-6 space-y-1">
                {PIPELINE_STEPS.map((step, i) => (
                  <div key={step.label} className="relative flex items-center gap-4 py-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-2/40 bg-accent-2/10 font-mono text-xs text-indigo-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-sm font-semibold text-foreground">{step.label}</span>
                      <span className="font-mono text-xs text-muted">{step.detail}</span>
                    </div>
                    {i < PIPELINE_STEPS.length - 1 && (
                      <span
                        className="absolute left-[17px] top-[46px] h-2 w-px bg-accent-2/40"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Orchestration stays deterministic and the LLM handles the
                reasoning steps. Retrieval, memory, and tool execution are
                designed in from the start.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="card mt-6 border-accent-2/40 p-7 sm:p-9 glow-accent">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent-2/15 border border-accent-2/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-indigo-300">
                Autonomous Agent · In Production
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              Autonomous financial-events agent
            </h3>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
              An autonomous LLM agent (Mastra, TypeScript, Claude) monitors
              financial events daily and generates analyst-grade earnings
              digests and email drafts. It pulls from several external data and
              productivity services through a pipeline orchestrated in code.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Mastra", "TypeScript", "Claude", "Agent Orchestration", "External API Integration"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-edge bg-raised px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Currently exploring
            </span>
            <span>
              Agentic workflows, multi-agent systems, and how applied-AI
              products should be structured as they grow.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
