import dashboard from "../assets/dashboard.jpeg";

import klinik1 from "../assets/klinik1.jpeg";
import klinik2 from "../assets/klinik2.jpeg";
import klinik3 from "../assets/klinik3.jpeg";

import restock1 from "../assets/Restock1.jpeg";
import restock2 from "../assets/Restock2.jpeg";
import restock3 from "../assets/Restock3.jpeg";

import silabad1 from "../assets/silabat1.png";
import silabad2 from "../assets/silabat2.png";
import silabad3 from "../assets/silabat3.png";

const projects = [
  {
    id: 1,
    title: "Dashboard Analisis Finansial Gen Z",
    thumbnail: dashboard,
    images: [dashboard],
    tech: ["Looker Studio", "Google Sheets", "Data Analytics"],
    description:
      "Dashboard interaktif untuk menganalisis perilaku finansial Gen Z Indonesia melalui visualisasi data dan insight.",
    year: "2025",
    category: "Dashboard",
  },

  {
    id: 2,
    title: "Sistem Informasi Klinik",
    thumbnail: klinik1,
    images: [klinik1, klinik2, klinik3],
    tech: ["React", "MockAPI", "JavaScript"],
    description:
      "Aplikasi sistem informasi klinik dengan fitur pengelolaan pasien, reservasi, dan layanan klinik.",
    year: "2025",
    category: "Web Application",
  },

  {
    id: 3,
    title: "Silabat",
    thumbnail: silabad1,
    images: [silabad1, silabad2, silabad3],
    tech: ["Flutter", "Firebase", "Dart"],
    description:
      "Aplikasi reservasi lapangan badminton dengan fitur booking lapangan, turnamen, dan pengelolaan data pengguna.",
    year: "2025",
    category: "Mobile Application",
  },

  {
    id: 4,
    title: "Aplikasi Restock Barang",
    thumbnail: restock1,
    images: [restock1, restock2, restock3],
    tech: ["React", "PHP", "MySQL"],
    description:
      "Aplikasi untuk mengelola stok barang dan memantau proses restock secara lebih efisien.",
    year: "2025",
    category: "Inventory System",
  },
];

export default projects;