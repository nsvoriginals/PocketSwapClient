import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "./components/ui/button"
import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/ui/Hero'
import { BackgroundGradientAnimation } from './components/ui/BackgroundAnim'
import { Feature } from './components/ui/Features'
import { Built } from './components/ui/Builtwith'
import { Madewith } from './components/ui/Madewith'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar title={"PocketSwap"}></Navbar>
   
     <Hero>
    
     </Hero>
     <Feature></Feature>
     <Built></Built>
     <Madewith></Madewith>
    </>
  )
}

export default App
