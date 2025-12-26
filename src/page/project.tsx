"use client"

import { useState, useEffect, type ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiExternalLink, FiGithub, FiCode, FiLayers, FiMonitor, FiSmartphone, FiChevronDown, FiChevronUp } from "react-icons/fi"
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
  const getCategoryIcon = () => {
    switch (project.category) {
      case "web": return <FiMonitor className="w-4 h-4" />
      case "mobile": return <FiSmartphone className="w-4 h-4" />
      case "ai": return <FiLayers className="w-4 h-4" />
      default: return <FiCode className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      className="w-full mb-8"
      // Efek Fade In & Out saat scroll
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="relative group flex flex-col md:flex-row bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 min-h-fit">
        
        {/* Project Image */}
        <div className="w-full md:w-2/5 h-64 md:h-80 lg:h-[400px] overflow-hidden bg-slate-800 shrink-0">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent pointer-events-none" />
        </div>

        {/* Project Details */}
        <div className="w-full md:w-3/5 p-6 md:p-10 lg:p-12 flex flex-col justify-start">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
              {getCategoryIcon()}
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider rounded-full animate-pulse">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl line-clamp-3 md:line-clamp-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="text-[11px] text-gray-500 font-medium border-b border-white/10 pb-0.5">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 mt-4 md:mt-auto">
            <motion.a
              href={project.demoUrl}
              target="_blank"
              className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] group/btn"
              whileHover={{ x: 5 }}
            >
              Live Demo <FiExternalLink className="group-hover/btn:text-blue-500" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-gray-500 hover:text-white font-bold text-xs uppercase tracking-[0.2em] transition-colors"
              whileHover={{ x: 5 }}
            >
              Source Code <FiGithub />
            </motion.a>
          </div>
        </div>

        {/* Number Badge */}
        <span className="absolute top-4 right-8 text-6xl md:text-7xl font-bold text-white/[0.03] pointer-events-none select-none">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  )
}

const FilterButton = ({ active, onClick, children }: FilterButtonProps) => (
  <button
    className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${
      active ? "bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "bg-transparent border-white/10 text-gray-500 hover:border-white/30"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "featured" | "web" | "mobile" | "ai">("all")
  const [showAll, setShowAll] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])

  const PROJECT_LIMIT = 3

  useEffect(() => {
    let result = [...projectsData].sort((a, b) => 
      new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    );

    if (filter === "featured") {
      result = result.filter(p => p.featured)
    } else if (filter !== "all") {
      result = result.filter(p => p.category === filter)
    }

    setFilteredProjects(result)
  }, [filter])

  const displayed = showAll ? filteredProjects : filteredProjects.slice(0, PROJECT_LIMIT)

  return (
    <section id="projects" className="relative w-full py-24 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-16">
          <motion.span 
            className="text-blue-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Projects.</span>
          </motion.h2>

          <div className="flex flex-wrap gap-3 mt-10">
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>All</FilterButton>
            <FilterButton active={filter === "featured"} onClick={() => setFilter("featured")}>Featured</FilterButton>
            <FilterButton active={filter === "web"} onClick={() => setFilter("web")}>Web</FilterButton>
            <FilterButton active={filter === "mobile"} onClick={() => setFilter("mobile")}>Apps</FilterButton>
          </div>
        </div>

        <div className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {displayed.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > PROJECT_LIMIT && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors"
              whileHover={{ y: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                {showAll ? "Show Less" : "Show More Projects"}
              </span>
              {showAll ? <FiChevronUp className="text-xl" /> : <FiChevronDown className="text-xl animate-bounce" />}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects;