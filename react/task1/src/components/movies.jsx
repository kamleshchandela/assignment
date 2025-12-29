
import { useEffect, useState } from "react";


function Movies () {

    var [arr, arrfun] = useState([]);
    
        useEffect(() => {
            fetch("https://api.tvmaze.com/shows")
                .then((response) => (response.json()))
                .then((data) => {
                    console.log(data)
                    data.forEach((e) => {
                        console.log(e.url)
    
                    })
                    arrfun(data);
    
                })
        },
    
            [])
    
    
    
    
    



















    
    return (
        <>



            <div className="food">


                {/* {FoodData(arr)} */}

                {

                    arr.map((e , i) => {
                        return (
                            
                                <a key={i} className="card" href={e.url} >
                                <img src={e.image.medium} alt="" className="img" />
                                <div className="title">
                                    {e.name}
                                </div>
                                </a>
                            
                        )
                    })

                }
               
                


            </div >





        </>
    )
}

export default Movies ;