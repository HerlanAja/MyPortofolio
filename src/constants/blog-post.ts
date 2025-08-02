export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  imageUrl?: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "pentingnya-web-portofolio",
    title: "Pentingnya Web Portofolio untuk Anak IT dan Branding Diri",
    excerpt:
      "Web portofolio bukan hanya untuk menampilkan karya, tapi juga menjadi sarana branding diri yang kuat, baik untuk anak IT maupun masyarakat umum.",
    content: `Di era digital saat ini, memiliki web portofolio menjadi kebutuhan yang semakin penting. Bagi anak IT, web portofolio adalah etalase kemampuan dan karya yang bisa dilihat oleh calon klien, perusahaan, atau bahkan komunitas.

Melalui web portofolio, Anda dapat menampilkan hasil pekerjaan, proyek, keterampilan, dan pengalaman dengan cara yang profesional. Hal ini membuat calon pemberi kerja atau klien lebih percaya pada kemampuan Anda.

Tidak hanya untuk anak IT, masyarakat umum pun dapat memanfaatkan web portofolio untuk membangun personal branding. Misalnya, fotografer, desainer, penulis, bahkan pengusaha kecil bisa menunjukkan karya dan produk mereka secara online.

Dengan web portofolio, Anda juga memiliki kendali penuh atas informasi yang ingin ditampilkan, berbeda dengan media sosial yang terbatas pada format tertentu. Portofolio pribadi memberi kebebasan untuk menampilkan identitas unik Anda.

Kesimpulannya, web portofolio adalah investasi jangka panjang untuk karier dan citra diri. Mulailah membangunnya sedini mungkin, karena portofolio yang baik dapat membuka lebih banyak peluang di masa depan.`,
    date: "2 Agustus 2025",
    author: "Ujang Herlan",
    category: "Personal Branding",
    imageUrl: "https://buildwithangga.com/storage/assets/portfolio/pXyjLUVTzQxHkd0zsHgdOe33z5Ly11IAr62FTysl.png",
    readTime: 4,
  },
]
