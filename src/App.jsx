import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addemployee from './components/Addemployee'
import Searchemployee from './components/Searchemployee'
import Deleteemployee from './components/Deleteemployee'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Addemployee/>} />
<Route path='/search' element={<Searchemployee/>} />
<Route path='/delete' element={<Deleteemployee/>} />





      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
