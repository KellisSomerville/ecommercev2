import React, { useState } from "react";
import Helmet from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      alert("Please Enter Your Name!");
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert("Please Enter A Valid Email!");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      alert("Please Enter Valid Phone Number! (XXX-XXX-XXXX)");
      return;
    }

    if (formData.message.trim() === "") {
      alert("Please Enter A Message!");
      return;
    }
    console.log("Form Submitted Successfully!", formData);
  };

  const isValidEmail = (email) => {
    const emailReg = /^\S+@\S+\.\S+$/;
    return emailReg.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneReg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return phoneReg.test(phone);
  };

  return (
    <div className="contact_page">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>CONTACT US!</h2>
            <input
              type="text"
              className="field"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="field"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              className="field"
              placeholder="XXX-XXX-XXXX"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="field"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn">SUBMIT</button>
          </div>
        </div>
      </form>
      <Footer className="footer_contact" />
    </div>
  );
}
