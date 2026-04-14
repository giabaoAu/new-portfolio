"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { motion } from "framer-motion";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#terminal", label: "Terminal" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
] as const;

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Bao Au
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ y: -1 }}
                className="rounded-full px-3 py-2 text-sm text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

