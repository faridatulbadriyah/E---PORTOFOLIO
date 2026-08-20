# E-Portofolio PPG - Dashboard

Selamat datang di **E-Portofolio PPG**! Ini adalah platform modern untuk menampilkan portofolio Anda sebagai guru atau calon guru dalam Program Prajabatan PPG (Prajabatan Guru).

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi & Setup](#instalasi--setup)
- [Struktur Proyek](#struktur-proyek)
- [Cara Menggunakan](#cara-menggunakan)
- [Customization](#customization)
- [Fitur-Fitur](#fitur-fitur)
- [Dukungan](#dukungan)

## ✨ Fitur Utama

### 1. **Desain Responsif**
- Tampilan sempurna di desktop, tablet, dan mobile
- Grid layout yang adaptif dan modern
- Performa optimal di semua perangkat

### 2. **Dark Mode Support**
- Toggle tema gelap/terang dengan satu klik
- Preferensi tersimpan di browser
- Transisi halus antar tema

### 3. **Navigasi Intuitif**
- Menu navigasi sticky yang responsif
- Smooth scrolling antar section
- Active link indicator
- Mobile hamburger menu

### 4. **Bagian-Bagian Utama**

#### Hero Section
- Sambutan menarik dengan call-to-action
- Gambar/ilustrasi placeholder
- Dua tombol navigasi

#### About Section
- Profil singkat Anda
- Foto profil placeholder
- Statistik pencapaian (pengalaman, siswa, proyek)

#### Skills Section
- Keterampilan pedagogis dan profesional
- 6 kategori skill dengan ikon
- Tag-tag untuk setiap skill

#### Projects Section
- Showcase proyek dan pencapaian
- Kartu proyek dengan deskripsi
- Kategori dan tag untuk setiap proyek
- Link untuk detail lebih lanjut

#### Statistics Section
- Statistik pencapaian dengan animasi
- Tampilan gradient yang menarik

#### Contact Section
- Informasi kontak lengkap
- Form kontak yang fungsional
- Social media links
- Responsive layout untuk desktop dan mobile

### 5. **Formulir Kontak**
- Form kontak yang responsif
- Validasi input
- Pesan sukses setelah submit
- Email, nama, subjek, dan pesan

## 💻 Persyaratan Sistem

- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet (untuk CDN resources)
- Text editor untuk editing (VS Code recommended)
- Tidak memerlukan Node.js atau build tools

## 🚀 Instalasi & Setup

### 1. Download/Clone Proyek
```bash
# Jika menggunakan Git
git clone <repository-url>
cd "E - PORTOFOLIO"

# Atau ekstrak folder langsung
```

### 2. Buka di VS Code
```bash
code .
```

### 3. Jalankan dengan Live Server
- Install extension "Live Server" dari VS Code
- Klik kanan pada `index.html`
- Pilih "Open with Live Server"
- Website akan terbuka di `http://127.0.0.1:5500`

### 4. Akses Online
- Atau buka file `index.html` langsung di browser dengan drag & drop

## 📁 Struktur Proyek

```
E - PORTOFOLIO/
├── index.html                 # Halaman utama
├── css/
│   └── styles.css            # Stylesheet utama
├── js/
│   └── script.js             # JavaScript interaktif
├── pages/                    # Halaman tambahan (opsional)
├── assets/
│   ├── images/              # Folder untuk gambar
│   └── icons/               # Folder untuk ikon
├── .github/
│   └── copilot-instructions.md
└── README.md                 # File ini
```

## 📝 Cara Menggunakan

### 1. Edit Informasi Profil

Buka `index.html` dan cari bagian yang perlu diubah:

**Ubah Nama di Hero Section:**
```html
<h1 class="hero-title">Selamat Datang di E-Portofolio PPG</h1>
<p class="hero-subtitle">Nama Anda - Guru PPG</p>
```

**Ubah Informasi About Section:**
```html
<h3>Nama Anda</h3>
<p class="about-role">Guru Program Prajabatan PPG</p>
<p class="about-description">Deskripsi singkat tentang Anda...</p>
```

**Update Statistik:**
```html
<div class="stat">
    <h4>0+</h4>  <!-- Ubah angka -->
    <p>Pengalaman</p>
</div>
```

### 2. Tambah/Edit Skill

Cari bagian Skills Section dan duplikasi struktur:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Nama Skill</h3>
    <p>Deskripsi skill Anda</p>
    <div class="skill-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</div>
```

### 3. Tambah Proyek Baru

Duplikasi card proyek dan ubah konten:
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="project-content">
        <h3>Nama Proyek</h3>
        <p class="project-category">Kategori</p>
        <p class="project-description">Deskripsi proyek</p>
        <div class="project-tags">
            <span class="tag">Tag</span>
        </div>
        <a href="#" class="project-link">Detail <i class="fas fa-arrow-right"></i></a>
    </div>
</div>
```

### 4. Update Kontak

Ubah informasi kontak di Contact Section:
```html
<p class="contact-value">email@example.com</p>
<p class="contact-value">+62 XXX XXXX XXXX</p>
<p class="contact-value">Kota, Provinsi, Indonesia</p>
```

## 🎨 Customization

### Mengubah Warna

Edit variabel CSS di `css/styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Warna utama */
    --secondary-color: #8b5cf6;    /* Warna sekunder */
    --success-color: #10b981;      /* Warna sukses */
    --danger-color: #ef4444;       /* Warna bahaya */
    --warning-color: #f59e0b;      /* Warna warning */
}
```

### Mengubah Font

Ubah font-family di CSS:
```css
body {
    font-family: 'Nama Font', sans-serif;
}
```

### Menambah Section Baru

1. Tambah HTML di `index.html`
2. Tambah CSS styling di `css/styles.css`
3. Perbarui navigation link jika perlu

### Mengubah Layout

Edit CSS media queries untuk responsive design:
```css
@media (max-width: 768px) {
    /* Styling untuk tablet */
}

@media (max-width: 480px) {
    /* Styling untuk mobile */
}
```

## ⚙️ Fitur-Fitur Teknis

### Dark Mode
- Tersimpan di localStorage
- Persisten di session browser
- Smooth transition antar tema

### Mobile Menu
- Hamburger menu untuk screen kecil
- Otomatis tutup saat link diklik
- Keyboard navigation (ESC untuk tutup)

### Scroll Animation
- Fade-in animation untuk cards
- Active section indicator di navbar
- Smooth scrolling
- Scroll-to-top button

### Form Validation
- Input validation
- Success notification
- Form reset setelah submit

### Icons
- Font Awesome 6.4.0 via CDN
- Lebih dari 2000 ikon tersedia
- Responsive sizing

## 🔧 Deploy ke Online

### Option 1: Netlify (Gratis)
1. Buat akun di [netlify.com](https://netlify.com)
2. Drag & drop folder proyek
3. Website langsung live

### Option 2: GitHub Pages
1. Upload ke GitHub repository
2. Enable GitHub Pages di settings
3. Website live di `username.github.io/repo-name`

### Option 3: Hosting Berbayar
- Gunakan cPanel hosting
- Upload files via FTP
- Akses via domain Anda

## 📚 Panduan Pengembangan Lebih Lanjut

### Menambah Database/Backend
Jika ingin form kontak ter-submit ke email:
1. Gunakan layanan seperti FormSubmit, Formspree
2. Ubah form action di HTML
3. Test form submission

### Menambah Blog Section
1. Buat file CSS baru
2. Buat struktur blog cards
3. Link ke halaman blog terpisah

### PWA (Progressive Web App)
1. Tambah manifest.json
2. Tambah service worker
3. Website bisa diakses offline

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Gambar tidak muncul | Gunakan path relatif yang benar |
| Font tidak terlihat | Pastikan CDN Font Awesome aktif |
| Mobile menu tidak kerja | Clear browser cache, refresh |
| Dark mode tidak tersimpan | Enable cookies di browser |
| Form tidak submit | Gunakan FormSubmit.co atau Formspree |

## 📞 Dukungan

Untuk bantuan atau pertanyaan:
- Email: email@example.com
- LinkedIn: linkedin.com/in/yourprofile
- Website: yourwebsite.com

## 📄 Lisensi

Proyek ini bebas digunakan dan dimodifikasi untuk keperluan pribadi.

## ✅ Checklist Sebelum Launch

- [ ] Update semua informasi pribadi
- [ ] Ubah gambar placeholder dengan foto asli
- [ ] Test di mobile, tablet, desktop
- [ ] Test dark mode
- [ ] Test form kontak
- [ ] Test navigation links
- [ ] Cek spelling & grammar
- [ ] Update social media links
- [ ] Pilih hosting & deploy
- [ ] Test website yang sudah live

---

**Dibuat dengan ❤️ untuk Program Prajabatan PPG**

**Versi:** 1.0.0  
**Terakhir diupdate:** 2024
