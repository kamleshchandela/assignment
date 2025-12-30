
import { useEffect } from "react";
import Count from "./Count";
import { useState } from "react";



function App2() {

    var [num, numfun] = useState(0);
    // var num = 0 ;
    
    function fun1() {
        numfun(++num);
    }
    function fun2() {
        numfun(--num);
    }
    function fun3() {
        numfun(num = num + 2);
    }
    function fun4() {
        numfun(num = num - 2);
    }



    return (
        <>
            <Count num={num} f1 = {fun1} f2 = {fun2} f3 = {fun3} f4 = {fun4} />
            <p className="page">{num}</p>

        </>
    )
}

export default App2;
