const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "React",
  "Next.js",
  "MongoDB",
  "Firebase",
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--color-border)] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="section-label mb-3 text-sm uppercase tracking-wide text-[var(--color-muted)]">Skills</p>
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Tech Stack</h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <article
              key={skill}
              className="skill-card rounded border border-[var(--color-border)] bg-[var(--color-surface)] p-4 flex items-center justify-center"
            >
              <h3 className="text-sm font-medium">{skill}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
