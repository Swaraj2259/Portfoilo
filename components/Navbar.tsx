"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { cancelIdle, scheduleIdle } from "@/lib/scheduleIdle";

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
    <header className="fixed right-[16px] top-[16px] z-50 sm:right-[24px] sm:top-[20px]">
      <nav
        className="flex items-center gap-1 overflow-x-auto p-1.5"
        style={{
          borderRadius: "100px",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.05)",
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
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-black"
                  : "text-[rgba(255,255,255,0.55)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
              }`}
              style={{ borderRadius: "100px" }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
