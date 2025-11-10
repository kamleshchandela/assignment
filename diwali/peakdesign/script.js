
var changimg = document.querySelector("#changimg");
var i = 0;






var arr = [
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762521893/Screenshot_2025-11-07_183831_u1thdm.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762520871/Screenshot_2025-11-07_183708_dxozh7.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762520748/Screenshot_2025-11-07_183527_z5zpor.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762520746/Screenshot_2025-11-07_183421_nm2n7s.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762520746/Screenshot_2025-11-07_183459_cq9osp.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762520746/Screenshot_2025-11-07_183439_n0j8jg.png"
]



setInterval(chang,5000)







function chang (){
    if( i <= 5){
        changimg.setAttribute("src",arr[i]);
        i++;
    }
    else{
        i=0;
        changimg.setAttribute("src",arr[i]);
        i++;
    }
}




document.querySelectorAll(".part1imgs21")[1].style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762530428/Our_20Mission_z1j2fn.jpg')`
document.querySelectorAll(".part1imgs22")[1].style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762530446/Impact_clwwh0.jpg')`
document.querySelectorAll(".part1imgs23")[1].style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762530466/Films_hu3v5w.jpg')`

document.querySelectorAll(".part1imgs21")[1].style.height = "21vw"
document.querySelectorAll(".part1imgs21")[1].style.padding = "0.5vw"
document.querySelectorAll(".part1imgs22")[1].style.height = "21vw"
document.querySelectorAll(".part1imgs22")[1].style.padding = "0.5vw"
document.querySelectorAll(".part1imgs23")[1].style.height = "21vw"
document.querySelectorAll(".part1imgs23")[1].style.padding = "0.5vw"



var js1 = document.querySelector("#js1");
var js2 = document.querySelector("#js2");
var js3 = document.querySelector("#js3");
var js4 = document.querySelector("#js4");
var js5 = document.querySelector("#js5");
var js6 = document.querySelector("#js6");
var scrolimg1 = document.querySelector(".part1imgs111");
var scrolimg2 = document.querySelector(".part1imgs112");
var scrolimg3 = document.querySelector(".part1imgs113");
var scrolimg4 = document.querySelector(".part1imgs114");
var scrolimg5 = document.querySelector(".part1imgs115");
var scrolimg6 = document.querySelector(".part1imgs116");
var scrolimg7 = document.querySelector(".part1imgs117");

js1.style.backgroundColor = "black";
js1.style.color = "white";


js1.addEventListener("click",()=>{
    js1.style.backgroundColor = "black";
    js1.style.color = "white";
    
    js2.style.backgroundColor = "#eef1f0";
    js2.style.color = "black";
    js3.style.backgroundColor = "#eef1f0";
    js3.style.color = "black";
    js4.style.backgroundColor = "#eef1f0";
    js4.style.color = "black";
    js5.style.backgroundColor = "#eef1f0";
    js5.style.color = "black";
    js6.style.backgroundColor = "#eef1f0";
    js6.style.color = "black";
    


    scrolimg1.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762451946/Travel-Backpack-45-Parent-Primary_ekpdc7.jpg')`
    scrolimg2.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780695/Tech-Pouch-Parent-Primary_dwm74b.jpg')`
    scrolimg3.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780822/Packing-Cube-Parent-Primary_lbgah3.jpg')`
    scrolimg4.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780895/Wash-Pouch-Parent-Primary_tercb9.jpg')`
    scrolimg5.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780941/ULPC-Parent-Primary_xixbgu.jpg')`
    scrolimg6.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781043/Packable-Tote-Parent-Primary_fdlvsc.jpg')`
    scrolimg7.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781091/rollerpro-group-159A0003_1_iqyxyk.jpg')`








    
    
    
    
})
js2.addEventListener("click",()=>{
    js2.style.backgroundColor = "black";
    js2.style.color = "white";



    js1.style.backgroundColor = "#eef1f0";
    js1.style.color = "black";
    js3.style.backgroundColor = "#eef1f0";
    js3.style.color = "black";
    js4.style.backgroundColor = "#eef1f0";
    js4.style.color = "black";
    js5.style.backgroundColor = "#eef1f0";
    js5.style.color = "black";
    js6.style.backgroundColor = "#eef1f0";
    js6.style.color = "black";
    





    scrolimg1.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781096/rollerpro-group-159A0009_iezk0r.jpg')`
    scrolimg2.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781091/rollerpro-group-159A0003_1_iqyxyk.jpg')`
    scrolimg3.style.backgroundImage = `url('https://cdn.shopify.com/s/files/1/2986/1172/files/Packable-Tote-Parent-Secondary.jpg?v=1755002337&width=500&height=625&crop=center')`
    scrolimg4.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781043/Packable-Tote-Parent-Primary_fdlvsc.jpg')`
    scrolimg5.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780962/ULPC-Parent-Secondary_wqxtrp.jpg')`
    scrolimg6.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780941/ULPC-Parent-Primary_xixbgu.jpg')`
    scrolimg7.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780962/ULPC-Parent-Secondary_wqxtrp.jpg')`



})
js3.addEventListener("click",()=>{
    js3.style.backgroundColor = "black";
    js3.style.color = "white";




    js2.style.backgroundColor = "#eef1f0";
    js2.style.color = "black";
    js1.style.backgroundColor = "#eef1f0";
    js1.style.color = "black";
    js4.style.backgroundColor = "#eef1f0";
    js4.style.color = "black";
    js5.style.backgroundColor = "#eef1f0";
    js5.style.color = "black";
    js6.style.backgroundColor = "#eef1f0";
    js6.style.color = "black";
    


    scrolimg1.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781091/rollerpro-group-159A0003_1_iqyxyk.jpg')`
    scrolimg2.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781043/Packable-Tote-Parent-Primary_fdlvsc.jpg')`
    scrolimg3.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781096/rollerpro-group-159A0009_iezk0r.jpg')`
    scrolimg4.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780941/ULPC-Parent-Primary_xixbgu.jpg')`
    scrolimg5.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780900/Wash-Pouch-Parent-Secondary_fsnsxb.jpg')`
    scrolimg6.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780720/Tech-Pouch-Parent-Secondary_dpxyej.jpg')`
    scrolimg7.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780695/Tech-Pouch-Parent-Primary_dwm74b.jpg')`









})
js4.addEventListener("click",()=>{
    js4.style.backgroundColor = "black";
    js4.style.color = "white";








    js2.style.backgroundColor = "#eef1f0";
    js2.style.color = "black";
    js3.style.backgroundColor = "#eef1f0";
    js3.style.color = "black";
    js1.style.backgroundColor = "#eef1f0";
    js1.style.color = "black";
    js5.style.backgroundColor = "#eef1f0";
    js5.style.color = "black";
    js6.style.backgroundColor = "#eef1f0";
    js6.style.color = "black";
    




    scrolimg1.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762451946/Travel-Backpack-45-Parent-Primary_ekpdc7.jpg')`
    scrolimg2.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762453603/Screenshot_2025-11-06_235622_nr1xtt.png')`
    scrolimg3.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780895/Wash-Pouch-Parent-Primary_tercb9.jpg')`
    scrolimg4.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780962/ULPC-Parent-Secondary_wqxtrp.jpg')`
    scrolimg5.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780900/Wash-Pouch-Parent-Secondary_fsnsxb.jpg')`
    scrolimg6.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780895/Wash-Pouch-Parent-Primary_tercb9.jpg')`
    scrolimg7.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780848/Packing-Cube-Parent-Secondary_ahtybv.jpg')`



})
js5.addEventListener("click",()=>{
    js5.style.backgroundColor = "black";
    js5.style.color = "white";








    js2.style.backgroundColor = "#eef1f0";
    js2.style.color = "black";
    js3.style.backgroundColor = "#eef1f0";
    js3.style.color = "black";
    js4.style.backgroundColor = "#eef1f0";
    js4.style.color = "black";
    js1.style.backgroundColor = "#eef1f0";
    js1.style.color = "black";
    js6.style.backgroundColor = "#eef1f0";
    js6.style.color = "black";
    



    scrolimg1.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780720/Tech-Pouch-Parent-Secondary_dpxyej.jpg')`
    scrolimg2.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780822/Packing-Cube-Parent-Primary_lbgah3.jpg')`
    scrolimg3.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780695/Tech-Pouch-Parent-Primary_dwm74b.jpg')`
    scrolimg4.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781091/rollerpro-group-159A0003_1_iqyxyk.jpg')`
    scrolimg5.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781096/rollerpro-group-159A0009_iezk0r.jpg')`
    scrolimg6.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781043/Packable-Tote-Parent-Primary_fdlvsc.jpg')`
    scrolimg7.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780900/Wash-Pouch-Parent-Secondary_fsnsxb.jpg')`








})
js6.addEventListener("click",()=>{
    js6.style.backgroundColor = "black";
    js6.style.color = "white";





    js2.style.backgroundColor = "#eef1f0";
    js2.style.color = "black";
    js3.style.backgroundColor = "#eef1f0";
    js3.style.color = "black";
    js4.style.backgroundColor = "#eef1f0";
    js4.style.color = "black";
    js5.style.backgroundColor = "#eef1f0";
    js5.style.color = "black";
    js1.style.backgroundColor = "#eef1f0";
    js1.style.color = "black";


    scrolimg1.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781043/Packable-Tote-Parent-Primary_fdlvsc.jpg')`
    scrolimg2.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780962/ULPC-Parent-Secondary_wqxtrp.jpg')`
    scrolimg3.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780941/ULPC-Parent-Primary_xixbgu.jpg')`
    scrolimg4.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762781096/rollerpro-group-159A0009_iezk0r.jpg')`
    scrolimg5.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780900/Wash-Pouch-Parent-Secondary_fsnsxb.jpg')`
    scrolimg6.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780895/Wash-Pouch-Parent-Primary_tercb9.jpg')`
    scrolimg7.style.backgroundImage = `url('https://res.cloudinary.com/dsuhb6swy/image/upload/v1762780822/Packing-Cube-Parent-Primary_lbgah3.jpg')`




})



var ham = document.querySelector("#hamnav");
var hambox = document.querySelector(".ham");
var num =1;

ham.addEventListener("click",()=>{
    if(num == 1){
        hambox.style.transform = "translateX(0vw)";
        num = 2;
    }
    else{
        hambox.style.transform = "translateX(-100vw)";
        num = 1;
    }
    
})

var main = document.querySelector(".main")


main.addEventListener("click",()=>{
    if(num = 2){
        hambox.style.transform = "translateX(-100vw)";
        num = 1;
    }
    
})















