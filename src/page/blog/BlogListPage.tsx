"use client"

import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { blogPosts } from "../../constants/blog-post"
import { Clock, User, ArrowRight, Search, Home, BookOpen } from "lucide-react"

// Helper function untuk mengubah nama bulan Bahasa Indonesia ke angka
const monthNameToNumber = (monthName: string): number => {
  const months: { [key: string]: number } = {
    januari: 0,
    februari: 1,
    maret: 2,
    april: 3,
    mei: 4,
    juni: 5,
    juli: 6,
    agustus: 7,
    september: 8,
    oktober: 9,
    november: 10,
    desember: 11,
  }
  return months[monthName.toLowerCase()] || 0
}

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Urutkan posts berdasarkan tanggal (terbaru ke terlama)
  const sortedPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split(" ")
      const [dayB, monthB, yearB] = b.date.split(" ")
      const dateA = new Date(Number(yearA), monthNameToNumber(monthA), Number(dayA))
      const dateB = new Date(Number(yearB), monthNameToNumber(monthB), Number(dayB))
      return dateB.getTime() - dateA.getTime()
    })
  }, [])

  // Filter posts berdasarkan search dan category
  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [sortedPosts, searchTerm, selectedCategory])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(blogPosts.map((post) => post.category))]
    return cats
  }, [])

  return (
    <div className="min-h-screen bg-white font-jakarta">
      {/* Simple Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium font-jakarta"
            >
              <Home className="w-4 h-4" />
              Portfolio
            </Link>

            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900 font-poppins">Blog</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Clean Header */}
      <header className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-poppins">Blog & Artikel</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-jakarta">
            Berbagi pengalaman dan insight tentang Dunia Digital
          </p>

          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white font-jakarta"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[160px] font-jakarta"
            >
              <option value="all">Semua Kategori</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Results Info */}
          {(searchTerm || selectedCategory !== "all") && (
            <p className="text-gray-600 text-sm mt-4 font-jakarta">
              {filteredPosts.length} artikel ditemukan
              {searchTerm && ` untuk "${searchTerm}"`}
              {selectedCategory !== "all" && ` dalam kategori "${selectedCategory}"`}
            </p>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200"
              >
                {/* Image */}
                {post.imageUrl && (
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full font-jakarta">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm font-jakarta">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors font-poppins">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed font-jakarta">{post.excerpt}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-jakarta">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm group/link font-jakarta"
                    >
                      Baca
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">Tidak ada artikel ditemukan</h3>
            <p className="text-gray-600 mb-6 font-jakarta">
              {searchTerm
                ? `Tidak ada artikel yang cocok dengan "${searchTerm}"`
                : `Tidak ada artikel dalam kategori "${selectedCategory}"`}
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium font-jakarta"
            >
              Lihat Semua Artikel
            </button>
          </div>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 font-jakarta">© 2025 Blog. Ujang Herlan</p>
        </div>
      </footer>
    </div>
  )
}

export default BlogListPage