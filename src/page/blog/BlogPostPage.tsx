import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../../constants/blog-post";
import ShareButtons from "../../components/ShareButtons";
import { ArrowLeft, Clock, User, ArrowRight } from "lucide-react"; 
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMemo } from "react"; 

// Tambahkan import type yang dibutuhkan dari react dan react-markdown
import type { HTMLProps } from "react";
import type { Components } from "react-markdown";


// ----------------------------------------------------------------------
// HELPER FUNCTIONS (Diambil dari BlogListPage untuk Sorting)
// ----------------------------------------------------------------------

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

// Helper function untuk mendapatkan artikel terbaru
const getLatestPosts = (currentPostSlug: string, count: number = 5) => {
    const sortedPosts = [...blogPosts].sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split(" ")
        const [dayB, monthB, yearB] = b.date.split(" ")
        const dateA = new Date(Number(yearA), monthNameToNumber(monthA), Number(dayA))
        const dateB = new Date(Number(yearB), monthNameToNumber(monthB), Number(dayB))
        return dateB.getTime() - dateA.getTime() // Terbaru ke terlama
    })
    
    // Filter out artikel yang sedang dilihat dan batasi jumlahnya
    return sortedPosts
        .filter(p => p.slug !== currentPostSlug)
        .slice(0, count);
}


// ----------------------------------------------------------------------
// Komponen Kartu Artikel Terbaru (Mirip Sidebar Gambar)
// ----------------------------------------------------------------------

interface LatestPostCardProps {
    post: typeof blogPosts[0];
}

const LatestPostCard: React.FC<LatestPostCardProps> = ({ post }) => (
    <Link 
        to={`/blog/${post.slug}`} 
        className="flex gap-4 p-3 hover:bg-gray-100 rounded-lg transition-colors border-b border-gray-100 last:border-b-0"
    >
        {/* Gambar Thumbnail (Kotak Kecil) */}
        <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-200">
            {post.imageUrl ? (
                <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                                    </div>
            )}
        </div>

        {/* Konten */}
        <div className="flex-1 min-w-0">
            <span className="text-xs font-semibold uppercase text-blue-600 mb-1 block">{post.category}</span>
            <h4 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-blue-700 transition-colors">
                {post.title}
            </h4>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime} min lalu</span> 
                {/* Asumsi 'readTime' bisa dimanipulasi menjadi 'X jam/tahun lalu' untuk demo */}
            </div>
        </div>
    </Link>
);


// ----------------------------------------------------------------------
// Konfigurasi ReactMarkdown (Tidak Berubah)
// ----------------------------------------------------------------------
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


// ----------------------------------------------------------------------
// Komponen Utama BlogPostPage
// ----------------------------------------------------------------------
const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const currentUrl = window.location.href;

    // Ambil 5 artikel terbaru (kecuali artikel yang sedang dilihat)
    const latestPosts = useMemo(
        () => getLatestPosts(post.slug),
        [post.slug]
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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

            {/* Main Content DENGAN GRID 2 KOLOM */}
            {/* Lebar kontainer diubah menjadi max-w-7xl untuk memberi ruang pada sidebar */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10"> 
                    
                    {/* Kolom Kiri: Artikel Utama (2/3 lebar di layar besar) */}
                    <div className="lg:col-span-2"> 
                        <article className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                            {/* Featured Image */}
                            {post.imageUrl && (
                                <div className="aspect-video relative overflow-hidden bg-gray-100">
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="p-6 sm:p-8 lg:p-12">
                                {/* Article Header */}
                                <header className="mb-8">
                                    {/* ... (Konten Meta dan Judul tidak berubah) ... */}
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

                                {/* ... (Author Info dan Share Section tidak berubah) ... */}
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
                    </div>

                    {/* Kolom Kanan: Berita Terbaru (1/3 lebar di layar besar) */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-20 p-6 bg-white rounded-xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                                Berita Terbaru
                            </h3>
                            
                            <div className="space-y-3">
                                {latestPosts.length > 0 ? (
                                    latestPosts.map((latestPost) => (
                                        <LatestPostCard key={latestPost.slug} post={latestPost} />
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm p-4 bg-gray-100 rounded-lg">
                                        Tidak ada berita terbaru lainnya.
                                    </p>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            {/* Footer Sederhana */}
            <footer className="border-t border-gray-200 py-6 mt-10 text-center bg-white">
                <p className="text-gray-600 text-sm">© 2025 Blog. Ujang Herlan</p>
            </footer>
        </div>
    );
};

export default BlogPostPage;