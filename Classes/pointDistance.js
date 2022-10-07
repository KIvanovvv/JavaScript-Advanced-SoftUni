class Point {
  static distance(point1, point2) {
    let a = (point1.x - point2.x) ** 2;
    let b = (point1.y - point2.y) ** 2;
    return Math.sqrt(a + b);
  }
  constructor(x, y) {
    (this.x = x), (this.y = y);
  }
}
let pointA = new Point(4, 0);
let pointB = new Point(6, 6);
console.log(Point.distance(pointA, pointB));
