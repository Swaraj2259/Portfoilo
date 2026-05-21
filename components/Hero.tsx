import HeroDeferredMoon from "./HeroDeferredMoon";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center px-6 pb-8 pt-32 sm:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Portfolio</p>

        <div className="mt-4 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative z-10">
            <h1 className="text-4xl font-light uppercase leading-[0.95] tracking-[0.04em] sm:text-6xl lg:text-7xl">
              Swaraj Wattamwar
            </h1>
            <p className="mt-4 text-xl text-[var(--color-muted)] sm:text-2xl">
              Full Stack Web Developer | AI/ML Builder
            </p>
          </div>

          <HeroDeferredMoon />
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-8 right-6 z-10 text-right text-lg text-[var(--color-muted)] sm:bottom-10 sm:right-12 sm:text-2xl lg:bottom-12 lg:right-16">
        Build. Learn. Deploy.
      </p>
    </section>
  );
}
