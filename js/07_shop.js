// const productFrame = document.querySelector(".product-container-items-prod");
// const productRating = document.querySelectorAll(
//   ".product-container-items-prod-card-info-left-rating"
// );
// const countOfProduct = document.getElementById("count");

// const URL = "https://ecobazardb-default-rtdb.firebaseio.com/CATALOG.json";

// const inputSearch = document.querySelector(".margin1-middle-search__inp");
// const buttonSerach = document.querySelector(".margin1-middle-search__btn");

// const productFilterButton = document.querySelector(".product-top-btn");

// let counterOfCardProduct = 0;

// let DATA = [];
// let KEYS = [];
// let CURRENTDATA = [];

// async function DataParsing() {
//   productFrame.innerHTML = "loading...";
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     productFrame.innerHTML = "";
//     DATA = data;
//     KEYS = Object.keys(data);
//     return data;
//   } catch (err) {
//     productFrame.innerHTML = `Ошибка: ${err}`;
//   }
// }

// async function categorization() {
//   const data = await DataParsing();
//   KEYS.forEach((Element) => {
//     data[Element].forEach((fields) => {
//       const { img, name, price, rating, sale, stock } = fields;
//       toHTML(img, name, price, rating, sale, stock);
//     });
//   });
// }
// categorization();

// const filteredByInputValue = (value) => {
//   counterOfCardProduct = 0;
//   KEYS.forEach((Element) => {
//     DATA[Element].forEach((fields) => {
//       if (fields.name.toLowerCase().includes(value.toLowerCase().trim())) {
//         const { img, name, price, rating, sale, stock } = fields;
//         toHTML(img, name, price, rating, sale, stock);
//       }
//     });
//   });
// };

// buttonSerach.addEventListener("click", () => {
//   filteredByInputValue(inputSearch.value);
// });

// inputSearch.addEventListener("input", () => {
//   if (inputSearch.value == "") {
//     filteredByInputValue(inputSearch.value);
//   }
// });

// function renderRating(rating) {
//   let stars = "";
//   for (let i = 1; i <= 5; i++) {
//     stars += `<span ${i <= rating ? 'id="orangeSpan"' : ""}>&#x2605</span>`;
//   }
//   return stars;
// }

// function toHTML(img, name, price, rating, sale, stock) {
//   counterOfCardProduct++;
//   countOfProduct.textContent = counterOfCardProduct;
//   productFrame.innerHTML += `
//         <div class="product-container-items-prod-card">
//               <div class="product-container-items-prod-card-frame">
//                  <div class="product-container-items-prod-card-frame-properties">
//                  ${
//                    sale == true
//                      ? ` <img src="/img/sale50.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
//                      : ""
//                  }
//                      ${
//                        stock == true
//                          ? ` <img src="/img/out of stock.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
//                          : ""
//                      }
//                 </div>
//                 <div class="product-container-items-prod-card-frame-hover">
//                   <div class="product-container-items-prod-card-frame-hover-frameheart"></div>
//                   <div class="product-container-items-prod-card-frame-hover-frameview"></div>
//                 </div>
//                 <img
//                   src="${img}"
//                   alt=""
//                   class="product-container-items-prod-card-frame__img"
//                 />
//               </div>
//               <div class="product-container-items-prod-card-info">
//                 <div class="product-container-items-prod-card-info-left">
//                   <p class="product-container-items-prod-card-info-left__name">${name}</p>
//                   <p class="product-container-items-prod-card-info-left__price">$${price}</p>
//                   <div class="product-container-items-prod-card-info-left-rating">
//                     ${renderRating(rating)}
//                   </div>
//                 </div>
//                 <div class="product-container-items-prod-card-info-right">
//                     <div class="product-container-items-prod-card-info-right-frame">
//                     </div>
//                 </div>
//               </div>
//             </div>
//         `;
// }

// const inputRangeFilter = document.querySelectorAll(
//   ".product-container-dropdown-container-ranger-slider-input input"
// );
// const minRange = document.getElementById("min");
// const maxRange = document.getElementById("max");
// const progressRange = document.querySelector(
//   ".product-container-dropdown-container-ranger-slider-progress"
// );

// inputRangeFilter.forEach((input) => {
//   input.addEventListener("input", (event) => {
//     productFrame.innerHTML = "";
//     counterOfCardProduct = 0;
//     let min = +parseFloat(inputRangeFilter[0].value).toFixed(2),
//       max = +parseFloat(inputRangeFilter[1].value).toFixed(2);

//     if (max - min < 5) {
//       if (
//         event.target.className ===
//         "product-container-dropdown-container-ranger-slider-input-min"
//       ) {
//         inputRangeFilter[0].value = max - 5;
//       } else {
//         inputRangeFilter[1].value = min + 5;
//       }
//     } else {
//       minRange.textContent = min;
//       maxRange.textContent = max;
//       progressRange.style.left = (min / inputRangeFilter[0].max) * 100 + "%";
//       progressRange.style.right =
//         100 - (max / inputRangeFilter[1].max) * 100 + "%";
//     }
//     KEYS.forEach((key) => {
//       DATA[key].forEach((fields) => {
//         const { img, name, price, rating, sale, stock } = fields;
//         if (price > min && price < max) {
//           toHTML(img, name, price, rating, sale, stock);
//         }
//       });
//     });
//   });
// });

// const radioFilter = document.querySelectorAll(
//   ".product-container-dropdown-container-allcateg"
// );

// radioFilter.forEach((radio) => {
//   radio.addEventListener("change", (event) => {
//     counterOfCardProduct = 0;
//     productFrame.innerHTML = "";

//     if (DATA[event.target.value]) {
//       DATA[event.target.value].forEach((fields) => {
//         const { img, name, price, rating, sale, stock } = fields;
//         toHTML(img, name, price, rating, sale, stock);
//       });
//     }
//   });
// });
const productFrame = document.querySelector(".product-container-items-prod");
const countOfProduct = document.getElementById("count");
const inputSearch = document.querySelector(".margin1-middle-search__inp");
const buttonSearch = document.querySelector(".margin1-middle-search__btn");
const inputRangeFilter = document.querySelectorAll(
  ".product-container-dropdown-container-ranger-slider-input input"
);
const minRange = document.getElementById("min");
const maxRange = document.getElementById("max");
const progressRange = document.querySelector(
  ".product-container-dropdown-container-ranger-slider-progress"
);
const radioFilter = document.querySelectorAll(
  ".product-container-dropdown-container-allcateg"
);
const countOfProductInCategories = document.querySelectorAll(
  ".product-container-dropdown-container-allcateg__count"
);
const countOfProductInCategoriesALL = document.querySelector(
  ".product-container-dropdown-container-allcateg__countAll"
);

const URL = "https://ecobazardb-default-rtdb.firebaseio.com/CATALOG.json";

let DATA = {};
let KEYS = [];
let CURRENT_CATEGORY = "all";
let counterOfCardProduct = 0;

let minPrice = 0;
let maxPrice = 1000;
let searchValue = "";

function renderRating(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<span ${i <= rating ? 'id="orangeSpan"' : ""}>&#x2605</span>`;
  }
  return stars;
}

function toHTML(img, name, price, rating, sale, stock) {
  counterOfCardProduct++;
  countOfProduct.textContent = counterOfCardProduct;
  productFrame.innerHTML += `
    <div class="product-container-items-prod-card">
      <div class="product-container-items-prod-card-frame">
        <div class="product-container-items-prod-card-frame-properties">
          ${
            sale
              ? `<img src="/img/sale50.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
              : ""
          }
          ${
            stock
              ? `<img src="/img/out of stock.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
              : ""
          }
        </div>
        <div class="product-container-items-prod-card-frame-hover">
          <div class="product-container-items-prod-card-frame-hover-frameheart"></div>
          <div data-index="${name}" class="product-container-items-prod-card-frame-hover-frameview"></div>
        </div>
        <img src="${img}" alt="" class="product-container-items-prod-card-frame__img" />
      </div>
      <div class="product-container-items-prod-card-info">
        <div class="product-container-items-prod-card-info-left">
          <p class="product-container-items-prod-card-info-left__name">${name}</p>
          <p class="product-container-items-prod-card-info-left__price">$${price}</p>
          <div class="product-container-items-prod-card-info-left-rating">
            ${renderRating(rating)}
          </div>
        </div>
        <div class="product-container-items-prod-card-info-right">
          <div class="product-container-items-prod-card-info-right-frame"></div>
        </div>
      </div>
    </div>`;
}

function applyAllFilters() {
  productFrame.innerHTML = "";
  counterOfCardProduct = 0;

  const dataToUse =
    CURRENT_CATEGORY === "all"
      ? KEYS.flatMap((key) => DATA[key])
      : DATA[CURRENT_CATEGORY];

  dataToUse.forEach(({ img, name, price, rating, sale, stock }) => {
    if (
      name.toLowerCase().includes(searchValue.toLowerCase().trim()) &&
      price >= minPrice &&
      price <= maxPrice
    ) {
      toHTML(img, name, price, rating, sale, stock);
    }
  });
}

async function init() {
  productFrame.innerHTML = "Loading...";
  try {
    const res = await fetch(URL);
    const data = await res.json();
    DATA = data;
    KEYS = Object.keys(data);

    document.querySelector('input[type="radio"][value="all"]').checked = true;

    applyAllFilters();

    KEYS.map((keys) => DATA[keys]).forEach((value, index) => {
      countOfProductInCategories[index].textContent = `(${value.length})`;
    });
    countOfProductInCategoriesALL.textContent = `(${counterOfCardProduct})`;
  } catch (e) {
    console.log(e);
    productFrame.innerHTML = `Ошибка: ${e}`;
  }
}

buttonSearch.addEventListener("click", () => {
  searchValue = inputSearch.value;
  applyAllFilters();
});

inputSearch.addEventListener("input", () => {
  if (inputSearch.value === "") {
    searchValue = "";
    applyAllFilters();
  }
});

inputRangeFilter.forEach((input) => {
  input.addEventListener("input", (event) => {
    let min = +parseFloat(inputRangeFilter[0].value).toFixed(2);
    let max = +parseFloat(inputRangeFilter[1].value).toFixed(2);

    if (max - min < 5) {
      if (
        event.target.classList.contains(
          "product-container-dropdown-container-ranger-slider-input-min"
        )
      ) {
        inputRangeFilter[0].value = max - 5;
      } else {
        inputRangeFilter[1].value = min + 5;
      }
    } else {
      minPrice = min;
      maxPrice = max;
      minRange.textContent = min;
      maxRange.textContent = max;
      progressRange.style.left = (min / inputRangeFilter[0].max) * 100 + "%";
      progressRange.style.right =
        100 - (max / inputRangeFilter[1].max) * 100 + "%";
      applyAllFilters();
    }
  });
});

radioFilter.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    CURRENT_CATEGORY = event.target.value;
    console.log(CURRENT_CATEGORY);
    applyAllFilters();
  });
});

init();

const modalWindow = document.querySelector(".overlay-modal");
const overlay = document.querySelector(".overlay");

const overlayFilterBrightness = overlay.querySelectorAll(
  ":scope > *:not(.overlay-modal)"
);

const plusGoodOfModal = document.querySelector(
  ".overlay-modal-frame-right-block-inputs-add__plus"
);
const minusGoodOfModal = document.querySelector(
  ".overlay-modal-frame-right-block-inputs-add__minus"
);
let counterOfProductModel = 1;

document.addEventListener("click", (event) => {
  let indexOfProduct = event.target.dataset.index;
  let closeModalWindow = event.target.closest(".overlay-modal-exit__img");

  let countOfProductModalWindow = document.querySelector(
    ".overlay-modal-frame-right-block-inputs-add span"
  );

  if (event.target.id == "Plus") {
    countOfProductModalWindow.textContent = ++counterOfProductModel;
  } else if (event.target.id == "Minus") {
    if (counterOfProductModel > 1) {
      countOfProductModalWindow.textContent = --counterOfProductModel;
    }
  }

  let categoryOfProduct;

  KEYS.flatMap((value) => DATA[value]).forEach((Element) => {
    if (Element.name.includes(indexOfProduct)) {
      overlayFilterBrightness.forEach((el) => {
        el.style.filter = "brightness(0.5)";
      });
      overlay.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
      overlay.style.position = "fixed";
      modalWindow.style.display = "flex";
      const { img, name, price, rating, sale, stock } = Element;
      pullModal(img, name, price, rating, sale, stock, categoryOfProduct);
    }
  });
  if (closeModalWindow) {
    overlayFilterBrightness.forEach((el) => {
      el.style.filter = "brightness(1)";
    });
    overlay.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    overlay.style.position = "relative";
    modalWindow.style.display = "none";
  }
});

function pullModal(img, name, price, rating, sale, stock, category) {
  modalWindow.innerHTML = `
  <div class="overlay-modal-BLOCK">
          <div class="overlay-modal-exit">
            <img src="/img/Close.png" alt="" class="overlay-modal-exit__img" />
          </div>
          <div class="overlay-modal-frame">
            <div class="overlay-modal-frame-left">
              <img
                src="${img}"
                alt=""
                class="overlay-modal-frame-left__image"
              />
            </div>
            <div class="overlay-modal-frame-right">
              <div class="overlay-modal-frame-right-block">
                <div class="overlay-modal-frame-right-block-heading">
                  <h1 class="overlay-modal-frame-right-block-heading__text">
                    ${name}
                  </h1>
          ${
            stock
              ? `<img src="/img/out of stock.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
              : `<img
                    src="/img/Stock Status.png"
                    alt=""
                    class="overlay-modal-frame-right-block-heading__image"
                  />`
          }
                  
                </div>
                <div class="overlay-modal-frame-right-block-rating">
                  <div class="overlay-modal-frame-right-block-rating__stars">
                    ${renderRating(rating)}
                  </div>
                  <p class="overlay-modal-frame-right-block-rating__text">
                    4 Review
                  </p>
                  <span id="point">•</span>
                  <p class="overlay-modal-frame-right-block-rating_text">
                    <span class="span">SKU:</span> 2,51,594
                  </p>
                </div>
                <div class="overlay-modal-frame-right-block-price">
                  <p class="overlay-modal-frame-right-block-price__text">
                   $${price}
                  </p>
                   ${
                     sale
                       ? `<img src="/img/sale50.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
                       : ``
                   }
                </div>
              </div>
              <hr />
              <div class="overlay-modal-frame-right-block">
                <div class="overlay-modal-frame-right-block-top">
                  <div class="overlay-modal-frame-right-block-top-left">
                    <p class="overlay-modal-frame-right-block-top-left__text">
                      Brand:
                    </p>
                    <img
                      src="/img/brand.png"
                      alt=""
                      class="overlay-modal-frame-right-block-top-left__img"
                    />
                  </div>
                  <div class="overlay-modal-frame-right-block-top-right">
                    <p class="overlay-modal-frame-right-block-top-right__text">
                      Share item:
                    </p>
                    <div
                      class="overlay-modal-frame-right-block-top-right-share"
                    >
                      <div
                        class="overlay-modal-frame-right-block-top-right-share__imgf"
                      ></div>
                      <div
                        class="overlay-modal-frame-right-block-top-right-share__imgt"
                      ></div>
                      <div
                        class="overlay-modal-frame-right-block-top-right-share__imgp"
                      ></div>
                      <div
                        class="overlay-modal-frame-right-block-top-right-share__imgi"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="overlay-modal-frame-right-block-bot">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                  consequat nec, ultrices et ipsum. Nulla varius magna a
                  consequat pulvinar.
                </div>
              </div>
              <hr />
              <div class="overlay-modal-frame-right-block">
                <div class="overlay-modal-frame-right-block-inputs">
                  <div class="overlay-modal-frame-right-block-inputs-add">
                    <img
                      src="/img/Minus.png"
                      alt=""
                      class="overlay-modal-frame-right-block-inputs-add__minus"
                      id="Minus"
                    />
                    <span >1</span>
                    <img
                      src="/img/Plus.png"
                      alt=""
                      class="overlay-modal-frame-right-block-inputs-plus"
                      id="Plus"
                    />
                  </div>
                  <div class="overlay-modal-frame-right-block-inputs-btn">
                    <p class="overlay-modal-frame-right-block-inputs-btn__text">
                      Add to Cart
                    </p>
                    <img
                      src="/img/Add To Cart Hover.png"
                      alt=""
                      class="overlay-modal-frame-right-block-inputs-btn__img"
                    />
                  </div>
                  <div class="overlay-modal-frame-right-block-inputs-heart">
                    <img
                      src="/img/ButtonHeart.png"
                      alt=""
                      class="overlay-modal-frame-right-block-inputs-heart"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div class="overlay-modal-frame-right-block">
                <div class="overlay-modal-frame-right-block-top">
                  <p class="overlay-modal-frame-right-block-top__text">
                    Category: <span>${category}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
}
