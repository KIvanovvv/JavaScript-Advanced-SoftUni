function tickets(destinationInfo, criterion) {
  let res = [];
  class Ticket {
    constructor(destination, price, status) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status);
    }
  }
  for (let el of destinationInfo) {
    let [destination, price, status] = el.split("|");

    res.push(new Ticket(destination, Number(price), status));
  }

  if (criterion !== `price`) {
    res = res.sort((a, b) => a[criterion].localeCompare(b[criterion]));
  } else {
    res = res.sort((a, b) => Number(a[criterion]) - Number(b[criterion]));
  }

  return res;
}
tickets(
  [
    "Philadelphia|94.20|available",

    "New York City|92.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],

  "price"
);
