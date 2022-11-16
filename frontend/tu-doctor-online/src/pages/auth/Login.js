import React from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className="hold-transition login-page bg">
    <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
            <div className="card-header text-center">
            <Link to={"#"} className="h1">
              <b>Tú Doctor</b> Online
            </Link>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Iniciar sesión</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  id="email"
                  name="email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
                </div>
            </div>
            
        <div className="social-auth-links text-center mt-2 mb-3">
            <button type="submit"  className="btn btn-block btn-primary">
                Ingresar 
            </button>
                <Link to={"/crear-paciente"} className="btn btn-block btn-danger">
                    Registrar nuevo paciente
                </Link>
            </div>
            </form>
        </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};
export default Login;
