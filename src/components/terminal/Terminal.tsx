"use client";

import * as React from "react";
import { projects } from "@/lib/projects";

type TerminalLine =
  | { id: string; kind: "system"; text: string }
  | { id: string; kind: "input"; text: string }
  | { id: string; kind: "output"; text: string };

const COMMANDS = ["help", "about", "projects", "contact", "clear"] as const;
type Command = (typeof COMMANDS)[number];

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

function normalize(cmd: string) {
  return cmd.trim().toLowerCase();
}

function isCommand(x: string): x is Command {
  return (COMMANDS as readonly string[]).includes(x);
}

function formatHelp() {
  return [
    "Commands:",
    "  help     → list commands",
    "  about    → quick intro",
    "  projects → list projects",
    "  contact  → contact info",
    "  clear    → clear terminal",
  ].join("\n");
}

function formatProjects() {
  return [
    "Projects:",
    ...projects.map((p) => {
      const links = [
        p.links.live ? `Live: ${p.links.live}` : null,
        p.links.github ? `GitHub: ${p.links.github}` : null,
      ]
        .filter(Boolean)
        .join(" • ");
      return `- ${p.title}${links ? `\n  ${links}` : ""}`;
    }),
  ].join("\n");
}

export function Terminal() {
  const [lines, setLines] = React.useState<TerminalLine[]>(() => [
    { id: uid(), kind: "system", text: "Welcome. Type `help` to see commands." },
  ]);
  const [value, setValue] = React.useState("");
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = React.useState<number | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines.length]);

  const run = React.useCallback((raw: string) => {
    const cmdRaw = raw.trim();
    const cmd = normalize(cmdRaw);

    if (!cmdRaw) return;

    setLines((prev) => [...prev, { id: uid(), kind: "input", text: cmdRaw }]);
    setHistory((prev) => [cmdRaw, ...prev].slice(0, 50));
    setHistoryIdx(null);

    if (cmd === "clear") {
      setLines([{ id: uid(), kind: "system", text: "Cleared. Type `help` to see commands." }]);
      return;
    }

    if (!isCommand(cmd)) {
      setLines((prev) => [
        ...prev,
        { id: uid(), kind: "output", text: `Unknown command: ${cmdRaw}\nType \`help\` for a list.` },
      ]);
      return;
    }

    switch (cmd) {
      case "help":
        setLines((prev) => [...prev, { id: uid(), kind: "output", text: formatHelp() }]);
        break;
      case "about":
        setLines((prev) => [
          ...prev,
          {
            id: uid(),
            kind: "output",
            text: [
              "Hi, I'm Bao.",
              "I like building crisp UIs with strong UX and solid engineering under the hood.",
              "This terminal is intentionally lightweight—fun, fast, and keyboard-friendly.",
            ].join("\n"),
          },
        ]);
        break;
      case "projects":
        setLines((prev) => [...prev, { id: uid(), kind: "output", text: formatProjects() }]);
        break;
      case "contact":
        setLines((prev) => [
          ...prev,
          {
            id: uid(),
            kind: "output",
            text: [
              "Contact:",
              "  Email: you@example.com",
              "  GitHub: https://github.com/yourname",
              "  LinkedIn: https://linkedin.com/in/yourname",
            ].join("\n"),
          },
        ]);
        break;
      default:
        break;
    }
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      run(value);
      setValue("");
      return;
    }

    if (e.key === "ArrowUp") {
      if (history.length === 0) return;
      e.preventDefault();
      const nextIdx = historyIdx === null ? 0 : Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(nextIdx);
      setValue(history[nextIdx] ?? "");
      return;
    }

    if (e.key === "ArrowDown") {
      if (history.length === 0) return;
      e.preventDefault();
      if (historyIdx === null) return;
      const nextIdx = historyIdx - 1;
      if (nextIdx < 0) {
        setHistoryIdx(null);
        setValue("");
      } else {
        setHistoryIdx(nextIdx);
        setValue(history[nextIdx] ?? "");
      }
    }
  };

  return (
    <div
      className="rounded-2xl border border-border bg-card shadow-sm ring-1 ring-transparent"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-xs text-muted">portfolio-terminal</span>
        </div>
        <div className="hidden text-xs text-muted sm:block">Type: help • about • projects • contact • clear</div>
      </div>

      <div ref={scrollRef} className="max-h-[340px] overflow-auto px-4 py-4 font-mono text-sm leading-6">
        {lines.map((l) => (
          <pre
            key={l.id}
            className={[
              "whitespace-pre-wrap break-words",
              l.kind === "input" ? "text-foreground" : "",
              l.kind === "system" ? "text-muted" : "",
              l.kind === "output" ? "text-foreground" : "",
            ].join(" ")}
          >
            {l.kind === "input" ? `$ ${l.text}` : l.text}
          </pre>
        ))}

        <div className="mt-3 flex items-center gap-2">
          <span className="select-none text-muted">$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            className="w-full bg-transparent outline-none placeholder:text-muted"
            placeholder="Type a command…"
            aria-label="Terminal command input"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
            inputMode="text"
          />
        </div>
      </div>
    </div>
  );
}

