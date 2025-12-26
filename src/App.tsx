import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import semua komponen halaman portfolio
import HomePage from "./page/HomePage"
import About from "./page/About"
import Services from "./page/Services"
import Projects from "./page/project"
import Footer from "./components/Footer"
import TestimonialCard from "./page/Testimonial"
import Contact from "./components/Contact"
import Navbar from "./page/Navbar"

// Import komponen halaman blog
import BlogListPage from "./page/blog/BlogListPage"
import BlogPostPage from "./page/blog/BlogPostPage"

// Komponen layout untuk halaman portfolio utama
const PortfolioLayout = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white selection:bg-blue-500/30">
      
      {/* BACKGROUND FIXED: Tetap diam di tempat saat di-scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Latar belakang grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        {/* Efek Glow Global (Biru & Ungu) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Konten Utama Portfolio */}
      <div className="relative z-10">
        <Navbar />
        <HomePage />
        <About />
        <Services />
        {/* Bagian Skill sudah dihilangkan sesuai permintaan uhe */}
        <Projects />
        <TestimonialCard />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

// Komponen layout untuk halaman blog (light theme)
const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen bg-gray-50">{children}</div>
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk Halaman Utama (Portfolio) */}
        <Route path="/" element={<PortfolioLayout />} />

        {/* Route untuk Halaman Blog */}
        <Route
          path="/blog"
          element={
            <BlogLayout>
              <BlogListPage />
            </BlogLayout>
          }
        />

        {/* Route untuk Halaman Detail Blog */}
        <Route
          path="/blog/:slug"
          element={
            <BlogLayout>
              <BlogPostPage />
            </BlogLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App