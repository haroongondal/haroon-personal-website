import Reveal from './Reveal';

const EMAIL = 'haroonmukhtar4@gmail.com';
const PHONE = '+923066661223';
const LINKEDIN = 'https://www.linkedin.com/in/haroon-mukhtar';

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative py-24 sm:py-32 scroll-mt-16 overflow-hidden'>
      <div className='bg-grid absolute inset-0 -z-10 rotate-180' />
      <div className='absolute bottom-0 left-1/2 -z-10 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px]' />

      <div className='mx-auto max-w-6xl px-5 sm:px-8'>
        <Reveal>
          <div className='card glow-accent mx-auto max-w-3xl p-9 sm:p-14 text-center'>
            <p className='font-mono text-xs uppercase tracking-[0.25em] text-accent'>
              Contact
            </p>
            <h2 className='mt-4 text-3xl sm:text-4xl font-semibold tracking-tight'>
              Let&apos;s build AI-powered products
            </h2>
            <p className='mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted'>
              I&apos;m open to senior full stack roles, AI engineering
              opportunities, applied AI and agentic workflow projects, and
              consulting or freelance product development. If you&apos;re
              building something ambitious, I&apos;d like to hear about it.
            </p>

            <div className='mt-9 flex flex-wrap items-center justify-center gap-3.5'>
              <a
                href={`mailto:${EMAIL}`}
                className='rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background hover:bg-accent-3 transition-colors'>
                Email Me
              </a>
              <a
                href={LINKEDIN}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full border border-edge-strong bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-accent/50 transition-colors'>
                LinkedIn
              </a>
              <a
                href='/Haroon-Mukhtar-Resume.pdf'
                download
                className='rounded-full border border-edge-strong bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-accent/50 transition-colors'>
                Download Resume
              </a>
            </div>

            <div className='mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted'>
              <span className='inline-flex items-center gap-2'>
                <svg
                  viewBox='0 0 16 16'
                  className='h-4 w-4 text-accent'
                  fill='none'
                  aria-hidden='true'>
                  <path
                    d='M2 4l6 4.5L14 4M2.5 3h11a1 1 0 011 1v8a1 1 0 01-1 1h-11a1 1 0 01-1-1V4a1 1 0 011-1z'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <a
                  href={`mailto:${EMAIL}`}
                  className='hover:text-accent transition-colors'>
                  {EMAIL}
                </a>
              </span>
              <span className='inline-flex items-center gap-2'>
                <svg
                  viewBox='0 0 16 16'
                  className='h-4 w-4 text-accent'
                  fill='none'
                  aria-hidden='true'>
                  <path
                    d='M4 2.5h8a1.5 1.5 0 011.5 1.5v8A1.5 1.5 0 0112 13.5H4A1.5 1.5 0 012.5 12V4A1.5 1.5 0 014 2.5z'
                    stroke='currentColor'
                    strokeWidth='1.3'
                  />
                  <path
                    d='M5 5.5h6'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeLinecap='round'
                  />
                  <path
                    d='M5 7.5h6'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeLinecap='round'
                  />
                  <path
                    d='M5 9.5h4'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeLinecap='round'
                  />
                </svg>
                <a
                  href={`tel:${PHONE}`}
                  className='hover:text-accent transition-colors'>
                  {PHONE}
                </a>
              </span>
              <span className='inline-flex items-center gap-2'>
                <svg
                  viewBox='0 0 16 16'
                  className='h-4 w-4 text-accent'
                  fill='none'
                  aria-hidden='true'>
                  <path
                    d='M8 14.5s5-4.1 5-8A5 5 0 003 6.5c0 3.9 5 8 5 8z'
                    stroke='currentColor'
                    strokeWidth='1.3'
                    strokeLinejoin='round'
                  />
                  <circle
                    cx='8'
                    cy='6.5'
                    r='1.8'
                    stroke='currentColor'
                    strokeWidth='1.3'
                  />
                </svg>
                Islamabad, Pakistan
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
