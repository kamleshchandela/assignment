
var all = document.querySelector(".all");
var btn = document.querySelector(".btn");
var ham = document.querySelector(".menu");
var cros = document.querySelector(".menu img");
var hambox = document.querySelector(".hamdata");




function ok (k , value1){


    
        
    
fetch(`https://content.guardianapis.com/search?q=${value1}&api-key=03648588-df3c-4897-91f0-fd496e5a829c&show-fields=thumbnail&page-size=13`)
.then((response)=>response.json())
.then((data)=>{
    console.log(data.results);

    for (let i = k ; i < k + 8 ; i++){
    

    if(data.response.results[i] == undefined){
        btn.style.display = "none";
        return;
    }




    var box = document.createElement("div");
    box.classList.add("box");
    all.appendChild(box);

    var img = document.createElement("img");
    box.appendChild(img);
    img.classList.add("img");
    img.setAttribute("src" , data.response.results[i].fields.thumbnail)





    var data11 = document.createElement("div");
    box.appendChild(data11);
    data11.classList.add("data");
    


    var data1 = document.createElement("div");
    data11.appendChild(data1);
    data1.textContent = data.response.results[i].sectionId;
    console.log(data.response.results[i].sectionName)
    data1.classList.add("data1");



    var data2 = document.createElement("div");
    data11.appendChild(data2);
    data2.textContent = data.response.results[i].sectionName;
    data2.setAttribute("title" , data.response.results[i].sectionName)
    data2.classList.add("data2");

    var data3 = document.createElement("div");
    data11.appendChild(data3);
    data3.textContent = data.response.results[i].webTitle;
    data3.setAttribute("title" , data.response.results[i].webTitle)
    data3.classList.add("data3");


    var data4 = document.createElement("div");
    data11.appendChild(data4);
    data4.textContent = data.response.results[i].webPublicationDate;
    data4.setAttribute("title" , data.response.results[i].webPublicationDate)
    data4.classList.add("data4");






    }





})


    }

   








ok(0 , "india");

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




document.addEventListener("keypress" , (e)=>{
    if( e.key == "Enter" && document.querySelector(".search").value != "" ){
        var value1 = document.querySelector(".search").value;
        all.innerHTML = "";
        document.querySelector(".search").value = "";
        console.log(value1)
        ok( 0 , value1);
    }


})


document.querySelector(".meg").addEventListener("click" , ()=>{
    if( document.querySelector(".search").value != "" ){
        var value1 = document.querySelector(".search").value;
        all.innerHTML = "";
        document.querySelector(".search").value = "";
        console.log(value1)
        ok( 0 , value1);
    }


})


document.addEventListener("click" , (e)=>{
    if(e.target.className == "hamdata1"){
        var value1 = e.target.textContent;
        all.innerHTML = "";
        document.querySelector(".search").value = "";
        // document.querySelector(".search").setAttribute("placeholder" , value1 + "...");
        console.log(value1)
        ok( 0 , value1);

    }
})


















