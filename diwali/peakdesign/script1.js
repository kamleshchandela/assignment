
var dot1 = document.querySelector(".dot1");
var dot2 = document.querySelector(".dot2");
var scrol = document.querySelector(".page1scrol1")

dot1.addEventListener("click",()=>{
    scrol.style.transform = "translateX(0vw)"

    dot1.className = "dot1"
    dot2.className = "dot2"





})

dot2.addEventListener("click",()=>{
    scrol.style.transform = "translateX(-14vw)"

    dot2.className = "dot1"
    dot1.className = "dot2"








})




var dot3 = document.querySelector(".dot3");
var dot4 = document.querySelector(".dot4");
var scrol = document.querySelector(".page1scrol1")

dot3.addEventListener("click",()=>{
    scrol.style.transform = "translateX(0vw)"

    dot3.className = "dot3"
    dot4.className = "dot4"





})

dot4.addEventListener("click",()=>{
    scrol.style.transform = "translateX(-52vw)"

    dot4.className = "dot3"
    dot3.className = "dot4"








})




document.querySelectorAll(".box")[1].style.backgroundImage = "url(https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780962/ULPC-Parent-Secondary_wqxtrp.jpg)"
document.querySelectorAll(".box")[2].style.backgroundImage = "url(https://res.cloudinary.com/dsuhb6swy/image/upload/v1762520871/Screenshot_2025-11-07_183708_dxozh7.png)"
document.querySelectorAll(".box")[3].style.backgroundImage = "url(https://res.cloudinary.com/dsuhb6swy/image/upload/v1762453603/Screenshot_2025-11-06_235622_nr1xtt.png)"
document.querySelectorAll(".box")[4].style.backgroundImage = "url(https://res.cloudinary.com/dsuhb6swy/image/upload/v1762511671/Screenshot_2025-11-07_160409_jdqzsa.png)"
document.querySelectorAll(".box")[5].style.backgroundImage = "url(https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780720/Tech-Pouch-Parent-Secondary_dpxyej.jpg)"






























var ham = document.querySelector("#hamnav");
var hambox = document.querySelector(".ham");
var num =1;
ham.addEventListener("click",()=>{
    if(num == 1){
        hambox.style.transform = "translateX(0vw)";
        hambox.style.transform = "translateY(-8vw)";

        num = 2;
    }
    else{
        hambox.style.transform = "translateX(-100vw)";

        num = 1;
    }
    
})

var main = document.querySelector(".page1all")


main.addEventListener("click",()=>{
    if(num = 2){
        hambox.style.transform = "translateX(-100vw)";
        num = 1;
    }
    
})






























