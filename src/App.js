import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Header from './components/Header';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Discs from "./components/Discs";
import Bags from "./components/Bags";
import Baskets from "./components/Baskets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/*<Header /> Header if needed */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path="discs" element={<Discs />} />
            <Route path="bags" element={<Bags />} />
            <Route path="baskets" element={<Baskets />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
