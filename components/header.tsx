import { business } from './site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          {business.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#gallery" className="transition hover:text-white">
            Gallery
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href={`tel:${business.phoneRaw}`}
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold hover:text-ink"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
