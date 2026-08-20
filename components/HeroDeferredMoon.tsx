"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { cancelIdle, scheduleIdle } from "@/lib/scheduleIdle";

const MoonModel = dynamic(() => import("./MoonModel"), {
  ssr: false,
  loading: () => (
    <div className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center rounded-full bg-black/5 dark:bg-white/5 animate-pulse lg:h-[600px] lg:max-w-full" />
  ),
});

export default function HeroDeferredMoon() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = scheduleIdle(() => setReady(true), 1500);
    return () => cancelIdle(id);
  }, []);

  if (!ready) {
    return (
      <div className="relative mx-auto flex aspect-square w-full max-w-[500px] items-center justify-center rounded-full bg-black/5 dark:bg-white/5 animate-pulse lg:h-[600px] lg:max-w-full" />
    );
  }

  return <MoonModel />;
}
