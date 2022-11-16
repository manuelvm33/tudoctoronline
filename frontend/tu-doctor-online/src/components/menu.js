
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">

          <Link className="nav-link active" to="/">Home</Link>

          <Link className="nav-link" to="/listaPacientes">
            Pacientes
          </Link>
          <Link className="nav-link" to="/another">
            Especialistas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
