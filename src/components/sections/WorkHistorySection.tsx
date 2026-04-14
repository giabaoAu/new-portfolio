"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="work" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Work History</h2>
          <p className="mt-3 max-w-2xl text-muted leading-7">
            A snapshot of roles where I’ve shipped real work and grown as an engineer. (Replace the
            placeholders with your exact company names/dates.)
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {roles.map((r) => (
              <motion.article
                key={`${r.company}-${r.title}`}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm ring-1 ring-transparent hover:ring-ring"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted">{r.dates}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">{r.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
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
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

