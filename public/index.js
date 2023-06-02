const glide = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 4,
  breakpoints: {
    960: {
      perView: 4,
    },
    820: {
      perView: 3,
    },
    540: {
      perView: 2,
    },
  },
}).mount();
