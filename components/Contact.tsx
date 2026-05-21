import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:your.email@example.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="section-label mb-3 text-sm uppercase tracking-wide text-[var(--color-muted)]">Contact</p>
        <h2 className="text-2xl font-semibold sm:text-3xl">Let&apos;s Connect</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--color-muted)]">
          Open to collaboration, learning opportunities, and impactful engineering conversations.
        </p>

        {/* ADD ANIMATION HERE */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded border border-[var(--color-border)] px-4 py-2 text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
