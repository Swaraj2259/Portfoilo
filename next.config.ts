import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@react-three/fiber", "@react-three/drei", "three"],
  },
};

export default nextConfig;
