  // Testimonial Slider
  const sliderContainer = document.querySelector('.testimonial-container');
  const cards = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentIndex = 0;
  
  // Create dots
  cards.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if(index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToTestimonial(index));
      dotsContainer.appendChild(dot);
  });

  function updateSlider() {
      cards.forEach((card, index) => {
          card.classList.remove('active');
          dotsContainer.children[index].classList.remove('active');
          if(index === currentIndex) {
              card.classList.add('active');
              dotsContainer.children[index].classList.add('active');
          }
      });
  }

  function goToTestimonial(index) {
      currentIndex = index;
      updateSlider();
  }

  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateSlider();
  }

  // Auto-advance every 7 seconds
  let autoSlide = setInterval(nextTestimonial, 7000);

  // Pause on hover
  sliderContainer.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlide));
  sliderContainer.parentElement.addEventListener('mouseleave', () => {
      autoSlide = setInterval(nextTestimonial, 7000);
  });
  // Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close menu on click outside
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Close menu on link click
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});
/* Add to script.js */
// Initialize Particles
particlesJS('particles-js', {
    particles: {
      number: { value: 80 },
      color: { value: '#00ff88' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      }
    }
  });
  
  // Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  document.querySelectorAll('.card, .testimonial-card').forEach((el) => {
    observer.observe(el);
  });
  
  // Dynamic Theme Switching
  const themeToggle = document.createElement('div');
  themeToggle.className = 'theme-toggle';
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
