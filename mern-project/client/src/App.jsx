import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import User_dashboard from './User_dashboard'
import Detail_ad from './Detail_ad'
// import './App.css'

function App() {
  return (
    <>

    <div className='flex justify-center'>

      <Routes>
  
        <Route path="/" element={<User_dashboard />} />
        <Route path="/datail" element={<Detail_ad />} />

      </Routes>
      
    </div>
      
    </>
  )
}

export default App
