let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgbtn");

let turnO = true // playerX  playerO

const winPatterns = [
    [0,1,2,3,4,5],
    [6,7,8,9,10,11],
    [12,13,14,15,16,17],
    [18,19,20,21,22,23],
    [24,25,26,27,28,29],
    [30,31,32,33,34,35],
    [0,6,12,18,24,30],
    [1,7,13,19,25,31],
    [2,8,14,20,26,32],
    [3,9,15,21,27,33],
    [4,10,16,22,28,34],
    [5,11,17,23,29,35],
    [0,7,14,21,28,35],
    [5,10,15,20,25,30],





];


const resetGame = () => {
    turnO = true;
    enableBoxes();
}










boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("");
        if(turnO){ // player O
            box.innerText = "O";
            turnO = false;
        }
        else{ // player X
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;

        checkWinner();



    })
}

);

const showWinner = (Winner) => {
    msgContainer.innerText = `Winner is ${Winner}`;
    for(let box of boxes) {
        box.disabled = true;
    }
};



const enableBoxes = () => {
    turnO = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};






const checkWinner = () => {
    for(let pattern of winPatterns) {
        console.log(boxes[pattern[0]].innerText,
                    boxes[pattern[1]].innerText,
                    boxes[pattern[2]].innerText,
                    boxes[pattern[3]].innerText,
                    boxes[pattern[4]].innerText,
                    boxes[pattern[5]].innerText,
                );
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;
        let pos4Val = boxes [pattern[3]].innerText;
        let pos5Val = boxes [pattern[4]].innerText;
        let pos6Val = boxes [pattern[5]].innerText;


        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "" && pos4Val !== "" && pos5Val !== "" && pos6Val !== "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val && pos4Val === pos5Val && pos5Val === pos6Val && pos6Val === pos1Val    ){
                console.log("winner ",pos1Val);
                showWinner(pos1Val);
            }
        }



    }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);






