// Swiper 1 with autoplay
const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true, // continuous sliding
  autoplay: {
    delay: 2000, // slide every 2 seconds
    disableOnInteraction: false, // keeps autoplay running even after drag
  },
  scrollbar: {
    el: ".swiper1 .swiper-scrollbar",
    draggable: true,
  },
});

// Swiper 2 with different autoplay speed
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2500, // slide every 2.5 seconds
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper2 .swiper-scrollbar",
    draggable: true,
  },
});
// Swiper 3 with different autoplay speed
const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2500, // slide every 2.5 seconds
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper2 .swiper-scrollbar",
    draggable: true,
  },
});
// Swiper 0 with different autoplay speed
const swiper0 = new Swiper(".swiper0", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500, // slide every 2.5 seconds
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper2 .swiper-scrollbar",
    draggable: true,
  },
});