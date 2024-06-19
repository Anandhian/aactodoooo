
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = (props)=>{
    const user=props.user
    const setuser=props.setus
    const navigate=useNavigate()
   
    const [eusername,setusername]=useState()
    const [epassword,setepassword]=useState()
    const [ruser,rsetuser]=useState(true)
 
    const Handleinput=(event)=>{
        setusername  (event.target.value)


    }
    const HandlePassword=(eve)=>{
        setepassword(eve.target.value)

        
    }
    const Checkuser=()=>{
        var userfound=false
        user.forEach(function(item){
            
            if(item.username === eusername && item.password === epassword){
                console.log("success")
                userfound =true
                navigate("/landing",{state:{username:eusername}})
            }
            
        })
        if(userfound===false){
            console.log("login failed")
            rsetuser(false)
        }

    }

    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 rounded-md">
            <h1 className="font-bold text-xl">Hey Hi</h1>
            
            {ruser?<p>I help you manage your activites  after you login :)</p>:<p className="text-red-400">please sign before login</p>}
            <div className="flex flex-col gap-2 my-2">
                <input placeholder="username" className=" w-52 border border-black rounded p-1  "  onChange={Handleinput}></input><br />
                <input placeholder="Password" className=" w-52 border border-black rounded p-1 " onChange={ HandlePassword}></input><br />
               
                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={Checkuser}>Login</button>
                <p>Dont't have an account?<Link to={"/signup"} className="underline">Signup</Link></p>
            </div>

        </div>
    </div>

    )
}
export default Login