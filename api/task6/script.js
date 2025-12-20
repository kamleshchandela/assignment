var input = document.querySelector("#input") ;
var btn = document.querySelector(".btn") ;
var all = document.querySelector(".all") ;
var chat = document.querySelector("chatD1") ;
var check = 1 ;

var ph = [
    
    "Ask me anything…" ,
    "Enter topic name…" ,
    "Type your question here…" ,
    "Enter topic name…" ,
    "How can I help?" ,
    "Enter topic name…" ,
    "Start typing your question…" ,
    "Enter topic name…" ,
    "Talk to your AI here…" ,
    "Enter topic name…" ,
    "Explain in easy words…" ,
    "Enter topic name…" ,

]

var i = 0 ;

setInterval(()=>{
    input.setAttribute("placeholder", ph[i]) ;
    i++ ;

    if(i > ph.length - 1){
        i = 0 ;
    }
} ,

6000



)





















if(!(localStorage.getItem("aiName"))){
    
    var name1 = prompt() ;
    localStorage.setItem("aiName" , name1) ;
    
}




document.querySelector(".flex").style.marginTop = "15%" ;
var namelocal = localStorage.getItem("aiName") ;
document.querySelector(".name").textContent = `Hello ${namelocal}` ;







function search(){



    







    document.querySelector(".flex").style.marginTop = "0" ;



    all.style.display = "flex" ;

    check = 0 ;


        var you = document.createElement("p") ;
        you.classList.add("you") ;
        you.textContent = input.value ;
        all.appendChild(you) ;
        var apiKey = input.value ; 
        input.value = "" ;

        
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${apiKey}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        

        try{


        var title = document.createElement("p") ;
        title.classList.add("title") ;
        title.textContent = data.title ;
        all.appendChild(title) ;


        var description = document.createElement("p") ;
        description.classList.add("description") ;
        description.textContent = data.description ;
        all.appendChild(description) ;
        
        
        var data1 = document.createElement("p") ;
        data1.classList.add("data") ;
        console.log(data.extract)
        data1.textContent = data.extract ;
        all.appendChild(data1) ;


        var wiki = document.createElement("a") ;
        wiki.classList.add("wiki") ;
        wiki.setAttribute("target" , "_blank" ) ;
        console.log(data.content_urls) ;

        wiki.setAttribute("href" , data.content_urls.desktop.page ) ;
        wiki.textContent = "Wikipedia" ;
        all.appendChild(wiki) ;

        var google = document.createElement("a") ;
        google.classList.add("wiki") ;
        google.setAttribute("target" , "_blank" ) ;
        console.log(data.content_urls) ;
        google.style.marginTop = "0vw"
        google.setAttribute("href" , `https://www.google.com/search?q=${apiKey}` ) ;
        google.textContent = "Google" ;
        all.appendChild(google) ;






        


        }
        catch{

            var title = document.createElement("p") ;
            title.classList.add("title") ;
            title.textContent = "No Data About This Question" ;
            all.appendChild(title) ;
        }
        finally{
            check = 1 ;
        }



        



























        

    })



























}
































btn.addEventListener("click" , ()=>{
    if(input.value != "" && check == 1){
        search();
    }
}) ;

document.addEventListener("keypress" , (e)=>{
    if(e.key == "Enter" && input.value != "" && check == 1){
        search();
    }
})






