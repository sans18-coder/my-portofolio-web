import React from "react";
import {
  Instagram,
  Github,
  Linkedin,
  UserCircle,
  Code2, // Untuk judul Skills
  Download, // Untuk tombol Download CV
  // Ikon tambahan yang digunakan dalam definisi skillsData jika didefinisikan di file ini
  ServerCog,
  AppWindow,
  Brain,
  Table,
  FileText as FileTextIcon,
  Languages as LanguagesIcon,
} from "lucide-react";

// Data Keahlian (skillsData) - Idealnya diimpor dari sumber yang sama dengan Skills.jsx
// Diambil dari artifact 'skills_component_generation' (versi dengan level "Native", "Advanced", "Intermediate", "Beginner")
const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code2 size={28} className="text-blue-600 dark:text-blue-400" />,
    items: [
      { name: "PHP", level: "Advanced", logo: "🐘" },
      { name: "Python", level: "Advanced", logo: "🐍" },
      { name: "JavaScript", level: "Advanced", logo: "JS" },
    ],
  },
  {
    category: "Backend Frameworks",
    icon: <ServerCog size={28} className="text-green-600 dark:text-green-400" />,
    items: [
      { name: "Laravel", level: "Advanced", logo: "Lv" },
      { name: "CodeIgniter", level: "Intermediate", logo: "CI" },
      { name: "Node.js", level: "Advanced", logo: "NJS" },
      { name: "Flask", level: "Intermediate", logo: "Flk" },
    ],
  },
  {
    category: "Frontend Frameworks",
    icon: <AppWindow size={28} className="text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "Bootstrap", level: "Advanced", logo: "B" },
      { name: "Tailwind CSS", level: "Advanced", logo: "Tw" },
      { name: "React.js", level: "Advanced", logo: "Rjs" },
    ],
  },
  {
    category: "Machine Learning Tools",
    icon: <Brain size={28} className="text-red-600 dark:text-red-400" />,
    items: [
      { name: "TensorFlow", level: "Intermediate", logo: "TF" },
      { name: "Scikit-learn", level: "Intermediate", logo: "SKL" },
      { name: "Ultralytics (YOLO)", level: "Intermediate", logo: "YOLO" },
      { name: "Hugging Face", level: "Intermediate", logo: "🤗" },
      { name: "Roboflow", level: "Intermediate", logo: "RF" },
    ],
  },
  {
    category: "Data Analysis Tools",
    icon: <Table size={28} className="text-yellow-600 dark:text-yellow-400" />,
    items: [
      { name: "Excel", level: "Intermediate", logo: "XLS" },
      { name: "Pandas", level: "Advanced", logo: "Pd" },
      { name: "Matplotlib", level: "Intermediate", logo: "MPL" },
    ],
  },
  {
    category: "Microsoft Office",
    icon: <FileTextIcon size={28} className="text-sky-600 dark:text-sky-400" />,
    items: [
      { name: "Word", level: "Advanced", logo: "Doc" },
      { name: "Excel", level: "Intermediate", logo: "XLS" },
      { name: "PowerPoint", level: "Intermediate", logo: "PPT" },
    ],
  },
  {
    category: "Languages",
    icon: <LanguagesIcon size={28} className="text-orange-600 dark:text-orange-400" />,
    items: [
      { name: "Indonesian", level: "Native", logo: "ID" },
      { name: "English (passive)", level: "Intermediate", logo: "EN" },
    ],
  },
];

// Membuat daftar datar semua nama keahlian unik dari skillsData
const allSkillNames = skillsData.flatMap(category => 
  category.items.map(item => item.name)
);
const uniqueSkillNames = [...new Set(allSkillNames)];

// Data profil awal Anda
const profileData = {
  name: "Nama Anda", 
  description: `I am a third-year Diploma in Information Systems student with an interest in Backend Development 
and Machine Learning. During my studies, I completed an internship as a Machine Learning Engineer at 
PT. Algonacci Sobat Nusantara and completed the Bangkit Academy 2024 program and the Junior 
Web Developer training by Digitalent KOMINFO. My expertise lies in Backend Development using 
Laravel and Node.js, and in Machine Learning, I have primarily focused on computer vision, and some 
knowledge of forecasting.`,
  photoUrl: "https://placehold.co/400x400/CCCCCC/000000?text=Foto+Anda", 
  // 'skills' array di sini tidak lagi menjadi sumber utama untuk tampilan skill tags
  // Namun, bisa Anda simpan jika masih digunakan untuk hal lain atau hapus jika tidak perlu
  skills_legacy: ["JavaScript", "React", "Node.js", "Python", "HTML", "CSS"], 
  socialLinks: {
    instagram: "https://instagram.com/usernameanda",
    github: "https://github.com/usernameanda",
    linkedin: "https://linkedin.com/in/usernameanda",
  },
  cvUrl: "/cv/NamaAnda_CV.pdf", // Ganti dengan path ke file CV Anda di folder public
  cvFileName: "NamaAnda_CV.pdf" // Ganti dengan nama file CV yang diinginkan saat diunduh
};

const Profile = () => {
  return (
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 flex flex-col items-center">
      {/* Container utama untuk mengatur pembatasan lebar dan padding */}
        {/* Judul Profil - Aligned Left */}
        <div className="w-full mt-10 mb-8 md:mb-12">
          <div className="flex items-center space-x-3">
            <UserCircle size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Profile
            </h1>
          </div>
        </div>

        {/* Kontainer untuk layout dua kolom: Tentang Saya & Keahlian dan Foto+Sosmed */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Kolom Kiri: Tentang Saya & Keahlian */}
          <div className="w-full md:w-7/12 space-y-8">
            {/* Tentang Saya Section */}
            <div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify text-xl">
                {profileData.description}
              </p>
            </div>

            {/* Keahlian Section (Menggunakan uniqueSkillNames dari skillsData) */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white flex items-center">
                <Code2 size={28} className="mr-2" />
                Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {uniqueSkillNames.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-neutral-200 text-black px-4 py-2 rounded-full text-sm font-medium dark:bg-gray-700 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Foto, Ikon Media Sosial, dan Tombol CV */}
          <div className="w-full md:w-5/12 flex flex-col items-center md:items-center pt-0 md:pt-4">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-neutral-300 dark:border-gray-600 mb-6">
              <img
                src={profileData.photoUrl}
                alt="Foto Profil"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src =
                    "https://placehold.co/400x400/CCCCCC/000000?text=Gagal+Muat";
                }}
              />
            </div>
            {/* Ikon Media Sosial */}
            <div className="flex space-x-5">
              <a
                href={profileData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Instagram size={30} />
              </a>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Github size={30} />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <Linkedin size={30} />
              </a>
            </div>

            {/* Tombol Download CV */}
            <a
              href={profileData.cvUrl} 
              download={profileData.cvFileName} 
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-800 focus:ring-blue-500 transition-colors duration-300"
              aria-label="Download CV"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
  );
};

export default Profile;