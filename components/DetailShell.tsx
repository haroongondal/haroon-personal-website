import Link from "next/link";
import Footer from "./Footer";

type Props = {
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
};

export default function DetailShell({ backHref, backLabel, children }: Props) {
  return (
    <>
      <header className="border-b border-edge">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-accent">~/</span>haroon.mukhtar
          </Link>
          <Link href={backHref} className="text-sm text-muted hover:text-accent transition-colors">
            ← {backLabel}
          </Link>
        </nav>
      </header>
      <main id="main" className="doc mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8 sm:py-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
