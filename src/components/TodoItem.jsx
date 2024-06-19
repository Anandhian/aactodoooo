var Todoitem=(props)=>{
    var activityArr=props.activityArr
    var setActivityArr=props.setActivityArr
    var handleDelete=(deleteid)=>{
        var tem=activityArr.filter(function(item){
            if(item.id===deleteid){
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(tem)

    }
    
    return(
        < div className="flex justify-between ">
        <p> { props.index + 1}.{ props.item.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>

    )
}
export default Todoitem
