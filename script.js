function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  mobileMenu.classList.toggle('active');
  overlay.classList.toggle('active');
}