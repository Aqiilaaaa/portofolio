import sertif1 from "../assets/Sertif1.jpeg";
import sertif2 from "../assets/Sertif2.jpeg";
import sertif3 from "../assets/Sertif3.jpeg";

const certificates = [
  {
    id: 1,
    title: "Dashboard Analysis Competition",
    year: "2025",

    thumbnail: sertif1,

    images: [sertif1],

    description:
      "Meraih penghargaan pada Dashboard Analysis Competition.",
  },

  {
    id: 2,
    title: "Oracle Database Certification",
    year: "2024",

    thumbnail: sertif2,

    images: [
      sertif2,
      sertif3,
    ],

    description:
      "Menyelesaikan pelatihan Oracle Database Design & Database Programming.",
  },
];

export default certificates;