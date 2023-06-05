import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [seatClass, setSeatClass] = useState("");

  const handleSearch = (e) => {
    const flight = {};
    e.preventDefault();
    fetch("http://localhost:8081/flight/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flight),
    });
  };

  return (
    <div className="search-form">
      <h1>Flight Search</h1>
      <form action="/FlightDetailsPage" onSubmit={handleSearch}>
        <div className="form-group">
          <label>Pickup Location:</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Destination Location:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Flight Date:</label>
          <input
            type="date"
            value={flightDate}
            onChange={(e) => setFlightDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Class of Seat:</label>
          <select
            value={seatClass}
            onChange={(e) => setSeatClass(e.target.value)}
          >
            <option value="economy">Economy Class</option>
            <option value="first">First Class</option>
            <option value="business">Business Class</option>
          </select>
        </div>
        <a href="/FlightDetailsPage">
          <button type="submit">Search</button>
        </a>
      </form>
    </div>
  );
};

export default SearchForm;
