
import { useState , useEffect } from "react";
import App31 from "./app3data";

function App3 (){

    var [value , valfun] = useState([]) ;

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>(response.json()))
        .then((data)=>{
            console.log(data) ;
            valfun(data) ;
            
        })
    },[])







    return (
        <div className="app3">
            {console.log(value , "value")}





        <App31 data = {value} />
        



















        </div>
    )

}

export default App3 ;
