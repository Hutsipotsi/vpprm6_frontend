import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import ManageCategories from "./pages/ManageCategories";
import ManageProducts from "./pages/ManageProducts";
import SaleProducts from "./pages/SaleProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./components/Order";

const URL = 'http://localhost/vpprm6_backend/';

function App() {
  const [cart, setCart] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);

    }
    else {
      product['amount'] = 1
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }

  function emptyCart() {
    setCart([]);
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }


  return (
    <Router>
      {/*<Header /> Header if needed */}
      <div id="site-content">
        <Navbar url={URL} cart={cart} userName={userName}/>
        <div className="container" >
          <Routes>
            <Route path="/" element={<Home url={URL} addToCart={addToCart} />} />
            <Route path="/sale" element={<SaleProducts url={URL} addToCart={addToCart} />} />
            <Route path="/products/:prodcategory" element={<Products url={URL} addToCart={addToCart} />} />
            <Route path="/search/:searchPhrase" element={<Products url={URL} />} />
            <Route path="/products/:nopeus/:liito/:vakaus/:feidi" element={<Products url={URL} addToCart={addToCart} />} />
            <Route path="/order" element={<Order url={URL} cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount} emptyCart={emptyCart} />} />
            <Route path="/managecategories" element={<ManageCategories url={URL} />} />
            <Route path="/login" element={<Login url={URL} userName={userName} setUserName={setUserName} />} />
            <Route path="/logout" element={<Logout url={URL} setUserName={setUserName}/>} />
            <Route path="/manageproducts" element={<ManageProducts url={URL} />} />
            <Route path="/register" element={<Register url={URL} />} />
            <Route path="/products/" element={<Products url={URL} addToCart={addToCart} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
