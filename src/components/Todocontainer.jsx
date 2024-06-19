import AddToForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

const Todocontainer=()=>{
    const [activityArr, setActivityArr] = useState([{
        id: 1,
        activity: "Go for a walk"
    },
    {
        id: 2,
        activity: "Have a breakfast"
    },
     {
        id: 3,
        activity: "Gud morning"
    }  

    ])

    return(
        <div className="flex  gap-3 flex-wrap ">
            <AddToForm activityArr={activityArr} setActivityArr={setActivityArr}></AddToForm>
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList>
       
        </div>
    )


}
export default Todocontainer