const thumbnail = new Swiper(".thumbnail-carousel", {
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

const largeImg = new Swiper(".main-carousel", {
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

const sizeItem = document.querySelectorAll(".size-item");

sizeItem.forEach((item) => {
  item.addEventListener("click", () => {
    // Xóa class "active-size" khỏi tất cả các phần tử ".size-item"
    sizeItem.forEach((item) => {
      item.classList.remove("active-size");
    });

    // Thêm class "active-size" vào phần tử được nhấp vào
    item.classList.add("active-size");
  });
});

const inputEl = document.querySelector(".input");
const btnDown = document.querySelector(".btn-down");
const btnUp = document.querySelector(".btn-up");

let value = 1;
btnDown.addEventListener("click", () => {
  if (value > 1) {
    value--;
  }
  inputEl.value = value;
});

btnUp.addEventListener("click", () => {
  value++;
  inputEl.value = value;
});

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
