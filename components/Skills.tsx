import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUPS = [
  {
    title: "Full Stack",
    accent: "text-sky-400",
    border: "hover:border-sky-400/40",
    skills: [
      "TypeScript",
      "ReactJS",
      "NextJS",
      "NestJS",
      "Node.js",
      "Gatsby",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "AI & Data Engineering",
    accent: "text-indigo-400",
    border: "hover:border-indigo-400/40",
    skills: [
      "Generative AI",
      "RAG Pipelines",
      "Agentic Workflows",
      "LangChain",
      "LlamaIndex",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    title: "Databases & Infrastructure",
    accent: "text-cyan-400",
    border: "hover:border-cyan-400/40",
    skills: ["PostgreSQL", "MySQL", "AWS", "Docker", "Linux", "CI/CD"],
  },
  {
    title: "Developer Productivity & Tools",
    accent: "text-violet-400",
    border: "hover:border-violet-400/40",
    skills: ["Git", "Claude Code", "Cursor", "v0.dev", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 scroll-mt-16 bg-surface/40 border-y border-edge">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="The stack I work in"
            description="What I use day to day: the TypeScript ecosystem, cloud infrastructure, and current AI tooling."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className={`card card-hover h-full p-7 ${group.border}`}>
                <h3 className={`font-mono text-xs uppercase tracking-[0.2em] ${group.accent}`}>
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-edge bg-raised px-3.5 py-2 text-sm text-foreground/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
