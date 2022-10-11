class SmartHike {
  constructor(username) {
    (this.username = username),
      (this.goals = {}), // representing a key-value pair of a peak’s name and its altitude.
      (this.listOfHikes = []),
      (this.resources = 100);
  }
  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }
  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources === 0) {
      throw new Error(`You don't have enough resources to start the hike`);
    }
    if (this.resources - time * 10 <= 0) {
      return `You don't have enough resources to complete the hike`;
    }
    this.listOfHikes.push({ peak, time, difficultyLevel });
    this.resources -= time * 10;
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }
  rest(time) {
    this.resources += time * 10;
    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }
  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }
    let foundPeaks = this.listOfHikes
      .sort((a, b) => a.time - b - time)
      .find((el) => el.difficultyLevel == criteria);
    if (criteria === `all`) {
      let buffer = `All hiking records:\n`;
      this.listOfHikes.forEach(
        (el) =>
          (buffer += `${this.username} hiked ${el.peak} for ${el.time} hours`)
      );
      return buffer;
    }
    if (!foundPeaks) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }
    if (foundPeaks) {
      return `${this.username}'s best ${criteria} hike is ${foundPeaks.peak} peak, for ${foundPeaks.time} hours`;
    }
  }
}
const user = new SmartHike("Vili");
user.addGoal("peak1", 2925);
user.hike("peak1", 8, "hard");
user.addGoal("peak2", 2925);
user.hike("peak2", 8, "hard");
console.log(user.showRecord("all"));
console.log(user.showRecord("easy"));
user.addGoal("Vihren", 2914);
user.hike("Vihren", 4, "hard");
console.log(user.showRecord("hard"));
user.addGoal("Rui", 1706);
user.hike("Rui", 3, "easy");
console.log(user.showRecord("all"));
