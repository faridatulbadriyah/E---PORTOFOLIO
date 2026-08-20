# Quick Start Guide - E-Portofolio PPG

Panduan cepat untuk memulai menggunakan dashboard e-portofolio Anda!

## 🚀 5 Menit Setup

### Step 1: Buka Project
1. Buka folder `E - PORTOFOLIO` di VS Code
2. Atau buka `index.html` langsung di browser

### Step 2: Jalankan Live Server
```
Klik kanan pada index.html → Open with Live Server
```
Atau akses: `http://127.0.0.1:5500`

### Step 3: Ubah Informasi Profil
Edit `index.html` dan ganti:
- Nama Anda di section "Tentang Saya"
- Email di section "Hubungi Saya"
- Deskripsi dan bio Anda

### Step 4: Test Dark Mode
- Klik icon moon/sun di navbar
- Verifikasi tema berubah dengan smooth

### Step 5: Test Mobile
- Tekan F12 untuk buka DevTools
- Klik icon mobile di toolbar
- Test responsive design

## 🎨 Customization Cepat

### Ubah Warna Utama
Edit `css/styles.css` baris 1-3:
```css
--primary-color: #FF6B6B;    /* Dari biru ke merah */
--secondary-color: #FF8E53;
```
Refresh browser → Warna berubah di seluruh site!

### Tambah Skill Baru
Di `index.html` section Skills, copy-paste satu card skill dan edit:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-heart"></i>  <!-- Ubah icon -->
    </div>
    <h3>Nama Skill Baru</h3>
    <p>Deskripsi skill Anda</p>
    <div class="skill-tags">
        <span class="tag">Tag1</span>
    </div>
</div>
```

### Tambah Proyek
Di section Projects, duplikasi satu project-card dan ubah konten.

### Ubah Font & Size
Di `css/styles.css` ubah:
```css
body {
    font-family: 'Arial', sans-serif;  /* Font baru */
    font-size: 16px;                   /* Size baru */
}
```

## 📱 Testing

### Desktop Testing
- Buka DevTools (F12)
- Coba semua section dengan scrolling
- Test dark mode
- Test semua links & buttons

### Mobile Testing
- Di DevTools: Klik toggle device toolbar (Ctrl+Shift+M)
- Test berbagai ukuran: iPhone, iPad, Android
- Test hamburger menu
- Test form input

### Dark Mode Testing
- Klik moon icon
- Verify semua warna berubah
- Refresh page - tema tetap tersimpan
- Ubah di tab lain - tersimpan untuk semua tab

## 📝 Content Editing Tips

### Untuk Pemula
1. Hanya edit teks di antara tag HTML
2. Jangan hapus tag HTML
3. Selalu save file setelah edit
4. Refresh browser untuk lihat perubahan

### Contoh: Edit Hero Title
```html
<!-- JANGAN ubah ini -->
<h1 class="hero-title">
    <!-- HANYA ubah teks ini -->
    Selamat Datang di E-Portofolio PPG
</h1>
```

### Contoh: Edit Kontak
```html
<!-- Ubah email ini -->
<p class="contact-value">email@example.com</p>

<!-- Ubah telepon ini -->
<p class="contact-value">+62 XXX XXXX XXXX</p>
```

## 🔗 Update Links

### Social Media
Di bagian Kontak, ubah href:
```html
<a href="https://linkedin.com/in/username-anda" class="social-link">
    <i class="fab fa-linkedin"></i>
</a>
```

### Project Links
```html
<a href="https://link-ke-project-anda" class="project-link">
    Pelajari Lebih Lanjut <i class="fas fa-arrow-right"></i>
</a>
```

## 🖼️ Menambah Gambar

### Cara Menambah Foto Profil
1. Simpan foto di folder `assets/images/`
2. Di HTML, ganti placeholder dengan:
```html
<div class="about-image">
    <img src="assets/images/profile.jpg" alt="Profil Anda">
</div>
```

### Menambah Gambar Proyek
1. Simpan di `assets/images/`
2. Replace placeholder di project-card

## 🎯 Checklist Sebelum Go Live

- [ ] Update nama & informasi profil
- [ ] Update email & kontak
- [ ] Update social media links
- [ ] Edit deskripsi & bio
- [ ] Tambah skills yang relevan
- [ ] Tambah proyek/pencapaian
- [ ] Ganti foto placeholder
- [ ] Test di mobile
- [ ] Test dark mode
- [ ] Test contact form
- [ ] Check semua links

## 🚀 Deploy ke Internet

### Option 1: Netlify (Paling Mudah)
1. Buka https://netlify.com
2. Buat akun gratis
3. Drag & drop folder proyek
4. Website langsung live!
5. Gratis domain: `your-name.netlify.app`

### Option 2: GitHub Pages
1. Upload ke GitHub
2. Di Settings → Pages
3. Pilih branch & folder
4. Website live di: `username.github.io/e-portofolio`

### Option 3: Traditional Hosting
1. Sewa hosting + domain
2. Upload via FTP
3. Website live di domain Anda

## 💡 Tips & Tricks

### Auto-save
- VS Code auto-save di File → Auto Save
- Tekan Ctrl+S untuk save manual

### Find & Replace
- Ctrl+H untuk buka Find & Replace
- Gunakan untuk ubah text di banyak file

### Format Code
- Ctrl+Shift+I untuk format HTML/CSS/JS
- Lebih rapi dan konsisten

### Browser Cache
- Jika perubahan tidak terlihat:
- Tekan Ctrl+Shift+Delete (clear cache)
- Atau Ctrl+F5 (hard refresh)

## 🆘 Masalah Umum

### Gambar tidak tampil
❌ `<img src="photos/image.jpg">`  
✅ `<img src="assets/images/image.jpg">`

### Warna tidak berubah
- Clear browser cache: Ctrl+F5
- Verify CSS variable syntax
- Check file saved

### Mobile menu stuck
- Refresh browser
- Clear cache
- Check console untuk error (F12 → Console)

### Form tidak berfungsi
- Form ini hanya preview dulu
- Untuk email masuk, gunakan FormSubmit.co
- Dokumentasi di README.md

## 📚 Resource Penting

| Kebutuhan | Resource |
|-----------|----------|
| Icons | [Font Awesome](https://fontawesome.com/icons) |
| Warna | [Coolors.co](https://coolors.co) |
| Font | [Google Fonts](https://fonts.google.com) |
| Responsive Test | Browser DevTools (F12) |
| Dokumentasi | README.md |

## ✅ Selesai!

Selamat! Dashboard Anda sudah siap digunakan. 

### Next Steps:
1. Customize dengan info Anda
2. Test di berbagai device
3. Deploy ke internet
4. Share kepada orang lain!

---

**Butuh bantuan?**
- Lihat README.md untuk dokumentasi lengkap
- Check copilot-instructions.md untuk customization mendalam
- Test di browser DevTools (F12)

**Happy Building! 🎓**
