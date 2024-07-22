import { menu, buttonsData } from "./db.js";
import { elements, calculatePrice } from "./helpers.js";

const renderMenu = (menu) => {
  let menuList = menu
    .map((menu) => {
      const { id, title, category, price, img, desc } = menu;
      return `
        <a href="http://127.0.0.1:5500/html/productDetail.html?id=${id}&category=${category}&price=${calculatePrice(
        price,
      )}" class="text-decoration-none text-dark">
            <div class="product d-flex flex-sm-column flex-md-row gap-md-2 align-items-sm-center align-items-md-start" data-category="${category}">
                <figure class="w-50">
                    <img src="${img}" class="img-fluid rounded-2" />
                </figure>
                <div class="w-50">
                    <div class="d-flex justify-content-between">
                        <h5 class="fw-bold">${title}</h5>
                        <h5 class="text-success fw-medium">${calculatePrice(
                          price,
                        )}₺</h5>
                    </div>
                    <p class="lead fs-5 fw-medium">${desc}</p>
                </div>
            </div>
        </a>
    `;
    })
    .join("");

  elements.productList.innerHTML = menuList;
};

const renderButtons = (category) => {
  elements.navbar.innerHTML = "";

  buttonsData.forEach((button) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-dark";
    const { text, value } = button;
    btn.textContent = text;
    btn.dataset.category = value;

    if (value === category) {
      btn.classList.add("bg-dark", "text-light");
    }

    elements.navbar.appendChild(btn);
  });
};

elements.navbar.addEventListener("click", (e) => {
  const category = e.target.dataset.category;
  if (e.target.tagName === "BUTTON") {
    if (category === "all") {
      renderMenu(menu);
    } else {
      const filtered = menu.filter((menu) => menu.category === category);
      renderMenu(filtered);
    }

    renderButtons(category);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  renderMenu(menu);
  renderButtons("all");
});
