import { useEffect, useState } from "react";

function Photo (propes) {
    var [link , linkfun] = useState(null) ;
    return (
        <>
        <div className="ans">
            {   
                useEffect(()=>{
                     linkfun(`https://http.dog/${propes.value}.jpg`) ;
                    
                },[propes.value])

                
            }
            {
                useEffect(()=>{
                     linkfun(`https://http.dog/${propes.value1}.jpg`) ;
                    
                },[propes.value1])
            }
            <img className="photo" src={link} alt="" />
        </div>
         
        </>
    )
}

export default Photo ;