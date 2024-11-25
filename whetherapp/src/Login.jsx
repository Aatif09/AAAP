import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const navigate =useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(onLogin.email==email){
        alert("Successs");
      navigate('/whetheage');
    }
    else{
        alert("Email is wrong");  
    }
   
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
