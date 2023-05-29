import React, { useState } from 'react';
import './flightForm.css'; 

function FlightForm() {
  const [destination, setDestination] = useState('');
  const [boarding, setBoarding] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleBoardingChange = (e) => {
    setBoarding(e.target.value);
  };

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or any other action with the form data
    console.log('Destination:', destination);
    console.log('Boarding:', boarding);
    console.log('Check-in:', checkIn);
    console.log('Check-out:', checkOut);
    console.log('Guests:', guests);
  };

  return (
    <form className="flight-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          placeholder="Enter destination"
        />
      </div>
      <div className="form-group">
        <label htmlFor="boarding">Boarding Location</label>
        <input
          type="text"
          id="boarding"
          value={boarding}
          onChange={handleBoardingChange}
          placeholder="Enter boarding location"
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkIn">Check-in</label>
        <input
          type="date"
          id="checkIn"
          value={checkIn}
          onChange={handleCheckInChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkOut">Check-out</label>
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={handleCheckOutChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="guests">No. of Guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          min={1}
          placeholder="Enter number of guests"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default FlightForm;
