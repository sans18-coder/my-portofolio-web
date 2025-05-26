import React from "react";
import { BookMarked } from "lucide-react"; // Icon for the title

// Placeholder data for certificates - Anda harus mengganti ini dengan data sertifikat TRAINING Anda
const certificateData = [
  {
    id: 1,
    title: "Sertifikat Pelatihan: Web Development Bootcamp", // Contoh Judul Training
    imageUrl:
      "https://placehold.co/600x400/3498DB/FFFFFF?text=Sertifikat+Training+1",
    issuer: "Coding Academy XYZ",
    date: "Januari 2023",
    description:
      "Pelatihan intensif pengembangan web full-stack selama 3 bulan.",
    link: "#", // Link ke sertifikat atau verifikasi
  },
  {
    id: 2,
    title: "Sertifikat Workshop: UI/UX Design Fundamentals", // Contoh Judul Training
    imageUrl:
      "https://placehold.co/600x400/2ECC71/FFFFFF?text=Sertifikat+Training+2",
    issuer: "Design Institute ABC",
    date: "Februari 2024",
    description:
      "Workshop dasar-dasar desain antarmuka dan pengalaman pengguna.",
    link: "#",
  },
  // Tambahkan data sertifikat TRAINING lainnya di sini
  // Contoh item lainnya:
  // {
  //   id: 3,
  //   title: "Sertifikat Pelatihan Lainnya",
  //   imageUrl:
  //     "https://placehold.co/600x400/E74C3C/FFFFFF?text=Sertifikat+Training+Lain",
  //   issuer: "Lembaga Pelatihan",
  //   date: "Maret 2024",
  //   description:
  //     "Deskripsi singkat mengenai pelatihan yang diikuti.",
  //   link: "#",
  // },
];

// Nama komponen diubah menjadi SertifikatTraining
const SertifikatTraining = () => {
  return (
    // Main container for the certificate training page
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title: Sertifikat Training */}
        <div className="w-full mt-10 mb-10 md:mb-12">
          <div className="flex items-center space-x-3">
            <BookMarked size={48} className="text-black dark:text-white" />
            {/* Judul diubah menjadi Sertifikat Training */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Sertifikat Training & Event
            </h1>
          </div>
        </div>

        {/* Grid container for certificate cards */}
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
            Belum ada sertifikat training yang ditambahkan.
          </p>
        )}
      </div>
    </div>
  );
};

// Export default diubah menjadi SertifikatTraining
export default SertifikatTraining;
