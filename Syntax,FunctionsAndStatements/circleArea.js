function circleArea(input) {
  let inputType = typeof input;
  if (inputType === `number`) {
    const area = (Math.pow(input, 2) * Math.PI).toFixed(2);
    console.log(area);
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${inputType}.`
    );
  }
}
circleArea(5);
circleArea(`asd`);
circleArea(true);
