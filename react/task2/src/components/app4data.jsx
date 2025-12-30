function app4 (props){
    return(
        <>
        
        <img className="img1" src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

        <img onClick={props.fun} src="https://static.vecteezy.com/system/resources/previews/000/422/468/original/like-icon-vector-illustration.jpg" alt="" className="img2" />
        
        <p className="num1">{props.num}</p>

        </>

        
    )
}

export default app4 ;