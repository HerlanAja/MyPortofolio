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
  FiHeart,
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

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black relative overflow-hidden pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
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
              <p className="text-gray-400 text-sm">
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
            </ul>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Info" delay={0.3}>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
                <span>Pasir Datar Indah,Kec. Caringin, Kabupaten Sukabumi, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiPhone className="w-5 h-5 text-indigo-400" />
                <span>+6285846537024</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiMail className="w-5 h-5 text-indigo-400" />
                <span>ujangherlaan@gmail.com</span>
              </li>
            </ul>
          </FooterSection>

          {/* Newsletter */}
          <FooterSection title="Newsletter" delay={0.4}>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Subscribe to receive updates on new projects, blog posts, and tech insights.
              </p>
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-300 placeholder-gray-500"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Subscribe
                        <FiArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-indigo-900/30 border border-indigo-800/50 rounded-lg p-3 text-center"
                >
                  <p className="text-indigo-300 text-sm">Thank you for subscribing! You'll receive updates soon.</p>
                </motion.div>
              )}
            </div>
          </FooterSection>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            © {currentYear} Ujang Herlan. All rights reserved.
          </motion.p>
          <motion.div
            className="flex items-center mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span>Made with</span>
            <FiHeart className="w-4 h-4 mx-1 text-red-500" />
            <span>using ReactJS & Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
