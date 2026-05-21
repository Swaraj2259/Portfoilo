"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cancelIdle, scheduleIdle } from "@/lib/scheduleIdle";

const MoonScene = dynamic(() => import("./MoonScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-full bg-white/5 animate-pulse" />,
});

export default function MoonModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let idleId: ReturnType<typeof scheduleIdle> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        idleId = scheduleIdle(() => setShouldLoad(true));
      },
      { rootMargin: "80px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (idleId !== null) cancelIdle(idleId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex aspect-square w-full max-w-[500px] cursor-grab items-center justify-center active:cursor-grabbing lg:h-[600px] lg:max-w-full"
    >
      {shouldLoad ? (
        <MoonScene />
      ) : (
        <div className="h-full w-full rounded-full bg-white/5 animate-pulse" />
      )}
    </div>
  );
}
