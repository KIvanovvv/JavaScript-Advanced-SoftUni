class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }
  loadingVegetables(vegetables) {
    for (let line of vegetables) {
      let tokens = line.split(" ");
      let [vegName, vegQuant, vegPrice] = tokens;
      let currentVeg = this.availableProducts.find((el) => el.type === vegName);
      if (!currentVeg) {
        this.availableProducts.push({
          type: vegName,
          quantity: vegQuant,
          price: vegPrice,
        });
      } else {
        currentVeg.quantity = Number(currentVeg.quantity) + Number(vegQuant);
        currentVeg.price = Number(vegPrice);
      }
    }
    let result = `Successfully added `;
    this.availableProducts.forEach((el, i, arr) => {
      if (i + 1 !== arr.length) {
        result += `${el.type}, `;
      } else {
        result += `${el.type}`;
      }
    });
    return result;
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (let line of selectedProducts) {
      let tokens = line.split(" ");
      let [vegName, vegQuant] = tokens;
      let currentVeg = this.availableProducts.find((el) => el.type === vegName);

      if (!currentVeg) {
        throw new Error(
          `${vegName} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (Number(currentVeg.quantity) < Number(vegQuant)) {
        throw new Error(
          `The quantity ${vegQuant} for the vegetable ${vegName} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      totalPrice += Number(currentVeg.price) * Number(vegQuant);
      currentVeg.quantity = Number(currentVeg.quantity) - Number(vegQuant);
    }
    let result = `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
    return result;
  }
  rottingVegetable(type, quantity) {
    let current = this.availableProducts.find((el) => el[`type`] === type);
    if (!current) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (Number(current.quantity < quantity)) {
      current.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }
    current.quantity = Number(current.quantity) - quantity;
    return `Some quantity of the ${type} has been removed.`;
  }
  revision() {
    let result = "Available vegetables:";
    this.availableProducts.sort((a, b) => a.price - b.price);
    this.availableProducts.forEach(
      (el) => (result += `\n${el.type}-${el.quantity}-$${el.price}`)
    );
    result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return result;
  }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
