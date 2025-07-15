"use client"

import { useState, useRef, type FormEvent } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { FiSend, FiMail, FiMessageSquare, FiMessageCircle } from "react-icons/fi"
import { FaWhatsapp, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setError('')
    setIsSuccess(false)

    if (!name || !email || !message) {
      setError('Please fill in all fields')
      setIsSending(false)
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address')
      setIsSending(false)
      return
    }

    try {
      if (!formRef.current) return

      await emailjs.sendForm(
        'service_kl22txf', 
        'template_9qw7gcm', 
        formRef.current,
        '8RqRlvuPNrSj7OJHN'
      )

      setIsSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      setError('An error occurred while sending the email. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center w-full">
          <motion.h1
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let's Talk About Your Great Project
          </motion.h1>
        </div>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-12 mx-auto w-3/4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-blue-900/10 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-900/20 border border-blue-400/30">
                  <FiMail className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400">Email</h3>
              </div>
              <p className="text-gray-300 mb-2">ujangherlaan@gmail.com</p>
              <a 
                href="mailto:ujangherlaan@gmail.com" 
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <FiMessageSquare /> Message
              </a>
            </motion.div>

            <motion.div 
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-purple-900/10 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-purple-900/20 border border-purple-400/30">
                  <FaLinkedin className="text-purple-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-purple-400">LinkedIn</h3>
              </div>
              <p className="text-gray-300 mb-2">Ujang Herlan</p>
              <a 
                href="https://www.linkedin.com/in/ujangherlan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1"
              >
                <FiMessageCircle /> Message
              </a>
            </motion.div>

            <motion.div 
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 hover:bg-green-900/10 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-green-900/20 border border-green-400/30">
                  <FaWhatsapp className="text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-green-400">WhatsApp</h3>
              </div>
              <p className="text-gray-300 mb-2">+6285846537024</p>
              <a 
                href="https://wa.me/6285846537024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:underline flex items-center gap-1"
              >
                <FiMessageSquare /> Message
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="relative rounded-3xl p-8 overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
            }}
          >
            {/* Glowing background circles */}
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-blue-600/20 blur-xl"></div>
            <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-purple-500/30 blur-lg"></div>
            <div className="absolute top-12 right-12 w-16 h-16 rounded-full bg-green-400/40 blur-md"></div>

            <div className="relative z-10">
              {isSuccess && (
                <motion.div
                  className="mb-6 p-4 bg-green-900/20 rounded-lg border border-green-400/30 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-green-400">Message sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  className="mb-6 p-4 bg-red-900/20 rounded-lg border border-red-400/30 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-red-400">{error}</p>
                </motion.div>
              )}

              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-300 mb-2">Your full name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-3 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="from_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-white/50"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    cols={30}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-3 bg-white/5 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white placeholder-white/50"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 ${
                    isSending 
                      ? 'bg-blue-900/50' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:opacity-90'
                  }`}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Now
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact