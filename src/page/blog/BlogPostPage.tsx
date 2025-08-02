"use client"

import { useParams, Link, Navigate } from "react-router-dom"
import { blogPosts } from "../../constants/blog-post"
import ShareButtons from "../../components/ShareButtons"
import { ArrowLeft, Clock, User } from "lucide-react"

// Font Plus Jakarta Sans akan diterapkan secara otomatis dari body
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const currentUrl = window.location.href

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Blog
            </Link>

            <ShareButtons url={currentUrl} title={post.title} description={post.excerpt} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Featured Image */}
          {post.imageUrl && (
            <div className="aspect-video relative overflow-hidden">
              <img src={post.imageUrl || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-6 sm:p-8 lg:p-12">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} menit baca</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>

              <time className="text-gray-500 text-sm font-medium">Dipublikasikan pada {post.date}</time>
            </header>

            <div className="w-full h-px bg-gray-200 mb-8"></div>

            {/* Article Content */}
            <div className="prose prose-lg prose-gray max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-lg leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 my-8"></div>

            {/* Author Info */}
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{post.author}</h3>
                <p className="text-gray-600">Content Creator & Developer</p>
                <p className="text-gray-500 text-sm mt-1">Passionate about web development and sharing knowledge</p>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📢 Bagikan artikel ini</h3>
                <p className="text-gray-600 mb-6">Bantu teman-teman kamu untuk membaca artikel yang bermanfaat ini</p>
                <ShareButtons
                  url={currentUrl}
                  title={post.title}
                  description={post.excerpt}
                  showLabels={true}
                  size="large"
                />
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

export default BlogPostPage