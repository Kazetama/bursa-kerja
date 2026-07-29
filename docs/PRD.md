# 📋 Product Requirements Document (PRD)
## Bursa Kerja Khusus (BKK) Vokasi Karir

> **Versi:** 1.1.0
> **Tanggal:** 29 Juli 2026
> **Status:** Draft — Menunggu Persetujuan
> **Stack:** Laravel 13 · Inertia.js · React 19 · MySQL 8 · Tailwind CSS v4

---

## 1. Executive Summary

**Bursa Kerja Khusus (BKK) Vokasi Karir** adalah platform yang membantu lulusan sekolah menengah kejuruan (SMK/Vokasi) untuk mendapatkan pekerjaan melalui informasi lowongan, pelatihan, dan bimbingan karir. Website ini menjadi jembatan antara alumni, perusahaan mitra, dan pihak lembaga.

Website lama dibangun dengan HTML statis sederhana. Proyek ini bertujuan **me-rebuild** website tersebut menggunakan stack modern yang mendukung pengelolaan konten dinamis, autentikasi pengguna, dan admin panel terintegrasi.

---

## 2. Tujuan Produk

| ID | Tujuan | Prioritas |
|----|--------|-----------|
| G-01 | Menyediakan informasi lowongan kerja yang up-to-date dan mudah dicari | 🔴 Must Have |
| G-02 | Memberikan admin panel untuk pengelolaan konten secara mandiri | 🔴 Must Have |
| G-03 | Mendokumentasikan aktivitas dan kegiatan BKK melalui galeri | 🟡 Should Have |
| G-04 | Memudahkan alumni mendaftar dan melamar lowongan kerja | 🔴 Must Have |
| G-05 | Mencatat kunjungan tamu secara digital | 🟡 Should Have |
| G-06 | Menampilkan struktur organisasi BKK secara transparan | 🟡 Should Have |
| G-07 | Menyediakan testimoni alumni yang terverifikasi | 🟢 Nice to Have |
| G-08 | Menyediakan form tracer study internal | 🟢 Nice to Have |

---

## 3. User Personas & Role

> **Sistem memiliki 4 role:** `superadmin`, `admin`, `siswa`, dan `alumni`.

### 🛡️ Persona 1: Super Admin (System Administrator)
- **Role:** `superadmin`
- **Nama:** Mas Bram, IT Administrator BKK / Sekolah
- **Latar belakang:** Staff IT sekolah yang mengawasi seluruh sistem, keamanan, log aktivitas, dan hak akses pengguna
- **Kebutuhan:**
  - Memantau log aktivitas sistem (*activity log*) dari seluruh pengguna dan admin
  - Mengubah role pengguna (misal: mempromosikan user biasa menjadi admin, demosi admin, atau mengubah role antar `superadmin`, `admin`, `siswa`, `alumni`)
  - Memantau audit trail untuk keamanan data BKK
- **Pain points:** Tidak ada visibilitas terhadap siapa yang mengubah data penting atau akses untuk mengubah role user yang salah terdaftar
- **Akses:** Akses penuh ke seluruh halaman publik, admin panel, pemantauan log aktivitas, dan manajemen role user

### 👩‍💼 Persona 2: Admin BKK (Staff/Guru)
- **Role:** `admin`
- **Nama:** Pak Danang, Ketua BKK
- **Latar belakang:** Staff/guru yang bertanggung jawab mengelola operasional BKK sehari-hari
- **Kebutuhan:**
  - Mengelola seluruh konten: lowongan, galeri, pengurus, testimonial, buku tamu
  - Melihat dan mengelola data siswa & absensi PKL
  - Melihat dan mengelola data alumni & tracer study
  - Melihat statistik dan laporan dashboard
  - Mengelola data user (siswa dan alumni)
- **Pain points:** Harus edit file HTML manual untuk update konten, tidak ada sistem terpusat
- **Akses:** Semua halaman publik + seluruh admin panel

### 👨‍🎓 Persona 3: Siswa (Aktif)
- **Role:** `siswa`
- **Nama:** Bagas, siswa kelas XII
- **Latar belakang:** Siswa sekolah menengah kejuruan (SMK) yang sedang atau akan menjalani PKL
- **Kebutuhan:**
  - Melakukan absensi harian PKL (check-in / check-out)
  - Melihat rekap kehadiran PKL miliknya
  - Membuat laporan / jurnal PKL
  - Melihat informasi lowongan dan galeri BKK
- **Pain points:** Absensi masih manual (kertas), rekap lambat, rawan manipulasi
- **Akses:** Dashboard siswa + fitur PKL + halaman publik

### 🎓 Persona 4: Alumni
- **Role:** `alumni`
- **Nama:** Rizky, 19 tahun (lulus tahun lalu)
- **Latar belakang:** Lulusan sekolah kejuruan yang sudah bekerja atau sedang mencari kerja
- **Kebutuhan:**
  - Mengisi form Tracer Study (status pekerjaan, gaji, perusahaan, dll)
  - Melihat dan melamar lowongan kerja yang diposting BKK
  - Memberikan testimoni pengalaman
- **Pain points:** Tidak ada sarana resmi untuk melaporkan status karir pasca lulus
- **Akses:** Dashboard alumni + Tracer Study + Lowongan + Testimonial + halaman publik

---

## 3.1 Role Permission Matrix

| Fitur | Super Admin | Admin | Siswa | Alumni |
|-------|:-----------:|:-----:|:-----:|:------:|
| Lihat halaman publik | ✅ | ✅ | ✅ | ✅ |
| Isi Buku Tamu | ✅ | ✅ | ✅ | ✅ |
| Admin Panel (CRUD konten) | ✅ | ✅ | ❌ | ❌ |
| Kelola Data User | ✅ | ✅ | ❌ | ❌ |
| Ubah Role User | ✅ | ❌ | ❌ | ❌ |
| Memantau Activity Log | ✅ | ❌ | ❌ | ❌ |
| Absensi PKL (check-in/out) | ❌ | ❌ | ✅ | ❌ |
| Lihat rekap PKL sendiri | ❌ | ❌ | ✅ | ❌ |
| Isi Tracer Study | ❌ | ❌ | ❌ | ✅ |
| Lamar Lowongan | ❌ | ❌ | ❌ | ✅ |
| Kirim Testimoni | ❌ | ❌ | ❌ | ✅ |

---

## 4. Scope Produk

### ✅ In Scope (MVP)
- Halaman publik (Home, Lowongan, Galeri, Struktural, Testimonial, Buku Tamu)
- Sistem autentikasi (Register, Login, Logout) untuk 4 role (`superadmin`, `admin`, `siswa`, `alumni`)
- Role-based access control: `superadmin`, `admin`, `siswa`, `alumni`
- Admin panel untuk CRUD: Lowongan, Galeri, Struktural, Testimonial, User
- **Modul Super Admin:** Memantau activity logs & manajemen perubahan role user
- **Modul PKL (Siswa):** Absensi harian + rekap kehadiran
- **Modul Tracer Study (Alumni):** Form status karir pasca lulus
- Form Buku Tamu (publik, tanpa login)
- Pencarian dan filter lowongan
- Dashboard per role yang berbeda

---

## 4. Scope Produk

---

## 5. Functional Requirements

---

### 5.1 Modul Autentikasi (AUTH)

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| AUTH-01 | User dapat melakukan registrasi dengan nama, email, password | Must |
| AUTH-02 | User dapat melakukan login dengan email dan password | Must |
| AUTH-03 | User dapat melakukan logout | Must |
| AUTH-04 | Password di-hash menggunakan bcrypt | Must |
| AUTH-05 | Tersedia fitur "Lupa Password" via email | Should |
| AUTH-06 | Setiap user memiliki salah satu dari 4 role: `superadmin`, `admin`, `siswa`, `alumni` | Must |
| AUTH-07 | Role `superadmin` & `admin` dapat mengakses admin panel | Must |
| AUTH-08 | Role `siswa` diarahkan ke dashboard PKL setelah login | Must |
| AUTH-09 | Role `alumni` diarahkan ke dashboard alumni setelah login | Must |
| AUTH-10 | Laravel Starter Kit (Inertia + React) digunakan sebagai boilerplate auth | Must |
| AUTH-11 | Registrasi wajib menyertakan pilihan role (`siswa` atau `alumni`) | Must |
| AUTH-12 | Admin & Super Admin dibuat via seeder atau di-assign oleh Super Admin | Must |

---

### 5.2 Modul Home (Halaman Utama)

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| HOME-01 | Menampilkan hero section dengan judul, deskripsi, dan CTA button | Must |
| HOME-02 | Menampilkan 6 fitur utama BKK dalam bentuk kartu | Must |
| HOME-03 | Menampilkan definisi BKK, Visi, Misi, dan Motto | Must |
| HOME-04 | Menampilkan alur proses rekrutmen dalam 5 langkah | Must |
| HOME-05 | Menampilkan preview testimonial terbaru (maks 6) | Should |
| HOME-06 | Terdapat tombol WhatsApp floating di sudut kanan bawah | Should |
| HOME-07 | Animasi scroll (AOS) pada setiap section | Should |
| HOME-08 | Statistik singkat: jumlah lowongan aktif, alumni terserap | Nice |

---

### 5.3 Modul Lowongan Kerja (LOKER)

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| LOKER-01 | Menampilkan daftar lowongan kerja yang aktif dalam grid kartu | Must |
| LOKER-02 | Setiap kartu lowongan menampilkan: nama perusahaan, posisi, lokasi, tipe kerja, deadline | Must |
| LOKER-03 | Terdapat search bar untuk mencari lowongan berdasarkan nama posisi/perusahaan | Must |
| LOKER-04 | Filter berdasarkan: tipe kerja (full-time, part-time, magang), lokasi | Should |
| LOKER-05 | Pagination: maks 12 lowongan per halaman | Must |
| LOKER-06 | Halaman detail lowongan menampilkan semua informasi + tombol daftar | Must |
| LOKER-07 | User yang login dapat melamar lowongan | Should |
| LOKER-08 | Lowongan yang sudah melewati deadline otomatis tidak tampil | Must |
| LOKER-09 | Admin dapat membuat, edit, dan hapus lowongan | Must |
| LOKER-10 | Admin dapat toggle status aktif/nonaktif lowongan | Must |
| LOKER-11 | Setiap lowongan dapat di-share (copy URL) | Nice |

---

### 5.4 Modul Galeri

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| GAL-01 | Menampilkan foto kegiatan BKK dalam grid masonry | Must |
| GAL-02 | Setiap foto menampilkan judul dan tanggal kegiatan | Must |
| GAL-03 | Klik foto membuka lightbox / preview gambar besar | Should |
| GAL-04 | Pagination: maks 12 foto per halaman | Must |
| GAL-05 | Admin dapat upload foto baru dengan judul, deskripsi, dan tanggal | Must |
| GAL-06 | Admin dapat edit dan hapus foto | Must |
| GAL-07 | Upload foto mendukung format: JPG, PNG, WEBP | Must |
| GAL-08 | Ukuran maksimal upload: 5MB per file | Must |

---

### 5.5 Modul Struktural Organisasi

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| STR-01 | Menampilkan daftar pengurus BKK dalam grid kartu | Must |
| STR-02 | Setiap kartu menampilkan: foto, nama, jabatan | Must |
| STR-03 | Urutan tampilan pengurus dapat diatur (sortable) | Should |
| STR-04 | Admin dapat menambah, edit, dan hapus data pengurus | Must |
| STR-05 | Admin dapat upload foto pengurus | Must |

---

### 5.6 Modul Testimonial

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| TESTI-01 | Menampilkan testimonial alumni yang sudah disetujui admin | Must |
| TESTI-02 | User yang login dapat mengirim testimonial | Should |
| TESTI-03 | Testimonial baru memiliki status `pending` dan harus disetujui admin | Should |
| TESTI-04 | Admin dapat approve / reject / hapus testimonial | Must |
| TESTI-05 | Setiap testimonial menampilkan: nama, peran (alumni/dll), isi testimoni | Must |
| TESTI-06 | Halaman testimonial menampilkan semua testimoni yang approved | Must |

---

### 5.7 Modul Buku Tamu

| ID | Requirement | Prioritas |
|----|-------------|-----------|
| GUEST-01 | Tersedia form buku tamu yang bisa diisi siapa saja (tanpa login) | Must |
| GUEST-02 | Form buku tamu berisi: nama, instansi, keperluan, email, pesan | Must |
| GUEST-03 | Admin dapat melihat daftar semua tamu yang masuk | Must |
| GUEST-04 | Admin dapat hapus data buku tamu | Must |
| GUEST-05 | Terdapat captcha atau rate-limiting untuk mencegah spam | Should |

---

### 5.8 Modul Absensi PKL (Siswa)

| ID | Requirement | Prioritas |
|----|-------------|----------|
| PKL-01 | Siswa dapat melakukan check-in absensi PKL setiap hari kerja | Must |
| PKL-02 | Siswa dapat melakukan check-out absensi PKL | Must |
| PKL-03 | Absensi mencatat waktu, lokasi (nama tempat PKL), dan status (hadir/izin/sakit/alpha) | Must |
| PKL-04 | Siswa dapat melihat rekap kehadiran PKL miliknya (kalender/tabel) | Must |
| PKL-05 | Siswa dapat mengisi jurnal/catatan harian PKL | Should |
| PKL-06 | Admin dapat melihat semua data absensi seluruh siswa | Must |
| PKL-07 | Admin dapat filter absensi per siswa, per periode, per status | Must |
| PKL-08 | Admin dapat input/edit data PKL siswa secara manual | Must |
| PKL-09 | Admin dapat melihat ringkasan: total hadir, izin, sakit, alpha per siswa | Must |
| PKL-10 | Satu siswa hanya bisa absen 1x per hari (check-in) | Must |

---

### 5.9 Modul Tracer Study (Alumni)

| ID | Requirement | Prioritas |
|----|-------------|----------|
| TRACE-01 | Alumni dapat mengisi form tracer study setelah login | Must |
| TRACE-02 | Form tracer study berisi: status (bekerja/kuliah/wirausaha/menganggur), nama tempat kerja/kampus, bidang pekerjaan, gaji (opsional), tahun mulai | Must |
| TRACE-03 | Alumni hanya bisa mengisi tracer study 1x (bisa di-update) | Must |
| TRACE-04 | Admin dapat melihat semua data tracer study | Must |
| TRACE-05 | Admin dapat melihat statistik: persentase yang bekerja, kuliah, wirausaha, dll | Must |
| TRACE-06 | Admin dapat filter tracer study per angkatan / tahun lulus | Should |
| TRACE-07 | Data tracer study dapat diekspor (future phase) | Nice |

---

### 5.10 Modul Admin Panel

| ID | Requirement | Prioritas |
|----|-------------|----------|
| ADM-01 | Admin panel menggunakan layout terpisah dari halaman publik | Must |
| ADM-02 | Dashboard menampilkan statistik: total lowongan aktif, total siswa PKL, total alumni, testimoni pending, tamu baru | Must |
| ADM-03 | Sidebar navigasi dengan icon untuk semua modul | Must |
| ADM-04 | Semua CRUD dilakukan via Inertia forms (tanpa full page reload) | Must |
| ADM-05 | Pesan flash success/error setelah setiap aksi | Must |
| ADM-06 | Konfirmasi dialog sebelum menghapus data | Must |
| ADM-07 | Admin dapat melihat dan mengelola daftar user (siswa & alumni), mengubah status aktif | Must |
| ADM-08 | Responsif di desktop dan tablet | Should |
| ADM-09 | Admin dapat melihat data PKL & Tracer Study di satu dashboard | Must |

---

### 5.11 Modul Super Admin (Activity Logs & Role Management)

| ID | Requirement | Prioritas |
|----|-------------|----------|
| SUP-01 | Super Admin dapat melihat daftar seluruh log aktivitas (*activity logs*) sistem | Must |
| SUP-02 | Activity log mencatat: user, tipe aksi, deskripsi, IP address, user agent, dan timestamp | Must |
| SUP-03 | Super Admin dapat melakukan filter dan pencarian activity log berdasarkan user, rentang tanggal, dan tipe aksi | Should |
| SUP-04 | Super Admin dapat melihat daftar seluruh user beserta role masing-masing | Must |
| SUP-05 | Super Admin dapat mengubah role user (`superadmin`, `admin`, `siswa`, `alumni`) | Must |
| SUP-06 | Setiap aksi perubahan role user otomatis mencatat log aktivitas baru (*audit trail*) | Must |

---

## 6. Non-Functional Requirements

| ID | Kategori | Requirement |
|----|----------|-------------|
| NFR-01 | **Performance** | Halaman publik harus load < 3 detik pada koneksi 4G |
| NFR-02 | **Security** | Semua input di-sanitasi dan di-validasi (Laravel validation) |
| NFR-03 | **Security** | CSRF protection aktif pada semua form |
| NFR-04 | **Security** | Password minimum 8 karakter |
| NFR-05 | **Scalability** | Database menggunakan MySQL dengan indexing yang tepat |
| NFR-06 | **Responsivity** | UI responsif untuk mobile (360px), tablet (768px), desktop (1280px) |
| NFR-07 | **SEO** | Setiap halaman memiliki title dan meta description unik |
| NFR-08 | **Maintainability** | Kode mengikuti PSR-12 untuk PHP dan ESLint untuk JS |
| NFR-09 | **Storage** | File gambar disimpan di Laravel Storage (`public` disk) |
| NFR-10 | **Accessibility** | Semua gambar memiliki atribut `alt` |

---

## 7. Tech Stack

| Layer | Teknologi | Versi |
|-------|-----------|-------|
| **Backend Framework** | Laravel | 13.x |
| **Frontend Bridge** | Inertia.js | 2.x |
| **Frontend Framework** | React | 19.x |
| **Starter Kit** | Laravel Inertia React Starter Kit | (built-in Laravel 13) |
| **Database** | MySQL | 8.0+ |
| **ORM** | Eloquent | (bundled) |
| **CSS Framework** | Tailwind CSS | 4.x |
| **UI Icons** | Lucide React | latest |
| **Animation** | Framer Motion | latest |
| **File Storage** | Laravel Storage (public disk) | - |
| **Authentication** | Laravel Breeze (via Starter Kit) | - |
| **Form Validation** | Laravel Validation + React Hook Form | - |
| **HTTP Client** | Axios (via Inertia) | - |
| **Package Manager** | npm | latest |

---

## 8. Sitemap & Navigation

```
BKK SMK PD3 Kediri
│
├── 🌐 Public (tanpa login)
│   ├── / (Home)
│   ├── /lowongan (Daftar Lowongan)
│   │   └── /lowongan/{id} (Detail Lowongan)
│   ├── /gallery (Galeri Foto)
│   ├── /struktural (Struktural Organisasi)
│   ├── /testimonies (Semua Testimonial)
│   ├── /guestbook (Buku Tamu)
│   ├── /login
│   └── /register (pilih role: siswa / alumni)
│
├── 🎓 Siswa (/siswa) [role: siswa]
│   ├── /siswa/dashboard
│   ├── /siswa/absensi (check-in & check-out)
│   ├── /siswa/absensi/rekap (rekap kehadiran)
│   └── /siswa/jurnal (jurnal harian PKL)
│
├── 👨‍🎓 Alumni (/alumni) [role: alumni]
│   ├── /alumni/dashboard
│   ├── /alumni/tracer-study (isi/update form)
│   ├── /alumni/lowongan (lihat & lamar lowongan)
│   └── /alumni/testimoni (kirim testimoni)
│
└── 🔧 Admin Panel (/admin) [role: admin & superadmin]
    ├── /admin/dashboard
    ├── /admin/lowongan (CRUD)
    ├── /admin/gallery (CRUD)
    ├── /admin/struktural (CRUD)
    ├── /admin/testimonials (approve/reject)
    ├── /admin/guestbook (lihat)
    ├── /admin/pkl (lihat semua absensi siswa)
    ├── /admin/tracer-study (lihat & statistik)
    ├── /admin/users (kelola siswa & alumni)
    │
    └── 🛡️ Super Admin Fitur [khusus role: superadmin]
        ├── /admin/logs (memantau log aktivitas sistem)
        └── /admin/roles (mengubah role user)
```

---

## 9. User Flow Utama

### Flow 1: Registrasi User Baru (Siswa / Alumni)
```
Buka /register → Isi nama, email, password
→ Pilih role: [Siswa] atau [Alumni]
→ Submit → Redirect ke dashboard sesuai role
```

### Flow 2: Siswa Melakukan Absensi PKL
```
Login sebagai siswa → /siswa/dashboard
→ Klik "Absensi Hari Ini" → Sistem cek: sudah absen?
→ Belum: tampil form check-in (lokasi PKL, catatan)
→ Submit → Status: "Sudah Check-in" + waktu tercatat
→ Sore hari: Klik "Check-out" → Input waktu keluar
→ Absensi hari ini selesai
```

### Flow 3: Alumni Mengisi Tracer Study
```
Login sebagai alumni → /alumni/dashboard
→ Klik "Isi Tracer Study" → Form muncul
→ Isi: status kerja, nama perusahaan/kampus, bidang, gaji, dll
→ Submit → Data tersimpan → Bisa di-update kapan saja
```

### Flow 4: Alumni Melamar Lowongan
```
Login sebagai alumni → /alumni/lowongan
→ Cari & filter lowongan → Klik detail → Klik "Lamar"
→ Isi catatan pelamar → Submit → Status: Pending
```

### Flow 5: Admin Melihat Data PKL
```
Login admin → /admin/dashboard → Lihat statistik absensi hari ini
→ Klik /admin/pkl → Filter per siswa / periode
→ Lihat rekap: hadir X hari, izin Y hari, alpha Z hari
```

### Flow 6: Admin Tambah Lowongan Baru
```
Login sebagai admin → /admin/lowongan → Klik "Tambah"
→ Isi semua field → Submit
→ Flash message sukses → Redirect ke daftar lowongan
```

### Flow 7: Tamu Mengisi Buku Tamu
```
Buka /guestbook → Isi form (nama, instansi, keperluan, email, pesan)
→ Submit → Flash message terima kasih → Form di-reset
```

### Flow 8: Super Admin Memantau Log Aktivitas & Mengubah Role User
```
Login sebagai superadmin → Navigasi ke /admin/logs atau /admin/roles
→ Halaman Log: filter berdasarkan tanggal/user → Lihat riwayat aktivitas
→ Halaman Role: Pilih user → Ubah role (misal: alumni menjadi admin)
→ Submit → Role user ter-update → Activity log otomatis mencatat perubahan role
```

---

## 10. Wireframe Descriptions

### Home Page
```
[NAVBAR: Logo | Home · Features · Tentang · Loker · Galeri · Struktural | Sign In · Sign Up]

[HERO]
  Left: Judul besar + deskripsi + CTA buttons (Let's Talk | View More)
  Right: Ilustrasi hero image

[FEATURES - 2x3 grid]
  🔍 Lowongan Kerja | 📊 Tracer Study
  📋 Survey Kepuasan | 📖 Buku Tamu
  🎯 Asesmen | 🏭 PKL/Absensi

[ABOUT]
  Left: Foto kegiatan
  Right: Visi Misi + Motto

[ALUR REKRUTMEN - 5 kartu bernomor]
  1. Pendaftaran | 2. Pemberkasan | 3. Info Tes | 4. Tes Fisik & MCU | 5. Pemberangkatan

[TESTIMONIAL - 3 kolom masonry]
  Card 1 | Card 2 | Card 3
  Card 4 | Card 5 | Card 6
  [Lihat Semua Testimonial]

[FOOTER: Logo | Navigasi | Kontak | Sosial Media]
[WhatsApp FAB → kanan bawah]
```

---

## 11. Acceptance Criteria

| Fitur | Role | Acceptance Criteria |
|-------|------|---------------------|
| Registrasi | Semua | User baru bisa register + pilih role, redirect ke dashboard sesuai role |
| Login | Semua | Login berhasil → redirect ke dashboard role masing-masing |
| Lowongan | Admin + Alumni | Halaman menampilkan daftar dari DB, search & filter berfungsi |
| Admin CRUD | Admin | Tambah/edit/hapus tanpa full page reload (Inertia) |
| Galeri | Admin | Upload foto berfungsi, foto tampil di grid publik |
| Struktural | Admin | CRUD pengurus dari admin panel berfungsi |
| Absensi PKL | Siswa | Siswa bisa check-in 1x/hari, check-out, lihat rekap |
| Absensi PKL | Admin | Admin bisa lihat semua absensi, filter, edit manual |
| Tracer Study | Alumni | Alumni bisa isi form 1x, update kapan saja, data tersimpan |
| Tracer Study | Admin | Admin bisa lihat semua data + statistik per status |
| Buku Tamu | Publik | Form disubmit, tersimpan di DB, admin bisa lihat |
| Testimoni | Alumni | Alumni kirim → status pending → admin approve/reject |
| Activity Logs | Super Admin | Super Admin dapat melihat dan memfilter log aktivitas sistem |
| Ubah Role | Super Admin | Super Admin dapat mengubah role user, perubahan role tercatat di log |
| Responsif | Semua | Tampilan baik di 360px, 768px, 1280px |

---

## 12. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| Laravel 13 memiliki perubahan breaking | Tinggi | Ikuti changelog resmi, gunakan Starter Kit resmi |
| Upload file gagal di production | Sedang | Konfigurasi `storage:link`, validasi ukuran file |
| Performa lambat saat banyak gambar | Sedang | Lazy loading, optimasi gambar sebelum upload |
| SQL Injection | Tinggi | Gunakan Eloquent ORM / parameterized query |
| Spam buku tamu | Rendah | Rate limiting via Laravel, Honeypot field |
