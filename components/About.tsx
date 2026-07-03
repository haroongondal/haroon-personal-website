import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FOCUS_AREAS = [
  {
    title: "Product engineering, end to end",
    body: "From UI systems and design details to APIs, data models, and deployment pipelines — I own features across the full stack and ship them to production.",
  },
  {
    title: "Systems thinking",
    body: "Website builders, enterprise operations platforms, collaborative tools — I design software as systems: modular, maintainable, and built to scale with the product.",
  },
  {
    title: "AI as an engineering discipline",
    body: "I treat LLM applications like production software: agent orchestration, retrieval pipelines, memory, evals, and reliability — not demo-ware.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="An engineer who builds products, not just screens"
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a Senior Full Stack Engineer based in Islamabad, Pakistan, with
                5+ years of experience turning ambitious product ideas into
                production software. My work spans no-code website builders,
                enterprise business platforms, virtual classrooms, e-commerce
                frontends, and — increasingly — AI-powered products.
              </p>
              <p>
                My core toolkit is the TypeScript ecosystem: React and Next.js on
                the frontend, Node.js and NestJS on the backend, with PostgreSQL,
                AWS, and CI/CD pipelines underneath. I care about the things
                senior engineers are supposed to care about — architecture that
                stays maintainable, performance budgets, accessibility, and the
                developer experience of the people who work in the codebase after
                me.
              </p>
              <p>
                Over the last few years I&apos;ve built a deep specialization in AI
                engineering: LLM-powered assistants, agentic workflows,
                retrieval-augmented generation, tool-using agents, and autonomous
                pipelines that run in production. I&apos;m most at home at the
                intersection of solid product engineering and modern AI systems —
                building things that are genuinely useful, fast, and reliable.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.title} delay={150 + i * 80}>
                <div className="card card-hover p-6">
                  <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
