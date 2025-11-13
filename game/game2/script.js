const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');
const streaktex = document.querySelector('#bestStreak');
const currenttex = document.querySelector('#currentStreak');

const colorBoxes = document.querySelectorAll('.color-box');
const hart = document.querySelectorAll('.hart');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

var currentStreak = 0;
var bestStreak = 0;
var pickCorrectColor = 0;
var color = [];
var num = 6;
var streak = 0;
var streak1 = 0;
var ani = 1;


function userName(){
    var userName = prompt();
    document.querySelector(".name").textContent = userName;

}

userName();

document.querySelector(".add").addEventListener("click",userName);


function webLoad() {
    onLoad();
    setGame();
    displayContent();
}


// Whenever the website will load, it will first check the previous data stored....if there will be any stored value...it will be displayed in the highestBestStreak else it will display Zero
function onLoad() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp);  //Here the value will be stored in form of string...to convert it into integer parseInt is used.
    }
    else {
        bestStreak = 0;
    }
}


function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;

    streaktex.textContent = `${streak}`;
        currenttex.textContent = `${streak1}`;

}


function colorGenerate() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;
}

function generateColor(num) {
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(colorGenerate());
    }
    return arr;  //here arr is a local variable therefore it is returned in the function and will get deleted as soon as the function is closed.
}

function pickGenerator(){
    const index = Math.floor(Math.random()*num);
    console.log(index);
    return color[index];
}

function setGame() {
    color = generateColor(num);
    pickCorrectColor = pickGenerator();
    console.log(color);
    console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for (var i = 0; i < color.length; i++) {
        colorBoxes[i].style.backgroundColor = color[i];
    }
}







webLoad();
var i = 2;
function winGuess(event){
    var tempBox = event.target;
    if(pickCorrectColor == tempBox.style.backgroundColor){
        messageDisplay.textContent = "You answered it right";
        streak++;
        streak1++;
        streaktex.textContent = `${streak}`;
        currenttex.textContent = `${streak1}`;
        if(i<=1 && i>=-1){
            i++;
            hart[i].style.display = "flex";
        }
        



        // 1. Correct Color Glows When Clicked
        tempBox.style.border = "6px solid Yellow"
        setInterval(()=>{
        tempBox.style.border = "0"

              },
         1000
         )

        //  2. "Streak!" Message When Streak ≥ 3
         if(streak1>=3){
            messageDisplay.style.color = "green";
            messageDisplay.textContent = "Streak 1 score 3!";
         }


        //  4. Show "First Win!" on First Correct Answer
         if(streak1===1){
            messageDisplay.style.color = "green";
            messageDisplay.textContent = "First Win!";
         }


         // 5. Header Text Becomes Bold on New Best Streak

         if(streak1>=6){
            messageDisplay.style.color = "rgb(117, 249, 205)";
            messageDisplay.style.fontWeight = "bold";
            messageDisplay.style.fontSize = "4vw";
            messageDisplay.textContent = "Streak 2 score 6!";
         }

         if(streak1>=10){
            messageDisplay.style.color = "rgba(223, 7, 7, 1)";
            messageDisplay.style.fontWeight = "bold";
            messageDisplay.style.fontSize = "4.5vw";
            messageDisplay.textContent = "Oooooo score 10!";
         }






        // reset.localStorage.getItem(save,streak)
        setGame();
    }
    else{
        messageDisplay.textContent = "Try Again";


        
        var timeint =  setInterval(()=>{
            tempBox.classList.add("color1");
            console.log("Interval chal raha hai...");
        }
            
            ,
            100

        )

        
        // setTimeout(()=>{
        //     clearInterval(timeint);
        //     console.log("Interval band ho gaya")

        // }
            
        //     ,
        //     500

        // )



        
        
        if(i<=2 && i>=0){
        hart[i].style.display = "none";

            
        

        



        if(i==0){
            for(var k = 0 ; k<6 ; k++){
                colorBoxes[k].style.opacity = "0.2";
                colorBoxes[k].style.pointerEvents = "none";
            }
            
        }



        






        i--;


        
    
    
    
    
    }
    }
}

colorBoxes.forEach((box)=>{
    box.addEventListener('click',winGuess);
})



function noEasyMode(){
    easyBtn.style.backgroundColor = "";
    easyBtn.style.color = "";
}



function resetStreak(){
    bestStreak = 0;
    currentStreak = 0;
    streak1 = 0;
    // localStorage.removeItem('highBestStreak');
    messageDisplay.textContent = "Game is Reseted!";
    noEasyMode();



    hart[0].style.display = "flex";
    hart[1].style.display = "flex";
    hart[2].style.display = "flex";

    i=2;
    for(var k = 0 ; k<6 ; k++){
                colorBoxes[k].style.opacity = "1";
                colorBoxes[k].style.pointerEvents = "auto";
            }
    



    
    displayContent();
    
}

function newRound(){
    currentStreak = 0;
    streak = 0;
    streak1 = 0;
    messageDisplay.textContent = "New Round Started";
    displayContent();
    setGame();
    streak1 = 0;


    noEasyMode();






    hart[0].style.display = "flex";
    hart[1].style.display = "flex";
    hart[2].style.display = "flex";
    i = 2;
    for(var k = 0 ; k<6 ; k++){
                colorBoxes[k].style.opacity = "1";
                colorBoxes[k].style.pointerEvents = "auto";
            }

}

resetStreakBtn.addEventListener('click',resetStreak);
newRoundBtn.addEventListener('click',newRound);



resetStreakBtn.addEventListener("click",setGame);








function setEasyMode(){
    easyBtn.style.backgroundColor = "lightgreen";
    easyBtn.style.color = "black";
}




easyBtn.addEventListener("click",()=>{
    
    colorBoxes[3].style.display = "none";
    colorBoxes[4].style.display = "none";
    colorBoxes[5].style.display = "none";

    hart[0].style.display = "flex";
    hart[1].style.display = "flex";
    hart[2].style.display = "flex";
    i = 2;
    for(var k = 0 ; k<6 ; k++){
                colorBoxes[k].style.opacity = "1";
                colorBoxes[k].style.pointerEvents = "auto";
            }




    //  3. Easy Mode Button Turns Green When Selected       
        setEasyMode();
    
    num = 3;
    streak1 = 0;
    setGame();
})





hardBtn.addEventListener("click",()=>{
    colorBoxes[3].style.display = "flex";
    colorBoxes[4].style.display = "flex";
    colorBoxes[5].style.display = "flex";
    hart[0].style.display = "flex";
    hart[1].style.display = "flex";
    hart[2].style.display = "flex";
    i = 2;
    for(var k = 0 ; k<6 ; k++){
                colorBoxes[k].style.opacity = "1";
                colorBoxes[k].style.pointerEvents = "auto";
            }

    num = 6;
    streak1 = 0;

    noEasyMode();




    






    
    setGame();
})

































