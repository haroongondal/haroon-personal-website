import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FOCUS_AREAS = [
  {
    title: "Product engineering, end to end",
    body: "I own features across the full stack: the UI and its design details, the APIs and data models behind it, and the pipeline that deploys the whole thing.",
  },
  {
    title: "Modular systems",
    body: "Website builders, enterprise operations platforms, collaborative tools. All of them needed modules with clear boundaries, so the codebase stays workable as the product grows.",
  },
  {
    title: "AI as an engineering discipline",
    body: "I treat LLM applications like production software. Agent orchestration, retrieval pipelines, memory, and evals get the same attention as the rest of the stack.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="How I work"
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a Senior Full Stack Engineer based in Islamabad, Pakistan,
                with five years of experience building production software.
                I&apos;ve worked on no-code website builders, enterprise
                business platforms, virtual classrooms, e-commerce frontends,
                and lately AI products.
              </p>
              <p>
                Most of that work sits in the TypeScript ecosystem: React and
                Next.js on the frontend, Node.js and NestJS on the backend, with
                PostgreSQL, AWS, and CI/CD pipelines underneath. The parts I pay
                closest attention to are architecture that stays maintainable,
                performance budgets, accessibility, and whether the next person
                to open the codebase can find their way around it.
              </p>
              <p>
                Over the last few years the work has shifted toward AI
                engineering: LLM-powered assistants, agentic workflows,
                retrieval-augmented generation, tool-using agents, and
                autonomous pipelines running in production. That overlap between
                product engineering and AI systems is where I do my best work.
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
