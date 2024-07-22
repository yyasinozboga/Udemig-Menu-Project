export const elements = {
  productList: document.querySelector(".product-list"),
  navbar: document.querySelector(".navbar"),
  header: document.querySelector(".product-detail-header"),
  product: document.querySelector(".product"),
};

export const calculatePrice = (price) => {
  let newPrice = price * 15;
  return newPrice.toFixed(2);
};
