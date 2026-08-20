"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { cancelIdle, scheduleIdle } from "@/lib/scheduleIdle";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const prefetchRoutes = () => {
      for (const link of navLinks) {
        if (link.href !== pathname) {
          router.prefetch(link.href);
        }
      }
    };

    const id = scheduleIdle(prefetchRoutes, 2500);
    return () => cancelIdle(id);
  }, [pathname, router]);

  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-auto md:left-auto md:right-[24px] md:top-[24px] md:translate-x-0 w-[90%] md:w-auto max-w-max">
      <nav
        className="flex items-center justify-between md:justify-center gap-1 overflow-x-auto p-1.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{
          borderRadius: "100px",
          border: "1px solid var(--color-glass-border)",
          background: "var(--color-glass-bg)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              className={`whitespace-nowrap px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[var(--color-text)] text-[var(--color-bg)]"
                  : "text-[var(--color-muted)] hover:bg-[var(--color-glass-bg)] hover:text-[var(--color-text)]"
              }`}
              style={{ borderRadius: "100px" }}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="mx-1 h-4 w-px bg-[var(--color-border)] shrink-0" />
        <ThemeToggle />
      </nav>
    </header>
  );
}
