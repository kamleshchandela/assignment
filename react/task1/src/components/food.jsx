import { useEffect, useState } from "react";


function Food() {

    var [arr, arrfun] = useState([]);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
            .then((response) => (response.json()))
            .then((data) => {
                data.meals.forEach((e) => {
                    console.log(e.strMealThumb)

                })
                arrfun(data.meals);

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
                            <a href={e.strYoutube}>
                            <div key={i} className="card">
                                <img src={e.strMealThumb} alt="" className="img" />
                                <div className="title">
                                    {e.strMeal}
                                </div>
                                
                            </div>
                            </a>
                        )
                    })

                }
               
                


            </div >





        </>
    )
}

export default Food;