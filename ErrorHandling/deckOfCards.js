function cards(arrCards) {
  const validFaces = [
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `J`,
    `Q`,
    `K`,
    `A`,
  ];
  const validSuits = [`H`, `S`, `D`, `C`];
  let cardSuitsVisual = {
    S: `\u2660`,
    H: `\u2665`,
    D: `\u2666`,
    C: `\u2663`,
  };
  let cards = [];
  for (let el of arrCards) {
    let currentEl = el.slice();
    let suit = currentEl.slice(-1);
    let face = currentEl.slice(0, -1);
    if (validFaces.includes(face)) {
      if (validSuits.includes(suit)) {
        cards.push(face + cardSuitsVisual[suit]);
      }
    } else {
      return `Invalid card: ${face}${suit}`;
    }
  }

  return cards.join(" ");
}
console.log(cards(["AS", "10D", "KH", "2C"]));
console.log(cards(["5S", "3D", "QD", "1C"]));
