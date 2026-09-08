export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">~/</span>haroon.mukhtar · Senior Full Stack Engineer · AI Engineer
        </p>
        <div className="flex items-center gap-5 text-xs text-muted">
          <a
            href="https://github.com/haroongondal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/haroon66"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <p>© {new Date().getFullYear()} Haroon Mukhtar. Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
