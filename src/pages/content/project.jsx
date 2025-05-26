import React from 'react';
import { Briefcase, Github } from 'lucide-react'; // Menggunakan Briefcase untuk ikon judul, Github untuk ikon link

// Placeholder data untuk proyek - Ganti dengan data proyek Anda
const projectData = [
  {
    id: 1,
    title: "Portofolio Pribadi (React & Tailwind)",
    imageUrl: "https://placehold.co/600x400/3498DB/FFFFFF?text=Project+Portofolio",
    description: "Website portofolio pribadi yang sedang Anda lihat ini. Dibangun menggunakan React.js untuk fungsionalitas dinamis dan Tailwind CSS untuk styling modern dan responsif. Menampilkan profil, keahlian, sertifikasi, dan proyek.",
    githubLink: "https://github.com/usernameanda/nama-repo-portofolio", // Ganti dengan link GitHub Anda
    liveDemoLink: "#", // Opsional: Link ke demo langsung jika ada
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
  },
  {
    id: 2,
    title: "Aplikasi E-commerce Sederhana",
    imageUrl: "https://placehold.co/600x400/2ECC71/FFFFFF?text=Project+E-commerce",
    description: "Sebuah aplikasi e-commerce dasar dengan fitur keranjang belanja, daftar produk, dan checkout. Backend dibangun dengan Node.js dan Express, frontend dengan React.",
    githubLink: "https://github.com/usernameanda/nama-repo-ecommerce", // Ganti dengan link GitHub Anda
    liveDemoLink: null,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Sistem Klasifikasi Gambar (Machine Learning)",
    imageUrl: "https://placehold.co/600x400/E74C3C/FFFFFF?text=Project+ML",
    description: "Proyek machine learning untuk mengklasifikasikan gambar menggunakan Convolutional Neural Network (CNN) dengan TensorFlow dan Keras. Dataset yang digunakan adalah CIFAR-10.",
    githubLink: "https://github.com/usernameanda/nama-repo-ml-klasifikasi", // Ganti dengan link GitHub Anda
    liveDemoLink: null,
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Flask"],
  },
  // Tambahkan lebih banyak objek proyek di sini
];

const Project = () => {
  return (
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 md:p-8 selection:bg-blue-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Judul Halaman Proyek */}
        <div className="w-full mt-10 mb-10 md:mb-12">
          <div className="flex items-center space-x-3">
            <Briefcase size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              My Projects
            </h1>
          </div>
        </div>

        {/* Kontainer Grid untuk Kartu Proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group flex flex-col overflow-hidden"
            >
              <div className="w-full h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`Gambar Proyek ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/600x400/CCCCCC/FFFFFF?text=Gagal+Muat";
                  }}
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-grow line-clamp-4">
                  {project.description}
                </p>
                
                {/* Daftar Teknologi */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Teknologi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tombol Aksi (GitHub & Demo) */}
                <div className="mt-auto flex items-center space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                    aria-label={`Lihat ${project.title} di GitHub`}
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                  {project.liveDemoLink && project.liveDemoLink !== "#" && (
                     <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                      aria-label={`Lihat demo langsung ${project.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.19a.75.75 0 0 0 .053 1.06Z" clipRule="evenodd" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {projectData.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            Belum ada proyek yang ditambahkan.
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;