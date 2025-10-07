import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed-top">
      <nav className="position-relative navbar navbar-light navbar-expand-md bg-white">
        <div className="container-fluid px-4">
          <Link to="/" className="navbar-brand fw-bold text-dark fs-4">
            Voyago
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="secondary-menu collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex align-items-center gap-3">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#packages" className="nav-link">
                  Promotions
                </a>
              </li>
              <li className="nav-item">
                <a href="#destinations" className="nav-link">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link">
                  Témoignages
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex align-items-center gap-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  À propos de l'agence  
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link to="/trips" className="btn-primary">
                  Forfaits
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
