import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContex"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { cart = [] } = useContext(CartContext) || {}; // Prevent undefined
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand logo" href="#/">Exclusive</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center position-relative">
            <Link to="/cart" className="text-decoration-none">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
              {totalItems > 0 && ( // Show badge only if there are items
                <span className="cart-count position-absolute text-white rounded-circle p-1 bg-danger d-flex justify-content-center align-items-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
          <div>
          <Link to="/signup" className="text-decoration-none ms-3">
              <FontAwesomeIcon icon={faUser} className="user-icon" />
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
