import { Input } from "../components/ui/input"
import { Send } from "../components/ui/Send"

export const Dashboard=()=>{
    return <div className="font-Nue flex flex-col m-5">
        <div className="flex justify-between items-center text-center" id="top"> <h1 className="text-8xl">Hi User</h1>
         <h3 className="text-5xl"> Balance-$ 20000</h3></div>

        <div className="m-5">
            <Input placeholder="Search" className="m-5"></Input>
        </div>

        <div id="send">
        <Send user="Harkirat Singh"></Send>
        <Send user="Harkirat Singh"></Send>
        <Send user="Harkirat Singh"></Send>
        <Send user="Harkirat Singh"></Send>
        </div>
    </div>
}