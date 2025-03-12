import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../Cart/CartContex"; // Import Cart Context
import { Link } from "react-router-dom";
import "./product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { addToCart } = useContext(CartContext); // Access cart context

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getProductByCategory = (catName) => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  return (
    <>
      <div className="container">
        <button className="btn btn-primary mx-2" onClick={() => getProducts()}>
          All
        </button>
        {category.map((cat) => (
          <button
            className="btn btn-primary mx-2"
            key={cat}
            onClick={() => {
              getProductByCategory(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title product-title">{product.title}</h5>
                  <p className="card-text product-description">
                    {product.description.substring(0, 80)}...
                  </p>
                  <p className="product-price">${product.price}</p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/product/${product.id}`}>
                      <button className="btn btn-primary details-btn">
                        Details
                      </button>
                    </Link>
                    <button
                      className="btn btn-success add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
