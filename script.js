// Ambil elemen-elemen yang diperlukan
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Tambahkan event listener ke tombol burger
burger.addEventListener('click', () => {
    // Toggle class 'active' untuk menampilkan/menyembunyikan navigasi
    navLinks.classList.toggle('active');
});
document.querySelector('footer p').innerHTML = `Copy Right By Toko Kitab Pesantren &copy; ${new Date().getFullYear()}`;
