class Hex {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    let res = `0x${this.value.toString(16).toUpperCase()}`;
    return res;
  }

  plus(value) {
    return (this.value = this.value + value);
  }
}
let FF = new Hex(255);
// console.log(FF.valueOf() + 1);
console.log(FF.toString());
let a = new Hex(10);

let b = new Hex(5);
console.log(a.plus(b).toString());
//console.log(.toString(16));
console.log(a.plus(b).toString() == "0xF");
