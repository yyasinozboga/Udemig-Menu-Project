import { menu } from "./db.js";
import { elements, calculatePrice } from "./helpers.js";

const renderProductDetail = () => {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get("id");
  const product = menu.find((menu) => menu.id === Number(id));
  const { title, category, price, img, desc } = product;

  let header = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="http://127.0.0.1:5500/html/index.html" class="menu-btn text-primary fs-3"><i class="bi bi-house"></i></a>

        <p class="fw-medium">Anasayfa/${category}/${title}</p>
    </div>

    <h1 class="text-center">${title}</h1>
  `;

  let productDetail = `
    <figure class="w-75 mx-auto">
        <img src="${img}" class="img-fluid rounded-2" />
    </figure>

    <h5>Ürünün Kategorisi: <span class="text-success">${title}</span></h5>
    <h5>Ürünün Fiyatı: <span class="text-success">${calculatePrice(
      price,
    )}₺</span></h5>
    <p class="lead fw-medium">${desc}</p>
  `;

  elements.header.innerHTML = header;
  elements.product.innerHTML = productDetail;
};

window.addEventListener("DOMContentLoaded", renderProductDetail);
