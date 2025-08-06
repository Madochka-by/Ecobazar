const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const wrapper = document.querySelector(".bg-container-wrapper");
const totalSlides = document.querySelectorAll(
  ".bg-container-wrapper-frame"
).length;
const circle = document.querySelectorAll(".bg-block__circle");
let currentIndex = 0;
function updateSlider() {
  const offset = (-currentIndex * 100) / totalSlides;
  wrapper.style.transform = `translateX(${offset}%)`;
  circle.forEach((Element, i) => {
    Element.style.background = "rgba(180, 204, 180, 1)";
    if (currentIndex === i) {
      Element.style.background = "rgba(0, 178, 7, 1)";
    }
  });
}
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

const cards = [
  ...document.querySelectorAll(".margin-featureblock-feature-items"),
];
const backGround = document.querySelectorAll(
  ".margin-featureblock-feature-items-img"
);
const icon = document.querySelectorAll(
  ".margin-featureblock-feature-items-img__icon"
);

window.addEventListener("mouseover", (event) => {
  let over = cards.indexOf(
    event.target.closest(".margin-featureblock-feature-items")
  );
  cards.forEach((Element, i) => {
    backGround[i].style.backgroundImage = 'url("/img/lipNonActive.png")';
    Element.style.borderBottom = "1px solid rgba(204, 204, 204, 1)";
    icon[i].src = `/img/Icon${i + 1}.png`;
  });
  if (event.target.dataset.type == "bg") {
    backGround[over].style.backgroundImage = 'url("/img/lipActive.png")';
    cards[over].style.borderBottom = "3px solid rgba(0, 178, 7, 1)";
    icon[over].src = `/img/Icon${over + 1}Active.png`;
  }
});

const hoverForGoods = document.querySelectorAll(
  ".margin-featureblock-goods-cards-frame-hover"
);
const cardsForGoods = [
  ...document.querySelectorAll(".margin-featureblock-goods-cards-frame"),
];
const circleForGoods = document.querySelectorAll(
  ".margin-featureblock-goods-cards-frame-info-right-circle"
);
const bagForGoods = document.querySelectorAll(
  ".margin-featureblock-goods-cards-frame-info-right-circle__img"
);
window.addEventListener("mouseover", (event) => {
  hoverForGoods.forEach((Element, i) => {
    Element.style.display = "none";
    circleForGoods[i].style.background = "#F2F2F2";
    bagForGoods[i].src = "/img/Bag.png";
  });
  let closeElement = event.target.closest(
    ".margin-featureblock-goods-cards-frame"
  );
  if (closeElement) {
    let indexGoods = cardsForGoods.indexOf(closeElement);
    hoverForGoods[indexGoods].style.display = "flex";
    circleForGoods[indexGoods].style.background = "#00B207";
    bagForGoods[indexGoods].src = "/img/BagActive.png";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const countdownDate = new Date("2025-08-06T17:10:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

/////////////////////////////////////////////////////////////////////////
const nextBlogBtn = document.getElementById("nextBlog");
const prevBlogBtn = document.getElementById("prevBlog");
const sliderBlog = document.querySelector(".margin7-wrapper-slider");
const wrapperBlog = document.querySelectorAll(
  ".margin7-wrapper-slider-card"
).length;

let indexOfCardBlog = 0;

function rewind() {
  const slide = (-indexOfCardBlog * 100) / wrapperBlog;
  sliderBlog.style.transform = `translateX(${slide}%)`;
}

nextBlogBtn.onmouseover = () => {
  nextBlogBtn.src = "/img/AoorwRightActive.png";
};
nextBlogBtn.onmouseout = () => {
  nextBlogBtn.src = "/img/AoorwRight.png";
};
prevBlogBtn.onmouseover = () => {
  prevBlogBtn.style.rotate = "180deg";
  prevBlogBtn.src = "/img/AoorwRightActive.png";
};
prevBlogBtn.onmouseout = () => {
  prevBlogBtn.style.rotate = "180deg";
  prevBlogBtn.src = "/img/AoorwRight.png";
};

nextBlogBtn.addEventListener("click", () => {
  if (indexOfCardBlog < wrapperBlog - 3) indexOfCardBlog++;
  else indexOfCardBlog = 0;

  rewind();
});

prevBlogBtn.addEventListener("click", () => {
  if (indexOfCardBlog > 0) indexOfCardBlog--;
  else indexOfCardBlog = wrapperBlog - 3;

  rewind();
});

//////////////////////////////////////////////////////////////////////////////
const arrWithActiveSrc = [
  "/img/stepsActive.png",
  "/img/mangoActive.png",
  "/img/foodActive.png",
  "/img/food2Active.png",
  "/img/bookoffActive.png",
  "/img/seriesActive.png",
];
const arrWithNonActiveSrc = [
  "/img/steosNonActive.png",
  "/img/mangoNonActive.png",
  "/img/foodNonActive.png",
  "/img/food2NonActive.png",
  "/img/bookoffNonActive.png",
  "/img/seriesNonActive.png",
];
const imageLogos = document.querySelectorAll(".margin-top-item__img");
imageLogos.forEach((img, i) => {
  img.addEventListener("mouseover", () => {
    img.src = arrWithActiveSrc[i];
  });

  img.addEventListener("mouseout", () => {
    img.src = arrWithNonActiveSrc[i];
  });
});

const arrWithActiveSrcFooter = [
  "/img/Media=Facebook, Status= True.png",
  "/img/Media=Twitter, Status= True.png",
  "/img/Media=Pinterest, Status= True.png",
  "/img/Media=Instagram, Status= True.png",
];
const arrWithNonActiveSrcFooter = [
  "/img/Media=Facebook, Status= False.png",
  "/img/Media=Twitter, Status= False.png",
  "/img/Media=Pinterest, Status= False.png",
  "/img/Media=Instagram, Status= False.png",
];
const imageLogoFooter = document.querySelectorAll(".margin8-left-icon__img");

imageLogoFooter.forEach((img, i) => {
  img.addEventListener("mouseover", () => {
    img.src = arrWithActiveSrcFooter[i];
  });

  img.addEventListener("mouseout", () => {
    img.src = arrWithNonActiveSrcFooter[i];
  });
});

const paragraphForDropDown = document.querySelectorAll(
  ".header-bot-frame-left-item__p"
);
const dropDown = document.querySelector(".header-bot-frame-left-dropdown");
const itemForDropDown = document.querySelectorAll(
  ".header-bot-frame-left-item"
);
itemForDropDown.forEach((Element, index) => {
  Element.addEventListener("mouseover", () => {
    if (paragraphForDropDown[index].textContent === "Shop") {
      dropDown.style.display = "flex";
    }
  });
  dropDown.addEventListener("mouseout", () => {
    dropDown.style.display = "none";
  });
});

const listHrefCategories = document.querySelectorAll(
  ".header-bot-frame-left-dropdown-items-ul-list"
);

listHrefCategories.forEach((Element) => {
  Element.addEventListener("click", () => {
    console.log(Element.textContent);
  });
});
