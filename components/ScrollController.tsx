"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollController() {
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Disable scrolling on the hero (home) page.
      // Keep normal scrolling enabled for all other routes.
      if (pathname === "/" || pathname === "") {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    };

    handleScroll();
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  return null;
}
