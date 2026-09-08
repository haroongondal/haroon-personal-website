import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const CERTIFICATIONS = [
  {
    title: 'Architecting Solutions on AWS',
    provider: 'Coursera · AWS',
  },
  {
    title: 'Application Development using Microservices and Serverless',
    provider: 'Coursera · IBM',
  },
  {
    title: 'AWS Generative AI for Developers',
    provider: 'FutureLearn',
  },
];

export default function Education() {
  return (
    <section id='education' className='py-24 sm:py-32 scroll-mt-16'>
      <div className='mx-auto max-w-6xl px-5 sm:px-8'>
        <Reveal>
          <SectionHeading
            eyebrow='Background'
            title='Education and certifications'
          />
        </Reveal>

        <div className='mt-12 grid gap-6 lg:grid-cols-2'>
          <Reveal delay={80}>
            <div className='card card-hover h-full p-7'>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
                Education
              </p>
              <h3 className='mt-4 text-lg font-semibold text-foreground'>
                Bachelor of Science in Computer Science
              </h3>
              <p className='mt-1.5 text-sm text-muted'>
                COMSATS University Islamabad
              </p>
              <p className='mt-1 font-mono text-xs text-accent'>2017 — 2021</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className='card card-hover h-full p-7'>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
                Certifications
              </p>
              <ul className='mt-4 space-y-4'>
                {CERTIFICATIONS.map(cert => (
                  <li key={cert.title} className='flex items-start gap-3'>
                    <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
                    <div>
                      <p className='text-sm font-medium text-foreground'>
                        {cert.title}
                      </p>
                      <p className='mt-0.5 text-xs text-muted'>
                        {cert.provider}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
