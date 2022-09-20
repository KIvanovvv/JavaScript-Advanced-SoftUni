function carFactory(car) {
  let wantedPower = car.power;
  let foundEngine = false;
  let avalPower = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 240 },
    { power: 200, volume: 3500 },
  ];
  for (let el of avalPower) {
    let { power, volume } = el;
    for (let num = wantedPower; num <= power; num++) {
      if (num === power) {
        car.engine = { power: num, volume };
        delete car.power;
        foundEngine = true;
      }
      if (foundEngine) break;
    }
  }
  car.carriage = { type: car.carriage, color: car.color };
  delete car.color;
  if (car.wheelsize % 2 === 0) {
    car.wheelsize -= 1;
    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
  } else {
    car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
  }
  delete car.wheelsize;
  return car;
}
carFactory({
  model: "VW Golf II",

  power: 90,

  color: "blue",

  carriage: "hatchback",

  wheelsize: 14,
});
carFactory({
  model: "Opel Vectra",

  power: 110,

  color: "grey",

  carriage: "coupe",

  wheelsize: 17,
});
// Small engine: { power: 90, volume: 1800 }

// Normal engine: { power: 120, volume: 2400 }

// Monster engine: { power: 200, volume: 3500 }

//results:
//{ model: 'VW Golf II', engine: { power: 90, volume: 1800 }, carriage: { type: 'hatchback', color: 'blue' }, wheels: [13, 13, 13, 13] }
