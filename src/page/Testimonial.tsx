"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "ALEX RIVERA",
    role: "FOUNDER, NEXASTREAM",
    content: "Ujang is an exceptional Fullstack Developer. He built our entire SaaS platform from scratch with incredible efficiency. The code quality is top-notch, and the performance is seamless. Truly a reliable professional."
  },
  {
    id: 2,
    name: "SARAH CHEN",
    role: "PRODUCT MANAGER, TECHFLOW",
    content: "I was impressed by how Ujang handled both our complex backend architecture and the responsive frontend design. He has a great eye for detail and solved all our technical challenges with ease. Highly recommended!"
  },
  {
    id: 3,
    name: "MARK THOMPSON",
    role: "CEO, BRANDLOGIC",
    content: "Fantastic experience! He delivered a robust API and a stunning user dashboard. Communicative, professional, and always delivers high-quality work on time."
  }
]

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="testimonials" className="relative w-full py-20 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      {/* Container utama menggunakan items-start agar sejajar ke atas */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12 lg:gap-20">
        
        {/* Sisi Kiri: Judul (Sticky & Diam) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-10 w-full lg:w-1/2"
        >
          <div className="flex flex-col">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Trusted by clients for delivering <span className="text-blue-500">robust digital solutions.</span>
            </h2>
          </div>
        </motion.div>

        {/* Sisi Kanan: List Testimonial (Scrollable tanpa Scrollbar) */}
        <div 
          className="w-full lg:w-1/2 flex flex-col gap-10 overflow-y-auto lg:max-h-[550px] scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group border-b border-white/10 pb-10 last:border-0"
            >
              {/* Content */}
              <p className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-white tracking-tight">
                  {testimonial.name}
                </span>
                <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection