
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





























