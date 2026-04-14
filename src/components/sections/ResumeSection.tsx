"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Resume</h2>
              <p className="mt-3 text-muted leading-7">
                View in a new tab or download the PDF. (Add your file at <span className="font-mono">public/resume.pdf</span>.)
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium shadow-sm transition hover:ring-1 hover:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

