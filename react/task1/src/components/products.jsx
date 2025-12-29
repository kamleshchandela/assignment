
import { useEffect, useState } from "react";


function Product () {



     var [arr, arrfun] = useState([]);
    
        useEffect(() => {
            fetch("https://fakestoreapi.com/products")
                .then((response) => (response.json()))
                .then((data) => {
                    data.forEach((e) => {
                        console.log(e)
    
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
                            <div key={i} className="card">
                                <img title={e.description} src={e.image} alt="" className="img" />
                                <div className="title">
                                    {e.title}
                                </div>
                                
                                
                            </div>
                        )
                    })

                }
               
                


            </div >





        </>
    )
}

export default Product ;