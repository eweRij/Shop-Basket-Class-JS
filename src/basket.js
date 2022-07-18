class Basket {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  //   removeItem(item) {
  //     return this.items.filter((el) => {
  //       return el !== item;
  //     });
  //   }
  removeItem(no) {
    return this.items.splice(no - 1, 1);
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
    return (this.items = []);
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
