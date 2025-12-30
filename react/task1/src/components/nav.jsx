
import { Link } from "react-router-dom";

function Nav () {
    return (
    
    <>

        <div className="nav">
            <Link to="/">
            <div className="h1">
                Home
            </div>
            </Link>
            <Link to="/food">
            <div className="h1">
                Food
            </div>
            </Link>
            <Link to="/products">
            <div className="h1">
                Products
            </div>
            </Link>
            <Link to="/movies">
            <div className="h1">
                Movies
            </div>
            </Link>
            <Link to="/recipes">
            <div className="h1">
                Recipes
            </div>
            </Link>
        </div>




    
    
    </>
    
)
}

export default Nav ;
