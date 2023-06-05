const thumbnail = new Swiper(".main-carousel", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 7,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 5,
      direction: "horizontal",
    },
    768: {
      slidesPerView: 4,
      direction: "horizontal",
    },
    992: {
      slidesPerView: 4,
      direction: "vertical",
    },
  },
});

const largeImg = new Swiper(".thumbnail-carousel", {
  // Optional parameters
  direction: "horizontal",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbnail,
  },
});
