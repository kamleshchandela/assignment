// DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
var pouse = document.querySelector('.pouse');
var resume = document.querySelector('.resume');
var hit = document.querySelector('.hit');
var hitCount = document.querySelector(".hitcount");

// Required variables
let score = 0;
let time = 30;
let bestScore = 0;
let playGame = false;
let gameId = null;
var timer;
var k = 1;
var hitCountNum = 0;
var time11 ;
var time22 ;



pouse.disabled = true;
resume.disabled = true;


// Common functions
function webLoad() {
    onLoad();
    displayContent();
}

function onLoad() {
    const temp = localStorage.getItem('highScoreMole');
    bestScore = temp ? parseInt(temp) : 0;
}







function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
}

function endGame() {
    clearInterval(gameId);
    playGame = false;
    startBtn.disabled = false;

    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('highScoreMole', bestScore);
        alert(`🎉 New High Score! You scored: ${score}`);



        
        // 6. "New Record!" Glow on Best Score


        document.querySelector("h1").textContent = `"New Record!"`;
        document.querySelector("h1").style.color = "gold";

        maxScoreDisplay.style.color = "gold";
        setInterval(()=>{
        maxScoreDisplay.style.color = "white";

        document.querySelector("h1").textContent = `🔨 Whack-a-Mole 🔨`;
        document.querySelector("h1").style.color = "blue";


        },
        3000

    
    )


    



    } else {
        alert(`Your current score: ${score}`);
    }

    pouse.disabled = true;
    resume.disabled = true;

    // localStorage.clear()
    k = 1;


    // 3. Start Button Says "Play Again"
    startBtn.textContent = "Play Again";





    // 5 band karva mate
    for (let i = 0; i < 6; i++) {
        holes[i].style.pointerEvents = "none"
        moles[i].style.pointerEvents = "none"

    }

    






    // 7. "Last Game Score" Using sessionStorage

        sessionStorage.setItem("lastScore", `Last Score is : ${score}`);
        var sessionStorageData = sessionStorage.getItem("lastScore");
        document.querySelector(".hitcount1").textContent = `${sessionStorageData}`;




    displayContent();
}





function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function popGame() {
    if (!playGame) return; // Stop popping when game ends







    // 
    if(k == 1){
    timer = randomTime(500, 1500);

    }
    else{
    timer = randomTime(200, 300);

    }
    const hole = randomHole();
    const mole = hole.querySelector('.mole');

    mole.classList.add('up');

    setTimeout(() => {
        mole.classList.remove('up');
        if (playGame) popGame();
        time11 = Date.now();
    }, timer);
}

function startGame() {

    if(time == 1){
        time = 30;
        score = 0;
    }

    pouse.disabled = false;
    resume.disabled = true;

    
    playGame = true;
    startBtn.disabled = true;
    displayContent();

    popGame();
    
        gameId = setInterval(() => {
        time--;
        displayContent();

        

        // console.log(time);

            // 4. Mole Speed Increases (Time Left < 10)
            if(time < 10){
                k =2;

            }
        




        if (time <= 0) {
            endGame();
        }
    }, 1000);




    // 5. Hit Counter (Separate from Score)

    // Hit counter click chalu karva 
    for (let i = 0; i < 6; i++) {
        holes[i].style.pointerEvents = "auto"
        moles[i].style.pointerEvents = "auto"

    }


    var hitCounterNum = 0;
    for (let i = 0; i < 6; i++) {
        holes[i].addEventListener("click", () => {
            console.log("click");
            hitCounterNum++;
            console.log(hitCounterNum);


            document.querySelector(".hitNum").textContent = `${hitCounterNum}`





        })
        moles[i].addEventListener("click", () => {
            console.log("click1");
            hitCounterNum++;
            console.log(hitCounterNum);






            document.querySelector(".hitNum").textContent = `${hitCounterNum}`





        })


}









































    
    
}



var min;
var timeArr = [];
function bonk(event) {
    if (!event.isTrusted) return; // ignore fake clicks

    if (event.target.classList.contains('up')) {
        event.target.classList.remove('up');
        event.target.classList.add('bonked');
        score++;
        displayContent();

        // console.log(score);


        
        time22 = Date.now();

        var timedata = document.querySelector(".timediff").textContent = (time22-time11)/1000;

        

        

        // 8. "Fastest Hit" Timer Using sessionStorage

        timeArr.push(timedata);

        console.log(timeArr);

        min = timeArr[1];

        for(let i = 0 ; i<timeArr.length;i++){
            for(let j=i ; j<timeArr.length; j++){
                if(min>timeArr[j]){
                    min = timeArr[j];
                }
                
                
            }
        }

        console.log(min);

        sessionStorage.setItem('fastestHit', min);
        var hitStor1 = sessionStorage.getItem("fastestHit");

        document.querySelector(".fastesthit").textContent = `Fastest Hit is : ${hitStor1}s`;

        console.log(hitStor1)
       
      








        


        // 1. Score Turns Gold When > 50
        if(score > 50){
            
            
            scoreDisplay.style.color = "gold"
        }

        // 2. "Whack!" Message on Hit
        
        
        setTimeout(() => {
            hit.style.color = "black"
            hit.textContent = "Whack!"
            // console.log("1")
        }, 10);
        setTimeout(() => {
            hit.style.color = "red"
            hit.textContent = "????"
            // console.log("1")
        }, 1000);






        setTimeout(() => {
            event.target.classList.remove('bonked');
        }, 300);
    }
    // if (event.target.classList.contains('hole') || event.target.classList.contains('mole')  ){
    //     // hitCountNum = score;
    //     hitCount.textContent = `Hit `
    // }
}

webLoad();

moles.forEach((box) => {
    box.addEventListener('click', bonk);
});

startBtn.addEventListener('click', ()=>{
    time = 1;
    startGame();
});


pouse.addEventListener("click",()=>{
    pouse.disabled = true;
    resume.disabled = false;
    clearInterval(gameId);
    playGame = false;
})


resume.addEventListener("click",()=>{
    pouse.disabled = false;
    resume.disabled = true;
    startGame();


});














