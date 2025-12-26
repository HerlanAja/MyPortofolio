"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

const serviceData = [
  {
    id: "01.",
    title: "Web Development",
    description: "Building responsive, user-friendly websites that drive engagement and growth with creative and professional solutions.",
    link: "https://github.com/HerlanAja"
  },
  {
    id: "02.",
    title: "Mobile Application",
    description: "Crafting innovative, user-centric apps for smartphones and tablets to boost productivity and growth in a mobile-first world.",
    link: "https://github.com/HerlanAja"
  },
  {
    id: "03.",
    title: "Content Creation",
    description: "Designing engaging multimedia and innovative storytelling to elevate brand presence across digital platforms.",
    link: "https://www.tiktok.com/@ujangherlan_"
  }
]

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Variant untuk animasi list item saat scroll
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }
    })
  }

  return (
    <section id="services" className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Menggunakan whileInView */}
        <div className="mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-blue-500 text-xs tracking-[0.3em] uppercase font-bold mb-2 block"
          >
            Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-4xl text-white max-w-3xl leading-snug font-bold"
          >
            Combining design thinking and technical precision for results that are{" "}
            <span className="text-blue-500 font-bold">functional and full of character</span>
          </motion.h2>
        </div>

        {/* List Layout */}
        <div className="flex flex-col border-t border-white/10">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Memicu animasi masuk/keluar saat scroll
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              className="group relative border-b border-white/10"
            >
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-5 md:py-8 transition-all duration-500 px-1 group-hover:bg-blue-500/[0.02]"
              >
                <div className="flex items-start gap-4 md:gap-6 w-full">
                  <span className="text-blue-500 font-bold text-base md:text-xl italic pt-0.5 min-w-[35px]">
                    {service.id}
                  </span>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-2xl text-white font-bold group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-500">
                      {service.title}
                    </h3>
                    
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 4 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-gray-400 text-[10px] md:text-sm leading-relaxed overflow-hidden max-w-2xl"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="ml-2 shrink-0">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500">
                    <FiArrowUpRight className="text-white text-sm md:text-lg group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </a>
              
              <motion.div 
                className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-500 z-10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services