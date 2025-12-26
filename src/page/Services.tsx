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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }
    })
  }

  return (
    <section id="services" className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-blue-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold mb-2 block"
          >
            Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-slate-100 max-w-3xl leading-snug font-bold"
          >
            Combining design thinking and technical precision for results that are{" "}
            <span className="text-blue-500 font-bold">functional and full of character</span>
          </motion.h2>
        </div>

        {/* List Layout - PERBAIKAN: Border-t dibuat lebih tipis (white/5) */}
        <div className="flex flex-col border-t border-white/5">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              // PERBAIKAN: Border-b dibuat lebih tipis agar terlihat rapat dan clean
              className="group relative border-b border-white/5"
            >
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                // PERBAIKAN: Padding dikurangi dari py-6/10 menjadi py-4/6 agar lebih rapat
                className="flex items-center justify-between py-4 md:py-6 transition-all duration-500 px-1 group-hover:bg-blue-500/[0.02]"
              >
                <div className="flex items-center gap-4 md:gap-8 w-full">
                  {/* ID Number - PERBAIKAN: Menggunakan warna blue-600 untuk kesan elegan (image_ae6f7d.png) */}
                  <span className="text-blue-600 font-bold text-base md:text-xl italic min-w-[35px]">
                    {service.id}
                  </span>
                  
                  <div className="flex-grow flex flex-col">
                    {/* Service Title - PERBAIKAN: text-slate-200 dan font-medium agar rapat (image_ae6f7d.png) */}
                    <h3 className="text-lg md:text-2xl text-slate-200 font-medium group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-500 tracking-tight">
                      {service.title}
                    </h3>
                    
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-slate-400 text-xs md:text-sm leading-relaxed overflow-hidden max-w-2xl"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Arrow Icon - PERBAIKAN: Ukuran icon diperkecil sedikit agar proporsional dengan list rapat */}
                <div className="ml-4 shrink-0">
                  <div className="w-8 h-8 md:w-11 md:h-11 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500">
                    <FiArrowUpRight className="text-white text-base md:text-xl group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </a>
              
              {/* Bottom Line Glow */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1.5px] bg-blue-500 w-0 group-hover:w-full transition-all duration-500 z-10 shadow-[0_0_8px_#3b82f6]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services