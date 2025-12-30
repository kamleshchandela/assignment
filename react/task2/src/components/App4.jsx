import { useState } from "react";
import App41 from "./app4data";
var check = 1 ;

function App4 () {

    var [num , numfun] = useState(573)
    
    function fun () {
        if(check == 1 ){
            numfun(num = num + 1 ) ;
            check = 0 ;
        }
        else{
             numfun(num = num - 1 ) ;
             check = 1 ; 
        }
        
    }

    return (
        <div className="app4">
            
            <App41 fun = {fun} num = {num} />
        </div>
    )
}

export default App4 ;

