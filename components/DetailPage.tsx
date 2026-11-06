import Link from "next/link";

export type Question = {
  question: string;
  answer: string[];
};

export type Detail = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  stack: string[];
  sourceUrl?: string;
  extraLink?: { href: string; label: string };
  purpose: string[];
  features: string[];
  howItWorks: string[];
  questions: Question[];
  status: string;
};

export default function DetailPage({ detail }: { detail: Detail }) {
  return (
    <article>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{detail.eyebrow}</p>
      <h1 className="mt-3">{detail.name}</h1>
      <p className="lead">{detail.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {detail.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-edge bg-raised px-2.5 py-1 font-mono text-xs text-foreground/80"
          >
            {tech}
          </span>
        ))}
      </div>

      {(detail.sourceUrl || detail.extraLink) && (
        <p className="flex flex-wrap gap-5 text-sm">
          {detail.sourceUrl && (
            <a href={detail.sourceUrl} target="_blank" rel="noopener noreferrer">
              View source
            </a>
          )}
          {detail.extraLink && <Link href={detail.extraLink.href}>{detail.extraLink.label}</Link>}
        </p>
      )}

      <h2>Why I built it</h2>
      {detail.purpose.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>What it does</h2>
      <ul>
        {detail.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <h2>How it works</h2>
      {detail.howItWorks.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {detail.questions.map((item) => (
        <section key={item.question}>
          <h2>{item.question}</h2>
          {item.answer.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <h2>Where it stands</h2>
      <p>{detail.status}</p>
    </article>
  );
}
