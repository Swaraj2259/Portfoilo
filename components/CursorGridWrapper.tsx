"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import CursorGrid from "./CursorGrid";

export default function CursorGridWrapper() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Use a subtle color based on the theme
  const color = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <CursorGrid
        cellSize={45}
        color={color}
        radius={140}
        falloff="sharp"
        holdTime={400}
        fadeDuration={750}
        lineWidth={1.5}
        maxOpacity={1}
        fillOpacity={0.06}
        gridOpacity={0.02}
        cellRadius={9}
        clickPulse={true}
        pulseSpeed={750}
      />
    </div>
  );
}
