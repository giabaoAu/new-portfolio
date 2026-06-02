"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

type Role = {
  title: string;
  company: string;
  location?: string;
  dates: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    title: "Web Developer",
    company: "Your Company",
    location: "Remote / City",
    dates: "2025 — Present",
    highlights: [
      "Build and ship responsive web features with a focus on UX and performance.",
      "Collaborate with designers/PMs to translate requirements into polished UI.",
      "Own improvements: refactors, accessibility fixes, and component library patterns.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Your Company",
    location: "City",
    dates: "2024 — 2025",
    highlights: [
      "Delivered production features end-to-end (spec → implementation → QA → release).",
      "Improved reliability with better error handling and clearer UI states.",
      "Learned team workflows: code reviews, testing, and iterative delivery.",
    ],
  },
];

export function WorkHistorySection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="work" ref={sectionRef} className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Work Experience</h2>
          <p className="mt-3 max-w-2xl text-muted leading-7">
            A snapshot of roles where I’ve shipped real work and grown as an engineer. (Replace the
            placeholders with your exact company names/dates.)
          </p>

          <div className="relative mt-10">
            {/* Timeline rail */}
            <div className="pointer-events-none absolute inset-y-0 left-4 w-px bg-border/70" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-4 w-px origin-top bg-gradient-to-b from-foreground/70 via-foreground/40 to-transparent"
              style={{ scaleY: lineScaleY }}
            />

            <div className="space-y-8">
              {roles.map((r, idx) => (
                <motion.article
                  key={`${r.company}-${r.title}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.04 }}
                  className="relative pl-14"
                >
                  {/* Node */}
                  <div className="absolute left-4 top-7 -translate-x-1/2">
                    <div className="h-3.5 w-3.5 rounded-full border border-border bg-background shadow-sm" />
                    <div className="absolute inset-0 -z-10 h-3.5 w-3.5 rounded-full bg-foreground/10 blur-[6px]" />
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <p className="text-sm text-muted">{r.dates}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">{r.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                      <span className="inline-flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {r.company}
                      </span>
                      {r.location ? (
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {r.location}
                        </span>
                      ) : null}
                    </div>

                    <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                      {r.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

