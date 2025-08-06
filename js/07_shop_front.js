const filterBtn = document.querySelector(".product-top-btn");
const productCardGrid = document.querySelector(".product-container-items-prod");
const filterMenu = document.querySelector(".product-container-dropdown");

let click = 0;

filterBtn.addEventListener("click", () => {
  if (click == 0) {
    if (window.innerWidth <= 1920) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    if (window.innerWidth <= 1030) {
      productCardGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
    }
    if (window.innerWidth <= 800) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    filterMenu.style.display = "flex";
    click++;
  } else {
    filterMenu.style.display = "none";
    if (window.innerWidth <= 1920) {
      productCardGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
    }
    if (window.innerWidth <= 1030) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    if (window.innerWidth <= 1030) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
    click = 0;
  }
});
console.log(window.innerWidth);
