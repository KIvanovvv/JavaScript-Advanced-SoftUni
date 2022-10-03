function solution() {
  //    apple - made with 1 carbohydrate and 2 flavour
  //  lemonade - made with 10 carbohydrate and 20 flavour
  //  burger - made with 5 carbohydrate, 7 fat and 3 flavour
  //  eggs - made with 5 protein, 1 fat and 1 flavour
  // turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  // restock <microelement> <quantity> -
  // prepare <recipe> <quantity> -
  // report

  let commandMenu = {
    restock: (microelement, quantity) => {
      store[microelement] += Number(quantity);
      return `Success`;
    },
    report: () => {
      let res = "";
      for (let [k, v] of Object.entries(store)) {
        res += `${k}=${v} `;
      }
      return res.trim();
    },
    prepare: (recipe, quantity) => {
      let ingridientsNeeded;
      ingridientsNeeded = recipes[recipe];
      let keys = Array.from(Object.keys(ingridientsNeeded));
      let flag = true;
      for (let key of keys) {
        if (store[key] >= ingridientsNeeded[key] * Number(quantity)) {
          flag = true;
          //console.log(`Have enough ${key}`);
        } else {
          flag = false;
          return `Error: not enough ${key} in stock`;
        }
      }
      if (flag) {
        for (let key of keys) {
          for (let i = 0; i < quantity; i++) {
            store[key] -= ingridientsNeeded[key];
          }
        }
        return `Success`;
      }
    },
  };
  return function (params) {
    let tokens = params.split(" ");
    if (tokens.length === 1) {
      return commandMenu.report();
    } else if (tokens[0] === `restock`) {
      return commandMenu.restock(tokens[1], tokens[2]);
    } else {
      return commandMenu.prepare(tokens[1], tokens[2]);
    }
  };
}
let manager = solution();
console.log(manager("restock flavour 2")); // Success
// console.log(manager("prepare lemonade 4")); // Success
console.log(manager("restock carbohydrate 1")); // Success
// console.log(manager("restock flavour 10")); // Success
// console.log(manager("report")); // Success

//console.log(manager("prepare apple 1")); // Success
//console.log(manager("restock fat 10")); // Success
console.log(manager("report")); // Success
console.log(manager("prepare apple 2")); // Success
console.log(manager("report")); // Success

//console.log(manager("prepare burger 1")); // Success
//console.log(manager("report")); // Success
