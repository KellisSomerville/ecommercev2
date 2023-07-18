import React from "react";
import Helmet from "react-helmet";
import Img1 from "../images/img1.jpeg";
import Img2 from "../images/img2.jpeg";
import Img3 from "../images/img3.jpeg";
import Img4 from "../images/img4.jpeg";
import Img5 from "../images/img5.jpeg";
import ImageSlider from "../components/imgslider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";

export default function home() {
  const slides = [
    { url: Img1, title: "Img1" },
    { url: Img2, title: "Img2" },
    { url: Img3, title: "Img3" },
    { url: Img4, title: "Img4" },
    { url: Img5, title: "Img5" },
  ];

  const containerStyles = {
    width: "550px",
    height: "250px",
    margin: "0 auto",
  };

  return (
    <div className="home_page">
      <Helmet>
        <title>MyElement</title>
      </Helmet>
      <Navbar />
      <div className="home_container">
      <h3>THE FUTURE OF GAMING IS HERE!</h3>
      <br></br>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <br></br>
        <button className="shop_now">
          <a href="/products">SHOP NOW!</a>
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}
