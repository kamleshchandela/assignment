
import { Link } from "react-router-dom";


function Home () {
    return (
        <>
        
        <div className="home">

            <a className="card" href="http://localhost:5175/food" >
                <img src="https://images.unsplash.com/photo-1645432524603-2a5172479006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHMlMjBndWphcmF0aXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="img" />
                <div className="title">
                    Food
                </div>
            </a>
            <a className="card" href="http://localhost:5175/Products" >
                <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww" alt="" className="img" />
                <div className="title">
                    Product
                </div>
            </a>
            <a className="card" href="http://localhost:5175/Movies" >
                <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW92aWVzfGVufDB8fDB8fHww" alt="" className="img" />
                <div className="title">
                    Movies
                </div>
            </a>
            <Link to="/recipes">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVjaXBlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="img" />
                <div className="title">
                    Recipes
                </div>
            </div>
            </Link>
            
            
        </div>
            


        
        </>
    )
}

export default Home ;