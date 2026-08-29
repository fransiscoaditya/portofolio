export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  type: "Work" | "Teaching" | "Academic" | "Program" | "Research" | "Organization";
  responsibilities: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  gpa: string;
  note?: string;
};

export type OrganizationItem = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type BookItem = {
  title: string;
  year: string;
  haki: string;
  url: string;
  description: string;
};

export const experiences: ExperienceItem[] = [
  {
    period: "Mar 2026 – Ags 2026",
    title: "Web Developer",
    organization: "Weatso",
    type: "Work",
    responsibilities: [
      "Membuat sistem web untuk mengelola operasional gudang percetakan secara terpusat.",
      "Membenahi dan mengoptimalkan website WordPress milik Semarang Realty.",
      "Membangun sistem reservasi dan pemantauan room untuk operasional warnet.",
    ],
  },
  {
    period: "Okt 2025 – Mar 2026",
    title: "Guru Pengajar (Game, Web & Mobile)",
    organization: "Timedoor Academy",
    type: "Teaching",
    responsibilities: [
      "Mengajar bidang Game Technology menggunakan media Roblox dan Construct.",
      "Mengajar dasar dan implementasi Web Development menggunakan HTML, CSS, dan JavaScript.",
      "Mengajar pengembangan aplikasi mobile cross-platform menggunakan React Native.",
    ],
  },
  {
    period: "Sept 2025",
    title: "Asisten Dosen Mata Kuliah Implementasi Basis Data",
    organization: "Fakultas Ilmu Komputer, UNIKA Soegijapranata",
    type: "Academic",
    responsibilities: [
      "Memberikan bimbingan dan solusi terkait struktur data dan desain sistem kepada mahasiswa.",
      "Membantu mahasiswa merancang fitur aplikasi yang efektif dan efisien sesuai kebutuhan nyata.",
      "Membantu mengajar bahasa PHP kepada mahasiswa untuk menyelesaikan proyek website client eksternal.",
    ],
  },
  {
    period: "Sept 2024 – Des 2024",
    title: "Alumni Program Bangkit Academy 2024",
    organization: "Google, Tokopedia, GoTo, Traveloka",
    type: "Program",
    responsibilities: [
      "Mempelajari arsitektur dan pengembangan aplikasi Android modern secara intensif.",
      "Membangun aplikasi mobile pendeteksi kanker dengan integrasi API dataset medis.",
      "Membangun Capstone Project: aplikasi kesehatan mobile dengan integrasi model Machine Learning untuk perhitungan kalori makanan real-time.",
    ],
  },
  {
    period: "Sept 2023 – Des 2023",
    title: "Pengembang Website Penilaian Guru",
    organization: "Sekolah Nusaputra",
    type: "Work",
    responsibilities: [
      "Merancang dan membangun antarmuka web sistem evaluasi dan penilaian kinerja guru.",
      "Menghubungkan dan mengintegrasikan database dengan tampilan dashboard analitik.",
    ],
  },
  {
    period: "Okt 2022 – Des 2022",
    title: "Tim Penelitian Metaverse Batik Lasem",
    organization: "Kedaireka — UNIKA Soegijapranata",
    type: "Research",
    responsibilities: [
      "Membangun ruang virtual 3D Metaverse menggunakan software Blender.",
      "Menghubungkan ruang virtual 3D Metaverse ke link pembayaran toko online dan perangkat VR.",
      "Menulis buku panduan pemanfaatan dan strategi branding digital untuk pengrajin Batik Lasem.",
    ],
  },
];

export const organizations: OrganizationItem[] = [
  {
    role: "Anggota SENAT Mahasiswa",
    organization: "SENAT Fakultas Ilmu Komputer, UNIKA Soegijapranata",
    period: "2022–2023 & 2024–2025 (2 Periode)",
    description:
      "Aktif berperan dalam perumusan kebijakan mahasiswa, koordinasi aspirasi antar angkatan, dan penyelenggaraan program kerja teknologi di lingkungan Fakultas Ilmu Komputer.",
  },
];

export const education: EducationItem[] = [
  {
    institution: "UNIKA Soegijapranata",
    degree: "S1",
    field: "Sistem Informasi",
    period: "2022 — 2026",
    gpa: "IPK 3.82 / 4.00",
    note: "Fokus Akademik: Rekayasa Perangkat Lunak, Sistem Basis Data, Mobile Development, Web Engineering",
  },
];

export const books: BookItem[] = [
  {
    title: "Public Relation Acara Pameran Metaverse",
    year: "2022",
    haki: "Hak Cipta (HAKI)",
    url: "https://www.google.co.id/books/edition/Public_Relation_Acara_Pameran_Metaverse/-YadEAAAQBAJ?hl=id&gbpv=1&dq=fransisco+Aditya+widiyanto&pg=PP3&printsec=frontcover",
    description: "Buku panduan strategi komunikasi, public relations, dan penyelenggaraan pameran interaktif di ruang metaverse.",
  },
  {
    title: "Koneksi Metaverse Ke E-Marketplace",
    year: "2022",
    haki: "Hak Cipta (HAKI)",
    url: "https://www.google.co.id/books/edition/Koneksi_Metaverse_Ke_E_Marketplace/DySdEAAAQBAJ?hl=id&gbpv=0",
    description: "Analisis arsitektur integrasi sistem transaksi e-commerce dan marketplace ke dalam platform virtual metaverse.",
  },
  {
    title: "Branding dan Promosi di Metaverse",
    year: "2022",
    haki: "Hak Cipta (HAKI)",
    url: "https://www.google.co.id/books/edition/Branding_dan_Promosi_di_Metaverse/uDudEAAAQBAJ?hl=id&gbpv=1&dq=fransisco+Aditya+widiyanto&pg=PA1&printsec=frontcover",
    description: "Strategi pembangunan identitas brand dan promosi digital interaktif untuk ekosistem dunia virtual.",
  },
  {
    title: "Pemrograman 8 Bahasa dengan ChatGPT",
    year: "2023",
    haki: "Hak Cipta (HAKI)",
    url: "https://www.google.co.id/books/edition/Pemrograman_8_Bahasa_dengan_ChatGPT/Qkm-EAAAQBAJ?hl=id&gbpv=1&dq=fransisco+Aditya+widiyanto&pg=PT1&printsec=frontcover",
    description: "Eksplorasi implementasi AI dan prompt engineering untuk akselerasi pemrograman lintas 8 bahasa secara efisien.",
  },
];
