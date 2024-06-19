import { useLocation } from "react-router-dom"



    import Header from "../components/Header"
    import Card from "../components/card"
    import Todocontainer from "../components/Todocontainer"
    
const Landing=()=>{
    const data=useLocation()
    
    return(
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                < Header username={data.state.user}/>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bg={"#8272DA"} Title={"23"} subtitle={"ananghi"}></Card>
                    <Card bg={"#FD6663"} Title={"chennai"} subtitle={"Nature"}></Card>
                    <Card bg={"#FCA201"} Title={"Tamilnadu"} subtitle={"Nature Place"}></Card>
                </div>
                <Todocontainer></Todocontainer>
            </div>



        </div>
      
    )

}
export default Landing