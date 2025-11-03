

var l1 = document.querySelector("#l1");
var l2 = document.querySelector("#l2");
var l3 = document.querySelector("#l3");
var l4 = document.querySelector("#l4");
var l5 = document.querySelector("#l5");
var icone = document.querySelector(".icone");
var leng = document.querySelector(".leng");
var mainimg = document.querySelector(".mainimg");

var count = 0;
icone.addEventListener("click",()=>{
    if(count == 0){
    leng.style.display = "flex";
    count = 2;
    }
    else{
    leng.style.display = "none";
    count = 0;
    }
})

mainimg.addEventListener("click",()=>{
    leng.style.display = "none";
    count = 0;
})







l1.addEventListener("click",()=>{
    l1.style.backgroundColor = "rgb(58, 58, 58)";
    l1.style.color = "white";


    l2.style.backgroundColor = "#f0f0f0";
    l2.style.color = "black";
    l3.style.backgroundColor = "#f0f0f0";
    l3.style.color = "black";
    l4.style.backgroundColor = "#f0f0f0";
    l4.style.color = "black";
    l5.style.backgroundColor = "#f0f0f0";
    l5.style.color = "black";



    leng.style.display = "none";

})

l2.addEventListener("click",()=>{
    l2.style.backgroundColor = "rgb(58, 58, 58)";
    l2.style.color = "white";


    l1.style.backgroundColor = "#f0f0f0";
    l1.style.color = "black";
    l3.style.backgroundColor = "#f0f0f0";
    l3.style.color = "black";
    l4.style.backgroundColor = "#f0f0f0";
    l4.style.color = "black";
    l5.style.backgroundColor = "#f0f0f0";
    l5.style.color = "black";



    leng.style.display = "none";

})


l3.addEventListener("click",()=>{
    l3.style.backgroundColor = "rgb(58, 58, 58)";
    l3.style.color = "white";

    l2.style.backgroundColor = "#f0f0f0";
    l2.style.color = "black";
    l1.style.backgroundColor = "#f0f0f0";
    l1.style.color = "black";
    l4.style.backgroundColor = "#f0f0f0";
    l4.style.color = "black";
    l5.style.backgroundColor = "#f0f0f0";
    l5.style.color = "black";




    leng.style.display = "none";

})


l4.addEventListener("click",()=>{
    l4.style.backgroundColor = "rgb(58, 58, 58)";
    l4.style.color = "white";

    l2.style.backgroundColor = "#f0f0f0";
    l2.style.color = "black";
    l3.style.backgroundColor = "#f0f0f0";
    l3.style.color = "black";
    l1.style.backgroundColor = "#f0f0f0";
    l1.style.color = "black";
    l5.style.backgroundColor = "#f0f0f0";
    l5.style.color = "black";





    leng.style.display = "none";

})

l5.addEventListener("click",()=>{
    l5.style.backgroundColor = "rgb(58, 58, 58)";
    l5.style.color = "white";


    l2.style.backgroundColor = "#f0f0f0";
    l2.style.color = "black";
    l3.style.backgroundColor = "#f0f0f0";
    l3.style.color = "black";
    l4.style.backgroundColor = "#f0f0f0";
    l4.style.color = "black";
    l1.style.backgroundColor = "#f0f0f0";
    l1.style.color = "black";




    leng.style.display = "none";

});































