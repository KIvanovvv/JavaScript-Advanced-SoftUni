function fruitPrice(fruit, grams, pricePerKg) {
  let kg = grams / 1000;
  console.log(
    `I need $${(pricePerKg * kg).toFixed(2)} to buy ${kg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruitPrice("orange", 2500, 1.8);

//I need $4.50 to buy 2.50 kilograms orange.
