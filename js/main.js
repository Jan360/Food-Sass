const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});

/* Testimonial Slider Swiper */
const swiper = new Swiper(".myslider", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  autoHeight: true,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".custom-btn ion-icon, .custom-btn",
  },
});

/* Scroll Top */
const scrollTop = document.querySelector(".scroll-top");
// Нажатие кнопки перематывать вверх страницы
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
// Показать кнопку перемотки при прокрутке экрана на 300px
window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

/* Scroll Reveal */
// Смещение на 60px, продолжительность анимации, задержка перед анимацией, сбрасывать при прокрутке
const scroll = ScrollReveal({
  distance: "60px",
  duration: 2000,
  // delay: 400,
  reset: true,
});
// Направления появления элементов, интервал (задержка) между показом элементов как иконки
// <img src="./images/food-one.png" alt="" />
scroll.reveal(`.home .col:last-child, .icons .icon, .about .col:first-child, .menu .col`, {
  origin: "bottom",
  interval: 100,
});

scroll.reveal(
  `.home .col:first-child h1, .home .col:first-child .btn,.categories .col:first-child`,
  {
    origin: "left",
    interval: 150,
    // delay: 600,
  }
);

scroll.reveal(
  `.about .col:last-child h2, .about .col:last-child p, .about .col:last-child .btn,.categories .col:last-child`,
  {
    origin: "right",
    interval: 100,
  }
);
// Categories
scroll.reveal(`.categories .col:nth-child(2), .menu .btn`, {
  origin: "top",
});
// Testimonial
scroll.reveal(`.testimonial .col:first-child`, {
  origin: "left",
});

scroll.reveal(`.testimonial .col:last-child`, {
  origin: "right",
});
// Footer
scroll.reveal(`.footer .col div`, {
  origin: "top",
  interval: 100,
});
