import React from "react";
import Logo from "../images/logo.png";
import "../styles/navbar.css";

export default function navbar() {
  return (
    <nav className="navbar">
      <div className="title_and_logo">
        <h2>MYELEMENT</h2>
        <a href="/">
          <img src={Logo} alt="Site Logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/products">PRODUCTS</a>
        </li>
        <li>
          <a href="/contact">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
}
