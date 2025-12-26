import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import profileImage from '../assets/uhe.png';

// Komponen Counter tetap sama
const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: false }); // Ubah ke false agar terulang saat scroll

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

// Komponen Label Melayang dengan efek Fade Out saat scroll
const FloatingLabel = ({ text, num, className, delay }: { text: string; num: string; className: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ 
      opacity: 1, 
      y: [0, -12, 0], 
    }}
    exit={{ opacity: 0, y: 20 }}
    viewport={{ once: false }}
    transition={{
      opacity: { delay, duration: 0.8 },
      y: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }
    }}
    className={`absolute z-30 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-start min-w-[110px] md:min-w-[140px] ${className}`}
  >
    <span className="text-blue-500 text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-0.5">{num}</span>
    <span className="text-white text-xs md:text-base font-semibold whitespace-nowrap">{text}</span>
  </motion.div>
);

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-visible">
      
      {/* Background grid sudah di App.tsx, jadi di sini dihapus agar tidak double */}

      <main id="home" className="relative z-10 w-full flex-grow flex px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto flex-col lg:flex-row lg:items-end justify-between pt-24 lg:pt-0">
        
        {/* Text Content Section dengan whileInView */}
        <motion.section
          className="text-left text-white w-full lg:w-1/2 z-10 pt-10 lg:pt-48 lg:pb-24 order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Developer
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-10 lg:mb-12 text-gray-400 max-w-md">
            Specialized in building high-performance applications and data-driven solutions.
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-8 w-full mb-12 lg:mb-0">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <Counter from={1} to={3} />+
              </h3>
              <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider leading-tight">Years Of <br/> Experience</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <Counter from={1} to={20} />+
              </h3>
              <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider leading-tight">Completed <br/> Projects</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                <Counter from={1} to={10} />+
              </h3>
              <p className="text-gray-500 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider leading-tight">Satisfied <br/> Clients</p>
            </div>
          </div>
        </motion.section>

        {/* Image Section dengan whileInView */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end order-2 mt-auto lg:mt-0">
          
          <motion.div
            className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[500px] aspect-[4/5] z-10 flex items-end"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={profileImage}
              alt="Uhe Profile"
              className="w-full h-auto object-contain block" 
              style={{ marginBottom: '-1px' }}
            />

            {/* Floating Labels */}
            <FloatingLabel num="#1" text="Mobile App" className="top-[10%] -left-4 lg:-left-10" delay={0.6} />
            <FloatingLabel num="#2" text="Web App" className="top-[25%] -right-4 lg:-right-10" delay={0.8} />
            <FloatingLabel num="#3" text="Data Analysis" className="bottom-[40%] -left-6 lg:-left-16" delay={1.0} />
            <FloatingLabel num="#4" text="Backend Dev" className="bottom-[15%] -right-2 lg:-right-5" delay={1.2} />
          </motion.div>
        </div>

      </main>
    </div>
  );
};

export default HomePage;