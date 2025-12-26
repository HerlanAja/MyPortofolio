"use client"

import { useState, useRef, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser'
import { FiSend, FiArrowUpRight } from "react-icons/fi"

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
      setTimeout(() => setIsSuccess(false), 5000)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <motion.section 
      id="contact" 
      // Efek Fade In & Out saat masuk/keluar viewport
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-20 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
        
        {/* Sisi Kiri: Header & Info */}
        <motion.div 
          className="w-full lg:w-1/2 lg:sticky lg:top-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-blue-500 text-xs tracking-[0.3em] uppercase font-bold mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            Let's talk about your <span className="text-blue-500">great project.</span>
          </h2>
          
          <div className="space-y-6 mt-10">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.2 }}
            >
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Email Me</p>
              <a href="mailto:ujangherlaan@gmail.com" className="text-lg text-white hover:text-blue-400 transition-colors flex items-center gap-2 group">
                ujangherlaan@gmail.com 
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ delay: 0.3 }}
            >
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">WhatsApp</p>
              <a href="https://wa.me/6285846537024" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-green-400 transition-colors flex items-center gap-2 group">
                +62 858 4653 7024
                <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Sisi Kanan: Form */}
        <motion.div 
          className="w-full lg:w-1/2 pt-10 lg:pt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: "auto" }} 
                  exit={{ opacity: 0, height: 0 }} 
                  className="p-4 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-400 text-xs"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: "auto" }} 
                  exit={{ opacity: 0, height: 0 }} 
                  className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative group">
              <input
                type="text"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full py-3 bg-transparent border-b border-white/20 focus:border-blue-500 outline-none text-gray-100 transition-all placeholder:text-gray-500 text-base"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full py-3 bg-transparent border-b border-white/20 focus:border-blue-500 outline-none text-gray-100 transition-all placeholder:text-gray-500 text-base"
              />
            </div>

            <div className="relative group">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project"
                rows={3}
                className="w-full py-3 bg-transparent border-b border-white/20 focus:border-blue-500 outline-none text-gray-100 transition-all placeholder:text-gray-500 text-base resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              className="group relative flex items-center gap-4 text-white font-bold tracking-widest uppercase text-[10px] mt-4 disabled:opacity-50"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            >
              <span className="w-10 h-px bg-blue-500 group-hover:w-16 transition-all"></span>
              {isSending ? 'Sending...' : 'Send Message'}
              <FiSend className={`text-white transition-transform ${isSending ? 'animate-pulse' : 'group-hover:translate-x-2'}`} />
            </motion.button>
          </form>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Contact