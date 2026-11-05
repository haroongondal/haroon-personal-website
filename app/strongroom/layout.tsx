import Link from 'next/link';
import Footer from '@/components/Footer';

export default function StrongroomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='border-b border-edge'>
        <nav className='mx-auto flex h-16 max-w-3xl items-center justify-between px-5 sm:px-8'>
          <Link
            href='/'
            className='font-mono text-sm font-semibold tracking-tight'>
            <span className='text-accent'>~/</span>haroon.mukhtar
          </Link>
          <div className='flex items-center gap-5 text-sm text-muted'>
            <Link
              href='/strongroom'
              className='hover:text-accent transition-colors'>
              Strongroom
            </Link>
            <Link
              href='/strongroom/privacy'
              className='hover:text-accent transition-colors'>
              Privacy
            </Link>
          </div>
        </nav>
      </header>
      <main
        id='main'
        className='doc mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8 sm:py-20'>
        {children}
      </main>
      <Footer />
    </>
  );
}
