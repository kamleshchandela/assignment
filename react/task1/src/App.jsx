import { BrowserRouter , Routes , Route } from "react-router-dom"
import './App.css'
import Nav from './components/nav'
import Home from './components/home'
import Food from "./components/food"
import Product from "./components/products"
import Movies from "./components/movies"
import Recipes from "./components/recipes"

function App() {
  

  return (
    <>



    




    



      <Nav />

      



    
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/food' element = {<Food />}></Route>
        <Route path='/Products' element = {<Product />}></Route>
        <Route path='/movies' element = {<Movies />}></Route>
        <Route path='/recipes' element = {<Recipes />}></Route>
        
      </Routes>
    </BrowserRouter>


    












    









      

    </>
  )
}

export default App
