//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//Saat hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//Jalankan navigasi menu
function setupNavigation() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
      history.pushState(null, '', `#${targetId}`);
      navbarNav.classList.remove('active');
    });
  });
}

//Inisialisasi map saat section map dipanggil
function initMaps() {
  const overlayCandi = {
    "Fasilitas Kesehatan": fasilitasKesehatanCandi,
    "Fasilitas Pelayanan Umum": fasilitasPelayananUmumCandi,
    "Fasilitas Penginapan": fasilitasPenginapanCandi,
    "Fasilitas Perdagangan": fasilitasPerdaganganCandi,
    "Fasilitas Peribadatan": fasilitasPeribadatanCandi,
    "Fasilitas Transportasi": fasilitasTransportasiCandi,
    "Radius 3 KM Candi Gedong Songo": radiusCandi,
    "Batas Kabupaten": batasKabupatenLayer,
    "Batas Kecamatan": batasKecamatanLayer,
    "Batas Desa": batasDesaLayer,
    "Jalan Arteri": jalanArteriLayer,
    "Jalan Kolektor": jalanKolektorLayer,
    "Jalan Lokal": jalanLokalLayer,
    "Jalan Lain": jalanLainLayer,
    "Kawasan Wisata Candi Gedong Songo": kawasanCandi,
    "Desa Candi": desaCandi,
    "Desa di Kecamatan Bandungan": desaLayer
  };

  const overlayCelosia = {
    "Fasilitas Kesehatan": fasilitasKesehatanCelosia,
    "Fasilitas Pelayanan Umum": fasilitasPelayananUmumCelosia,
    "Fasilitas Penginapan": fasilitasPenginapanCelosia,
    "Fasilitas Perdagangan": fasilitasPerdaganganCelosia,
    "Fasilitas Peribadatan": fasilitasPeribadatanCelosia,
    "Fasilitas Transportasi": fasilitasTransportasiCelosia,
    "Radius 3 KM Taman Bunga Celosia": radiusCelosia,
    "Batas Kabupaten": batasKabupatenLayer,
    "Batas Kecamatan": batasKecamatanLayer,
    "Batas Desa": batasDesaLayer,
    "Jalan Arteri": jalanArteriLayer,
    "Jalan Kolektor": jalanKolektorLayer,
    "Jalan Lokal": jalanLokalLayer,
    "Jalan Lain": jalanLainLayer,
    "Kawasan Wisata Taman Bunga Celosia": kawasanCelosia,
    "Desa Candi": desaCandi,
    "Desa di Kecamatan Bandungan": desaLayer
  };

  mapCandi = L.map('map-candi', { fullscreenControl: true }).setView([-7.2099, 110.3420], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapCandi);
  L.control.layers(null, overlayCandi).addTo(mapCandi);
  mapCandi.on('enterFullscreen exitFullscreen', () => {
    setTimeout(() => mapCandi.invalidateSize(), 300);
  });

  mapCelosia = L.map('map-celosia', { fullscreenControl: true }).setView([-7.2251, 110.3461], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapCelosia);
  L.control.layers(null, overlayCelosia).addTo(mapCelosia);
  mapCelosia.on('enterFullscreen exitFullscreen', () => {
    setTimeout(() => mapCelosia.invalidateSize(), 300);
  });

  setTimeout(() => {
    mapCandi.invalidateSize();
    mapCelosia.invalidateSize();
  }, 300);
}

//Tampilkan section
function showSection(id) {
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }

  if (id === 'map') {
    document.getElementById('map-candi').innerHTML = "";
    document.getElementById('map-celosia').innerHTML = "";
    initMaps();
  } else {
    if (mapCandi) {
      mapCandi.remove();
      mapCandi = null;
    }
    if (mapCelosia) {
      mapCelosia.remove();
      mapCelosia = null;
    }
  }

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 30);
}

//Navigasi menu utama
function setupNavigation() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showSection(targetId);
      history.pushState(null, '', `#${targetId}`);

      // Nutup menu navigasi kalo mobile
      if (window.innerWidth <= 768) {
        navbarNav.classList.remove('active');
      }
    });
  });
}

//Jalankan saat halaman siap
window.addEventListener('DOMContentLoaded', () => {
  const initialId = location.hash ? location.hash.substring(1) : 'home';
  showSection(initialId);
  setupNavigation();
});

//Tombol back/forward browser
window.addEventListener('popstate', () => {
  const currentId = location.hash ? location.hash.substring(1) : 'home';
  showSection(currentId);
});

//Gambar fullscreen
document.querySelectorAll("img").forEach(img => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    const overlay = document.getElementById("imgFullscreenOverlay");
    const fullscreenImg = document.getElementById("fullscreenImg");
    fullscreenImg.src = img.src;
    overlay.style.display = "flex";
  });
});
