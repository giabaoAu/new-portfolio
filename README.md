## Interactive Software Engineer Portfolio

A modern, interactive personal portfolio designed to showcase software engineering work with a **clean SaaS-style UI**, thoughtful UX, and a **terminal simulation** for a memorable first impression.

### Highlights

- **Landing / Hero**: name + title, concise tagline, CTA buttons
- **Interactive Terminal**: command parsing with predefined commands + keyboard history (↑ / ↓)
- **Projects**: responsive grid, hover motion, tech stack pills, demo **GIF/MP4** previews, GitHub/Live links
- **Resume**: view in a new tab + download PDF
- **About + hobbies**: personality cards with subtle hover animations
- **Dark/Light mode**: toggle with localStorage persistence and smooth transitions

### Tech stack

- **Framework**: Next.js (App Router) + React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: lucide-react

---

## Getting Started

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### Build / start

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project structure

```text
src/
  app/
    layout.tsx        # Root layout (ThemeProvider, fonts)
    page.tsx          # Home page composition (sections)
    globals.css       # Theme tokens + Tailwind v4 dark variant
  components/
    NavBar.tsx
    Footer.tsx
    projects/
      ProjectCard.tsx
    sections/
      HeroSection.tsx
      ProjectsSection.tsx
      TerminalSection.tsx
      AboutSection.tsx
      ResumeSection.tsx
    terminal/
      Terminal.tsx    # Command parsing + history
    theme/
      ThemeProvider.tsx
      ThemeToggle.tsx
  lib/
    projects.ts       # Project metadata (cards + terminal projects command)
public/
  demos/              # Demo assets (GIF/MP4). See `public/demos/README.md`
  resume.pdf          # Your resume (add this file)
```

---

## Customization guide

### 1) Update your name, tagline, and CTAs

- **Hero section**: `src/components/sections/HeroSection.tsx`
  - Update the name/title, tagline, and the “Available…” badge text
  - The “Download Resume” button points to `public/resume.pdf`

### 2) Add your resume

Add your PDF here:

- `public/resume.pdf`

The resume buttons are in:

- `src/components/sections/ResumeSection.tsx`

### 3) Add your projects (cards + terminal)

Edit:

- `src/lib/projects.ts`

Each project supports:

- **title/description**
- **tech** list (pills)
- **demo** preview
  - `gifSrc` (required in current data)
  - `mp4Src` (optional, recommended for performance)
- **links**: `github` and/or `live`

### 4) Add demo GIFs / MP4s

Put demo files in:

- `public/demos/`

Then update paths in `src/lib/projects.ts` (examples already included):

- `/demos/pixel-portfolio.gif`
- `/demos/project-two.gif`
- `/demos/project-three.gif`

Performance tip: prefer **MP4** for large animations (smaller, faster) and keep GIFs short when possible.

### 5) Update terminal commands and outputs

The terminal implementation is here:

- `src/components/terminal/Terminal.tsx`

Supported commands:

- `help` → list commands
- `about` → about text
- `projects` → uses `src/lib/projects.ts`
- `contact` → contact info (edit the placeholders)
- `clear` → reset terminal output

Keyboard UX:

- **Enter** to run
- **↑ / ↓** for history navigation

### 6) Update navigation + links

- **Top navigation**: `src/components/NavBar.tsx`
- **Footer links**: `src/components/Footer.tsx`

---

## Dark / Light mode

Theme behavior:

- Uses a `.dark` class on `<html>` (class-based dark mode)
- Persists preference in localStorage under the key `pp-theme`
- Falls back to the OS preference on first visit

Files:

- `src/components/theme/ThemeProvider.tsx`
- `src/components/theme/ThemeToggle.tsx`
- `src/app/globals.css`

---

## Accessibility & UX notes

- **Keyboard support**: terminal input is focusable and supports history keys
- **Focus states**: buttons/links use visible focus rings
- **Semantic sections**: hero/projects/terminal/about/resume are separate sections with IDs for anchor navigation

---

## Performance notes

- Keep demo media optimized (MP4 preferred over heavy GIFs)
- Images/videos use lazy loading patterns where appropriate
- Next.js production build is optimized via `npm run build`

---

## Deployment

You can deploy to Vercel, Netlify, or any Node hosting that supports Next.js.

- Vercel is the simplest option for Next.js apps
- For production builds:
  - `npm run build`
  - `npm run start`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
