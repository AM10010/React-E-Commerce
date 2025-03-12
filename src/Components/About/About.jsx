import React from "react";
import img1 from "../../Assets/images/Side Image.png";
import img2 from "../../Assets/images/Frame 874.png";
import img3 from "../../Assets/images/Frame 875.png";
import img4 from "../../Assets/images/Frame 876.png";
import "./About.css";
import Service from "../servics/Servics";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";


const About = () => {
  return (
    <div className="container mt-5">
      {/* Our Story Section */}
      <div className="row align-items-center">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-item text-decoration-none text-black-50">Home</a>
        <span className="breadcrumb-item ">About</span>
      </nav>
        <div className="col-md-6">
          <h2>Our Story</h2>
          <p>
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={img1}
            alt="Shopping"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="row text-center my-5 stats" >
        <div className="col-md-3 ">
          <div className="p-5 border rounded item">
            <div className="store">
          <FontAwesomeIcon icon={faStore} className="fs-2 faStore" />
            </div>

            <h4>10.5k</h4>
            <p>Sellers active on our site</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-5 border rounded item">
          <div className="store">
          <FontAwesomeIcon icon={faDollar} className="fs-2 faStore" />
            </div>
            <h4>33k</h4>
            <p>Monthly Product Sale</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-5 border rounded item">
          <div className="store">
          <FontAwesomeIcon icon={faBagShopping} className="fs-2 faStore" />
            </div>
            <h4>45.5k</h4>
            <p>Customers active in our site</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="p-5 border rounded item">
          <div className="store">
          <FontAwesomeIcon icon={faSackDollar} className="fs-2 faStore" />
            </div>
            <h4>25k</h4>
            <p>Annual gross sale in our site</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="row  team-section">
        <div className="col-md-4">
          <img src={img2} alt="Tom Cruise"  />
          <h5 className="mt-3">Tom Cruise</h5>
          <p>Founder & Chairman</p>
          <FontAwesomeIcon icon={faTwitter} className="me-2 text-start" />
          <FontAwesomeIcon icon={faInstagram} className="me-2 " />
          <FontAwesomeIcon icon={faLinkedin} className="me-2 "   />

        </div>
        <div className="col-md-4">
          <img src={img3} alt="Emma Watson"  />
          <h5 className="mt-3">Emma Watson</h5>
          <p>Managing Director</p>
          <FontAwesomeIcon icon={faTwitter} className="me-2 text-start" />
          <FontAwesomeIcon icon={faInstagram} className="me-2 " />
          <FontAwesomeIcon icon={faLinkedin} className="me-2 "   /> 
        </div>
        <div className="col-md-4">
          <img src={img4} alt="Will Smith"  />
          <h5 className="mt-3">Will Smith</h5>
          <p>Product Designer</p>
          <FontAwesomeIcon icon={faTwitter} className="me-2 text-start" />
          <FontAwesomeIcon icon={faInstagram} className="me-2 " />
          <FontAwesomeIcon icon={faLinkedin} className="me-2 "   />
        </div>
      </div>

      {/* Services Section */}
      <Service />
    </div>
  );
};
export default About;