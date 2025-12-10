var all = document.querySelector(".all");
var btn = document.querySelector(".search");
var input = document.querySelector(".input");

function ok (i , check) {

    

    fetch(`https://api.mfapi.in/mf?limit=${check}&offset=0`)
    .then((response)=>response.json())
    .then((data)=>{
        p1 = document.createElement("p");
        p1.textContent = data[i].schemeCode;
        all.appendChild(p1);
        p2 = document.createElement("p");
        p2.textContent = data[i].schemeName;
        all.appendChild(p2);
        console.log(all)

    })

    ok(i+1 , check);
    if(data[i] == undefined){
        return;
    }


}


var check;

btn.addEventListener("click" , ()=>{
    if(input.value != "" ){
        check = input.value;
        all.innerHTML = "";
        input.value = "";
        ok( 0 , check );
        
    }
    
    
})

document.addEventListener("keypress" , (e)=>{
    
    if(e.key == "Enter"){
        check = input.value;
        all.innerHTML = "";
        input.value = "";
        ok( 0 , check );
    }
})










