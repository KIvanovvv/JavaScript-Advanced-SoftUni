function sort(arr) {
  return arr
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join("\n");
}
console.log(sort(["alpha", "beta", "gamma"]));
console.log(sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]));
