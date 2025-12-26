import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import profileImage from '../assets/uhe.png';

// Komponen Counter (Tetap)
const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: false });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration: 2,
          ease: "easeOut",
          onUpdate(value) {
            node.textContent = Math.round(value).toString();
          },
        });
        return () => controls.stop();
      }
    }
  }, [from, to, isInView]);

  return <span ref={nodeRef}>{from}</span>;
};

// Komponen Label Melayang (Tetap)
const FloatingLabel = ({ text, num, className, delay }: { text: string; num: string; className: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: [0, -12, 0] }}
    exit={{ opacity: 0, y: 20 }}
    viewport={{ once: false }}
    transition={{
      opacity: { delay, duration: 0.8 },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
    }}
    className={`absolute z-30 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-start min-w-[110px] md:min-w-[140px] ${className}`}
  >
    <span className="text-blue-500 text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-0.5">{num}</span>
    <span className="text-white text-xs md:text-base font-semibold whitespace-nowrap">{text}</span>
  </motion.div>
);

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-visible bg-slate-950">
      
      {/* --- BACKGROUND DARK LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Slate Base */}
        <div className="absolute inset-0 bg-[#020617]"></div>
        
        {/* Subtle Grid - Menggunakan stroke yang sangat tipis agar elegan */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Radial Gradient Mask - Membuat grid memudar di pinggir layar */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#020617_80%)]"></div>

        {/* Aurora Glows - Titik cahaya dinamis */}
        <motion.div 
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-500/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full"
        />
      </div>
      {/* ---------------------------- */}

      <main id="home" className="relative z-10 w-full flex-grow flex px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto flex-col lg:flex-row lg:items-end justify-between pt-24 md:pt-32 lg:pt-0 pb-10">
        
        {/* Text Content Section */}
        <motion.section
          className="text-center lg:text-left text-white w-full lg:w-1/2 z-10 pt-6 lg:pt-48 lg:pb-24 order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Developer
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg mb-8 md:mb-12 text-gray-400 max-w-[280px] sm:max-w-md mx-auto lg:mx-0 leading-relaxed">
            Specialized in building high-performance applications and data-driven solutions.
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/5 pt-6 w-full max-w-md mx-auto lg:mx-0 mb-10 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                <Counter from={1} to={3} />+
              </h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-wider leading-tight">
                Years Of <br/> Exp
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start border-x border-white/5">
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                <Counter from={1} to={20} />+
              </h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-wider leading-tight">
                Projects <br/> Done
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                <Counter from={1} to={10} />+
              </h3>
              <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-wider leading-tight">
                Happy <br/> Clients
              </p>
            </div>
          </div>
        </motion.section>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end order-2 mt-0 lg:mt-0 mb-32 md:mb-20 lg:mb-0 transform -translate-y-12 md:translate-y-0">
          
          {/* Main Glow Effect behind profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-[20%] right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-[-5%] w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] bg-blue-500/20 blur-[80px] lg:blur-[140px] rounded-full z-0 pointer-events-none"
          />

          <motion.div
            className="relative w-full max-w-[240px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[550px] aspect-[4/5] z-10 flex items-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={profileImage}
              alt="Uhe Profile"
              className="w-full h-auto object-contain block relative z-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
              style={{ marginBottom: '-1px' }}
            />

            {/* Label Melayang */}
            <FloatingLabel num="#1" text="Mobile App" className="top-[15%] -left-8 md:-left-10" delay={0.6} />
            <FloatingLabel num="#2" text="Web App" className="top-[35%] -right-8 md:-right-10" delay={0.8} />
            <FloatingLabel num="#3" text="Data Analysis" className="bottom-[40%] -left-10 md:-left-16" delay={1.0} />
            <FloatingLabel num="#4" text="Backend Dev" className="bottom-[15%] -right-4 md:-right-5" delay={1.2} />
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default HomePage;