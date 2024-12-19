import React from 'react';

const Navbar = ({ onSearch, toggleCart, cartCount }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <nav className="navbar">
        <h1>Arman</h1>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
      <div className="cart-icon" onClick={toggleCart}>
        🛒({cartCount})
      </div>
    </nav>
  );
};

export default Navbar;
