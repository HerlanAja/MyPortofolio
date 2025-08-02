import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import semua komponen halaman portfolio
import HomePage from "./page/HomePage"
import About from "./page/About"
import Services from "./page/Services"
import Skils from "./page/Skils"
import Projects from "./page/project"
import Footer from "./components/Footer"
import TestimonialCard from "./page/Testimonial"
import Contact from "./components/Contact"
import Navbar from "./page/Navbar"

// Import komponen halaman blog yang sudah diperbaiki
import BlogListPage from "./page/blog/BlogListPage"
import BlogPostPage from "./page/blog/BlogPostPage"

// Komponen layout untuk halaman portfolio utama
const PortfolioLayout = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      {/* Latar belakang grid untuk portfolio */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative z-10">
        <Navbar />
        <HomePage />
        <About />
        <Services />
        <Skils />
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
        {/* Route untuk Halaman Utama (Portfolio) dengan dark theme */}
        <Route path="/" element={<PortfolioLayout />} />

        {/* Route untuk Halaman Blog dengan light theme */}
        <Route
          path="/blog"
          element={
            <BlogLayout>
              <BlogListPage />
            </BlogLayout>
          }
        />

        {/* Route untuk Halaman Detail Postingan Blog dengan light theme */}
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
