
var mainImg = document.querySelector(".mainimg");
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var arr = [
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762953989/Screenshot_2025-11-12_185221_qyhruw.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762953989/Screenshot_2025-11-12_185145_mhuuti.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762953988/Screenshot_2025-11-12_185132_zm80bb.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762953988/Screenshot_2025-11-12_185106_znwdde.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762953100/videoframe_120255_zupb7v.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762953370/Screenshot_2025-11-12_184442_bm60mq.png"

]



setInterval(function(){
    
        if(i<6){
            mainImg.setAttribute("src",arr[i])
            i++;
        }
        else{
            i=0;
            mainImg.setAttribute("src",arr[i])
            i++;
        }

    
},
3000);


var scrol = document.querySelectorAll(".inimg");

setInterval(() => {
    if(j<17){
        scrol[0].style.transform = `translateX(-${10*j}vw)`
        scrol[1].style.transform = `translateX(-${10*j}vw)`
        scrol[2].style.transform = `translateX(-${10*j}vw)`
        j++;
    }
    else{
        j=0;
        scrol[0].style.transform = `translateX(-${10*j}vw)`
        scrol[1].style.transform = `translateX(-${10*j}vw)`
        scrol[2].style.transform = `translateX(-${10*j}vw)`
        j++;

    }
    
}, 2000);


var img1 = document.querySelector("#img1");

var arrimg1 = [
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762963695/Screenshot_2025-11-12_213717_wmpm1q.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762963691/Screenshot_2025-11-12_213707_y8zebh.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762963696/Screenshot_2025-11-12_213756_zkp9ya.png"

]

setInterval(()=>{
        if(k<3){
            img1.setAttribute("src",arrimg1[k]);
            k++;
        }
        else{
            k=0;
            img1.setAttribute("src",arrimg1[k]);
            k++;
        }
    
},
1000
)

var img2 = document.querySelector("#img2");

var arrimg2 = [
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966539/Screenshot_2025-11-12_222524_ecbqmt.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966538/Screenshot_2025-11-12_222455_djxgki.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966538/Screenshot_2025-11-12_222505_hvqbp8.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966661/Screenshot_2025-11-12_222720_ebnlr2.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966662/Screenshot_2025-11-12_222731_thpe2h.png"

]

setInterval(()=>{
        if(l<5){
            img2.setAttribute("src",arrimg2[l]);
            l++;
        console.log(l)

        }
        else{
        l=0;
            img2.setAttribute("src",arrimg2[l]);
            l++;
        }
    
},
2000
)


var img3 = document.querySelector("#img3");

var arrimg3 = [
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966888/Screenshot_2025-11-12_223026_b76yof.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966889/Screenshot_2025-11-12_223038_nlauiu.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966891/Screenshot_2025-11-12_223056_f8y16m.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966892/Screenshot_2025-11-12_223104_d1zhcw.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966895/Screenshot_2025-11-12_223115_zmfyeg.png"

]

setInterval(()=>{
        if(m<5){
            img3.setAttribute("src",arrimg3[m]);
            m++;

        }
        else{
        m=0;
            img3.setAttribute("src",arrimg3[m]);
            m++;
        }
    
},
2000
)





var img4 = document.querySelector("#img4");

var arrimg4 = [
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1763145332/Screenshot_2025-11-15_000431_dtpbnl.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1763145332/Screenshot_2025-11-15_000416_kjmlb0.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1763145332/Screenshot_2025-11-15_000455_ojeptf.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1763145332/Screenshot_2025-11-15_000443_kfqsfo.png",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1762966895/Screenshot_2025-11-12_223115_zmfyeg.png"

]

setInterval(()=>{
        if(m<5){
            img4.setAttribute("src",arrimg4[m]);
            m++;

        }
        else{
        m=0;
            img4.setAttribute("src",arrimg4[m]);
            m++;
        }
    
},
2000
)












var blackscrol = document.querySelector(".blacksection");
var blacknum = 0;


setInterval(()=>{
    if(blacknum<5){
        blackscrol.style.transform = `translateX(${-blacknum*75}vw)`;
        blacknum++;
    }
    else{
        blacknum = 0;
        blackscrol.style.transform = `translateX(${-blacknum}vw)`;
        blacknum++;
    }

    document.querySelectorAll(".blackimage")[blacknum-1].style.transform = "scale(1.2)";
    document.querySelectorAll(".blackimage")[blacknum-1].style.borderRadius = "2vw";
    setTimeout(()=>{
    document.querySelectorAll(".blackimage")[blacknum-1].style.transform = "scale(1)";
    document.querySelectorAll(".blackimage")[blacknum-1].style.borderRadius = "0.5vw";
    },
    3000
    )   


},
6000

)




























