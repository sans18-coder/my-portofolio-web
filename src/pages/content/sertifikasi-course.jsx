import React, { useState } from "react";
import { BookMarked, X } from "lucide-react"; // Icon for the title and close button


// Placeholder data for certificates - replace with your actual data
const certificateData = [
  {
    id: 1,
    title: "Sertifikat Dicoding: Belajar Dasar Pemrograman Web",
    imageUrl:
      "https://placehold.co/600x400/3498DB/FFFFFF?text=Sertifikat+Web+Dasar",
    // issuer: "Dicoding Indonesia", // Removed
    // date: "Januari 2023", // Removed
    // description: "Mempelajari HTML, CSS, dan JavaScript dasar untuk membangun website statis.", // Removed
    link: "https://placehold.co/1200x800/3498DB/FFFFFF?text=Sertifikat+Web+Dasar+Besar", // Link to actual certificate or larger image
  },
  {
    id: 2,
    title: "Sertifikat Coursera: Python for Everybody",
    imageUrl:
      "https://placehold.co/600x400/2ECC71/FFFFFF?text=Sertifikat+Python",
    link: "https://placehold.co/1200x800/2ECC71/FFFFFF?text=Sertifikat+Python+Besar",
  },
  {
    id: 3,
    title: "Sertifikat Bangkit: Machine Learning Path",
    imageUrl:
      "https://placehold.co/600x400/E74C3C/FFFFFF?text=Sertifikat+Bangkit+ML",
    link: "https://placehold.co/1200x800/E74C3C/FFFFFF?text=Sertifikat+Bangkit+ML+Besar",
  },
  {
    id: 4,
    title: "Sertifikat Digitalent: Junior Web Developer",
    imageUrl: "https://placehold.co/600x400/F39C12/FFFFFF?text=Sertifikat+JWD",
    link: "https://placehold.co/1200x800/F39C12/FFFFFF?text=Sertifikat+JWD+Besar",
  },
  {
    id: 5,
    title: "Sertifikat Udemy: React - The Complete Guide",
    imageUrl:
      "https://placehold.co/600x400/9B59B6/FFFFFF?text=Sertifikat+React",
    link: "https://placehold.co/1200x800/9B59B6/FFFFFF?text=Sertifikat+React+Besar",
  },
  {
    id: 6,
    title: "Sertifikat Progate: Command Line",
    imageUrl: "https://placehold.co/600x400/1ABC9C/FFFFFF?text=Sertifikat+CLI",
    link: "https://placehold.co/1200x800/1ABC9C/FFFFFF?text=Sertifikat+CLI+Besar",
  },
  // Add more certificate objects here, ensure 'link' points to the large image or actual certificate URL
];

const SertifikatCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState("");

  const openModal = (imageUrl, title) => {
    setSelectedImage(imageUrl);
    setSelectedImageTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedImageTitle("");
  };

  return (
    // Main container for the certificate course page
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title: Certificate Course */}
        <div className="w-full mt-10 mb-10 md:mb-12">
          <div className="flex items-center space-x-3">
            <BookMarked size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Certificate Course
            </h1>
          </div>
        </div>

        {/* Grid container for certificate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificateData.map((sertifikat) => (
            // Card for each certificate - now a div that triggers modal
            <div
              key={sertifikat.id}
              onClick={() =>
                openModal(
                  sertifikat.link || sertifikat.imageUrl,
                  sertifikat.title
                )
              } // Use link for larger image if available
              className="cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group overflow-hidden aspect-[3/2]" // aspect-w-3 aspect-h-2 or similar for consistent aspect ratio
            >
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
              {/* Optionally, display title on hover or subtly on the card */}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {sertifikat.title}
              </div>
            </div>
          ))}
        </div>
        {certificateData.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            Belum ada sertifikat kursus yang ditambahkan.
          </p>
        )}
      </div>

      {/* Modal for displaying larger image */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeModal} // Close modal when clicking on the backdrop
        >
          <div
            className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl max-w-3xl max-h-[90vh] w-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal content
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 z-10 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors"
              aria-label="Tutup modal"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white text-center">
              {selectedImageTitle}
            </h3>
            <div className="overflow-auto max-h-[calc(90vh-100px)]">
              {" "}
              {/* Adjust max-h for image container */}
              <img
                src={selectedImage}
                alt={`Sertifikat ${selectedImageTitle} - Tampilan Besar`}
                className="w-auto h-auto max-w-full max-h-full mx-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SertifikatCourse;
