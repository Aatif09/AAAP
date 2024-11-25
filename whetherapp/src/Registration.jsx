import React, { useState } from 'react';

const Registration = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email) {
      const data={
         name,email
      }
      onRegister(data);
      alert("Registered Successfully!!!");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)} required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
