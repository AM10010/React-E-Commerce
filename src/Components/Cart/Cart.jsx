// import React, { useContext } from "react";
// import { CartContext } from "../Cart/CartContex";

// const Cart = () => {
//   const { cart } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul className="list-group cart-list">
//         {cart.map((item, id) => (
//           <li key={id} className="list-group-item d-flex align-items-center p-2">
//             <img
//               src={item.image}
//               className="cart-item-image me-2"
//               alt={item.title}
//             />
//             <div className="cart-item-details flex-grow-1">
//               <h6 className="mb-1">{item.title}</h6>
//               <p className="text-muted small mb-1">
//                 {item.description.substring(0, 50)}...
//               </p>
//               <strong>${item.price}</strong>
//             </div>
//             <button className="btn btn-danger btn-sm">Remove</button>
//           </li>
//         ))}
//       </ul>
      
//       )}
//     </div>
//   );
// };

// export default Cart;
import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContex";
import "./Cart.css";
import { Link } from "react-router";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);


  return (
    <div className="container mt-4">
      <h2 className="mb-3">Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Table */}
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center">
                      <img
                        src={item.image}
                        className="cart-item-image me-2"
                        alt={item.title}
                      />
                      <div className="cart-item-details">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-muted small mb-0">
                          {item.description.substring(0, 40)}...
                        </p>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <select
                        className="form-select form-select-sm"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between mb-3">
            <Link to="/product"> 
            <button className="btn btn-outline-secondary">Return To Shop</button>
            </Link>
          </div>

          {/* Coupon Input */}
          <div className="d-flex gap-2 mb-3">
            <input type="text" placeholder="Coupon Code" className="form-control" />
            <button className="btn btn-danger">Apply Coupon</button>
          </div>

          {/* Cart Total Section */}
          <div className="border p-3 rounded bg-light">
            <h5>Cart Total</h5>
            <p className="d-flex justify-content-between">
              <span>Subtotal:</span> <strong>${subtotal.toFixed(2)}</strong>
            </p>
            <p className="d-flex justify-content-between">
              <span>Shipping:</span> <strong>Free</strong>
            </p>
            <hr />
            <p className="d-flex justify-content-between">
              <span>Total:</span> <strong>${subtotal.toFixed(2)}</strong>
            </p>
            <button className="btn btn-danger w-100">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
