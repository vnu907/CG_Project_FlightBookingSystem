import React, { useState } from 'react';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form action='/AdminDashboard'>
        <label>Username:</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <a href='/AdminDashboard'><button type="button" onClick={handleLogin}>Login</button></a>
        
      </form>
    </div>
  );
};

export default AdminLogin;
