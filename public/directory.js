const btnEl = document.querySelectorAll(".ega-pagi__item");

btnEl.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("current")) {
      item.classList.remove("current");
    } else {
      item.classList.add("current");
    }
  });
});
