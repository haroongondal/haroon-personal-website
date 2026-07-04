import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ROLES = [
  {
    company: 'Outsentia',
    role: 'Senior Software Engineer',
    period: 'June 2026 — Present',
    current: true,
    summary:
      'Built an autonomous LLM agent (Mastra, TypeScript, Claude) that monitors financial events daily and auto-generates analyst-grade earnings digests and email drafts, integrating multiple external data and productivity services through a deterministic code-orchestrated pipeline.',
    points: [
      'Built a multi-agent financial research platform (TypeScript/Mastra) automating earnings monitoring, analyst report drafting, and research chat',
      'Designed a self-healing daily monitor that ingests earnings/event data, drafts digest emails, and updates calendars unattended via MCP integrations (Aiera, Gmail, Drive, Calendar)',
      'Engineered a 5-pass anecdote-generation pipeline generating polished analyst anecdotes with verbatim KPI grounding',
      'Built a conversational research agent with semantic memory recall and per-request tool routing',
      'Architected a deterministic code-owned dedup, state, and templating layer with LLM calls scoped strictly to bounded judgment tasks (structured in/out)',
      'Developed a custom React front end for research operations and streaming agent interaction',
    ],
  },
  {
    company: 'AIO',
    role: 'Senior Full Stack Engineer',
    period: 'April 2024 — June 2026',
    current: false,
    summary:
      'Leading full stack development on a no-code website publishing platform for the restaurant industry — from rendering architecture to deployment automation.',
    points: [
      'Built a dual-environment publishing system (Live / Staging) with safe promotion workflows',
      'Led the Gatsby → Next.js migration to a more scalable rendering architecture',
      'Designed protected public APIs and a full website management suite',
      'Shipped a GA4 / Google Search Console analytics dashboard',
      'Built the templating and drafting system powering rapid site creation',
      'Created an image library with editing and an optimization pipeline',
      'Engineered an independent responsive styling engine with mobile-specific overrides',
      'Drove ADA-compliant architecture with a high Lighthouse / Core Web Vitals bar',
      'Built collaborative tools with real-time multi-user synchronization',
      'Developed dynamic form builders and AWS-driven deployment automation',
      'Automated domain and SSL provisioning; led product-driven UX improvements',
    ],
  },
  {
    company: '99 Technologies',
    role: 'Frontend Engineer',
    period: 'Jan 2022 — March 2024',
    current: false,
    summary:
      "Joined as the sole frontend developer and helped grow the team's engineering capability while leading key product frontends.",
    points: [
      'Led frontend development of an inventory management system',
      'Built the SJ Computers e-commerce frontend with Next.js and Material UI',
      'Implemented checkout flows and guest user management',
      'Maintained backend APIs supporting frontend integration',
      'Mentored engineers as the frontend practice grew',
    ],
  },
  {
    company: '2nd Mouse Venture',
    role: 'Web Developer',
    period: 'Dec 2020 — Dec 2021',
    current: false,
    summary:
      'Built real-time education technology: an LMS and virtual classroom platform used for live remote teaching.',
    points: [
      'Developed class scheduling and management workflows',
      'Built video conferencing and screen-sharing features',
      'Implemented collaborative whiteboarding with annotations',
      'Added real-time chat across the classroom experience',
      'Delivered dedicated portals for teachers, sales, and admin roles',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='py-24 sm:py-32 scroll-mt-16 bg-surface/40 border-y border-edge'>
      <div className='mx-auto max-w-6xl px-5 sm:px-8'>
        <Reveal>
          <SectionHeading
            eyebrow='Experience'
            title='Five years of shipping production software'
            description='From sole frontend developer to senior engineer owning platform architecture, publishing infrastructure, and AI-powered features.'
          />
        </Reveal>

        <div className='relative mt-14 space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-edge-strong sm:before:left-[9px]'>
          {ROLES.map((role, i) => (
            <Reveal key={role.company} delay={i * 80}>
              <div className='relative pl-10 sm:pl-14'>
                <span
                  className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 sm:h-5 sm:w-5 ${
                    role.current
                      ? 'border-accent bg-accent/25 node-pulse'
                      : 'border-edge-strong bg-surface'
                  }`}
                  aria-hidden='true'
                />
                <div className='card card-hover p-7'>
                  <div className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
                    <h3 className='text-xl font-semibold text-foreground'>
                      {role.company}
                      <span className='text-muted font-normal'>
                        {' '}
                        · {role.role}
                      </span>
                    </h3>
                    <span className='font-mono text-xs text-accent'>
                      {role.period}
                    </span>
                  </div>
                  <p className='mt-3 text-sm leading-relaxed text-muted'>
                    {role.summary}
                  </p>
                  <ul className='mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2'>
                    {role.points.map(point => (
                      <li
                        key={point}
                        className='flex items-start gap-2.5 text-sm text-foreground/85'>
                        <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent' />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
