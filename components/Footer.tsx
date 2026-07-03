export default function Footer() {
  return (
    <footer className="border-t border-edge py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">~/</span>haroon.mukhtar — Senior Full Stack Engineer · AI Engineer
        </p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Haroon Mukhtar. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
