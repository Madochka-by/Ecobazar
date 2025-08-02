const productFrame = document.querySelector(".product-container-items-prod");
const productRating = document.querySelectorAll(
  ".product-container-items-prod-card-info-left-rating"
);
const countOfProduct = document.getElementById("count");
const URL = "https://ecobazardb-default-rtdb.firebaseio.com/CATALOG.json";

let counterOfCardProduct = 0;

async function DataParsing() {
  productFrame.innerHTML = "loading...";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    productFrame.innerHTML = "";
    return data;
  } catch (err) {
    productFrame.innerHTML = "Ошибка";
  }
}

async function categorization() {
  const data = await DataParsing();
  const keys = Object.keys(data);
  keys.forEach((Element) => {
    data[Element].forEach((fields) => {
      const { img, name, price, rating, sale, stock } = fields;
      console.log(typeof fields);
      toHTML(img, name, price, rating, sale, stock);
    });
  });
}
categorization();

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
                   sale == true
                     ? ` <img src="/img/sale50.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
                     : ""
                 }
                     ${
                       stock == true
                         ? ` <img src="/img/out of stock.png" alt="" class="product-container-items-prod-card-frame-properties__img">`
                         : ""
                     }
                </div>
                <div class="product-container-items-prod-card-frame-hover">
                  <div class="product-container-items-prod-card-frame-hover-frameheart"></div>
                  <div class="product-container-items-prod-card-frame-hover-frameview"></div>
                </div>
                <img
                  src="${img}"
                  alt=""
                  class="product-container-items-prod-card-frame__img"
                />
              </div>
              <div class="product-container-items-prod-card-info">
                <div class="product-container-items-prod-card-info-left">
                  <p class="product-container-items-prod-card-info-left__name">${name}</p>
                  <p class="product-container-items-prod-card-info-left__price">${price}</p>
                  <div class="product-container-items-prod-card-info-left-rating">
                    
                    ${renderRating(rating)}
                  </div>
                </div>
                <div class="product-container-items-prod-card-info-right">
                    <div class="product-container-items-prod-card-info-right-frame">
                    </div>
                </div>
              </div>
            </div>
        `;
}
