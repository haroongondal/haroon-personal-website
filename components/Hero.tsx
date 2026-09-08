
function PipelineVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0" aria-hidden="true">
      <div className="absolute -inset-8 rounded-[2rem] bg-accent/5 blur-3xl" />

      <div className="card relative p-5 glow-accent float-slow">
        <div className="flex items-center justify-between border-b border-edge pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[11px] text-muted">agent-pipeline.ts</span>
        </div>

        <svg viewBox="0 0 400 260" className="w-full" role="img">
          <defs>
            <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* flow lines */}
          <path d="M78 52 H150" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />
          <path d="M250 52 H322" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />
          <path d="M200 78 V110" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />
          <path d="M200 110 C200 130 120 122 100 142" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />
          <path d="M200 110 V142" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />
          <path d="M200 110 C200 130 280 122 300 142" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />
          <path d="M100 196 C130 226 270 226 300 196" stroke="url(#edgeGrad)" strokeWidth="1.5" className="flow-line" fill="none" />

          {/* nodes */}
          <g fontFamily="var(--font-geist-mono)" fontSize="11">
            <rect x="10" y="34" width="68" height="36" rx="9" fill="#111726" stroke="rgba(148,163,184,0.3)" />
            <text x="44" y="56" textAnchor="middle" fill="#97a3b6">user</text>

            <rect x="150" y="28" width="100" height="48" rx="10" fill="#0c1a26" stroke="rgba(56,189,248,0.55)" />
            <text x="200" y="49" textAnchor="middle" fill="#7dd3fc">LLM agent</text>
            <text x="200" y="65" textAnchor="middle" fill="#5e7186" fontSize="9">plan · reason · act</text>

            <rect x="322" y="34" width="68" height="36" rx="9" fill="#111726" stroke="rgba(148,163,184,0.3)" />
            <text x="356" y="56" textAnchor="middle" fill="#97a3b6">stream</text>

            <rect x="52" y="142" width="96" height="40" rx="9" fill="#131226" stroke="rgba(129,140,248,0.5)" />
            <text x="100" y="160" textAnchor="middle" fill="#a5b4fc">vector store</text>
            <text x="100" y="174" textAnchor="middle" fill="#5e7186" fontSize="9">RAG retrieval</text>

            <rect x="152" y="142" width="96" height="40" rx="9" fill="#131226" stroke="rgba(129,140,248,0.5)" />
            <text x="200" y="160" textAnchor="middle" fill="#a5b4fc">tools</text>
            <text x="200" y="174" textAnchor="middle" fill="#5e7186" fontSize="9">APIs · CRUD · web</text>

            <rect x="252" y="142" width="96" height="40" rx="9" fill="#131226" stroke="rgba(129,140,248,0.5)" />
            <text x="300" y="160" textAnchor="middle" fill="#a5b4fc">memory</text>
            <text x="300" y="174" textAnchor="middle" fill="#5e7186" fontSize="9">context · state</text>

            <text x="200" y="242" textAnchor="middle" fill="#5e7186" fontSize="10">
              observe → reason → call tools → respond
            </text>
          </g>
        </svg>
      </div>

      <div className="card absolute -bottom-6 -left-4 sm:-left-10 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 blink-dot" />
          <span className="font-mono text-xs text-muted">
            deploy <span className="text-emerald-400">✓</span> production · AWS
          </span>
        </div>
      </div>

      <div className="card absolute -top-5 -right-3 sm:-right-8 px-4 py-3 backdrop-blur-md node-pulse">
        <span className="font-mono text-xs text-accent">RAG · agents · LLM apps</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="animate-enter">
            <p className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-1.5 font-mono text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 blink-dot" />
              Open to senior full stack &amp; AI engineering roles
            </p>
          </div>

          <div className="animate-enter" style={{ animationDelay: "80ms" }}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
              Haroon Mukhtar
              <span className="block mt-3 text-2xl sm:text-3xl lg:text-[2.1rem] font-medium text-gradient leading-snug">
                Senior Full Stack Engineer · AI Engineer
              </span>
            </h1>
          </div>

          <div className="animate-enter" style={{ animationDelay: "160ms" }}>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
              I build web platforms, AI agents, RAG applications, and cloud-hosted
              products. Five years of shipping production systems with
              TypeScript, React, Node.js, AWS, LLM agents, and retrieval
              pipelines.
            </p>
          </div>

          <div className="animate-enter" style={{ animationDelay: "240ms" }}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background hover:bg-accent-3 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/Haroon-Mukhtar-Resume.pdf"
                download
                className="rounded-full border border-edge-strong bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-accent/50 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-2 py-3 text-sm font-semibold text-accent hover:text-accent-3 transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>

          <div className="animate-enter" style={{ animationDelay: "320ms" }}>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 font-mono text-xs text-muted">
              <span>TypeScript</span>
              <span>React / Next.js</span>
              <span>Node.js / NestJS</span>
              <span>AWS</span>
              <span>LangChain</span>
              <span>RAG</span>
            </div>
          </div>
        </div>

        <div className="animate-enter hidden sm:block" style={{ animationDelay: "200ms" }}>
          <PipelineVisual />
        </div>
      </div>
    </section>
  );
}
