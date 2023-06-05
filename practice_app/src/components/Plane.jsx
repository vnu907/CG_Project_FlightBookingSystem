// import Destination from "../components/Destination";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import React from 'react'
import "../components/Plane.css";
import Navbar from "../components/Navbar";
import video from '../assests/sky.mp4'
import aeroplane from '../assests/planetakeoff.png'
// import Trip from "../components/Trip";

function Plane() {
  return (<>
    <Navbar/>
    <div style={{width:"100vw"}} 
    className="home flex container">
        <div className="mainText">
        <h1>
LET YOUR DREAMS TAKE FLIGHT
        </h1>
        {/* Creating ever-lasting Memories With Us */}
      </div>
    
      <div className="homeImages flex">
        
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
          
             </div>
             <img src={aeroplane} className='plane' alt='plane' />
      </div>
    </div>
    </>
  );
}

export default Plane;