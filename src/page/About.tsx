import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    'ReactJS', 'NextJS', 'Flutter', 'React Native', 
    'NodeJS', 'ExpressJS', 'Tailwind CSS', 'MySQL', 
    'Firebase', 'Java', 'Python', 'WordPress', 
    'Go', 'Laravel'
  ];

  // Variants untuk Kontainer Utama (Fade In/Out saat scroll)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  // Variants untuk Stagger Children (Efek muncul berurutan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <motion.section 
      id="about" 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Memicu animasi saat masuk area viewport
      viewport={{ once: false, amount: 0.3 }} // once: false agar bisa fade out saat keluar dan fade in kembali
      className="relative text-white py-24 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        {/* Title Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-2">Discovery</h2>
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
            About Me.
          </h1>
          <div className="h-1 w-16 bg-blue-500 mt-3 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: About Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              I'm Ujang Herlan, a Full Stack Developer
            </h3>
            <div className="space-y-6 text-gray-400 text-base leading-relaxed">
              <p>
                Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and responsive applications. 
                Proficient in multiple programming languages and frameworks, as well as database design and management.
              </p>
              <p>
                Strong problem-solving and analytical skills, and a track record of delivering high-quality code on time and on budget.
              </p>
            </div>

            <motion.div className="mt-10" whileHover={{ x: 10 }}>
              <Link
                to="#contact"
                className="group flex items-center gap-3 text-blue-400 text-sm font-bold tracking-wider"
              >
                LET'S TALK 
                <span className="w-10 h-px bg-blue-400 transition-all group-hover:w-16"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Skills Only */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: '#60a5fa' }}
                className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 text-sm font-medium cursor-default transition-colors hover:border-blue-400/50"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;