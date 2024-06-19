const Card=(props)=>{
    return(
        <div style={{backgroundColor:props.bg}} className="gap-3 px-10 py-5  flex-grow text-center rounded">
            <h1>{props.Title}</h1>
            <p>{props.subtitle}</p>

        </div>
    )
}
export default Card