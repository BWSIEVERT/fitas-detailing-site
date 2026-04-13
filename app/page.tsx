import Image from 'next/image';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { business } from '@/components/site-data';

const highlights = ['Dalton, Georgia', 'Cars, RVs & boats', 'Text or call to book'];

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-ink bg-hero-fade">
      <Header />

      <section className="section-pad overflow-hidden">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Premium vehicle care in Dalton</span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl">
              Clean, protected, and finished with the kind of detail people notice.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Fitas Auto Detailing delivers premium detailing in Dalton, Georgia with interior deep cleaning,
              exterior detailing, polishing, and protection-focused services designed to make your vehicle feel
              refreshed again.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${business.phoneRaw}`}
                className="rounded-full bg-gold px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-white"
              >
                Call {business.phoneDisplay}
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gold/10 blur-3xl" />
            <div className="card relative overflow-hidden shadow-soft">
              <div className="relative h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium auto detailing finish"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid gap-5 rounded-[24px] border border-white/10 bg-black/35 p-6 backdrop-blur-md sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/50">Location</p>
                      <p className="mt-2 text-sm font-medium text-white">{business.city}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/50">Booking</p>
                      <p className="mt-2 text-sm font-medium text-white">Text or call directly</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/50">Focus</p>
                      <p className="mt-2 text-sm font-medium text-white">Gloss, cleanliness, protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell">
          <div className="card grid gap-6 rounded-[30px] px-8 py-8 md:grid-cols-3 md:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Precision work. Consistent Results. No shortcuts</p>
              <p className="mt-3 text-xl font-semibold text-white">Attention to Detail</p>
            </div>
            <p className="text-white/65">
              Every surface is treated carefully — no rushed work, no missed spots.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="container-shell">
          <div className="max-w-2xl">
            <span className="eyebrow">Services</span>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Built Around What Your Vehicle Actually Needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              From deep interior cleaning to paint restoration and protection, everything is structured to make choosing the right service simple — with results that speak for themselves.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {business.services.map((service) => (
              <article key={service.title} className="card p-8">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/65">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-pad pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card overflow-hidden">
            <div className="relative h-full min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                alt="Detailed vehicle interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <span className="eyebrow">About</span>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Detailing Done Right — From Start to Finish
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Servicing Dalton, Georgia, Fitas Auto Detailing focuses on delivering consistent, high-quality results through interior detailing, exterior refinement, and paint protection services.
              </p>
              <p className="mt-6 text-lg leading-8 text-white/70">
                Clear communication, dependable service, and results you can see.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">Address</p>
                  <p className="mt-3 text-base font-medium text-white">{business.address}</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/45">Hours</p>
                  <div className="mt-3 space-y-2 text-base font-medium text-white">
                    {business.hours.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad pt-0">
        <div className="container-shell">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Gallery</span>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Where Quality Speaks for Itself</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              From deep-cleaned interiors to refined exterior finishes, every vehicle reflects the level of care and attention put into the work.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="card relative min-h-[520px] overflow-hidden">
              <Image
                src={business.gallery[0].image}
                alt={business.gallery[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-6">
              {business.gallery.slice(1).map((item) => (
                <div key={item.title} className="card relative min-h-[247px] overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad pt-0">
        <div className="container-shell">
          <div className="card grid gap-10 overflow-hidden p-8 md:grid-cols-[1fr_0.82fr] md:p-12">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Get Your Vehicle Scheduled
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Reach out by phone or text to book your detail, ask questions, or find the right service for your vehicle. Quick response, straightforward process.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-gold"
                >
                  {business.phoneDisplay}
                </a>
                <a
                  href="https://maps.google.com/?q=507+S+Tibbs+Rd,+Dalton,+GA+30720"
                  className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
                >
                  Open Directions
                </a>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/45">Phone</p>
                  <a href={`tel:${business.phoneRaw}`} className="mt-3 block text-2xl font-semibold text-white">
                    {business.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/45">Location</p>
                  <p className="mt-3 text-lg text-white">{business.address}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/45">Availability</p>
                  <div className="mt-3 space-y-2 text-lg text-white">
                    {business.hours.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
