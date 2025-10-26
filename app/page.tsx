import EqualizerCanvas from "./components/EqualizerCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient glow background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-blueGlow" />
      {/* Global Equalizer background */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <EqualizerCanvas opacity={0.7} />
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-60">
            {/* Replace with your video/image later */}
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.08),transparent_60%)]" />
          </div>
        </div>

        <div className="max-w-5xl animate-fade-in-up">
          {/* Logo placeholder — replace with your own image */}
          <div className="mx-auto mb-6 w-28 h-28 rounded-full neon-ring" />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold neon-text">
            DJ Micky Wonder Night
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-zinc-300">
            Hardtechno. Hardstyle. Energy.
          </p>
          <p className="metallic text-zinc-200/90 text-sm sm:text-base mt-2">
            Ultra‑realistic neon lighting • Cinematic shadows • Cyberpunk vibe
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#music" className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-black bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-dark))] shadow-neon hover:scale-[1.02] transition-transform">
              <span>▶</span> Listen / Watch
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm border border-cyan-300/30 hover:bg-white/5 transition-colors">
              Book Now
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 text-cyan-300/90">
            {/* Simple inline SVG icons you can replace */}
            <a aria-label="Instagram" href="#" className="hover:text-white transition-colors" title="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </a>
            <a aria-label="YouTube" href="#" className="hover:text-white transition-colors" title="YouTube">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.2c2.1.5 9.4.5 9.4.5s7.3 0 9.4-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8zM9.5 15.5v-7l7 3.5-7 3.5z"/>
              </svg>
            </a>
            <a aria-label="TikTok" href="#" className="hover:text-white transition-colors" title="TikTok">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M21 8.1a7.2 7.2 0 0 1-4.3-1.4V15a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.6a3.3 3.3 0 1 0 2.3 3.2V2h2.7a4.5 4.5 0 0 0 4.3 3.4V8.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold neon-text">About</h2>
            <div className="mt-4 h-px w-24 bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-dark))]" />
            <p className="mt-5 text-zinc-300 leading-relaxed">
              Forged in the neon glow of the underground, DJ Micky Wonder Night channels the raw power of hardtechno and hardstyle into high‑octane sets. Expect relentless kicks, cinematic builds, and immersive club atmospheres.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{background: 'var(--color-panel)'}}>
            {/* Replace this panel with a photo or looping clip */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.1),transparent_30%,rgba(255,255,255,.06)_70%,transparent)]" />
          </div>
        </div>
      </section>

      {/* MUSIC / SETS */}
      <section id="music" className="relative py-24 px-6" style={{background: 'color-mix(in oklab, var(--color-panel) 50%, transparent)'}}>
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-semibold neon-text">Music / Sets</h2>
          <div className="mt-4 h-px w-24 bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-dark))]" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <a key={i} href="#" className="group relative rounded-xl overflow-hidden border border-cyan-300/20" style={{background:'var(--color-panel)'}}>
                <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(0,191,255,.2),transparent_60%)] group-hover:scale-[1.02] transition-transform" />
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm text-zinc-200 group-hover:text-white transition-colors">High Voltage Set #{i+1}</span>
                  <span className="text-[var(--color-accent)] group-hover:neon-text">▶</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-semibold neon-text">Upcoming Events</h2>
          <div className="mt-4 h-px w-24 bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-dark))]" />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="rounded-xl border border-cyan-300/25 p-5 hover:shadow-neon transition-shadow" style={{background:'color-mix(in oklab, var(--color-panel) 70%, transparent)'}}>
                <div className="text-sm text-zinc-400">Nov {10+i}, 2025 • Berlin</div>
                <div className="mt-1 text-xl font-semibold">Cyber Pulse Night</div>
                <div className="mt-2 text-zinc-300">Main stage • Hardtechno / Hardstyle</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24 px-6" style={{background: 'color-mix(in oklab, var(--color-panel) 50%, transparent)'}}>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold neon-text">Contact / Booking</h2>
          <div className="mt-4 h-px w-24 bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-dark))]" />
          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <input className="sm:col-span-1 w-full rounded-lg border border-cyan-300/25 px-4 py-3 outline-none focus:border-[var(--color-accent)] focus:shadow-neon transition bg-black/70" placeholder="Name" />
            <input className="sm:col-span-1 w-full rounded-lg border border-cyan-300/25 px-4 py-3 outline-none focus:border-[var(--color-accent)] focus:shadow-neon transition bg-black/70" placeholder="Email" type="email" />
            <input className="sm:col-span-2 w-full rounded-lg border border-cyan-300/25 px-4 py-3 outline-none focus:border-[var(--color-accent)] focus:shadow-neon transition bg-black/70" placeholder="Subject" />
            <textarea className="sm:col-span-2 w-full rounded-lg border border-cyan-300/25 px-4 py-3 h-36 outline-none focus:border-[var(--color-accent)] focus:shadow-neon transition bg-black/70" placeholder="Message" />
            <button className="sm:col-span-2 justify-self-start inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-dark))] shadow-neon hover:scale-[1.02] transition-transform">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-6 text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full neon-ring" />
            <span>© {new Date().getFullYear()} DJ Micky Wonder Night</span>
          </div>
          <div className="flex gap-5">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#music" className="hover:text-white">Music</a>
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
