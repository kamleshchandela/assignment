function Count (props){

    

    return (
        <div className="app1">
        <button id="b1" className="btn" onClick={props.fun}>{props.num}</button>
        <div className="flex">
        <button className="btn" onClick={props.f1}>+</button>
        <button className="btn" onClick={props.f2}>-</button>
        <button className="btn" onClick={props.f3}>+2</button>
        <button className="btn" onClick={props.f4}>-2</button>
        </div>
        </div>
    )
}

export default Count ;

