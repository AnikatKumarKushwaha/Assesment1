const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();

    imgItem.classList.toggle("selected");

    imgBtns.forEach((item) => {
      if (item !== imgItem) {
        item.classList.remove("selected");
      }
    });
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const colorItems = document.querySelectorAll(".color-item");

  colorItems.forEach(function (item) {
    item.addEventListener("click", function () {
      colorItems.forEach(function (item) {
        item.classList.remove("ring", "tick");
        item.style.borderColor = "transparent";
      });

      const bgColor = window
        .getComputedStyle(this)
        .getPropertyValue("background-color");
      this.classList.add("ring", "tick");
      this.style.borderColor = bgColor;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const decreaseButton = document.querySelector(".decrease");
  const increaseButton = document.querySelector(".increase");
  const valueDisplay = document.querySelector(".value");

  decreaseButton.addEventListener("click", function () {
    let value = parseInt(valueDisplay.textContent);
    if (value > 0) {
      value--;
      valueDisplay.textContent = value;
    }
  });

  increaseButton.addEventListener("click", function () {
    let value = parseInt(valueDisplay.textContent);
    value++;
    valueDisplay.textContent = value;
  });
});

window.addEventListener("resize", slideImage);
