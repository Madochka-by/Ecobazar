const URL =
  "https://ecobazardb-default-rtdb.firebaseio.com/CATALOG/vegetables.json";
const FeaturedProductsItem = document.querySelector(
  ".margin-featureblock-goods-cards"
);
console.log(FeaturedProductsItem);
fetch(URL)
  .then((response) => response.json())
  .then((response) => {
    let arrayWithName = [
      "Big Potatos",
      "Ladies Finger",
      "Red Tomato",
      "Red Capsicum",
    ];
    let arrayOfVegetables = Object.values(response);
    arrayOfVegetables.forEach((Element) => {
      if (arrayWithName.includes(Element.name)) {
        let { name, price, img, rating } = Element;
        toHTMLFeautered(name, price, img, rating);
      }
    });
  });

function toHTMLFeautered(name, price, img, rating) {
  let string = ` <div class="margin-featureblock-goods-cards-frame">
  
              <div class="margin-featureblock-goods-cards-frame-hover">
                <img src="/img/Add To wishlist.png" alt="" class="margin-featureblock-goods-cards-frame-hover__wishlist">
                <img src="/img/Quick View.png" alt="" class="margin-featureblock-goods-cards-frame-hover__view">
              </div>
              <div class="margin-featureblock-goods-cards-frame-sale">Sale 50%</div>
              <div class="margin-featureblock-goods-cards-frame-img">
                <img src="${img}" alt="" class="margin-featureblock-goods-cards-frame-img__image">
              </div>
              <div class="margin-featureblock-goods-cards-frame-info">
                <div class="margin-featureblock-goods-cards-frame-info-left">
                  <p class="margin-featureblock-goods-cards-frame-info-left__p">${name}</p>
                  <p class="margin-featureblock-goods-cards-frame-info-left__price">${price}<span>$20.99</span></p>
                  <div class="margin-featureblock-goods-cards-frame-info-left-stars">
                    <span id="star1">&#x2605</span>
                    <span id="star2">&#x2605</span>
                    <span id="star3">&#x2605</span>
                    <span id="star4">&#x2605</span>
                    <span id="star5">&#x2605</span>
                  </div>
                </div>
                <div class="margin-featureblock-goods-cards-frame-info-right">
                  <div class="margin-featureblock-goods-cards-frame-info-right-circle">
                    <img src="/img/Bag.png" alt="" class="margin-featureblock-goods-cards-frame-info-right-circle__img">
                  </div>
                </div>
              </div>
            </div>`;
  FeaturedProductsItem.innerHTML += string;
}
