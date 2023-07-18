import React, { useEffect, useState } from 'react';
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching products:", error.message));
}, []);

  return (
    <div className="products_page">
      <Helmet>
        <title>MyElement</title>
      </Helmet>
      <Navbar />
      
      {products.map((product) => (
        <div key={product.id} className="product_card">
          <img src={product.img_path} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Products;

