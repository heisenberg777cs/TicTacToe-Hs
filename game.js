


let board = ["", "", "", "", "", "", "", "","" ];
let currentPlayer ="X";
let gameOver = false;
const restart = document.querySelector("#restart");
let status = document.querySelector("#status");
const cell = document.querySelectorAll(".cell");

cell.forEach((element, index) => {
    element.addEventListener("click", () => {
        if (board[index] === "" && !gameOver) {
            board[index] = currentPlayer;
             element.textContent = currentPlayer;
               let winner = checkWinner();

               if (winner) {
                status.textContent = `Player ${winner} wins!`;
                gameOver = true;
                return;
               }
             if (checkDraw()) {
                status.textContent = "It's a draw!";
                gameOver = true;
                return;
             }

                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.textContent = `Player ${currentPlayer}'s turn`;
        }       
        else {
            console.log("INVALID");
        }
    });
});


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for ( let pattern of winPatterns) {
        if (
             board[pattern[0]] === board[pattern[1]] &&
             board[pattern[1]] === board[pattern[2]] &&
             board[pattern[2]] !== "" ) {
  return board[pattern[0]];
}
    }
return null;
    };


const checkDraw = () => {
    return board.every((value) => value !== "");
};

restart.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    cell.forEach((element) => {
        element.textContent = "";
    });
status.textContent = "Player X's turn";
});


































































































