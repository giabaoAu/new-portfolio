"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/terminal/Terminal";

export function TerminalSection() {
  return (
    <section id="terminal" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Interactive terminal</h2>
            <p className="mt-3 text-muted leading-7">
              A lightweight command interface for quick context. Keyboard-friendly, fast, and designed
              to be fun without overengineering.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="font-medium text-foreground">Try:</p>
                <p className="mt-1 font-mono">help • about • projects • contact • clear</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="font-medium text-foreground">Extras:</p>
                <p className="mt-1">History navigation with ↑ / ↓</p>
              </div>
            </div>
          </div>

          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}

