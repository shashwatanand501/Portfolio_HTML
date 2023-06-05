const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Scroll to section when clicking on a menu item
const scrollToSection = (event) => {
  event.preventDefault();
  const target = event.target;
  const id = target.getAttribute('href');
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

menuLinks.addEventListener('click', (event) => {
  if (event.target.matches('.navbar__links')) {
    scrollToSection(event);
  }
});
