import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile-1.png';
import HeroStats from '../components/HeroStats';
import ConcentricBackground from '../components/ConcentricBackground';

const HomePage: React.FC = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ConcentricBackground />
      <Navbar />

      <main id="home" className="relative pt-8 md:pt-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[60vh]">
          {/* Text Content */}
          <motion.section
            className="text-left text-white w-full lg:w-1/2 z-10 mb-4 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4 leading-tight">
              Welcome to my <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-300">
              Crafting digital experiences that matter.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Explore My Work
            </motion.button>
          </motion.section>

          {/* Image Section - Shifted 6 units to the right */}
          <motion.div
            className="block w-full lg:w-1/2 relative z-10 mt-6 lg:mt-0 mr-6" // Added mr-6 here
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 24 }} // Changed to 24 (6 units in Tailwind: 6*4=24px)
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-full h-full min-h-[250px] sm:min-h-[350px] flex justify-end items-center">
              {isFirstLoad ? (
                <motion.div
                  className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src={profileImage}
                    alt="Portfolio"
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </motion.div>
              ) : (
                <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px]">
                  <img
                    src={profileImage}
                    alt="Portfolio"
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="-mt-12">
          <HeroStats />
        </div>
      </main>
    </div>
  );
};

export default HomePage;