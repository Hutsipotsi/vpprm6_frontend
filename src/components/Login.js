import React from "react";

const Login = () => {
  return (
    <form id="loginform">
      <div class="form-group row">
        <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Sähköpostiosoite</label>
        <div class="col-sm-6">
          <input type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Syötä sähköpostisi" />
          <small id="emailHelp" class="form-text text-muted">
            Emme koskaan jaa sähköpostiasi kenellekkään.
          </small>
        </div>
      </div>
      <div class="form-group row">
        <label for="exampleInputPassword1" class="col-sm-2 col-form-label">Salasana</label>
        <div class="col-sm-6">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Salasana" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-6">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" id="submitButton" class="btn btn-secondary">
            Lähetä
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
