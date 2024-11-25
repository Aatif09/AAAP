import React, { useState } from "react";

const Cart = ({ cartItems, deleteFromCart, editCartItem }) => {
  const [isEditing, setIsEditing] = useState(null); // Track which item is being edited
  const [editedProduct, setEditedProduct] = useState({ name: "", price: "" }); // Temp state for edited product

  // Start editing a product
  const startEditing = (index, product) => {
    setIsEditing(index);
    setEditedProduct(product);
  };

  // Handle changes in the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Save edited product
  const saveEdit = (index) => {
    editCartItem(index, editedProduct);
    setIsEditing(null); // Exit editing mode
  };

  // Calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart yet!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {isEditing === index ? (
                <div>
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleEditChange}
                  />
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleEditChange}
                  />
                  <button onClick={() => saveEdit(index)}>Save</button>
                  <button onClick={() => setIsEditing(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  {item.name} - ${item.price}{" "}
                  <button onClick={() => startEditing(index, item)}>Edit</button>
                  <button onClick={() => deleteFromCart(index)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <div>
        <h3>Total Order Summary</h3>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Amount: ${calculateTotal()}</p>
      </div>
      
    </div>
  );
};

export default Cart;
