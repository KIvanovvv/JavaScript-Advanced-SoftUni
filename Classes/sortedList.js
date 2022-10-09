// · add(element) - adds a new element to the collection

// · remove(index) - removes the element at position index

// · get(index) - returns the value of the element at position index

// · size - number of elements stored in the collection
class List {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  add(element) {
    if (typeof element === `number`) {
      this.arr.push(Number(element));
      this.arr.sort((a, b) => a - b);
      this.size++;
    }
  }
  remove(index) {
    if (typeof index === `number`) {
      if (index >= this.arr.length || index < 0) {
        throw Error(`Index is out of length`);
      }
      this.arr.splice(index, 1);
      this.size--;
    }
  }
  get(index) {
    if (typeof index === `number`) {
      if (index >= this.arr.length || index < 0) {
        throw Error(`Index is out of length`);
      }
      return Number(this.arr.slice(index, index + 1).join(""));
    }
  }
}

let list = new List();

list.add(5);
console.log(typeof list.get(0));
// list.add(6);

// list.add(7);

// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));
