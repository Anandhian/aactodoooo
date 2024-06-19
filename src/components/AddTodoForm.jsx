import { useState } from "react"

const AddToForm=(props)=>{
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
      const [newactivity,setNewactivity]=useState("")
const handlechange=(event)=>{
   setNewactivity(event.target.value)
  

    
}
const Addactivity=()=>{
    setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    setNewactivity('')


}

    return(
        <div>
             <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl">
                Main Activity
            </h1>
            <div>
            <input value={newactivity} onChange={handlechange} placeholder="Next Activity?"  className=" border border-black p-1"/>
            <button onClick={Addactivity }className="border border-black bg-black text-white p-1">Add</button>
        </div>
        </div>
        </div>
    )

}
export default AddToForm