import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "./components/ui/button"
import { Navbar } from './components/ui/Navbar'
import { Landing } from "./components/ui/Landing";
import { Login } from './components/ui/Login'
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'
import { Register } from './components/ui/Register'
import { Dashboard } from './pages/dashboard'
import { About } from './pages/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Landing/>}></Route>
 <Route path='/login' element={<Login/>}></Route>
 <Route path='/register' element={<Register/>}></Route>
 <Route path='/dashboard' element={<Dashboard/>}></Route>
 <Route path='/about' element={<About/>}></Route>
 </Routes>

 </BrowserRouter>
    </>
  )
}

export default App
