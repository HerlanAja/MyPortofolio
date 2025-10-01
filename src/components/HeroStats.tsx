import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

// Komponen Counter untuk animasi angka naik
const Counter = ({ from = 0, to }: { from?: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  React.useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [to]);

  return <motion.span>{rounded}</motion.span>;
};

const HeroStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-900/80 backdrop-blur-xl text-white p-6 md:p-10 mt-12 flex flex-col lg:flex-row gap-10 items-center shadow-xl border border-white/10"
      style={{
        borderRadius: '20px 20px 20px 20px',
      }}
    >
      {/* Fake Terminal */}
      <div className="bg-gray-900/70 backdrop-blur-xl w-full lg:w-1/2 rounded-lg p-4 shadow-lg border border-white/10">
        <div className="flex items-center space-x-2 mb-3">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <pre className="text-sm md:text-base text-gray-300 whitespace-pre-wrap">
{`const developer = {
  firstName: "Ujang",
  lastName: "Herlan",
  aka: "Mr Uhe",
  hobby: repeat = () => {
    //eat();
    //sleep();
    //code();
    //repeat();
  }
};`}
        </pre>
      </div>

      {/* Stats & Description */}
      <div className="w-full lg:w-1/2">
        {/* Deskripsi kiri */}
        <p className="text-gray-300 mb-6 text-lg text-left">
          I work on improving user experiences by building solutions that are simple, trustworthy, and meaningful for many people.
        </p>
        
        {/* Stats */}
        <div className="flex justify-around text-white font-bold text-2xl md:text-3xl mb-6">
          <div className="flex flex-col items-center">
            <p>{isInView && <Counter to={3} />}+</p>
            <span className="text-sm font-normal text-gray-400 text-center">Years Of Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <p>{isInView && <Counter to={20} />}+</p>
            <span className="text-sm font-normal text-gray-400 text-center">Completed Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <p>{isInView && <Counter to={10} />}+</p>
            <span className="text-sm font-normal text-gray-400 text-center">Satisfied Clients</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-8 pt-2 text-xl text-gray-400">
          <motion.a
            href="https://github.com/HerlanAja"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1, color: '#ffffff' }}
          >
            <FaGithub className="cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ujang-herlan-92a30b273/"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1, color: '#ffffff' }}
          >
            <FaLinkedin className="cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@ujangherlan_?_t=ZS-90B2X3dz4Am&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1, color: '#ffffff' }}
          >
            <FaTiktok className="cursor-pointer" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStats;
