import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Custom styles
import Sideimg from "../../Assets/images/Side Image 2 (1).png";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve saved user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      navigate("/product"); // Redirect after login
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <>
     <nav className="breadcrumb container mt-5">
        <a href="/" className="breadcrumb-item text-decoration-none text-black-50">Home</a>
        <span className="breadcrumb-item ">Log In</span>
      </nav>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100">
        {/* Left - Image */}
        <div className="col-md-6 d-none d-md-block">
          <img
            src={Sideimg}  
            alt="Login"
            className="img-fluid"
          />
        </div>

        {/* Right - Login Form */}
        <div className="col-md-6 d-flex align-items-center">
            
          <div className="w-100 p-4">
            <h2 className="mb-3">Log in to <b>Exclusive</b></h2>
            <p>Enter your details below</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-danger">
                  Log In
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

