import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Contact = () => {
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
    localStorage.setItem("contactForm", JSON.stringify(formData));
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
  };

  return (
    <div className="container mt-5">
      <nav className="breadcrumb">
        <a href="/" className="breadcrumb-item text-decoration-none text-black-50">Home</a>
        <span className="breadcrumb-item ">Contact</span>
      </nav>

      <div className="row">
        {/* Left Section - Contact Info */}
        <div className="col-md-4">
          <div className="card p-3 mb-3">
            <h5 >
              <i className="bi bi-telephone"></i> Call To Us
            </h5>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +989197777222</p>
          </div>

          <div className="card p-3">
            <h5 >
              <i className="bi bi-envelope"></i> Write To Us
            </h5>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customer@exclusive.com</p>
            <p>Email: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="col-md-8">
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
