export type SkillCategory = {
  label: string;
  items: string[];
};

export const technologies: string[] = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "PHP",
  "KOTLIN",
  "DART",
  "REACT",
  "NEXT.JS",
  "NODE.JS",
  "LARAVEL",
  "TAILWIND CSS",
  "MYSQL",
  "POSTGRESQL",
  "FIREBASE",
  "GIT",
  "FIGMA",
];

export const expertise: string[] = [
  "MOBILE DEVELOPMENT",
  "WEB DEVELOPMENT",
  "FULL-STACK DEVELOPMENT",
  "FRONTEND ENGINEERING",
  "BACKEND ENGINEERING",
  "CROSS-PLATFORM APPS",
  "API INTEGRATION",
  "DATABASE ARCHITECTURE",
  "SOFTWARE ENGINEERING",
];

// Grouped for HR-friendly display
export const skillCategories: SkillCategory[] = [
  {
    label: "FRONTEND",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    label: "BACKEND",
    items: ["Laravel", "Node.js", "PHP", "REST API"],
  },
  {
    label: "MOBILE",
    items: ["Flutter (Dart)", "Kotlin"],
  },
  {
    label: "DATABASE",
    items: ["PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    label: "TOOLS",
    items: ["Git", "GitHub", "Vercel", "Figma", "WordPress"],
  },
];

