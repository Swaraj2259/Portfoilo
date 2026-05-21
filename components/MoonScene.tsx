"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { useGLTF } from "@react-three/drei/core/Gltf";
import { Suspense } from "react";

function Moon() {
  const gltf = useGLTF("/moon.glb");
  return <primitive object={gltf.scene} scale={1.6} />;
}

useGLTF.preload("/moon.glb");

export default function MoonScene() {
  return (
    <Canvas
      className="touch-none"
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, powerPreference: "low-power" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Suspense fallback={null}>
        <Moon />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}
