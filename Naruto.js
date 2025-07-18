const openBtn = document.getElementById('openSearch');
const closeBtn = document.getElementById('closeSearch');
const searchOverlay = document.getElementById('searchOverlay');

openBtn.addEventListener('click', () => {
  searchOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
});
// Accordéon ouverture/fermeture
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Toggle
    content.style.display = content.style.display === 'flex' ? 'none' : 'flex';

    // Fermer les autres
    document.querySelectorAll('.accordion-content').forEach(other => {
      if (other !== content) {
        other.style.display = 'none';
      }
    });
  });
});
  const hamburger = document.getElementById('hamburger');
  const sideMenu = document.getElementById('sideMenu');
  const header = document.querySelector('.menu-header');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('open');
    header.classList.toggle('menu-open');
  });
