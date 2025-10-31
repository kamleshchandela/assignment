
var btn1 = document.querySelector("#btn1");
var hover = document.querySelector(".hover1");
var count = 1;
btn1.addEventListener('click',()=>{
    count1 = 1;
    count2 = 1;
    if(count == 1){
    hover.style.display = "flex";
    hover1.style.display = "none";
    hover2.style.display = "none";
    count = 2;
    }
    else{
        hover.style.display = "none";
        count = 1;
    }


});


var btn1 = document.querySelector("#btn2");
var hover1 = document.querySelector(".hover2");


var count1 = 1;
btn1.addEventListener('click',()=>{
    count = 1;
    count2 = 1;
    if(count1 == 1){
    hover1.style.display = "flex";
    hover.style.display = "none";
    hover2.style.display = "none";
    count1 = 2;
    }
    else{
        hover1.style.display = "none";
        
        count1 = 1;
    }


});


var btn1 = document.querySelector("#btn3");
var hover2 = document.querySelector(".hover3");
var count2 = 1;
btn1.addEventListener('click',()=>{
    count = 1;
    count1 = 1;
    
    if(count2 == 1){



    hover2.style.display = "flex";
    hover1.style.display = "none";
    hover.style.display = "none";
    count2 = 2;
    }
    else{
        hover2.style.display = "none";
        count2 = 1;
    }


});








document.querySelector(".mainimg").addEventListener("click",()=>{
    hover2.style.display = "none";
    hover1.style.display = "none";
    hover.style.display = "none";
    count = 1;
    count1 = 1;
    count2 = 1;
})






var b1 = document.querySelector(".b1");
var d1 = document.querySelector(".js121")
var num1 = 1;
b1.addEventListener("click",()=>{

    if(num1 == 1){
    b1.style.transform = "rotate(-135deg)";
    d1.style.display = "flex";
    num1 = 2;
    }
    else{
        b1.style.transform = "rotate(45deg)";
        d1.style.display = "none";
        
        num1 = 1;
    }
    
})


var b2 = document.querySelector(".b2");
var d2 = document.querySelector(".js122")
var num2 = 1;
b2.addEventListener("click",()=>{

    if(num2 == 1){
    b2.style.transform = "rotate(-135deg)";
    d2.style.display = "flex";
    num2 = 2;
    }
    else{
        b2.style.transform = "rotate(45deg)";
        d2.style.display = "none";
        num2 = 1;
    }
    
})

var b3 = document.querySelector(".b3");
var d3 = document.querySelector(".js123")
var num3 = 1;
b3.addEventListener("click",()=>{

    if(num3 == 1){
    b3.style.transform = "rotate(-135deg)";
    d3.style.display = "flex";
    num3 = 2;
    }
    else{
        b3.style.transform = "rotate(45deg)";
        d3.style.display = "none";
        
        num3 = 1;
    }
    
})






























