document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Lógica do Carrossel Automático ---
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const carouselContainer = document.querySelector('.carousel-container');

  let currentIndex = 0;
  const intervalTime = 4000; // Muda automaticamente a cada 4 segundos
  let slideInterval;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoPlay() {
    clearInterval(slideInterval);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'));
      showSlide(index);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  carouselContainer.addEventListener('mouseenter', stopAutoPlay);
  carouselContainer.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();

  // --- 2. Lógica do Accordion (Práticas Diárias) ---
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const span = header.querySelector('span');
      item.classList.toggle('active');
      span.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });

  // --- 3. Lógica dos Botões de Curtir (Inspiração) ---
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.style.background = '#fbd38d';
    });
  });
});