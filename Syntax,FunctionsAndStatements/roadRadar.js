function roadRadar(speed, zone) {
  let zones = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  let status = ``;
  let difference = speed - zones[zone];
  if (speed > zones[zone]) {
    if (difference <= 20) status = `speeding`;
    else if (difference <= 40) status = `excessive speeding`;
    else status = `reckless driving`;
  }
  speed > zones[zone]
    ? console.log(
        `The speed is ${difference} km/h faster than the allowed speed of ${zones[zone]} - ${status}`
      )
    : console.log(`Driving ${speed} km/h in a ${zones[zone]} zone`);
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
