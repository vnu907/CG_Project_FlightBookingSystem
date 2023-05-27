import React from 'react'
import Plane from '../components/Plane'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
function Home() {
  return (
    <>
    <Routes>
    <Route path ='/' elements={<Home/>}/> 
    <Route path ='/navbar' elements={<Navbar/>}/> 
    
    <Plane/>
    <Footer/>
    </Routes>
          </>
  )
}

export default Home