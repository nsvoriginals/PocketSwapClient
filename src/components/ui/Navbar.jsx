export const Navbar=({title})=>{
    
return <div className="p-5 bg-black text-white">
    <div id="main" className="flex justify-between items-center p-50">
        <div id="logo" className="font-Nue text-2xl"><h1>{title}</h1></div>
        <div id="navlinks" className="flex justify-center text-white gap-20 items-center font-Nue font-weight: 600;">
            <h4 className="">Home</h4>
            <h4>About</h4>
            <h4>Login</h4>
        </div>
        <div id="dot" className="h-10 w-10 bg-black rounded-full overflow-hidden flex justify-center items-center">
            <img className="border-black " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOVOH4NHf85lJfAD7WCeOrqx3gvTLWl5eVQ&s" alt="" />
        </div>
    </div>
</div>
}