import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function SignedInMenu({ logout }) {
  return (
    <>
      <Nav.Item>
        <NavLink onClick={logout} className="nav-link" to="/">
          Cerrar sesión
        </NavLink>
      </Nav.Item>
    </>
  );
}

export default SignedInMenu;
