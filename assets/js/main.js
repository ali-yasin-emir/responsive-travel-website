/*=============== SHOW MENU ===============*/

const navToggle = document.getElementById('nav__toggle');
const navMenu = document.getElementById('nav__menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navClose = document.getElementById('nav__close');

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
  const header = document.getElementById('header');
  window.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/

const scrollUpFunc = () => {
  const scrollUp = document.querySelector('.scroll-up');
  const scrollY = window.scrollY;
  console.log(scrollY);
  scrollY >= 200 ? (scrollUp.id = 'show-scroll') : (scrollUp.id = null);
};

window.addEventListener('scroll', scrollUpFunc);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
