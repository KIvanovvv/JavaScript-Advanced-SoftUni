function cards(face, suit) {
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
  if (validFaces.includes(face)) {
    if (validSuits.includes(suit)) {
      let card = face + cardSuitsVisual[suit];

      return card.toString();
    }
  }

  throw new Error(`Error`);
}
console.log(cards(`10`, `S`));
console.log(cards(`102`, `S`));
console.log(cards(`10`, `SD`));
console.log(cards(`10`, `S`));
