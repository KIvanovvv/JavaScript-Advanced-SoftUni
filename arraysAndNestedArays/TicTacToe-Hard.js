function ticTacToe(input) {
  let matrix = [];
  let row0 = [false, false, false];
  let row1 = [false, false, false];
  let row2 = [false, false, false];
  let playerOneTurn = true;
  matrix.push(row0, row1, row2);

  for (let comand of input) {
    let [outerI, innerI] = comand.split(" ");
    if (playerOneTurn) {
      if (matrix[outerI][innerI] == false) {
        matrix[outerI][innerI] = `X`;
        playerOneTurn = false;
      } else {
        console.log(`This place is already taken. Please choose another!`);
      }
    } else {
      if (matrix[outerI][innerI] == false) {
        matrix[outerI][innerI] = `O`;
        playerOneTurn = true;
      } else {
        console.log(`This place is already taken. Please choose another!`);
      }
    }
    if (matrix[0][0] === `X` && matrix[0][1] === `X` && matrix[0][2] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[1][0] === `X` && matrix[1][1] === `X` && matrix[1][2] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[2][0] === `X` && matrix[2][1] === `X` && matrix[2][2] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[0][0] === `X` && matrix[1][1] === `X` && matrix[2][2] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[0][2] === `X` && matrix[1][1] === `X` && matrix[2][0] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[0][0] === `X` && matrix[1][0] === `X` && matrix[2][0] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[0][1] === `X` && matrix[1][1] === `X` && matrix[2][1] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    if (matrix[0][2] === `X` && matrix[1][2] === `X` && matrix[2][2] === `X`) {
      console.log(`Player X wins!`);
      break;
    }
    /////////////////////
    if (matrix[0][0] === `O` && matrix[0][1] === `O` && matrix[0][2] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[1][0] === `O` && matrix[1][1] === `O` && matrix[1][2] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[2][0] === `O` && matrix[2][1] === `O` && matrix[2][2] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[0][0] === `O` && matrix[1][1] === `O` && matrix[2][2] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[0][2] === `O` && matrix[1][1] === `O` && matrix[2][0] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[0][0] === `O` && matrix[1][0] === `O` && matrix[2][0] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[0][1] === `O` && matrix[1][1] === `O` && matrix[2][1] === `O`) {
      console.log(`Player O wins!`);
      break;
    }
    if (matrix[0][2] === `O` && matrix[1][2] === `O` && matrix[2][2] === `O`) {
      console.log(`Player O wins!`);
      break;
    }

    if (!matrix.flat().includes(false)) {
      console.log(`The game ended! Nobody wins :(`);
      break;
    }
  }
  let res = matrix.map((el) => el.join("\t"));
  return res.forEach((el) => console.log(el));
}
