export const siteConfig = {
  name: "Aditya",
  fullName: "Fransisco Aditya Widiyanto",
  tagline: "Web & Mobile Developer",
  tagline2: "Software Developer",
  role: "Web & Mobile Developer",
  description:
    "Mahasiswa Sistem Informasi UNIKA Soegijapranata dengan spesialisasi pengembangan web dan aplikasi mobile. Berpengalaman di ekosistem JavaScript, React/Next.js, Flutter/Kotlin, dan PHP/Laravel. Alumni Bangkit Academy 2024.",
  shortBio:
    "Saya merancang dan membangun aplikasi web, mobile, serta sistem digital yang andal dan berkinerja tinggi.",
  positioning:
    "I design and build web applications and mobile apps.",
  year: "2026",

  // Availability
  location: "Kota Semarang, Indonesia",
  availability: ["Full-time"] as string[],
  availableForWork: true,

  // Currently
  currently: {
    building: "LokalSaaS — Multi-tenant POS & Mobile Ecosystem",
    learning: "System Architecture · Cross-Platform Mobile",
    exploring: "AI-assisted Development · Cloud Infrastructure",
  },

  // Contact
  email: "fransiscowidiyanto@gmail.com",
  github: "https://github.com/fransiscoaditya",
  linkedin: "https://www.linkedin.com/in/fransisco-aditya-82928a267/",
  instagram: "https://www.instagram.com/adit_ya_kan/",
  twitter: "",

  // Resume PDF
  resumeUrl: "/CVAdit.pdf",

  // Profile photo
  photo: "/images/PhotoAdit.png",

  // SEO
  url: "https://fransiscoaditya.dev",
  ogImage: "/social/og-image.webp",

  // Analytics — leave empty to disable
  gaId: "",
} as const;

export type SiteConfig = typeof siteConfig;

