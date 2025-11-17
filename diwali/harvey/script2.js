

var ham = document.querySelector(".ham");
var hambox = document.querySelector(".hammobile")
var main = document.querySelector(".main")
var kamo = 1;

ham.addEventListener("click",()=>{
    if(kamo == 1){
        hambox.style.transform = "translateX(102vw)";
        kamo = 2;
    }
    else{
        hambox.style.transform = "translateX(0vw)";
        kamo = 1;
    }
})

main.addEventListener("click",()=>{
        hambox.style.transform = "translateX(0)";
        kamo = 1;

})







