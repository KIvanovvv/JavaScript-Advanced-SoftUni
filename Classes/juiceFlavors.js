function juice(input) {
  let juiceCollection = new Map();
  let bottleCollection = new Map();
  let order = new Set();

  for (let el of input) {
    let tokens = el.split(" => ");
    let bottles = Math.trunc(Number(tokens[1]) / 1000);
    let remaining = Number(tokens[1]) % 1000;
    if (tokens[1] >= 1000) {
      order.add(tokens[0]);
    }
    if (bottleCollection.has(tokens[0])) {
      let current = bottleCollection.get(tokens[0]);
      current = Number(current) + bottles;
      bottleCollection.set(tokens[0], current);
    } else {
      bottleCollection.set(tokens[0], bottles);
    }
    if (juiceCollection.has(tokens[0])) {
      let current = juiceCollection.get(tokens[0]);
      current = Number(current) + remaining;

      juiceCollection.set(tokens[0], current);
    } else {
      juiceCollection.set(tokens[0], remaining);
    }
    // } else {
    //   if (juiceCollection.has(tokens[0])) {
    //     let current = juiceCollection.get(tokens[0]);
    //     current = Number(current) + remaining;
    //     juiceCollection.set(tokens[0], current);
    //   } else {
    //     juiceCollection.set(tokens[0], tokens[1]);
    //   }
    // }
  }
  for (let [k, v] of juiceCollection) {
    if (v >= 1000) {
      let finalBottles = Math.trunc(Number(v) / 1000);
      let current = bottleCollection.get(k);
      current = Number(current) + finalBottles;
      bottleCollection.set(k, current);
    }
  }

  if (order.size != 0) {
    for (let el of order) {
      console.log(`${el} => ${bottleCollection.get(el)}`);
    }
  } else {
    for (let [k, v] of bottleCollection) {
      console.log(`${k} => ${v}`);
    }
  }
}
juice([
  "Kiwi => 2",

  "Pear => 2",

  "Watermelon => 3020",

  "Kiwi => 4",

  "Pear => 5",

  "Watermelon => 6",
]);
