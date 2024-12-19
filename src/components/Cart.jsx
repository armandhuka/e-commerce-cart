import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                <div>
                  <p>{item.title}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => onRemoveFromCart(item.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
