function app3(props) {


    return (
        <div className="app3">
        {
        
        props.data.map((e) => {
            return (
                
                    <div className="card">
                        <div className="name">
                            Name : {e.name}
                        </div>
                        <div className="name">
                            Email : {e.email}
                        </div>
                        <div className="name">
                            City : {e.address.city}
                        </div>
                    </div>

               
                
            )
        })
        
        }
         </div>
    )
    
        

    



    }





export default app3;

