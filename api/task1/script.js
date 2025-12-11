
var clickR = document.querySelector(".data");
var clickR1 = document.querySelector(".mainimg");
var id1 = document.querySelector("#data1");
var id2 = document.querySelector("#data2");
var id3 = document.querySelector("#data3");
var id4 = document.querySelector("#data4");
var id5 = document.querySelector("#data5");
var id6 = document.querySelector("#data6");
var id7 = document.querySelector("#data7");
var id8 = document.querySelector("#data8");
var id9 = document.querySelector("#data9");
var id10 = document.querySelector("#data10");
var id11 = document.querySelector("#data11");
var id12 = document.querySelector("#data12");
var id13 = document.querySelector("#data13");
var id14 = document.querySelector("#data14");
var serch = document.querySelector("#serch");
var btn = document.querySelector("#logoS");
var mainCity = document.querySelector("#mainCity");
var hambox = document.querySelector(".hamdata");
var click = document.querySelector(".city");

function data (city) {




    
    fetch(`http://api.weatherapi.com/v1/current.json?key=d3bbc6ff7a4d4c7a96c51411250912&q=${city}&aqi=yes`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        mainCity.textContent = data.location.name;
        // if (mainCity.textContent.split(" ").length > 1){
        //     mainCity.style.fontSize = "1vw";
        // }
        id1.textContent = data.location.name;
        id2.textContent = data.location.localtime;
        id3.textContent = data.current.temp_c + " °C";
        id4.textContent = data.current.condition.text;
        id5.setAttribute("src" , data.current.condition.icon);
        id6.textContent = data.current.feelslike_c + " °C";
        id7.textContent = data.current.gust_kph + " kph";
        id8.textContent = data.current.humidity  + " %";
        id9.textContent = data.current.cloud  + " %";
        id10.textContent = data.current.uv;
        id11.textContent = "CO : " + data.current.air_quality.co;
        id12.textContent = "NO2 : " + data.current.air_quality.no2;
        id13.textContent = "O3 : " + data.current.air_quality.o3;
        id14.textContent = "SO2 : " + data.current.air_quality.so2;



    })
}

data("junagadh");


btn.addEventListener("click" , ()=>{
console.log(serch.value);


    data(serch.value);
    serch.value = "";


})

document.addEventListener("keypress" , (e)=>{
    if(e.key == "Enter" && serch.value != ""){
        data(serch.value);
        serch.value = "";
    }
})




var count = 1;
click.addEventListener("click",()=>{
    if(count == 1){
        hambox.style.transform = "translateX(2vw)";
        clickR.style.opacity = "0.4"
        clickR1.style.opacity = "0.4"
        count = 0;
    }
    else{
        hambox.style.transform = "translateX(-100vw)";
        clickR.style.opacity = "1"
        count = 1;
    }
    
})


document.addEventListener("click" , (e)=>{
    if(e.target.className == "hamdata1"){
        var value1 = e.target.textContent;
        console.log(value1)
        data(value1);
        clickR.style.opacity = "1"
        clickR1.style.opacity = "1"
        hambox.style.transform = "translateX(-100vw)";
        count = 1;
    }
})


clickR.addEventListener("click",()=>{
    hambox.style.transform = "translateX(-100vw)";
    clickR.style.opacity = "1";
    clickR1.style.opacity = "1";
    count = 1;
})

clickR1.addEventListener("click",()=>{
    hambox.style.transform = "translateX(-100vw)";
    clickR.style.opacity = "1"
    clickR1.style.opacity = "1"
    count = 1;
})
















// document.querySelector(".mainimg").setAttribute("src" , "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765294621/Weather-in-India_psvng2.jpg");



var arr = [
    
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765296864/488683_qsovwx_f9bqls.jpg",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765297071/488667_wp3vi4.jpg",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765294773/10834368_pxynoh.jpg",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765297176/7322677_tsleyj.jpg",
    "https://res.cloudinary.com/dsuhb6swy/image/upload/v1765297182/1359320_mkh8z9.jpg"
    
    
    
]

var i = 0;

setInterval(()=>{
    if( i < 5 ){
        document.querySelector("#img").setAttribute("src" , arr[i]);
        i++;
    }
    else{
        i = 0;
            document.querySelector("#img").setAttribute("src" , arr[i]);
        i++;
    }

    // console.log(arr[i]);


},
    5000


)

    












