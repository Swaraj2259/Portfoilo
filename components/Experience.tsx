"use client";

import { useTheme } from "next-themes";

type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Engineering Intern",
    org: "Aeromat Creative Labs Pvt. Ltd. Pune",
    period: "June 2026 – Dec 2026",
    bullets: [
      "Built and maintained internal modules for the company’s ERP system, handling inventory, order tracking, and vendor records.",
      "Designed REST APIs to connect ERP modules with internal dashboards, cutting manual data entry across teams.",
      "Worked with drone-captured aerial and geospatial datasets, structuring and feeding processed data into internal reporting pipelines.",
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
];

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-5xl mx-auto relative px-8 md:px-12 lg:px-16 pt-32 pb-24 overflow-hidden">
      {/* Header Section */}
      <header className="mb-12">
        <p className="text-[var(--color-muted)] text-sm tracking-[0.24em] uppercase mb-4 font-mono">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight">Community &amp; Work</h2>
      </header>

      {/* Experience Container */}
      <div className="relative w-full border-y border-[var(--color-border)]">
        <div className="flex flex-col">
          {experiences.map((item, index) => (
            <div key={`${item.role}-${item.org}`}>
              {index > 0 && <div className="w-full h-[1px] bg-[var(--color-border)]"></div>}
              <article className="flex flex-col md:flex-row gap-6 py-7 px-4 -mx-4">
                <div className="shrink-0 w-12 md:w-16 pt-0.5">
                  <span className="font-mono text-[28px] text-[var(--color-muted)]">0{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                    <h3 className="text-[22px] font-bold text-[var(--color-text)] leading-tight inline-block">{item.role}</h3>
                    <span className="font-mono text-sm text-[var(--color-muted)] mt-2 md:mt-0">{item.period}</span>
                  </div>
                  <p className="text-[var(--color-muted)] text-sm mb-5">{item.org}</p>
                  <ul className="space-y-2 text-[var(--color-muted)] text-sm md:text-base leading-[1.7] list-none max-w-3xl">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-[var(--color-muted)] before:rounded-full">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
