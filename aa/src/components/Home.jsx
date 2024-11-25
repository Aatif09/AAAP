import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [message, setMessage] = useState("Welcome to the Product Store!");
  const navigate = useNavigate();

  // Example of setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Explore our Products!");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Example of setInterval
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Product Store Log: Every 5 seconds");
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => navigate("/products")}>Go to Products</button>
    </div>
  );
};

export default Home;
