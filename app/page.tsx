import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
