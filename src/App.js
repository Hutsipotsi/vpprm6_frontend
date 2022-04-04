import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Header from './components/Header';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const URL = 'http://localhost/vpprm6_backend/';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

function addToCart(product) {
  const newCart = [...cart,product];
  setCart(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

  return (
    <Router>
      {/*<Header /> Header if needed */}
      <Navbar url={URL}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:prodcategory" element={<Products url={URL} addToCart={addToCart}/>}>
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
