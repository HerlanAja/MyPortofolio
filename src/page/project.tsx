"use client"

import { useState, useRef, useEffect, type ReactNode, type MouseEvent } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { FiExternalLink, FiGithub, FiCode, FiLayers, FiMonitor, FiSmartphone } from "react-icons/fi"
import { projectsData, type Project } from "../constants/myproject" 

interface ProjectCardProps {
  project: Project
  index: number
}

interface FilterButtonProps {
  active: boolean
  onClick: () => void
  children: ReactNode
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-150, 150], [5, -5])
  const rotateY = useTransform(x, [-150, 150], [-5, 5])

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isHovered) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  const getCategoryIcon = () => {
    switch (project.category) {
      case "web":
        return <FiMonitor className="w-5 h-5" />
      case "mobile":
        return <FiSmartphone className="w-5 h-5" />
      case "ai":
        return <FiLayers className="w-5 h-5" />
      default:
        return <FiCode className="w-5 h-5" />
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="h-full"
      style={{ perspective: "1200px" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }}
    >
      <motion.div
        className="h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700 hover:border-indigo-500/50 transition-colors duration-300"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.7), 0 0 20px 0px rgba(79, 70, 229, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-48 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"
            whileHover={{ opacity: 0.4 }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          {project.featured && (
            <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Featured
            </div>
          )}

          <div className="absolute top-3 left-3 bg-gray-800/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full z-20 flex items-center gap-1 border border-gray-700">
            {getCategoryIcon()}
            <span className="capitalize">{project.category}</span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech: string, i: number) => (
              <motion.span
                key={i}
                className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded-md border border-gray-700"
                whileHover={{
                  y: -2,
                  backgroundColor: "rgba(79, 70, 229, 0.2)",
                  borderColor: "rgba(79, 70, 229, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.a
              href={project.demoUrl}
              className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-4 h-4" />
              Code
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const FilterButton = ({ active, onClick, children }: FilterButtonProps) => (
  <motion.button
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
)

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "featured" | "web" | "mobile" | "ai">("all")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData)

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projectsData)
    } else if (filter === "featured") {
      setFilteredProjects(projectsData.filter((project) => project.featured))
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === filter))
    }
  }, [filter])

  return (
    <section id="projects" className="w-full py-8 px-10 from-black to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block mb-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            My Projects
          </motion.h2>

          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-4 mx-auto w-3/4"
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
            Explore my latest work and personal projects. Each project represents my passion for creating innovative and user-friendly digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>All Projects</FilterButton>
          <FilterButton active={filter === "featured"} onClick={() => setFilter("featured")}>Featured</FilterButton>
          <FilterButton active={filter === "web"} onClick={() => setFilter("web")}>Web Development</FilterButton>
          <FilterButton active={filter === "mobile"} onClick={() => setFilter("mobile")}>Mobile Apps</FilterButton>
          <FilterButton active={filter === "ai"} onClick={() => setFilter("ai")}>AI & ML</FilterButton>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <FiExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
