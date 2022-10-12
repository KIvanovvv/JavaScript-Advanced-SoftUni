class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }
  addPlant(plantName, spaceRequired) {
    if (spaceRequired > this.spaceAvailable) {
      throw new Error("Not enough space in the garden.");
    }
    this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
    this.spaceAvailable -= spaceRequired;
    return `The ${plantName} has been successfully planted in the garden.`;
  }
  ripenPlant(plantName, quantity) {
    let currentPlant = this.plants.find(
      (plant) => plant.plantName === plantName
    );
    if (!currentPlant) {
      throw new Error(`There is no ${plantName} in the garden."`);
    }
    if (currentPlant.ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }
    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }
    currentPlant.ripe = true;
    currentPlant.quantity = quantity;
    if (quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }
  harvestPlant(plantsName) {
    let currentPlant = this.plants.find(
      (plant) => plant.plantName === plantsName
    );
    if (!currentPlant) {
      throw new Error(`There is no ${plantsName} in the garden.`);
    }
    if (!currentPlant.ripe) {
      throw new Error(
        `The ${plantsName} cannot be harvested before it is ripe.`
      );
    }
    this.storage.push({
      plantName: plantsName,
      quantity: currentPlant.quantity,
    });
    this.spaceAvailable += currentPlant.spaceRequired;
    let index = this.plants.indexOf(
      this.plants.find((plant) => plant.plantName === plantsName)
    );
    this.plants.splice(index, 1);
    return `The ${plantsName} has been successfully harvested.`;
  }

  generateReport() {
    let result = "";
    result += `The garden has ${this.spaceAvailable} free space left.\n`;
    result += `Plants in the garden: `;
    this.plants.forEach((plant, i, arr) => {
      if (i + 1 !== arr.length) {
        result += `${plant.plantName}, `;
      } else {
        result += `${plant.plantName}`;
      }
    });

    if (this.storage.length === 0) {
      result += `\nPlants in storage: The storage is empty.`;
    } else {
      result += `\nPlants in storage: `;
      this.storage.forEach((plant, i, arr) => {
        if (i + 1 !== arr.length) {
          result += `${plant.plantName} (${plant.quantity}), `;
        } else {
          result += `${plant.plantName} (${plant.quantity})`;
        }
      });
    }
    return result;
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
