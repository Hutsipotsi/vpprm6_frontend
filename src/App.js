import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
// import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/*<Header /> Header if needed */}
      <Navbar />
      <div className="container">
        
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="products" element= { <Products /> } />
        </Routes>

      </div>
      <Footer />
    </>

  );
}

export default App;
