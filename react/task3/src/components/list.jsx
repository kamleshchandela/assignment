import { useEffect, useRef, useState } from "react";
import Photo from "./photo";


var arr = [
  100, 101, 102, 103,
  200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
  300, 301, 302, 303, 304, 305, 307, 308,
  400, 401, 402, 403, 404, 405, 406, 407, 408, 409,
  410, 411, 412, 413, 414, 415, 416, 417, 418, 421,
  422, 423, 424, 425, 426, 428, 429, 431, 451,
  500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
];


function List (propes) {

    function fun (e) {
    
    console.log(e.target.innerText)
    valfun(e.target.innerText) ;

}











    const [value,valfun] = useState(200) ;
    var list = useRef(null) ;

    useEffect(()=>{
        console.log(list.current)
        if(propes.check){
            list.current.style.right = "-30vw" ;
        }
        else{
            list.current.style.right = "2vw" ;
        }
        
    },[propes.check])

    return (
        
        <>
            

            <div ref={list} className="listBox">
            {
                arr.map((e , i)=>{
                    return (
                        <div key={i} onClick={fun} className="list">{e}</div>
                    )
                })
            }
            </div>




            <Photo value = {value} value1 = {propes.value} />



            
        </>
    )
}








export default List ;