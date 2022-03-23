import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">Kiekkokulma</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/*<li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
             </li>*/}
            <li class="nav-item">
              <a class="nav-link" href="#">Tarjoukset</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tuoteryhmät
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Kiekot</a>
                <a class="dropdown-item" href="#">Reput</a>
                {/*<div class="dropdown-divider"></div>*/}
                <a class="dropdown-item" href="#">Korit</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Kirjaudu sisään</a>
            </li>
            <form class="form-inline my-2 my-lg-0">
              <input
             class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
      </nav>
      
      {/*<div id="searchbar">
        <form class="mx-2 my-auto d-inline w-100">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Hae..." />
            <span class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">Hae</button>
            </span>
          </div>
        </form>
         <form class="form-horizontal my-2 my-lg-0">
          <div class="input-group">
            <input id="searchbar" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-default btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </div>
        </form> 
      </div> */}
      <section class="product-display">
          <div class="product-thumbnail"></div>
          <div class="product-thumbnail"></div>
          <div class="product-thumbnail"></div>
          <div class="product-thumbnail"></div>
          <div class="product-thumbnail"></div>
          <div class="product-thumbnail"></div>
      </section>
    <footer class="container-fluid py-1 mt-auto">
    <div class="d-flex justify-content-center p-1">
        <p class="m-0 fw-bold text-white text-center"></p>
    </div>
</footer>
</div>

  );
}

export default App;
