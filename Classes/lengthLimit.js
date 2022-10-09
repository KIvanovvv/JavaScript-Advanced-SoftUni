class Stringer {
  constructor(innerString, innerLength) {
    (this.innerString = innerString), (this.innerLength = innerLength);
  }

  increase(number) {
    this.innerLength += number;
  }
  decrease(number) {
    if (number <= this.innerLength) {
      this.innerLength -= number;
    } else {
      this.innerLength = 0;
    }
  }
  toString() {
    if (this.innerString.length <= this.innerLength) {
      return this.innerString.slice(0, this.innerLength + 1);
    } else {
      let diff = this.innerString.length - this.innerLength;
      let toReplace = this.innerString.slice(-diff);
      let displayString = this.innerString;
      displayString = displayString.replace(toReplace, `...`);
      return displayString;
    }
  }
}
let stringer = new Stringer(`testo`, 5);
console.log(stringer.innerString);
console.log(stringer.innerLength);
// stringer.increase(5);
// console.log(stringer.innerLength);
stringer.decrease(3);
//console.log(stringer.innerLength);
console.log(stringer.toString());
stringer.increase(3);
console.log(stringer.toString());
stringer.decrease(3);
console.log(stringer.toString());
