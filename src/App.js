import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/Product";
import Slider from "./Components/sliders/Slider";
import About from "./Components/About/About";
import Contact from "./Components/contact/Contact";
import { Routes, Route } from "react-router";
import ProductPage from "./Components/Details/[id]";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Cart/CartContex";
import SignupForm from "./Components/SginUp/Signup";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <ProductList />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
<Footer />
    </CartProvider>
  );
}

export default App;
