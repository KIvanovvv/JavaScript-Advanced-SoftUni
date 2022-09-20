// function ticTacToe(input) {
//   let matrix = [];
//   let row0 = [false, false, false];
//   let row1 = [false, false, false];
//   let row2 = [false, false, false];
//   let playerOneTurn = true;
//   matrix.push(row0, row1, row2);

//   for (let comand of input) {
//     let [outerI, innerI] = comand.split(" ");
//     if (playerOneTurn) {
//       if (matrix[outerI][innerI] == false) {
//         matrix[outerI][innerI] = `X`;
//         playerOneTurn = false;
//       } else {
//         console.log(`This place is already taken. Please choose another!`);
//       }
//     } else {
//       if (matrix[outerI][innerI] == false) {
//         matrix[outerI][innerI] = `O`;
//         playerOneTurn = true;
//       } else {
//         console.log(`This place is already taken. Please choose another!`);
//       }
//     }
//     if (matrix[0][0] === `X` && matrix[0][1] === `X` && matrix[0][2] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[1][0] === `X` && matrix[1][1] === `X` && matrix[1][2] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[2][0] === `X` && matrix[2][1] === `X` && matrix[2][2] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[0][0] === `X` && matrix[1][1] === `X` && matrix[2][2] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[0][2] === `X` && matrix[1][1] === `X` && matrix[2][0] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[0][0] === `X` && matrix[1][0] === `X` && matrix[2][0] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[0][1] === `X` && matrix[1][1] === `X` && matrix[2][1] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     if (matrix[0][2] === `X` && matrix[1][2] === `X` && matrix[2][2] === `X`) {
//       console.log(`Player X wins!`);
//       break;
//     }
//     /////////////////////
//     if (matrix[0][0] === `O` && matrix[0][1] === `O` && matrix[0][2] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[1][0] === `O` && matrix[1][1] === `O` && matrix[1][2] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[2][0] === `O` && matrix[2][1] === `O` && matrix[2][2] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[0][0] === `O` && matrix[1][1] === `O` && matrix[2][2] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[0][2] === `O` && matrix[1][1] === `O` && matrix[2][0] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[0][0] === `O` && matrix[1][0] === `O` && matrix[2][0] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[0][1] === `O` && matrix[1][1] === `O` && matrix[2][1] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }
//     if (matrix[0][2] === `O` && matrix[1][2] === `O` && matrix[2][2] === `O`) {
//       console.log(`Player O wins!`);
//       break;
//     }

//     if (!matrix.flat().includes(false)) {
//       console.log(`The game ended! Nobody wins :(`);
//       break;
//     }
//   }
//   let res = matrix.map((el) => el.join("\t"));
//   return res.forEach((el) => console.log(el));
// }
let allbtn = document.querySelector(`.btn-group button`);
let btn00 = document.querySelector(`.btn-0-0`);
let btn01 = document.querySelector(`.btn-0-1`);
let btn02 = document.querySelector(`.btn-0-2`);
let btn10 = document.querySelector(`.btn-1-0`);
let btn11 = document.querySelector(`.btn-1-1`);
let btn12 = document.querySelector(`.btn-1-2`);
let btn20 = document.querySelector(`.btn-2-0`);
let btn21 = document.querySelector(`.btn-2-1`);
let btn22 = document.querySelector(`.btn-2-2`);

let player1 = true;
let mark = ``;
btn00.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn00.textContent = mark;
  btn00.classList.add(`${mark}`);
  btn00.classList.add(`noHover`);
  player1 = !player1;
});
btn01.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn01.textContent = mark;
  btn01.classList.add(`${mark}`);
  btn01.classList.add(`noHover`);
  player1 = !player1;
});
btn02.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn02.textContent = `${mark}`;
  btn02.classList.add(`${mark}`);
  btn02.classList.add(`noHover`);
  player1 = !player1;
});
btn10.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn10.textContent = `${mark}`;
  btn10.classList.add(`${mark}`);
  btn10.classList.add(`noHover`);
  player1 = !player1;
});
btn11.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn11.textContent = `${mark}`;
  btn11.classList.add(`${mark}`);
  btn11.classList.add(`noHover`);
  player1 = !player1;
});
btn12.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn12.textContent = `${mark}`;
  btn12.classList.add(`${mark}`);
  btn12.classList.add(`noHover`);
  player1 = !player1;
});
btn20.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn20.textContent = `${mark}`;
  btn20.classList.add(`${mark}`);
  btn20.classList.add(`noHover`);
  player1 = !player1;
});
btn21.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn21.textContent = `${mark}`;
  btn21.classList.add(`${mark}`);
  btn21.classList.add(`noHover`);
  player1 = !player1;
});
btn22.addEventListener(`click`, function () {
  player1 ? (mark = `X`) : (mark = `O`);
  btn22.textContent = `${mark}`;
  btn22.classList.add(`${mark}`);
  btn22.classList.add(`noHover`);
  player1 = !player1;
});
