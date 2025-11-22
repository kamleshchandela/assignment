// don't ever try to give a special which is msgContainer because it is useless....

let player1 = prompt("enter player 1 name");
let player2 = prompt("enter player 2 name");

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");

var msg = document.querySelector(".msgbtn");

console.log(msg.textContent);

let turnO = true // playerX  playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],





];


const resetGame = () => {
    turnO = true;
    enableBoxes();
}










boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("");
        if (turnO) { // player O
            box.innerText = "O";
            turnO = false;
        }
        else { // player X
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;

        checkWinner();



    })
}

);

// var showWinner = (Winner) => {

// };



const enableBoxes = () => {
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};






const checkWinner = () => {
    for (let pattern of winPatterns) {
        console.log(boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2].innerText]);
        var pos1Val = boxes[pattern[0]].innerText;
        var pos2Val = boxes[pattern[1]].innerText;
        var pos3Val = boxes[pattern[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // showWinner(pos1Val);
                if (pos1Val === "O") {
                    msg.innerHTML = "Winner is " + player1;
                }
                else {
                    msg.innerHTML = "Winner is " + player2;
                }


                for (let box of boxes) {
                    box.disabled = true;
                }

            }
        }



    }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);






