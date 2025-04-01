// Load components dynamically
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('/components/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
      setupMobileMenu();
    });

  // Load footer
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    });

  // Mobile menu toggle functionality
  function setupMobileMenu() {
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    menuButton.className = 'md:hidden text-gray-700 p-2';
    menuButton.addEventListener('click', toggleMobileMenu);
    
    const header = document.querySelector('header');
    if (header) {
      const container = header.querySelector('.container');
      container.insertBefore(menuButton, container.firstChild);
    }
  }

  function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('hidden');
      nav.classList.toggle('block');
      nav.classList.toggle('absolute');
      nav.classList.toggle('bg-white');
      nav.classList.toggle('w-full');
      nav.classList.toggle('left-0');
      nav.classList.toggle('top-16');
      nav.classList.toggle('p-4');
      nav.classList.toggle('shadow-md');
    }
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});