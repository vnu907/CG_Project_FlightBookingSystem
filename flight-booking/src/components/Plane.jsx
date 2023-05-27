// import Destination from "../components/Destination";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import React from 'react'
import "../components/Plane.css";
import Navbar from "../components/Navbar";
import video from '../assets/sky.mp4'
import aeroplane from '../assets/planetakeoff.png'
// import Trip from "../components/Trip";

function Plane() {
  return (<>
    <Navbar/>
    <div className="home flex container">
        <div className="mainText">
        <h1>Creating ever-lasting Memories With Us</h1>
      </div>
    
      <div className="homeImages flex">
        
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          
             </div>
             <img src={aeroplane} className='plane' />
      </div>
    </div>
    </>
  );
}

export default Plane;
