export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-muted sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Bao Au</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-foreground" href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            className="hover:text-foreground"
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="hover:text-foreground" href="mailto:you@example.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

