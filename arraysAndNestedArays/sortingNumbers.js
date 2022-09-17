function sortingNumbers(arr) {
  let result = [];
  let numbers = arr.slice();
  arr.forEach((el) => {
    if (numbers.length != 0) {
      let min = Math.min(...numbers);
      result.push(min);

      let minIndex = numbers.indexOf(Math.min(...numbers));
      numbers.splice(minIndex, 1);
    }

    if (numbers.length != 0) {
      let max = Math.max(...numbers);
      if (max) result.push(max);

      let maxIndex = numbers.indexOf(Math.max(...numbers));
      numbers.splice(maxIndex, 1);
    }
  });

  return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
