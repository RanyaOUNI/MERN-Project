import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import User_dashboard from './Components/User_dashboard'
import Edit_profile from './Components/Edit_profile'
// import './App.css'

function App() {
  return (
    <>

    <div className='flex justify-center'>

      <Routes>
  
        <Route path="/" element={<User_dashboard />} />
        <Route path="/edit" element={<Edit_profile />} />

      </Routes>
      
    </div>
      
    </>
  )
}

export default App
