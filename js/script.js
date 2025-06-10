//Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

//Saat hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};

//Tampilan satu section berdasarkan id
function showSection(id) {
  document.querySelectorAll('.page-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }

  if (id === 'map' && typeof map !== 'undefined') {
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }

  //Scroll
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

      // Tutup hamburger menu jika aktif (untuk tampilan mobile)
      document.querySelector('.navbar-nav').classList.remove('active');
    });
  });
}

//Jalankan saat halaman siap
window.addEventListener('DOMContentLoaded', () => {
  const initialId = location.hash ? location.hash.substring(1) : 'home';
  showSection(initialId);
  setupNavigation();
  setupHamburger();
});

//Jalankan saat tombol back/forward browser diklik
window.addEventListener('popstate', () => {
  const currentId = location.hash ? location.hash.substring(1) : 'home';
  showSection(currentId);
});
