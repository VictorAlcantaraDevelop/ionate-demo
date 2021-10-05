import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark shadow">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/antecedentes">
                Antecedentes Generales
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/detalles">
                Detalle de Estado de Avance
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
