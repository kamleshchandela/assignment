import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"
import './App.css'
import All from './components/all'
import All1 from './components/all1'
import All2 from './components/all2'
import All3 from './components/all3'
import All4 from './components/all4'

function App() {

  return (
    <>

     <BrowserRouter>

    <div className="nav">
      <Link className='link' to="/">
          <p className='q1'>all</p>
      </Link>
      <Link className='link' to="/all1">
          <p className='q1'>jewelery</p>
      </Link>
      <Link className='link' to="/all2">
          <p className='q1'>electronics</p>
      </Link>
      <Link className='link' to="/all3">
          <p className='q1'>women's clothing</p>
      </Link>
      <Link className='link' to="/all4">
          <p className='q1'>men's clothing</p>
      </Link>
        
        
        
        
        
    </div>


    <Routes>
      <Route path="/" element={<All/>}></Route>
      <Route path="/all1" element={<All1/>}></Route>
      <Route path="/all2" element={<All2/>}></Route>
      <Route path="/all3" element={<All3/>}></Route>
      <Route path="/all4" element={<All4/>}></Route>
          


    </Routes>

      





       </BrowserRouter>
    </>
  )
}

export default App ;
