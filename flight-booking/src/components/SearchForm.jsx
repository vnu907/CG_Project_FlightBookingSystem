import React from 'react';
import "../components/SearchForm.css";


function SearchForm() {
return(
//   <div className="search container menu  section">'
//   <div className="selectionContainer grid">

//     {/* <div className="btns flex">

//       <div className="singleBtn">
//       <span>Economy</span>
//     </div>
//     <div className="singleBtn">
//       <span>Business Class</span>
//     </div>
//     <div className="singleBtn">
//       <span>First Class</span>
//     </div>
//   </div> */}
//   <div><h4>Enter Details of your Destination</h4></div>
//    <div className="searchInputs flex">
 
// <div className="singleInput flex">
//   <div className="iconDiv">
//    <i className='fa-map-marker icon'> </i>
//   </div>
//   <div className="texts">
//     <h4>Location</h4>
//     <input type="text" placeholder='Where do you want to go!' />
//   </div>
// </div>
// <div className="singleInput flex">
//   <div className="iconDiv">
//    <i className=' icon fa-users'></i>
//   </div>
//   <div className="texts">
//     <h4>Guests</h4>
//     <input type="text" placeholder='Add guests' />
//   </div>
// </div>

// <div className="singleInput flex">
//   <div className="iconDiv">
//    <fa-calendar className='icon'/>
//   </div>
//   <div className="texts">
//     <h4>Check In</h4>
//     <input type="text" placeholder='Add Date' />
//   </div>
// </div>

// <div className="singleInput flex">
//   <div className="iconDiv">
//    <fa-calendar className='icon'/>
//   </div>
//   <div className="texts">
//     <h4>Check Out</h4>
//     <input type="text" placeholder='Add Date' />
//   </div>
// </div>

// <button className='btn btnBlock flex'> Search Flights</button>

//    </div>
    
//   </div>
//   </div>
<div className="homeCard grid">
  <h4>Fill the way to fly</h4>
  <div className="locationDiv">
    <label htmlFor="locationr">Destination Location</label>
    <input type="text" placeholder="Dream Destination"/>
  </div>

  <div className="distDiv">
    <label htmlFor="distance">Pickup Location</label>
    <input type="text" placeholder="Start From"/>
  </div>

  <div className="dateDiv">
    <label htmlFor="date">Date</label>
    <input type="text" placeholder="Date"/>
  </div>

  <div className="guestDiv">
    <label htmlFor="guest">Guest</label>
    <input type="text" placeholder="No. of guests"/>
  </div>
  <button className="button">Search</button>
</div>
)

}

export default SearchForm