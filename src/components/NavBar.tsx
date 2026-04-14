"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#terminal", label: "Terminal" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
] as const;

export function NavBar() {
  const { scrollY } = useScroll();
  // Transition the navbar into a floating "pill" as we scroll.
  const inset = useTransform(scrollY, [0, 120], [0, 12]);
  const radius = useTransform(scrollY, [0, 120], [0, 999]);
  const blurPx = useTransform(scrollY, [0, 120], [0, 12]);
  const shadowOpacity = useTransform(scrollY, [0, 120], [0, 0.12]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 0.35]);

  const boxShadow = useMotionTemplate`0 10px 30px rgba(0,0,0,${shadowOpacity})`;
  const borderColorLight = useMotionTemplate`rgba(0,0,0,${borderOpacity})`;
  const borderColorDark = useMotionTemplate`rgba(255,255,255,${borderOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.header
      className="sticky top-0 z-40"
      style={{
        paddingTop: inset,
        paddingLeft: inset,
        paddingRight: inset,
      }}
    >
      <motion.div
        className="mx-auto w-full max-w-6xl overflow-hidden"
        style={{
          borderRadius: radius,
          boxShadow,
        }}
      >
        <motion.div
          className="relative flex w-full items-center justify-between bg-background/70 px-4 py-3 backdrop-blur sm:px-6"
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: borderColorLight,
            backdropFilter,
          }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{ borderRadius: radius, border: "1px solid", borderColor: borderColorDark }}
          />
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
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

