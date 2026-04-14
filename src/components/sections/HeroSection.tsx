"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-[-140px] right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-emerald-400/10 via-sky-500/10 to-violet-500/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Bao Au
            <span className="block text-muted">Software Engineer</span>
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted sm:text-xl">
            I build fast, thoughtful web experiences—clean UI, solid engineering, and just enough
            personality to be memorable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground shadow-sm transition hover:ring-1 hover:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

