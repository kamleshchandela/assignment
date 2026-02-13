import { useEffect, useState } from 'react'

function all3 () {



    const [arr, setArr] = useState([])
      useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((data)=>{
          console.log(data)
          setArr(data)
          console.log(arr)
        })
      },[])
      return (
        <>
    
        
    
    
    
        <div className="all">
          {
            arr.map((e)=>{
                if(e.category == "men's clothing"){
                     return(
                        <>  
                            <div className="box">
                            <img className='image' src={e.image} alt="" />
                            <p className='title'>{e.title}</p>
                            <p className='cat'>{e.category}</p>
                            <p className='price'>₹ {e.price}</p>
                            <p className='rat'>⭐ {e.rating.rate}</p>
                            </div>
                        </>
                    )
                }
             
            })
          }
          </div>
        </>
      )










}


export default all3 ;
