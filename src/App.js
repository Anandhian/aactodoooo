


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './pages/Landing';
import Signup from './pages/Signup.';
import Login from './pages/Login';
import "./index.css"
import { useState } from 'react';



const App=()=>{
  
  const [user,setuser]=useState(
    [{
        username:"anandhi",
        password:"123"
        
    }]
)
 return(

  <div>
  <BrowserRouter>
 <Routes>
 <Route path="/" element={< Login user={user} setuser={setuser}/>}></Route>
   <Route path="/signup" element={< Signup user={user} setuser={setuser}/>}></Route>
   
   <Route path='/landing' element={<Landing/>}></Route>
 </Routes>
 </BrowserRouter>

</div>
 )
}

export default App

