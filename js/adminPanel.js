// const URL = "https://ecobazardb-default-rtdb.firebaseio.com/%D0%A1ATALOG2.json";
// const URL2 =
//   "https://ecobazardb-default-rtdb.firebaseio.com/%D0%A1ATALOG2/FRUIT2.json";
// const text = document.getElementById("status");

// const buttonGET = document.getElementById("buttonGET");
// const buttonPOST = document.getElementById("buttonPOST");
// let ARRAYDATA = [];
// let KEYS = [];

// async function GetDB() {
//   try {
//     const resp = await fetch(URL);
//     const data = await resp.json();

//     KEYS = Object.keys(data);
//     ARRAYDATA = KEYS.flatMap((key) => data[key]);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// GetDB();

// buttonGET.addEventListener("click", async () => {
//   text.textContent = "loading..";
//   try {
//     const res = await fetch(
//       "https://ecobazardb-default-rtdb.firebaseio.com/%D0%A1ATALOG2/FRUIT2/0.json",
//       {
//         method: "GET",
//       }
//     );
//     console.log(await res.json());

//     if (res.status === 200) {
//       text.textContent = "";
//     }
//     console.log(res.status);
//   } catch (error) {
//     text.style.color = "red";
//     text.textContent = error.message;
//   }
// });

// buttonPOST.addEventListener("click", async () => {
//   let name = "Aprikot";
//   let price = 7.99;
//   text.textContent = "loading..";
//   try {
//     const res = await fetch(
//       `https://ecobazardb-default-rtdb.firebaseio.com/%D0%A1ATALOG2/FRUIT2/${ARRAYDATA.length}.json`,
//       {
//         method: "PUT",
//         body: JSON.stringify({
//           name: name,
//           price: price,
//         }),
//       }
//     );

//     if (res.status === 200) {
//       text.textContent = "";
//     }
//     console.log(res.status);
//   } catch (error) {
//     text.style.color = "red";
//     text.textContent = error.message;
//   }
// });

const URL = "https://ecobazardb-default-rtdb.firebaseio.com/CATALOG.json";
const tableForProducts = document.querySelector(".product");
const listCategory = document.querySelectorAll(".lic");
const listAction = document.querySelectorAll(".lia");
const addMenu = document.querySelector(".ad");
const inputForAddProduct = document.querySelectorAll(".ad-frame__inp");
const addForm = document.getElementById("addForm");
const addLoadingMessage = document.querySelector(".ad__loading");

let DATAWITHKEYS = [];
let ARRAYDATA = [];
let KEYS = [];
let CURRENTDATA = [];
let VALUEFROMINPUT = [];

async function GetDB() {
  tableForProducts.innerHTML = `<div class="loading">
      <p class="loading__text">receiving data from the server...</p>
    </div>`;

  try {
    const resp = await fetch(URL);
    const data = await resp.json();

    KEYS = Object.keys(data);
    ARRAYDATA = KEYS.flatMap((key) => data[key]);
    DATAWITHKEYS = data;

    listCategory[0].classList.add("select");
    listAction[1].classList.add("select");

    renderFilter(ARRAYDATA);
  } catch (error) {
    console.log(error.message);
    tableForProducts.innerHTML = `<div class="loading">
      <p class="loading__text">Data retrieval error</p>
    </div>`;
  }
}

GetDB();

function renderFilter(data, category = "all") {
  tableForProducts.innerHTML = "";
  if (category === "all") {
    data.forEach((fields, index) => {
      const { img, name, price, rating, sale, stock } = fields;
      tableForProducts.innerHTML += pullHTML(
        img,
        name,
        price,
        rating,
        sale,
        stock,
        index
      );
    });
    CURRENTDATA = data;
  } else {
    DATAWITHKEYS[category].forEach((fields, index) => {
      CURRENTDATA.push(fields);
      const { img, name, price, rating, sale, stock } = fields;
      tableForProducts.innerHTML += pullHTML(
        img,
        name,
        price,
        rating,
        sale,
        stock,
        index
      );
    });
  }
}

function pullHTML(img, name, price, rating, sale, stock, index) {
  return `
        <div class="product-item">
        <div class="product-item-frame">
          <input class="product-item-frame__inp" value="${index}" />
        </div>
        <div class="product-item-frame">
          <img
            class="product-item-frame__img"
            src="${img}"
            alt="Картинки нэт"
          />
        </div>
        <div class="product-item-frame">
          <input class="product-item-frame__inp" value="${name}" />
        </div>
        <div class="product-item-frame">
          <input class="product-item-frame__inp" value="${price}" />
        </div>
        <div class="product-item-frame">
          <input class="product-item-frame__inp" value="${rating}" />
        </div>
        <div class="product-item-frame">
          <input class="product-item-frame__inp" value="${sale}" />
        </div>
        <div class="product-item-frame">
          <input class="product-item-frame__inp" value="${stock}" />
        </div>
        <div class="product-item-frame">
          <button id="actionBtn" data-id="" class="product-item-frame__btn perf">Perform</button>  
        </div>
      </div> 
    `;
}

// function getCurrentIdForAllProduct() {
//   //   console.log(DATAWITHKEYS);
//   return KEYS.map((key) => Object.keys(DATAWITHKEYS[key])).map((el, i) => el);
// }

window.addEventListener("click", (event) => {
  const ActionBtn = document.querySelectorAll("#actionBtn");
  const changeInput = document.querySelectorAll(".product-item-frame__inp");

  let category = event.target.id;
  let choise = event.target.dataset.index;
  //   let dataId = event.target.dataset.idd;
  //   console.log(dataId);

  if (choise === "category") {
    CURRENTDATA = [];
    renderFilter(ARRAYDATA, category);
  } else if (choise === "action") {
    if (category === "delete") {
      addMenu.style.display = "none";
      ActionBtn.forEach((btn) => {
        btn.style.display = "flex";
        if (btn.classList.contains("perf")) {
          btn.classList.replace("perf", "del");
          btn.textContent = "Delete";
        }
      });
      changeInput.forEach((atrb) => {
        atrb.setAttribute("readonly", true);
      });
    } else if (category === "change") {
      addMenu.style.display = "none";
      ActionBtn.forEach((btn) => {
        btn.style.display = "flex";
        if (btn.classList.contains("del")) {
          btn.classList.replace("del", "perf");
          btn.textContent = "Perform";
        }
      });
      changeInput.forEach((atrb) => {
        atrb.removeAttribute("readonly");
      });
    } else if (category === "add") {
      addMenu.style.display = "flex";
      ActionBtn.forEach((btn) => {
        btn.style.display = "none";
      });
      changeInput.forEach((atrb) => {
        atrb.setAttribute("readonly", true);
      });
    }
  }
});

addClassSelect(listCategory);
addClassSelect(listAction);

function addClassSelect(nodeList) {
  nodeList.forEach((list) => {
    list.addEventListener("click", () => {
      nodeList.forEach((del) => {
        del.classList.remove("select");
      });
      list.classList.add("select");
    });
  });
}

addForm.addEventListener("click", async () => {
  VALUEFROMINPUT = [];
  let URLforAdd;

  inputForAddProduct.forEach((values) => {
    if (values.type === "checkbox") {
      VALUEFROMINPUT.push(values.checked);
    } else VALUEFROMINPUT.push(values.value);
  });

  VALUEFROMINPUT.pop();

  console.log(VALUEFROMINPUT);

  URLforAdd = `https://ecobazardb-default-rtdb.firebaseio.com/CATALOG/${VALUEFROMINPUT[0]}/${CURRENTDATA.length}.json`;
  addLoadingMessage.textContent = "Try to add data...";
  try {
    const res = await fetch(URLforAdd, {
      method: "PUT",
      body: JSON.stringify({
        img: VALUEFROMINPUT[1],
        name: VALUEFROMINPUT[2],
        price: VALUEFROMINPUT[3],
        rating: 4,
        sale: VALUEFROMINPUT[4],
        stock: VALUEFROMINPUT[5],
      }),
    });

    if (res.status === 200) {
      text.textContent = "";
    }
  } catch (error) {
    text.textContent = error.message;
  }
});
