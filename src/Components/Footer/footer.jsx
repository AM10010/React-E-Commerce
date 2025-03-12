import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

import qrimg from "../../Assets/images/Qr Code.png";
import appstoreimg from "../../Assets/images/AppStore.png";
import googleplayimg from "../../Assets/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import "./Footer.css";  

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Exclusive - Subscribe Section */}
          <div className="col-md-3">
            <h5>Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-light">→</button>
            </div>
          </div>

          {/* Support Section */}
          <div className="col-md-3">
            <h5>Support</h5>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="col-md-2">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">My Account</a></li>
              <li><a href="/#" className="text-white text-decoration-none">Login / Register</a></li>
              <li><a href="/" className="text-white text-decoration-none">Cart</a></li>
              <li><a href="/" className="text-white text-decoration-none">Wishlist</a></li>
              <li><a href="/" className="text-white text-decoration-none">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="col-md-2">
            <h5>Quick Link</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/" className="text-white text-decoration-none">Terms Of Use</a></li>
              <li><a href="/" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="/" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="col-md-2">
            <h5>Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className="d-flex">
              <img src={qrimg} alt="QR Code" className="img-fluid me-2" width="80" />
              <div className="mt-2">
                <img src={googleplayimg} alt="Google Play" className="img-fluid me-2" width="100" />
                <img src={appstoreimg} alt="App Store" className="img-fluid" width="100" />
              </div>
            </div>
            <div className="social-icons mt-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="me-2 fs-5" />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="me-2 fs-5" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="me-2 fs-5" />
              <FontAwesomeIcon icon={faFacebook} size="2x" className="me-2 fs-5" /> 
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <p className="mb-0">© Copyright Rimel 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
