let counter = 0;


let boardGrid = new Array(3);
for (let i = 0; i < 3; i++) {
 boardGrid[i] = new Array(3);
}


const winText = document.querySelector(".win-text");


document.querySelectorAll(".item").forEach((value, index) =>
 value.addEventListener("click", () => game(value, index)))


function game(item, idx) {
 if (hasThreeInRow(boardGrid) || isTie(boardGrid)) {
   return;
 }


 if (!item.innerText) {
   const boardRow = Math.floor(idx / 3);
   const boardColumn = idx % 3;


   if (counter % 2 === 0) {
     item.innerText = "X";
     boardGrid[boardRow][boardColumn] = "X";


     if (hasThreeInRow(boardGrid)) {
       winText.innerText = "Player X wins!";
     } else if (isTie(boardGrid)) {
       winText.innerText = "It's a tie!";
     }
   } else {
     item.innerText = "O";
     boardGrid[boardRow][boardColumn] = "O";


     if (hasThreeInRow(boardGrid)) {
       winText.innerText = "Player O wins!";
     } else if (isTie(boardGrid)) {
       winText.innerText = "It's a tie!";
     }
   }
   counter++;
 }
}


function hasThreeInRow(board) {
 for (let i = 0; i < 3; i++) {
   if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
     return true;
   }
 }


 for (let j = 0; j < 3; j++) {
   if (board[0][j] && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
     return true;
   }
 }


 if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
   return true;
 }


 if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
   return true;
 }


 return false;
}


function isTie(board) {
 for (let i = 0; i < 3; i++) {
   for (let j = 0; j < 3; j++) {
     if (!board[i][j]) {
       return false;
     }
   }
 }


 return true;
}
