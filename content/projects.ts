export type ProjectType = "WEB" | "MOBILE" | "GAME" | "SYSTEM";
export type ProjectStatus = "LIVE" | "IN DEVELOPMENT" | "COMPLETED" | "ARCHIVED";
export type ProjectContext = "Personal" | "Client" | "Bangkit Capstone" | "Academic" | "Enterprise";

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  year: string;
  category: string;
  type: ProjectType;              // For filter: WEB | MOBILE | GAME | SYSTEM
  status: ProjectStatus;          // LIVE | IN DEVELOPMENT | COMPLETED | ARCHIVED
  projectContext: ProjectContext;  // Personal | Client | Bangkit Capstone | Academic | Enterprise
  role: string[];
  description: string;
  shortDescription?: string;      // 1-line summary shown on list
  challenge?: string;
  approach?: string;
  result?: string;
  impact?: string;
  technologies: string[];
  image: string;
  thumbnail?: string;
  gallery?: string[];
  featured?: boolean;
  casestudy?: boolean;
  href?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  color?: string;
};

export const projects: Project[] = [
  {
    slug: "rats-game",
    title: "RATS GAME",
    shortTitle: "Rats Game",
    year: "2025",
    category: "GAME WEB",
    type: "GAME",
    status: "LIVE",
    projectContext: "Personal",
    role: ["FULL-STACK DEVELOPER"],
    shortDescription: "Browser-based game with real-time admin dashboard and leaderboard system.",
    description:
      "Rats Game adalah game berbasis web yang dibangun dengan antarmuka yang menarik dan sistem manajemen admin tersendiri. Game ini menggabungkan mekanik gameplay yang adiktif dengan backend yang robust untuk mengelola sesi pemain dan leaderboard.",
    challenge:
      "Membangun sistem game real-time di browser yang responsive dan bisa diakses dari berbagai perangkat tanpa instalasi tambahan.",
    approach:
      "Menggunakan arsitektur web modern dengan pengelolaan state yang efisien untuk memastikan pengalaman bermain yang mulus dan responsif.",
    result:
      "Game yang dapat dimainkan langsung di browser dengan sistem admin untuk memantau aktivitas pemain dan statistik permainan.",
    technologies: ["JavaScript", "Node.js", "MySQL", "Bootstrap"],
    image: "/projects/rats-game/cover.png",
    thumbnail: "/projects/rats-game/cover.png",
    gallery: ["/projects/rats-game/gallery-01.png"],
    featured: true,
    casestudy: false,
    impact: "Game web yang bisa dimainkan langsung di browser, dengan sistem admin untuk memantau aktivitas dan statistik pemain secara real-time.",
    href: "https://ratsgame.pomhub.my.id/",
    githubUrl: "https://github.com/fransiscoaditya",
    color: "#1a1a1a",
  },
  {
    slug: "first-job-guide",
    title: "FIRST JOB GUIDE",
    shortTitle: "First Job Guide",
    year: "2024",
    category: "LEARNING PLATFORM",
    type: "WEB",
    status: "LIVE",
    projectContext: "Client",
    role: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
    shortDescription: "Interactive platform guiding fresh graduates through their first job search.",
    description:
      "First Job Guide adalah platform pembelajaran interaktif yang memandu fresh graduate dalam mempersiapkan diri memasuki dunia kerja pertama mereka. Dilengkapi dengan modul belajar, kuis interaktif, dan panduan karir yang terstruktur.",
    challenge:
      "Membuat konten yang kompleks menjadi mudah dicerna oleh pengguna yang belum berpengalaman di dunia kerja, dengan UX yang intuitif.",
    approach:
      "Desain berbasis gamifikasi dengan sistem kuis dan progress tracking untuk menjaga motivasi pengguna sepanjang perjalanan belajar.",
    result:
      "Platform yang membantu fresh graduate memahami langkah-langkah konkret dalam mencari dan mendapatkan pekerjaan pertama mereka.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    image: "/projects/first-job-guide/cover.png",
    thumbnail: "/projects/first-job-guide/cover.png",
    gallery: ["/projects/first-job-guide/gallery-01.png"],
    featured: true,
    casestudy: true,
    impact: "Platform interaktif yang memandu fresh graduate memahami langkah konkret mencari kerja pertama, dilengkapi modul dan kuis gamifikasi.",
    href: "https://personality-test-three-rouge.vercel.app/",
    isPrivate: false,
    color: "#0a0a0a",
  },
  {
    slug: "desain-interior",
    title: "DESAIN INTERIOR",
    shortTitle: "Desain Interior",
    year: "2024",
    category: "COMPANY PROFILE",
    type: "WEB",
    status: "LIVE",
    projectContext: "Client",
    role: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
    shortDescription: "Elegant company profile for an interior design studio with portfolio showcase.",
    description:
      "Website company profile untuk jasa desain interior yang menampilkan portofolio, layanan, dan informasi kontak secara elegan. Dirancang dengan estetika yang selaras dengan industri desain interior yang mengutamakan keindahan visual.",
    challenge:
      "Menciptakan website yang secara visual mampu merepresentasikan kualitas dan estetika yang dijual oleh jasa desain interior itu sendiri.",
    approach:
      "Mengutamakan presentasi visual yang kuat dengan galeri portofolio yang bersih, tipografi yang elegan, dan navigasi yang intuitif.",
    result:
      "Website company profile yang profesional dan mengundang calon klien untuk menghubungi dan menggunakan jasa desain interior.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: "/projects/desain-interior/cover.png",
    thumbnail: "/projects/desain-interior/cover.png",
    gallery: ["/projects/desain-interior/gallery-01.png"],
    featured: true,
    casestudy: false,
    impact: "Website company profile profesional yang mengundang calon klien melalui presentasi visual portofolio yang kuat dan navigasi intuitif.",
    href: "https://desain-interior.vercel.app/",
    isPrivate: false,
    color: "#1c1c1c",
  },
  {
    slug: "colabz",
    title: "CO-LABZ",
    shortTitle: "Co-Labz",
    year: "2025",
    category: "COLLABORATION PLATFORM",
    type: "WEB",
    status: "LIVE",
    projectContext: "Personal",
    role: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
    shortDescription: "Distributed team collaboration platform built for performance on slow connections.",
    description:
      "Co-Labz adalah platform kolaborasi yang dirancang untuk tim yang terdistribusi. Menggabungkan manajemen proyek, berbagi file, dan komunikasi dalam satu antarmuka yang terintegrasi untuk meningkatkan produktivitas tim.",
    challenge:
      "Membangun pengalaman kolaborasi real-time yang tidak mengorbankan performa pada koneksi internet yang terbatas.",
    approach:
      "Pola UI optimistik, caching agresif, dan pendekatan progressive enhancement yang tetap berfungsi dengan baik meski koneksi lambat.",
    result:
      "Platform yang cepat dan andal yang benar-benar disukai tim untuk digunakan sehari-hari dalam berkolaborasi.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    image: "/projects/colabz/cover.png",
    thumbnail: "/projects/colabz/cover.png",
    gallery: ["/projects/colabz/gallery-01.png"],
    featured: true,
    casestudy: false,
    impact: "Platform kolaborasi yang cepat dan andal untuk tim terdistribusi, dengan pola UI optimistik yang tetap berfungsi di koneksi lambat sekalipun.",
    href: "https://co-labz-web.vercel.app/",
    isPrivate: false,
    color: "#0f1012",
  },
  {
    slug: "ud-djaya-wms",
    title: "UD DJAYA WMS",
    shortTitle: "UD Djaya",
    year: "2024",
    category: "WAREHOUSE MANAGEMENT",
    type: "SYSTEM",
    status: "COMPLETED",
    projectContext: "Client",
    role: ["FULL-STACK DEVELOPER", "SYSTEM ARCHITECT"],
    shortDescription: "Enterprise warehouse management system replacing manual spreadsheet workflows.",
    description:
      "Sistem manajemen gudang yang dibangun untuk menyederhanakan inventaris, pengiriman, dan operasional UD Djaya. Dirancang untuk lingkungan operasional nyata dengan volume data tinggi dan beberapa peran pengguna.",
    challenge:
      "Mengganti proses manual berbasis spreadsheet dengan sistem digital yang bisa langsung diadopsi oleh staf gudang yang tidak terbiasa dengan teknologi.",
    approach:
      "Desain antarmuka berbasis peran dengan alur kerja yang jelas. Mengutamakan kecepatan dan kejelasan daripada banyaknya fitur.",
    result:
      "Pengurangan signifikan dalam entri data manual dan peningkatan akurasi inventaris di seluruh gudang.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    image: "/projects/ud-djaya/cover.png",
    thumbnail: "/projects/ud-djaya/cover.png",
    gallery: ["/projects/ud-djaya/gallery-01.png"],
    featured: true,
    casestudy: true,
    impact: "Mengganti proses manual berbasis spreadsheet dengan sistem digital, menghasilkan pengurangan signifikan entri data manual dan peningkatan akurasi inventaris.",
    isPrivate: true,
    color: "#1a1a1a",
  },
  {
    slug: "aditya-elektrik-jaya",
    title: "ADITYA ELEKTRIK JAYA",
    shortTitle: "Aditya Elektrik",
    year: "2024",
    category: "COMPANY PROFILE",
    type: "WEB",
    status: "LIVE",
    projectContext: "Client",
    role: ["FRONTEND DEVELOPER", "WEB DEVELOPER"],
    shortDescription: "Professional company profile website for an electrical supply store to attract customers and build trust.",
    description:
      "Aditya Elektrik Jaya adalah website company profile untuk toko kebutuhan listrik yang dirancang untuk menarik pelanggan baru dan membangun kepercayaan secara digital. Website ini menampilkan produk, layanan, dan informasi kontak dengan tampilan yang bersih dan profesional agar pelanggan dapat dengan mudah memahami apa yang ditawarkan toko.",
    challenge:
      "Menciptakan kehadiran digital yang profesional untuk toko listrik tradisional agar dapat bersaing dan menjangkau pelanggan yang semakin terbiasa mencari informasi secara online.",
    approach:
      "Desain yang bersih dan informatif dengan fokus pada kemudahan navigasi, presentasi produk yang jelas, dan informasi kontak yang mudah diakses — sehingga pelanggan dapat langsung menghubungi toko.",
    result:
      "Website company profile yang profesional dan mudah diakses, membantu toko listrik membangun kepercayaan pelanggan dan meningkatkan jangkauan pasar secara digital.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: "/projects/AEJ/cover.png",
    thumbnail: "/projects/AEJ/cover.png",
    gallery: ["/projects/AEJ/galery-01.png"],
    featured: true,
    casestudy: false,
    impact: "Website profesional yang membantu toko listrik menjangkau pelanggan baru secara online dan membangun kepercayaan melalui tampilan yang bersih dan informatif.",
    href: "https://aditya-elektrik-jaya.vercel.app/",
    isPrivate: false,
    color: "#0d1117",
  },
  {
    slug: "andro-app",
    title: "CALORIE SCANNER",
    shortTitle: "Calorie Scanner",
    year: "2024",
    category: "MOBILE APPLICATION",
    type: "MOBILE",
    status: "COMPLETED",
    projectContext: "Bangkit Capstone",
    role: ["ANDROID DEVELOPER", "ML INTEGRATION"],
    shortDescription: "Android app for food calorie scanning using machine learning image recognition.",
    description:
      "Aplikasi Android untuk pemindaian kalori makanan menggunakan machine learning. Dikembangkan sebagai Capstone Project di Bangkit Academy 2024 (Google, Tokopedia, Goto, Traveloka). Mengintegrasikan model ML untuk klasifikasi makanan dari kamera secara real-time.",
    challenge:
      "Mengintegrasikan model machine learning untuk klasifikasi gambar makanan yang akurat dalam aplikasi mobile Android dengan latensi rendah.",
    approach:
      "Menggunakan TensorFlow Lite untuk inferensi on-device, dikombinasikan dengan API backend untuk memperkaya data nutrisi dari hasil klasifikasi.",
    result:
      "Aplikasi yang mampu mengenali jenis makanan dari foto dan memberikan estimasi kalori secara instan, membantu pengguna memantau asupan harian.",
    technologies: ["Kotlin", "Android", "TensorFlow Lite", "REST API", "Retrofit"],
    image: "/projects/AndroApp/ScannerKalori.webp",
    thumbnail: "/projects/AndroApp/ScannerKalori.webp",
    gallery: ["/projects/AndroApp/ScannerKalori.webp"],
    featured: true,
    casestudy: false,
    impact: "Capstone project Bangkit Academy 2024 — aplikasi ML mobile yang memproses klasifikasi makanan secara real-time untuk membantu pengguna memantau kalori harian.",
    isPrivate: false,
    color: "#111111",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByType(type: ProjectType | "ALL"): Project[] {
  if (type === "ALL") return projects.filter((p) => p.featured);
  return projects.filter((p) => p.type === type && p.featured);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

