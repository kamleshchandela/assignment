import './app5.css'
import { useEffect, useState } from "react";


function App5 () {



     var [arr, arrfun] = useState([]);
     var [res , resfun] = useState([]);
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
    
    
    
            document.addEventListener("input" , input);
            



            

            function input (){
                var str = document.querySelector(".input").value ;
                const result = arr.filter((e) => e.title.toLowerCase().includes(str.toLowerCase()));
                // console.log(result , "okokokokokoko")
                resfun(result) ;
            }
            














    return (
        <>


{
    // console.log(res)
}
        
            <div className="food">
                <input type="text" placeholder='Search Products ...' className='input' />

                {/* {FoodData(arr)} */}

                {



                    

                    res.map((e , i) => {
                        return (
                            <>

                            
                            <div key={i} className="card">
                                <img title={e.description} src={e.image} alt="" className="img" />
                                <div className="title">
                                    {e.title}
                                </div>
                                
                                
                            </div>


                            </>
                        )
                    })

                }
               
                


            </div >





        </>
    )
}

export default App5 ;