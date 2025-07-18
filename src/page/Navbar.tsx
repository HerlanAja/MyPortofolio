import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';

const navLinks = [
  { name: 'About', path: '#about', isAnchor: true },
  { name: 'Services', path: '#services', isAnchor: true },
  { name: 'Skill', path: '#skils', isAnchor: true },
  { name: 'Projects', path: '#projects', isAnchor: true },
  { name: 'Testimonial', path: '#testimonials', isAnchor: true },
  { name: 'Contact', path: '#contact', isAnchor: true },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: 'beforeChildren',
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleHireMeClick = () => {
    const link = document.createElement('a');
    link.href = '/CV-Ujang-Herlan-Update.pdf'; // updated path to public root
    link.download = 'CV-Ujang-Herlan-Update.pdf';
    link.click();
  };

  const handleAnchorClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:w-[80%] px-6 py-3 bg-gray-900/80 backdrop-blur-xl rounded-full flex items-center justify-between shadow-md border border-white/10">
      {/* Logo */}
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-6 h-6 object-contain" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8 font-medium text-white">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.isAnchor ? (
              <a
                href={link.path}
                className="relative group hover:text-gray-300 transition duration-200"
                onClick={(e) => handleAnchorClick(e, link.path)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <Link
                to={link.path}
                className="relative group hover:text-gray-300 transition duration-200"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Hire Me Button */}
      <button
        onClick={handleHireMeClick}
        className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg"
      >
        <span>Hire Me</span>
        <FiExternalLink size={16} />
      </button>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative focus:outline-none bg-gray-800/80 backdrop-blur rounded-full shadow-lg hover:bg-gray-700/80 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <motion.span
          className="w-6 h-0.5 bg-white mb-1.5"
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-white"
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Hapus atau ganti `pt-24` dengan `top-0` atau `top-5` jika ingin sejajar dengan navbar
            // Jika ingin menempel persis di bawah navbar utama saat terbuka, bisa gunakan `top-[calc(theme('spacing.5')+theme('spacing.12'))]` atau sesuaikan
            // Untuk menempel ke atas layar: `className="fixed inset-0 z-50 px-6"`
            // Atau untuk sedikit jarak dari atas: `className="fixed top-1/2 transform -translate-y-1/2 z-50 px-6"`
            // Pilihan terbaik adalah `fixed inset-0 z-50 flex justify-center items-start pt-24 md:pt-0`
            // ATAU untuk rapat ke atas, hapus `pt-24` dan biarkan posisi `motion.ul` yang mengatur
            className="fixed inset-0 z-50 px-6" // Menghapus `pt-24` dan biarkan `motion.ul` yang mengatur posisinya
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)} // Menutup menu ketika area di luar menu diklik
          >
            <motion.ul
              className="container mx-auto max-w-md bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 p-6 mt-20" // Menambahkan `mt-20` atau nilai lain yang sesuai agar drawer muncul di bawah navbar
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()} // Mencegah penutupan menu ketika item menu diklik
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="border-b border-white/10 last:border-0"
                >
                  {link.isAnchor ? (
                    <a
                      href={link.path}
                      className="block py-4 text-white text-xl font-medium hover:text-purple-400 transition duration-200"
                      onClick={(e) => handleAnchorClick(e, link.path)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-4 text-white text-xl font-medium hover:text-purple-400 transition duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.li>
              ))}

              <motion.li variants={itemVariants} className="mt-6">
                <button
                  onClick={handleHireMeClick}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg text-lg"
                >
                  <span>Hire Me</span>
                  <FiExternalLink size={18} />
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;