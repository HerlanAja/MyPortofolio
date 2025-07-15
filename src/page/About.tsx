import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaReact, FaNodeJs, FaJava, FaPython
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiFlutter, SiReact, 
   SiTailwindcss, SiMysql, 
  SiFirebase, SiExpress
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSparkling, setIsSparkling] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setIsSparkling(true);
      setTimeout(() => setIsSparkling(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: <FaReact className="text-blue-400" />, label: 'ReactJS', color: 'bg-blue-400/10' },
    { icon: <SiNextdotjs className="text-white" />, label: 'NextJS', color: 'bg-gray-800/10' },
    { icon: <SiFlutter className="text-blue-500" />, label: 'Flutter', color: 'bg-blue-500/10' },
    { icon: <SiReact className="text-blue-300" />, label: 'React Native', color: 'bg-blue-300/10' },
    { icon: <FaNodeJs className="text-green-500" />, label: 'NodeJS', color: 'bg-green-500/10' },
    { icon: <SiExpress className="text-gray-300" />, label: 'ExpressJS', color: 'bg-gray-700/10' },
    { icon: <SiTailwindcss className="text-cyan-400" />, label: 'Tailwind CSS', color: 'bg-cyan-400/10' },
    { icon: <SiMysql className="text-blue-600" />, label: 'MySQL', color: 'bg-blue-600/10' },
    { icon: <SiFirebase className="text-yellow-500" />, label: 'Firebase', color: 'bg-yellow-500/10' },
    { icon: <FaJava className="text-red-500" />, label: 'Java', color: 'bg-red-500/10' },
    { icon: <FaPython className="text-blue-700" />, label: 'Python', color: 'bg-blue-700/10' },
    { icon: <SiExpress className="text-gray-400" />, label: 'Express', color: 'bg-gray-400/10' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      y: -10,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const sparkleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: [0, 1, 0],
      scale: [0.8, 1.2, 1],
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="text-white py-20 px-4 sm:px-6">
      {/*  Title - Above the card */}
      <div className="flex justify-center w-full"> {/* Added wrapper div for proper centering */}
          <motion.h1
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.h1>
        </div>

      {/* Divider Line */}
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8 mx-auto w-3/4"
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-6xl mx-auto rounded-3xl bg-gray-900/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMEg0MFY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        </div>
        
        {/* Glowing dots */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>

        <motion.div 
          className="md:flex md:items-start md:justify-between gap-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Skills Section - Left Side */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              variants={itemVariants}
            >
              Skills
            </motion.h2>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <motion.div
                    className={`${skill.color} p-4 rounded-xl flex flex-col items-center justify-center shadow-lg cursor-default backdrop-blur-sm border border-white/10`}
                    variants={skillVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <div className="text-3xl mb-1">{skill.icon}</div>
                    <AnimatePresence>
                      {hoveredSkill === index && (
                        <motion.span 
                          className="absolute bottom-full mb-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-800/90 backdrop-blur-sm text-white whitespace-nowrap border border-white/10"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          {skill.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* About Content - Right Side */}
          <motion.div 
            className="md:w-1/2 text-gray-300 relative"
            variants={itemVariants}
          >
            {/* Sparkle elements */}
            <AnimatePresence>
              {isSparkling && (
                <>
                  <motion.div
                    className="absolute top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    style={{ filter: 'blur(1px)' }}
                  />
                  <motion.div
                    className="absolute top-1/4 right-1/4 w-3 h-3 bg-yellow-300 rounded-full pointer-events-none"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    style={{ filter: 'blur(1px)' }}
                  />
                  <motion.div
                    className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-300 rounded-full pointer-events-none"
                    variants={sparkleVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                    style={{ filter: 'blur(1px)' }}
                  />
                </>
              )}
            </AnimatePresence>

            <p className="text-2xl font-medium text-white mb-4 relative z-10">
              I'm Ujang Herlan
            </p>
            <p className="leading-relaxed text-gray-300 mb-6 relative z-10">
              Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and responsive applications.
              Proficient in multiple programming languages and frameworks, as well as database design and management.
              Strong problem-solving and analytical skills, and a track record of delivering high-quality code on time and on budget.
            </p>
            <motion.div 
              className="mt-8 relative z-10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="#contact"
                className="inline-block bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group border border-white/20"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;