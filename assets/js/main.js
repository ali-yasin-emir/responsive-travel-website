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

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const root = document.querySelector(':root');
    const gcs = getComputedStyle(root);
    const headerHeight = gcs.getPropertyValue('--header-height');
    const hhArranged = parseFloat(headerHeight) * 16;

    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - hhArranged;
    const sectionId = section.getAttribute('id');
    const sectionClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    );

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? sectionClass.classList.add('active-link')
      : sectionClass.classList.remove('active-link');
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
