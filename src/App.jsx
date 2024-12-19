import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to remove item from cart
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      if (itemToRemove && itemToRemove.quantity > 1) {
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div>
      <Navbar onSearch={handleSearch} toggleCart={toggleCart} cartCount={cartItems.length} />
      {isCartOpen ? (
        <div className="cart-page">
          <button onClick={toggleCart} className="close-cart-button">Close Cart</button>
          <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
      ) : (
        <ProductList searchTerm={searchTerm} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default App;
