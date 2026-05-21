import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
      {/* ADD BACKGROUND HERE */}
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="section-label mb-3 text-sm uppercase tracking-wide text-[var(--color-muted)]">About</p>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src="/Swaraj_Wattamwar.png"
              alt="Swaraj Wattamwar"
              fill
              loading="lazy"
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Who I Am</h2>

          <p className="text-[var(--color-muted)]">
            I am a Computer Science undergraduate at ITM Skill University with a strong interest in
            Artificial Intelligence, Machine Learning, and modern web technologies. I focus on
            building clean, user-centric applications that combine strong backend logic with engaging
            frontend experiences.
          </p>

          <p className="text-[var(--color-muted)]">
            My core stack includes MongoDB, Express, React, and Node.js (MERN). I use this stack to
            develop full-stack applications that are scalable and maintainable. On the infrastructure
            side, I have hands-on experience with DevOps practices such as version control
            workflows, CI/CD pipelines, containerization with Docker, and cloud deployment — ensuring
            reliable delivery to production.
          </p>

          <p className="text-[var(--color-muted)]">
            I care about writing code that is not just functional, but thoughtfully designed — from
            the database layer all the way to the user interface.
          </p>

          <div className="pt-6 flex flex-wrap items-center gap-6">
            <a
              href="/SwarajWattamwar_Resume.pdf"
              download
              className="rounded border border-[var(--color-border)] px-5 py-2.5 text-sm text-[var(--color-text)] transition-colors hover:bg-[var(--color-border)] hover:text-white"
            >
              Download Resume
            </a>

            <Link
              href="mailto:swarajmahesh83@gmail.com"
              className="text-sm font-medium text-[var(--color-muted)] underline-offset-4 hover:text-white hover:underline transition-colors"
            >
              Email Me
            </Link>

            <Link
              href="https://github.com/Swaraj2259"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-muted)] underline-offset-4 hover:text-white hover:underline transition-colors"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/swaraj-wattamwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-muted)] underline-offset-4 hover:text-white hover:underline transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
