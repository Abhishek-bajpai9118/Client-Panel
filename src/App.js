import React from 'react'
// import Navbar from './Component/Navbar'
import Mainpage from './Mainpage'
import { Routes, Route } from 'react-router-dom'
import Projects from './Component/Projects'





const App = () => {
  return (
    <div>
     

    {/* <Mainpage/> */}
     <Routes>
       <Route path='/' element={<Mainpage/>}/> 
      <Route path='/Projects' element={<Projects/>}/>
      {/* <Route path='/Clientpanel' element={<Clientpanel/>}/> */}
     </Routes> 
   
    
    </div>
  )
}

export default App