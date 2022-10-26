class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }
  newAdditions(footballPlayers) {
    for (let player of footballPlayers) {
      let [name, age, playerValue] = player.split(`/`);
      let current = this.invitedPlayers.find((el) => el[`name`] === name);
      if (!current) {
        this.invitedPlayers.push({ name, age, playerValue });
      } else if (Number(current[`playerValue`]) < Number(playerValue)) {
        current[`playerValue`] = playerValue;
      }
    }
    let res = `You successfully invite `;
    this.invitedPlayers.forEach((el, i, arr) => {
      if (i + 1 !== arr.length) {
        res += `${el.name}, `;
      } else {
        res += `${el.name}.`;
      }
    });
    return res;
  }
  signContract(selectedPlayer) {
    let [name, playerOffer] = selectedPlayer.split("/");
    let current = this.invitedPlayers.find((el) => el[`name`] === name);
    if (!current) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (Number(current.playerValue) > Number(playerOffer)) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${
          Number(current.playerValue) - Number(playerOffer)
        } million more are needed to sign the contract!`
      );
    }
    current.playerValue = `Bought`;
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }

  ageLimit(name, age) {
    let current = this.invitedPlayers.find((el) => el[`name`] === name);
    if (!current) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    let ageDiff = age - Number(current[`age`]);
    if (ageDiff >= 5) {
      return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
    } else if (ageDiff < 5 && ageDiff > 0) {
      return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
    } else {
      return `${name} is above age limit!`;
    }
  }
  transferWindowResult() {
    let res = "Players list:";
    this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
    this.invitedPlayers.forEach(
      (el) => (res += `\nPlayer ${el.name}-${el.playerValue}`)
    );
    return res;
  }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
