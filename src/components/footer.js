import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer_container">
          <div className="footer_row">
            <div className="footer_col">
              <h4>COMPANY</h4>
              <ul>
                <li>
                  <a href="/home">About Us</a>
                </li>
                <li>
                  <a href="/home">Services</a>
                </li>
                <li>
                  <a href="/home">Policies</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>FAQ</h4>
              <ul>
                <li>
                  <a href="/home">Payment Options</a>
                </li>
                <li>
                  <a href="/home">Order Status</a>
                </li>
                <li>
                  <a href="/home">Shipping</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>ONLINE SHOP</h4>
              <ul>
                <li>
                  <a href="/home">Build Your Own PC</a>
                </li>
                <li>
                  <a href="#/home">Prebuilt PCs</a>
                </li>
              </ul>
            </div>
            <div className="footer_col">
              <h4>FOLLOW US</h4>
              <div className="footer_socials">
                <a
                  href="https://www.twitch.tv/YSoSmoove"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
                <a
                  href="https://twitter.com/_YSoSmoove"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/YoSmoove"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.youtube.com/@YSoSmoove"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
