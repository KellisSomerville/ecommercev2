import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/products.css";

export default function products() {
  return (
    <div className="background">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Navbar />
      <h4>OUR PRODUCTS</h4>
      <input type="text" placeholder="Search Item" className="search" />
      <Footer />
    </div>
  );
}
