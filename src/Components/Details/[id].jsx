import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const [product, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]); // Re-fetch the product when the id changes

  if (!product) {
    return <div>Loading...</div>; // Show loading while waiting for data
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <p className="card-text">{product.description}</p>
          <h3 className="text-primary">${product.price}</h3>
          <div className="d-flex justify-content-between mt-4">
          </div>
          <div className="mt-4 w-100 d-flex">
            <Link to="/product" className="btn btn-outline-secondary w-100">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
