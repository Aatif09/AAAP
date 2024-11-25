import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Registration from "./components/Regisrtation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Function to handle registration and store user data in localStorage
  const handleRegistration = (username, password) => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registration successful! Please log in.");
  };

  // Function to handle login, checking credentials from localStorage
  const handleLogin = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      setIsLoggedIn(true);
      navigate("/");  // Redirect to home after login
    } else {
      alert("Invalid username or password");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);  // Set login state to false
    navigate("/login");  // Redirect to login page
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [
      ...prevItems,
      { name: product.title, price: product.price },
    ]);
  };

  const deleteFromCart = (indexToDelete) => {
    setCartItems((prevItems) =>
      prevItems.filter((item, index) => index !== indexToDelete)
    );
  };

  const editCartItem = (indexToEdit, updatedProduct) => {
    const updatedCartItems = cartItems.map((item, index) =>
      index === indexToEdit ? updatedProduct : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Registration handleRegistration={handleRegistration} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="*" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      ) : (
        <>
          <nav>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </nav>

          <button
            onClick={handleLogout}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Logout
          </button>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={<Cart cartItems={cartItems} deleteFromCart={deleteFromCart} editCartItem={editCartItem} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
