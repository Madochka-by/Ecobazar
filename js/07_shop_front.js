const filterBtn = document.querySelector(".product-top-btn");
const productCardGrid = document.querySelector(".product-container-items-prod");
const filterMenu = document.querySelector(".product-container-dropdown");

let click = 0;

function setGridColumns() {
  if (click === 0) {
    if (window.innerWidth <= 708) {
      productCardGrid.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (window.innerWidth <= 800) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    } else if (window.innerWidth <= 1030) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    } else {
      productCardGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
    }
  } else {
    if (window.innerWidth <= 708) {
      productCardGrid.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (window.innerWidth <= 800) {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    } else if (window.innerWidth <= 1030) {
      productCardGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
    } else {
      productCardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    }
  }
}

window.addEventListener("resize", setGridColumns);

filterBtn.addEventListener("click", () => {
  if (click === 0) {
    filterMenu.style.display = "flex";
    click = 1;
  } else {
    filterMenu.style.display = "none";
    click = 0;
  }
  setGridColumns();
});

console.log(window.innerWidth);
