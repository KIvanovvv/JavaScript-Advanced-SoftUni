class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2;
  }
  set diameter(value) {
    this.radius = value / 2;
  }
  //P*r**2
  get area() {
    return Math.PI * this.radius ** 2;
  }
}
let circle = new Circle(0.8);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);
