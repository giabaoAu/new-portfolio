"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
              <p className="mt-3 max-w-2xl text-muted leading-7">
                A few selected builds. Each one is chosen to show range: product sense, engineering,
                and execution quality.
              </p>
            </div>
            <a
              href="#terminal"
              className="hidden rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:ring-1 hover:ring-ring md:inline-flex"
            >
              Try the terminal →
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

