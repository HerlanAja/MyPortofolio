import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../../constants/blog-post";
import ShareButtons from "../../components/ShareButtons";
import { ArrowLeft, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Tambahkan import type yang dibutuhkan dari react dan react-markdown
import type { HTMLProps } from "react";
import type { Components } from "react-markdown";

// Definisi komponen kustom dengan tipe yang benar
const components: Components = {
  // Paragraf: Tambahkan class 'text-justify'
  p: ({ children }) => <p className="mb-4 text-justify">{children}</p>,

  // Tautan
  a: (props) => (
    <a
      {...props as HTMLProps<HTMLAnchorElement>}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
    />
  ),

  // Blockquote: Tambahkan padding lebih
  blockquote: (props) => (
    <blockquote
      {...props as HTMLProps<HTMLQuoteElement>}
      className="italic border-l-4 border-gray-300 pl-4 text-gray-700 my-6"
    />
  ),

  // Unordered list: Ubah class untuk membuat menjorok
  ul: (props) => (
    <ul
      {...props as HTMLProps<HTMLUListElement>}
      className="list-disc list-outside ml-6 space-y-2 mb-4"
    />
  ),

  // Ordered list: Ubah class untuk membuat menjorok
  ol: (props) => (
    <ol
      {...props as React.ComponentProps<'ol'>}
      className="list-decimal list-outside ml-6 space-y-2 mb-4"
    />
  ),

  // Code block
  pre: (props) => (
    <pre
      {...props as HTMLProps<HTMLPreElement>}
      className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-6"
    />
  ),

  // Heading 2
  h2: (props) => (
    <h2
      {...props as HTMLProps<HTMLHeadingElement>}
      className="mt-8 mb-4 text-2xl font-bold"
    />
  ),
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentUrl = window.location.href;

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
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
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

            <div className="w-full h-px bg-gray-200 my-8"></div>

            {/* Article Content with Markdown */}
            <div className="prose prose-lg prose-gray max-w-none">
              <ReactMarkdown
                components={components}
                remarkPlugins={[remarkGfm]}
              >
                {post.content}
              </ReactMarkdown>
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
  );
};

export default BlogPostPage;