// Toggle mobile nav
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dropdown menu display
const listItems = document.querySelectorAll('.nav-links li');

listItems.forEach(li => {
  li.addEventListener('mouseenter', () => {
    const dd = li.querySelector('.dropdown');
    if (dd) dd.style.display = 'block';
  });

  li.addEventListener('mouseleave', () => {
    const dd = li.querySelector('.dropdown');
    if (dd) dd.style.display = 'none';
  });
});

// Scroll-to-top button
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg-color').trim();

  if (currentBg === '#102030') {
    // Light mode
    root.style.setProperty('--bg-color', '#f5f5f5');
    root.style.setProperty('--text-color', '#111827');
    root.style.setProperty('--primary-color', '#0b6cd4');
    root.style.setProperty('--secondary-color', '#1e90ff');
    root.style.setProperty('--card-bg', '#ffffff');
    root.style.setProperty('--card-border', '#0b6cd4');
    root.style.setProperty('--banner-bg', 'linear-gradient(135deg, #f0f0f0, #d0d0d0)');
  } else {
    // Dark mode
    root.style.setProperty('--bg-color', '#102030');
    root.style.setProperty('--text-color', '#eaeaea');
    root.style.setProperty('--primary-color', '#1e90ff');
    root.style.setProperty('--secondary-color', '#5ad7c0');
    root.style.setProperty('--card-bg', '#111827');
    root.style.setProperty('--card-border', '#5ad7c0');
    root.style.setProperty('--banner-bg', 'linear-gradient(135deg, #0b0b0b, #102030)');
  }
});
