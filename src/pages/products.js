import React, { useEffect, useState } from 'react';
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
}, []);


  return (
    <>
      <Helmet>
        <title>MyElement</title>
      </Helmet>
      <div className="products_page">
        <Navbar />
        <div className="product_container">
          {products.map((product) => (
            <div key={product.id} className="product_card">
              <img src={product.img_path} />
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Products;

