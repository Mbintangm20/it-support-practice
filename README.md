# IT Support Practice Project

Mini project latihan IT Support & Web Development menggunakan PHP, MySQL, dan GitHub.

## 🔧 Tech Stack
- PHP 7+
- MySQL (phpMyAdmin)
- HTML, CSS, JavaScript
- Apache (XAMPP)
- Git & GitHub

## 📂 Fitur
- Login user menggunakan PHP & MySQL
- Session authentication
- Dashboard protected
- Logout system
- Struktur folder rapi

## 📁 Struktur Folder
it-support-practice/
├── backend/
│   ├── config.php
│   ├── login.php
│   └── logout.php
├── frontend/
│   ├── login.html
│   ├── dashboard.php
│   ├── style.css
│   └── script.js
└── database/
    └── users.sql
## 🗄 Database
Tabel `users`
- id
- username
- password
- role

## ▶ Cara Menjalankan
1. Clone repository
2. Letakkan di folder `htdocs`
3. Import database di phpMyAdmin
4. Jalankan Apache & MySQL
5. Akses `http://localhost/it-support-practice/frontend/login.html`
