import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';

const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Services', path: '#services' },
  { name: 'Projects', path: '#projects' },
  { name: 'Testimonial', path: '#testimonials' },
  { name: 'Contact', path: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireMeClick = () => {
    const link = document.createElement('a');
    link.href = '/CV-UjangHerlan-Update.pdf';
    link.download = 'CV-UjangHerlan-Update.pdf';
    link.click();
  };

  const handleAnchorClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const target = document.querySelector(path);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 shadow-lg shadow-blue-500/20">
            <img src={Logo} alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <span className="text-white font-bold text-xl tracking-tighter">UHE.</span>
        </motion.div>

        {/* Desktop Menu - Tengah */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={(e) => handleAnchorClick(e, link.path)}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 hover:tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Hire Me - Kanan */}
        <div className="hidden md:block shrink-0">
          <button
            onClick={handleHireMeClick}
            className="flex items-center gap-2 bg-white text-slate-950 px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-400 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Hire Me <FiExternalLink size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-slate-950 z-[60] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-blue-500 font-bold text-xl uppercase tracking-widest">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="text-white p-2"><FiX size={30} /></button>
            </div>
            
            <ul className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleAnchorClick(e, link.path)}
                    // UKURAN TEKS DIKECILKAN: Dari text-4xl menjadi text-2xl
                    className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <button
                onClick={handleHireMeClick}
                // UKURAN TOMBOL DI SESUAIKAN
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl"
              >
                Download CV <FiExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;