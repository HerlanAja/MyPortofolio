"use client"

import { useState, type FormEvent, type ReactNode } from "react"
import { motion } from "framer-motion"
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi"

// Types
interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
}

interface FooterLinkProps {
  href: string
  children: ReactNode
}

interface FooterSectionProps {
  title: string
  children: ReactNode
  delay?: number
}

// Social media link component
const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
)

// Footer link component
const FooterLink = ({ href, children }: FooterLinkProps) => (
  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
    <a
      href={href}
      className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1 group"
    >
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FiArrowRight className="w-3 h-3" />
      </span>
      {children}
    </a>
  </motion.li>
)

// Footer section component
const FooterSection = ({ title, children, delay = 0 }: FooterSectionProps) => (
  <motion.div
    className="mb-8 md:mb-0"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-800 pb-2">{title}</h3>
    {children}
  </motion.div>
)

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
    }, 1500)
  }

  // Tahun diganti menjadi 2026 sesuai instruksi
  const displayYear = 2026

  return (
    <footer className="relative w-full overflow-hidden pt-16 pb-8">
      {/* Background Elements - Sesuai tema slate-950 portofolio */}
      <div className="absolute inset-0 bg-slate-950 -z-20" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* MAX WIDTH DISAMAKAN (max-w-7xl dan padding horizontal) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* About Section */}
          <FooterSection title="About" delay={0.1}>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  DevPortfolio
                </h2>
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Showcasing my journey as a developer through innovative projects and creative solutions. Building
                digital experiences that make a difference.
              </p>
              <div className="flex space-x-3 pt-2">
                <SocialLink href="https://github.com/HerlanAja" icon={<FiGithub />} label="GitHub" />
                <SocialLink href="https://twitter.com/" icon={<FiTwitter />} label="Twitter" />
                <SocialLink href="https://linkedin.com/" icon={<FiLinkedin />} label="LinkedIn" />
                <SocialLink href="https://instagram.com/herlaaannn" icon={<FiInstagram />} label="Instagram" />
              </div>
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Quick Links" delay={0.2}>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#skils">Skills</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
            </ul>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Info" delay={0.3}>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 group">
                <FiMapPin className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-sm">Pasir Datar Indah, Kec. Caringin, Kabupaten Sukabumi, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <FiPhone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm">+6285846537024</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <FiMail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm">ujangherlaan@gmail.com</span>
              </li>
            </ul>
          </FooterSection>

          {/* Newsletter */}
          <FooterSection title="Newsletter" delay={0.4}>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Subscribe to receive updates on new projects and tech insights.
              </p>
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-300 placeholder-gray-600 text-sm"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 text-sm disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Processing..." : "Subscribe"}
                    {!isSubmitting && <FiArrowRight className="w-4 h-4" />}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-3 text-center"
                >
                  <p className="text-indigo-300 text-xs">Thanks for subscribing!</p>
                </motion.div>
              )}
            </div>
          </FooterSection>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            © {displayYear} Ujang Herlan. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;