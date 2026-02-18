// =============================
// HERO SLIDER
// =============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

function autoSlide(){
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(autoSlide, 4000);


// =============================
// MENU MOVIL
// =============================

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");
const overlay = document.getElementById("menuOverlay");

if(toggle && nav && overlay){

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });




}

function toggleMenu(){
  document.querySelector(".nav").classList.toggle("active");
}
// =============================
// CAROUSEL DESTACADOS
// =============================

// =============================
const track = document.querySelector(".featured-track");
const cards = document.querySelectorAll(".featured .card");
const btnNext = document.querySelector(".arrow.right");
const btnPrev = document.querySelector(".arrow.left");
const dotsContainer = document.querySelector(".featured-dots");

if(track && cards.length){

  const visibleCards = 3;
  let currentIndex = visibleCards;
  const totalOriginal = cards.length;

  // 🔥 Clonar últimas cards al inicio
  for(let i = totalOriginal - visibleCards; i < totalOriginal; i++){
    const clone = cards[i].cloneNode(true);
    track.prepend(clone);
  }

  // 🔥 Clonar primeras cards al final
  for(let i = 0; i < visibleCards; i++){
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }

  const allCards = document.querySelectorAll(".featured .card");

  // =============================
  // CREAR DOTS
  // =============================
  const totalSlides = totalOriginal - visibleCards + 1;

  for(let i = 0; i < totalSlides; i++){
    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".featured-dots span");

  function updateDots(){
    let realIndex = currentIndex - visibleCards;

    if(realIndex < 0) realIndex = totalSlides - 1;
    if(realIndex >= totalSlides) realIndex = 0;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[realIndex].classList.add("active");
  }

  function updatePosition(transition = true){

  const container = document.querySelector(".featured");
  const gap = parseInt(getComputedStyle(track).gap) || 0;
  const cardWidth = allCards[0].offsetWidth + gap;

  // 🔥 Centrado automático en móvil
  let offset = 0;

  if(window.innerWidth <= 768){
    offset = (container.offsetWidth - allCards[0].offsetWidth) / 2;
  }

  track.style.transition = transition ? "transform .6s ease" : "none";
  track.style.transform =
    `translateX(-${cardWidth * currentIndex - offset}px)`;

  updateDots();
}


  updatePosition(false);
  window.addEventListener("resize", () => {
  updatePosition(false);
});


  function next(){
    currentIndex++;
    updatePosition();

    if(currentIndex === allCards.length - visibleCards){
      setTimeout(() => {
        currentIndex = visibleCards;
        updatePosition(false);
      }, 600);
    }
  }

  function prev(){
    currentIndex--;
    updatePosition();

    if(currentIndex === 0){
      setTimeout(() => {
        currentIndex = totalOriginal;
        updatePosition(false);
      }, 600);
    }
  }

  // Flechas
  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);

  // Click en dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i + visibleCards;
      updatePosition();
    });
  });

  setInterval(next, 3500);
}







/**ABOUT */

const aboutSection = document.querySelector(".about");
const aboutImg = document.querySelector(".about-img");
const aboutText = document.querySelector(".about-text");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      aboutImg.classList.add("show");
      aboutText.classList.add("show");
    }
  });
}, { threshold: 0.3 });

if(aboutSection){
  observer.observe(aboutSection);
}



const reservation = document.querySelector(".reservation");
const reservationContent = document.querySelector(".reservation-content");

const reservationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      reservationContent.classList.add("show");
    }
  });
}, { threshold: 0.3 });

if(reservation){
  reservationObserver.observe(reservation);
}



const reservationSection = document.querySelector(".reservation");

const observerReservation = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      reservationSection.classList.add("show");
      observerReservation.unobserve(reservationSection); // 🔥 solo una vez
    }
  });
}, { threshold: 0.3 });

observerReservation.observe(reservationSection);
