import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ searchTerm, onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from DummyJSON API
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products); // Access the products list
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.slice(0, visibleProducts).map(product => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} style={{ height: '150px', objectFit: 'cover' }} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      {visibleProducts < filteredProducts.length && (
        <button onClick={() => setVisibleProducts(visibleProducts + 6)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ProductList;
