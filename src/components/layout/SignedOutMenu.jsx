import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

function SignedOutMenu() {
  return (
    <>
      <Nav.Item>
        <NavLink className="nav-link" to="/">
          Inicio
        </NavLink>
      </Nav.Item>
      <NavDropdown title="Iniciar sesión" id="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" to="/login/user">
          Usuario
        </NavLink>
        <NavLink className="dropdown-item" to="/login/employee">
          Empleado
        </NavLink>
      </NavDropdown>
      <Nav.Item>
        <NavLink className="nav-link" to="/register">
          Registrarse
        </NavLink>
      </Nav.Item>
    </>
  );
}

export default SignedOutMenu;
