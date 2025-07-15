"use client"

import { useState, useRef, useEffect, type ReactNode, type MouseEvent } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FiEdit3, FiRefreshCw, FiMic, FiGithub, FiLinkedin } from "react-icons/fi"
import { FaTiktok } from "react-icons/fa"
import type { IconType } from "react-icons"

interface Card3DProps {
  children: ReactNode
  color: "blue" | "purple" | "green"
}

const Card3D = ({ children, color }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl p-8 overflow-hidden h-full backdrop-blur-lg bg-white/5 border border-white/10"
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative z-10 h-full flex flex-col"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>

      {/* Glowing background circles */}
      <div className={`absolute top-4 right-4 w-32 h-32 rounded-full bg-${color}-600/20 blur-xl`}></div>
      <div className={`absolute top-8 right-8 w-24 h-24 rounded-full bg-${color}-500/30 blur-lg`}></div>
      <div className={`absolute top-12 right-12 w-16 h-16 rounded-full bg-${color}-400/40 blur-md`}></div>
    </motion.div>
  )
}

interface SocialIconProps {
  icon: IconType
  color: "blue" | "purple" | "green"
}

const SocialIcon = ({ icon: Icon, color }: SocialIconProps) => (
  <motion.div
    className={`w-10 h-10 bg-${color}-900/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10`}
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Icon className={`w-5 h-5 text-${color}-400`} />
  </motion.div>
)

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="services" className="w-full py-4 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center w-full"> {/* Added wrapper div for proper centering */}
          <motion.h1
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.h1>
        </div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8 mx-auto w-3/4"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Web Design Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card3D color="blue">
              <div className="bg-blue-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <FiEdit3 className="w-6 h-6 text-blue-400" />
              </div>

              <h2 className="text-3xl font-bold text-blue-400 mb-4">Web Development</h2>

              <p className="text-gray-300 mb-12 flex-grow">
              Web development involves building responsive, user-friendly websites that drive engagement and growth. We deliver creative, professional solutions tailored to your business needs in today’s fast-paced digital world.
              </p>

              <div className="flex space-x-4 mt-auto">
                <a href="https://github.com/HerlanAja" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FiGithub} color="blue" />
                </a>
                <a href="https://www.linkedin.com/in/ujang-herlan-92a30b273/" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FiLinkedin} color="blue" />
                </a>
                <a href="https://www.tiktok.com/@ujangherlan_" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FaTiktok} color="blue" />
                </a>
              </div>
            </Card3D>
          </motion.div>

          {/* Mobile Application Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card3D color="purple">
              <div className="bg-purple-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <FiRefreshCw className="w-6 h-6 text-purple-400" />
              </div>

              <h2 className="text-3xl font-bold text-purple-400 mb-4">Mobile Application</h2>

              <p className="text-gray-300 mb-12 flex-grow">
              Mobile applications empower businesses with seamless, intuitive experiences on smartphones and tablets. We craft innovative, user-centric apps that boost engagement, productivity, and growth in today’s connected, mobile-first world.
              </p>

              <div className="flex space-x-4 mt-auto">
                <a href="https://github.com/HerlanAja" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FiGithub} color="blue" />
                </a>
                <a href="https://www.linkedin.com/in/ujang-herlan-92a30b273/" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FiLinkedin} color="blue" />
                </a>
                <a href="https://www.tiktok.com/@ujangherlan_" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FaTiktok} color="blue" />
                </a>
              </div>
            </Card3D>
          </motion.div>

          {/* Content Creation Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card3D color="green">
              <div className="bg-green-600/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <FiMic className="w-6 h-6 text-green-400" />
              </div>

              <h2 className="text-3xl font-bold text-green-400 mb-4">Content Creation</h2>

              <p className="text-gray-300 mb-12 flex-grow">
              Content creators design engaging multimedia to inform, entertain, and inspire audiences. Through innovative storytelling and visual content, they shape trends, foster community, and elevate brand presence across digital platforms
              </p>

              <div className="flex space-x-4 mt-auto">
                <a href="https://github.com/HerlanAja" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FiGithub} color="blue" />
                </a>
                <a href="https://www.linkedin.com/in/ujang-herlan-92a30b273/" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FiLinkedin} color="blue" />
                </a>
                <a href="https://www.tiktok.com/@ujangherlan_" target="_blank" rel="noopener noreferrer">
                  <SocialIcon icon={FaTiktok} color="blue" />
                </a>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services