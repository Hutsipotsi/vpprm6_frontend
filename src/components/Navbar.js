import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //For Routing: <Link></Link> instead of <a></a>, to="" instead of href=""
import Cart from '../components/Cart';

export default function Navbar({ url, cart}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(url + "products/getproductgroups.php")
      .then((response) => {
        const json = response.data;
        setCategories(json);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);

  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" id="text" to="/">
        Kiekkokulma
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" id="text" href="#">
              Tarjoukset
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tuoteryhmät
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.map((category) => (
                <li key={category.id}>
                  {
                    <Link
                      className="dropdown-item"
                      to={"/products/" + category.id}
                    >
                      {category.name}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul>
          <li className="navbar-nav">
            <Link className="nav-link" id="icon" to="/login">
              Kirjaudu sisään
            </Link>
            <i className="navba-nav" id="icon">
              <li className="nav-item">
                Ostoskori
                <Cart cart={cart} />
                
              </li>
            </i>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              id="searchbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-secondary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </ul>
      </div>
    </nav>
  );
}
