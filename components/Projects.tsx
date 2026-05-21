"use client";

import { useState, useEffect, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

interface Project {
  index: string;
  title: string;
  subtitle: string;
  meta: string;
  bullets: string[];
  github: string;
  link?: string;
  tech: { label: string; size: number }[];
}

const PROJECTS: Project[] = [
  {
    index: "Project 01 / Personal Build",
    title: "Oki-Doki MVP",
    subtitle: "Next.js Landing Site",
    meta: "Apr 2026",
    bullets: [
      "Responsive MVP landing site with animated hero featuring a floating \"cloud\" of feature cards around a WebM-powered 3D companion.",
      "Built interactive WebGL gallery using OGL and an orbital radial timeline component with Framer Motion transitions.",
      "Implemented GSAP-sequenced animations, Bento grid spotlight hover effects, and Tailwind CSS v4 variant system.",
      "Deployed on Vercel with Turbopack dev server and full TypeScript + React 19 stack.",
    ],
    github: "https://github.com/Swaraj2259/oki-doki-mvp",
    link: "https://oki-doki-mvp.vercel.app/",
    tech: [
      { label: "Next.js", size: 72 },
      { label: "TypeScript", size: 64 },
      { label: "GSAP", size: 54 },
      { label: "Framer Motion", size: 60 },
      { label: "Tailwind", size: 58 },
      { label: "OGL / WebGL", size: 52 },
      { label: "React 19", size: 56 },
    ],
  },
  {
    index: "Project 02 / Freelance",
    title: "Aeromat\nLead-Gen Site",
    subtitle: "Marketing Website",
    meta: "2025 – 2026",
    bullets: [
      "Designed and built a high-converting lead generation website for Aeromat, focused on performance and conversion UX.",
      "Integrated contact forms, CTA flows, and analytics tracking to capture and qualify inbound leads.",
      "Built with a modern React-based stack with responsive layouts optimised for mobile-first browsing.",
      "Delivered clean, maintainable codebase ready for client-side edits post-handoff.",
    ],
    github: "https://github.com/Swaraj2259/aeromat-leadgen-site",
    link: "https://aeromat-kappa.vercel.app/",
    tech: [
      { label: "React", size: 72 },
      { label: "Tailwind", size: 62 },
      { label: "Next.js", size: 58 },
      { label: "TypeScript", size: 60 },
      { label: "Vercel", size: 54 },
      { label: "HTML / CSS", size: 52 },
    ],
  },
  {
    index: "Project 03 / Personal Build",
    title: "AI Agent\nwith ADK",
    subtitle: "Agentic AI System",
    meta: "2025 – 2026",
    bullets: [
      "Built a multi-agent AI system using Google's Agent Development Kit (ADK) for orchestrating complex task pipelines.",
      "Designed agent tool-use flows, memory management, and inter-agent communication protocols.",
      "Integrated external APIs and data sources for real-time context injection into agent reasoning loops.",
      "Structured for extensibility — new agent roles can be added via modular task definitions.",
    ],
    github: "https://github.com/Swaraj2259/AI-agent-with-adk",
    tech: [
      { label: "Python", size: 70 },
      { label: "Google ADK", size: 64 },
      { label: "Gemini API", size: 60 },
      { label: "FastAPI", size: 56 },
      { label: "LangGraph", size: 58 },
      { label: "Docker", size: 52 },
      { label: "Pydantic", size: 50 },
    ],
  },
];

// ─── Bubble Physics Interactive ───────────────────────────────────────────────

interface PhysicalBubble {
  id: string;
  label: string;
  size: number;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  isDragging: boolean;
}

function syncBubbleElements(
  bubbles: PhysicalBubble[],
  elements: Map<string, HTMLDivElement>
) {
  for (const b of bubbles) {
    const el = elements.get(b.id);
    if (!el) continue;
    el.style.left = `${b.x - b.r}px`;
    el.style.top = `${b.y - b.r}px`;
    el.style.transform = `rotate(${b.rot}deg)${b.isDragging ? " scale(1.05)" : ""}`;
  }
}

function BubblePhysicsCanvas({ techs }: { techs: { label: string; size: number }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<PhysicalBubble[]>([]);
  const elementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const isRunning = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const W = 360;
    const H = 380;
    const rots = [-15, 15, -20, 20, -10, 10, 0];

    bubblesRef.current = techs.map((t, i) => {
      const scaledSize = Math.floor(t.size * 1.4);
      const r = scaledSize / 2;
      return {
        id: t.label,
        label: t.label,
        size: scaledSize,
        r,
        x: r + Math.random() * (W - scaledSize),
        y: r + Math.random() * (H / 2),
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        rot: rots[i % rots.length],
        isDragging: false,
      };
    });

    syncBubbleElements(bubblesRef.current, elementsRef.current);

    const gravity = 0;
    const friction = 1;
    const bounce = 1;

    const loop = () => {
      if (!isRunning.current) return;

      const W = containerRef.current?.offsetWidth || 360;
      const H = containerRef.current?.offsetHeight || 380;
      const bubbles = bubblesRef.current;

      for (const b of bubbles) {
        if (b.isDragging) continue;

        b.vy += gravity;
        b.vx *= friction;
        b.vy *= friction;

        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx *= -bounce;
        }
        if (b.x + b.r > W) {
          b.x = W - b.r;
          b.vx *= -bounce;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy *= -bounce;
        }
        if (b.y + b.r > H) {
          b.y = H - b.r;
          b.vy *= -bounce;
        }
      }

      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.r + b2.r + 2;

          if (dist < minDist && dist > 0) {
            const angle = Math.atan2(dy, dx);
            const overlap = minDist - dist;
            const massRatio1 = b2.size / (b1.size + b2.size);
            const massRatio2 = b1.size / (b1.size + b2.size);
            const pushX = Math.cos(angle) * overlap;
            const pushY = Math.sin(angle) * overlap;

            if (!b1.isDragging) {
              b1.x -= pushX * massRatio1;
              b1.y -= pushY * massRatio1;
            }
            if (!b2.isDragging) {
              b2.x += pushX * massRatio2;
              b2.y += pushY * massRatio2;
            }

            const vCollisionX = b1.vx - b2.vx;
            const vCollisionY = b1.vy - b2.vy;
            const vCollisionNorm = vCollisionX * Math.cos(angle) + vCollisionY * Math.sin(angle);

            if (vCollisionNorm > 0) {
              const restitution = 1;
              const impulse = (1 + restitution) * vCollisionNorm / 2;
              const impX = Math.cos(angle) * impulse;
              const impY = Math.sin(angle) * impulse;

              if (!b1.isDragging) {
                b1.vx -= impX;
                b1.vy -= impY;
              }
              if (!b2.isDragging) {
                b2.vx += impX;
                b2.vy += impY;
              }
            }
          }
        }
      }

      syncBubbleElements(bubbles, elementsRef.current);
      rafId.current = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(loop);
    };

    const container = containerRef.current;
    const observer =
      container &&
      new IntersectionObserver(
        ([entry]) => {
          isRunning.current = entry.isIntersecting;
          if (isRunning.current) startLoop();
        },
        { threshold: 0.1 }
      );

    const onVisibilityChange = () => {
      if (document.hidden) {
        isRunning.current = false;
        cancelAnimationFrame(rafId.current);
        return;
      }
      if (container) {
        const rect = container.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        isRunning.current = inView;
        if (inView) startLoop();
      }
    };

    if (observer && container) {
      observer.observe(container);
    } else {
      isRunning.current = true;
      startLoop();
    }

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      isRunning.current = false;
      cancelAnimationFrame(rafId.current);
      observer?.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [techs]);

  // Handle Dragging
  const dragRef = useRef<{ id: string, offsetX: number, offsetY: number } | null>(null);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent, id: string) => {
    // Determine if it was a touch or mouse event
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    // Scale coords to local canvas space
    const px = clientX - rect.left;
    const py = clientY - rect.top;

    const b = bubblesRef.current.find(b => b.id === id);
    if (b) {
      b.isDragging = true;
      b.vx = 0;
      b.vy = 0;
      dragRef.current = { id, offsetX: b.x - px, offsetY: b.y - py };
    }
  };

  useEffect(() => {
    const handleMove = (e: PointerEvent | TouchEvent | MouseEvent) => {
      if (!dragRef.current) return;
      
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      let clientX = 0;
      let clientY = 0;

      // Handle touch or mouse
      if ('touches' in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }else return;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      const px = clientX - rect.left;
      const py = clientY - rect.top;

      const b = bubblesRef.current.find(b => b.id === dragRef.current!.id);
      if (b) {
        const lastX = b.x;
        const lastY = b.y;

        b.x = px + dragRef.current!.offsetX;
        b.y = py + dragRef.current!.offsetY;
        b.vx = b.x - lastX;
        b.vy = b.y - lastY;

        syncBubbleElements(bubblesRef.current, elementsRef.current);
      }
    };

    const handleUp = () => {
      if (dragRef.current) {
        const b = bubblesRef.current.find(b => b.id === dragRef.current!.id);
        if (b) {
          b.isDragging = false;
        }
        dragRef.current = null;
      }
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-[360px] h-[380px] select-none touch-none overflow-hidden cursor-crosshair group flex items-center justify-center flex-shrink-0"
    >
      {techs.map((t, i) => {
        const scaledSize = Math.floor(t.size * 1.4);
        const rots = [-15, 15, -20, 20, -10, 10, 0];
        return (
          <div
            key={t.label}
            ref={(el) => {
              if (el) elementsRef.current.set(t.label, el);
              else elementsRef.current.delete(t.label);
            }}
            onMouseDown={(e) => handlePointerDown(e, t.label)}
            onTouchStart={(e) => handlePointerDown(e, t.label)}
            className="absolute flex cursor-grab items-center justify-center rounded-full bg-white transition-[box-shadow] duration-75 active:cursor-grabbing hover:ring-4 hover:ring-white/20"
            style={{
              width: scaledSize,
              height: scaledSize,
              transform: `rotate(${rots[i % rots.length]}deg)`,
            }}
          >
            <span className="pointer-events-none max-w-[85%] px-1 text-center font-mono text-xs font-bold leading-tight text-[#111] drop-shadow-sm">
              {t.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (i: number) => {
    const next = ((i % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setCurrent(next);
    setAnimKey((k) => k + 1);
  };

  const project = PROJECTS[current];

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Slide */}
        <div
          key={animKey}
          className="project-slide-in flex flex-col items-start gap-12 px-2 pb-10 lg:flex-row xl:px-16"
        >
          {/* Left */}
          <div className="flex-1 min-w-0 w-full">
            <p className="font-mono text-[10px] tracking-[2px] text-[#555] uppercase mb-3">
              {project.index}
            </p>
            <h1
              className="font-mono text-[26px] font-bold leading-tight mb-2 text-white whitespace-pre-line"
            >
              {project.title}
            </h1>
            <p className="font-mono text-[13px] text-[#444] mb-6">
              {project.subtitle}&nbsp;&nbsp;·&nbsp;&nbsp;{project.meta}
            </p>

            <p className="font-mono text-[11px] tracking-widest text-[#666] mb-3 uppercase">
              Experience
            </p>
            <ul className="space-y-0">
              {project.bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-5 py-2.5 text-[13.5px] text-[#ccc] leading-relaxed border-b border-[#151515]"
                >
                  <span className="absolute left-0 top-2.5 text-[#444] text-lg leading-none">
                    ›
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-5">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] text-[#fff] bg-[#2a2a2a] border border-[#2a2a2a] px-3.5 py-2 rounded hover:bg-[#333] hover:border-[#444] transition-all duration-200"
                >
                  <ExternalLinkIcon />
                  Live Site
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-[#555] border border-[#2a2a2a] px-3.5 py-2 rounded hover:border-[#555] hover:text-[#aaa] transition-all duration-200"
              >
                <GitHubIcon />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Divider hidden on mobile */}
          <div className="hidden lg:block w-px self-stretch bg-[#1a1a1a] flex-shrink-0" />

          {/* Right */}
          <div className="w-full lg:w-[360px] flex-shrink-0 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
            <p className="font-mono text-[11px] tracking-[2px] text-[#444] uppercase mb-5 self-start lg:self-auto">
              Technical Skills
            </p>
            <BubblePhysicsCanvas key={current} techs={project.tech} />
          </div>
        </div>

        {/* Arrow nav */}
        <ArrowButton direction="left" onClick={() => goTo(current - 1)} />
        <ArrowButton direction="right" onClick={() => goTo(current + 1)} />

        {/* Dots */}
        <div className="flex justify-center gap-2 py-4 border-t border-[#111] mt-8">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-7 bg-white" : "w-1.5 bg-[#2a2a2a]"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous project" : "Next project"}
      className={`absolute flex items-center justify-center border border-[var(--color-border)] rounded-md text-[var(--color-muted)] transition-all duration-200 z-10 bg-[var(--color-surface)] shadow-lg hover:border-white hover:text-white
        w-10 h-10 text-lg sm:w-9 sm:h-14 sm:text-xl
        bottom-[10px] sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 
        ${
          direction === "left" 
            ? "left-2 sm:left-0 xl:-left-12" 
            : "right-2 sm:right-0 xl:-right-12"
        }
      `}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
