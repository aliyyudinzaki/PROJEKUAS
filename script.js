// 1. Navbar berubah warna saat di-scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0b2c40';
    } else {
        navbar.style.backgroundColor = '#1a5276';
    }
});

// 2. Tombol menu toggle untuk HP
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// 3. Scroll halus ke bagian Profil
function scrollToProfil() {
    document.getElementById('profil').scrollIntoView({ behavior: 'smooth' });
}

// 4. Tambahkan item fasilitas secara dinamis
const fasilitasData = [
    {
        nama: "Laboratorium Komputer",
        gambar: "foto lab.jpeg",
        deskripsi: "Dilengkapi dengan komputer modern dan akses internet cepat"
    },
    {
        nama: "Perpustakaan",
        gambar: "foto perpustakaan.jpeg",
        deskripsi: "Memiliki ribuan buku dan ruang baca yang nyaman"
    },
    {
        nama: "Lapangan Olahraga",
        gambar: "foto lapangan.jpeg",
        deskripsi: "Tempat untuk berolahraga seperti sepak bola dan bulu tangkis"
    },
    {
        nama: "Aula Serbaguna",
        gambar: "foto aula sebaguna.jpeg",
        deskripsi: "Digunakan untuk upacara dan kegiatan sekolah lainnya"
    }
];

const fasilitasGrid = document.getElementById('fasilitas-grid');

fasilitasData.forEach(item => {
    const fasilitasItem = document.createElement('div');
    fasilitasItem.className = 'fasilitas-item';
    fasilitasItem.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
    `;
    fasilitasGrid.appendChild(fasilitasItem);
});

// 5. Validasi dan pesan sukses untuk form kontak
const formKontak = document.getElementById('form-kontak');

formKontak.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda telah berhasil dikirim! Terima kasih telah menghubungi kami.');
    this.reset();
});