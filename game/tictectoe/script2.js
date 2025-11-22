let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgbtn");

let turnO = true // playerX  playerO

const winPatterns = [
    [0,1,2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15,16,17],
    [18,18,20,21,22,23,24,25,26],
    [27,28,29,30,31,32,33,34,35],
    [36,37,38,39,40,41,42,43,44],
    [45,46,47,48,49,50,51,52,53],
    [54,55,56,57,58,59,60,61,62],
    [63,64,65,66,67,68,69,70,71],
    [72,73,74,75,76,77,78,79,80],
    [0,9,18,27,36,45,54,63,72],
    [1,10,19,28,37,46,55,64,73],
    [2,11,20,29,38,47,56,65,74],
    [3,12,21,30,39,48,57,66,75],
    [4,13,22,31,40,49,58,67,76],
    [5,14,23,32,41,50,59,68,77],
    [6,15,24,33,42,51,60,69,78],
    [7,16,25,34,43,52,61,70,79],
    [8,17,26,35,44,53,62,71,80],
    [0,10,20,30,40,50,60,70,80],
    [8,16,24,32,40,48,56,64,72],
    


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
                    boxes[pattern[6]].innerText,
                    boxes[pattern[7]].innerText,
                    boxes[pattern[8]].innerText,
                );
        let pos1Val = boxes [pattern[0]].innerText;
        let pos2Val = boxes [pattern[1]].innerText;
        let pos3Val = boxes [pattern[2]].innerText;
        let pos4Val = boxes [pattern[3]].innerText;
        let pos5Val = boxes [pattern[4]].innerText;
        let pos6Val = boxes [pattern[5]].innerText;
        let pos7Val = boxes [pattern[6]].innerText;
        let pos8Val = boxes [pattern[7]].innerText;
        let pos9Val = boxes [pattern[8]].innerText;


        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "" && pos4Val !== "" && pos5Val !== "" && pos6Val !== "" && pos7Val !== "" && pos8Val !== "" && pos9Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val && pos3Val === pos4Val && pos4Val === pos5Val && pos5Val === pos6Val && pos6Val === pos7Val  && pos7Val === pos8Val  && pos8Val === pos9Val  && pos9Val === pos1Val     ){
                console.log("winner ",pos1Val);
                showWinner(pos1Val);
            }
        }



    }
};


newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);






