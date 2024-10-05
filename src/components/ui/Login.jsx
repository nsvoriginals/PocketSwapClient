import { Label } from "@radix-ui/react-label"
import { Input } from "./input"
import { Button} from "./button"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate=useNavigate();
    return <div className="font-Nue flex justify-center items-center mt-36">
        <div className="h-80 flex justify-center items-center flex-col mt-10">
           <form className="flex flex-col mt-10 justify-center " action="">
            <h1 className="text-8xl mb-10 text-center">Login</h1>
            <label className="text-2xl text-start" htmlFor="username">Username</label>
            <Input placeholder="Enter Username" className="m-2 h-10 border-black rounded-lg" type="text" />
           
            <label className="text-2xl text-start mt-5" htmlFor="password">Password</label>
            <Input placeholder="Enter password" className="m-2 h-10 border-black rounded-lg " type="password" />
            
           <Button type="submit" className="mt-10 justify-self-center" >Login</Button>
           <div className="flex justify-around mt-7">
           <h5>I don't have an account?</h5>
           <Button onClick={()=>navigate('/register')} className="ml-5">Register</Button>
           </div>
           </form>
           
        </div>
    </div>
}