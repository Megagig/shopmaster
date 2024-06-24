import React, { useContext } from 'react';
import { CartContext } from './Context/CartContext';
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  const { cartList, addToCartList, removeFromCartList, getCartTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartList.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartList.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => addToCartList(item)}>Add one more</button>
              <button onClick={() => removeFromCartList(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${getCartTotal()}</h3>
    </div>
  );
};

export default Cart;
