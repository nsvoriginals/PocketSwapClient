import {Button} from "./button"
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { BackgroundGradientAnimation } from './BackgroundAnim'
import { Feature } from './Features'
import { Built } from './Builtwith'
import { Madewith } from './Madewith'

export const Landing=()=>{
    return <div>
         <Hero></Hero>
            <Feature></Feature>
            <Built></Built>
            <Madewith></Madewith>
    </div>
}