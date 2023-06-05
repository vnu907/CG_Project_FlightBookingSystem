import React, { useEffect, useState } from "react";
import "./FlightDetailsPage.css";

const FlightDetailsPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flight details from the backend API
    fetchFlightDetails();
  }, []);

  const fetchFlightDetails = async () => {
    try {
      const response = await fetch("/api/flights"); // Replace with your backend API endpoint
      const data = await response.json();
      setFlights(data);
    } catch (error) {
      console.error("Error fetching flight details:", error);
    }
  };

  const handleBooking = (flightId) => {
    // Handle booking logic for the selected flight
    console.log("Book flight with ID:", flightId);
  };

  return (
    <div className="flight-details-page">
      <h1>Flight Details</h1>
      <table>
        <thead>
          <tr>
            <th>Pickup Location</th>
            <th>Destination Location</th>
            <th>Date of Flight</th>
            <th>Price</th>
            <th>Booking</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.pickupLocation}</td>
              <td>{flight.destinationLocation}</td>
              <td>{flight.dateOfFlight}</td>
              <td>{flight.price}</td>
              <td>
                <a href="/Start1">
                  <button onClick={() => handleBooking(flight.id)}>Book</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightDetailsPage;
