class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model, horsepower, price, mileage) {
    if (typeof model !== `string` || model === ``) {
      throw new Error(`Invalid input!`);
    }
    if (
      !Number.isInteger(horsepower) ||
      typeof horsepower !== `number` ||
      horsepower < 0
    ) {
      throw new Error(`Invalid input!`);
    }
    if (typeof price !== `number` || price < 0) {
      throw new Error(`Invalid input!`);
    }
    if (typeof mileage !== `number` || mileage < 0) {
      throw new Error(`Invalid input!`);
    }
    this.availableCars.push({ model, horsepower, price, mileage });
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }
  sellCar(model, desiredMileage) {
    let index = 0;
    let foundCar = this.availableCars.find((car, i) => {
      index = i;
      return car[`model`] === model;
    });
    if (!foundCar) {
      throw new Error(`${model} was not found!`);
    }
    let currentPrice = foundCar.price;
    let currentMileage = foundCar.mileage;
    if (desiredMileage >= currentMileage) {
      this.soldCars.push(foundCar);
      this.availableCars.splice(index, 1);
      this.totalIncome += currentPrice;

      return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    } else if (currentMileage - 40000 <= desiredMileage) {
      currentPrice *= 0.95;
      this.totalIncome += currentPrice;
      foundCar.price = currentPrice;
      this.soldCars.push(foundCar);
      this.availableCars.splice(index, 1);

      return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    } else {
      currentPrice *= 0.9;
      this.totalIncome += currentPrice;
      foundCar.price = currentPrice;
      this.soldCars.push(foundCar);
      this.availableCars.splice(index, 1);

      return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    }
  }
  currentCar() {
    if (this.availableCars.length > 0) {
      let result = "-Available cars:";
      this.availableCars.forEach(
        (car) =>
          (result += `\n---${car.model} - ${
            car.horsepower
          } HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
      );
      return result;
    } else {
      return "There are no available cars";
    }
  }
  salesReport(criteria) {
    if (criteria !== `horsepower`) {
      if (criteria !== `model`) {
        throw new Error(`Invalid criteria!`);
      }
    }

    if (criteria === `horsepower`) {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
      let result = `-${
        this.name
      } has a total income of ${this.totalIncome.toFixed(2)}$\n-${
        this.soldCars.length
      } cars sold:`;
      this.soldCars.forEach(
        (car) =>
          (result += `\n---${car.model} - ${
            car.horsepower
          } HP - ${car.price.toFixed(2)}$`)
      );
      return result;
    } else {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
      let result = `-${
        this.name
      } has a total income of ${this.totalIncome.toFixed(2)}$\n-${
        this.soldCars.length
      } cars sold:`;
      this.soldCars.forEach(
        (car) =>
          (result += `\n---${car.model} - ${
            car.horsepower
          } HP - ${car.price.toFixed(2)}$`)
      );
      return result;
    }
  }
}
let dealership = new CarDealership("SoftAuto");
console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
console.log(dealership.addCar("Test", -1, 4900, 240000));
