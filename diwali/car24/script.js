
var arrow1 = document.querySelector(".arrow1");
var arrow2 = document.querySelector(".arrow2");
var scrol1 = document.querySelector(".scrol1");

var count1 = 1;

arrow2.addEventListener("click",()=>{
    if(count1 < 3){
    scrol1.style.transform = `translateX(-${count1*32}vw)`;
    count1++;
    }
    else{
        count1 = 0;
        scrol1.style.transform = `translateX(-${count1*30}vw)`;
        count1++;
    }
})
arrow1.addEventListener("click",()=>{
    
    if(count1 > 1){
    scrol1.style.transform = `translateX(-${(count1-2)*32}vw)`;
    count1--;
    }
    else{
        count1 = 2;
        scrol1.style.transform = `translateX(-${count1*30}vw)`;
        count1++;
    }
})


var arrow3 = document.querySelector(".arrow3");
var arrow4 = document.querySelector(".arrow4");
var scrol2 = document.querySelector(".scrol2");

var count2 = 1;

arrow4.addEventListener("click",()=>{
    if(count2 < 3){
    scrol2.style.transform = `translateX(-${count2*28}vw)`;
    count2++;
    }
    else{
        count2 = 0;
        scrol2.style.transform = `translateX(-${count2*28}vw)`;
        count2++;
    }
})
arrow3.addEventListener("click",()=>{
    
    if(count2 > 1){
    scrol2.style.transform = `translateX(-${(count2-2)*28}vw)`;
    count2--;
    }
    else{
        count2 = 2;
        scrol2.style.transform = `translateX(-${count2*28}vw)`;
        count2++;
    }
})




var sec2btn1 = document.querySelector(".section2btn1");
var sec2btn2 = document.querySelector(".section2btn2");
var sec2btn3 = document.querySelector(".section2btn3");

sec2btn1.addEventListener("click",()=>{
    sec2btn1.style.backgroundColor = "lightblue";
    sec2btn2.style.backgroundColor = "white";
    sec2btn3.style.backgroundColor = "white";

    document.querySelector(".section2btn1data").style.display = "flex";
    document.querySelector(".section2btn2data").style.display = "none";
    document.querySelector(".section2btn3data").style.display = "none";

})
sec2btn2.addEventListener("click",()=>{
    sec2btn1.style.backgroundColor = "white";
    sec2btn2.style.backgroundColor = "lightblue";
    sec2btn3.style.backgroundColor = "white";

    document.querySelector(".section2btn1data").style.display = "none";
    document.querySelector(".section2btn2data").style.display = "flex";
    document.querySelector(".section2btn3data").style.display = "none";
})
sec2btn3.addEventListener("click",()=>{
    sec2btn1.style.backgroundColor = "white";
    sec2btn2.style.backgroundColor = "white";
    sec2btn3.style.backgroundColor = "lightblue";

    document.querySelector(".section2btn1data").style.display = "none";
    document.querySelector(".section2btn2data").style.display = "none";
    document.querySelector(".section2btn3data").style.display = "flex";
})






 document.addEventListener("DOMContentLoaded", function() {
  var ok = document.querySelector(".citydata");
  var chan = document.querySelector(".state");

  ok.addEventListener("click", () => {
    chan.textContent = 'Namaste!';
  });
});




















































