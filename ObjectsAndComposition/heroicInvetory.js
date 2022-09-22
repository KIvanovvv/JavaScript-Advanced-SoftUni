function heroic(input) {
  let allHeroes = [];
  input.forEach((el) => {
    let [name, level, ...items] = el.split("/");
    let allItems = [];
    items.forEach((el) => allItems.push(el));
    console.log(allItems);

    allHeroes.push({ name, level, allItems });
  });
  return JSON.stringify(allHeroes);
}
console.log(
  heroic([
    "Isacc / 25 / Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
