import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Signup = (props) => {
    const user=props.user
    const setuser=props.setuser
    const navigate=useNavigate()
    const [eusername,setusername]=useState()
    const [epassword,setepassword]=useState()
    const Handleinput=(event)=>{
        setusername  (event.target.value)


    }
    const HandlePassword=(eve)=>{
        setepassword(eve.target.value)

        
    }
    const adduser=()=>{
        setuser([...user,{username:eusername,password:epassword}])
        navigate("/")



    }
    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 rounded-md">
                <h1 className="font-bold text-xl" > Hey Hi  </h1>
                <p>I help you manage your activites  after you login :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input placeholder="username" className=" w-52 border border-black rounded p-1  " onChange={Handleinput}></input><br />
                    <input placeholder="Password" className=" w-52 border border-black rounded p-1 " onChange={HandlePassword}></input><br />
                    <input placeholder="confrim password" className=" w-52 border border-black p-1 rounded "></input>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={adduser}>Signup</button>
                    <p>Already have an account?<Link to={"/"} className="underline">login</Link></p>
                </div>

            </div>
        </div>

    )
}
export default Signup