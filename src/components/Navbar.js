import React from 'react';
import { Link } from 'react-router-dom'; //For Routing: <Link></Link> instead of <a></a>, to="" instead of href=""

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">

      <Link class="navbar-brand" id='text' to="/">Kiekkokulma</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" id='text' href="#">Tarjoukset</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tuoteryhmät
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Kiekot</a>
              <a class="dropdown-item" href="#">Reput</a>
              <a class="dropdown-item" href="#">Korit</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link"  id='text'  href="#">Kirjaudu sisään</a>
          </li>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2" id='searchbar' type="search" placeholder="Search" aria-label="Search" /><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form>
        </ul>
      </div>

    </nav>
  )
}
