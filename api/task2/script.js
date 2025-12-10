
var all = document.querySelector(".all");
var btn = document.querySelector(".btn");
var ham = document.querySelector(".menu");
var cros = document.querySelector(".menu img");
var hambox = document.querySelector(".hamdata");




function ok (k){


    for (let i = k ; i < k + 8 ; i++){
        
    
fetch("api.json")
.then((response)=>response.json())
.then((data)=>{
    console.log(data);




    var box = document.createElement("div");
    box.classList.add("box");
    all.appendChild(box);

    var img = document.createElement("img");
    box.appendChild(img);
    img.classList.add("img");
    img.setAttribute("src" , data.articles[i].urlToImage)





    var data11 = document.createElement("div");
    box.appendChild(data11);
    data11.classList.add("data");
    


    var data1 = document.createElement("div");
    data11.appendChild(data1);
    data1.textContent = data.articles[i].title;
    console.log(data.articles[i].title)
    data1.classList.add("data1");



    var data2 = document.createElement("div");
    data11.appendChild(data2);
    data2.textContent = data.articles[i].content;
    data2.setAttribute("title" , data.articles[i].content)
    data2.classList.add("data2");














})


    }

   





}


ok(0);

var k = 0;

btn.addEventListener("click",()=>{
    k = k + 8 ; 
    console.log(k)
    ok(k);
})



var num = 1;

ham.addEventListener("click" , ()=>{

    if(num == 1){
        cros.setAttribute( "src" , "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765359721/6372150_tj30cc.png" );
        hambox.style.transform = "translateX(3vw)";
        
        num = 0;
    }
    else{
        cros.setAttribute( "src" , "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765342049/menu-icon-png-3-lines-11552728985kzvoymuey0_w6isn1.png" );
        hambox.style.transform = "translateX(-100vw)";
        
        num = 1;
    }
    
})

all.addEventListener("click" , ()=>{
    cros.setAttribute( "src" , "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765342049/menu-icon-png-3-lines-11552728985kzvoymuey0_w6isn1.png" );
    hambox.style.transform = "translateX(-100vw)";

    num = 1;
})

console.log(parseInt(Math.random()*100));

document.querySelector(".logo").addEventListener("click" , ()=> {
        all.innerHTML = "";
        k = 3;
        ok(k);
})


























