import React, { useState } from 'react';

const AdminDashboard = () => {
  const [date, setDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [price, setprice] = useState('');
  var id=4;
  const flight={
    id,
    date,
    pickupLocation,
    dropLocation,
    price
  }
  console.log(flight);

  const handleAddFlight = () => {
    // Perform flight addition logic
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form>
        <label>Date:</label>
        <input type="text" value={date} onChange={e => setDate(e.target.value)} />

        <label>Pickup Location:</label>
        <input type="text" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />

        <label>Drop Location:</label>
        <input type="text" value={dropLocation} onChange={e => setDropLocation(e.target.value)} />

        <label>Price:</label>
        <input type="text" value={price} onChange={e => setprice(e.target.value)} />

        <button type="button" onClick={handleAddFlight}>Add Flight</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
