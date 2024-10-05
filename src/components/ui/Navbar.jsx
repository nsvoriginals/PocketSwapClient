import { useNavigate } from "react-router-dom";
export const Navbar=()=>{
    const navigate=useNavigate();
    
return <div className="p-5 bg-black text-white">
    <div id="main" className="flex justify-between items-center p-50">
    <div 
    id="logo" 
    onClick={() => navigate('/')} 
    className="font-Nue flex items-center text-2xl cursor-pointer"
>

    <h1 className="ml-2">PocketSwap</h1>
</div>
        <div id="navlinks" className="flex justify-center text-white gap-20 items-center font-Nue font-weight: 600;">
            <h4 className="" onClick={()=>navigate('/')}>Home</h4>
            <h4 onClick={()=>navigate('/about')} className="">About</h4>
            <h4 onClick={()=>navigate('/login')}>Login</h4>
        </div>
        <div id="dot" className="h-10 w-10 bg-black rounded-full overflow-hidden flex justify-center items-center">
            <img className="border-black " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOVOH4NHf85lJfAD7WCeOrqx3gvTLWl5eVQ&s" alt="" />
        </div>
    </div>
</div>
}