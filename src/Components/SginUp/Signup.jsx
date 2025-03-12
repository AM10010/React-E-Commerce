import React, { useState } from "react";
import Sideimg from "../../Assets/images/Side Image 2 (1).png";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirect to login (You can also use React Router)
    window.location.href = "/login";
  };

  return (
    <>
 <nav className="breadcrumb container mt-5">
        <a href="/" className="breadcrumb-item text-decoration-none text-black-50">Home</a>
        <span className="breadcrumb-item ">SignUp</span>
      </nav>
    <div className=" d-flex justify-content-center align-items-center vh-100 parent">
  
  <div className="row">
    {/* Left side - Image */}
    <div className="col-md-8 d-none d-md-block img ">
      <img
        src={Sideimg}  // Replace with your actual image
        alt="Signup"
        className="img-fluid w-100"
      />
    </div>

    {/* Right side - Form */}
    <div className="col-md-4 d-flex align-items-center">
      <div className="w-100 p-4">
        <h2 className="mb-3 text-center">Create an account</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-danger w-100">
            Create Account
          </button>
        </form>


        <p className="text-center mt-3">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  </div>
</div>
    </>

  );
};

export default SignupForm;
