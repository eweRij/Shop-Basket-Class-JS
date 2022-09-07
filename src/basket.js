class Basket {
  constructor() {
    this.items = this.loadFromocalStorage();
  }

  addItem(item) {
    this.items.push(item);
    this.saveToLocalStorage();
  }
  removeItem(no) {
    this.items.splice(no - 1, 1);
    this.saveToLocalStorage();
  }
  showBasket() {
    return this.items.map((item, index) => {
      return {
        id: index + 1,
        text: `${index} - ${item.name} - ${item.price}`,
      };
    });
  }
  getTotalValue() {
    return this.items.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
    // let sum;
    // for (const item of this.items) {
    //   sum += item.price;
    // }
    // return sum;
  }
  clearBasket() {
    this.items = [];
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem("basket", JSON.stringify(this.items));
  }
  loadFromocalStorage() {
    const itemsFromLS = localStorage.getItem("basket");
    if (itemsFromLS === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("basket"));
    }
  }
}

class Product {
  constructor(productName, price) {
    this.name = productName;
    this.price = price;
  }
  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}
const shopBasket = new Basket();
const orange = new Product("orange", 3.5);
const cucumber = new Product("cucumber", 4.5);
