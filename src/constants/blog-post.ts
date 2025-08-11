import portfolioImage from "/src/assets/project/WebPortofolio.png";
import mangcodingImage from "/src/assets/project/MangcodingPKL.png"; 

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  readTime: number;
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
    imageUrl: portfolioImage,
    readTime: 4,
  },
  {
    id: "2",
    slug: "ucapan-terimakasih-pkl-mangcoding",
    title: "Ucapan Terima Kasih kepada Mangcoding atas Kesempatan Praktek Kerja Lapangan",
    excerpt:
      "Dengan penuh rasa hormat, saya mengucapkan terima kasih sebesar-besarnya kepada tim Mangcoding atas kesempatan berharga untuk melaksanakan Praktek Kerja Lapangan (PKL).",
    content: `Dengan penuh rasa hormat, saya mengucapkan terima kasih sebesar-besarnya kepada tim [Mangcoding](https://mangcoding.com/) atas kesempatan berharga untuk melaksanakan Praktek Kerja Lapangan (PKL) di lingkungan perusahaan yang sangat profesional dan suportif. Pengalaman ini jauh melampaui ekspektasi saya dan memberikan fondasi yang kuat untuk karier di masa depan.

### Pembelajaran dan Pertumbuhan Selama PKL

Selama periode PKL, saya berkesempatan untuk terlibat langsung dalam alur kerja tim pengembangan. Beberapa poin penting yang saya dapatkan antara lain:

-   **Pengalaman Teknis Praktis:** Saya mendapatkan wawasan mendalam dalam pengembangan web menggunakan teknologi modern seperti **ReactJS** dan **Tailwind CSS**. Saya juga belajar mengimplementasikan fungsionalitas front-end yang responsif dan efisien.
-   **Keterampilan Non-Teknis:** Lebih dari sekadar coding, saya mengasah kemampuan kolaborasi tim melalui **daily stand-up** dan **sprint planning**. Manajemen waktu dan komunikasi profesional juga menjadi bagian penting yang membentuk etos kerja saya.
-   **Penyelesaian Masalah:** Setiap tantangan yang muncul dalam proses pengembangan menjadi pembelajaran berharga. Saya belajar untuk menganalisis masalah, mencari solusi yang efektif, dan tidak ragu untuk bertanya kepada mentor yang berpengalaman.

> "PKL di Mangcoding bukan hanya tentang coding, tetapi juga tentang membangun pola pikir seorang profesional yang siap menghadapi tantangan nyata di industri."

### Dampak dan Apresiasi

Pengalaman ini bukan hanya mengisi CV, tetapi juga memberikan saya keyakinan diri dan arah yang lebih jelas. Saya kini lebih siap untuk melangkah ke dunia kerja dengan bekal ilmu dan pengalaman yang solid.

Sekali lagi, saya menyampaikan apresiasi setinggi-tingginya kepada seluruh tim [Mangcoding](https://mangcoding.com/) atas bimbingan, kepercayaan, dan kesempatan luar biasa yang telah diberikan. Saya berharap Mangcoding terus sukses dan menjadi tempat yang menginspirasi bagi banyak talenta muda lainnya.`,
    date: "11 Agustus 2025",
    author: "Ujang Herlan",
    category: "Perjalan Saya",
    imageUrl: mangcodingImage,
    readTime: 5,
  },
];
