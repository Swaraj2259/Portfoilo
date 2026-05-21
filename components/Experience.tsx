type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Mumbai Lead",
    org: "ActualOne (Web3 Community)",
    period: "2024 - 2025",
    bullets: [
      "Leading the Mumbai chapter of ActualOne, organizing and managing Web3-focused tech events, meetups, and developer sessions.",
      "Engaging with developers to explain Web3 products, protocols, and real-world use cases in a simple and practical manner.",
      "Coordinating developer relations with founders and ecosystem partners.",
      "Representing the community at conferences and tech events.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Client-Based Projects",
    period: "2024 - Present",
    bullets: [
      "Built and customized e-commerce sites using Shopify and Liquid templating.",
      "Implemented UI improvements, layout adjustments, and theme customizations.",
      "Developed WordPress lead-gen sites and optimized pages for engagement and performance.",
      "Collaborated with clients to deliver functional, content-driven websites on schedule.",
    ],
  },
  {
    role: "Co-Lead",
    org: "Developer Student Club (DSC)",
    period: "2024 - Present",
    bullets: [
      "Supporting planning and execution of technical workshops and peer-learning activities.",
      "Organizing events focused on development, problem-solving, and practical tech exposure.",
      "Encouraging collaboration and mentoring juniors on development tools and concepts.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="section-label mb-3 text-sm uppercase tracking-wide text-[var(--color-muted)]">Experience</p>
        <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Community & Work</h2>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={`${item.role}-${item.org}`} className="experience-card">
              <div className="experience-date" aria-hidden>
                {item.period}
              </div>

              <div className="experience-body">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{item.org}</p>

                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-[var(--color-muted)]">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
