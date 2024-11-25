import { registerUser } from "../utils/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use the navigate hook

  const handleRegister = () => {
    if (username.trim() && password.trim()) {
      if (registerUser(username, password)) {
        alert("Registration successful!");
        navigate("/login"); // Navigate to the Login page
      } else {
        alert("Registration failed.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
