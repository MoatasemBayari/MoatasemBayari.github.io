const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');

navToggle?.addEventListener('click', () => {
  header?.classList.toggle('nav-open');
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    event.preventDefault();

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    header?.classList.remove('nav-open');
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    header?.classList.remove('nav-open');
  }
});
