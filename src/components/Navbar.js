import React from 'react';
import { Link } from 'react-router-dom'; //For Routing: <Link></Link> instead of <a></a>, to="" instead of href=""

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">

      <Link className="navbar-brand" id='text' to="/">Kiekkokulma</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" id='text' href="#">Tarjoukset</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tuoteryhmät
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Kiekot</a>
              <a className="dropdown-item" href="#">Reput</a>
              <a className="dropdown-item" href="#">Korit</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link"  id='text'  href="#">Kirjaudu sisään</a>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2" id='searchbar' type="search" placeholder="Search" aria-label="Search" /><button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button></form>
        </ul>
      </div>

    </nav>
  )
}
