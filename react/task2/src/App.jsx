import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3'
import App4 from './components/App4'
import App5 from './components/App5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className="nav1">
          <Link to="/assignment1" >
            <div className="h1">A1</div>
          </Link>
          <Link to="/assignment2" >
          <div className="h1">A2</div>
          </Link>
          <Link to="/assignment3" >
          <div className="h1">A3</div>
          </Link>
          <Link to="/assignment4" >
          <div className="h1">A4</div>
          </Link>
          <Link to="/assignment5" >
          <div className="h1">A5</div>
          </Link>
        </div>


        <Routes>

          <Route path="/assignment1" element={<App1 />} />
          <Route path="/assignment2" element={<App2 />} />
          <Route path="/assignment3" element={<App3 />} />
          <Route path="/assignment4" element={<App4 />} />
          <Route path="/assignment5" element={<App5 />} />




        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
