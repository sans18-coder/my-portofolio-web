import React from 'react';
import { Mail, MessageCircle, Github, Instagram, Linkedin, UserCircle } from 'lucide-react';

// Placeholder data untuk link kontak - Ganti dengan link Anda yang sebenarnya
const contactLinks = [
  {
    id: 'email',
    name: 'Email',
    icon: <Mail size={32} />,
    href: 'mailto:iksanwijaya018@gmail.com', // Ganti dengan alamat email Anda
    bgColor: 'bg-red-500 hover:bg-red-600',
    textColor: 'text-white',
    ariaLabel: 'Send an email to Iksan Wijaya'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: <MessageCircle size={32} />, // Lucide-react tidak punya ikon WhatsApp spesifik, MessageCircle bisa jadi alternatif
    href: 'https://wa.me/6281234567890', // Ganti dengan nomor WhatsApp Anda (dengan kode negara)
    bgColor: 'bg-green-500 hover:bg-green-600',
    textColor: 'text-white',
    ariaLabel: 'Contact Iksan Wijaya on WhatsApp'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <Github size={32} />,
    href: 'https://github.com/usernameanda', // Ganti dengan username GitHub Anda
    bgColor: 'bg-gray-800 hover:bg-gray-900',
    textColor: 'text-white',
    ariaLabel: 'View Iksan Wijaya on GitHub'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram size={32} />,
    href: 'https://instagram.com/usernameanda', // Ganti dengan username Instagram Anda
    bgColor: 'bg-pink-500 hover:bg-pink-600',
    textColor: 'text-white',
    ariaLabel: 'Follow Iksan Wijaya on Instagram'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Linkedin size={32} />,
    href: 'https://linkedin.com/in/usernameanda', // Ganti dengan URL profil LinkedIn Anda
    bgColor: 'bg-blue-600 hover:bg-blue-700',
    textColor: 'text-white',
    ariaLabel: 'Connect with Iksan Wijaya on LinkedIn'
  },
];

const Contact = () => {
  return (
    <div className="w-full bg-white text-black dark:bg-gray-900 dark:text-white font-inter p-4 md:p-8 selection:bg-blue-500 selection:text-white min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        {/* Judul Halaman Kontak */}
        <div className="w-full mt-10 mb-12 md:mb-16">
          <div className="flex items-center justify-center space-x-3">
            <UserCircle size={48} className="text-black dark:text-white" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white">
              Contact Me
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* Kontainer Grid untuk Tombol Kontak */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 aspect-square ${link.bgColor} ${link.textColor} group`}
            >
              <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                {React.cloneElement(link.icon, { size: 40 })} 
              </div>
              <span className="text-sm sm:text-md font-medium">{link.name}</span>
            </a>
          ))}
        </div>
        
        <p className="mt-16 text-sm text-gray-500 dark:text-gray-500">
          Iksan Wijaya &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Contact;
