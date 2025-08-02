const filterBtn = document.querySelector(".product-top-btn");
const productCardGrid = document.querySelector(".product-container-items-prod");
const filterMenu = document.querySelector(".product-container-dropdown");

let click = 0;

filterBtn.addEventListener("click", () => {
  if (click == 0) {
    productCardGrid.style.gridTemplateColumns = "repeat(3, 25%)";
    filterMenu.style.display = "flex";
    click++;
  } else {
    filterMenu.style.display = "none";
    productCardGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
    click = 0;
  }
});
