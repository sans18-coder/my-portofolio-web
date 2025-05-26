import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Import Link
import Profile from "./content/profile";
import Skills from "./content/skills";
import SertifikatKompetensi from "./content/serifikasi-kompetensi";
import SertifikatCourse from "./content/sertifikasi-course";
import SertifikatTraining from "./content/sertifikasi-training";

import Project from "./content/project";
import Contact from "./content/contact";

const Portofolio = () => {
  const { content } = useParams(); // content akan berisi nilai dari URL, misal: "profile", "skills"

  const [isSertifikatOpen, setIsSertifikatOpen] = useState(false);
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

  const toggleSertifikatDropdown = () => {
    setIsSertifikatOpen(!isSertifikatOpen);
  };

  const toggleMobileSidebar = () => {
    setIsSidebarMobileOpen(!isSidebarMobileOpen);
  };

  // Menutup sidebar mobile ketika salah satu link navigasi diklik (opsional)
  const handleNavLinkClick = () => {
    if (isSidebarMobileOpen) {
      setIsSidebarMobileOpen(false);
    }
  };

  // Fungsi untuk merender konten berdasarkan parameter 'content' dari URL
  const renderContent = () => {
    switch (content) {
      case "profile":
        return <Profile />;
      case "skills":
        return <Skills />;
      case "sertifikasi-course": // Anda mungkin perlu logika lebih lanjut jika sub-item sertifikat memiliki rute berbeda
        return <SertifikatCourse />;
      case "sertifikasi-competency": // Anda mungkin perlu logika lebih lanjut jika sub-item sertifikat memiliki rute berbeda
        return <SertifikatKompetensi />;
      case "sertifikasi-training": // Anda mungkin perlu logika lebih lanjut jika sub-item sertifikat memiliki rute berbeda
        return <SertifikatTraining />;
      case "project":
        return <Project />;
      case "contact":
        return <Contact />;
      default:
        // Jika 'content' undefined (misalnya rute "/portofolio"), tampilkan Profile atau halaman default
        return <Profile />; // Atau <DefaultContent />;
    }
  };

  return (
    <>
      {/* Tombol Hamburger untuk membuka sidebar di layar kecil */}
      <button
        onClick={toggleMobileSidebar}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Komponen Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-80 h-auto max-h-[85vh] sm:h-screen sm:max-h-none transition-transform ${
          isSidebarMobileOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 font-bold`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-6 overflow-y-auto bg-gray-50 dark:bg-gray-800 relative flex flex-col">
          {/* Tombol Close untuk sidebar di layar mobile */}
          <button
            onClick={toggleMobileSidebar}
            className="absolute top-3 right-3 p-1 text-gray-500 rounded-md sm:hidden hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Close sidebar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Bagian Profil Pengguna */}
          <div className="flex flex-col items-center mt-4 mb-6 sm:mt-8">
            <img
              className="w-40 h-40 rounded-full object-cover"
              src="https://placehold.co/150x150/E2E8F0/4A5568?text=IW" // Placeholder image
              alt="User Poto Profil"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/100x100/E2E8F0/4A5568?text=Error";
              }}
            />
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
              Iksan Wijaya
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400">
              iksanwijaya018@gmail.com
            </p>
          </div>

          {/* Daftar Navigasi */}
          {/* Ganti href="#" dengan path yang sesuai menggunakan Link dari react-router-dom */}
          <ul className="space-y-4 font-bold text-xl sm:pt-0">
            <li>
              <Link
                to="/profile" // Contoh path
                onClick={handleNavLinkClick}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills" // Contoh path
                onClick={handleNavLinkClick}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                aria-expanded={isSertifikatOpen}
                onClick={toggleSertifikatDropdown}
              >
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-xl">
                  Certificate
                </span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ease-in-out ${
                    isSertifikatOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`py-2 space-y-2 text-lg ${
                  isSertifikatOpen ? "" : "hidden"
                } text-base`}
              >
                <li>
                  <Link // Ganti ke Link jika ini adalah navigasi
                    to="/sertifikasi-course" // Contoh path
                    onClick={handleNavLinkClick}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Course
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sertifikasi-competency" // Contoh path
                    onClick={handleNavLinkClick}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Competency Certification
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sertifikasi-training" // Contoh path
                    onClick={handleNavLinkClick}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Tech training programs and events
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/project" // Contoh path
                onClick={handleNavLinkClick}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Project</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact" // Contoh path
                onClick={handleNavLinkClick}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Kontainer Utama Konten */}
      {/* MODIFIKASI DI SINI: sm:ml-64 diubah menjadi sm:ml-80 karena sidebar w-80 */}
      <div className="sm:ml-80 flex flex-col min-h-screen">
        {" "}
        {/* Perhatikan penyesuaian margin ini */}
        {/* Wrapper untuk mengatur padding dan pembatasan lebar konten */}
        <div className="flex-grow flex items-center justify-center p-4">
          {" "}
          {/* p-4 untuk padding keliling area konten */}
          <div className="w-full max-w-7xl">
            {" "}
            {/* max-w-7xl membatasi lebar konten, w-full mengambil lebar yang tersedia */}
            {/* div dengan border dashed dipindahkan ke dalam komponen spesifik jika diperlukan,
                 atau bisa menjadi wrapper di sini jika semua halaman punya gaya ini */}
            {/* Panggil fungsi renderContent untuk menampilkan komponen yang sesuai */}
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portofolio;
