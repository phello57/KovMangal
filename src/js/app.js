import * as webp from "./modules/webP.js";
webp.isWebP; 


const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 60,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 10,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination"
  },
});

const swiperGlory = new Swiper(".mySwiperGlory", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 120,
  navigation: {
    nextEl: ".swiper-MyButton-next",
    prevEl: ".swiper-MyButton-prev",
  },
});
