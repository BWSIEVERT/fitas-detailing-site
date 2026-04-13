import { business } from './site-data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-white/50">
      <div className="container-shell flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <p>
          {business.name} · {business.city}
        </p>
        <p>{business.phoneDisplay}</p>
      </div>
    </footer>
  );
}
