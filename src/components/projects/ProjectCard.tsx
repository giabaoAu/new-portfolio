"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-transparent hover:ring-ring"
    >
      <div className="aspect-[16/9] overflow-hidden bg-black/5 dark:bg-white/5">
        {/* Prefer MP4 for perf, but GIF works as a drop-in. */}
        {project.demo.mp4Src ? (
          <video
            className="h-full w-full object-cover"
            src={project.demo.mp4Src}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            src={project.demo.gifSrc}
            alt={project.demo.alt}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted">{project.description}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Open GitHub repo for ${project.title}`}
              >
                <Code2 className="h-4 w-4" />
              </a>
            ) : null}
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Open live demo for ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

