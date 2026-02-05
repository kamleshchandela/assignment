import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import List from './components/list'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [link , setlink] = useState("https://codinggita.com/assets/ru_3-Nz3OO0R3.jpeg");
  var arr = [
    "https://codinggita.com/assets/su_two-BWyqiqjA.jpg" ,
    "https://codinggita.com/assets/su_three-DfwQCYVp.jpg" ,
    "https://codinggita.com/assets/su_gate-sKMv1s8O.jpeg" ,
    "https://codinggita.com/assets/su_5-CWwtnHP_.jpg" ,
    "https://codinggita.com/assets/ru_3-Nz3OO0R3.jpeg"



  ]
  setInterval(()=>{
    if(count<arr.length){
      setlink(arr[count]);
      setCount(count => ++count) ;
    }
    else{
      setlink(arr[0]);
      setCount(1);
    }
  },10000)

  return (
    <>
      <div className="main">
        <Nav />
        <img src={link} className='add' alt="" />
      </div>
      
      
    </>
  )
}

export default App
