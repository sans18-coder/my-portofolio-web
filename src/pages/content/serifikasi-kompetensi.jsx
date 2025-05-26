import React from "react";
import { BookMarked } from "lucide-react"; // Icon for the title

// Placeholder data for certificates - replace with your actual data
const certificateData = [
  {
    id: 1,
    title: "Sertifikat Dicoding: Belajar Dasar Pemrograman Web",
    imageUrl:
      "https://placehold.co/600x400/3498DB/FFFFFF?text=Sertifikat+Web+Dasar",
    issuer: "Dicoding Indonesia",
    date: "Januari 2023",
    description:
      "Mempelajari HTML, CSS, dan JavaScript dasar untuk membangun website statis.",
    link: "#", // Link to certificate or verification
  },
  {
    id: 2,
    title: "Sertifikat Coursera: Python for Everybody",
    imageUrl:
      "https://placehold.co/600x400/2ECC71/FFFFFF?text=Sertifikat+Python",
    issuer: "University of Michigan (Coursera)",
    date: "Maret 2023",
    description: "Pengenalan fundamental pemrograman menggunakan Python.",
    link: "#",
  },
  {
    id: 3,
    title: "Sertifikat Bangkit: Machine Learning Path",
    imageUrl:
      "https://placehold.co/600x400/E74C3C/FFFFFF?text=Sertifikat+Bangkit+ML",
    issuer: "Bangkit Academy (Google, GoTo, Traveloka)",
    date: "Juni 2024",
    description:
      "Program intensif machine learning meliputi teori dan proyek terapan.",
    link: "#",
  },
  {
    id: 4,
    title: "Sertifikat Digitalent: Junior Web Developer",
    imageUrl: "https://placehold.co/600x400/F39C12/FFFFFF?text=Sertifikat+JWD",
    issuer: "KOMINFO (Digitalent Scholarship)",
    date: "Agustus 2023",
    description:
      "Pelatihan pengembangan web untuk menjadi Junior Web Developer.",
    link: "#",
  },
  {
    id: 5,
    title: "Sertifikat Udemy: React - The Complete Guide",
    imageUrl:
      "https://placehold.co/600x400/9B59B6/FFFFFF?text=Sertifikat+React",
    issuer: "Academind by Maximilian Schwarzmüller (Udemy)",
    date: "November 2023",
    description: "Pembelajaran React.js dari dasar hingga konsep lanjutan.",
    link: "#",
  },
  {
    id: 6,
    title: "Sertifikat Progate: Command Line",
    imageUrl: "https://placehold.co/600x400/1ABC9C/FFFFFF?text=Sertifikat+CLI",
    issuer: "Progate",
    date: "Februari 2023",
    description:
      "Dasar-dasar penggunaan command line interface untuk developer.",
    link: "#",
  },
  {
    id: 7,
    title: "Sertifikat Sololearn: SQL Fundamentals",
    imageUrl: "https://placehold.co/600x400/E67E22/FFFFFF?text=Sertifikat+SQL",
    issuer: "Sololearn",
    date: "April 2023",
    description: "Mempelajari dasar-dasar Structured Query Language (SQL).",
    link: "#",
  },
  {
    id: 8,
    title: "Sertifikat FreeCodeCamp: Responsive Web Design",
    imageUrl: "https://placehold.co/600x400/34495E/FFFFFF?text=Sertifikat+RWD",
    issuer: "freeCodeCamp",
    date: "Oktober 2022",
    description: "Membangun website yang responsif menggunakan HTML dan CSS.",
    link: "#",
  },
  // Add more certificate objects here
];

const SertifikatKompetensi = () => {
  return (
    // Main container for the certificate course page
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Using max-w-7xl for a slightly wider content area if needed */}
        {/* Section Title: Certificate Course */}
        <div className="w-full mt-10 mb-10 md:mb-12">
          <div className="flex items-center space-x-3">
            <BookMarked size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Competency Certificates
            </h1>
          </div>
        </div>
        {/* Grid container for certificate cards */}
        {/* On small screens (default): 1 column */}
        {/* On medium screens (sm): 2 columns */}
        {/* On large screens (lg): 3 columns */}
        {/* This will result in 2 or 3 images per row on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificateData.map((sertifikat) => (
            // Card for each certificate
            <a
              key={sertifikat.id}
              href={sertifikat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group overflow-hidden"
            >
              <div className="w-full h-48 sm:h-56 overflow-hidden">
                <img
                  src={sertifikat.imageUrl}
                  alt={`Sertifikat ${sertifikat.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src =
                      "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Gagal+Muat";
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {sertifikat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Diterbitkan oleh: {sertifikat.issuer}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Tanggal: {sertifikat.date}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {sertifikat.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        {certificateData.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            Belum ada sertifikat kursus yang ditambahkan.
          </p>
        )}
      </div>
    </div>
  );
};

export default SertifikatKompetensi;
