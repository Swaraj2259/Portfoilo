import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CursorGridWrapper from "@/components/CursorGridWrapper";

export default function HomePage() {
  return (
    <>
      <main className="relative bg-[var(--color-bg)] text-[var(--color-text)]">
        <CursorGridWrapper />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
