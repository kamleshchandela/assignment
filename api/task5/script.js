var all = document.querySelector(".all");
var btn = document.querySelector(".search");
var input = document.querySelector("#s1");
var input2 = document.querySelector("#s2");

function ok (i , check1 , check2) {

    

    fetch(`https://api.mfapi.in/mf/123456?startDate=${check1}&endDate=${check2}`)
    .then((response)=>response.json())
    .then((data1)=>{
        p1 = document.createElement("p");
        p1.textContent = data1.data[i].date;
        all.appendChild(p1);
        p2 = document.createElement("p");
        p2.textContent = data1.data[i].nav;
        all.appendChild(p2);
        console.log(all)


        if(data1.data[i] == undefined){
        return;
    }

    })



    
    ok(i+1 , check1 , check2 );
    


}


var check1;
var check2;

btn.addEventListener("click" , ()=>{
    if(input.value != "" && input2.value != "" ){
        check1 = input.value;
        all.innerHTML = "";
        input.value = "";

        check2 = input2.value;
        all.innerHTML = "";
        input2.value = "";
        ok( 0 , check1 , check2 );


        
        
    }
   
    
})

document.addEventListener("keypress" , (e)=>{
    
    if(e.key == "Enter" && input.value != "" && input2.value != "" ){
        check1 = input.value;
        all.innerHTML = "";
        input.value = "";

        check2 = input2.value;
        all.innerHTML = "";
        input2.value = "";
        ok( 0 , check1 , check2 );


        
    }
    
})










