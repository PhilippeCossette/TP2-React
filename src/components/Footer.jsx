import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light p-4">
      <div className="container max-1200">
        <div className="row g-3">
          {/* About / Branding */}
          <div className="col-md-4 mb-4 p-0">
            <h5 className="fw-bold">Voyago</h5>
            <p className="text-muted">
              Explorez le monde avec nos forfaits de voyage exclusifs et nos
              visites guidées. Votre aventure commence ici !
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 p-0">
            <h5 className="fw-bold">Liens rapides</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/trips" className="text-dark text-decoration-none">
                  Forfaits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark text-decoration-none">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4 p-0">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>+1 234 567 890
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>info@voyago.com
            </p>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>123 Rue Principale,
              Montréal, QC
            </p>
            <div className="mt-2">
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-dark me-3 fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-top border-secondary" />

        <div className="text-center text-muted">
          &copy; {new Date().getFullYear()} Voyago. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
