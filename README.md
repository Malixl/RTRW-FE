# RTRW Provinsi Gorontalo

Aplikasi web untuk menampilkan informasi Rencana Tata Ruang Wilayah (RTRW) Provinsi Gorontalo.

## 🚀 Tech Stack

- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool dan development server yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Ant Design** - Component library untuk React
- **React Router DOM** - Routing untuk SPA
- **PostCSS & Autoprefixer** - Tool untuk memproses CSS

## 📁 Struktur Project (Atomic Design)

```
src/
├── components/
│   ├── atoms/          # Komponen terkecil
│   │   ├── SectionTitle.jsx
│   │   ├── Text.jsx
│   │   ├── IconWrapper.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── FormLabel.jsx
│   │   └── ErrorText.jsx
│   ├── molecules/      # Kombinasi atoms
│   │   ├── InfoCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── ObjectiveItem.jsx
│   │   ├── FormField.jsx
│   │   ├── LoginForm.jsx
│   │   ├── SignUpForm.jsx
│   │   ├── ResetPasswordForm.jsx
│   │   └── StatCard.jsx
│   ├── organisms/      # Kombinasi molecules
│   │   ├── Hero.jsx
│   │   ├── DefinitionSection.jsx
│   │   ├── ObjectivesSection.jsx
│   │   ├── ContentsSection.jsx
│   │   ├── Footer.jsx
│   │   ├── AuthCard.jsx
│   │   └── AuthLayout.jsx
│   └── templates/      # Layout utama
│       ├── MainLayout.jsx
│       └── DashboardLayout.jsx
├── pages/              # Halaman aplikasi
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── SignUpPage.jsx
│   ├── ResetPasswordPage.jsx
│   └── DashboardPage.jsx
├── constants/          # Data konstan
│   └── rtrwData.js
└── assets/             # File statis
```

## 🎯 Fitur

### Homepage
- **Hero Section** - Header dengan background drone photo
- **Pengertian RTRW** - Penjelasan definisi sesuai UU No. 26 Tahun 2007
- **Tujuan RTRW** - 4 tujuan utama penataan ruang
- **Isi RTRW** - 4 komponen utama dengan card design yang elegant
- **Responsive Design** - Tampilan optimal di semua ukuran layar

### Authentication
- **Login Page** - Form login dengan validasi
- **Sign Up Page** - Form registrasi dengan validasi lengkap
- **Reset Password Page** - Form reset password via email
- **Elegant Design** - Glass morphism dan gradient effects

### Dashboard
- **Statistics Cards** - 4 stat cards dengan trend indicators
- **Recent Activities** - List aktivitas terbaru
- **Quick Actions** - Tombol aksi cepat
- **Sidebar Navigation** - Menu navigasi dengan collapse
- **Responsive Layout** - Adaptive untuk mobile dan desktop

## 🛠️ Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 📖 Penggunaan

Aplikasi akan berjalan di `http://localhost:5173` (port default Vite).

### Routes
- `/` - Homepage
- `/login` - Login page
- `/signup` - Sign up page
- `/reset-password` - Reset password page
- `/dashboard` - Dashboard (after login)

## 🎨 Kustomisasi

### Mengubah Data Konten

Edit file `src/constants/rtrwData.js` untuk mengubah konten yang ditampilkan.

### Mengubah Tema Warna

Edit file `tailwind.config.js` di bagian `theme.extend.colors`.

### Menambah Komponen Baru

Ikuti struktur Atomic Design:
- **Atoms** - Komponen UI paling dasar (Button, Input, dll)
- **Molecules** - Gabungan beberapa atoms (FormField, Card, dll)
- **Organisms** - Gabungan molecules yang membentuk section
- **Templates** - Layout/kerangka halaman
- **Pages** - Halaman lengkap dengan data

## 📝 License

© 2025 Pemerintah Provinsi Gorontalo

## 👨‍💻 Developer Notes

Project ini menggunakan konsep **Atomic Design** untuk struktur komponen yang modular dan maintainable. Setiap komponen dibuat dengan prinsip:
- **Single Responsibility** - Satu komponen satu tugas
- **Reusability** - Dapat digunakan kembali
- **Clean Code** - Kode yang bersih dan mudah dibaca
- **PropTypes** - Type checking untuk props
- **Validation** - Form validation di setiap input
- **Responsive** - Mobile-first approach


