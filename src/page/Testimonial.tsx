"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechSolutions",
    content: "Working with this team was an absolute pleasure. They delivered our web app ahead of schedule with exceptional quality.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateX",
    content: "The mobile application they developed exceeded all expectations. User engagement increased by 150% since launch.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Marketing Director, BrandVision",
    content: "Outstanding service from start to finish. They turned our vague ideas into a stunning, functional website.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, DigitalFuture",
    content: "Their technical expertise and creative approach made all the difference in our project's success.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextSlide = () => {
    setDirection("right")
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setDirection("left")
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left")
    setCurrentIndex(index)
  }

  const slideVariants = {
    hidden: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    })
  }

  return (
    <section id="testimonials" className="w-full py-8 md:py-16 px-4 sm:px-6 overflow-hidden ">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">What Clients Say</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-1/2 md:w-1/3 mx-auto" />
        </motion.div>

        <div className="relative h-auto min-h-[300px] sm:min-h-[350px] md:h-96">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center px-2 sm:px-4"
            >
              <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-gray-700 w-full max-w-2xl mx-2 sm:mx-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-indigo-500"
                    />
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <div className="flex justify-center sm:justify-start">
                        {[...Array(5)].map((_, i) => (
                          <FiStar 
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm sm:text-base text-gray-300 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white z-10 ml-1 sm:ml-4"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white z-10 mr-1 sm:mr-4"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-indigo-500 sm:w-6' : 'bg-gray-600'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider