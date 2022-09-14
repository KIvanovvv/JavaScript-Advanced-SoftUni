function timeToWalk(steps, footprint, kmPerH) {
  let distanceM = steps * footprint;
  let speedMetersInSec = kmPerH / 3.6;
  let time = distanceM / speedMetersInSec;
  let res = Math.floor(distanceM / 500);

  let timeInMin = Math.floor(time / 60);
  let timeInSec = (time - timeInMin * 60).toFixed(0);
  let timeInH = Math.floor(time / 3600);
  timeInMin += res;
  timeInH += Math.floor(timeInMin / 60);
  timeInMin = timeInMin % 60;

  let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
  let formattedM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
  let formattedS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
  console.log(`${formattedH}:${formattedM}:${formattedS}`);
}
timeToWalk(4000, 0.6, 5);
