import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
      <footer>
        <div class="footer-row">
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
              <Link to="/userGuide"> User Guide</Link>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Follow Us</h4>
            <div class="social-media">
              <a href="#">
                {" "}
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                {" "}
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                {" "}
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                {" "}
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };