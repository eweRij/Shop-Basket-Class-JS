const productCreate = document.querySelector(".product-create");
const priceCreate = document.querySelector(".price-create");
const productCreateForm = document.querySelector(".product-create-form");
const productsList = document.querySelector(".products-list");

const createNewProduct = (e) => {
  e.preventDefault();
  const product = new Product(productCreate.value, priceCreate.value);
  const { name, price } = product;
  const newProduct = document.createElement("li");
  const newName = document.createElement("strong");
  const newPrice = document.createElement("strong");
  const newButton = document.createElement("button");
  newName.innerText = `Nazwa: ${name} `;
  newPrice.innerText = `Cena: ${price} `;
  newButton.innerText = "Kup";
  newButton.dataset.price = price;
  newButton.dataset.name = name;
  newButton.dataset.id = name.toLowerCase();
  newButton.addEventListener("click", addToBasket);
  productsList.appendChild(newProduct);
  newProduct.appendChild(newName);
  newProduct.appendChild(newPrice);
  newProduct.appendChild(newButton);
};
productCreateForm.addEventListener("submit", createNewProduct);
