import { useEffect, useRef, useState } from "react";
import List from "./list";



function Nav() {
    var [check , setCheck] = useState(true) ;
    var h1 = useRef(null);
    var h2 = useRef(null);
    var h3 = useRef(null);
    
    console.log(h1.current)
    console.log(h2.current)
    // console.log(h3.current.className)
    useEffect(()=>{
        if(check){
        h1.current.className = "h1" ;
        h2.current.className = "h2" ;
        h3.current.className = "h3" ;
    }
    else{
        h1.current.className = "h11" ;
        h2.current.className = "h21" ;
        h3.current.className = "h31" ;
    }
    },[check])

    function enter (e) {
        if(e.key === "Enter"){
            console.loh("kamlesh")
        }
    }

    var [value , setvalue] = useState(200) ;

    function inp (e) {
        console.log(e.target.value)
        if(e.target.value.length == 3 && e.key === "Enter" && (e.target.value[0] != " " && e.target.value[1] != " " && e.target.value[2] != " " )){
            console.log("kookkkokokok" + e.target.value[2]) ;
            console.log("Enter") ;
            console.log(e.target.value);
            setvalue(e.target.value);

        }

    }
    

    
    function changeClass(e) {
        
        var a = e.target.className;

        if ((a == "h1" || a == "h2" || a == "h3" || a == "ham" || a == "h11" || a == "h21" || a == "h31" ) && check == true) {
            console.log("kook");
            setCheck(false) ;




        }
        else if ((a == "h1" || a == "h2" || a == "h3" || a == "ham" || a == "h11" || a == "h21" || a == "h31" ) && check == false){
            setCheck(true) ;
        }

    }
    return (
        <>
            <div className="nav">
                <div className="logo">
                    HTTPUPPY
                </div>
                <input placeholder="🔍" onKeyUp={inp} className="input" type="text" />
                <div onClick={changeClass} className="ham">
                    <div ref={h1} className="h1"></div>
                    <div ref={h2} className="h2"></div>
                    <div ref={h3} className="h3"></div>
                </div>
            </div>
            <List check = {check} value = {value} />
        </>
    )
}

export default Nav;