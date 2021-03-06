import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; //For Routing: <Link></Link> instead of <a></a>, to="" instead of href=""
import Cart from "../components/Cart";

export default function Navbar({ url, cart, userName }) {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

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

  function executeSearch(e) {
    if (e.charCode === 13) {
      e.preventDefault();
      navigate("/search/" + search);
    }
  }

  function loggedIn(logged) {
    if (logged) {
      return (
        <>
          <Link className="nav-link" id="icon" to="/logout">
            {userName} (Kirjaudu ulos)
          </Link>
          <Link className="nav-link" id="icon" to="/manageproducts">
            Tuote
          </Link>
          <Link className="nav-link" id="icon" to="/managecategories">
            Kategoria
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link className="nav-link" id="icon" to="/login">
            Kirjaudu sisään
          </Link>
          <Link className="nav-link" id="icon" to="/register">
            Rekisteröidy
          </Link>
        </>
      );
    }
  }

  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light">
      <div id="kk_logo">
        <img
          src={require("../images/KK_Logo.jpg")}
          width="100"
          height="100"
          className="d-inline-block align-top"
        ></img>
      </div>
      <Link className="navbar-brand" id="text" to="/">
        Kiekkokulma
      </Link>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon navbar-light"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" id="text" to="/sale">
              Tarjoukset
            </Link>
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
            {userName !== "" ? loggedIn(true) : loggedIn(false)}
            <i className="navba-nav" id="icon">
              <Cart cart={cart} />
            </i>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => executeSearch(e)}
              className="form-control mr-sm-2"
              id="searchbar"
              type="search"
              placeholder="Hae"
              aria-label="Search"
            />
          </form>
        </ul>
      </div>
    </nav>
  );
}
