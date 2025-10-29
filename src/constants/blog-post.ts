import portfolioImage from "/src/assets/project/WebPortofolio.png";
import mangcodingImage from "/src/assets/project/MangcodingPKL.png"; 
import codingImage from "/src/assets/project/codingvsnocoding.jpg";
import automationImage from "/src/assets/project/otomatisasi.jpg";

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
    category: "Sharing Knowledge",
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
  {
    id: "3",
    slug: "kapan-harus-menggunakan-coding-dalam-membangun-website",
    title: "Kapan Harus Menggunakan Coding dalam Membangun Website?",
    excerpt: "Di dunia kerja, saya menemukan banyak perusahaan yang masih mengandalkan WordPress. Lalu, kapan kita harus beralih ke coding?",
    content: `Membangun website kini semakin mudah dengan beragam platform seperti WordPress, Wix, atau Squarespace yang menawarkan solusi tanpa perlu **coding** sama sekali. Pengalaman saya, bahkan di dunia kerja, ada banyak perusahaan yang masih mengandalkan WordPress untuk personal branding mereka. Lantas, kapan sih kita benar-benar harus menggunakan coding?

---

### Pengalaman di Dunia Kerja

Selama berinteraksi dengan dunia profesional, saya menemukan banyak perusahaan, dari skala kecil hingga menengah, yang mengandalkan **WordPress** untuk membangun citra online mereka. Alasannya sederhana, **WordPress itu praktis, cepat, dan punya banyak fitur bawaan** yang cukup untuk kebutuhan dasar seperti blog, portofolio, atau website perusahaan.

---

### Lalu, Kapan Coding Diperlukan?

Meskipun WordPress sangat andal, ada beberapa skenario di mana coding menjadi pilihan yang jauh lebih baik, bahkan mutlak dibutuhkan:

1.  **Saat Kamu Butuh Fitur yang Sangat Spesifik dan Unik:** Plugin dan tema WordPress memang melimpah, tapi ada kalanya fitur yang kamu butuhkan tidak tersedia. Misalnya, kamu ingin membuat kalkulator biaya khusus yang terintegrasi dengan sistem internal perusahaan. Di sini, **mengembangkan fitur kustom dengan coding adalah satu-satunya solusi**.

2.  **Saat Kamu Prioritaskan Performa Maksimal:** WordPress, dengan segala *plugin* dan temanya, kadang bisa jadi berat dan lambat. Jika website-mu adalah platform *e-commerce* dengan ribuan produk atau butuh kecepatan tinggi, **membangun dari nol dengan coding akan memberimu kendali penuh** untuk mengoptimalkan setiap baris kode, sehingga website lebih ringan dan cepat.

3.  **Saat Kamu Ingin Desain yang Benar-Benar Unik:** Desain template WordPress memang bagus, tapi kalau kamu ingin tampilan yang benar-benar berbeda dari yang lain, template tersebut bisa membatasi kreativitas. Dengan coding (menggunakan **HTML**, **CSS**, dan **JavaScript**), kamu bisa menciptakan desain yang unik dan mencerminkan identitas merekmu secara maksimal.

4.  **Saat Kamu Membangun Aplikasi Web yang Kompleks:** Website sederhana seperti blog bisa dibuat tanpa coding. Namun, jika kamu ingin membuat aplikasi web yang kompleks—seperti media sosial, forum interaktif, atau *marketplace*—**coding adalah hal yang mutlak diperlukan**. Kamu butuh *backend*, *database*, dan API untuk mengelola data dan menghubungkan berbagai komponen.

### Kesimpulan

> "Di dunia profesional, fleksibilitas itu kunci. Memahami kapan harus menggunakan WordPress dan kapan harus beralih ke coding akan membuatmu selangkah lebih maju."

Pilihan antara menggunakan WordPress atau coding tergantung pada tujuan dan kebutuhan website-mu. Jika kamu butuh website yang cepat, mudah dikelola, dan tidak memerlukan banyak kustomisasi, WordPress adalah pilihan terbaik. Namun, jika kamu butuh fitur unik, performa maksimal, atau ingin membangun aplikasi web yang kompleks, **coding adalah investasi yang sangat berharga**.

Semoga pengalaman ini bisa jadi panduan untuk teman-teman yang sedang bingung menentukan pilihan.`,
    date: "4 September 2025",
    author: "Ujang Herlan",
    category: "Sharing Knowledge",
    imageUrl: codingImage,
    readTime: 10,
},
  {
    id: "4",
    slug: "kapan-menggunakan-automatisasi",
    title: "Kapan Sebaiknya Kita Menggunakan Automatisasi?",
    excerpt: "Suatu hari saya diminta menggabungkan lebih dari 400 lembar PDF di kantor. Dari situ saya belajar, automatisasi bukan hanya soal efisiensi, tapi juga tentang bekerja lebih cerdas.",
    content: `Pernah suatu hari di kantor, saya mendapat tugas sederhana tapi melelahkan: **menggabungkan lebih dari 400 lembar PDF** menjadi satu dokumen. Sekilas terlihat mudah — buka, seret, gabung, simpan. Tapi setelah menyadari jumlah filenya ratusan, saya mulai berpikir, *“Apa nggak ada cara yang lebih cepat dari ini?”*

Di situlah saya menemukan kembali kekuatan **automatisasi**. Dengan beberapa baris kode Python, pekerjaan yang semula bisa memakan waktu berjam-jam selesai hanya dalam **hitungan detik**. Dari pengalaman itu, saya belajar satu hal penting: automatisasi bukan hanya soal efisiensi, tapi tentang bagaimana kita **memanfaatkan waktu dengan lebih cerdas**.

---

### Kapan Kita Sebaiknya Menggunakan Automatisasi?

Automatisasi sebaiknya digunakan ketika tugas yang kita hadapi:

1. **Berulang dan memakan waktu.** Misalnya menggabungkan ratusan file, mengirim email satu per satu, atau menyalin data dari banyak sumber.  
2. **Rawan kesalahan manusia.** Semakin banyak langkah manual, semakin besar risiko salah klik atau lupa satu file.  
3. **Bisa dijelaskan dengan logika sederhana.** Jika langkah-langkahnya bisa dijabarkan dengan “jika A maka B”, automatisasi hampir selalu bisa diterapkan.

---

### Lebih dari Sekadar Hemat Waktu

Dengan memahami kapan harus menggunakan automatisasi, kita tidak hanya bekerja lebih cepat, tapi juga membuka peluang untuk fokus pada hal yang lebih strategis — berpikir, mencipta, dan berinovasi.  
Automatisasi bukan berarti menggantikan manusia, tapi **membantu manusia bekerja lebih cerdas**.

---

### Penutup

> “Automatisasi bukan tentang menggantikan kerja keras, tapi tentang mengubah cara kita bekerja agar lebih bermakna.”

Kalau kamu juga pernah menghadapi situasi serupa dan ingin tahu **kode Python yang saya gunakan untuk menggabungkan file PDF secara otomatis**, kamu bisa **hubungi saya melalui kontak di [ujangherlan.my.id](https://ujangherlan.my.id)**.  
Siapa tahu, otomatisasi sederhana ini juga bisa menghemat waktumu berjam-jam.`,
    date: "29 Oktober 2025",
    author: "Ujang Herlan",
    category: "Sharing Experience",
    imageUrl: automationImage,
    readTime: 8,
}
];
