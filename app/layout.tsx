import type { Metadata } from "next";
import "./globals.css";
import ScrollController from "@/components/ScrollController";
import Navbar from "@/components/Navbar";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Swaraj Wattamwar | Portfolio",
  description:
    "Portfolio of Swaraj Wattamwar, B.Tech Computer Science Engineering Student and Aspiring AI/ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Global font import slot */}
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="global-frame" aria-hidden="true" />
          <ScrollController />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
