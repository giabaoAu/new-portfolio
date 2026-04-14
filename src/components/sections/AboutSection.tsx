"use client";

import { motion } from "framer-motion";
import { Code2, Dumbbell, Gamepad2, Music4 } from "lucide-react";

const hobbies = [
  { title: "Gaming", icon: Gamepad2, detail: "Strategic, story-driven, or co-op with friends." },
  { title: "Fitness", icon: Dumbbell, detail: "Consistency > intensity. Staying sharp." },
  { title: "Music", icon: Music4, detail: "Playlists for flow state and deep focus." },
  { title: "Building", icon: Code2, detail: "Tiny tools, UI polish, and performance wins." },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
            <p className="mt-3 text-muted leading-7">
              I’m a software engineer who enjoys turning fuzzy ideas into crisp products. I care about
              strong UX, code quality, and performance—because details compound.
            </p>
            <p className="mt-4 text-muted leading-7">
              Outside of work, I recharge with a mix of hobbies that keep me curious and consistent.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {hobbies.map((h) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm ring-1 ring-transparent hover:ring-ring"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-medium">{h.title}</p>
                      <p className="mt-1 text-sm text-muted">{h.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

