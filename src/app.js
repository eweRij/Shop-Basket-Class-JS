const basket = new Basket();
const buyBtns = [...document.querySelectorAll("[data-id]")];
const order = document.querySelector(".basket-list");
const orderBtn = document.querySelector(".btn-confirm");
const productsListElements = order.children;

const showOrder = () => {
  order.innerHTML = "";
  for (const product of basket.showBasket()) {
    const newProduct = document.createElement("li");
    const { id, text } = product;
    newProduct.innerText = text;
    newProduct.addEventListener("click", removeProduct);
    newProduct.dataset.id = id;
    order.appendChild(newProduct);
  }
};

const removeProduct = (e) => {
  const id = Number(e.target.dataset.id);
  basket.removeItem(id);
  showOrder();
  if (basket.items.length > 0) {
    orderBtn.innerText = `Złóż zamówienie na ${basket.getTotalValue()} zł`;
  } else {
    orderBtn.innerText = `Złóż zamówienie`;
    orderBtn.setAttribute("disabled", true);
  }
};

const addToBasket = (e) => {
  const productName = e.target.dataset.name;
  const price = parseFloat(e.target.dataset.price);
  const product = new Product(productName, price);
  //e.target.dataset.id....getAttribute('data-id') this nie działa bo przez funkcje strzałkową odnosi sie do windows
  basket.addItem(product);
  showOrder();
  orderBtn.removeAttribute("disabled");
  orderBtn.innerText = `Złóż zamówienie na ${basket.getTotalValue()} zł`;
};

const clearAll = () => {
  alert(`Zostało złożone zamówienie na ${basket.getTotalValue()}`);
  basket.clearBasket();
  showOrder();
  orderBtn.innerText = `Złóż zamówienie`;
  orderBtn.setAttribute("disabled", true);
};

for (const btn of buyBtns) {
  btn.addEventListener("click", addToBasket);
}

orderBtn.addEventListener("click", clearAll);
showOrder();
if (basket.items.length === 0) {
  orderBtn.setAttribute("disabled", true);
} else {
  orderBtn.removeAttribute("disabled");
  orderBtn.innerText = `Złóż zamówienie na ${basket.getTotalValue()} zł`;
}
