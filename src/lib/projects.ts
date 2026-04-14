export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  demo: {
    gifSrc: string;
    mp4Src?: string;
    alt: string;
  };
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "pixel-portfolio",
    title: "Interactive Pixel Portfolio",
    description: "A modern, interactive portfolio with a terminal UI and polished SaaS styling.",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    demo: {
      gifSrc: "/demos/pixel-portfolio.gif",
      alt: "Demo animation of the interactive portfolio.",
    },
    links: {
      github: "https://github.com/yourname/pixel-portfolio",
      live: "https://yourdomain.com",
    },
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Replace this with your next strongest project and a crisp one-liner.",
    tech: ["TypeScript", "API", "UI"],
    demo: {
      gifSrc: "/demos/project-two.gif",
      alt: "Demo animation for Project Two.",
    },
    links: {
      github: "https://github.com/yourname/project-two",
    },
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "Replace this with a meaningful problem statement and impact.",
    tech: ["React", "Performance", "UX"],
    demo: {
      gifSrc: "/demos/project-three.gif",
      alt: "Demo animation for Project Three.",
    },
    links: {
      live: "https://yourdomain.com/project-three",
    },
  },
];

