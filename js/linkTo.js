const listOfLinksTo = document
  .querySelectorAll(".margin1-navlinks-links-ul-li")
  .forEach((list) =>
    list.addEventListener("click", () => {
      if (list.textContent.trim() == "Home") {
        window.location.href = "/html/05_homepage.html";
      }
    })
  );

const catalogDropDownCategory = document
  .querySelectorAll(".header-bot-frame-left-dropdown-items-ul-list")
  .forEach((list) => {
    list.addEventListener("click", () => {
      if (list.textContent == "All Products") {
        window.location.href = "/html/07_shop.html";
      }
    });
  });
