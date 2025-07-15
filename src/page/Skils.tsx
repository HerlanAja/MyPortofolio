"use client"

import { useState, useRef, useEffect, type ReactNode, type MouseEvent } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FiCode, FiServer, FiSmartphone } from "react-icons/fi"

// Types for our components
interface ParticlesProps {
  color: "blue" | "purple" | "green"
}

interface Card3DProps {
  children: ReactNode
  color: "blue" | "purple" | "green"
  index: number
}

interface TechBadgeProps {
  tech: string
  index: number
  color: "blue" | "purple" | "green"
}

interface AnimatedIconProps {
  icon: ReactNode
  color: "blue" | "purple" | "green"
}

interface SkillItem {
  title: string
  icon: ReactNode
  color: "blue" | "purple" | "green"
  description: string
  technologies: string[]
}

// Particle component for background effects
const Particles = ({ color }: ParticlesProps) => {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 10 + 10,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-${color}-400/20`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// 3D Card component
const Card3D = ({ children, color, index }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTapped, setIsTapped] = useState(false)

  // Motion values for tracking mouse position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform mouse position to rotation values
  const rotateX = useTransform(y, [-150, 150], [15, -15])
  const rotateY = useTransform(x, [-150, 150], [-15, 15])
  const rotateZ = useTransform(x, [-150, 150], [-2, 2])

  // Shine effect
  const shineX = useTransform(x, [-150, 150], [-50, 250])
  const shineY = useTransform(y, [-150, 150], [-50, 250])

  // Handle mouse move to update motion values
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    // Update motion values
    x.set(mouseX)
    y.set(mouseY)
  }

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsTapped(true)
    setTimeout(() => setIsTapped(false), 300)
  }

  // Reset on component unmount
  useEffect(() => {
    return () => {
      x.set(0)
      y.set(0)
    }
  }, [x, y])

  // Get shadow color based on the card color
  const getShadowColor = () => {
    switch (color) {
      case "blue":
        return "59,130,246"
      case "purple":
        return "139,92,246"
      case "green":
        return "74,222,128"
      default:
        return "59,130,246"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
      onTouchStart={handleTouchStart}
    >
      <motion.div
        className={`relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md border border-gray-700 overflow-hidden
                   ${isHovered ? `border-${color}-400/50` : ""} transition-colors duration-300`}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          rotateZ: isHovered ? rotateZ : 0,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px 0px rgba(${getShadowColor()},0.3)`
            : "none",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={isTapped ? { scale: [1, 0.97, 1] } : {}}
        transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${shineX}px ${shineY}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)`
              : "none",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        {/* Particles effect */}
        <Particles color={color} />

        {/* Card content */}
        <div className="relative z-10 p-6 h-full flex flex-col">{children}</div>
      </motion.div>
    </motion.div>
  )
}

// Technology badge component
const TechBadge = ({ tech, index, color }: TechBadgeProps) => {
  return (
    <motion.span
      className={`px-3 py-1 bg-gray-700/70 text-gray-200 rounded-full text-sm backdrop-blur-sm border border-gray-600 hover:border-${color}-400/50 hover:bg-gray-700/90 transition-colors`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.5 + index * 0.05,
        type: "spring",
        stiffness: 300,
      }}
      whileHover={{
        y: -3,
        boxShadow: `0 4px 8px rgba(0,0,0,0.2), 0 0 0 1px rgba(${
          color === "blue" ? "59,130,246" : color === "purple" ? "139,92,246" : "74,222,128"
        },0.3)`,
      }}
    >
      {tech}
    </motion.span>
  )
}

// Icon container with animation
const AnimatedIcon = ({ icon, color }: AnimatedIconProps) => {
  return (
    <motion.div
      className={`p-4 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-700`}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 20px 2px rgba(${
          color === "blue" ? "59,130,246" : color === "purple" ? "139,92,246" : "74,222,128"
        },0.3)`,
        borderColor: `rgba(${color === "blue" ? "59,130,246" : color === "purple" ? "139,92,246" : "74,222,128"},0.5)`,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {icon}
    </motion.div>
  )
}

const Skills = () => {
  const skills: SkillItem[] = [
    {
      title: "Web Development",
      icon: <FiCode className="w-6 h-6 text-blue-400" />,
      color: "blue",
      description:
        "Specializing in modern web technologies including React.js for interactive UIs, Next.js for server-side rendering, and Tailwind CSS for efficient styling. Building responsive, performant web applications with these cutting-edge tools.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      icon: <FiServer className="w-6 h-6 text-purple-400" />,
      color: "purple",
      description:
        "Developing robust server-side solutions with Node.js and Express.js. Experienced with Java for enterprise applications, and multiple database systems including MySQL, SQLite, and Firebase for data management.",
      technologies: ["Node.js", "Express.js", "Java", "MySQL", "SQLite", "Firebase"],
    },
    {
      title: "Mobile App Development",
      icon: <FiSmartphone className="w-6 h-6 text-green-400" />,
      color: "green",
      description:
        "Creating cross-platform mobile applications using Flutter for beautiful native interfaces and React Native for JavaScript-based development. Delivering high-performance mobile experiences on both iOS and Android.",
      technologies: ["Flutter", "React Native", "Dart", "JavaScript", "Firebase"],
    },
  ]

  return (
    <section id="skils" className="w-full py-20 px-4  from-gray-900 to-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto relative">
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 inline-block mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            My Technical Expertise
          </motion.h2>

          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-6 mx-auto w-3/4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Leveraging cutting-edge technologies to build modern, efficient, and scalable solutions
          </motion.p>
        </motion.div>

        {/* Skills cards with 3D effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card3D key={index} color={skill.color} index={index}>
              <div className="flex items-center gap-4 mb-6">
                <AnimatedIcon icon={skill.icon} color={skill.color} />
                <motion.h3
                  className={`text-2xl font-semibold text-${skill.color}-400`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {skill.title}
                </motion.h3>
              </div>

              <motion.p
                className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {skill.description}
              </motion.p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.technologies.map((tech, i) => (
                  <TechBadge key={i} tech={tech} index={i} color={skill.color} />
                ))}
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
