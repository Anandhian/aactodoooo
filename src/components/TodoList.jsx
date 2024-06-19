
import Todoitem from "./TodoItem"

const TodoList = (props) => {
  const  activityArr=props.activityArr
  const setActivityArr=props.setActivityArr
   
    return (
        <div className="bg-blue-600 flex-grow  rounded-md p-2 flex-wrap">
            <h1 className="font-bold text-xl ">Today's Activity</h1>

            
            {activityArr.length===0?<p>you have't added any activity yet</p>:" "}
            {
                activityArr.map(function (item, index) {
                    return <Todoitem id={item.id} item={item} index={index}activityArr={activityArr} setActivityArr={setActivityArr}></Todoitem>
                })
            }


        </div>
    )
}
export default TodoList