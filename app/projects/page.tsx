import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <section className="flex min-h-screen items-center justify-center px-4 py-24">
      <div className="h-8 w-8 animate-pulse rounded-full bg-white/10" aria-hidden />
      <span className="sr-only">Loading projects</span>
    </section>
  ),
});

export default function ProjectsPage() {
  return (
    <>
      <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <Projects />
      </main>
      <Footer />
    </>
  );
}
