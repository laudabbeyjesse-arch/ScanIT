// Reveal elements on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll(
    '.feature-card, .screenshot-card, .highlight-card, .contact-card, .download-btn'
  );

  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

function setActiveLink() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for nav height
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
